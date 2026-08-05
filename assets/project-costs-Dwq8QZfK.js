const e=`---
title: Project costs
description: How a project's cost is built from the usage you logged.
order: 6
status: published
updated: 2026-08-04
keywords:
  - cost
  - price
  - total
  - spend
  - money
  - actual cost
  - estimate
  - partial
  - zero cost
  - price per gram
  - calculator
platforms:
  - all
---

A project's cost is built from the usage you log, priced from your real spool
data. It is filament-only: the weight you actually used, at the price that
filament cost you. It is not a quote and it does not add overhead.

## How project cost is calculated

Each usage entry on a project is priced on its own, and the project total is the
sum. For one entry, Spool Hoarder looks for a per-gram price in this order:

1. **A price captured on the entry itself.** When you log usage, a per-gram price
   is worked out from the spool and stored with that entry, so the entry keeps
   its cost even if you later edit the spool's price.
2. **The spool's purchase price.** If the entry has no stored price but the spool
   has a price, a total size, and a currency, the price is
   \`grams used × (spool price ÷ spool size)\`.
3. **Nothing.** If neither is available, the entry is unpriced and contributes
   nothing to the total.

So the inputs that drive cost are the grams you log and the price and size on the
spools you logged them from. A project with no usage logged has no actual cost.

## What the project shows

The **project cost** line on a project picks one figure to display:

- If you have saved a calculator estimate to the project, it shows that, labelled
  **Estimate**.
- Otherwise, if any usage entries are priced, it shows the **actual cost** — the
  real sum of what you used.
- Otherwise, if the project has planned filaments with required grams, it shows
  an **Est.** figure built from those planned grams and your current inventory
  prices.

When only some of the usage entries have price data, the actual cost is marked
with a \`~\` to show it is partial, and an info icon notes how many of your entries
have price data, for example \`3/5 usage logs have price data\`.

If entries were logged in different currencies and Spool Hoarder cannot convert
between them, it says the total is unavailable rather than showing a wrong
number.

## Why a cost might read as zero or look wrong

- **The spool has no price, no size, or no currency.** Entries logged from that
  spool are unpriced. Add a price and a total size to the spool and new entries
  will be priced; existing entries keep the price they captured at log time.
- **Every entry is unpriced.** Then no actual cost is shown at all.
- **The total shows as partial (\`~\`).** Some entries have price data and some do
  not. The figure covers only the priced entries.
- **You edited a spool's price after logging.** Past entries are not re-priced;
  they keep what was captured when you logged them.

To fix missing prices, set the purchase price and total size on the spools you
used. See [Adding a spool](/docs/inventory/adding-a-spool/) and
[Tracking remaining weight](/docs/inventory/tracking-remaining-weight/).

## How this differs from the calculator

The two exist for different moments:

- **Project cost is backwards-looking and filament-only.** It is the actual
  weight you used, priced from your spools after the print.
- **The [Print cost calculator](/docs/planning/print-cost-calculator/) is
  forwards-looking.** It estimates a planned print and can include electricity,
  printer wear, labour, a failure-rate margin, markup, shipping, and more, on top
  of the filament.

Use **Price Project** on a project to send its planned filaments and required
grams to the calculator for that fuller estimate. You can also save a calculator
result back to the project, which then displays as the project's **Estimate**.

For cost across your whole inventory rather than one job, see
[Understanding your costs](/docs/insights/understanding-your-costs/).

## Related pages

- [Logging filament usage](/docs/projects/logging-filament-usage/)
- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)
- [Print cost calculator](/docs/planning/print-cost-calculator/)
- [Understanding your costs](/docs/insights/understanding-your-costs/)
- [Units, currency, and language](/docs/settings/units-currency-and-language/)
`;export{e as default};
