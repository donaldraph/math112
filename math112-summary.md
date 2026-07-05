# Math 112 — Mathematics of Finance

**Study summary, organized by concept.**
Source: *Mathematics of Finance (Introduction to Actuarial Mathematics)*, P.C. Nwokolo (Immaculate Publications).

This is the whole course compressed into the parts that actually get tested. Read the **Fast Track** first — those five ideas generate most of the exam. Every worked example from the book is kept; almost all of the repetition is gone.

**Notation used throughout**

- $R = 1 + \dfrac{r}{100}$ — the growth factor per period. $r$ is the rate **per period** (already divided by frequency).
- $r\%$ means $\dfrac{r}{100}$ (a decimal). So "$2\%$" $= 0.02$.
- $s_{\overline{n}|r}$ — **accumulation** factor of an annuity (future value of 1 per period).
- $a_{\overline{n}|r}$ (written $\alpha_{\overline{n}|r}$ in the book) — **present value** factor of an annuity.
- $p$ = principal / present value, $A$ = amount / final value, $n$ = number of periods, $t$ = time in years, $d$ = periodic payment or periodic interest.

---

## Fast Track — the five things that generate the exam

Ranked by how often they appear and how many marks they unlock.

### 1. Compound interest engine: $A = pR^n$

Everything after Chapter 1 is a variation of this.

$$A = p\left(1+\tfrac{r}{100}\right)^n = pR^n \qquad p = AR^{-n}$$

- $r$ is the rate **per conversion period**, $n$ is the **number of periods** — not years. If 8% is "compounded quarterly for 5 years", then $r = 8/4 = 2$ and $n = 5\times 4 = 20$.
- Present value (discounting) is the same equation solved backwards: $p = AR^{-n}$.
- Solve for $n$ with logs: $\log(A/p) = n\log R$.

### 2. The two annuity factors: $s_{\overline{n}|r}$ and $a_{\overline{n}|r}$

$$s_{\overline{n}|r} = \frac{R^n - 1}{r\%} = \frac{(1+r\%)^n - 1}{r\%} \qquad a_{\overline{n}|r} = \frac{1 - R^{-n}}{r\%}$$

- **Future value** of a level annuity (deposit $d$ each period): $A = d\, s_{\overline{n}|r}$.
- **Present value** of a level annuity (payment $d$ each period): $p = d\, a_{\overline{n}|r}$.
- These two factors drive annuities, amortization, sinking funds, **and** bonds. Learn them cold.

### 3. Present value / discounting

Money later is worth less now. Two different worlds — do not mix them:

- **Compound world:** $p = AR^{-n}$.
- **Simple-interest world (short-term):** true discount $p = \dfrac{A}{1 + rt/100}$; banker's discount $p = A(1 - dt/100)$.

### 4. Amortization vs. sinking fund (debt extinction)

Two ways to kill a debt. They are examined side by side.

- **Amortization:** each payment covers the period's interest **plus** part of the principal. Payment $d = p / a_{\overline{n}|r}$. Outstanding balance = PV of the payments still to come.
- **Sinking fund:** you pay the lender **interest only** each period, and separately deposit into a fund that grows to the principal: deposit $d = A / s_{\overline{n}|r}$.

### 5. Bond valuation (purchase price)

$$V_B = p + I = AR^{-n} + d\,a_{\overline{n}|r} \qquad\Longleftrightarrow\qquad V_B = A + (d - Ar\%)\,a_{\overline{n}|r}$$

- $A$ = redemption value, $d$ = bond interest per period $=$ (bond rate per period) $\times$ face value, $r$ = **yield** per period, $n$ = number of coupon periods.
- If bond rate > yield → price is a **premium** (above redemption). If bond rate < yield → **discount** (below).

---

## Chapter 1 — Interest, Present Value, and Discounting

### 1.1 Simple interest

Interest accrues only on the original principal.

$$i = \frac{prt}{100} \qquad A = p\left(1 + \frac{rt}{100}\right)$$

$i$ = interest, $p$ = principal, $r$ = rate % per year, $t$ = time in **years**, $A$ = amount.

