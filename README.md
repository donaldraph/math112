# Math 112 — Mathematics of Finance

Study materials for **Math 112 (Mathematics of Finance / Introduction to
Actuarial Mathematics)**, built from the course text by P.C. Nwokolo.

## Contents

| File | What it is |
|------|------------|
| `math112-summary.md` | Concept-organized study summary. Starts with a **Fast Track** of the five ideas that generate most of the exam, then every chapter with plain-language explanations, formulas, worked examples, and "why this trips people up" notes. Ends with an **Exam Tricks** section and a suggested study order. |
| `math112-summary.pdf` | Print-ready rendering of the summary (A4, math typeset). |
| `docs/` | Static **exam simulator** — a browser-based practice quiz. |

## Exam simulator

Open **`docs/index.html`** in a browser, or visit the GitHub Pages site.

- 50 multiple-choice questions spanning all six chapters (interest &
  discounting, annuities, amortization & sinking funds, bonds, depreciation,
  economics applications).
- Each question appears once per run; options are reshuffled every time so
  position is never a hint.
- A wrong answer reveals a full worked explanation, with the math typeset.
- End-of-run score is broken down by internal difficulty tier, and you can
  replay only the questions you missed.

Pure HTML/CSS/JS with no build step; math is rendered client-side with
[KaTeX](https://katex.org/) loaded from a CDN.

## Topics covered

1. Interest, present value, and discounting (simple & compound, true vs.
   banker's discount, promissory notes)
2. Annuities (accumulation and present-value factors, perpetuities,
   capitalized cost)
3. Debt extinction (amortization and sinking funds)
4. Bonds (purchase price, premium/discount, amortization schedules)
5. Depreciation (straight-line, sum-of-years'-digits, double-declining,
   fixed-rate)
6. Applications in economics (marginal analysis, elasticity, propensities to
   consume and save)
