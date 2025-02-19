# Discussion

## Initial Review

I started by downloading the repo, reading through the Notion notes. I created a repo in my GitHub as per the instructions and started reviewing the code. There's a number of things wrong with repo and given the two-hour suggested time limit, I will have to prioritize the issues. Below are the things I noticed and the priority I will assign to them based on the impact they have on the user.

List of improvements after the first review:

High Priority:

[x] - MM-002 - Initial UI hydration error - On page load we get an error in the console - Priority: High
[x] - MM-003 - HTML th cannot be child of thead console error - May be related to issue MM-002 - Causes hydration error
[x] - MM-004 - Error outside suspense boundary forcing client-side rendering - Priority: High

Medium Priority:
[] - MM-005 - Unique key prop missing in the list of items
[] - MM-010 - Resolve Tailwind CSS install error
[] - MM-006 - Hero image - Create header with Solace logo
[] - MM-007 - Update Search Bar - Update Search bar UI
[] - MM-008 - Update table item UI

Low Priority:
[] - MM-001 - Dependencies are out of date - `npm audit` flags some breaking changes in the esbuild package
[] - MM-009 - Fix typescript errors in the `page.tsx` file
[] - MM-011 - Componentize the search bar and table items
[] - MM-012 - Fix layout shift on page load