**Time from days.** Two conventions — the exam loves to switch between them:

$$t = \frac{\text{days}}{365}\ \text{(exact / actual)} \qquad t = \frac{\text{days}}{360}\ \text{(ordinary / banker's)}$$

### 1.2 Discounting

Finding what a future amount is worth **now**.

**Sales / trade discount** (a price reduction, not time value):
$$S = S_0\left(1 - \frac{r}{100}\right)$$

**True discount** — interest on the *present value*, at simple interest:
$$D = \frac{prt}{100}, \qquad p = \frac{A}{1 + rt/100}, \qquad D = A - p$$

**Banker's discount** — interest charged on the *maturity value* $A$ (so it's always a bit larger than true discount):
$$D = \frac{A\,d\,t}{100}, \qquad p = A\left(1 - \frac{dt}{100}\right), \qquad A = \frac{p}{1 - dt/100}$$
Here $d$ is the **discount rate**. Relationship between a discount rate $d$ and interest rate $r$ (with $m = t/100$):
$$d = \frac{r}{1 + rm}, \qquad r = \frac{d}{1 - dm}$$

**Promissory note.** A note has a face value, a date, a term, and (sometimes) a stated interest rate. To find proceeds when it's discounted early: (1) find the **maturity value** $A$ (face + interest to maturity), (2) apply **banker's discount** over the time from the discount date to the maturity date.

### 1.3 Compound interest

Interest earns interest.

$$A = pR^n = p\left(1 + \frac{r}{100}\right)^n, \qquad R = 1 + \frac{r}{100}$$
$$\log\frac{A}{p} = n\log R \quad\text{(solve for } n\text{)}, \qquad i = A - p = p(R^n - 1)$$

**Growing annual investment** — principal $p$ plus a fixed amount $d$ added at the end of each year:
$$A = pR^n + d\left(\frac{R^n - 1}{R - 1}\right)$$

**With withdrawals** of $d$ each period: $A = pR^n - d\,s_{\overline{n}|r}$.

**Present value / discount value under compounding:**
$$p = AR^{-n}, \qquad D = p(R^n - 1) = A(1 - R^{-n})$$

**Nominal vs. effective (APR) rate.** A nominal rate compounded $m$ times has a larger *effective* annual rate:
$$e = 100\left(R^n - 1\right) \quad\text{per year, with } R \text{ and } n \text{ the per-period figures}$$

> **Worked example (rates).** 16% compounded quarterly → per period $r = 4\%$, $n = 4$.
> Effective rate $= 100\big((1.04)^4 - 1\big) = 100(1.16986 - 1) \approx 17\%$.
> So "16% quarterly" actually earns about **17% a year**.

**Why this trips people up:** forgetting to convert the rate and periods to *per-conversion-period* before using $R^n$. "Per annum, compounded monthly" means divide the rate by 12 and multiply the years by 12 — every time.

---

## Chapter 2 — Annuities

An annuity is a **sequence of equal payments** at equal time intervals. Classified by timing (ordinary = end of period; due = start) and by term.

### 2.1–2.3 Amount (future value) of an annuity

**At simple interest** the deposits form an arithmetic-style sum. **At compound interest** (the case that matters):

$$A = d\left(\frac{R^n - 1}{R - 1}\right) = d\, s_{\overline{n}|r}, \qquad s_{\overline{n}|r} = \frac{R^n - 1}{r\%} = \frac{(1+r\%)^n - 1}{r\%}$$

$d$ = deposit each period, accumulated to just after the last deposit.

### 2.4 Present value of an annuity

$$p = d\left(\frac{1 - R^{-n}}{R - 1}\right) = d\, a_{\overline{n}|r} = A R^{-n}, \qquad a_{\overline{n}|r} = \frac{1 - R^{-n}}{r\%}$$

This is the lump sum **today** equivalent to receiving $d$ per period for $n$ periods.

### 2.5 Perpetuity

Payments that never end. Since $R^{-n} \to 0$, the present value collapses to:

$$p = \frac{d}{R - 1} = \frac{100\,d}{r}$$

### 2.6 Capitalization / capitalized cost

The total endowment needed to buy an asset **and** replace it forever.

- **Replacement every period ($n = 1$ case):**
$$C = p + \frac{d}{R - 1} = p + \frac{100\,d}{r}$$
- **Replacement every $n$ periods** (renewal cost $D$ set aside via a sinking fund):
$$C = p + \frac{D}{R - 1}\cdot\frac{1}{s_{\overline{n}|r}}, \qquad\text{equivalently}\qquad C = \frac{p}{R - 1}\cdot\frac{1}{a_{\overline{n}|r}}$$

**Why this trips people up:** confusing $s_{\overline{n}|r}$ (future value, grows the deposits) with $a_{\overline{n}|r}$ (present value, discounts the payments). Rule of thumb: **saving up → $s$; paying off → $a$.**

---

## Chapter 3 — Debt Extinction: Amortization and Sinking Funds

### 3.1 Amortization

Repay a loan $p$ with $n$ equal payments; each payment is part interest, part principal.

$$p = d\, a_{\overline{n}|r} \quad\Longrightarrow\quad d = \frac{p}{a_{\overline{n}|r}}$$

- **Interest portion** of a payment = (rate) $\times$ (outstanding balance at start of period).
- **Principal portion** = payment $-$ interest portion.
- **Outstanding principal** at any point = present value of the payments **still remaining** $= d\, a_{\overline{k}|r}$ for $k$ payments left.

**Buyer's / seller's equity.** At any moment:
$$\text{buyer's equity} + \text{seller's equity} = \text{selling price}$$
Buyer's equity = what the buyer has paid off (principal reduced); seller's equity = outstanding balance.

**Add-on interest** (a *different*, more expensive scheme):
$$\text{total owed} = \text{principal} + \text{simple interest on the whole principal}, \qquad \text{payment} = \frac{\text{total}}{n}$$
Charging simple interest on the full principal the whole term makes the *effective* rate much higher than the quoted rate.

### 3.2 Sinking fund

Pay the lender **interest only** each period; separately, build a fund that reaches the principal $A$ by maturity.

$$\text{periodic deposit } d = \frac{A}{s_{\overline{n}|r}}, \qquad \text{periodic cost} = \underbrace{(\text{interest to lender})}_{A\cdot r\%} + \underbrace{d}_{\text{fund deposit}}$$

A **sinking-fund accumulation schedule** tracks: deposit, interest earned by the fund, and the growing fund balance until it equals $A$.

Handy tabulated constants that recur in the book's examples:
$$\frac{1}{a_{\overline{6}|2}} = 0.178526, \qquad a_{\overline{20}|1} = 18.045552, \qquad \frac{1}{s_{\overline{10}|2}} = 0.091327$$

**Why this trips people up:** In amortization the borrower pays interest on a **shrinking** balance; in a sinking fund the borrower pays interest on the **full** principal the whole time (but earns interest inside the fund). They give different total costs — read which scheme the question specifies.

---

## Chapter 4 — Bonds

A bond is a long-term promissory note: the issuer pays periodic **coupon** interest and repays the redemption value at maturity.

### 4.1–4.2 Terms

| Symbol | Meaning |
|---|---|
| $f$ | **Face / par / maturity value** — printed on the bond (usually \$100 or \$1000). |
| $A$ | **Redemption value** — what's actually repaid. "Redeemable at 105" means $A = 1.05f$. At par, $A = f$. |
| $b$ | **Bond / coupon / contract rate** — sets the coupon: $d = b\% \times f$ per period. |
| $r$ | **Yield / effective / investor's rate** — the market rate the buyer actually earns. Usually $\ne b$. |
| $n$ | Number of interest periods to redemption. |
| $V_B$ | **Purchase price** = present value of the bond. |

### 4.3 Purchase price (premium and discount)

$$V_B = p + I, \qquad p = AR^{-n}\ \text{(PV of redemption)}, \qquad I = d\,a_{\overline{n}|r}\ \text{(PV of coupons)}$$

Algebraically equivalent, and usually faster:

$$\boxed{V_B = A + (d - Ar\%)\,a_{\overline{n}|r}}$$

**Premium / discount** (relative to redemption value):
$$\text{Premium} = (d - Ar\%)\,a_{\overline{n}|r} = A(b\% - r\%)\,a_{\overline{n}|r} \quad (\text{when } b > r)$$
$$\text{Discount} = (Ar\% - d)\,a_{\overline{n}|r} = A(r\% - b\%)\,a_{\overline{n}|r} \quad (\text{when } b < r)$$

When face and redemption differ (not at par), use face value $f$ for the coupon: premium $= (fb - Ar)\%\,a_{\overline{n}|r}$; discount $= (Ar - fb)\%\,a_{\overline{n}|r}$.

> **Worked example 1.** \$1000, 6% bond, redeemable in $3\tfrac12$ years, bought to yield 5% compounded semi-annually, interest paid semi-annually.
> Per period: $r = 5/2 = 2.5\%$, $n = 3.5 \times 2 = 7$. Coupon $d = 1000 \times (6/2)\% = \$30$.
>
> **(i) At par** ($A = 1000$):
> $p = 1000(1.025)^{-7} = 1000 \times 0.841265 = \$841.27$.
> $I = 30\,a_{\overline{7}|2.5} = 30 \times 6.349391 = \$190.48$.
> $V_B = 841.27 + 190.48 = \boxed{\$1031.75}$.
> Check via the shortcut: $V_B = 1000 + (30 - 25)\times 6.349391 = 1000 + 31.75 = \$1031.75$. ✓ (a **premium**, since 6% > 5%.)
>
> **(ii) Redeemable at 105%** ($A = 1050$):
> $p = 1050(1.025)^{-7} = \$883.33$; $I$ is unchanged $= \$190.48$.
> $V_B = 883.33 + 190.48 = \boxed{\$1073.81}$.

> **Worked example 2.** \$1000, 5% bond, redeemable in $3\tfrac12$ years, bought to yield **6%** semi-annually.
> $r = 3\%$, $n = 7$, $d = \$25$. At par: $p = 1000(1.03)^{-7} = 1000\times 0.813092 = \$813.09$… → this comes out **below** \$1000 (a **discount**, since 5% < 6%).

### 4.3.1 Premium amortization / discount accumulation

Each period, the coupon differs from the yield the buyer "should" earn on the book value, so the book value drifts toward redemption value:

- **Premium bond:** book value written **down** each period by (coupon $d$) $-$ (yield $\times$ book value).
- **Discount bond:** book value written **up** each period by (yield $\times$ book value) $-$ (coupon $d$).

A schedule (book's Tables 4.1 / 4.2) tracks coupon, yield interest, amortization/accumulation amount, and book value — ending exactly at $A$.

**Why this trips people up:** using the **bond rate** where the **yield rate** belongs (or vice versa). The coupon $d$ always uses the *bond* rate; the discounting factors $R^{-n}$ and $a_{\overline{n}|r}$ always use the *yield* rate.

---

## Chapter 5 — Depreciation

Decline in an asset's value over its useful life. Notation: $p$ = new cost, $s$ = scrap/salvage value, $n$ = useful life (years), $V$ = book value at time $t$.

### 5.1 Linear (straight-line) method

Equal write-off every year.

$$\text{yearly write-off} = \frac{p - s}{n}, \qquad \text{monthly write-off} = \frac{p - s}{12n}$$
$$V = p - (p - s)\frac{t}{n} \qquad\text{(if no scrap, } s = 0:\ V = p\Big(1 - \tfrac{t}{n}\Big)\text{)}$$
Amount depreciated by time $t$: $(p - s)\dfrac{t}{n}$.

> **Worked example 1.** Machine costs \$340, scrap \$75, life 5 yr.
> Monthly write-off $= \dfrac{340 - 75}{12(5)} = \dfrac{265}{60} = \$4.42$.
> Book value at 2 yr $= 340 - 265\left(\tfrac{2}{5}\right) = 340 - 106 = \$234$.

### 5.2 Sum-of-years'-digits method

Bigger write-off early. Denominator = sum of the digits $S_n = 1 + 2 + \dots + n = \dfrac{n(n+1)}{2}$.
Numerator for year $k$ is $n - k + 1$ (largest first). So:
$$\text{depreciation in year } k = (p - s)\cdot\frac{n - k + 1}{S_n}$$

> **Worked example 3.** \$340 cost, \$75 scrap, life 5. Total depreciation $= 265$, $S_5 = \tfrac{5(6)}{2} = 15$.
> Year 1: $265\times\tfrac{5}{15} = \$88.33$. Year 2: $265\times\tfrac{4}{15} = \$70.67$.
> Two-year total $= 159$ → book value $= 340 - 159 = \$181$.

> **Worked example 4.** Equipment \$61050, scrap \$9000, life 3. Total $= 52050$, $S_3 = 6$.
> Year 1: $52050\times\tfrac{3}{6} = \$26025$ (monthly $\$2168.75$). Year 2: $52050\times\tfrac{2}{6} = \$17350$ (monthly $\$1445.83$).
> Book value end of year 2 $= 61050 - (26025 + 17350) = \$17675$.

### 5.3 Double-declining-balance method

Rate is **twice** the linear rate, $\dfrac{2}{n}$, applied to the *current book value*. **Scrap value is ignored** in the calculation (depreciation could run forever).

$$\text{depreciation}_\text{year} = \frac{2}{n}\times(\text{book value at start of year})$$

> **Worked example 5.** Machine \$45150.75, life 5 → rate $= \tfrac{2}{5} = 40\%$.
> Yr 1: $0.40\times 45150.75 = 18060.30$ → BV $27090.45$.
> Yr 2: $0.40\times 27090.45 = 10836.18$ → BV $16254.27$.
> Yr 3: $0.40\times 16254.27 = 6501.71$ → BV $\$9752.56$.
> (The stated \$6000 scrap never entered the arithmetic — that's the point of the method.)

### 5.4 Fixed-rate (constant-percentage) method

Depreciate by a fixed rate $r\%$ of book value each year, but here $r$ is **solved from the data** (scrap not ignored):

$$V = p\left(1 - \frac{r}{100}\right)^t$$

Solve for the rate using cost, scrap, and life: $s = p\left(1 - \tfrac{r}{100}\right)^n$.

> **Worked example 6.** Cost \$340, scrap \$75, life 5.
> $75 = 340\left(1 - \tfrac{r}{100}\right)^5 \Rightarrow \left(1 - \tfrac{r}{100}\right)^5 = \tfrac{75}{340} \Rightarrow r \approx 26.1\%$.

> **Worked example 7.** New cost \$5425.50, value \$1953.18 after 2 yr.
> $1953.18 = 5425.50(1 - \tfrac{r}{100})^2 \Rightarrow 0.36 = (1 - \tfrac{r}{100})^2 \Rightarrow 0.6 = 1 - \tfrac{r}{100} \Rightarrow r = 40\%$.
> Book value at 3 yr $= 5425.50(0.6)^3 = \$1171.91$.

**Why this trips people up:** mixing up the four methods' treatment of scrap. **Linear** and **sum-of-years'-digits** use $(p - s)$. **Double-declining** *ignores* $s$ entirely. **Fixed-rate** uses $s$ only to *back out the rate*, then applies the rate to book value.

---

## Chapter 6 — Applications of Mathematical Methods in Economics

Calculus applied to cost, revenue, profit, elasticity, and consumption. "Marginal ___" always means **the derivative** of that quantity.

### 6.1 Marginal cost and marginal revenue

$$\text{Total revenue } R(x) = p\cdot x, \qquad \text{Profit } \pi(x) = R(x) - C(x)$$
$$\text{Marginal cost} = \frac{dC}{dx}, \qquad \text{Marginal revenue} = \frac{dR}{dx}, \qquad \text{Marginal profit} = \frac{d\pi}{dx}$$

**Maximize profit:** set $\dfrac{d\pi}{dx} = 0$ (necessary), then check $\dfrac{d^2\pi}{dx^2} < 0$ (sufficient). Equivalent test: **MC = MR** at the optimum.

> **Example 1.** $C = \tfrac12 x^2 + 3x - 20$, $R = 15x - x^2$.
> MC $= x + 3$; MR $= 15 - 2x$; profit $= R - C = 12x - \tfrac32 x^2 + 20$.

> **Example 2 (minimize average cost).** $C(q) = 8000 - 25q + 0.02q^2$.
> $\dfrac{dC}{dq} = -25 + 0.04q = 0 \Rightarrow q = 625$ units.

> **Example 3 (demand $q = 36 - 3p$).**
> Revenue $R = pq = 36p - 3p^2$. At $p = 2$: $R = 72 - 12 = \$60$.
> MR $= 36 - 6p = 0 \Rightarrow p = \$6$. Max revenue $= 36(6) - 3(6)^2 = \$108$.

> **Example 4 (max profit, cubic cost).** $C(x) = 5000 + 0.00002x^3 - 0.018x^2 + 7.4x$, price \$20.
> $P(x) = 12.6x - 5000 - 0.00002x^3 + 0.018x^2$. $\dfrac{dP}{dx} = 12.6 - 0.00006x^2 + 0.036x = 0 \Rightarrow x = 850$ (reject $-250$).
> $\dfrac{d^2P}{dx^2} = -0.00012x + 0.036 = -0.066 < 0$ at $x = 850$ → maximum. ✓

> **Example 5 (monopolist).** Demand $x = 2000 - 20p$, cost $C(x) = 5x + 0.0125x^2$.
> Inverse demand (average revenue): $p = 100 - 0.05x$.
> $R(x) = 100x - 0.05x^2$; MR $= 100 - 0.1x$. MC $= 5 + 0.025x$.
> $P(x) = 95x - 0.0625x^2$; set MR = MC: $5 + 0.025x = 100 - 0.1x \Rightarrow 0.125x = 95 \Rightarrow x = 760$.
> $\dfrac{d^2P}{dx^2} = -0.125 < 0$ → max. Total profit $= 760(95) - 0.0625(760)^2 = 72200 - 36100 = \$36100$.

**Competitive vs. monopoly.** In pure competition $\dfrac{dR}{dx} = p$ (price is constant, MR = price). A monopolist affects price by changing output, so MR $\ne p$; the profit-max condition is MR = MC.

### 6.2 Elasticity of demand and supply

Percentage change in quantity per percentage change in price:

$$e = \frac{\Delta y / y}{\Delta x / x} = \frac{\Delta y}{\Delta x}\cdot\frac{x}{y} \quad\xrightarrow{\text{continuous}}\quad e = \frac{dy}{dx}\cdot\frac{x}{y}$$

For demand $q = f(p)$:
$$e = \frac{dq}{dp}\cdot\frac{p}{q}$$

> **Example 6.** $q = 100 - 5p$, at $p = 3$: $q = 85$, $\dfrac{dq}{dp} = -5$.
> $e = \dfrac{-5(3)}{85} = \dfrac{-3}{17}$. Since $|e| < 1$, demand is **relatively inelastic**.

Reading $|e|$: $|e| > 1$ elastic, $|e| < 1$ inelastic, $|e| = 1$ unit-elastic. Demand elasticity is typically negative (price up → quantity down).

### 6.3 Marginal propensities to consume and save

With income $Y$, consumption $C$, savings $S$, and $Y = C + S$:

$$\text{MPC} = \frac{dC}{dY}, \qquad \text{MPS} = \frac{dS}{dY}, \qquad \text{MPC} + \text{MPS} = 1$$

> **Example.** $C(y) = 10 + \tfrac34 y \Rightarrow \text{MPC} = \dfrac{dC}{dy} = \tfrac34$.
> Since $Y = C + S$: $S = -10 + \tfrac14 y \Rightarrow \text{MPS} = \tfrac14$. And $\tfrac34 + \tfrac14 = 1$. ✓

**Why this trips people up:** forgetting that MPC + MPS = 1 — it's the fastest way to get one from the other, and a common check-your-work step.

---

