const e=`---\r
title: Units, currency, and language\r
description: How Spool Hoarder handles weight units, currency conversion, and language — including what is and is not adjustable today.\r
order: 4\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - units\r
  - grams\r
  - ounces\r
  - oz\r
  - imperial\r
  - metric\r
  - weight\r
  - currency\r
  - conversion\r
  - exchange rate\r
  - ECB\r
  - language\r
  - translation\r
  - locale\r
  - español\r
  - Spanish\r
  - French\r
  - German\r
platforms:\r
  - all\r
---\r
\r
A quick reference for three things people often look for in Settings: weight units, currency, and language. Two have controls you can change; one (units) is fixed for now.\r
\r
## Weight units\r
\r
Spool Hoarder tracks filament weight in **grams**. There is no ounces or imperial option — weights are always shown and entered in grams.\r
\r
For spools with a total capacity above 1.3 kg, the inventory displays remaining and total weight in kilograms for readability, but the underlying value is still grams. Usage logs, spool sizes, and the low-stock threshold are all in grams.\r
\r
## Currency and conversion\r
\r
Spool Hoarder is multi-currency: each price you enter is stored in the currency you typed it in. The **Reporting currency** setting in **Settings → Preferences** picks one currency used to show **informational** conversions — for example, a ballpark total across spools priced in different currencies.\r
\r
A few important points:\r
\r
- Choosing a reporting currency **does not convert or rewrite your past entries**. Original amounts keep their stored currency.\r
- Conversion uses the daily exchange rates published by the **European Central Bank**, quoted against the euro. Rates are refreshed roughly once a day and cached on your device.\r
- When rates are available, the currency picker lists the currencies the ECB publishes. If rates have not loaded yet, the picker falls back to listing all supported ISO currencies, and conversions become available once the rates arrive. A selected currency that is missing from the current rates is flagged in the picker.\r
- The reporting currency is chosen for you the first time (from your storefront's currency or your region), and it only changes when you change it.\r
\r
## Language\r
\r
Today Spool Hoarder ships in **English** only.\r
\r
The app follows your operating system for formatting such as dates and numbers. Because English is the only translation included right now, the in-app language picker stays hidden until additional translations are added. When more languages ship, you will find a **Language** control at the top of **Settings → Preferences**.\r
\r
## Related pages\r
\r
- [Preferences](/docs/settings/preferences/)\r
- [Appearance and themes](/docs/settings/appearance-and-themes/)\r
`;export{e as default};
