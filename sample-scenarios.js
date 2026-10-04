window.EARTH3_SAMPLE_SCENARIOS = [
  {
    id: 'scenario-player-photo-open',
    label: 'Scenario · Player Photo Open Use',
    persona: 'creator',
    catalogMintTypeId: 'photo-reel',
    values: {
      whoName: 'J Doe',
      whoDid: 'did:e3:player:jdoe-001',
      whoRole: 'player',
      whatType: 'screenshot',
      whatDescription: 'Scenic capture at X location for public use.',
      whatSource: 'browse-button-selected-path',
      whenEpoch: 'Epoch-03',
      whenActivation: 'now',
      whereSurface: 'OneDrive Broadcast Layer',
      whyValue: 'Open Public Use'
    }
  },
  {
    id: 'scenario-creator-remix-pack',
    label: 'Scenario · Creator Remix Pack',
    persona: 'creator',
    catalogMintTypeId: 'reel-clip',
    values: {
      whoName: 'Epoch Fox',
      whoDid: 'did:e3:creator:fox-021',
      whoRole: 'creator',
      whatType: 'media-loop',
      whatDescription: 'Audio + visual loop pack licensed for remix with attribution.',
      whatSource: 'browse-button-selected-path',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-10-10/2027-01-01',
      whereSurface: 'helixbox-edge',
      whyValue: 'Enable remix culture while tracking provenance and creator revenue.'
    }
  },
  {
    id: 'scenario-operator-node-anchor',
    label: 'Scenario · Operator Node Anchor',
    persona: 'operator',
    catalogMintTypeId: 'node-anchor',
    values: {
      whoName: 'Atlas Mesh Ops',
      whoDid: 'did:e3:ops:atlas-004',
      whoRole: 'operator',
      whatType: 'node-capability',
      whatDescription: 'Announce entitlement cache + proof relay capabilities for discovery.',
      whatSource: 'service-descriptor://atlas-node-anchor',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-10-20/2027-06-01',
      whereSurface: 'meshx-discovery',
      whyValue: 'Route workloads to trusted nodes and improve proof throughput.'
    }
  },
  {
    id: 'scenario-sponsor-govern-vote',
    label: 'Scenario · Sponsor Governance Vote',
    persona: 'org',
    catalogMintTypeId: 'govern-vote',
    values: {
      whoName: 'Frontier Sponsors DAO',
      whoDid: 'did:e3:org:frontier-sponsors',
      whoRole: 'organization',
      whatType: 'governance-credential',
      whatDescription: 'Sponsor vote right for quarterly grant allocation.',
      whatSource: 'governance-policy://q4-grants-2026',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-12-01/2027-03-31',
      whereSurface: 'rights-graph',
      whyValue: 'Govern allocation decisions with transparent on-chain voting rights.'
    }
  },
  {
    id: 'scenario-event-gate-pass',
    label: 'Scenario · Event Gate Access Pass',
    persona: 'org',
    catalogMintTypeId: 'event-gate',
    values: {
      whoName: 'Earth3 Live Events',
      whoDid: 'did:e3:org:events-core',
      whoRole: 'organization',
      whatType: 'event-access-pass',
      whatDescription: 'Time-limited pass for virtual launch event and replay room.',
      whatSource: 'event-manifest://launch-night-alpha',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-11-08/2026-11-10',
      whereSurface: 'sim-runtime',
      whyValue: 'Gate premium event access while preserving replay entitlements.'
    }
  },
  {
    id: 'scenario-revenue-share-track',
    label: 'Scenario · Revenue Share Track',
    persona: 'creator',
    catalogMintTypeId: 'revenue-share',
    values: {
      whoName: 'EchoWave Studio',
      whoDid: 'did:e3:creator:echowave',
      whoRole: 'creator',
      whatType: 'sound-track',
      whatDescription: 'Licensed soundtrack with creator/node/platform revenue split.',
      whatSource: 'browse-button-selected-path',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-11-01/2027-11-01',
      whereSurface: 'helixbox-edge',
      whyValue: 'Enable commercial use with automated revenue distribution.'
    }
  },
  {
    id: 'scenario-agent-cert',
    label: 'Scenario · Agent Certificate',
    persona: 'agent',
    catalogMintTypeId: 'creator-pass',
    values: {
      whoName: 'Epoch Assistant Node-7',
      whoDid: 'did:e3:agent:node7',
      whoRole: 'agent',
      whatType: 'agent-certificate',
      whatDescription: 'Operational certificate for automated world-building assistant.',
      whatSource: 'agent-manifest://epoch-assistant-node7',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-10-05/2027-04-01',
      whereSurface: 'sim-runtime',
      whyValue: 'Certify autonomous behavior before execution in shared spaces.'
    }
  },
  {
    id: 'scenario-ai-os-autopilot-lane',
    label: 'Scenario · AI OS Autopilot Lane',
    persona: 'agent',
    catalogMintTypeId: 'creator-pass',
    values: {
      whoName: 'Earth3 Copilot Core',
      whoDid: 'did:e3:agent:copilot-core',
      whoRole: 'agent',
      whatType: 'intent-bundle',
      whatDescription: 'Player intent bundle minted once so AI OS can execute routine actions without repeated approvals.',
      whatSource: 'intent://autopilot-lane-player-default',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-10-06/2027-01-01',
      whereSurface: 'sim-runtime',
      whyValue: 'Delegate safe routine actions to AI OS while preserving player control boundaries and audit trail.'
    }
  },
  {
    id: 'scenario-pay2play-event-loop',
    label: 'Scenario · PayTooPlay Event Loop',
    persona: 'org',
    catalogMintTypeId: 'event-gate',
    values: {
      whoName: 'Earth3 Arena Ops',
      whoDid: 'did:e3:org:arena-ops',
      whoRole: 'organization',
      whatType: 'paytoo-play-pass',
      whatDescription: 'Access pass with micro-entry fee loop that unlocks premium events and creator payouts.',
      whatSource: 'event-manifest://paytoo-play-arenas-q4',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-10-20/2027-02-20',
      whereSurface: 'sim-runtime',
      whyValue: 'Run PayTooPlay loops that reward participation, sustain events, and fund prize pools.'
    }
  },
  {
    id: 'scenario-playerpower-rank-badge',
    label: 'Scenario · PlayerPower Rank Badge',
    persona: 'creator',
    catalogMintTypeId: 'revenue-share',
    values: {
      whoName: 'J Doe',
      whoDid: 'did:e3:player:jdoe-001',
      whoRole: 'player',
      whatType: 'playerpower-badge',
      whatDescription: 'Dynamic rank badge tied to contribution score, mission completions, and community utility.',
      whatSource: 'stats://playerpower/jdoe/season-01',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-10-10/2027-04-10',
      whereSurface: 'rights-graph',
      whyValue: 'Convert PlayerPower into usable rights, visibility boosts, and revenue eligibility.'
    }
  },
  {
    id: 'scenario-momintntime-streak-license',
    label: 'Scenario · moMintNTime Streak License',
    persona: 'creator',
    catalogMintTypeId: 'reel-clip',
    values: {
      whoName: 'moMintNTime Labs',
      whoDid: 'did:e3:creator:momintntime-labs',
      whoRole: 'creator',
      whatType: 'streak-license',
      whatDescription: 'Time-based mint streak license granting upgraded remix and publication rights at each milestone.',
      whatSource: 'timeline://momintntime/season-alpha',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-11-01/2027-11-01',
      whereSurface: 'helixbox-edge',
      whyValue: 'Reward consistent creative output through moMintNTime progression and unlockable rights tiers.'
    }
  },
  {
    id: 'scenario-sponsor-playerpower-pool',
    label: 'Scenario · Sponsor PlayerPower Pool',
    persona: 'org',
    catalogMintTypeId: 'govern-vote',
    values: {
      whoName: 'NorthStar Sponsors',
      whoDid: 'did:e3:org:northstar',
      whoRole: 'organization',
      whatType: 'sponsor-incentive-pool',
      whatDescription: 'Sponsor-funded pool that routes rewards based on PlayerPower milestones and verified activity.',
      whatSource: 'sponsor-policy://northstar-playerpower-pool-v1',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-10-15/2027-06-30',
      whereSurface: 'rights-graph',
      whyValue: 'Let sponsors fund growth while players earn transparent, rules-driven rewards.'
    }
  },
  {
    id: 'scenario-citizen-nft-power-pass',
    label: 'Scenario · Citizen NFT PlayerPower Pass',
    persona: 'org',
    catalogMintTypeId: 'govern-vote',
    values: {
      whoName: 'Earth3 Citizen Core',
      whoDid: 'did:e3:org:citizen-core',
      whoRole: 'organization',
      whatType: 'citizen-power-pass',
      whatDescription: 'Citizen NFT pass that grants baseline governance voice and PlayerPower progression rights.',
      whatSource: 'citizen-ledger://season-01/pass-default',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-10-20/2027-10-20',
      whereSurface: 'rights-graph',
      whyValue: 'Give every citizen a starting governance position and measurable influence growth path.'
    }
  },
  {
    id: 'scenario-frontier-agent-remix-license',
    label: 'Scenario · Frontier Agent Remix License',
    persona: 'agent',
    catalogMintTypeId: 'reel-clip',
    values: {
      whoName: 'Frontier Agent Echo-12',
      whoDid: 'did:e3:agent:frontier-echo12',
      whoRole: 'agent',
      whatType: 'remix-license',
      whatDescription: 'Frontier Agent protocol license enabling safe derivative creation with inherited rights tracking.',
      whatSource: 'agent-policy://frontier-remix-protocol-v1',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-10-25/2027-05-25',
      whereSurface: 'helixbox-edge',
      whyValue: 'Scale creative remix safely by letting agents compose under verifiable inherited permissions.'
    }
  },
  {
    id: 'scenario-glyph-moment-proof',
    label: 'Scenario · Glyph moMintNTime Proof',
    persona: 'creator',
    catalogMintTypeId: 'photo-reel',
    values: {
      whoName: 'Glyph Studio Delta',
      whoDid: 'did:e3:creator:glyph-delta',
      whoRole: 'creator',
      whatType: 'glyph-moment-proof',
      whatDescription: 'Verified glyph event snapshot anchored into moMintNTime progression ledger.',
      whatSource: 'glyph-capture://signal-burst-epoch4',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-11-05/2027-03-05',
      whereSurface: 'OneDrive Broadcast Layer',
      whyValue: 'Turn meaningful moments into durable records that can unlock identity and reward states over time.'
    }
  },
  {
    id: 'scenario-legal-bind-sponsor',
    label: 'Scenario · Sponsor Legal Bind',
    persona: 'org',
    catalogMintTypeId: 'legal-bind',
    values: {
      whoName: 'NorthStar Partner Group',
      whoDid: 'did:e3:org:northstar',
      whoRole: 'organization',
      whatType: 'legal-agreement',
      whatDescription: 'Signed sponsor agreement anchoring ad inventory and usage rights.',
      whatSource: 'signed-pdf://northstar-sponsor-agreement-2026Q4',
      whenEpoch: 'Epoch-04',
      whenActivation: '2026-10-15/2027-10-15',
      whereSurface: 'rights-graph',
      whyValue: 'Provide auditable legal anchor for sponsor rights and obligations.'
    }
  }
];
