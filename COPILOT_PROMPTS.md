# Copilot Prompt Pack for `xbot-promo-draft`

Use these prompts in VS Code Copilot Chat to make focused edits without breaking page structure.

## Rules to include in prompts

Copy this into your first message when starting a session:

```text
Project rules:
- Edit only files inside xbot-promo-draft.
- Keep index.html as the narrative page and builder.html separate.
- Do not rename section IDs or in-page anchors.
- Keep canonical term as PayTooPlay.
- Preserve custom terms exactly: moMintNTime, PlayerPowerID, CowsCome4Dayz, GXYZ LoGiK, Titanium Rails, HUD-WoW, GatesTrains.v01.
- Make minimal changes and explain what changed.
```

## Structure-safe prompts

```text
In index.html, verify all anchor links still match section IDs. Fix only broken links and list each fix.
```

```text
Refine heading hierarchy in index.html for readability, but do not change section order and do not change any IDs.
```

```text
Move duplicated phrases into a single concise paragraph in Earth3 Tools sections while preserving meaning.
```

## Copy editing prompts

```text
Proofread index.html for spelling and punctuation only. Preserve brand terms exactly as written.
```

```text
Shorten each paragraph under the moMintNTime section by about 15% while keeping the same intent and examples.
```

```text
Rewrite the PayTooPlay section in a cleaner, investor-friendly tone while keeping it plain language and under 220 words.
```

## Style/theme prompts (`styles.css`)

```text
Adjust styles.css to improve contrast and readability for dark backgrounds. Keep the current visual identity and spacing scale.
```

```text
Create a second color theme by adding CSS variables only. Do not change HTML structure.
```

```text
Reduce visual noise: soften glow effects and tighten card spacing slightly while preserving hierarchy.
```

## Safety prompts before large edits

```text
Before editing, list exactly which files and sections you plan to change.
```

```text
After editing, output a concise changelog with file names and what was modified in each.
```

## Git prompts (from terminal)

```text
Create a safe branch for style experiments and commit all current changes.
```

```text
Write a clear commit message for the current staged changes in conventional style.
```

## Quick local preview

- Open `index.html` directly for fast no-build preview.
- Optional live reload (if you install VS Code Live Server): right-click `index.html` ? Open with Live Server.

## Manual rollback commands

```powershell
git status
git log --oneline -n 8
git restore --source=HEAD~1 -- index.html styles.css
```

## Suggested branch names

- `tweak/color-pass`
- `tweak/copy-cleanup`
- `tweak/anchor-fix`
- `feature/new-tool-section`
