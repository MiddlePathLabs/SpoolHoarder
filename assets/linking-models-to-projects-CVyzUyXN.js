const e=`---
title: Linking models to projects
description: Connect a model in your library to the project you printed it for.
order: 6
status: published
updated: 2026-08-04
keywords:
  - link
  - model
  - project
  - connect
  - archive
  - trash
  - restore
  - which project is this stl for
  - model to project
platforms:
  - desktop
---

Link a model to a project to keep the file you printed next to the spools and
usage that went into it. Once linked, a project's detail can open the model, and
the model's inspector shows every project that used it.

This is part of the [Print Library](/docs/organizing/print-library/), so it runs
on Mac and Windows only. On a wide screen the inspector sits on the right of the
library; on a compact width, tapping a model opens it as a dedicated detail page.

## Link an existing project

Select a model and open its inspector, then choose **Add to Project**. The dialog
lists the projects you can link to, each showing whether it is active or
completed and how many times you have reprinted it. Pick one to link it.

The same option is available when you select several models at once in the
library.

## Create a new project from a model

If the model has no project yet, choose **Create Project** instead. Spool Hoarder
starts a new project and links the model to it as its primary model. Once a
primary project exists, the button becomes **Open Project**, which jumps straight
to that project.

## Manage linked projects

The inspector's **Projects** tab lists every project linked to the model. Each
entry shows whether it is the **Primary** project and whether you have
**Printed Before**. From a linked project you can:

- **Set as Primary** — mark it as the main project for this model.
- **Unlink Project** — remove the connection. The project itself is not affected;
  only the link is removed.

## What the model detail shows

The inspector has four tabs:

- **Details** — the model's preview, notes, and tags. Use **Edit Notes** and
  **Edit Tags** to annotate a model. System tags such as designer or license
  appear here too.
- **Files** — every indexed file for the model, with the **Primary** file marked.
  The primary file is the one **Open In** launches.
- **Projects** — the linked projects described above.
- **Activity** — duplicate candidates, if Spool Hoarder found any. For each
  candidate you can **Keep This One** or **Archive Candidate** to resolve the
  duplicate.

The actions card above the tabs offers **Open In**, **Show in Folder**,
**Organize This Model**, and **Replace Cover Image** (or **Remove Cover Image**
when the preview came from a sidecar image).

## Archive, trash, and restore

Models you are done with but want to keep can be **Archived**. Archiving moves a
model out of the way without deleting it; it appears in the **Archived**
collection and out of your main browse lists. Choose **Restore Model** to bring
it back.

**Move to Trash** sends a model to the **Trash** collection. From there the trash
actions card offers:

- **Restore from Trash** — return the model to your library.
- **Show in Folder** — reveal the file on disk.
- **Delete Permanently** — remove the model for good. This is the one action that
  cannot be undone, so Spool Hoarder asks you to confirm.

Trash is also where you can empty discarded models in one step from the library
toolbar.

## Related pages

- [Print library](/docs/organizing/print-library/)
- [Organizing model files](/docs/organizing/organizing-model-files/)
`;export{e as default};
