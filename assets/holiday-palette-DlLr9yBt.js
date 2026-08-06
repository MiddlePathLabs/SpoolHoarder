const e=`---
title: Holiday palette
description: Seasonal color suggestions matched against what you have in stock.
order: 4
status: published
updated: 2026-08-04
keywords:
  - holiday
  - seasonal
  - christmas
  - halloween
  - pride
  - eid
  - diwali
  - palette
  - seasonal colours
  - festive filament
platforms:
  - all
---

When a holiday or observance is near, Spool Hoarder can suggest seasonal colors
for the spool you are viewing, drawn from the filaments you already have. It is
part of the Color Advisor, so it appears in the same **Color Suggestions** card
on a spool's detail screen.

A holiday palette only appears when the spool's own color already fits the
holiday's palette. A red spool will pick up Christmas and Lunar New Year; an
orange spool will pick up Halloween. The feature shows you the in-stock spools
that fill out that holiday's colors, and offers shop suggestions for the colors
you are missing.

## When the palettes appear

Most holidays surface 14 days before their date and disappear once the day
passes. Month-long observances (heritage months, Pride, and the like) and
fixed date ranges such as Hispanic Heritage Month instead use their exact start
and end with no lead-in. So a palette is never shown out of season.

The 14-day window and the color-matching tolerance are built in; there are no
separate dials for them.

## Turning it off

There is no separate holiday switch. Holiday palettes are governed by the
**Color Advisor Suggestions** setting in **Settings → Preferences**. Switch that
off and both the color-theory palettes and the holiday palettes disappear. See
[Color Advisor](/docs/planning/color-advisor/) for the full detail.

## Which holidays are covered

The list spans U.S. federal holidays, heritage months, and major religious and
cultural observances:

- **U.S. federal holidays** — New Year's Day, Martin Luther King Jr. Day,
  Washington's Birthday, Memorial Day, Juneteenth, Independence Day, Labor Day,
  Columbus Day, Veterans Day, Thanksgiving, and Christmas Day.
- **Heritage months and observances** — Black History Month, Women's History
  Month, Greek American, Arab American, Jewish American, AANHPI, Caribbean
  American, French American, Hindu, and Native American Heritage Months, plus
  Pride Month and Hispanic Heritage Month.
- **Religious and cultural** — Ramadan, Eid al-Fitr, Eid al-Adha, Easter,
  Passover, Nowruz, Rosh Hashanah, Yom Kippur, Hanukkah, Diwali, and Lunar New
  Year.

Ramadan, Eid al-Fitr, Eid al-Adha, and Diwali follow lunar calendars, so their
Gregorian dates shift each year. Spool Hoarder carries fixed dates for these
through 2029; beyond that they stop appearing until the dates are refreshed in an
app update.

## Related pages

- [Color Advisor](/docs/planning/color-advisor/)
- [Spool details](/docs/inventory/spool-details/)
- [Preferences](/docs/settings/preferences/)
`;export{e as default};
