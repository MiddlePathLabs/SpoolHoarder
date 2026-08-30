# Spool Hoarder

[Spool Hoarder](https://spoolhoarder.com) is a local-first inventory app for
3D-printing filament. Track what you own, how much remains, where it is stored,
what it cost, and how it was used in each project.

> This repository contains the static site deployed at
> [spoolhoarder.com](https://spoolhoarder.com). The Flutter application source
> is maintained in a private repository.

## What it does

- **Manage inventory:** add, edit, search, filter, sort, group, and batch-manage
  spools. Track color, material, technical settings, storage location, weight,
  price, and lifecycle status.
- **Track real usage and costs:** log filament against projects, plan required
  materials, estimate print costs, and review inventory and material statistics.
- **Scan and tag spools:** scan labels, barcodes, QR codes, and NFC tags; use
  compatible printer RFID and TD1 transmission-distance hardware where
  available.
- **Recognize filament:** use a supported AI provider, on-device Apple
  Foundation Models, or included Pro scan credits to extract spool details from
  a photo before you save it.
- **Keep data portable:** import and export CSV files, create checksummed backup
  bundles, and restore data with a preview and validation step.
- **Sync when you choose:** the app works offline with its local SQLite database
  as the source of truth. Signed-in Pro users can synchronize supported data
  across devices.
- **Organize a print library:** on Windows and macOS, index STL and 3MF files,
  find duplicates, manage collections, and link models to projects.

## Privacy and data ownership

Your inventory stays on your device by default. Optional AI features send only
the information needed for the requested scan or query to the provider you
choose; the inventory assistant executes its resulting query locally. API keys
are stored in secure platform storage.

## Platform support

| Platform | Availability | Highlights |
| --- | --- | --- |
| iOS | Supported | Camera scanning, NFC read/write, Apple Vision, Foundation Models, and TD1 MIDI support |
| macOS | Supported | Print Library, Apple Vision, Foundation Models, and TD1 MIDI support |
| Windows | Supported | Print Library, native file dialogs, cloud AI scanning, TD1 USB serial, and Microsoft Store licensing |
| Android | Supported | Camera scanning, ML Kit, NFC read/write, Bambu Lab RFID, TD1 USB serial, and Google Play Billing |

Linux is not a build target.

## Learn more

- [Visit Spool Hoarder](https://spoolhoarder.com)
- [Read the product documentation](https://spoolhoarder.com/docs)

## About this repository

This is the public deployment repository for Spool Hoarder. It contains
generated static assets and is not the application source repository.
