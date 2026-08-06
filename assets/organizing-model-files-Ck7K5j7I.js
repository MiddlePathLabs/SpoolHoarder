const e=`---
title: Organizing model files
description: Preview and apply a tidier folder structure for your library.
order: 4
status: published
updated: 2026-08-04
keywords:
  - organise
  - organize
  - folders
  - rename
  - structure
  - tidy
  - sort models into folders
  - move stl files
  - library structure
platforms:
  - desktop
---

Organize Library builds a tidy folder structure for the models in your library
root and shows you exactly what will happen before it moves a single file. You
pick how to group the files, review a preview, and then apply it.

This is the only feature in the Print Library that moves files. Scans and
**Add Files** never do.

Organize Library is desktop-only, like the rest of the
[Print Library](/docs/organizing/print-library/). The preview is free; applying
the changes requires an active trial or Pro.

## Open the organize preview

You can start organizing from several places:

- **Settings → Print Library → Organize Library** — restructure the whole root.
- The **Organize library** or **Organize current view** button on the library
  toolbar — restructure everything, or just the collection you are viewing.
- **Select models** in the library, then **Organize selected models**.
- From a single model's inspector, **Organize This Model**.

## Choose a strategy

The **Organization Strategy** card controls how files group into folders.

**Primary grouping** picks the top-level folders. Choose one:

- **Organize by Tag**
- **Organize by Author**
- **Organize by Format**
- **Organize by Project**

**Secondary grouping** (optional) nests a second level inside the first. Set it
to **None** for a single level, or pick any grouping other than the primary one.

When a model is missing the metadata a grouping needs, it falls back into a
guided folder such as **Unknown Tag** rather than being left behind.

## Handle name conflicts

Two models often share a file name. The **If a file name conflict is found**
dropdown decides what happens:

- **Rename automatically** — keep every file by appending a number when names
  collide. Nothing is lost.
- **Skip conflicting files** — leave the conflicted files where they are and move
  the rest.
- **Replace existing file (Advanced)** — overwrite an existing file inside the
  library root. Use this only when you are certain.

## Review the preview

Before anything moves, the screen shows three things:

- **Folder Structure Preview** — the destination tree after the move, with every
  file in its new spot. Nothing is moved until you confirm.
- **Needs Attention** — only the models with conflicts, skipped files, blocked
  moves, or fallback metadata, each with its current path, new path, and the
  reason it needs a look.
- **Summary** — the scope, files to move, folders to create, conflicts, missing
  data, and the conflict handling in effect. Warnings call out anything that
  needs a decision.

## Apply the changes

When the plan looks right, choose **Apply Changes**. If nothing needs to move,
the button reads **No Changes to Apply**.

Applying requires an active trial or Pro. Without one, the summary shows an
**Apply Locked** card with a link to start a trial or subscribe. You can still
build and adjust the preview for free.

Once the move finishes, the completion screen reports how many files moved, how
many conflicts were handled, files skipped, files replaced, and folders created.
Choose **Open Folder** to inspect the result, or **Back to Library** to return.

## Related pages

- [Print library](/docs/organizing/print-library/)
- [Linking models to projects](/docs/organizing/linking-models-to-projects/)
`;export{e as default};
