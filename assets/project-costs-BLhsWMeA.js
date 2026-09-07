const e=`---\r
title: Project costs\r
description: How a project's cost is built from the usage you logged.\r
order: 6\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - cost\r
  - price\r
  - total\r
  - spend\r
  - money\r
  - actual cost\r
  - estimate\r
  - partial\r
  - zero cost\r
  - price per gram\r
  - calculator\r
platforms:\r
  - all\r
---\r
\r
A project's cost is built from the usage you log, priced from your real spool\r
data. It is filament-only: the weight you actually used, at the price that\r
filament cost you. It is not a quote and it does not add overhead.\r
\r
## How project cost is calculated\r
\r
Each usage entry on a project is priced on its own, and the project total is the\r
sum. For one entry, Spool Hoarder looks for a per-gram price in this order:\r
\r
1. **A price captured on the entry itself.** When you log usage, a per-gram price\r
   is worked out from the spool and stored with that entry, so the entry keeps\r
   its cost even if you later edit the spool's price.\r
2. **The spool's purchase price.** If the entry has no stored price but the spool\r
   has a price, a total size, and a currency, the price is\r
   \`grams used × (spool price ÷ spool size)\`.\r
3. **Nothing.** If neither is available, the entry is unpriced and contributes\r
   nothing to the total.\r
\r
So the inputs that drive cost are the grams you log and the price and size on the\r
spools you logged them from. A project with no usage logged has no actual cost.\r
\r
## What the project shows\r
\r
The **project cost** line on a project picks one figure to display:\r
\r
- If you have saved a calculator estimate to the project, it shows that, labeled\r
  **Estimate**.\r
- Otherwise, if any usage entries are priced, it shows the **actual cost** — the\r
  real sum of what you used.\r
- Otherwise, if the project has planned filaments with required grams, it shows\r
  an **Est.** figure built from those planned grams and your current inventory\r
  prices.\r
\r
When only some of the usage entries have price data, the actual cost is marked\r
with a \`~\` to show it is partial, and an info icon notes how many of your entries\r
have price data, for example \`3/5 usage logs have price data\`.\r
\r
If entries were logged in different currencies and Spool Hoarder cannot convert\r
between them, it says the total is unavailable rather than showing a wrong\r
number.\r
\r
## Why a cost might read as zero or look wrong\r
\r
- **The spool has no price, no size, or no currency.** Entries logged from that\r
  spool are unpriced. Add a price and a total size to the spool and new entries\r
  will be priced; existing entries keep the price they captured at log time.\r
- **Every entry is unpriced.** Then no actual cost is shown at all.\r
- **The total shows as partial (\`~\`).** Some entries have price data and some do\r
  not. The figure covers only the priced entries.\r
- **You edited a spool's price after logging.** Past entries are not re-priced;\r
  they keep what was captured when you logged them.\r
\r
To fix missing prices, set the purchase price and total size on the spools you\r
used. See [Adding a spool](/docs/inventory/adding-a-spool/) and\r
[Tracking remaining weight](/docs/inventory/tracking-remaining-weight/).\r
\r
## How this differs from the calculator\r
\r
The two exist for different moments:\r
\r
- **Project cost is backward-looking and filament-only.** It is the actual\r
  weight you used, priced from your spools after the print.\r
- **The [Print cost calculator](/docs/planning/print-cost-calculator/) is\r
  forward-looking.** It estimates a planned print and can include electricity,\r
  printer wear, labor, a failure-rate margin, markup, shipping, and more, on top\r
  of the filament.\r
\r
Use **Price Project** on a project to send its planned filaments and required\r
grams to the calculator for that fuller estimate. You can also save a calculator\r
result back to the project, which then displays as the project's **Estimate**.\r
\r
For cost across your whole inventory rather than one job, see\r
[Understanding your costs](/docs/insights/understanding-your-costs/).\r
\r
## Related pages\r
\r
- [Logging filament usage](/docs/projects/logging-filament-usage/)\r
- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)\r
- [Print cost calculator](/docs/planning/print-cost-calculator/)\r
- [Understanding your costs](/docs/insights/understanding-your-costs/)\r
- [Units, currency, and language](/docs/settings/units-currency-and-language/)\r
`;export{e as default};
