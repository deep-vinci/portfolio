# 7-Day Prep: Mathematics for AI/ML + Statistics & Probability

**Test format:** 45 min, 30 MCQ per subject (~90 sec/question) → optimize for **fast recall + intuition + quick computation**, not deep derivations.

---

## Test reality check
- **90 sec/question.** Speed matters. Build a one-page formula sheet and drill recognition.
- "Implement from scratch" items are *learning aids*, not test tasks. Do 2-3 to cement intuition; don't burn days coding.
- High-yield MCQ topics: matrix ops, eigenvalues, derivatives/chain rule, Bayes, distributions, descriptive stats, hypothesis-test interpretation.

---

## 7-Day Schedule (~3-4 hrs/day)

### Day 1 — Linear Algebra core
- Vectors, matrices, multiplication, transpose, inverse, determinant
- Watch: 3Blue1Brown *Essence of Linear Algebra* ch. 1-6
- Drill: 15 matrix-multiplication / inverse / determinant MCQs

### Day 2 — Linear Algebra advanced
- Eigenvalues/eigenvectors, rank, null space, basis, vector spaces, orthogonality
- **PCA intuition** (eigenvectors of covariance = principal directions) — high-yield
- Norms L1/L2 → why L1 gives sparsity, L2 shrinks (regularization)
- Watch: 3Blue1Brown ch. 13-15 (eigen) + StatQuest "PCA step-by-step"

### Day 3 — Calculus
- Derivatives, partial derivatives, chain rule
- Gradient = direction of steepest ascent; directional derivatives
- Loss surfaces, local minima, saddle points
- Gradient descent update rule: **θ ← θ − α∇L(θ)** (know it cold)
- Taylor series (1st/2nd order) and link to optimization
- Watch: 3Blue1Brown *Essence of Calculus* (skim) + Khan multivariable calculus

### Day 4 — Probability
- Sample space, events, conditional probability P(A|B)
- **Bayes' theorem** — practice 5+ problems (disease-test type are classic MCQs)
- Random variables: discrete vs continuous; PMF, PDF, CDF
- Distributions: Normal, Binomial, Poisson, Bernoulli, Uniform, Exponential — **memorize mean & variance of each**
- Watch: StatQuest (each distribution) + Seeing Theory interactive

### Day 5 — Statistics
- Descriptive: mean, median, mode, variance, std, skewness, kurtosis
- CLT & Law of Large Numbers (what they say, when they apply)
- Hypothesis testing: null/alt, p-value meaning, t-test, chi-square — focus on *interpreting* results
- Correlation vs causation; Pearson (linear) vs Spearman (rank/monotonic)
- MLE vs MAP (MAP = MLE + prior); confidence intervals
- Watch: StatQuest "Hypothesis Testing," "p-values," "MLE," "Confidence Intervals"

### Day 6 — Practice & weak-spot repair
- Do 2 timed mini-mocks (15-20 Q each subject, 90 sec/Q)
- Review every miss; patch gaps
- Optional: code a Naive Bayes classifier OR plot distributions with `scipy.stats`/`seaborn` (pick ONE)

### Day 7 — Full mock + final revision
- One full 45-min, 30-Q timed run per subject
- Final pass over your one-page formula sheet
- Light review only — don't cram new material; rest before the test

---

## Best resources (free, high signal-to-noise)

**Videos (main driver — fastest intuition)**
- **3Blue1Brown** — *Essence of Linear Algebra* & *Essence of Calculus* (YouTube). Best intuition anywhere.
- **StatQuest with Josh Starmer** (YouTube) — distributions, hypothesis testing, p-values, MLE, PCA, Bayes. Perfectly scoped.

**Reference book (free, official)**
- **Mathematics for Machine Learning** — Deisenroth, Faisal, Ong. Free PDF at mml-book.github.io. Use Part I as reference, not cover-to-cover.

**Interactive**
- **Seeing Theory** — seeing-theory.brown.edu (visual probability/stats)
- **Khan Academy** — Linear Algebra, Multivariable Calculus, Statistics & Probability tracks (also practice MCQs)

**Practice MCQs**
- GeeksforGeeks — "Mathematics for Machine Learning" + "Probability and Statistics" quizzes
- Analytics Vidhya — probability/stats interview question sets (MCQ-style)

---

## Two highest-ROI moves
1. **One-page formula sheet** built as you go (means/variances of distributions, gradient-descent rule, Bayes, norms, correlation formulas). Re-reading it is your best revision.
2. **Timed practice** from Day 6. Knowing content ≠ answering in 90 sec. Mocks expose pacing problems while there's still time to fix them.
