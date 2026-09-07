const e=`---\r
title: Adding filaments to a project\r
description: Assign the spools and planned grams a print is meant to use.\r
order: 2\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - filament\r
  - add filament\r
  - assign spool\r
  - planned grams\r
  - required weight\r
  - multi colour\r
  - multi-color\r
  - multicolor\r
  - picker\r
  - suggestions\r
  - color advisor\r
platforms:\r
  - all\r
---\r
\r
The filaments on a project are your plan: the spools, colors, and amounts a\r
print is meant to use. They are separate from the usage you log afterward, so\r
you can plan first and record reality once the print is done.\r
\r
## Adding a filament\r
\r
1. Open the project.\r
2. Tap **Add Filament**. On a wide window it is a quick action near the top of\r
   the overview; on a phone it is in the filaments area.\r
3. The filament picker lists your inventory. Tap a filament to select it, and\r
   tap again to clear it. You can select several at once.\r
4. For each selected filament you can enter a **required weight** in grams. This\r
   is the amount you expect that filament to cover. It is optional, and it must\r
   be greater than zero if you fill it in.\r
5. Confirm to add them to the project.\r
\r
You can also add filaments while creating a project. See\r
[Creating a project](/docs/projects/creating-a-project/).\r
\r
## Choosing a spool\r
\r
The picker is built from the spools actually in your inventory. Spools that are\r
identical in brand, material, color, and color code are shown as a single\r
entry, so a full shelf of the same filament does not clutter the list. Use the\r
**Search** box to filter by brand, material, or color.\r
\r
Each filament you add remembers the specific spool it came from. When you later\r
[log usage](/docs/projects/logging-filament-usage/), Spool Hoarder automatically\r
pre-selects the spool on your project that matches the filament's brand,\r
material, and color.\r
\r
## What planned grams affect\r
\r
The **required weight** you enter is what turns a plan into something you can\r
check against stock and price:\r
\r
- **Stock warnings.** If the matching spools in inventory cannot cover the\r
  required weight, the project warns you, for example\r
  "Need 350g more, only 200g in stock". If the filament is tied to one specific\r
  spool, that spool's remaining weight is checked too.\r
- **Estimated cost.** Planned grams are priced from the spools in your inventory\r
  to give an estimated spend before you print. See\r
  [Project costs](/docs/projects/project-costs/).\r
- **Price Project.** The required weights are sent to the\r
  [Print cost calculator](/docs/planning/print-cost-calculator/) to produce a\r
  fuller estimate.\r
\r
Leave the required weight blank if you only want to record what a color is, not\r
how much it should use.\r
\r
## Multi-color and multi-material prints\r
\r
Add one filament entry for each color or material in the print. A two-color\r
print has two filaments; a print that mixes PLA and PETG has one of each. Every\r
entry can point at its own spool and carry its own required weight, so the stock\r
and cost checks work per material.\r
\r
## Where color suggestions come from\r
\r
Once the project has at least one filament, the picker shows a **Suggestions**\r
drawer with complementary colors. These come from two places:\r
\r
- The [Color advisor](/docs/planning/color-advisor/), which suggests pairings\r
  based on color theory and the filaments already on the project.\r
- Seasonal [Holiday palettes](/docs/planning/holiday-palette/), when a holiday\r
  is near and your inventory supports the palette.\r
\r
Suggestions are optional ideas, not required picks. They only appear when the\r
Color advisor is turned on in\r
[Preferences](/docs/settings/preferences/), and they are limited to a small\r
number at a time. Tap a suggestion chip to add that filament.\r
\r
## Editing or removing a filament\r
\r
- To change the planned amount, tap the filament and update the\r
  **Required Weight**.\r
- To take a filament off the project, choose remove and confirm the\r
  **Remove Filament?** prompt with **Remove**.\r
\r
Removing a filament from the plan does not touch any usage you have already\r
logged, and it does not change a spool's remaining weight.\r
\r
## Related pages\r
\r
- [Creating a project](/docs/projects/creating-a-project/)\r
- [Logging filament usage](/docs/projects/logging-filament-usage/)\r
- [Project costs](/docs/projects/project-costs/)\r
- [Color advisor](/docs/planning/color-advisor/)\r
`;export{e as default};
