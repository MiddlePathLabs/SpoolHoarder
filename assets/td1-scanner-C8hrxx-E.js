const e=`---\r
title: Scanning with a TD1\r
description: Measure transmission distance and true color with an AJAX-3D TD1 and save the reading to a spool.\r
order: 6\r
status: published\r
updated: 2026-08-06\r
keywords:\r
  - td1\r
  - td-1\r
  - t1d\r
  - ajax 3d\r
  - ajax3d\r
  - transmission distance\r
  - td value\r
  - hueforge\r
  - usb scanner\r
  - filament scanner\r
  - measure td\r
  - hex colour\r
  - colour measurement\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - windows\r
  - android\r
---\r
\r
A TD1 is a small USB device that measures two things about a piece of filament:\r
its **transmission distance** — how far light travels through it — and its true\r
**hex color**. Spool Hoarder talks to the scanner directly, so a measurement\r
lands on the right spool without you copying numbers between apps.\r
\r
TD1 scanning is free. It is not part of Pro and does not consume AI scan credits.\r
\r
## What you need\r
\r
- **An AJAX-3D TD1** running **firmware v2.0.1 or newer**. Older firmware does\r
  not emit the data format Spool Hoarder reads.\r
- **A cable to your device.** The TD1 connects over USB, and Spool Hoarder talks\r
  to it as either a MIDI device or a USB serial device depending on the platform:\r
\r
  | Platform | How it connects |\r
  |---|---|\r
  | iPhone, iPad | MIDI over USB |\r
  | Mac | MIDI over USB, or USB serial |\r
  | Windows | USB serial |\r
  | Android | USB serial |\r
\r
  On a phone or tablet you will usually need whatever USB adapter your device\r
  takes. TD1 scanning is not available on Linux or the web.\r
\r
- **A sample of the filament** you want to measure — the scanner reads a strand\r
  you feed into it, not the spool as a whole.\r
\r
## Take a reading\r
\r
The scan sheet is the same wherever you open it from, and it is titled **Scan\r
with TD1**.\r
\r
1. Connect the TD1 to your device.\r
2. Open the scan sheet (see the two entry points below).\r
3. Spool Hoarder looks for the scanner as soon as the sheet opens. When it finds\r
   one it says so — **AJAX-3D TD1 detected.** if it recognizes the make.\r
4. Tap **Start Scan**.\r
5. Insert filament within **30 seconds**. Leave the sheet open while you do — if\r
   nothing arrives in that window the sheet reports **No scan found** and offers\r
   **Retry**.\r
6. The reading appears as a **Transmission Distance** value and a **Hex Color**\r
   with a color swatch, so you can sanity-check the color before committing.\r
7. Tap **Accept**.\r
\r
If more than one candidate device is attached, a **Scanner** dropdown appears so\r
you can pick the right one. Spool Hoarder chooses for you when it is confident,\r
and the helper text says as much: *Choose a scanner only if Spool Hoarder picked\r
the wrong one.*\r
\r
## Where to start a scan\r
\r
**On a new or edited spool.** The Add Spool and Edit Spool forms carry a **Scan\r
with TD1** button. Accepting a reading fills the transmission distance and color\r
fields on the form and confirms **TD1 scan applied. Save to keep the new\r
values.** — nothing is stored until you tap **Save**.\r
\r
**On a spool you already have.** Open the spool's detail screen and use the scan\r
button next to the **Transmission Distance** row. Here the reading is written\r
straight to the spool, and you get **TD1 scan saved to this spool.**\r
\r
## What a confirmed reading gives you\r
\r
A value that came from the scanner is marked as such. The **Transmission\r
Distance** and **Color Hex Codes** rows each get a **TD1** badge reading\r
**Confirmed by TD1 scan**. Once both are confirmed, a **TD1 verified** badge\r
appears at the top of the **Properties & Features** group, and the button on the\r
detail screen changes from **Scan TD1** to **Rescan TD1**.\r
\r
Editing either value by hand afterwards clears its badge — the stored number no\r
longer matches what the scanner measured, and the app does not pretend\r
otherwise.\r
\r
Confirmed readings are also what the HueForge export can filter on. Its **TD1\r
Confirmed Only** option exports just the filaments whose values you have verified\r
with a scan, which is usually what you want when the export is going to drive a\r
layered color print. See [HueForge export](/docs/data/hueforge-export/).\r
\r
## Sharing your measurements\r
\r
**Settings → Preferences → Share Confirmed TD/Hex Measurements** contributes your\r
confirmed readings so filament data improves for everyone. Notes, prices, and\r
locations are never shared. The toggle is yours to switch off, and scanning works\r
either way. See [Preferences](/docs/settings/preferences/).\r
\r
## When a scan does not work\r
\r
| What you see | What it means |\r
|---|---|\r
| **No scanner found** | Nothing recognizable is attached. Check the cable and any adapter, then tap **Retry**. |\r
| **No scan found** | The scanner was there but no filament arrived within 30 seconds. Tap **Retry** and insert filament while the sheet waits. |\r
| **Invalid TD value** | The reading fell outside the range Spool Hoarder accepts (0.1 to 100). Rescan the filament. |\r
| **Scanner disconnected** | The cable came loose mid-scan, or the device slept. Reconnect and scan again. |\r
| **Scanning unavailable** | This platform cannot talk to a TD1 — Linux and the web. |\r
\r
If the scanner is detected but readings never parse, confirm the firmware is\r
v2.0.1 or newer. That is the most common cause.\r
\r
## Related pages\r
\r
- [The spool detail screen](/docs/inventory/spool-details/)\r
- [HueForge export](/docs/data/hueforge-export/)\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
- [Preferences](/docs/settings/preferences/)\r
`;export{e as default};
