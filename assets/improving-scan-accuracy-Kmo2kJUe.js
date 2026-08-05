const e=`---
title: Getting better scan results
description: Lighting, framing, and label habits that raise the hit rate.
order: 9
status: published
updated: 2026-08-04
keywords:
  - scan accuracy
  - bad scan
  - wrong scan
  - blurry photo
  - low confidence
  - needs review
  - improve scan
  - scan tips
platforms:
  - ios
  - ipados
  - macos
  - android
---

Photo scans are only as good as the photo. A few small habits turn a string of
**Needs review** results into clean, high-confidence reads. This page covers AI
photo scans and batch scans; barcode and NFC reads are already exact when the
code or tag is present.

## Take a better photo

- **Fill the frame with the label.** The text should be the largest thing in the
  shot. Move close rather than zoom.
- **Light the label evenly.** Soft, diffuse light beats a harsh flash. Try the
  flash only when the label is genuinely dark.
- **Hold the label flat.** Curved spool sides bend the text. Photograph the
  label where it lies flat, or flatten a peeling corner.
- **Focus on the text.** In batch scan, tap the preview to set the focus point
  before capturing. A sharp label reads far better than a sharp spool edge.
- **Avoid glare.** Glossy labels reflect lights and windows back into the
  camera. Tilt slightly to move the hotspot off the text.

## What to expect from the confidence badge

Every scan comes back with a confidence level:

- **High confidence** — green. The fields are very likely right. A quick glance
  is enough.
- **Needs review** — orange or red. Something was uncertain. Open the card and
  check before saving.

The review screen counts how many scans need your attention and highlights them,
so you do not have to open every card.

## Labels that scan poorly

Some labels are hard for any reader. For these, type the field by hand instead
of rescanning repeatedly:

- **Tiny text or dense spec tables** — the model may pick the wrong number.
- **Hand-applied or faded labels** — low contrast reads poorly.
- **Labels wrapped around the spool hub** — curvature distorts the text.
- **Multi-language labels with many similar numbers** — temperatures and
  diameters can get crossed.

For a stubborn spool, scan once to get the easy fields, then correct the rest by
hand on the review card or the add form.

## Get the brand and material right

The scan is matched against the public filament catalog after it runs, which
cleans up common spelling. If the brand comes back wrong, type it and pick the
autocomplete suggestion — that anchors the catalog match for next time.

## Batch scan specifics

- **One to four spools per photo.** Beyond that, the labels get too small. The
  scan tells you when it skipped a visible spool and why (blurry, blocked, too
  small).
- **Scan missing spools individually.** If a multi-spool photo skips one, the
  toast will say so; capture that spool on its own.
- **Set quantities on the review screen.** If you have several identical spools,
  scan one and raise its quantity to match rather than photographing each copy.

## When a scan fails outright

- **No text detected in image** — the label was unreadable. Retake with better
  light and framing.
- **Scanner temporarily busy** — the cloud service was briefly unavailable. The
  photo is saved; tap **Retry Scan**, **Retake**, or **Discard**.

## Related pages

- [Scanning a label with AI](/docs/scanning/ai-photo-scan/)
- [Batch scanning many spools](/docs/scanning/batch-scan/)
- [AI providers and API keys](/docs/scanning/ai-providers-and-api-keys/)
- [Choosing a scan method](/docs/scanning/choosing-a-scan-method/)
`;export{e as default};
