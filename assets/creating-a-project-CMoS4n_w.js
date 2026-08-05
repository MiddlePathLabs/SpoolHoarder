const e=`---
title: Creating a project
description: Set up a project to group the prints and filament for one job.
order: 1
status: published
updated: 2026-08-04
keywords:
  - project
  - new project
  - create project
  - start a project
  - plan a print
  - personal log
  - project limit
  - how many projects
  - tags
platforms:
  - all
---

A project in Spool Hoarder groups everything you used for one print job: the
filaments you planned to use, the usage you logged afterwards, and the running
total of weight and cost. Open the **Projects** tab to see every project, sort
and filter the list, and create new ones.

## When a project is worth creating

Create a project whenever you want to track filament for a specific job — a
multi-part print, a commission, a batch of the same model. A project gives you:

- A **filament plan** — the spools and planned grams you intend to use.
- A **usage log** — the actual grams you record after each print, deducted from
  the linked spools.
- A **running total** of weight used and what it cost.

You do not have to create a project just to deduct filament. Spool Hoarder also
keeps a built-in **Personal Log** for quick, standalone usage that is not tied to
a specific job. It sits at the top of your Projects list, cannot be deleted or
renamed, and does not count toward the free-tier project limit. See
[Quick log](/docs/projects/quick-log/) for that faster flow.

## Creating a project

1. Open the **Projects** tab.
2. Tap **New Project**. On a phone it is the button at the bottom of the screen;
   on a wide desktop window it is in the top app bar. If the list is empty, the
   **Create Your First Project** button does the same thing.
3. Give the project a **Project name**. This is the only required field.
4. Optionally choose a **Printer (Optional)**. The list defaults to your current
   printer, and you can pick **No Printer** instead.
5. Optionally add one or more filaments with **Add Filament**. You can skip this
   and add them later from the project.
6. Tap **Create**.

The name "Personal Log" is reserved, so you cannot give a project that name.

## What you set now versus later

At creation you only set the name, an optional printer, and optional filaments.
Everything else is added from inside the project afterwards:

- **Tags** — added on the project itself (see below).
- **Notes** — a free-text note kept on the project.
- **Planned grams** per filament — the required weight each filament should
  cover, which drives cost estimates and stock checks.
- **Status** — every project starts **Active**; you switch it to **Done** when
  finished. See [Completing a project](/docs/projects/completing-a-project/).

Filaments you add at creation are saved as a plan. You record the actual amount
used separately, by [logging usage](/docs/projects/logging-filament-usage/).

## Organizing projects with tags

Tags are added on the project, not in the create dialog. Open a project and use
the **Add tag** field to type any tag; it is saved in lowercase as you add it.

- **Filter by tag.** In the Projects list, tap **Filter projects** and pick one
  or more tags to narrow the list. A project only matches when it has every
  selected tag.
- **Reuse tags.** As you type, Spool Hoarder suggests tags you have already used
  on other projects, so your categories stay consistent.
- **Special prefixes.** Some prefixes get a little structure and their own icon.
  For example, order numbers use an \`order_\` prefix; typing \`ord\` suggests it.
  Order-number tags are never suggested from other projects, since each order
  number is unique.

Tags are purely organizational. They do not change how weight or cost is
calculated.

## Project limits

On iPhone, iPad, Mac, and Windows, the free tier supports up to five projects.
The Personal Log is not counted. If you try to create a sixth, Spool Hoarder
offers an upgrade to Spool Hoarder Pro for unlimited projects. Web and Linux are
not licensed platforms, so they are unrestricted.

See [Free trial and limits](/docs/account/free-trial-and-limits/) and
[Subscribing to Pro](/docs/account/subscribing-to-pro/) for the full breakdown.

## Related pages

- [Adding filaments to a project](/docs/projects/adding-filaments-to-a-project/)
- [Logging filament usage](/docs/projects/logging-filament-usage/)
- [Quick log](/docs/projects/quick-log/)
- [Completing a project](/docs/projects/completing-a-project/)
- [Free trial and limits](/docs/account/free-trial-and-limits/)
`;export{e as default};
