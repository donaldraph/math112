/*
 * Math 112 exam simulator — quiz engine.
 *
 * Design rules honoured here:
 *  - Each question appears at most once per run (the run list is a shuffled deck).
 *  - The four options are re-shuffled every time a question is shown, so the
 *    correct answer's position is never a hint.
 *  - The internal difficulty tier is NEVER surfaced during the quiz; it only
 *    appears in the end-of-run breakdown.
 *  - A wrong answer reveals the full worked explanation.
 *  - Results are broken down by tier; a "retry missed only" mode replays the
 *    exact questions the user got wrong.
 */
(function () {
  'use strict';

  var TIER_NAMES = {
    1: 'Standard',
    2: 'Harder',
    3: 'Toughest'
  };

  // --- DOM handles ---
  var el = {
    start: document.getElementById('screen-start'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results'),
    bankSize: document.getElementById('bank-size'),
    btnStart: document.getElementById('btn-start'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),
    chapterTag: document.getElementById('chapter-tag'),
    questionText: document.getElementById('question-text'),
    choices: document.getElementById('choices'),
    feedback: document.getElementById('feedback'),
    btnNext: document.getElementById('btn-next'),
    scoreHeadline: document.getElementById('score-headline'),
    tierBreakdown: document.getElementById('tier-breakdown'),
    tierNote: document.getElementById('tier-note'),
    btnRetryMissed: document.getElementById('btn-retry-missed'),
    btnRestart: document.getElementById('btn-restart')
  };

  // --- run state ---
  var deck = [];        // questions for this run, in play order
  var idx = 0;          // pointer into deck
  var answered = false; // has the current question been answered?
  var results = [];     // { question, correct: bool }
  var missed = [];      // questions answered incorrectly this run

  var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Fisher–Yates shuffle (returns a new array)
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function renderMath(node) {
    if (window.renderMathInElement) {
      window.renderMathInElement(node, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  function show(screen) {
    el.start.classList.add('hidden');
    el.quiz.classList.add('hidden');
    el.results.classList.add('hidden');
    screen.classList.remove('hidden');
  }

  // --- start a run from a given set of questions ---
  function startRun(questions) {
    deck = shuffle(questions);
    idx = 0;
    results = [];
    missed = [];
    show(el.quiz);
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    var q = deck[idx];

    // progress
    var pct = Math.round((idx / deck.length) * 100);
    el.progressFill.style.width = pct + '%';
    el.progressText.textContent = 'Question ' + (idx + 1) + ' of ' + deck.length;
    el.chapterTag.textContent = q.chapter;

    // stem
    el.questionText.innerHTML = q.stem;

    // choices — shuffle option order each time, remember which is correct
    var order = shuffle(q.choices.map(function (text, i) {
      return { text: text, isCorrect: i === q.answer };
    }));

    el.choices.innerHTML = '';
    order.forEach(function (opt, i) {
      var btn = document.createElement('button');
      btn.className = 'choice';
      btn.type = 'button';
      btn.innerHTML =
        '<span class="key">' + LETTERS[i] + '</span><span class="opt-body">' + opt.text + '</span>';
      btn.addEventListener('click', function () {
        handleAnswer(btn, opt.isCorrect, order);
      });
      el.choices.appendChild(btn);
    });

    // reset feedback / next
    el.feedback.className = 'feedback hidden';
    el.feedback.innerHTML = '';
    el.btnNext.classList.add('hidden');
    el.btnNext.textContent = (idx === deck.length - 1) ? 'See results' : 'Next question';

    renderMath(el.questionText);
    renderMath(el.choices);
  }

  function handleAnswer(clickedBtn, isCorrect, order) {
    if (answered) return;
    answered = true;
    var q = deck[idx];

    // lock all buttons and mark correct / wrong
    var buttons = el.choices.querySelectorAll('.choice');
    buttons.forEach(function (b, i) {
      b.disabled = true;
      if (order[i].isCorrect) b.classList.add('correct');
    });
    if (!isCorrect) clickedBtn.classList.add('wrong');

    results.push({ question: q, correct: isCorrect });
    if (!isCorrect) missed.push(q);

    // feedback: always confirm; on a miss, reveal the full explanation
    if (isCorrect) {
      el.feedback.className = 'feedback is-correct';
      el.feedback.innerHTML =
        '<span class="verdict ok">Correct.</span>' + q.explanation;
    } else {
      el.feedback.className = 'feedback is-wrong';
      el.feedback.innerHTML =
        '<span class="verdict no">Not quite.</span>' + q.explanation;
    }
    renderMath(el.feedback);

    el.btnNext.classList.remove('hidden');
    el.btnNext.focus();
  }

  function nextQuestion() {
    idx++;
    if (idx >= deck.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }

  function showResults() {
    el.progressFill.style.width = '100%';

    var total = results.length;
    var correct = results.filter(function (r) { return r.correct; }).length;
    var pct = total ? Math.round((correct / total) * 100) : 0;

    el.scoreHeadline.innerHTML =
      correct + ' / ' + total + ' correct &nbsp;·&nbsp; <span class="pct">' + pct + '%</span>';

    // per-tier tally
    var tiers = { 1: { c: 0, n: 0 }, 2: { c: 0, n: 0 }, 3: { c: 0, n: 0 } };
    results.forEach(function (r) {
      var t = tiers[r.question.tier];
      t.n++;
      if (r.correct) t.c++;
    });

    el.tierBreakdown.innerHTML = '';
    [1, 2, 3].forEach(function (tier) {
      var t = tiers[tier];
      if (t.n === 0) return;
      var p = Math.round((t.c / t.n) * 100);
      var row = document.createElement('div');
      row.className = 'tier-row';
      row.innerHTML =
        '<span class="tier-label">' + TIER_NAMES[tier] + '</span>' +
        '<span class="tier-track"><span class="tier-fill" style="width:' + p + '%"></span></span>' +
        '<span class="tier-score">' + t.c + '/' + t.n + '</span>';
      el.tierBreakdown.appendChild(row);
    });

    el.tierNote.textContent = missed.length
      ? 'Tiers: Standard = exam-level, Harder = one extra step, Toughest = stretch drills. ' +
        missed.length + ' to review.'
      : 'Tiers: Standard = exam-level, Harder = one extra step, Toughest = stretch drills. Clean sweep — nothing missed.';

    el.btnRetryMissed.classList.toggle('hidden', missed.length === 0);

    show(el.results);
  }

  // --- wire up ---
  el.bankSize.textContent = QUESTIONS.length;

  el.btnStart.addEventListener('click', function () { startRun(QUESTIONS); });
  el.btnNext.addEventListener('click', nextQuestion);
  el.btnRestart.addEventListener('click', function () { startRun(QUESTIONS); });
  el.btnRetryMissed.addEventListener('click', function () {
    if (missed.length) startRun(missed);
  });
})();
