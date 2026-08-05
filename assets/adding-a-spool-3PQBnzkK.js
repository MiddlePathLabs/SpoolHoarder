const e=`---
title: Adding a spool
description: Every field on the add form, how autocomplete fills it in, and what each field feeds elsewhere in the app.
order: 1
status: published
updated: 2026-08-04
keywords:
  - add spool
  - new spool
  - manual entry
  - create spool
  - form fields
  - brand
  - material
  - color
  - how do i add a filament
platforms:
  - all
---

Open the inventory tab and tap the **+** button to add a spool. The same form creates a new spool or edits an existing one — see [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/) for what changes when you edit.

Only two fields are required: **Brand** and **Material**. Everything else is optional, and most of it can be filled in automatically from the filament catalog.

## Add a spool from a photo

On Android, iOS, and macOS, a **Scan with AI** button sits at the top of the form. Take a photo of a spool label and Spool Hoarder reads the brand, material, colour, weight, and temperatures off it, then fills the empty fields for you to review. Photo scanning is not available on Windows, Linux, or the web.

Scanning runs one of three ways, depending on your setup:

- **On-device** — runs entirely on your device with no data leaving it. Requires a recent iPhone or Mac.
- **Managed credits** — uses a small number of credits bundled with a Pro subscription or trial, or bought as a pack. Your photo is processed in the cloud after its location data is stripped.
- **Your own API key** — you bring a provider key from Settings and manage its billing directly.

A **Quantity** selector lets one scan create up to ten identical spools at once.

## The form, section by section

The form is organised into collapsible sections. The sections that already have data expand automatically when you are editing a spool.

### Identity

- **Brand** (required) and **Material** (required) — start typing and matching brands and materials from your own inventory and the public filament catalog appear beneath the field.
- **Product Name** — a free-text label such as "eSun PLA+ Matte Black".
- **Product Family** — a grouping like "PLA+" or "Silk PLA".

Two buttons next to the **Identity** heading pull details straight from the catalog: **Auto-fill from SpoolmanDB** and **Search Open Filament Database**.

### Appearance

- **Color Description** — type a colour name and Spool Hoarder searches the public catalog for matching filaments, showing swatches as you type. Picking one fills in the hex codes, diameter, spool size, temperatures, and other details for that filament.
- **Colors** — tap a colour-family chip (Black, White, Gray, Red, Orange, Yellow, Green, Blue, Purple, Pink), or tap **Edit** for the full set of sixteen families.
- **Features** — free-text tags such as "glow-in-dark, silk, matte". These are searchable and can appear on spool cards.

### Physical Properties

- **Diameter** — choose **1.75mm** or **2.85mm**. Defaults to 1.75mm.
- **Spool Size (g)** — the total weight when the spool is full. Defaults to 1000g.
- **Remaining Weight (g)** — how much is on the spool now. If you leave it blank, it defaults to the spool size.
- **Filament Notes** — notes about the filament itself, such as "prints best at 215C".

### Advanced (technical settings)

Collapsed by default. Holds the values that become the print settings for this spool:

- **Extruder Temp (°C)** and **Bed Temp (°C)**
- **Flow Ratio** — an extrusion multiplier where 1.0 is the default.
- **K-Factor** — pressure advance compensation.
- **Transmission Distance (TD)** — a light-transmission value used for colour matching. Must be between 0.1 and 100.

These feed the **Print Settings** card on the spool detail screen and the per-printer overrides you can tune there.

### Purchase Info

Collapsed by default. Tracks the cost and where the spool lives:

- **Purchase Source** — a store name or product URL.
- **Price** — the amount you paid, with a currency. Spool Hoarder uses price divided by spool size to work out a per-gram cost, which feeds project cost tracking.
- **Inventory Location** — where the spool is stored, such as "Shelf A". Set up reusable locations under Settings → Storage Locations.
- **Loaded on Printer** — which printer currently has this spool loaded. Add printers under Settings → Equipment first.

### Status

Collapsed by default. Tracks the spool's lifecycle:

- **Empty** — mark the spool as fully used.
- **Refill** — note that this entry is a refill of an existing spool.
- **Date Opened** and **Last Dried** — date pickers.
- **Dry Cycles** — a whole number, zero or more.
- **Notes** — general notes about this spool.

### Catalog Details

Collapsed by default. Optional descriptive fields pulled from the catalog: **Spool Type**, **Finish**, **Pattern**, **Multi-Color Direction**, **Glow in the Dark**, and **Translucent**.

## How autocomplete works

The **Brand**, **Material**, **Product Family**, **Purchase Source**, and **Inventory Location** fields all suggest values as you type. Suggestions blend the brands and materials already in your inventory with the public filament catalog, so a brand you have used before is offered alongside new ones from the catalog. The catalog is not gated — it works on every platform.

The **Color Description** field is the most powerful: it searches the catalog in parallel as you type, and choosing a result fills in the whole filament profile for you.

## Saving

Tap **Save** to create the spool. When you add more than one at once, a message confirms how many were added.

On the free tier, you can store up to **50 spools** on iPhone, iPad, Mac, and Windows. The web and Linux builds have no limit. A Pro subscription removes the limit. Deleting a spool frees its slot back up.

## Related pages

- [The spool detail screen](/docs/inventory/spool-details/)
- [Editing and deleting spools](/docs/inventory/editing-and-deleting-spools/)
- [Tracking remaining weight](/docs/inventory/tracking-remaining-weight/)
- [Customising spool cards](/docs/inventory/customizing-spool-cards/)
`;export{e as default};
