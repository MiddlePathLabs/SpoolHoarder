const r=`---\r
title: What is Spool Hoarder\r
description: What Spool Hoarder tracks, who it is for, and why it works without an account.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - what is spool hoarder\r
  - filament inventory app\r
  - 3d printing filament tracker\r
  - spool tracker\r
  - what does it do\r
  - overview\r
  - features\r
  - who is it for\r
  - do i need an account\r
platforms:\r
  - all\r
---\r
\r
Spool Hoarder is a filament inventory app for 3D printing. It tracks what you have, what you have used, and what each print costs, so you stop guessing about the shelf in front of you.\r
\r
It is built for hobbyists, print farms, and anyone who has lost track of a spool. If you have ever opened a drawer of filament and wondered how much was left, or whether a color was still printable, this is the app for you.\r
\r
## What it tracks\r
\r
- **Spools** — remaining weight, brand, material, color, purchase price, storage location, print temperatures, and drying history.\r
- **Projects** — planned prints with the filaments you intend to use.\r
- **Usage** — the grams you pulled from each spool, deducted from its remaining weight.\r
- **Costs** — what you spent on filament, and what each project cost in material.\r
- **Printers** — printer profiles that drive cost estimates and per-printer settings.\r
\r
Add spools by hand, or photograph a label and let the app fill the fields. Everything lives in one place instead of a spreadsheet.\r
\r
## Local first, no account\r
\r
Spool Hoarder stores your data in a local database on your device. It works offline, in a garage or a print room with no signal, and never requires an account. The inventory belongs to you.\r
\r
Cloud sync is optional. If you want the same inventory on a second device, see [Cloud sync](/docs/data/cloud-sync/).\r
\r
## What it does not do\r
\r
- It does not slice files or drive your printer.\r
- It does not track what you do in the app. There is no usage analytics or\r
  behavioral telemetry.\r
- It does not require a sign-in.\r
\r
The one thing that does leave your device automatically is crash reporting. On\r
iPhone, iPad, Android, and Mac, release builds send crash and error reports to\r
Firebase Crashlytics so we can fix what broke. Crash reporting is not enabled on\r
Windows. See [Scanning and your privacy](/docs/scanning/scanning-privacy/) for\r
everything else that does or does not leave your device.\r
\r
## Where to go next\r
\r
- Install the app and run through setup: [Install and first run](/docs/getting-started/install-and-first-run/)\r
- Add your first spool: [Add your first spool](/docs/getting-started/add-your-first-spool/)\r
- Bring in data you already have: [Bring your existing data](/docs/getting-started/bring-your-existing-data/)\r
`;export{r as default};
