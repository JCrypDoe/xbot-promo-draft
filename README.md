# Earth3 Xbot Promo Draft (Who/What/When/Where/Why)

This interactive draft now pulls from the official **Earth³ Mint Template Catalog v1.0** data model.

## Run

Open `index.html` in a browser.

No build step or dependencies are required.

## What is wired

- `catalog-data.js` is generated from `Simple Mint Template Earth3 Node/mint_templates.json`.
- Catalog-driven controls:
  - Pillar filter (WHO/WHAT/WHEN/WHERE/WHY)
  - Mint type selector (from `mint_types`)
  - Defaults autopopulate (`rarity`, `chain`, `epoch`, `derivative_rights`, `storage_type`, mint ID format)
- Existing quick templates remain, with **Sample 1 · J Doe Screenshot (Open Public Use)** pinned at top.
- Concept Filter on Quick Templates (`All Concepts`, `AI OS`, `PayTooPlay`, `PlayerPower`, `moMintNTime`) to quickly browse promo-focused samples.
- Marketing Assistant panel that auto-generates buzz words, 15s/30s pitch copy, and talking points from current mint + HUD trigger.
- Promo Hyperlink Map section in `index.html` with jump links + glossary cards for `aDaB`, `CowsCome4Dayz`, `GXYZ`, HUD triggers, and architecture terms.

## How to refresh catalog data

If `mint_templates.json` changes, regenerate `catalog-data.js` with:

`node -e "const fs=require('fs');const src='Simple Mint Template Earth3 Node/mint_templates.json';const dst='xbot-promo-draft/catalog-data.js';const j=JSON.parse(fs.readFileSync(src,'utf8'));const keep={_meta:j._meta,dropdown_options:{rarity_class:j.dropdown_options.rarity_class,chain:j.dropdown_options.chain,epoch:j.dropdown_options.epoch,derivative_rights:j.dropdown_options.derivative_rights,storage_type:j.dropdown_options.storage_type,pillars:j.dropdown_options.pillars},mint_types:j.mint_types.map(m=>({id:m.id,mint_type:m.mint_type,display_name:m.display_name,pillar:m.pillar,description:m.description,rights_categories:m.rights_categories,default_category_tags:m.default_category_tags,rarity_class_default:m.rarity_class_default,chain_default:m.chain_default,format_default:m.format_default,storage_type_default:m.storage_type_default,access_permissions_default:m.access_permissions_default,derivative_rights_default:m.derivative_rights_default,governance_weight_default:m.governance_weight_default,stake_value_default:m.stake_value_default,revenue_share_pct_default:m.revenue_share_pct_default,schema_overrides:m.schema_overrides,ui_hint:m.ui_hint}))};fs.writeFileSync(dst,'window.EARTH3_MINT_CATALOG = '+JSON.stringify(keep,null,2)+';\n','utf8');"`

## Suggested next connection to node repo

After validating language and flow, connect this UI to your planned routes:

- `POST /api/nft/mint`
- `GET /api/assets/verify`
- `POST /api/telemetry`

## Sample scenarios

sample-scenarios.js adds a test pack of realistic mint scenarios for Fast Prompt validation (player, creator, operator, sponsor, legal).

Added promo-focused pretend samples for current concept testing:
- AI OS Autopilot Lane
- PayTooPlay Event Loop
- PlayerPower Rank Badge
- moMintNTime Streak License
- Sponsor PlayerPower Pool

Doc-grounded concept mapping notes:
- `promo-concept-notes.md` summarizes how Xbot, PlayerPower, moMintNTime, AI OS flow, and rights graph language map into promo mint templates.
- `hud-wow-color-bible.md` defines current color semantics for HUD-WoW mint signals.
- `hud-wow-trigger-samples.md` maps smart-contract mint conditions to HUD opportunity trigger colors.


## Quick edit loop (VS Code + Copilot)

1. Open this folder in VS Code: `xbot-promo-draft`.
2. Edit copy in `index.html` and style in `styles.css`.
3. Refresh the browser tab to preview changes.
4. Ask Copilot Chat for small, focused edits.

Recommended starting files:
- `index.html` (promo content, sections, anchors)
- `styles.css` (colors, spacing, typography)
- `builder.html` (separate local builder surface)

## Copilot prompt pack (copy/paste)

Use these directly in Copilot Chat:

- "Refactor only the Earth3 Tools cards in `index.html` for readability. Do not change section order or IDs."
- "Tune color contrast in `styles.css` for dark mode accessibility while preserving brand palette."
- "Shorten all paragraph copy under `#bw-momintntime` by 20% without losing meaning."
- "Find and fix broken in-page anchors in `index.html` and list what changed."
- "Standardize heading capitalization in `index.html` and keep all custom terms unchanged."

## GitHub update commands

From this folder, run:

```powershell
git add .
git commit -m "Update promo copy and styling"
git push
```

If you want a safe checkpoint before experimenting:

```powershell
git checkout -b tweak/colors-pass
git add .
git commit -m "Color pass"
git push -u origin tweak/colors-pass
```

## Guardrails for AI edits

- Keep IDs stable (for links): `#pitch-15`, `#how-it-works`, `#buzzword-explorer`, `#bw-*`.
- Keep canonical term as `PayTooPlay` for now.
- Keep `index.html` as the narrative page and `builder.html` separate.
- Prefer small commits so you can easily roll back.
