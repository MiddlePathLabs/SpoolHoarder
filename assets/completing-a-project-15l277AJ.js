const e=`---
title: Completing a project
description: Mark a project done, hide finished work, and reopen it later.
order: 5
status: published
updated: 2026-08-04
keywords:
  - complete
  - completed
  - finished
  - done
  - status
  - active
  - reopen
  - archive
  - hide completed
  - delete project
platforms:
  - all
---

Every project starts **Active**. When a job is finished, switch it to **Done**.
Completing a project is an organizational status — it tidies your list and helps
you focus on work in progress. It does not lock anything.

## Marking a project done

Open the project and tap **Done** in the status control at the top. The control
has two sides, **Active** and **Done**, so the same place is used to set either
status.

The built-in **Personal Log** has no status, so this control does not appear on
it.

## What changes when a project is done

- **It can be hidden.** In the Projects list, tap **Filter projects** and turn on
  **Hide Completed** to keep finished projects out of view. Turn it off again to
  see everything.
- **It sorts below active work.** Sorting the list by status keeps active
  projects first and completed ones after.
- **Usage and cost are untouched.** A completed project keeps its usage log,
  totals, and cost exactly as they were. You can still open it, read it, and even
  add to it.

Nothing is archived or moved: a completed project is the same project with a
different status flag.

## Reopening a project

Yes — a completed project can be reopened at any time. Open it and tap
**Active**. The status flips back, and the project returns to the active set.

## Does completing unlock sharing?

No. Marking a project **Done** does not unlock share options, and there is no
share action on a project today. Completion is purely for keeping your list
organized. If you want a shareable image, Spool Hoarder can produce share cards
for spools and for your overall inventory from elsewhere in the app; see
[Share cards](/docs/insights/share-cards/).

## Removing a project instead

To delete a project entirely, open it, use the menu, and choose
**Delete Project**. Confirm the prompt. Every usage entry on the project is
removed and each affected spool gets its weight restored first, so deleting a
project never loses filament. **Personal Log** cannot be deleted.

Deleting cannot be undone, so it is separate from simply marking a project done.

## Related pages

- [Creating a project](/docs/projects/creating-a-project/)
- [Logging filament usage](/docs/projects/logging-filament-usage/)
- [Project costs](/docs/projects/project-costs/)
- [Share cards](/docs/insights/share-cards/)
`;export{e as default};
