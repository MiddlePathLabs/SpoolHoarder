const e=`---
title: Print library
description: Point the app at your model files so prints and projects stay connected.
order: 3
status: published
updated: 2026-08-04
keywords:
  - library
  - models
  - stl
  - 3mf
  - files
  - folder
  - browse models
  - where are my stls
  - slicer
  - desktop library
  - file formats
  - supported formats
  - which files can i add
  - step
  - gcode
  - obj
  - thumbnail
  - preview
  - no preview
  - model too big
platforms:
  - desktop
---

The Print Library points Spool Hoarder at a folder of model files on your
computer and indexes them in place. Once indexed, you can browse, search, and
filter your models, open them straight into a slicer, and link them to the
projects you printed them for.

The Print Library runs on **Mac and Windows only**. It indexes files on disk,
launches desktop apps, and supports drag-and-drop import, none of which are
possible on a phone or in a browser. On other platforms the library entry points
are hidden, and the routes redirect back to Settings.

Nothing in your library root is ever moved unless you explicitly run
[Organize Library](/docs/organizing/organizing-model-files/). Scans and rescans
read files where they sit.

## Choose a library root

Open **Settings → Print Library**, or pick the Print Library destination from the
navigation rail on a wide screen. The first time you arrive, the setup card asks
you to **Choose Folder**.

Pick one folder for Spool Hoarder to index. It scans the folder in place — your
files stay exactly where they are. Once a root is set, the card offers:

- **Change Folder** — point at a different root.
- **Open Folder** — reveal the root in Finder or File Explorer.
- **Add Files** — copy new STL or 3MF files into the root. They land in
  **Needs Review** until you organize them.
- **Rescan** — re-index the root to pick up files added outside the app.
- **Organize Library** — open the organize preview to tidy the folder structure.

On a Mac, if the OS revokes access to the folder after a restart, the card
prompts you to **Reauthorize Folder** and pick the same folder once more.

You can also drag a folder onto the setup card to start a scan-only setup, or
drag STL and 3MF files onto it to drop them straight into **Needs Review**.

## Supported file formats

Spool Hoarder indexes two model formats: STL (\`.stl\`) and 3MF (\`.3mf\`). Those are
the only files that become models — in a scan, in **Add Files**, and in the
format filter. CAD sources such as STEP and sliced output such as G-code are not
indexed.

Anything else in your library root is left exactly where it is and never appears
in the model grid, so you can keep design files, slicer profiles, and notes
beside your models without cluttering the library.

Each model you add brings its companion files with it, so a model and its
paperwork stay together:

- A file sharing the model's name — a matching \`.png\`, \`.jpg\`, \`.jpeg\`, \`.webp\`,
  \`.txt\`, \`.md\`, or \`.pdf\`.
- A readme or license file in the same folder, as \`.txt\` or \`.md\`.

**Add Files** only offers STL and 3MF in the file picker, so you cannot pick the
wrong thing there. Dragging files in is looser: anything that is not an STL or a
3MF is quietly skipped, and if none of the files you dropped are models, the add
stops and Spool Hoarder asks you to select at least one STL or 3MF file.

## Browse your models

The library has three regions on a wide screen: a collections list on the left,
the model grid or list in the center, and an inspector on the right. On a compact
width, the same data fills the screen and a selected model opens a dedicated
detail page.

### Collections

The left-hand list groups your models into smart collections:

- **Workflow** — **Needs Review** (files you added but have not organized yet),
  **Duplicate Candidates**, and **Needs Preview**.
- **Library** — **All Models**, **Favorites**, **Recently Added**, and
  **Linked to Projects**.
- **System** — **Archived** and **Trash**.

A health card under the collections shows the total indexed model count and the
last scan time.

### Search, sort, and filter

A search box filters by name. Below it you can:

- **Sort** by recently added, recently opened, name, format, modified at, file
  size, tags, print count, or project status.
- **Filter** by format (STL or 3MF), tag, source status, project link, favorites,
  or models that still need a preview.

Switch between **Grid** and **List** view at any time.

### Select and act on models

Tap **Select models** to enter selection mode, then choose one or several models.
From there you can organize the selection, move it to Trash, archive it, or add
it to a project in one action.

## Previews for big models

Every model gets a picture in the grid. Spool Hoarder looks for one in this
order: an image sitting next to the model file under the same name (PNG, JPG,
JPEG, or WEBP), then the thumbnail packed inside the file for 3MF models, then a
snapshot it renders from the model's own geometry.

That last step has a ceiling. Spool Hoarder does not render a snapshot for a
model over 60,000 triangles — it shows a placeholder instead and the model turns
up in **Needs Preview** until you give it a cover. Select it and choose
**Replace Cover Image** to point at a PNG, JPG, JPEG, or WEBP file; it is saved
next to the model file under the same name, and **Remove Cover Image** takes it
away again.

The inspector has a **Mesh Preview** section with an interactive 3D view you can
rotate, along with the model's triangle count. It loads only when you open it, so
a heavy model never slows down browsing. That view goes up to 120,000 triangles;
past that, a note replaces it saying the file is too detailed for the in-app
preview and the cover picture is shown instead.

Both ceilings count triangles, not megabytes, so a physically large but simple
model previews fine while a small, finely tessellated one may not.

## Open files in a slicer

Select a model and choose **Open In** to launch its primary file. The first time,
this is the system default. To add specific slicers or tools, open
**Settings → Print Library** and use **Open In Targets** to register apps such as
OrcaSlicer, Bambu Studio, Cura, or Blender. Spool Hoarder recognizes known apps
from their filename; custom apps can be renamed.

## Related pages

- [Organizing model files](/docs/organizing/organizing-model-files/)
- [Linking models to projects](/docs/organizing/linking-models-to-projects/)
`;export{e as default};
