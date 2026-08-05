const t=`---
title: Tour of the app
description: The five main tabs, and how the layout changes between phone, tablet, and desktop.
order: 3
status: published
updated: 2026-08-04
keywords:
  - tabs
  - navigation
  - layout
  - navigation rail
  - sidebar
  - bottom bar
  - inventory tab
  - projects tab
  - calculator tab
  - stats tab
  - settings tab
  - tour
  - how to use
  - where is everything
platforms:
  - all
---

Spool Hoarder is built around five tabs that stay visible while you work. This page names them and shows how the layout adapts.

## The five tabs

- **Inventory** — every spool you own, with remaining weight, status, and location. This is where you add, search, and filter spools.
- **Projects** — your prints, the filaments planned for them, and the usage logged against each one.
- **Calculator** — a quick material cost estimate for a planned print, based on weight and a spool's price.
- **Stats** — totals and charts across your inventory: consumption over time, cost breakdowns, and low-stock alerts.
- **Settings** — appearance, preferences, your account and subscription, printers, data and backup, and the rest of the app's configuration.

## How the layout adapts

On a phone, the five tabs sit in a bar at the bottom of the screen. On a tablet or desktop, the screen is wider, so the tabs move into a navigation rail on the side and the content takes the full width.

The switch happens at a width of 600 pixels. Rotate a tablet or resize a desktop window, and the layout follows.

## Screens that open over the tabs

Some screens are not tabs. They open full-screen and close back to where you were:

- **Add a spool** and **Edit spool** — opened from the Inventory tab.
- **Spool detail** — when you tap a spool card.
- **Scan** — the batch scanning flow, opened from Inventory.

## The Print Library

On Mac and Windows, a **Print Library** appears alongside the tabs. Point it at a folder of model files to browse, organize, and link them to projects. The Print Library is not available on iPhone, iPad, or other mobile platforms.

## Where to go next

- Add your first spool: [/docs/getting-started/add-your-first-spool/](/docs/getting-started/add-your-first-spool/)
- Bring in existing data: [/docs/getting-started/bring-your-existing-data/](/docs/getting-started/bring-your-existing-data/)
- Change what you see on spool cards: [/docs/inventory/customizing-spool-cards/](/docs/inventory/customizing-spool-cards/)
`;export{t as default};
