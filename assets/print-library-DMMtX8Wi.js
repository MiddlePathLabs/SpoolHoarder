const e=`---\r
title: Print library\r
description: Point the app at your model files so prints and projects stay connected.\r
order: 4\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - library\r
  - models\r
  - stl\r
  - 3mf\r
  - files\r
  - folder\r
  - browse models\r
  - where are my stls\r
  - slicer\r
  - desktop library\r
  - file formats\r
  - supported formats\r
  - which files can i add\r
  - step\r
  - gcode\r
  - obj\r
  - thumbnail\r
  - preview\r
  - no preview\r
  - model too big\r
platforms:\r
  - desktop\r
---\r
\r
The Print Library points Spool Hoarder at a folder of model files on your\r
computer and indexes them in place. Once indexed, you can browse, search, and\r
filter your models, open them straight into a slicer, and link them to the\r
projects you printed them for.\r
\r
The Print Library runs on **Mac and Windows only**. It indexes files on disk,\r
launches desktop apps, and supports drag-and-drop import, none of which are\r
possible on a phone or in a browser. On other platforms the library entry points\r
are hidden, and the routes redirect back to Settings.\r
\r
Nothing in your library root is ever moved unless you explicitly run\r
[Organize Library](/docs/organizing/organizing-model-files/). Scans and rescans\r
read files where they sit.\r
\r
## Choose a library root\r
\r
Open **Settings → Print Library**, or pick the Print Library destination from the\r
navigation rail on a wide screen. The first time you arrive, the setup card asks\r
you to **Choose Folder**.\r
\r
Pick one folder for Spool Hoarder to index. It scans the folder in place — your\r
files stay exactly where they are. Once a root is set, the card offers:\r
\r
- **Change Folder** — point at a different root.\r
- **Open Folder** — reveal the root in Finder or File Explorer.\r
- **Add Files** — copy new STL or 3MF files into the root. They land in\r
  **Needs Review** until you organize them.\r
- **Rescan** — re-index the root to pick up files added outside the app.\r
- **Organize Library** — open the organize preview to tidy the folder structure.\r
\r
On a Mac, if the OS revokes access to the folder after a restart, the card\r
prompts you to **Reauthorize Folder** and pick the same folder once more.\r
\r
You can also drag a folder onto the setup card to start a scan-only setup, or\r
drag STL and 3MF files onto it to drop them straight into **Needs Review**.\r
\r
## Supported file formats\r
\r
Spool Hoarder indexes two model formats: STL (\`.stl\`) and 3MF (\`.3mf\`). Those are\r
the only files that become models — in a scan, in **Add Files**, and in the\r
format filter. CAD sources such as STEP and sliced output such as G-code are not\r
indexed.\r
\r
Anything else in your library root is left exactly where it is and never appears\r
in the model grid, so you can keep design files, slicer profiles, and notes\r
beside your models without cluttering the library.\r
\r
Each model you add brings its companion files with it, so a model and its\r
paperwork stay together:\r
\r
- A file sharing the model's name — a matching \`.png\`, \`.jpg\`, \`.jpeg\`, \`.webp\`,\r
  \`.txt\`, \`.md\`, or \`.pdf\`.\r
- A readme or license file in the same folder, as \`.txt\` or \`.md\`.\r
\r
**Add Files** only offers STL and 3MF in the file picker, so you cannot pick the\r
wrong thing there. Dragging files in is looser: anything that is not an STL or a\r
3MF is quietly skipped, and if none of the files you dropped are models, the add\r
stops and Spool Hoarder asks you to select at least one STL or 3MF file.\r
\r
## Browse your models\r
\r
The library has three regions on a wide screen: a collections list on the left,\r
the model grid or list in the center, and an inspector on the right. On a compact\r
width, the same data fills the screen and a selected model opens a dedicated\r
detail page.\r
\r
### Collections\r
\r
The left-hand list groups your models into smart collections:\r
\r
- **Workflow** — **Needs Review** (files you added but have not organized yet),\r
  **Duplicate Candidates**, and **Needs Preview**.\r
- **Library** — **All Models**, **Favorites**, **Recently Added**, and\r
  **Linked to Projects**.\r
- **System** — **Archived** and **Trash**.\r
\r
A health card under the collections shows the total indexed model count and the\r
last scan time.\r
\r
### Search, sort, and filter\r
\r
A search box filters by name. Below it you can:\r
\r
- **Sort** by recently added, recently opened, name, format, modified at, file\r
  size, tags, print count, or project status.\r
- **Filter** by format (STL or 3MF), tag, source status, project link, favorites,\r
  or models that still need a preview.\r
\r
Switch between **Grid** and **List** view at any time.\r
\r
### Select and act on models\r
\r
Tap **Select models** to enter selection mode, then choose one or several models.\r
From there you can organize the selection, move it to Trash, archive it, or add\r
it to a project in one action.\r
\r
## Previews for big models\r
\r
Every model gets a picture in the grid. Spool Hoarder looks for one in this\r
order: an image sitting next to the model file under the same name (PNG, JPG,\r
JPEG, or WEBP), then the thumbnail packed inside the file for 3MF models, then a\r
snapshot it renders from the model's own geometry.\r
\r
That last step has a ceiling. Spool Hoarder does not render a snapshot for a\r
model over 60,000 triangles — it shows a placeholder instead and the model turns\r
up in **Needs Preview** until you give it a cover. Select it and choose\r
**Replace Cover Image** to point at a PNG, JPG, JPEG, or WEBP file; it is saved\r
next to the model file under the same name, and **Remove Cover Image** takes it\r
away again.\r
\r
The inspector has a **Mesh Preview** section with an interactive 3D view you can\r
rotate, along with the model's triangle count. It loads only when you open it, so\r
a heavy model never slows down browsing. That view goes up to 120,000 triangles;\r
past that, a note replaces it saying the file is too detailed for the in-app\r
preview and the cover picture is shown instead.\r
\r
Both ceilings count triangles, not megabytes, so a physically large but simple\r
model previews fine while a small, finely tessellated one may not.\r
\r
## Open files in a slicer\r
\r
Select a model and choose **Open In** to launch its primary file. The first time,\r
this is the system default. To add specific slicers or tools, open\r
**Settings → Print Library** and use **Open In Targets** to register apps such as\r
OrcaSlicer, Bambu Studio, Cura, or Blender. Spool Hoarder recognizes known apps\r
from their filename; custom apps can be renamed.\r
\r
## Related pages\r
\r
- [Organizing model files](/docs/organizing/organizing-model-files/)\r
- [Linking models to projects](/docs/organizing/linking-models-to-projects/)\r
`;export{e as default};
