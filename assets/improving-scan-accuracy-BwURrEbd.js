const e=`---\r
title: Getting better scan results\r
description: Lighting, framing, and label habits that raise the hit rate.\r
order: 10\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - scan accuracy\r
  - bad scan\r
  - wrong scan\r
  - blurry photo\r
  - low confidence\r
  - needs review\r
  - improve scan\r
  - scan tips\r
platforms:\r
  - ios\r
  - ipados\r
  - macos\r
  - android\r
---\r
\r
Photo scans are only as good as the photo. A few small habits turn a string of\r
**Needs review** results into clean, high-confidence reads. This page covers AI\r
photo scans and batch scans; barcode and NFC reads are already exact when the\r
code or tag is present.\r
\r
## Take a better photo\r
\r
- **Fill the frame with the label.** The text should be the largest thing in the\r
  shot. Move close rather than zoom.\r
- **Light the label evenly.** Soft, diffuse light beats a harsh flash. Try the\r
  flash only when the label is genuinely dark.\r
- **Hold the label flat.** Curved spool sides bend the text. Photograph the\r
  label where it lies flat, or flatten a peeling corner.\r
- **Focus on the text.** In batch scan, tap the preview to set the focus point\r
  before capturing. A sharp label reads far better than a sharp spool edge.\r
- **Avoid glare.** Glossy labels reflect lights and windows back into the\r
  camera. Tilt slightly to move the hotspot off the text.\r
\r
## What to expect from the confidence badge\r
\r
Every scan comes back with a confidence level:\r
\r
- **High confidence** — green. The fields are very likely right. A quick glance\r
  is enough.\r
- **Needs review** — orange or red. Something was uncertain. Open the card and\r
  check before saving.\r
\r
The review screen counts how many scans need your attention and highlights them,\r
so you do not have to open every card.\r
\r
## Labels that scan poorly\r
\r
Some labels are hard for any reader. For these, type the field by hand instead\r
of rescanning repeatedly:\r
\r
- **Tiny text or dense spec tables** — the model may pick the wrong number.\r
- **Hand-applied or faded labels** — low contrast reads poorly.\r
- **Labels wrapped around the spool hub** — curvature distorts the text.\r
- **Multi-language labels with many similar numbers** — temperatures and\r
  diameters can get crossed.\r
\r
For a stubborn spool, scan once to get the easy fields, then correct the rest by\r
hand on the review card or the add form.\r
\r
## Get the brand and material right\r
\r
The scan is matched against the public filament catalog after it runs, which\r
cleans up common spelling. If the brand comes back wrong, type it and pick the\r
autocomplete suggestion — that anchors the catalog match for next time.\r
\r
## Batch scan specifics\r
\r
- **One to four spools per photo.** Beyond that, the labels get too small. The\r
  scan tells you when it skipped a visible spool and why (blurry, blocked, too\r
  small).\r
- **Scan missing spools individually.** If a multi-spool photo skips one, the\r
  toast will say so; capture that spool on its own.\r
- **Set quantities on the review screen.** If you have several identical spools,\r
  scan one and raise its quantity to match rather than photographing each copy.\r
\r
## When a scan fails outright\r
\r
- **No text detected in image** — the label was unreadable. Retake with better\r
  light and framing.\r
- **Scanner temporarily busy** — the cloud service was briefly unavailable. The\r
  photo is saved; tap **Retry Scan**, **Retake**, or **Discard**.\r
\r
## Related pages\r
\r
- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)\r
- [Batch scanning many spools](/docs/scanning/batch-scan/)\r
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)\r
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)\r
`;export{e as default};
