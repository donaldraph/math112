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

  // ---------- Chapter 2: Annuities ----------
  {
    id: 'c2-01', chapter: 'Ch 2 · Annuities', concept: 'Amount of an annuity ($s$ factor)', tier: 1,
    stem: '$\\$1{,}000$ is deposited at the end of each year for $5$ years at $10\\%$. With $s_{\\overline{5}|10}=6.1051$, the accumulated amount $A=d\\,s_{\\overline{n}|r}$ is:',
    choices: ['$\\$6{,}105.10$', '$\\$5{,}000$', '$\\$3{,}790.79$', '$\\$6{,}715.61$'],
    answer: 0,
    explanation: '$A=d\\,s_{\\overline{5}|10}=1000(6.1051)=\\$6{,}105.10$. $\\$3{,}790.79$ is the *present* value ($d\\,a_{\\overline{5}|10}$) — that mixes up the two factors.'
  },
  {
    id: 'c2-02', chapter: 'Ch 2 · Annuities', concept: 'Present value of an annuity ($a$ factor)', tier: 1,
    stem: 'Find the present value of $\\$1{,}000$ received at the end of each year for $5$ years at $10\\%$. Use $a_{\\overline{5}|10}=3.79079$.',
    choices: ['$\\$3{,}790.79$', '$\\$5{,}000$', '$\\$6{,}105.10$', '$\\$4{,}169.87$'],
    answer: 0,
    explanation: '$p=d\\,a_{\\overline{5}|10}=1000(3.79079)=\\$3{,}790.79$. $\\$6{,}105.10$ is the future value ($d\\,s_{\\overline{5}|10}$).'
  },
  {
    id: 'c2-03', chapter: 'Ch 2 · Annuities', concept: 'Perpetuity', tier: 1,
    stem: 'A perpetuity pays $\\$500$ per year forever. At $5\\%$, its present value $p=\\dfrac{100d}{r}$ is:',
    choices: ['$\\$10{,}000$', '$\\$2{,}500$', '$\\$25{,}000$', '$\\$500$'],
    answer: 0,
    explanation: '$p=\\dfrac{d}{R-1}=\\dfrac{500}{0.05}=\\dfrac{100(500)}{5}=\\$10{,}000$. Because $R^{-n}\\to 0$, the present value of an endless stream collapses to this simple ratio.'
  },
  {
    id: 'c2-04', chapter: 'Ch 2 · Annuities', concept: '$s$ vs. $a$', tier: 2,
    stem: 'You want to accumulate a target sum by making equal periodic deposits. Which annuity factor applies?',
    choices: ['$s_{\\overline{n}|r}$ (accumulation / future value)', '$a_{\\overline{n}|r}$ (present value)', '$R^{-n}$ (single discount)', 'the perpetuity factor'],
    answer: 0,
    explanation: 'Saving up toward a future target uses the accumulation factor $s_{\\overline{n}|r}$. Rule of thumb: **saving up $\\to s$; paying off / valuing a stream today $\\to a$.**'
  },
  {
    id: 'c2-05', chapter: 'Ch 2 · Capitalized cost', concept: 'Capitalized cost ($n=1$)', tier: 2,
    stem: 'An asset costs $\\$8{,}000$ and needs $\\$500$ upkeep at the end of every year forever, at $5\\%$. Using $C=p+\\dfrac{100d}{r}$, the capitalized cost is:',
    choices: ['$\\$18{,}000$', '$\\$8{,}500$', '$\\$10{,}000$', '$\\$28{,}000$'],
    answer: 0,
    explanation: '$C=8000+\\dfrac{100(500)}{5}=8000+10000=\\$18{,}000$. The upkeep is a perpetuity worth $\\$10{,}000$ today, added to the purchase price.'
  },
  {
    id: 'c2-06', chapter: 'Ch 2 · Capitalized cost', concept: 'Capitalized cost ($n>1$)', tier: 3,
    stem: 'For replacement every $n$ periods, capitalized cost is $C=p+\\dfrac{D}{R-1}\\cdot\\dfrac{1}{s_{\\overline{n}|r}}$. Here $D$ represents the:',
    choices: ['renewal (replacement) cost, funded by a sinking fund', 'annual upkeep payment', 'present value of the asset', 'redemption value of a bond'],
    answer: 0,
    explanation: 'The term $\\dfrac{D}{R-1}\\cdot\\dfrac{1}{s_{\\overline{n}|r}}$ is the endowment that, via a sinking fund, sets aside the renewal cost $D$ each cycle forever. Equivalently $C=\\dfrac{p}{R-1}\\cdot\\dfrac{1}{a_{\\overline{n}|r}}$.'
  },

  // ---------- Chapter 3: Amortization & sinking funds ----------
  {
    id: 'c3-01', chapter: 'Ch 3 · Amortization', concept: 'Amortization payment', tier: 1,
    stem: 'A loan of $\\$10{,}000$ is amortized by $6$ equal annual payments at $2\\%$. With $\\dfrac{1}{a_{\\overline{6}|2}}=0.178526$, the payment $d=\\dfrac{p}{a_{\\overline{n}|r}}$ is:',
    choices: ['$\\$1{,}785.26$', '$\\$1{,}666.67$', '$\\$178.53$', '$\\$10{,}178.53$'],
    answer: 0,
    explanation: '$d=10000\\times 0.178526=\\$1{,}785.26$. Dividing the principal by $6$ ($\\$1{,}666.67$) ignores interest.'
  },
  {
    id: 'c3-02', chapter: 'Ch 3 · Sinking fund', concept: 'Sinking-fund deposit', tier: 1,
    stem: 'To accumulate $\\$50{,}000$ in $10$ years by equal year-end deposits at $2\\%$, use $d=\\dfrac{A}{s_{\\overline{n}|r}}$ with $\\dfrac{1}{s_{\\overline{10}|2}}=0.091327$. The deposit is:',
    choices: ['$\\$4{,}566.35$', '$\\$5{,}000$', '$\\$4{,}166.67$', '$\\$45{,}663.50$'],
    answer: 0,
    explanation: '$d=50000\\times 0.091327=\\$4{,}566.35$. Just dividing by $10$ ($\\$5{,}000$) ignores the interest the fund earns.'
  },
  {
    id: 'c3-03', chapter: 'Ch 3 · Amortization', concept: 'Outstanding balance', tier: 1,
    stem: 'In an amortized loan, the outstanding principal at any time equals:',
    choices: ['the present value of the remaining payments, $d\\,a_{\\overline{k}|r}$', 'the sum of the remaining payments', 'the original principal minus one payment', 'the future value of the payments already made'],
    answer: 0,
    explanation: 'The balance is exactly the present value of the payments still to come: $d\\,a_{\\overline{k}|r}$ for $k$ payments left. This is also the seller\'s equity.'
  },
  {
    id: 'c3-04', chapter: 'Ch 3 · Amortization', concept: 'Interest vs. principal portion', tier: 2,
    stem: 'In an amortization schedule, the interest portion of a payment equals:',
    choices: ['(period rate) $\\times$ (outstanding balance at start of period)', '(period rate) $\\times$ (original principal)', 'the payment divided by $n$', 'the payment minus the outstanding balance'],
    answer: 0,
    explanation: 'Interest is charged on the *current* (shrinking) balance: $\\text{interest}=r\\%\\times(\\text{outstanding balance})$. The principal portion is then $\\text{payment}-\\text{interest}$.'
  },
  {
    id: 'c3-05', chapter: 'Ch 3 · Amortization', concept: 'Add-on interest', tier: 2,
    stem: 'A $\\$1{,}200$ loan at $10\\%$ add-on interest for $2$ years is repaid in $24$ equal monthly payments. With total owed $=$ principal $+$ simple interest on the whole principal, each payment is:',
    choices: ['$\\$60$', '$\\$50$', '$\\$55$', '$\\$62$'],
    answer: 0,
    explanation: 'Total $=1200+\\dfrac{1200\\cdot 10\\cdot 2}{100}=1200+240=1440$; payment $=1440\\div 24=\\$60$. Charging simple interest on the full principal the whole term makes the effective rate far above $10\\%$.'
  },
  {
    id: 'c3-06', chapter: 'Ch 3 · Sinking fund', concept: 'Total periodic cost', tier: 3,
    stem: 'Under a sinking-fund plan for a debt $A$, the total periodic cost is:',
    choices: ['interest to the lender ($A\\cdot r\\%$) plus the fund deposit $d$', 'just the fund deposit $d$', 'just the interest to the lender', '$A\\div n$'],
    answer: 0,
    explanation: 'In a sinking fund you pay the lender interest only on the full principal ($A\\cdot r\\%$) each period, *and* deposit $d=\\dfrac{A}{s_{\\overline{n}|r}}$ into the fund. The periodic cost is the sum of both.'
  },
  {
    id: 'c3-07', chapter: 'Ch 3 · Amortization', concept: 'Buyer\'s / seller\'s equity', tier: 3,
    stem: 'At any point during an amortized purchase, buyer\'s equity $+$ seller\'s equity equals:',
    choices: ['the selling price', 'the outstanding balance', 'the total interest paid', 'zero'],
    answer: 0,
    explanation: 'Seller\'s equity is the outstanding balance; buyer\'s equity is the principal paid off so far. Together they always reconstruct the selling price.'
  },


];
