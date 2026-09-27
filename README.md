# Motion — advertiser frontend

React + TypeScript frontend for a Pune mobile outdoor advertising prototype. The app runs on the supplied Vinext/Vite starter with reusable accessible UI components.

## Included

- Overview, searchable/filterable campaigns, and individual campaign reports.
- Image library: PNG/JPEG/GIF upload (5 MB), decoded-image validation, preview, rename and delete. Campaign-linked assets are protected from deletion.
- Campaign builder: selectable Pune sample areas, map layers, creative, fleet, 1–20 boxes and schedule validation.
- Review/checkout: transparent illustrative cost estimate, preserved draft and guarded demo submission.
- IndexedDB persistence for campaigns, drafts and image data; errors surface when storage is unavailable.
- Responsive sidebar and layouts, loading/empty/error states and accessible dialogs.

## Run locally

Use Node 22.13 or later and the pnpm version in package.json.

```sh
corepack pnpm install
corepack pnpm dev
```

`pnpm build` produces the deployment build. `node node_modules/typescript/bin/tsc --noEmit` checks types. The Sites host handles private access; the application itself does not implement user accounts.

## Source map

- `components/motion/workspace.tsx`: navigation and advertiser workflows.
- `components/motion/area-map.tsx`: interactive schematic, sample layers and area selection/export.
- `components/motion/model.ts`: types, seed fixtures, estimate/validation functions and browser storage adapter.
- `app/globals.css`: responsive visual system.
- `app/page.tsx` and `app/layout.tsx`: application entry and metadata.

## Demo boundaries

All audience, income, traffic, fleet and playback data are synthetic. The Pune map is a schematic, not a geographic basemap. Fleet A/B/C are fictitious partners. Campaign status does not advance automatically. The estimate uses ₹25 per box-hour, a 10% platform fee and an illustrative 18% tax; these are software-testing assumptions, not researched commercial rates. CPM is cost / estimated impressions * 1,000. Completed seed campaign costs exclude tax.

Uploads and submissions stay in IndexedDB for this browser and origin. They do not sync between devices; clearing browser storage removes them. No payment, real reservation, fleet command or screen playback is triggered. Image creatives only are implemented, as in the agreed advertiser architecture; no video transcoding is present.

Backend integration should replace the storage adapter, enforce authentication and authorization, validate availability and prices server-side, store media remotely and expose verified campaign/playback metrics. Replace the schematic with a licensed geographic map/data source before field use.

Optional WebMCP tools `read_campaigns` and `open_campaign` register only where `document.modelContext` is supported; ordinary UI does not depend on it.

## Validation performed

TypeScript checks passed. Browser checks covered incomplete-form errors, schedule entry, area/fleet selection, checkout arithmetic, back navigation, successful campaign submission and persistence after reload, image upload/rename/preview and linked-creative deletion protection. Desktop and 390 px iframe layouts were visually inspected. Optional WebMCP execution could not be tested because the preview browser did not expose modelContext.
