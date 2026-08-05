const e=`---
title: Units, currency, and language
description: How Spool Hoarder handles weight units, currency conversion, and language — including what is and is not adjustable today.
order: 4
status: published
updated: 2026-08-04
keywords:
  - units
  - grams
  - ounces
  - oz
  - imperial
  - metric
  - weight
  - currency
  - conversion
  - exchange rate
  - ECB
  - language
  - translation
  - locale
  - español
  - Spanish
  - French
  - German
platforms:
  - all
---

A quick reference for three things people often look for in Settings: weight units, currency, and language. Two have controls you can change; one (units) is fixed for now.

## Weight units

Spool Hoarder tracks filament weight in **grams**. There is no ounces or imperial option — weights are always shown and entered in grams.

For spools with a total capacity above 1.3 kg, the inventory displays remaining and total weight in kilograms for readability, but the underlying value is still grams. Usage logs, spool sizes, and the low-stock threshold are all in grams.

## Currency and conversion

Spool Hoarder is multi-currency: each price you enter is stored in the currency you typed it in. The **Reporting currency** setting in **Settings → Preferences** picks one currency used to show **informational** conversions — for example, a ballpark total across spools priced in different currencies.

A few important points:

- Choosing a reporting currency **does not convert or rewrite your past entries**. Original amounts keep their stored currency.
- Conversion uses the daily exchange rates published by the **European Central Bank**, quoted against the euro. Rates are refreshed roughly once a day and cached on your device.
- When rates are available, the currency picker lists the currencies the ECB publishes. If rates have not loaded yet, the picker falls back to listing all supported ISO currencies, and conversions become available once the rates arrive. A selected currency that is missing from the current rates is flagged in the picker.
- The reporting currency is chosen for you the first time (from your storefront's currency or your region), and it only changes when you change it.

## Language

Today Spool Hoarder ships in **English** only.

The app follows your operating system for formatting such as dates and numbers. Because English is the only translation included right now, the in-app language picker stays hidden until additional translations are added. When more languages ship, you will find a **Language** control at the top of **Settings → Preferences**.

## Related pages

- [Preferences](/docs/settings/preferences/)
- [Appearance and themes](/docs/settings/appearance-and-themes/)
`;export{e as default};
