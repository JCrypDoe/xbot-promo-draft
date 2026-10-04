# HUD-WoW Trigger Samples (Promo)

This maps **mint payload conditions** to **player-facing HUD signals**.

## 1) Jix-eee Green + Cardano Blue

Trigger ID: `jix-green-cardano-blue`

Suggested meaning: **Revenue Route Verified under Rules of the Game**

Recommended condition:
- `contract.chain` includes `Cardano` or `TimeChain`
- `why.rights.revenue = true` **or** text includes `revenue`, `royalty`, `earn`, `reward`
- `contract.derivativeRights != CLOSED`

## 2) Bleed Lime Green + Sunrise Orange

Trigger ID: `paytoo-loop`

Suggested meaning: **PayTooPlay Opportunity Live**

Recommended condition:
- text includes `PayTooPlay`, `entry fee`, `prize pool`, `micro-entry`

## 3) Sunrise + Coral

Trigger ID: `playerpower-governance`

Suggested meaning: **PlayerPower / Governance Unlock**

Recommended condition:
- text includes `PlayerPower`, `citizen`, `governance`, `vote`, `influence`
- chain context still aligned to `Cardano/TimeChain`

## 4) Midnight Violet + ZK White

Trigger ID: `privacy-proof`

Suggested meaning: **Privacy Proof Opportunity**

Recommended condition:
- text includes `privacy`, `zk`, `proof`, `meshX`, or `helixbox`

## 5) Cardano Blue + Royalty Gold

Trigger ID: emix-royalty-loop

Suggested meaning: **Remix + Royalty Opportunity**

Recommended condition:
- text includes emix, oyalty, derivative, license, or split
- revenue intent exists in rights or copy
- derivative rights are not CLOSED

Example narrative:
- Artist mints a song with rules.
- Creator remixes it into a Microsoft game layer.
- When Player Doe sells the remix, payout splits route instantly to artist + platform participants.
