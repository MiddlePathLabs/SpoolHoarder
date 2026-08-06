const e=`---
title: Adding filaments to a project
description: Assign the spools and planned grams a print is meant to use.
order: 2
status: published
updated: 2026-08-04
keywords:
  - filament
  - add filament
  - assign spool
  - planned grams
  - required weight
  - multi colour
  - multi-color
  - multicolor
  - picker
  - suggestions
  - color advisor
platforms:
  - all
---

The filaments on a project are your plan: the spools, colors, and amounts a
print is meant to use. They are separate from the usage you log afterward, so
you can plan first and record reality once the print is done.

## Adding a filament

1. Open the project.
2. Tap **Add Filament**. On a wide window it is a quick action near the top of
   the overview; on a phone it is in the filaments area.
3. The filament picker lists your inventory. Tap a filament to select it, and
   tap again to clear it. You can select several at once.
4. For each selected filament you can enter a **required weight** in grams. This
   is the amount you expect that filament to cover. It is optional, and it must
   be greater than zero if you fill it in.
5. Confirm to add them to the project.

You can also add filaments while creating a project. See
[Creating a project](/docs/projects/creating-a-project/).

## Choosing a spool

The picker is built from the spools actually in your inventory. Spools that are
identical in brand, material, color, and color code are shown as a single
entry, so a full shelf of the same filament does not clutter the list. Use the
**Search** box to filter by brand, material, or color.

Each filament you add remembers the specific spool it came from. When you later
[log usage](/docs/projects/logging-filament-usage/), Spool Hoarder automatically
pre-selects the spool on your project that matches the filament's brand,
material, and color.

## What planned grams affect

The **required weight** you enter is what turns a plan into something you can
check against stock and price:

- **Stock warnings.** If the matching spools in inventory cannot cover the
  required weight, the project warns you, for example
  "Need 350g more, only 200g in stock". If the filament is tied to one specific
  spool, that spool's remaining weight is checked too.
- **Estimated cost.** Planned grams are priced from the spools in your inventory
  to give an estimated spend before you print. See
  [Project costs](/docs/projects/project-costs/).
- **Price Project.** The required weights are sent to the
  [Print cost calculator](/docs/planning/print-cost-calculator/) to produce a
  fuller estimate.

Leave the required weight blank if you only want to record what a color is, not
how much it should use.

## Multi-color and multi-material prints

Add one filament entry for each color or material in the print. A two-color
print has two filaments; a print that mixes PLA and PETG has one of each. Every
entry can point at its own spool and carry its own required weight, so the stock
and cost checks work per material.

## Where color suggestions come from

Once the project has at least one filament, the picker shows a **Suggestions**
drawer with complementary colors. These come from two places:

- The [Color advisor](/docs/planning/color-advisor/), which suggests pairings
  based on color theory and the filaments already on the project.
- Seasonal [Holiday palettes](/docs/planning/holiday-palette/), when a holiday
  is near and your inventory supports the palette.

Suggestions are optional ideas, not required picks. They only appear when the
Color advisor is turned on in
[Preferences](/docs/settings/preferences/), and they are limited to a small
number at a time. Tap a suggestion chip to add that filament.

## Editing or removing a filament

- To change the planned amount, tap the filament and update the
  **Required Weight**.
- To take a filament off the project, choose remove and confirm the
  **Remove Filament?** prompt with **Remove**.

Removing a filament from the plan does not touch any usage you have already
logged, and it does not change a spool's remaining weight.

## Related pages

- [Creating a project](/docs/projects/creating-a-project/)
- [Logging filament usage](/docs/projects/logging-filament-usage/)
- [Project costs](/docs/projects/project-costs/)
- [Color advisor](/docs/planning/color-advisor/)
`;export{e as default};
