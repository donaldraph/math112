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

