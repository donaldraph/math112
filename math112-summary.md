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

