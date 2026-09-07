const e=`---\r
title: Linking models to projects\r
description: Connect a model in your library to the project you printed it for.\r
order: 6\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - link\r
  - model\r
  - project\r
  - connect\r
  - archive\r
  - trash\r
  - restore\r
  - which project is this stl for\r
  - model to project\r
platforms:\r
  - desktop\r
---\r
\r
Link a model to a project to keep the file you printed next to the spools and\r
usage that went into it. Once linked, a project's detail can open the model, and\r
the model's inspector shows every project that used it.\r
\r
This is part of the [Print Library](/docs/organizing/print-library/), so it runs\r
on Mac and Windows only. On a wide screen the inspector sits on the right of the\r
library; on a compact width, tapping a model opens it as a dedicated detail page.\r
\r
## Link an existing project\r
\r
Select a model and open its inspector, then choose **Add to Project**. The dialog\r
lists the projects you can link to, each showing whether it is active or\r
completed and how many times you have reprinted it. Pick one to link it.\r
\r
The same option is available when you select several models at once in the\r
library.\r
\r
## Create a new project from a model\r
\r
If the model has no project yet, choose **Create Project** instead. Spool Hoarder\r
starts a new project and links the model to it as its primary model. Once a\r
primary project exists, the button becomes **Open Project**, which jumps straight\r
to that project.\r
\r
## Manage linked projects\r
\r
The inspector's **Projects** tab lists every project linked to the model. Each\r
entry shows whether it is the **Primary** project and whether you have\r
**Printed Before**. From a linked project you can:\r
\r
- **Set as Primary** — mark it as the main project for this model.\r
- **Unlink Project** — remove the connection. The project itself is not affected;\r
  only the link is removed.\r
\r
## What the model detail shows\r
\r
The inspector has four tabs:\r
\r
- **Details** — the model's preview, notes, and tags. Use **Edit Notes** and\r
  **Edit Tags** to annotate a model. System tags such as designer or license\r
  appear here too.\r
- **Files** — every indexed file for the model, with the **Primary** file marked.\r
  The primary file is the one **Open In** launches.\r
- **Projects** — the linked projects described above.\r
- **Activity** — duplicate candidates, if Spool Hoarder found any. For each\r
  candidate you can **Keep This One** or **Archive Candidate** to resolve the\r
  duplicate.\r
\r
The actions card above the tabs offers **Open In**, **Show in Folder**,\r
**Organize This Model**, and **Replace Cover Image** (or **Remove Cover Image**\r
when the preview came from a sidecar image).\r
\r
## Archive, trash, and restore\r
\r
Models you are done with but want to keep can be **Archived**. Archiving moves a\r
model out of the way without deleting it; it appears in the **Archived**\r
collection and out of your main browse lists. Choose **Restore Model** to bring\r
it back.\r
\r
**Move to Trash** sends a model to the **Trash** collection. From there the trash\r
actions card offers:\r
\r
- **Restore from Trash** — return the model to your library.\r
- **Show in Folder** — reveal the file on disk.\r
- **Delete Permanently** — remove the model for good. This is the one action that\r
  cannot be undone, so Spool Hoarder asks you to confirm.\r
\r
Trash is also where you can empty discarded models in one step from the library\r
toolbar.\r
\r
## Related pages\r
\r
- [Print library](/docs/organizing/print-library/)\r
- [Organizing model files](/docs/organizing/organizing-model-files/)\r
`;export{e as default};
