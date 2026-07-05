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

  // ---------- Chapter 4: Bonds ----------
  {
    id: 'c4-01', chapter: 'Ch 4 · Bonds', concept: 'Coupon payment', tier: 1,
    stem: 'A $\\$1{,}000$ bond has a $6\\%$ bond rate with interest paid semi-annually. The coupon $d=b\\%\\times f$ per period is:',
    choices: ['$\\$30$', '$\\$60$', '$\\$15$', '$\\$50$'],
    answer: 0,
    explanation: 'The bond rate per period is $6\\%\\div 2=3\\%$, so $d=3\\%\\times 1000=\\$30$. The coupon always uses the *bond* rate, not the yield.'
  },
  {
    id: 'c4-02', chapter: 'Ch 4 · Bonds', concept: 'Premium vs. discount', tier: 1,
    stem: 'A bond\'s coupon (bond) rate is $6\\%$ and its yield rate is $5\\%$. The bond sells at a:',
    choices: ['premium (above redemption value)', 'discount (below redemption value)', 'par (equal to redemption value)', 'price that cannot be determined'],
    answer: 0,
    explanation: 'When bond rate $>$ yield, the coupons are worth more than the market requires, so the price is a premium. If bond rate $<$ yield you get a discount.'
  },
  {
    id: 'c4-03', chapter: 'Ch 4 · Bonds', concept: 'Purchase price (shortcut)', tier: 1,
    stem: 'A $\\$1{,}000$, $6\\%$ bond redeemable at par yields $5\\%$ semi-annually, with $n=7$, $d=\\$30$, and $a_{\\overline{7}|2.5}=6.349391$. Using $V_B=A+(d-Ar\\%)a_{\\overline{n}|r}$, the price is:',
    choices: ['$\\$1{,}031.75$', '$\\$1{,}000$', '$\\$968.25$', '$\\$1{,}190.48$'],
    answer: 0,
    explanation: '$V_B=1000+(30-1000\\cdot 0.025)(6.349391)=1000+(30-25)(6.349391)=1000+31.75=\\$1{,}031.75$ — a premium, since $6\\%>5\\%$.'
  },
  {
    id: 'c4-04', chapter: 'Ch 4 · Bonds', concept: 'Redemption above par', tier: 2,
    stem: 'The same $\\$1{,}000$, $6\\%$ bond (yield $5\\%$ semi, $n=7$, $d=\\$30$) is now redeemable at $105\\%$, so $A=\\$1{,}050$. Given PV of redemption $=1050(1.025)^{-7}=\\$883.33$ and PV of coupons $=\\$190.48$, the price is:',
    choices: ['$\\$1{,}073.81$', '$\\$1{,}031.75$', '$\\$1{,}050$', '$\\$1{,}240.00$'],
    answer: 0,
    explanation: '$V_B=p+I=883.33+190.48=\\$1{,}073.81$. Raising the redemption value raises the PV of the redemption term; the coupon PV is unchanged.'
  },
  {
    id: 'c4-05', chapter: 'Ch 4 · Bonds', concept: 'Discount bond', tier: 2,
    stem: 'A $\\$1{,}000$, $5\\%$ bond is bought to yield $6\\%$. Relative to its redemption value, it is priced at a:',
    choices: ['discount (below $\\$1{,}000$)', 'premium (above $\\$1{,}000$)', 'par ($\\$1{,}000$)', 'price that cannot be determined'],
    answer: 0,
    explanation: 'Bond rate $5\\%<$ yield $6\\%$, so the coupons fall short of what the market demands and the price sits below redemption value — a discount.'
  },
  {
    id: 'c4-06', chapter: 'Ch 4 · Bonds', concept: 'Bond rate vs. yield rate', tier: 3,
    stem: 'In every bond calculation, the coupon $d$ is computed with the ___ rate, while the discount factors $R^{-n}$ and $a_{\\overline{n}|r}$ use the ___ rate.',
    choices: ['bond rate; yield rate', 'yield rate; bond rate', 'bond rate; bond rate', 'yield rate; yield rate'],
    answer: 0,
    explanation: 'Coupon $d=$ (bond rate) $\\times$ face. All discounting uses the yield rate. Swapping them is the classic bond mistake — and it flips your premium/discount sign.'
  },
  {
    id: 'c4-07', chapter: 'Ch 4 · Bonds', concept: 'Premium amortization schedule', tier: 3,
    stem: 'In a premium bond\'s amortization schedule, each period the book value is:',
    choices: ['written down toward the redemption value', 'written up toward the redemption value', 'held constant', 'written up above the face value'],
    answer: 0,
    explanation: 'A premium bond\'s book value is written *down* each period by (coupon $-$ yield$\\times$book value), converging to the redemption value at maturity. A discount bond is written *up*.'
  },

  // ---------- Chapter 5: Depreciation ----------
  {
    id: 'c5-01', chapter: 'Ch 5 · Depreciation', concept: 'Straight-line (yearly)', tier: 1,
    stem: 'A machine costs $\\$340$, scrap $\\$75$, life $5$ years. The yearly straight-line write-off $\\dfrac{p-s}{n}$ is:',
    choices: ['$\\$53$', '$\\$68$', '$\\$4.42$', '$\\$44.17$'],
    answer: 0,
    explanation: '$\\dfrac{p-s}{n}=\\dfrac{340-75}{5}=\\dfrac{265}{5}=\\$53$. Using $p$ alone ($340/5=\\$68$) forgets to subtract the scrap value.'
  },
  {
    id: 'c5-02', chapter: 'Ch 5 · Depreciation', concept: 'Straight-line (monthly)', tier: 1,
    stem: 'Same machine ($\\$340$, scrap $\\$75$, $5$ yr). The monthly straight-line write-off $\\dfrac{p-s}{12n}$ is:',
    choices: ['$\\$4.42$', '$\\$5.67$', '$\\$53$', '$\\$2.21$'],
    answer: 0,
    explanation: '$\\dfrac{265}{12(5)}=\\dfrac{265}{60}=\\$4.42$ per month.'
  },
  {
    id: 'c5-03', chapter: 'Ch 5 · Depreciation', concept: 'Straight-line book value', tier: 1,
    stem: 'For the $\\$340$ machine (scrap $\\$75$, $5$ yr), the book value after $2$ years, $V=p-(p-s)\\dfrac{t}{n}$, is:',
    choices: ['$\\$234$', '$\\$181$', '$\\$106$', '$\\$128$'],
    answer: 0,
    explanation: '$V=340-265\\left(\\dfrac{2}{5}\\right)=340-106=\\$234$. ($\\$181$ is the sum-of-years\'-digits answer — a different method.)'
  },
  {
    id: 'c5-04', chapter: 'Ch 5 · Depreciation', concept: 'Double-declining rate', tier: 1,
    stem: 'For a $5$-year asset, the double-declining-balance rate $\\dfrac{2}{n}$ is:',
    choices: ['$40\\%$', '$20\\%$', '$50\\%$', '$10\\%$'],
    answer: 0,
    explanation: 'The rate is twice the straight-line rate: $\\dfrac{2}{5}=40\\%$, applied to the current book value each year.'
  },
  {
    id: 'c5-05', chapter: 'Ch 5 · Depreciation', concept: 'Sum-of-years\'-digits (year 1)', tier: 2,
    stem: 'A $\\$340$ asset, scrap $\\$75$, life $5$ ($S_5=15$). Year-1 depreciation $(p-s)\\dfrac{n}{S_n}$ is:',
    choices: ['$\\$88.33$', '$\\$53$', '$\\$70.67$', '$\\$17.67$'],
    answer: 0,
    explanation: '$265\\times\\dfrac{5}{15}=\\$88.33$. The largest fraction ($5/15$) applies in year 1; $\\$70.67$ is the year-2 amount ($265\\times 4/15$).'
  },
  {
    id: 'c5-06', chapter: 'Ch 5 · Depreciation', concept: 'Sum-of-years\'-digits book value', tier: 2,
    stem: 'Same asset ($\\$340$, scrap $\\$75$, $5$ yr, SYD). With year-1 $=\\$88.33$ and year-2 $=\\$70.67$, the book value after $2$ years is:',
    choices: ['$\\$181$', '$\\$234$', '$\\$106$', '$\\$159$'],
    answer: 0,
    explanation: 'Two-year depreciation $=88.33+70.67=159$, so $V=340-159=\\$181$. ($\\$159$ is the depreciation, not the book value.)'
  },
  {
    id: 'c5-07', chapter: 'Ch 5 · Depreciation', concept: 'Scrap-value treatment', tier: 2,
    stem: 'Which depreciation method ignores the scrap value in its calculation?',
    choices: ['Double-declining-balance', 'Straight-line', 'Sum-of-years\'-digits', 'Fixed-rate'],
    answer: 0,
    explanation: 'Double-declining-balance applies rate $\\dfrac{2}{n}$ to book value and ignores scrap. Straight-line and SYD depreciate $(p-s)$; fixed-rate uses scrap only to back out the rate.'
  },
  {
    id: 'c5-08', chapter: 'Ch 5 · Depreciation', concept: 'Fixed-rate (solve for rate)', tier: 3,
    stem: 'An asset costing $\\$5{,}425.50$ is worth $\\$1{,}953.18$ after $2$ years. From $1953.18=5425.50\\left(1-\\dfrac{r}{100}\\right)^2$, the fixed depreciation rate is:',
    choices: ['$40\\%$', '$36\\%$', '$20\\%$', '$60\\%$'],
    answer: 0,
    explanation: '$\\left(1-\\dfrac{r}{100}\\right)^2=\\dfrac{1953.18}{5425.50}=0.36$, so $1-\\dfrac{r}{100}=0.6$ and $r=40\\%$.'
  },
  {
    id: 'c5-09', chapter: 'Ch 5 · Depreciation', concept: 'Fixed-rate book value', tier: 3,
    stem: 'With that $40\\%$ fixed rate, the book value after $3$ years, $V=5425.50(0.6)^3$, is:',
    choices: ['$\\$1{,}171.91$', '$\\$1{,}953.18$', '$\\$781.27$', '$\\$1{,}302.12$'],
    answer: 0,
    explanation: '$V=5425.50(0.6)^3=5425.50(0.216)=\\$1{,}171.91$.'
  },

  // ---------- Chapter 6: Economics applications ----------
  {
    id: 'c6-01', chapter: 'Ch 6 · Economics', concept: 'Marginal cost', tier: 1,
    stem: 'If $C(x)=\\dfrac12 x^2+3x-20$, the marginal cost $\\dfrac{dC}{dx}$ is:',
    choices: ['$x+3$', '$\\tfrac12 x+3$', '$x^2+3$', '$x-20$'],
    answer: 0,
    explanation: 'Marginal cost is the derivative: $\\dfrac{d}{dx}\\left(\\tfrac12 x^2+3x-20\\right)=x+3$. "Marginal" always means "derivative of."'
  },
  {
    id: 'c6-02', chapter: 'Ch 6 · Economics', concept: 'Marginal revenue', tier: 1,
    stem: 'For revenue $R=15x-x^2$, the marginal revenue $\\dfrac{dR}{dx}$ is:',
    choices: ['$15-2x$', '$15-x$', '$15x$', '$-2x$'],
    answer: 0,
    explanation: '$\\dfrac{dR}{dx}=15-2x$.'
  },
  {
    id: 'c6-03', chapter: 'Ch 6 · Economics', concept: 'MPC and MPS', tier: 1,
    stem: 'If the marginal propensity to consume is $\\dfrac34$, the marginal propensity to save is:',
    choices: ['$\\dfrac14$', '$\\dfrac34$', '$1$', '$\\dfrac43$'],
    answer: 0,
    explanation: 'Since $Y=C+S$, we have $\\text{MPC}+\\text{MPS}=1$, so $\\text{MPS}=1-\\dfrac34=\\dfrac14$. This identity is a fast check-your-work step.'
  },
  {
    id: 'c6-04', chapter: 'Ch 6 · Economics', concept: 'Maximizing revenue', tier: 2,
    stem: 'Demand is $q=36-3p$, so $R=36p-3p^2$. Setting $MR=36-6p=0$ gives $p=6$. The maximum revenue is:',
    choices: ['$\\$108$', '$\\$60$', '$\\$216$', '$\\$72$'],
    answer: 0,
    explanation: '$R=36(6)-3(6)^2=216-108=\\$108$. $\\$216$ forgets to subtract the second term; $\\$60$ evaluates at $p=2$.'
  },
  {
    id: 'c6-05', chapter: 'Ch 6 · Economics', concept: 'Elasticity of demand', tier: 2,
    stem: 'For $q=100-5p$ at $p=3$ (so $q=85$), the price elasticity $e=\\dfrac{dq}{dp}\\cdot\\dfrac{p}{q}$ is:',
    choices: ['$-\\dfrac{3}{17}$ (inelastic)', '$-5$', '$-\\dfrac{17}{3}$', '$-\\dfrac{3}{20}$'],
    answer: 0,
    explanation: '$e=\\dfrac{dq}{dp}\\cdot\\dfrac{p}{q}=(-5)\\dfrac{3}{85}=-\\dfrac{15}{85}=-\\dfrac{3}{17}$. Since $|e|<1$, demand is relatively inelastic. Judge elasticity by $|e|$ vs. $1$, but keep the sign.'
  },
  {
    id: 'c6-06', chapter: 'Ch 6 · Economics', concept: 'Minimizing average cost', tier: 2,
    stem: 'For $C(q)=8000-25q+0.02q^2$, minimizing by $\\dfrac{dC}{dq}=-25+0.04q=0$ gives:',
    choices: ['$q=625$ units', '$q=1250$ units', '$q=320$ units', '$q=25$ units'],
    answer: 0,
    explanation: '$-25+0.04q=0\\Rightarrow q=\\dfrac{25}{0.04}=625$ units.'
  },
  {
    id: 'c6-07', chapter: 'Ch 6 · Economics', concept: 'Monopolist output (MR=MC)', tier: 3,
    stem: 'A monopolist has demand $x=2000-20p$ (so $p=100-0.05x$) and cost $C=5x+0.0125x^2$. Setting $MR=MC$: $100-0.1x=5+0.025x$. The profit-maximizing output is:',
    choices: ['$x=760$', '$x=950$', '$x=1000$', '$x=500$'],
    answer: 0,
    explanation: '$100-0.1x=5+0.025x\\Rightarrow 95=0.125x\\Rightarrow x=760$. For a monopolist, $MR\\ne p$; the condition is $MR=MC$.'
  },
  {
    id: 'c6-08', chapter: 'Ch 6 · Economics', concept: 'Monopolist profit', tier: 3,
    stem: 'For that monopolist ($x=760$), total profit $=760(95)-0.0625(760)^2$ equals:',
    choices: ['$\\$36{,}100$', '$\\$72{,}200$', '$\\$36{,}000$', '$\\$95$'],
    answer: 0,
    explanation: '$760(95)-0.0625(760)^2=72200-36100=\\$36{,}100$.'
  },
  {
    id: 'c6-09', chapter: 'Ch 6 · Economics', concept: 'Second-order condition', tier: 3,
    stem: 'After solving $\\dfrac{d\\pi}{dx}=0$, to confirm the stationary point is a maximum you must check:',
    choices: ['$\\dfrac{d^2\\pi}{dx^2}<0$', '$\\dfrac{d^2\\pi}{dx^2}>0$', '$\\dfrac{d\\pi}{dx}>0$', '$\\pi>0$'],
    answer: 0,
    explanation: 'Setting the first derivative to zero only locates a stationary point. The sufficient condition for a maximum is $\\pi^{\\prime\\prime}(x)<0$ — often worth marks on its own.'
  },
  {
    id: 'c6-10', chapter: 'Ch 6 · Economics', concept: 'Max profit (cubic cost)', tier: 3,
    stem: 'For $C(x)=5000+0.00002x^3-0.018x^2+7.4x$ at price $\\$20$, solving $\\dfrac{d\\pi}{dx}=12.6-0.00006x^2+0.036x=0$ (rejecting the negative root) gives:',
    choices: ['$x=850$', '$x=-250$', '$x=950$', '$x=760$'],
    answer: 0,
    explanation: 'The quadratic has roots $x=850$ and $x=-250$; output can\'t be negative, so $x=850$. Then $\\pi^{\\prime\\prime}=-0.00012x+0.036=-0.066<0$ confirms a maximum.'
  }
];
