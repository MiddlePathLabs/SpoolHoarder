const e=`---\r
title: Creating a project\r
description: Set up a project to group the prints and filament for one job.\r
order: 1\r
status: published\r
updated: 2026-08-04\r
keywords:\r
  - project\r
  - new project\r
  - create project\r
  - start a project\r
  - plan a print\r
  - personal log\r
  - project limit\r
  - how many projects\r
  - tags\r
platforms:\r
  - all\r
---\r
\r
A project in Spool Hoarder groups everything you used for one print job: the\r
filaments you planned to use, the usage you logged afterward, and the running\r
total of weight and cost. Open the **Projects** tab to see every project, sort\r
and filter the list, and create new ones.\r
\r
## When a project is worth creating\r
\r
Create a project whenever you want to track filament for a specific job — a\r
multi-part print, a commission, a batch of the same model. A project gives you:\r
\r
- A **filament plan** — the spools and planned grams you intend to use.\r
- A **usage log** — the actual grams you record after each print, deducted from\r
  the linked spools.\r
- A **running total** of weight used and what it cost.\r
\r
You do not have to create a project just to deduct filament. Spool Hoarder also\r
keeps a built-in **Personal Log** for quick, standalone usage that is not tied to\r
a specific job. It sits at the top of your Projects list, cannot be deleted or\r
renamed, and does not count toward the free-tier project limit. See\r
[Quick log](/docs/projects/quick-log/) for that faster flow.\r
\r
## Creating a project\r
\r
1. Open the **Projects** tab.\r
2. Tap **New Project**. On a phone it is the button at the bottom of the screen;\r
   on a wide desktop window it is in the top app bar. If the list is empty, the\r
   **Create Your First Project** button does the same thing.\r
3. Give the project a **Project name**. This is the only required field.\r
4. Optionally choose a **Printer (Optional)**. The list defaults to your current\r
   printer, and you can pick **No Printer** instead.\r
5. Optionally add one or more filaments with **Add Filament**. You can skip this\r
   and add them later from the project.\r
6. Tap **Create**.\r
\r
The name "Personal Log" is reserved, so you cannot give a project that name.\r
\r
## What you set now versus later\r
\r
At creation you only set the name, an optional printer, and optional filaments.\r
Everything else is added from inside the project afterward:\r
\r
- **Tags** — added on the project itself (see below).\r
- **Notes** — a free-text note kept on the project.\r
- **Planned grams** per filament — the required weight each filament should\r
  cover, which drives cost estimates and stock checks.\r
- **Status** — every project starts **Active**; you switch it to **Done** when\r
  finished. See [Completing a project](/docs/projects/completing-a-project/).\r
\r
Filaments you add at creation are saved as a plan. You record the actual amount\r
used separately, by [logging usage](/docs/projects/logging-filament-usage/).\r
\r
## Organizing projects with tags\r
\r
Tags are added on the project, not in the create dialog. Open a project and use\r
the **Add tag** field to type any tag; it is saved in lowercase as you add it.\r
\r
- **Filter by tag.** In the Projects list, tap **Filter projects** and pick one\r
  or more tags to narrow the list. A project only matches when it has every\r
  selected tag.\r
- **Reuse tags.** As you type, Spool Hoarder suggests tags you have already used\r
  on other projects, so your categories stay consistent.\r
- **Special prefixes.** Some prefixes get a little structure and their own icon.\r
  For example, order numbers use an \`order_\` prefix; typing \`ord\` suggests it.\r
  Order-number tags are never suggested from other projects, since each order\r
  number is unique.\r
\r
Tags are purely organizational. They do not change how weight or cost is\r
calculated.\r
\r
## Project limits\r
\r
The free tier supports up to five projects.\r
The Personal Log is not counted. If you try to create a sixth, Spool Hoarder\r
offers an upgrade to Spool Hoarder Pro for unlimited projects.\r
\r
See [Free trial and limits](/docs/account/free-trial-and-limits/) and\r
[Subscribing to Pro](/docs/account/subscribing-to-pro/) for the full breakdown.\r
\r
## Related pages\r
\r
- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)\r
- [Logging filament usage](/docs/projects/logging-filament-usage/)\r
- [Quick log](/docs/projects/quick-log/)\r
- [Completing a project](/docs/projects/completing-a-project/)\r
- [Free trial and limits](/docs/account/free-trial-and-limits/)\r
`;export{e as default};
