const e=`---\r
title: Adding a spool\r
description: Every field on the add form, how autocomplete fills it in, and what each field feeds elsewhere in the app.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - add spool\r
  - new spool\r
  - manual entry\r
  - create spool\r
  - form fields\r
  - brand\r
  - material\r
  - color\r
  - how do i add a filament\r
platforms:\r
  - all\r
---\r
\r
Open the inventory tab and tap the **+** button to add a spool. The same form creates a new spool or edits an existing one — see [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/) for what changes when you edit.\r
\r
Only two fields are required: **Brand** and **Material**. Everything else is optional, and most of it can be filled in automatically from the filament catalog.\r
\r
## Add a spool from a photo\r
\r
On Android, iOS, and macOS, a **Scan with AI** button sits at the top of the form. Take a photo of a spool label and Spool Hoarder reads the brand, material, color, weight, and temperatures off it, then fills the empty fields for you to review. Photo scanning is not available on Windows.\r
\r
Scanning runs one of three ways, depending on your setup:\r
\r
- **On-device** — runs entirely on your device with no data leaving it. Requires a recent iPhone or Mac.\r
- **Managed credits** — uses a small number of credits bundled with a Pro subscription or trial, or bought as a pack. Your photo is processed in the cloud after its location data is stripped.\r
- **Your own API key** — you bring a provider key from Settings and manage its billing directly.\r
\r
A **Quantity** selector lets one scan create up to ten identical spools at once.\r
\r
## The form, section by section\r
\r
The form is organized into collapsible sections. The sections that already have data expand automatically when you are editing a spool.\r
\r
### Identity\r
\r
- **Brand** (required) and **Material** (required) — start typing and matching brands and materials from your own inventory and the public filament catalog appear beneath the field.\r
- **Product Name** — a free-text label such as "eSun PLA+ Matte Black".\r
- **Product Family** — a grouping like "PLA+" or "Silk PLA".\r
\r
Two buttons next to the **Identity** heading pull details straight from the catalog: **Auto-fill from SpoolmanDB** and **Search Open Filament Database**.\r
\r
### Appearance\r
\r
- **Color Description** — type a color name and Spool Hoarder searches the public catalog for matching filaments, showing swatches as you type. Picking one fills in the hex codes, diameter, spool size, temperatures, and other details for that filament.\r
- **Colors** — tap a color-family chip (Black, White, Gray, Red, Orange, Yellow, Green, Blue, Purple, Pink), or tap **Edit** for the full set of sixteen families.\r
- **Features** — free-text tags such as "glow-in-dark, silk, matte". These are searchable and can appear on spool cards.\r
\r
### Physical Properties\r
\r
- **Diameter** — choose **1.75mm** or **2.85mm**. Defaults to 1.75mm.\r
- **Spool Size (g)** — the total weight when the spool is full. Defaults to 1000g.\r
- **Remaining Weight (g)** — how much is on the spool now. If you leave it blank, it defaults to the spool size.\r
- **Filament Notes** — notes about the filament itself, such as "prints best at 215C".\r
\r
### Advanced (technical settings)\r
\r
Collapsed by default. Holds the values that become the print settings for this spool:\r
\r
- **Extruder Temp (°C)** and **Bed Temp (°C)**\r
- **Flow Ratio** — an extrusion multiplier where 1.0 is the default.\r
- **K-Factor** — pressure advance compensation.\r
- **Transmission Distance (TD)** — a light-transmission value used for color matching. Must be between 0.1 and 100.\r
\r
These feed the **Print Settings** card on the spool detail screen and the per-printer overrides you can tune there.\r
\r
### Purchase Info\r
\r
Collapsed by default. Tracks the cost and where the spool lives:\r
\r
- **Purchase Source** — a store name or product URL.\r
- **Price** — the amount you paid, with a currency. Spool Hoarder uses price divided by spool size to work out a per-gram cost, which feeds project cost tracking.\r
- **Inventory Location** — where the spool is stored, such as "Shelf A". Set up reusable locations under Settings → Storage Locations.\r
- **Loaded on Printer** — which printer currently has this spool loaded. Add printers under Settings → Equipment first.\r
\r
### Status\r
\r
Collapsed by default. Tracks the spool's lifecycle:\r
\r
- **Empty** — mark the spool as fully used.\r
- **Refill** — note that this entry is a refill of an existing spool.\r
- **Date Opened** and **Last Dried** — date pickers.\r
- **Dry Cycles** — a whole number, zero or more.\r
- **Notes** — general notes about this spool.\r
\r
### Catalog Details\r
\r
Collapsed by default. Optional descriptive fields pulled from the catalog: **Spool Type**, **Finish**, **Pattern**, **Multi-Color Direction**, **Glow in the Dark**, and **Translucent**.\r
\r
## How autocomplete works\r
\r
The **Brand**, **Material**, **Product Family**, **Purchase Source**, and **Inventory Location** fields all suggest values as you type. Suggestions blend the brands and materials already in your inventory with the public filament catalog, so a brand you have used before is offered alongside new ones from the catalog. The catalog is not gated — it works on every platform.\r
\r
The **Color Description** field is the most powerful: it searches the catalog in parallel as you type, and choosing a result fills in the whole filament profile for you.\r
\r
## Saving\r
\r
Tap **Save** to create the spool. When you add more than one at once, a message confirms how many were added.\r
\r
On the free tier, you can store up to **50 spools**. A Pro subscription removes the limit. Deleting a spool frees its slot back up. See [Free tier, trial, and limits](/docs/account/free-trial-and-limits/) for which platforms the cap applies on.\r
\r
## Related pages\r
\r
- [The spool detail screen](/docs/inventory/spool-details/)\r
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)\r
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)\r
- [Customizing spool cards](/docs/inventory/customizing-spool-cards/)\r
`;export{e as default};
