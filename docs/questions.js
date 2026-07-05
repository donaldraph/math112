/*
 * Math 112 — Mathematics of Finance: exam question bank.
 *
 * Each question carries an internal difficulty tier (NOT shown during the quiz):
 *   tier 1 = standard exam-level
 *   tier 2 = one extra step / a common trap
 *   tier 3 = deliberately tougher drill
 *
 * `answer` is the index of the correct entry in `choices` AS AUTHORED here.
 * The app shuffles the choices at run time, so authored order is not a hint.
 * `stem`, `choices`, and `explanation` may contain KaTeX between $...$ / $$...$$.
 */
const QUESTIONS = [
  // ---------- Chapter 1: Interest, present value, discounting ----------
  {
    id: 'c1-01', chapter: 'Ch 1 · Simple interest', concept: 'Simple interest', tier: 1,
    stem: 'Find the simple interest on $\\$5{,}000$ at $8\\%$ per year for $3$ years.',
    choices: ['$\\$1{,}200$', '$\\$6{,}200$', '$\\$400$', '$\\$1{,}157.63$'],
    answer: 0,
    explanation: 'Use $i=\\dfrac{prt}{100}=\\dfrac{5000\\cdot 8\\cdot 3}{100}=\\$1{,}200$. Do not add the principal — $\\$6{,}200$ is the amount $A$, not the interest — and do not compound (compounding would give $\\approx\\$1{,}157.63$).'
  },
  {
    id: 'c1-02', chapter: 'Ch 1 · Simple interest', concept: 'Amount at simple interest', tier: 1,
    stem: '$\\$2{,}000$ is invested at $6\\%$ simple interest for $2$ years. Find the amount $A$.',
    choices: ['$\\$2{,}240$', '$\\$240$', '$\\$2{,}120$', '$\\$2{,}247.20$'],
    answer: 0,
    explanation: '$A=p\\left(1+\\dfrac{rt}{100}\\right)=2000(1+0.12)=\\$2{,}240$. $\\$240$ is only the interest; $\\$2{,}247.20$ would be the compound-interest amount $2000(1.06)^2$.'
  },
  {
    id: 'c1-03', chapter: 'Ch 1 · Compound interest', concept: 'Compound amount', tier: 1,
    stem: 'Find the amount when $\\$1{,}000$ is invested at $5\\%$ compounded annually for $3$ years. Use $A=pR^{n}$.',
    choices: ['$\\$1{,}157.63$', '$\\$1{,}150$', '$\\$1{,}102.50$', '$\\$1{,}276.28$'],
    answer: 0,
    explanation: '$R=1.05$, so $A=1000(1.05)^3=1000(1.157625)=\\$1{,}157.63$. Simple interest would give $1000(1.15)=\\$1{,}150$; $\\$1{,}102.50$ is only $2$ years.'
  },
  {
    id: 'c1-04', chapter: 'Ch 1 · Compound interest', concept: 'Rate & period conversion', tier: 1,
    stem: 'A nominal rate of $16\\%$ compounded quarterly has, per conversion period within one year, a rate $r$ and number of periods $n$ of:',
    choices: ['$r=4\\%,\\ n=4$', '$r=16\\%,\\ n=4$', '$r=4\\%,\\ n=1$', '$r=16\\%,\\ n=1$'],
    answer: 0,
    explanation: 'Convert both: rate per period $=16\\div 4=4\\%$, and $n=\\text{years}\\times\\text{frequency}=1\\times4=4$. This double conversion is the single most common exam error.'
  },
  {
    id: 'c1-05', chapter: 'Ch 1 · Discounting', concept: 'Sales / trade discount', tier: 1,
    stem: 'An item priced $\\$1{,}200$ is offered at a $15\\%$ trade discount. Using $S=S_0\\left(1-\\dfrac{r}{100}\\right)$, the sale price is:',
    choices: ['$\\$1{,}020$', '$\\$180$', '$\\$1{,}380$', '$\\$1{,}050$'],
    answer: 0,
    explanation: '$S=1200(1-0.15)=1200(0.85)=\\$1{,}020$. $\\$180$ is the discount amount itself; $\\$1{,}380$ mistakenly adds it.'
  },
  {
    id: 'c1-06', chapter: 'Ch 1 · Simple interest', concept: 'Day-count convention', tier: 1,
    stem: 'For ordinary (banker\'s) simple interest, the time for $90$ days is taken as:',
    choices: ['$\\dfrac{90}{360}$', '$\\dfrac{90}{365}$', '$\\dfrac{360}{90}$', '$\\dfrac{90}{12}$'],
    answer: 0,
    explanation: 'Ordinary/banker\'s interest uses a $360$-day year, so $t=\\dfrac{90}{360}$. Exact interest would use $\\dfrac{90}{365}$. The wording of the problem tells you which.'
  },
  {
    id: 'c1-07', chapter: 'Ch 1 · Discounting', concept: 'True discount (present value)', tier: 2,
    stem: 'A debt of $\\$2{,}240$ is due in $2$ years. At $6\\%$ simple interest, find its present value by true discount.',
    choices: ['$\\$2{,}000$', '$\\$1{,}971.20$', '$\\$2{,}508.80$', '$\\$1{,}120$'],
    answer: 0,
    explanation: 'True discount: $p=\\dfrac{A}{1+rt/100}=\\dfrac{2240}{1.12}=\\$2{,}000$. Note that banker\'s discount, $2240(1-0.12)=\\$1{,}971.20$, gives a *larger* discount because it charges on the maturity value.'
  },
  {
    id: 'c1-08', chapter: 'Ch 1 · Discounting', concept: 'True vs. banker\'s discount', tier: 2,
    stem: 'For the same maturity value, time, and rate, which is larger — banker\'s discount or true discount?',
    choices: ['Banker\'s discount', 'True discount', 'They are always equal', 'It depends on the principal'],
    answer: 0,
    explanation: 'Banker\'s discount is charged on the maturity value $A$, while true discount is charged on the smaller present value $p<A$. So banker\'s discount is always the larger of the two.'
  },
  {
    id: 'c1-09', chapter: 'Ch 1 · Compound interest', concept: 'Effective (APR) rate', tier: 2,
    stem: 'Find the effective annual rate of $16\\%$ compounded quarterly. Use $e=100\\left(R^{n}-1\\right)$ with $R=1.04,\\ n=4$.',
    choices: ['$\\approx 17\\%$', '$16\\%$', '$4\\%$', '$16.32\\%$'],
    answer: 0,
    explanation: '$e=100\\big((1.04)^4-1\\big)=100(1.16986-1)\\approx 17\\%$. So "$16\\%$ quarterly" actually earns about $17\\%$ a year — the effective rate exceeds the nominal rate.'
  },
  {
    id: 'c1-10', chapter: 'Ch 1 · Compound interest', concept: 'Solving for time with logs', tier: 3,
    stem: 'How long (to $1$ d.p.) for money to double at $5\\%$ compounded annually? Use $n=\\dfrac{\\log 2}{\\log 1.05}$.',
    choices: ['$14.2$ years', '$20$ years', '$7.2$ years', '$13.5$ years'],
    answer: 0,
    explanation: 'From $A=pR^n$ with $A/p=2$: $n=\\dfrac{\\log 2}{\\log 1.05}=\\dfrac{0.30103}{0.021189}\\approx 14.2$ years.'
  },
  {
    id: 'c1-11', chapter: 'Ch 1 · Discounting', concept: 'Discount rate vs. interest rate', tier: 3,
    stem: 'A discount rate and an interest rate are related by $d=\\dfrac{r}{1+rm}$ (with $m=t/100>0$). For positive time, the discount rate $d$ is always:',
    choices: ['less than the interest rate $r$', 'greater than the interest rate $r$', 'equal to the interest rate $r$', 'unrelated to $r$'],
    answer: 0,
    explanation: 'Since $1+rm>1$, the fraction $\\dfrac{r}{1+rm}<r$. The discount rate is applied to the larger maturity value, so it is set below the interest rate to describe the same time value.'
  },


];
