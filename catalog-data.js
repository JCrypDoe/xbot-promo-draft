window.EARTH3_MINT_CATALOG = {
  "_meta": {
    "schema_version": "1.0.0",
    "catalog_version": "Earth³ Mint Template Catalog v1.0",
    "generated": "2026-10-03T10:55:00-04:00",
    "description": "Earth³ Mint Template Catalog — WHO/WHAT/WHEN/WHERE/WHY rights-first data layer for the Earth3 Node Test Interface app.",
    "total_mint_types": 28,
    "pillars": [
      "WHO",
      "WHAT",
      "WHEN",
      "WHERE",
      "WHY"
    ]
  },
  "dropdown_options": {
    "rarity_class": [
      {
        "value": "COMMON",
        "label": "Common",
        "supply_cap": "Unlimited",
        "gov_weight": 1
      },
      {
        "value": "UNCOMMON",
        "label": "Uncommon",
        "supply_cap": "10,000",
        "gov_weight": 2
      },
      {
        "value": "RARE",
        "label": "Rare",
        "supply_cap": "1,000",
        "gov_weight": 5
      },
      {
        "value": "LEGENDARY",
        "label": "Legendary",
        "supply_cap": "100",
        "gov_weight": 20
      },
      {
        "value": "GENESIS",
        "label": "Genesis",
        "supply_cap": "1",
        "gov_weight": 100
      }
    ],
    "chain": [
      {
        "value": "TimeChain",
        "label": "TimeChain (Native)"
      },
      {
        "value": "Ethereum",
        "label": "Ethereum"
      },
      {
        "value": "Polygon",
        "label": "Polygon"
      },
      {
        "value": "Solana",
        "label": "Solana"
      },
      {
        "value": "Base",
        "label": "Base"
      }
    ],
    "epoch": [
      {
        "value": "Epoch-00",
        "label": "Epoch-00 — Genesis"
      },
      {
        "value": "Epoch-01",
        "label": "Epoch-01 — Day0"
      },
      {
        "value": "Epoch-02",
        "label": "Epoch-02 — Expansion"
      },
      {
        "value": "Epoch-03",
        "label": "Epoch-03 — Season One"
      },
      {
        "value": "Epoch-04",
        "label": "Epoch-04 — Season Two"
      }
    ],
    "derivative_rights": [
      {
        "value": "NONE",
        "label": "None — No derivatives allowed"
      },
      {
        "value": "PERSONAL",
        "label": "Personal — Personal use only"
      },
      {
        "value": "COMMERCIAL",
        "label": "Commercial — Commercial use allowed"
      },
      {
        "value": "OPEN",
        "label": "Open — Fully open, any use"
      }
    ],
    "storage_type": [
      {
        "value": "none",
        "label": "None (pending)"
      },
      {
        "value": "local",
        "label": "Local / Helixbox"
      },
      {
        "value": "azure",
        "label": "Azure Blob"
      },
      {
        "value": "meshX",
        "label": "meshX Network"
      },
      {
        "value": "ipfs",
        "label": "IPFS"
      },
      {
        "value": "arweave",
        "label": "Arweave"
      }
    ],
    "pillars": [
      {
        "value": "WHO",
        "label": "🪪 WHO — Identity & Attribution",
        "color": "#22d3ee"
      },
      {
        "value": "WHAT",
        "label": "📦 WHAT — Asset & Content",
        "color": "#a78bfa"
      },
      {
        "value": "WHEN",
        "label": "⏱ WHEN — Temporal & Epoch",
        "color": "#f59e0b"
      },
      {
        "value": "WHERE",
        "label": "🌐 WHERE — Location & Node",
        "color": "#10b981"
      },
      {
        "value": "WHY",
        "label": "⚖️ WHY — Purpose & Governance",
        "color": "#ef4444"
      }
    ]
  },
  "mint_types": [
    {
      "id": "player-id",
      "mint_type": "PlayerID",
      "display_name": "PlayerID Mint",
      "pillar": "WHO",
      "description": "The foundational identity token for every Earth³ player.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": false,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHO:identity",
        "WHO:player",
        "WHO:primary"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read",
        "write",
        "transfer"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 1,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. PlayerID-AlphaWolf-001",
        "mint_id_format": "E3-WHO-PID-{NODE}-{SEQ}"
      },
      "ui_hint": "One per player. Links to all other Mints this player owns."
    },
    {
      "id": "creator-pass",
      "mint_type": "CreatorPass",
      "display_name": "CreatorPass Mint",
      "pillar": "WHO",
      "description": "Grants creator-tier rights for content publishing and IP registration.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": false,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHO:creator",
        "WHAT:ip",
        "WHY:access"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "write",
        "mint",
        "delegate"
      ],
      "derivative_rights_default": "COMMERCIAL",
      "governance_weight_default": 2,
      "stake_value_default": 10,
      "revenue_share_pct_default": 5,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. CreatorPass-FrontierMedia",
        "mint_id_format": "E3-WHO-CRP-{NODE}-{SEQ}"
      },
      "ui_hint": "Required to publish to the Earth³ content registry."
    },
    {
      "id": "node-key",
      "mint_type": "NodeKey",
      "display_name": "NodeKey Mint",
      "pillar": "WHO",
      "description": "Identifies and authenticates an Earth³ Node operator.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": false,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHO:node-operator",
        "WHERE:node",
        "WHY:govern"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "meshX",
      "access_permissions_default": [
        "read",
        "write",
        "mint",
        "govern",
        "stake"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 10,
      "stake_value_default": 500,
      "revenue_share_pct_default": 15,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. NodeKey-ATL01",
        "mint_id_format": "E3-WHO-NDK-{NODE}-{SEQ}"
      },
      "ui_hint": "Required to operate an Earth³ Node. Stake-weighted governance."
    },
    {
      "id": "team-card",
      "mint_type": "TeamCard",
      "display_name": "TeamCard Mint",
      "pillar": "WHO",
      "description": "Represents membership in a named Earth³ team or collective.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": false,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHO:team",
        "WHO:membership",
        "WHY:access"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read",
        "delegate"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 1,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. TeamCard-FrontierCrew",
        "mint_id_format": "E3-WHO-TMC-{NODE}-{SEQ}"
      },
      "ui_hint": "Links multiple PlayerID Mints into a named collective."
    },
    {
      "id": "collab-badge",
      "mint_type": "CollabBadge",
      "display_name": "CollabBadge Mint",
      "pillar": "WHO",
      "description": "Records a verified collaboration between two or more WHO identities.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": true,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHO:collab",
        "WHO:verified",
        "WHAT:record",
        "WHEN:timestamped"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. CollabBadge-AliceXBob-EP01",
        "mint_id_format": "E3-WHO-CLB-{NODE}-{SEQ}"
      },
      "ui_hint": "Immutable proof-of-collaboration. Links two or more PlayerID Mints."
    },
    {
      "id": "gear-nft",
      "mint_type": "GearNFT",
      "display_name": "GearNFT Mint",
      "pillar": "WHAT",
      "description": "A digital gear or equipment item (in-game or real-world linked).",
      "rights_categories": {
        "WHO": false,
        "WHAT": true,
        "WHEN": false,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHAT:gear",
        "WHAT:equipment",
        "WHAT:item"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "glb",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "transfer"
      ],
      "derivative_rights_default": "PERSONAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. GearNFT-HelmX-GoldEdition",
        "mint_id_format": "E3-WHAT-GNF-{NODE}-{SEQ}"
      },
      "ui_hint": "Can be linked to a real-world SKU via attributes array."
    },
    {
      "id": "skin-pack",
      "mint_type": "SkinPack",
      "display_name": "SkinPack Mint",
      "pillar": "WHAT",
      "description": "A cosmetic pack containing one or more visual customization assets.",
      "rights_categories": {
        "WHO": false,
        "WHAT": true,
        "WHEN": false,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHAT:skin",
        "WHAT:cosmetic",
        "WHAT:pack"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "png",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "transfer"
      ],
      "derivative_rights_default": "PERSONAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. SkinPack-NeonRave-S01",
        "mint_id_format": "E3-WHAT-SKP-{NODE}-{SEQ}"
      },
      "ui_hint": "Use linked_mints to bundle multiple skin assets into one pack."
    },
    {
      "id": "reel-clip",
      "mint_type": "ReelClip",
      "display_name": "ReelClip Mint",
      "pillar": "WHAT",
      "description": "A minted video clip asset from the CPX² or Skate ecosystem.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": true,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHAT:video",
        "WHAT:clip",
        "WHO:creator",
        "WHEN:recorded"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "mp4",
      "storage_type_default": "meshX",
      "access_permissions_default": [
        "read",
        "transfer",
        "revenue"
      ],
      "derivative_rights_default": "COMMERCIAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 10,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. ReelClip-CPX2-SkatePark-GS001",
        "mint_id_format": "E3-WHAT-RCL-{NODE}-{SEQ}"
      },
      "ui_hint": "Pairs with OriginStamp for timestamp proof. Revenue-share enabled."
    },
    {
      "id": "photo-reel",
      "mint_type": "PhotoReeL",
      "display_name": "PhotoReeL Mint",
      "pillar": "WHAT",
      "description": "A minted PhotoReeL photography or visual capture asset.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": true,
        "WHERE": true,
        "WHY": false
      },
      "default_category_tags": [
        "WHAT:photo",
        "WHAT:visual",
        "WHO:creator",
        "WHEN:captured",
        "WHERE:geopin"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "jpg",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "transfer",
        "revenue"
      ],
      "derivative_rights_default": "COMMERCIAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 10,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. PhotoReeL-Urban-AtlantaStreet-001",
        "mint_id_format": "E3-WHAT-PRL-{NODE}-{SEQ}"
      },
      "ui_hint": "Can carry GPS metadata via GeoPin cross-tag. Revenue-share enabled."
    },
    {
      "id": "mod-kit",
      "mint_type": "ModKit",
      "display_name": "ModKit Mint",
      "pillar": "WHAT",
      "description": "A mod package for Earth³-compatible game environments.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": false,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHAT:mod",
        "WHAT:package",
        "WHO:creator",
        "WHY:license"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "write",
        "transfer"
      ],
      "derivative_rights_default": "COMMERCIAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 5,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. ModKit-SkatePhysicsV2",
        "mint_id_format": "E3-WHAT-MDK-{NODE}-{SEQ}"
      },
      "ui_hint": "Requires CreatorPass. Derivative rights define usage scope."
    },
    {
      "id": "vector-board",
      "mint_type": "VectorBoard",
      "display_name": "VectorBoard Mint",
      "pillar": "WHAT",
      "description": "A Skate Vector or board graphics asset.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": false,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHAT:vector",
        "WHAT:skate",
        "WHAT:graphics",
        "WHO:creator"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "svg",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "transfer"
      ],
      "derivative_rights_default": "PERSONAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. VectorBoard-CrimsonEdge-LimitedRun",
        "mint_id_format": "E3-WHAT-VCB-{NODE}-{SEQ}"
      },
      "ui_hint": "Limited edition board design. Link to SkinPack for full cosmetic bundle."
    },
    {
      "id": "sound-track",
      "mint_type": "SoundTrack",
      "display_name": "SoundTrack Mint",
      "pillar": "WHAT",
      "description": "A minted audio asset tied to a moment, game, or campaign.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHAT:audio",
        "WHAT:music",
        "WHO:creator",
        "WHEN:epoch",
        "WHY:license"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "wav",
      "storage_type_default": "meshX",
      "access_permissions_default": [
        "read",
        "transfer",
        "revenue"
      ],
      "derivative_rights_default": "COMMERCIAL",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 15,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. SoundTrack-Epoch01-Drop-NeonPulse",
        "mint_id_format": "E3-WHAT-STK-{NODE}-{SEQ}"
      },
      "ui_hint": "Revenue-share enabled. Can be bundled with ReelClip via linked_mints."
    },
    {
      "id": "epoch-mark",
      "mint_type": "EpochMark",
      "display_name": "EpochMark Mint",
      "pillar": "WHEN",
      "description": "Marks the opening of a new Earth³ Epoch.",
      "rights_categories": {
        "WHO": false,
        "WHAT": false,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHEN:epoch",
        "WHEN:genesis",
        "WHY:govern"
      ],
      "rarity_class_default": "GENESIS",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "arweave",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 100,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. EpochMark-Epoch02-Open",
        "mint_id_format": "E3-WHEN-EPM-{NODE}-{SEQ}"
      },
      "ui_hint": "Issued once per Epoch. Immutable on Arweave. Triggers epoch transitions."
    },
    {
      "id": "season-pass",
      "mint_type": "SeasonPass",
      "display_name": "SeasonPass Mint",
      "pillar": "WHEN",
      "description": "Grants access to a full Earth³ season's content and events.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHEN:season",
        "WHEN:expiry",
        "WHO:player",
        "WHY:access"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read",
        "transfer"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 1,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. SeasonPass-S01-Player",
        "mint_id_format": "E3-WHEN-SPS-{NODE}-{SEQ}"
      },
      "ui_hint": "Set expiry_timestamp to season end date. Links to EventGate Mints."
    },
    {
      "id": "event-gate",
      "mint_type": "EventGate",
      "display_name": "EventGate Mint",
      "pillar": "WHEN",
      "description": "Time-locked access to a specific event or drop window.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": true,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHEN:event",
        "WHEN:time-gate",
        "WHERE:location",
        "WHO:player",
        "WHY:access"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. EventGate-Drop01-Nov2026",
        "mint_id_format": "E3-WHEN-EVG-{NODE}-{SEQ}"
      },
      "ui_hint": "Has both mint_timestamp (open) and expiry_timestamp (close)."
    },
    {
      "id": "time-lock",
      "mint_type": "TimeLock",
      "display_name": "TimeLock Mint",
      "pillar": "WHEN",
      "description": "A general-purpose time-restricted asset or right.",
      "rights_categories": {
        "WHO": false,
        "WHAT": false,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHEN:time-lock",
        "WHEN:expiry",
        "WHY:access"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. TimeLock-StakeVault-Q4-2026",
        "mint_id_format": "E3-WHEN-TLK-{NODE}-{SEQ}"
      },
      "ui_hint": "Status auto-transitions from LOCKED → ACTIVE at mint_timestamp."
    },
    {
      "id": "origin-stamp",
      "mint_type": "OriginStamp",
      "display_name": "OriginStamp Mint",
      "pillar": "WHEN",
      "description": "An immutable timestamp proving the first existence of an asset.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": true,
        "WHERE": false,
        "WHY": false
      },
      "default_category_tags": [
        "WHEN:origin",
        "WHEN:proof",
        "WHO:creator",
        "WHAT:record"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "arweave",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. OriginStamp-ReelClip-CPX2-GS001",
        "mint_id_format": "E3-WHEN-ORS-{NODE}-{SEQ}"
      },
      "ui_hint": "Stored on Arweave for permanent immutability. One per source asset."
    },
    {
      "id": "node-anchor",
      "mint_type": "NodeAnchor",
      "display_name": "NodeAnchor Mint",
      "pillar": "WHERE",
      "description": "Binds a Mint or asset to a specific Earth³ Node.",
      "rights_categories": {
        "WHO": false,
        "WHAT": false,
        "WHEN": false,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHERE:node",
        "WHERE:anchor",
        "WHY:govern"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "meshX",
      "access_permissions_default": [
        "read",
        "write",
        "govern"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 5,
      "stake_value_default": 100,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. NodeAnchor-ATL01",
        "mint_id_format": "E3-WHERE-NDA-{NODE}-{SEQ}"
      },
      "ui_hint": "Required for any WHERE-pillar Mint. Establishes node_id on the record."
    },
    {
      "id": "zone-claim",
      "mint_type": "ZoneClaim",
      "display_name": "ZoneClaim Mint",
      "pillar": "WHERE",
      "description": "Claims territorial rights within an Earth³ Zone.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": false,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHERE:zone",
        "WHERE:territory",
        "WHO:node-operator",
        "WHY:govern"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "meshX",
      "access_permissions_default": [
        "read",
        "write",
        "govern"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 10,
      "stake_value_default": 250,
      "revenue_share_pct_default": 5,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. ZoneClaim-Zone04-Northeast",
        "mint_id_format": "E3-WHERE-ZNC-{NODE}-{SEQ}"
      },
      "ui_hint": "Requires NodeKey. Linked to TerritoryFlag Mints for dispute resolution."
    },
    {
      "id": "territory-flag",
      "mint_type": "TerritoryFlag",
      "display_name": "TerritoryFlag Mint",
      "pillar": "WHERE",
      "description": "A governance flag planted in a claimed territory.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": false,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHERE:territory",
        "WHERE:flag",
        "WHO:node-operator",
        "WHY:govern"
      ],
      "rarity_class_default": "LEGENDARY",
      "chain_default": "TimeChain",
      "format_default": "svg",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "govern"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 20,
      "stake_value_default": 1000,
      "revenue_share_pct_default": 10,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. TerritoryFlag-Zone04-FrontierCorp",
        "mint_id_format": "E3-WHERE-TRF-{NODE}-{SEQ}"
      },
      "ui_hint": "High governance weight. Burning this Mint releases the territory claim."
    },
    {
      "id": "chain-plug",
      "mint_type": "ChainPlug",
      "display_name": "ChainPlug Mint",
      "pillar": "WHERE",
      "description": "Cross-chain bridge credential anchoring an asset to multiple networks.",
      "rights_categories": {
        "WHO": false,
        "WHAT": true,
        "WHEN": false,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHERE:cross-chain",
        "WHERE:bridge",
        "WHAT:credential",
        "WHY:access"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "transfer"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 50,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. ChainPlug-TimeChain-ETH-Poly",
        "mint_id_format": "E3-WHERE-CHP-{NODE}-{SEQ}"
      },
      "ui_hint": "Carries source chain + target chain in attributes. Bridges TimeChain ↔ ETH ↔ Polygon."
    },
    {
      "id": "geo-pin",
      "mint_type": "GeoPin",
      "display_name": "GeoPin Mint",
      "pillar": "WHERE",
      "description": "Binds a Mint to real-world GPS coordinates or location data.",
      "rights_categories": {
        "WHO": false,
        "WHAT": false,
        "WHEN": true,
        "WHERE": true,
        "WHY": false
      },
      "default_category_tags": [
        "WHERE:geo",
        "WHERE:gps",
        "WHEN:captured"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. GeoPin-Atlanta-Ponce-33.7490-84.3880",
        "mint_id_format": "E3-WHERE-GPN-{NODE}-{SEQ}"
      },
      "ui_hint": "Store lat/lng in attributes as {trait_type: 'lat', value: 33.749} etc."
    },
    {
      "id": "access-key",
      "mint_type": "AccessKey",
      "display_name": "AccessKey Mint",
      "pillar": "WHY",
      "description": "A permission token granting entry to gated content or features.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHY:access",
        "WHY:permission",
        "WHO:player",
        "WHEN:expiry"
      ],
      "rarity_class_default": "COMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. AccessKey-VaultAlpha-S01",
        "mint_id_format": "E3-WHY-ACK-{NODE}-{SEQ}"
      },
      "ui_hint": "Can be time-limited via expiry_timestamp. Works with ZK gate verification."
    },
    {
      "id": "govern-vote",
      "mint_type": "GovernVote",
      "display_name": "GovernVote Mint",
      "pillar": "WHY",
      "description": "A governance token granting weighted voting rights in Earth³ decisions.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHY:govern",
        "WHY:vote",
        "WHO:node-operator",
        "WHEN:epoch"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read",
        "govern"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 10,
      "stake_value_default": 100,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. GovernVote-Epoch02-PropA",
        "mint_id_format": "E3-WHY-GVT-{NODE}-{SEQ}"
      },
      "ui_hint": "governance_weight determines vote power. Epoch-scoped via WHEN cross-tag."
    },
    {
      "id": "stake-right",
      "mint_type": "StakeRight",
      "display_name": "StakeRight Mint",
      "pillar": "WHY",
      "description": "Represents staking rights in an Earth³ node or pool.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": false,
        "WHERE": true,
        "WHY": true
      },
      "default_category_tags": [
        "WHY:stake",
        "WHY:earn",
        "WHO:node-operator",
        "WHERE:node"
      ],
      "rarity_class_default": "RARE",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read",
        "stake"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 5,
      "stake_value_default": 500,
      "revenue_share_pct_default": 20,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. StakeRight-ATL01-PoolA",
        "mint_id_format": "E3-WHY-STK-{NODE}-{SEQ}"
      },
      "ui_hint": "stake_value in E3 tokens. revenue_share_pct defines pool yield distribution."
    },
    {
      "id": "revenue-share",
      "mint_type": "RevenueShare",
      "display_name": "RevenueShare Mint",
      "pillar": "WHY",
      "description": "Encodes a revenue-sharing agreement between creators and the platform.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": false,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHY:revenue",
        "WHY:earn",
        "WHO:creator",
        "WHAT:ip"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "local",
      "access_permissions_default": [
        "read",
        "revenue"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 25,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. RevenueShare-FrontierMedia-Q4-2026",
        "mint_id_format": "E3-WHY-RVS-{NODE}-{SEQ}"
      },
      "ui_hint": "revenue_share_pct is split between creator, platform, and node per config."
    },
    {
      "id": "upgrade-seal",
      "mint_type": "UpgradeSeal",
      "display_name": "UpgradeSeal Mint",
      "pillar": "WHY",
      "description": "An authorization token unlocking a Mint or system upgrade.",
      "rights_categories": {
        "WHO": true,
        "WHAT": false,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHY:upgrade",
        "WHY:unlock",
        "WHO:node-operator",
        "WHEN:epoch"
      ],
      "rarity_class_default": "LEGENDARY",
      "chain_default": "TimeChain",
      "format_default": "json",
      "storage_type_default": "ipfs",
      "access_permissions_default": [
        "read",
        "write"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 5,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. UpgradeSeal-NodeV2-ATL01",
        "mint_id_format": "E3-WHY-UPS-{NODE}-{SEQ}"
      },
      "ui_hint": "One-time-use. Burns on application. Linked to target Mint via linked_mints."
    },
    {
      "id": "legal-bind",
      "mint_type": "LegalBind",
      "display_name": "LegalBind Mint",
      "pillar": "WHY",
      "description": "A cryptographically signed legal agreement anchor.",
      "rights_categories": {
        "WHO": true,
        "WHAT": true,
        "WHEN": true,
        "WHERE": false,
        "WHY": true
      },
      "default_category_tags": [
        "WHY:legal",
        "WHY:agreement",
        "WHO:creator",
        "WHAT:contract",
        "WHEN:signed"
      ],
      "rarity_class_default": "UNCOMMON",
      "chain_default": "TimeChain",
      "format_default": "pdf",
      "storage_type_default": "arweave",
      "access_permissions_default": [
        "read"
      ],
      "derivative_rights_default": "NONE",
      "governance_weight_default": 0,
      "stake_value_default": 0,
      "revenue_share_pct_default": 0,
      "schema_overrides": {
        "mint_name_placeholder": "e.g. LegalBind-FrontierMedia-ServiceAgreement-2026",
        "mint_id_format": "E3-WHY-LGB-{NODE}-{SEQ}"
      },
      "ui_hint": "Document stored on Arweave. content_hash is SHA-256 of signed PDF."
    }
  ]
};
