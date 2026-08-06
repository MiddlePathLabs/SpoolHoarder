const e=`---\r
title: Organizing model files\r
description: Preview and apply a tidier folder structure for your library.\r
order: 5\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - organise\r
  - organize\r
  - folders\r
  - rename\r
  - structure\r
  - tidy\r
  - sort models into folders\r
  - move stl files\r
  - library structure\r
platforms:\r
  - desktop\r
---\r
\r
Organize Library builds a tidy folder structure for the models in your library\r
root and shows you exactly what will happen before it moves a single file. You\r
pick how to group the files, review a preview, and then apply it.\r
\r
This is the only feature in the Print Library that moves files. Scans and\r
**Add Files** never do.\r
\r
Organize Library is desktop-only, like the rest of the\r
[Print Library](/docs/organizing/print-library/). The preview is free; applying\r
the changes requires an active trial or Pro.\r
\r
## Open the organize preview\r
\r
You can start organizing from several places:\r
\r
- **Settings → Print Library → Organize Library** — restructure the whole root.\r
- The **Organize library** or **Organize current view** button on the library\r
  toolbar — restructure everything, or just the collection you are viewing.\r
- **Select models** in the library, then **Organize selected models**.\r
- From a single model's inspector, **Organize This Model**.\r
\r
## Choose a strategy\r
\r
The **Organization Strategy** card controls how files group into folders.\r
\r
**Primary grouping** picks the top-level folders. Choose one:\r
\r
- **Organize by Tag**\r
- **Organize by Author**\r
- **Organize by Format**\r
- **Organize by Project**\r
\r
**Secondary grouping** (optional) nests a second level inside the first. Set it\r
to **None** for a single level, or pick any grouping other than the primary one.\r
\r
When a model is missing the metadata a grouping needs, it falls back into a\r
guided folder such as **Unknown Tag** rather than being left behind.\r
\r
## Handle name conflicts\r
\r
Two models often share a file name. The **If a file name conflict is found**\r
dropdown decides what happens:\r
\r
- **Rename automatically** — keep every file by appending a number when names\r
  collide. Nothing is lost.\r
- **Skip conflicting files** — leave the conflicted files where they are and move\r
  the rest.\r
- **Replace existing file** — overwrite an existing file inside the library root.\r
  The option describes itself as advanced; use it only when you are certain.\r
\r
## Review the preview\r
\r
Before anything moves, the screen shows three things:\r
\r
- **Folder Structure Preview** — the destination tree after the move, with every\r
  file in its new spot. Nothing is moved until you confirm.\r
- **Needs Attention** — only the models with conflicts, skipped files, blocked\r
  moves, or fallback metadata, each with its current path, new path, and the\r
  reason it needs a look.\r
- **Summary** — the scope, files to move, folders to create, conflicts, missing\r
  data, and the conflict handling in effect. Warnings call out anything that\r
  needs a decision.\r
\r
## Apply the changes\r
\r
When the plan looks right, choose **Apply Changes**. If nothing needs to move,\r
the button reads **No Changes to Apply**.\r
\r
Applying requires an active trial or Pro. Without one, the summary shows an\r
**Apply Locked** card with a link to start a trial or subscribe. You can still\r
build and adjust the preview for free.\r
\r
Once the move finishes, the completion screen reports how many files moved, how\r
many conflicts were handled, files skipped, files replaced, and folders created.\r
Choose **Open Folder** to inspect the result, or **Back to Library** to return.\r
\r
## Related pages\r
\r
- [Print library](/docs/organizing/print-library/)\r
- [Linking models to projects](/docs/organizing/linking-models-to-projects/)\r
`;export{e as default};
