const e=`---\r
title: Holiday palette\r
description: Seasonal color suggestions matched against what you have in stock.\r
order: 4\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - holiday\r
  - seasonal\r
  - christmas\r
  - halloween\r
  - pride\r
  - eid\r
  - diwali\r
  - palette\r
  - seasonal colours\r
  - festive filament\r
platforms:\r
  - all\r
---\r
\r
When a holiday or observance is near, Spool Hoarder can suggest seasonal colors\r
for the spool you are viewing, drawn from the filaments you already have. It is\r
part of the Color Advisor, so it appears in the same **Color Suggestions** card\r
on a spool's detail screen.\r
\r
Holiday palettes also show up in the filament picker when you add filaments to a\r
project, where they work as a filter over your in-stock spools. See\r
[Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/).\r
\r
A holiday palette only appears when the spool's own color already fits the\r
holiday's palette. A red spool will pick up Christmas and Lunar New Year; an\r
orange spool will pick up Halloween. The feature shows you the in-stock spools\r
that fill out that holiday's colors, and offers shop suggestions for the colors\r
you are missing.\r
\r
## When the palettes appear\r
\r
Most holidays surface 14 days before their date and disappear once the day\r
passes. Month-long observances (heritage months, Pride, and the like) and\r
fixed date ranges such as Hispanic Heritage Month instead use their exact start\r
and end with no lead-in. So a palette is never shown out of season.\r
\r
The 14-day window and the color-matching tolerance are built in; there are no\r
separate dials for them.\r
\r
## Turning it off\r
\r
There is no separate holiday switch. Holiday palettes are governed by the\r
**Color Advisor Suggestions** setting in **Settings → Preferences**. Switch that\r
off and both the color-theory palettes and the holiday palettes disappear. See\r
[Color Advisor](/docs/planning/color-advisor/) for the full detail.\r
\r
## Which holidays are covered\r
\r
The list spans U.S. federal holidays, heritage months, and major religious and\r
cultural observances:\r
\r
- **U.S. federal holidays** — New Year's Day, Martin Luther King Jr. Day,\r
  Washington's Birthday, Memorial Day, Juneteenth, Independence Day, Labor Day,\r
  Columbus Day, Veterans Day, Thanksgiving, and Christmas Day.\r
- **Heritage months and observances** — Black History Month, Women's History\r
  Month, Greek American, Arab American, Jewish American, AANHPI, Caribbean\r
  American, French American, Hindu, and Native American Heritage Months, plus\r
  Pride Month and Hispanic Heritage Month.\r
- **Religious and cultural** — Ramadan, Eid al-Fitr, Eid al-Adha, Easter,\r
  Passover, Nowruz, Rosh Hashanah, Yom Kippur, Hanukkah, Diwali, and Lunar New\r
  Year.\r
\r
Ramadan, Eid al-Fitr, Eid al-Adha, and Diwali follow lunar calendars, so their\r
Gregorian dates shift each year. Spool Hoarder carries fixed dates for these\r
through 2029; beyond that they stop appearing until the dates are refreshed in an\r
app update.\r
\r
## Related pages\r
\r
- [Color Advisor](/docs/planning/color-advisor/)\r
- [Spool details](/docs/inventory/spool-details/)\r
- [Preferences](/docs/settings/preferences/)\r
`;export{e as default};
