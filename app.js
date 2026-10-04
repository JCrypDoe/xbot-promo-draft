const STORE_KEY = 'earth3-xbot-promo-draft-v1';

const personaProfiles = {
  creator: {
    whoRole: 'creator',
    whatType: 'media-loop',
    whereSurface: 'helixbox-edge',
    whyValue: 'publish, prove origin, earn remix revenue',
    pitch: 'Creators mint once, prove provenance, and unlock rights-aware monetization.'
  },
  operator: {
    whoRole: 'operator',
    whatType: 'node-capability',
    whereSurface: 'meshx-discovery',
    whyValue: 'announce capabilities and route workload',
    pitch: 'Operators become discoverable service actors in the Earth3 mesh.'
  },
  org: {
    whoRole: 'organization',
    whatType: 'policy-license',
    whereSurface: 'rights-graph',
    whyValue: 'govern distribution and delegate rights safely',
    pitch: 'Organizations define permissions as composable rights contracts.'
  },
  agent: {
    whoRole: 'agent',
    whatType: 'agent-certificate',
    whereSurface: 'sim-runtime',
    whyValue: 'certify behavior + prove execution integrity',
    pitch: 'Agents carry verifiable credentials before they act in-world.'
  }
};

const BUILT_IN_QUICK_TEMPLATES = [
  {
    id: 'sample-1-jdoe-screenshot',
    label: 'Sample 1 · J Doe Screenshot (Open Public Use)',
    persona: 'creator',
    catalogMintTypeId: 'photo-reel',
    values: {
      whoName: 'J Doe',
      whoDid: 'did:e3:player:jdoe-001',
      whoRole: 'player',
      whatType: 'screenshot',
      whatDescription: 'screenshot in X pretend location',
      whatSource: 'browse-button-selected-path',
      whenEpoch: 'Epoch-03',
      whenActivation: 'now',
      whereSurface: 'OneDrive Broadcast Layer',
      whyValue: 'Open Public Use'
    }
  },
  {
    id: 'creator-remix-loop',
    label: 'Template · Creator Remix Loop',
    persona: 'creator',
    catalogMintTypeId: 'reel-clip',
    values: {
      whoName: 'Epoch Fox',
      whoDid: 'did:e3:fox:pilot-001',
      whoRole: 'creator',
      whatType: 'media-loop',
      whatDescription: 'music/visual loop pack for remix',
      whatSource: 'browse-button-selected-path',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-10-15/2026-12-31',
      whereSurface: 'helixbox-edge',
      whyValue: 'publish, prove origin, earn remix revenue'
    }
  },
  {
    id: 'operator-node-capability',
    label: 'Template · Operator Node Capability',
    persona: 'operator',
    catalogMintTypeId: 'node-anchor',
    values: {
      whoName: 'Node Ops Alpha',
      whoDid: 'did:e3:ops:alpha-007',
      whoRole: 'operator',
      whatType: 'node-capability',
      whatDescription: 'announce proof relay + entitlement cache support',
      whatSource: 'service-descriptor://node-capability',
      whenEpoch: 'Epoch-03',
      whenActivation: '2026-10-20/2027-01-01',
      whereSurface: 'meshx-discovery',
      whyValue: 'announce capabilities and route workload'
    }
  }
];

const fallbackCatalog = {
  dropdown_options: {
    pillars: [{ value: 'WHO', label: 'WHO' }, { value: 'WHAT', label: 'WHAT' }, { value: 'WHEN', label: 'WHEN' }, { value: 'WHERE', label: 'WHERE' }, { value: 'WHY', label: 'WHY' }],
    rarity_class: [{ value: 'COMMON', label: 'Common' }],
    chain: [{ value: 'TimeChain', label: 'TimeChain' }],
    epoch: [{ value: 'Epoch-03', label: 'Epoch-03' }],
    derivative_rights: [{ value: 'OPEN', label: 'Open' }],
    storage_type: [{ value: 'local', label: 'Local' }]
  },
  mint_types: []
};

const catalog = window.EARTH3_MINT_CATALOG || fallbackCatalog;
const mintTypeById = new Map((catalog.mint_types || []).map((item) => [item.id, item]));

const CONCEPT_FILTER_OPTIONS = [
  { value: 'all', label: 'All Concepts' },
  { value: 'ai-os', label: 'AI OS' },
  { value: 'paytoo-play', label: 'PayTooPlay' },
  { value: 'playerpower', label: 'PlayerPower' },
  { value: 'momintntime', label: 'moMintNTime' }
];

const CONCEPT_BADGE_META = {
  'ai-os': { label: 'AI OS', css: 'concept-ai-os' },
  'paytoo-play': { label: 'PayTooPlay', css: 'concept-paytoo-play' },
  playerpower: { label: 'PlayerPower', css: 'concept-playerpower' },
  momintntime: { label: 'moMintNTime', css: 'concept-momintntime' }
};

const HUD_TRIGGER_IDS = [
  'neutral',
  'jix-green-cardano-blue',
  'paytoo-loop',
  'playerpower-governance',
  'privacy-proof',
  'remix-royalty-loop'
];

const MARKETING_BASE_BUZZWORDS = [
  'Agent-First UX',
  'Programmable Rights',
  'Who/What/When/Where/Why',
  'Smart Contract Logic',
  'TimeChain Signals',
  'CowsCome4Dayz DeFi',
  'GXYZ Energy Token'
];

const MARKETING_TRIGGER_PACKS = {
  'jix-green-cardano-blue': {
    buzzwords: ['Revenue Opportunity', 'Cardano Rules of the Game', 'Creator Royalties', 'Verified Payout Path'],
    pitch15: 'When Jix-eee Green and Cardano Blue appear, players know this mint can generate real value under clear on-chain rules.',
    pitch30: 'Earth3 turns a player action into a programmable contract. If revenue rights and Cardano/TimeChain rules align, HUD-WoW fires the Green + Blue signal so players instantly know a monetizable promo route is live.',
    features: [
      'Revenue intent detection from rights + language',
      'Rules-layer check through chain and derivative permissions',
      'Instant HUD signal for monetizable opportunities'
    ]
  },
  'paytoo-loop': {
    buzzwords: ['PayTooPlay', 'Participation Economy', 'Prize Loop', 'In-World Incentives', 'CowsCome4Dayz DeFi', 'GXYZ Daily Energy'],
    pitch15: 'PayTooPlay signals that this event loop can convert participation into rewards.',
    pitch30: 'Earth3 mints event conditions as smart rights. When PayTooPlay language is present, the HUD announces a live participation-to-reward loop players can act on immediately—bridging into the CowsCome4Dayz DeFi side and GXYZ-powered activity loops.',
    features: [
      'Detects event fee/reward loop language',
      'Highlights payout-prone gameplay moments',
      'Supports sponsor and creator incentive flows',
      'Connects gameplay loops to CowsCome4Dayz-style DeFi narratives'
    ]
  },
  'remix-royalty-loop': {
    buzzwords: ['Remix Economy', 'Instant Royalty Split', 'Rules of the Game', 'Agent-Readable Licensing'],
    pitch15: 'Remix + Royalty means every mint acts like a Lego block with clear payout rules.',
    pitch30: 'An artist mints a song with smart-contract rules, another creator remixes it into a game build, and when Player Doe sells that version, payouts route instantly to original creators and platform participants under crystal-clear terms.',
    features: [
      'Detects remix, royalty, and derivative licensing language',
      'Signals immediate multi-party payout potential',
      'Frames OneDrive/local assets as agent-usable building blocks',
      'Keeps ownership and compensation rules explicit'
    ]
  },
  'playerpower-governance': {
    buzzwords: ['PlayerPower', 'Citizen Influence', 'Governance Unlock', 'Progression Rights'],
    pitch15: 'PlayerPower signals show when a mint can raise influence, governance, or progression status.',
    pitch30: 'The PlayerPower route promotes contracts that do more than sell assets—they upgrade a player’s role in the ecosystem through governance, influence, and identity-backed progression.',
    features: [
      'Identifies governance and influence keywords',
      'Connects mint outcomes to progression signals',
      'Frames utility beyond one-time transactions'
    ]
  },
  'privacy-proof': {
    buzzwords: ['Privacy Layer', 'ZK Proof Route', 'Helixbox meshX', 'Trust Without Oversharing'],
    pitch15: 'Privacy Proof mode tells players this mint can run through protected verification paths.',
    pitch30: 'Earth3 can trigger privacy-first signaling when proof-oriented language appears, highlighting routes that prioritize secure verification through Helixbox/meshX and ZK concepts.',
    features: [
      'Privacy/Proof pattern detection',
      'Dedicated visual identity for secure flows',
      'Clear player trust messaging'
    ]
  },
  neutral: {
    buzzwords: ['Composable Contracts', 'Adaptive Templates', 'Agent + Player Co-Op', 'aDaB', 'CowsCome4Dayz', 'GXYZ'],
    pitch15: 'Every action can be minted as a reusable contract object—ready to route into future opportunities.',
    pitch30: 'Even without an active opportunity trigger, Earth3 structures player intent into reusable smart-contract objects. That keeps the ecosystem ready for AI agents, promos, rewards, and governance expansion.',
    features: [
      'Turns actions/events into structured mint objects',
      'Keeps future opportunity routing open',
      'Supports low-friction agent-assisted workflows'
    ]
  }
};

const ui = {
  container: document.querySelector('.container'),
  hero: document.getElementById('hud-hero'),
  hudTriggerText: document.getElementById('hud-trigger-text'),
  hudDebugOutput: document.getElementById('hud-debug-output'),
  copyHudDebugBtn: document.getElementById('copy-hud-debug-btn'),
  promoBuzzwords: document.getElementById('promo-buzzwords'),
  promoPitch15: document.getElementById('promo-pitch-15'),
  promoPitch30: document.getElementById('promo-pitch-30'),
  promoFeatures: document.getElementById('promo-features'),
  personaButtons: [...document.querySelectorAll('[data-persona]')],
  kicker: document.getElementById('persona-kicker'),
  templateSelect: document.getElementById('template-select'),
  templateConceptBadges: document.getElementById('template-concept-badges'),
  conceptFilterSelect: document.getElementById('concept-filter-select'),
  applyTemplateBtn: document.getElementById('apply-template-btn'),
  templateNameInput: document.getElementById('template-name-input'),
  saveTemplateBtn: document.getElementById('save-template-btn'),
  deleteTemplateBtn: document.getElementById('delete-template-btn'),
  skipDeleteConfirmSession: document.getElementById('skip-delete-confirm-session'),
  pillarFilter: document.getElementById('mint-pillar-filter'),
  mintTypeSelect: document.getElementById('mint-type-select'),
  applyCatalogTemplateBtn: document.getElementById('apply-catalog-template-btn'),
  templateHint: document.getElementById('mint-template-hint'),
  fastPromptInput: document.getElementById('fast-prompt-input'),
  fastTemplateList: document.getElementById('fast-template-list'),
  fastApplyBtn: document.getElementById('fast-apply-btn'),
  fastOpenAdvancedBtn: document.getElementById('fast-open-advanced-btn'),
  fastSweepBtn: document.getElementById('fast-sweep-btn'),
  fastSweepOutput: document.getElementById('fast-sweep-output'),
  advancedBuilder: document.getElementById('advanced-builder'),
  fields: {
    whoName: document.getElementById('who-name'),
    whoDid: document.getElementById('who-did'),
    whoRole: document.getElementById('who-role'),
    whatType: document.getElementById('what-type'),
    whatDescription: document.getElementById('what-description'),
    whatSource: document.getElementById('what-source'),
    whenEpoch: document.getElementById('mint-epoch-select'),
    whenActivation: document.getElementById('when-activation'),
    whereSurface: document.getElementById('where-surface'),
    storageType: document.getElementById('mint-storage-select'),
    rarityClass: document.getElementById('mint-rarity-select'),
    chain: document.getElementById('mint-chain-select'),
    derivativeRights: document.getElementById('mint-deriv-select'),
    mintIdFormat: document.getElementById('mint-id-format'),
    whyValue: document.getElementById('why-value')
  },
  rightsBadges: {
    use: document.getElementById('right-use'),
    remix: document.getElementById('right-remix'),
    revenue: document.getElementById('right-revenue'),
    governance: document.getElementById('right-governance')
  },
  statusPills: {
    draft: document.getElementById('status-draft'),
    simulated: document.getElementById('status-simulated'),
    verified: document.getElementById('status-verified')
  },
  payloadOut: document.getElementById('payload-out'),
  receiptOut: document.getElementById('receipt-out'),
  log: document.getElementById('mint-log'),
  promoLine: document.getElementById('promo-line'),
  buildBtn: document.getElementById('build-btn'),
  mintBtn: document.getElementById('mint-btn'),
  resetBtn: document.getElementById('reset-btn')
};

const SCENARIO_TEMPLATES = Array.isArray(window.EARTH3_SAMPLE_SCENARIOS) ? window.EARTH3_SAMPLE_SCENARIOS : [];
const sessionFlags = { skipDeleteConfirm: false };
const state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORE_KEY));
    if (stored && Array.isArray(stored.mints)) {
      return {
        activePersona: stored.activePersona || 'creator',
        activeCatalogMintType: stored.activeCatalogMintType || '',
        activeFastTemplate: stored.activeFastTemplate || 'sample-1-jdoe-screenshot',
        activeConceptFilter: stored.activeConceptFilter || 'all',
        mintPhase: stored.mintPhase || 'draft',
        customTemplates: Array.isArray(stored.customTemplates) ? stored.customTemplates : [],
        mints: stored.mints
      };
    }
  } catch {}
  return {
    activePersona: 'creator',
    activeCatalogMintType: '',
    activeFastTemplate: 'sample-1-jdoe-screenshot',
    activeConceptFilter: 'all',
    mintPhase: 'draft',
    customTemplates: [],
    mints: []
  };
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function getQuickTemplates() {
  return [...BUILT_IN_QUICK_TEMPLATES, ...SCENARIO_TEMPLATES, ...(state.customTemplates || [])];
}

function normalizeConceptFilter(value) {
  const normalized = String(value || '').toLowerCase();
  return CONCEPT_FILTER_OPTIONS.some((item) => item.value === normalized) ? normalized : 'all';
}

function inferTemplateConcepts(template) {
  const tags = new Set();
  const combinedText = [
    template?.label,
    template?.values?.whatType,
    template?.values?.whatDescription,
    template?.values?.whyValue,
    template?.values?.whatSource
  ].join(' ').toLowerCase();

  if (/ai\s*os|autopilot|agent|autonomous|copilot|intent-bundle/.test(combinedText)) {
    tags.add('ai-os');
  }
  if (/paytoo|pay\s*to\s*play|pay2play|micro-entry|entry fee/.test(combinedText)) {
    tags.add('paytoo-play');
  }
  if (/playerpower|citizen nft|citizen-power|governance voice|influence/.test(combinedText)) {
    tags.add('playerpower');
  }
  if (/momintntime|glyph|streak|moment proof|timeline/.test(combinedText)) {
    tags.add('momintntime');
  }

  return tags;
}

function getTemplateConceptKeys(template) {
  const tags = inferTemplateConcepts(template);
  return CONCEPT_FILTER_OPTIONS
    .map((item) => item.value)
    .filter((value) => value !== 'all' && tags.has(value));
}

function conceptBadgesHtml(conceptKeys) {
  if (!conceptKeys || conceptKeys.length === 0) {
    return '<span class="template-badge concept-generic">General</span>';
  }

  return conceptKeys.map((key) => {
    const meta = CONCEPT_BADGE_META[key] || { label: key, css: 'concept-generic' };
    return `<span class="template-badge ${meta.css}">${meta.label}</span>`;
  }).join('');
}

function labelWithConceptTags(template) {
  const tags = getTemplateConceptKeys(template);
  if (tags.length === 0) {
    return template.label;
  }

  const suffix = tags
    .map((key) => CONCEPT_BADGE_META[key]?.label || key)
    .join(' · ');

  return `${template.label} [${suffix}]`;
}

function updateSelectedTemplateConceptBadges() {
  if (!ui.templateConceptBadges) return;

  const selectedId = ui.templateSelect.value;
  const template = getQuickTemplates().find((item) => item.id === selectedId);
  if (!template) {
    ui.templateConceptBadges.innerHTML = '<span class="small">No template selected.</span>';
    return;
  }

  const badges = conceptBadgesHtml(getTemplateConceptKeys(template));
  ui.templateConceptBadges.innerHTML = badges;
}

function templateMatchesConceptFilter(template, conceptFilter) {
  const normalizedFilter = normalizeConceptFilter(conceptFilter);
  if (normalizedFilter === 'all') {
    return true;
  }

  const conceptTags = inferTemplateConcepts(template);
  return conceptTags.has(normalizedFilter);
}

function getFilteredQuickTemplates() {
  const conceptFilter = normalizeConceptFilter(state.activeConceptFilter);
  return getQuickTemplates().filter((template) => templateMatchesConceptFilter(template, conceptFilter));
}

function getFeaturedTemplates() {
  return getFilteredQuickTemplates().slice(0, 8);
}

function isBuiltInTemplateId(templateId) {
  return BUILT_IN_QUICK_TEMPLATES.some((item) => item.id === templateId);
}

function updateTemplateActions() {
  const selectedId = ui.templateSelect.value;
  if (ui.applyTemplateBtn) {
    ui.applyTemplateBtn.disabled = !Boolean(selectedId);
  }
  const canDelete = Boolean(selectedId) && !isBuiltInTemplateId(selectedId);
  if (ui.deleteTemplateBtn) {
    ui.deleteTemplateBtn.disabled = !canDelete;
    ui.deleteTemplateBtn.title = canDelete ? 'Delete this custom template' : 'Only custom templates can be deleted';
  }

  updateSelectedTemplateConceptBadges();
}

function setMintStatus(nextPhase) {
  const allowed = ['draft', 'simulated', 'verified'];
  const normalized = allowed.includes(nextPhase) ? nextPhase : 'draft';
  state.mintPhase = normalized;

  Object.entries(ui.statusPills).forEach(([phase, pill]) => {
    if (!pill) return;
    pill.classList.toggle('is-active', phase === normalized);
  });
}

function nowIso() {
  return new Date().toISOString();
}

function shortHash(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}

function makeTcid(did, whatType) {
  const root = shortHash(`${did}:${whatType}:${Date.now()}`);
  return `tcid:e3:${whatType.slice(0, 3)}:${root}`;
}

function makeSafeId(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 40) || 'template';
}

function getSelectLabel(selectElement) {
  if (!selectElement) return '';
  const option = selectElement.options[selectElement.selectedIndex];
  return option ? option.textContent : '';
}

function populateSelect(selectElement, options, preferredValue) {
  if (!selectElement) return;
  const normalized = Array.isArray(options) ? options : [];
  selectElement.innerHTML = normalized.map((item) => {
    const value = item?.value ?? item;
    const label = item?.label ?? item?.value ?? item;
    return `<option value="${String(value)}">${String(label)}</option>`;
  }).join('');

  if (preferredValue && normalized.some((item) => (item?.value ?? item) === preferredValue)) {
    selectElement.value = preferredValue;
  }
}

function populateCatalogDropdowns() {
  const dropdowns = catalog.dropdown_options || {};
  const pillars = [{ value: 'ALL', label: 'All Pillars' }, ...(dropdowns.pillars || []).map((item) => ({ value: item.value, label: item.value }))];
  populateSelect(ui.pillarFilter, pillars, 'ALL');
  populateSelect(ui.fields.rarityClass, dropdowns.rarity_class || [], 'UNCOMMON');
  populateSelect(ui.fields.chain, dropdowns.chain || [], 'TimeChain');
  populateSelect(ui.fields.whenEpoch, dropdowns.epoch || [], 'Epoch-03');
  populateSelect(ui.fields.derivativeRights, dropdowns.derivative_rights || [], 'OPEN');
  populateSelect(ui.fields.storageType, dropdowns.storage_type || [], 'local');
}

function populateConceptFilters() {
  if (!ui.conceptFilterSelect) return;

  ui.conceptFilterSelect.innerHTML = CONCEPT_FILTER_OPTIONS
    .map((item) => `<option value="${item.value}">${item.label}</option>`)
    .join('');

  ui.conceptFilterSelect.value = normalizeConceptFilter(state.activeConceptFilter);
}

function populateCatalogMintTypes() {
  const selectedPillar = ui.pillarFilter.value || 'ALL';
  const mintTypes = (catalog.mint_types || []).filter((item) => selectedPillar === 'ALL' || item.pillar === selectedPillar);
  ui.mintTypeSelect.innerHTML = mintTypes.map((item) => {
    return `<option value="${item.id}">${item.display_name} [${item.pillar}]</option>`;
  }).join('');

  const nextValue = state.activeCatalogMintType && mintTypeById.has(state.activeCatalogMintType) ? state.activeCatalogMintType : (mintTypes[0]?.id || '');
  if (nextValue) {
    ui.mintTypeSelect.value = nextValue;
    state.activeCatalogMintType = nextValue;
    renderCatalogHint(nextValue);
  }
}

function renderCatalogHint(mintTypeId) {
  const mintType = mintTypeById.get(mintTypeId);
  if (!mintType) {
    ui.templateHint.textContent = 'Catalog hint appears here after selection.';
    return;
  }
  ui.templateHint.textContent = mintType.ui_hint || mintType.description || `${mintType.display_name} defaults loaded.`;
}

function applyCatalogMintType(mintTypeId) {
  const mintType = mintTypeById.get(mintTypeId);
  if (!mintType) return;

  state.activeCatalogMintType = mintTypeId;
  ui.mintTypeSelect.value = mintTypeId;

  ui.fields.whatType.value = mintType.mint_type || mintType.id;
  ui.fields.whatDescription.value = mintType.description || '';
  ui.fields.rarityClass.value = mintType.rarity_class_default || ui.fields.rarityClass.value;
  ui.fields.chain.value = mintType.chain_default || ui.fields.chain.value;
  ui.fields.derivativeRights.value = mintType.derivative_rights_default || ui.fields.derivativeRights.value;
  ui.fields.storageType.value = mintType.storage_type_default || ui.fields.storageType.value;
  ui.fields.mintIdFormat.value = mintType?.schema_overrides?.mint_id_format || ui.fields.mintIdFormat.value;

  if (!ui.fields.whyValue.value.trim()) {
    ui.fields.whyValue.value = `${mintType.display_name} rights package`;
  }

  renderCatalogHint(mintTypeId);
  buildPayload();
}

function activeRights() {
  const text = ui.fields.whyValue.value.toLowerCase();
  const derivative = ui.fields.derivativeRights.value.toLowerCase();
  const openPublicUse = text.includes('open public use') || derivative === 'open';
  return {
    use: true,
    remix: openPublicUse || text.includes('remix') || text.includes('derivative'),
    revenue: !openPublicUse && (text.includes('revenue') || text.includes('earn') || text.includes('royalty')),
    governance: !openPublicUse && (text.includes('govern') || text.includes('policy') || text.includes('delegate'))
  };
}

function toggleRightBadges(rights) {
  Object.entries(ui.rightsBadges).forEach(([key, badge]) => {
    badge.classList.toggle('on', Boolean(rights[key]));
  });
}

function isMoneyOpportunityPayload(payload) {
  const whyText = String(payload?.why?.valueProposition || '').toLowerCase();
  const whatText = String(payload?.what?.description || '').toLowerCase();
  const combined = `${whyText} ${whatText}`;
  const revenueFlag = Boolean(payload?.why?.rights?.revenue);

  return revenueFlag || /revenue|earn|royalty|paytoo|pay to play|playerpower|payout|reward/.test(combined);
}

function detectHudTrigger(payload) {
  const chain = String(payload?.contract?.chain || '').toLowerCase();
  const derivative = String(payload?.contract?.derivativeRights || '').toLowerCase();
  const combinedText = [
    payload?.what?.assetType,
    payload?.what?.description,
    payload?.why?.valueProposition,
    payload?.where?.executionSurface,
    payload?.what?.source
  ].join(' ').toLowerCase();
  const revenueFlag = Boolean(payload?.why?.rights?.revenue);

  const cardanoRulesActive = /cardano|timechain/.test(chain);
  const hasRevenueLanguage = revenueFlag || /revenue|earn|royalty|monetiz|payout|reward/.test(combinedText);
  const hasPayTooPlayLanguage = /paytoo|pay\s*to\s*play|pay2play|entry fee|prize pool|micro-entry/.test(combinedText);
  const hasPlayerPowerLanguage = /playerpower|citizen nft|govern|vote|influence/.test(combinedText);
  const hasPrivacyProofLanguage = /privacy|zk|proof|meshx|helixbox/.test(combinedText);
  const hasRemixRoyaltyLanguage = /remix|derivative|royalty|split|license|licensing/.test(combinedText);

  const debug = {
    fields: {
      chain: payload?.contract?.chain || null,
      derivativeRights: payload?.contract?.derivativeRights || null,
      valueProposition: payload?.why?.valueProposition || null,
      assetType: payload?.what?.assetType || null,
      description: payload?.what?.description || null,
      source: payload?.what?.source || null,
      executionSurface: payload?.where?.executionSurface || null
    },
    checks: {
      cardanoRulesActive,
      hasRevenueLanguage,
      hasPayTooPlayLanguage,
      hasPlayerPowerLanguage,
      hasPrivacyProofLanguage,
      hasRemixRoyaltyLanguage,
      derivativeClosed: derivative === 'closed',
      revenueRight: revenueFlag
    }
  };

  if (cardanoRulesActive && hasRevenueLanguage && derivative !== 'closed') {
    return {
      id: 'jix-green-cardano-blue',
      label: 'Jix-eee Green + Cardano Blue',
      detail: 'Revenue path verified with Cardano/TimeChain rules.',
      reason: [
        'contract.chain indicates Cardano/TimeChain rules',
        'revenue intent detected in rights/text',
        'derivative rights are not CLOSED'
      ],
      debug
    };
  }


  if (hasRemixRoyaltyLanguage && hasRevenueLanguage && derivative !== 'closed') {
    return {
      id: 'remix-royalty-loop',
      label: 'Remix + Royalty Opportunity',
      detail: 'Derivative mint with clear compensation rules is available.',
      reason: [
        'remix/royalty/licensing language detected',
        'revenue intent present in rights/text',
        'derivative rights permit reuse'
      ],
      debug
    };
  }
  if (hasPayTooPlayLanguage) {
    return {
      id: 'paytoo-loop',
      label: 'PayTooPlay Opportunity',
      detail: 'Participation-to-reward loop is currently available.',
      reason: [
        'PayTooPlay keywords detected in what/why/source'
      ],
      debug
    };
  }

  if (hasPlayerPowerLanguage && cardanoRulesActive) {
    return {
      id: 'playerpower-governance',
      label: 'PlayerPower Governance Opportunity',
      detail: 'Governance and progression actions are available.',
      reason: [
        'PlayerPower/governance keywords detected',
        'Cardano/TimeChain rules context active'
      ],
      debug
    };
  }

  if (hasPrivacyProofLanguage) {
    return {
      id: 'privacy-proof',
      label: 'Privacy Proof Opportunity',
      detail: 'ZK/privacy route can be initiated for this mint.',
      reason: [
        'privacy/zk/proof/meshX/helixbox keyword path detected'
      ],
      debug
    };
  }

  return {
    id: 'neutral',
    label: 'Neutral',
    detail: 'No mapped opportunity trigger for current draft.',
    reason: [
      'No trigger rule group matched current payload'
    ],
    debug
  };
}

function detectConceptsFromPayload(payload) {
  const combined = [
    payload?.what?.assetType,
    payload?.what?.description,
    payload?.why?.valueProposition,
    payload?.what?.source,
    payload?.contract?.chain
  ].join(' ').toLowerCase();

  const concepts = [];
  if (/agent|autopilot|ai\s*os|copilot|intent/.test(combined)) concepts.push('AI OS');
  if (/paytoo|pay\s*to\s*play|pay2play|entry fee|prize/.test(combined)) concepts.push('PayTooPlay');
  if (/playerpower|citizen|govern|influence|vote/.test(combined)) concepts.push('PlayerPower');
  if (/momintntime|glyph|streak|timeline|moment/.test(combined)) concepts.push('moMintNTime');
  if (/remix|royalty|derivative|license|licensing/.test(combined)) concepts.push('Remix + Royalty');
  if (/adab|cow(s)?come4dayz|gxyz|jix\s*-?\s*zee/.test(combined)) concepts.push('Token Economy');
  return concepts;
}

function uniqueWords(list, max = 12) {
  const seen = new Set();
  const out = [];
  list.forEach((item) => {
    const key = String(item || '').trim().toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    out.push(String(item).trim());
  });
  return out.slice(0, max);
}

function renderMarketingAssistant(payload, trigger) {
  if (!ui.promoBuzzwords || !ui.promoPitch15 || !ui.promoPitch30 || !ui.promoFeatures) return;

  const triggerPack = MARKETING_TRIGGER_PACKS[trigger?.id] || MARKETING_TRIGGER_PACKS.neutral;
  const conceptTags = detectConceptsFromPayload(payload);

  const buzzwords = uniqueWords([
    ...MARKETING_BASE_BUZZWORDS,
    ...conceptTags,
    ...(triggerPack.buzzwords || [])
  ]);

  ui.promoBuzzwords.innerHTML = buzzwords
    .map((word) => `<span class="template-badge concept-generic">${word}</span>`)
    .join('');

  ui.promoPitch15.textContent = triggerPack.pitch15;
  ui.promoPitch30.textContent = triggerPack.pitch30;

  ui.promoFeatures.innerHTML = (triggerPack.features || [])
    .map((feature) => `<div class="log-item log-standard"><strong>•</strong> ${feature}</div>`)
    .join('');
}

function updateHudSignals(payload) {
  const trigger = detectHudTrigger(payload);
  const isOpportunity = trigger.id !== 'neutral';

  if (ui.container) {
    ui.container.classList.remove('hud-opportunity-on', 'hud-opportunity-off');
    HUD_TRIGGER_IDS.forEach((id) => ui.container.classList.remove(`hud-trigger-${id}`));
    ui.container.classList.add(`hud-trigger-${trigger.id}`);
    ui.container.classList.toggle('hud-opportunity-on', isOpportunity);
    ui.container.classList.toggle('hud-opportunity-off', !isOpportunity);
  }

  if (ui.hero) {
    ui.hero.classList.remove('signal-money-opportunity', 'signal-neutral');
    HUD_TRIGGER_IDS.forEach((id) => ui.hero.classList.remove(`signal-trigger-${id}`));
    ui.hero.classList.add(`signal-trigger-${trigger.id}`);
    ui.hero.classList.toggle('signal-money-opportunity', isOpportunity);
    ui.hero.classList.toggle('signal-neutral', !isOpportunity);
  }

  if (ui.hudTriggerText) {
    ui.hudTriggerText.textContent = `HUD Trigger: ${trigger.label} — ${trigger.detail}`;
  }

  if (ui.hudDebugOutput) {
    const debugJson = JSON.stringify({
      selectedTrigger: trigger.id,
      label: trigger.label,
      detail: trigger.detail,
      reason: trigger.reason || [],
      ...trigger.debug
    }, null, 2);

    ui.hudDebugOutput.textContent = debugJson;
    ui.hudDebugOutput.dataset.json = debugJson;
  }

  renderMarketingAssistant(payload, trigger);

  return trigger;
}

async function copyHudDebugJson() {
  const debugJson = ui.hudDebugOutput?.dataset?.json || ui.hudDebugOutput?.textContent || '';
  if (!debugJson.trim()) {
    ui.promoLine.textContent = 'No HUD debug JSON available yet.';
    return;
  }

  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(debugJson);
      ui.promoLine.textContent = 'HUD debug JSON copied to clipboard.';
      return;
    }
  } catch {}

  try {
    const range = document.createRange();
    range.selectNodeContents(ui.hudDebugOutput);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    const ok = document.execCommand('copy');
    selection.removeAllRanges();
    ui.promoLine.textContent = ok
      ? 'HUD debug JSON copied to clipboard.'
      : 'Copy failed. Select debug JSON manually and copy.';
  } catch {
    ui.promoLine.textContent = 'Copy not available in this browser context.';
  }
}

function buildPayload() {
  setMintStatus('draft');

  const rights = activeRights();
  toggleRightBadges(rights);

  const selectedMintTypeId = ui.mintTypeSelect.value;
  const selectedMintType = mintTypeById.get(selectedMintTypeId) || null;

  const payload = {
    schema: 'earth3.mint.v0.draft',
    mintedAt: nowIso(),
    who: {
      displayName: ui.fields.whoName.value.trim(),
      did: ui.fields.whoDid.value.trim(),
      role: ui.fields.whoRole.value.trim()
    },
    what: {
      assetType: ui.fields.whatType.value,
      description: ui.fields.whatDescription.value.trim(),
      source: ui.fields.whatSource.value.trim(),
      intent: 'xbot-promo-test-mint'
    },
    when: {
      epoch: ui.fields.whenEpoch.value,
      epochLabel: getSelectLabel(ui.fields.whenEpoch),
      activationWindow: ui.fields.whenActivation.value,
      timestamp: nowIso()
    },
    where: {
      executionSurface: ui.fields.whereSurface.value,
      storage: ui.fields.storageType.value,
      relay: 'meshx-gossip'
    },
    why: {
      valueProposition: ui.fields.whyValue.value.trim(),
      licenseIntent: ui.fields.whyValue.value.trim(),
      rights
    },
    contract: {
      pillar: selectedMintType?.pillar || (ui.pillarFilter.value === 'ALL' ? 'UNSPECIFIED' : ui.pillarFilter.value),
      catalogMintTypeId: selectedMintTypeId || null,
      catalogMintTypeName: selectedMintType?.display_name || null,
      rarityClass: ui.fields.rarityClass.value,
      chain: ui.fields.chain.value,
      derivativeRights: ui.fields.derivativeRights.value,
      mintIdFormat: ui.fields.mintIdFormat.value,
      defaultCategoryTags: selectedMintType?.default_category_tags || [],
      accessPermissions: selectedMintType?.access_permissions_default || [],
      governanceWeight: selectedMintType?.governance_weight_default ?? null,
      stakeValue: selectedMintType?.stake_value_default ?? null,
      revenueSharePct: selectedMintType?.revenue_share_pct_default ?? null
    }
  };

  const trigger = updateHudSignals(payload);
  if (trigger.id !== 'neutral') {
    ui.promoLine.textContent = `HUD-WoW: ${trigger.label} detected.`;
  }

  ui.payloadOut.textContent = JSON.stringify(payload, null, 2);
  return payload;
}

function simulateMint() {
  const payload = buildPayload();
  const tcid = makeTcid(payload.who.did || 'did:e3:anon', payload.what.assetType || 'asset');
  const proofSeed = `${tcid}:${payload.when.epoch}:${payload.who.role}`;
  const proofHash = `0x${shortHash(proofSeed)}${shortHash(proofSeed + ':proof')}`;

  const receipt = {
    status: 'draft-minted',
    tcid,
    proofHash,
    verifier: 'ec-schnorr(simulated)',
    nextRoutes: ['/api/nft/mint', '/api/assets/verify', '/api/telemetry'],
    summary: `${payload.who.displayName || payload.who.role} minted ${payload.what.assetType} for ${payload.why.valueProposition}`
  };

  state.mints.unshift({
    id: `mint-${Date.now()}`,
    at: nowIso(),
    persona: state.activePersona,
    payload,
    receipt
  });
  state.mints = state.mints.slice(0, 8);

  ui.receiptOut.textContent = JSON.stringify(receipt, null, 2);
  setMintStatus('simulated');
  ui.promoLine.textContent = `Why be an Xbot? Because ${receipt.summary}.`;
  renderLog();
  saveState();
}

function renderLog() {
  if (state.mints.length === 0) {
    ui.log.innerHTML = '<div class="small">No draft mints yet. Create one for promo screenshots.</div>';
    return;
  }

  ui.log.innerHTML = state.mints.map((entry) => {
    const date = new Date(entry.at).toLocaleString();
    const isOpportunity = isMoneyOpportunityPayload(entry.payload);
    const itemClass = isOpportunity ? 'log-opportunity' : 'log-standard';
    const glyph = isOpportunity ? '💸' : '🧩';
    return `<div class="log-item ${itemClass}"><strong>${glyph} ${entry.receipt.tcid}</strong><br>${entry.payload.who.displayName || entry.payload.who.role} · ${entry.payload.what.assetType}<br><span class="small">${date}</span></div>`;
  }).join('');
}

function setPersona(personaKey) {
  const profile = personaProfiles[personaKey];
  state.activePersona = personaKey;

  ui.personaButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.persona === personaKey);
  });

  ui.fields.whoRole.value = profile.whoRole;
  ui.fields.whatType.value = profile.whatType;
  ui.fields.whereSurface.value = profile.whereSurface;
  ui.fields.whyValue.value = profile.whyValue;
  ui.kicker.textContent = profile.pitch;

  buildPayload();
}

function applyQuickTemplate(templateId) {
  const template = getQuickTemplates().find((item) => item.id === templateId);
  if (!template) return;

  state.activeFastTemplate = templateId;

  if (template.persona) {
    setPersona(template.persona);
  }

  Object.entries(template.values || {}).forEach(([key, value]) => {
    if (ui.fields[key]) {
      ui.fields[key].value = value;
    }
  });

  if (template.catalogMintTypeId && mintTypeById.has(template.catalogMintTypeId)) {
    applyCatalogMintType(template.catalogMintTypeId);
  }

  buildPayload();
  saveState();
}

function populateQuickTemplates(selectedId = '') {
  const templates = getFilteredQuickTemplates();

  if (templates.length === 0) {
    ui.templateSelect.innerHTML = '<option value="">No templates for this concept</option>';
    ui.templateSelect.value = '';
    updateTemplateActions();
    renderFastTemplateChips();
    return;
  }

  ui.templateSelect.innerHTML = templates
    .map((template) => `<option value="${template.id}">${labelWithConceptTags(template)}</option>`)
    .join('');

  const preferred = templates.find((item) => item.id === selectedId)?.id || templates[0]?.id;
  if (preferred) {
    ui.templateSelect.value = preferred;
  }

  updateTemplateActions();
  renderFastTemplateChips();
}

function renderFastTemplateChips() {
  const templates = getFeaturedTemplates();
  const selected = state.activeFastTemplate || templates[0]?.id;

  if (templates.length === 0) {
    ui.fastTemplateList.innerHTML = '<span class="small">No fast templates match this concept filter yet.</span>';
    return;
  }

  ui.fastTemplateList.innerHTML = templates.map((template) => {
    const active = template.id === selected ? 'active' : '';
    return `
      <button class="template-chip ${active}" data-fast-template="${template.id}">
        <span class="chip-label">${template.label}</span>
        <span class="chip-badges">${conceptBadgesHtml(getTemplateConceptKeys(template))}</span>
      </button>
    `;
  }).join('');

  [...ui.fastTemplateList.querySelectorAll('[data-fast-template]')].forEach((button) => {
    button.addEventListener('click', () => {
      state.activeFastTemplate = button.getAttribute('data-fast-template');
      renderFastTemplateChips();
      saveState();
    });
  });
}

function parseFastPrompt(promptText) {
  const text = (promptText || '').trim();
  const lower = text.toLowerCase();
  const updates = {};

  if (lower.includes('open public use')) {
    updates.whyValue = 'Open Public Use';
    updates.derivativeRights = 'OPEN';
  }
  if (lower.includes('now')) {
    updates.whenActivation = 'now';
  }
  if (lower.includes('onedrive')) {
    updates.whereSurface = 'OneDrive Broadcast Layer';
  }
  if (lower.includes('screenshot')) {
    updates.whatType = 'screenshot';
  }
  if (text.length > 0) {
    updates.whatDescription = text;
  }

  return updates;
}

function applyFastPromptToDraft() {
  const selectedTemplateId = ui.templateSelect.value || state.activeFastTemplate || getFeaturedTemplates()[0]?.id;
  if (selectedTemplateId) {
    ui.templateSelect.value = selectedTemplateId;
    applyQuickTemplate(selectedTemplateId);
  }

  const updates = parseFastPrompt(ui.fastPromptInput.value);
  if (updates.whatType) ui.fields.whatType.value = updates.whatType;
  if (updates.whatDescription) ui.fields.whatDescription.value = updates.whatDescription;
  if (updates.whereSurface) ui.fields.whereSurface.value = updates.whereSurface;
  if (updates.whenActivation) ui.fields.whenActivation.value = updates.whenActivation;
  if (updates.whyValue) ui.fields.whyValue.value = updates.whyValue;
  if (updates.derivativeRights) ui.fields.derivativeRights.value = updates.derivativeRights;

  buildPayload();
  ui.promoLine.textContent = 'Fast prompt applied. Review and mint, or open advanced controls.';
}

function openAdvancedControls() {
  if (!ui.advancedBuilder) return;
  ui.advancedBuilder.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function captureDraftSnapshot() {
  const fieldValues = Object.fromEntries(
    Object.entries(ui.fields).map(([key, input]) => [key, input?.value ?? ''])
  );

  return {
    fieldValues,
    templateSelect: ui.templateSelect.value,
    conceptFilter: ui.conceptFilterSelect?.value || 'all',
    pillarFilter: ui.pillarFilter.value,
    mintTypeSelect: ui.mintTypeSelect.value,
    stateValues: {
      activePersona: state.activePersona,
      activeCatalogMintType: state.activeCatalogMintType,
      activeFastTemplate: state.activeFastTemplate,
      mintPhase: state.mintPhase
    }
  };
}

function restoreDraftSnapshot(snapshot) {
  if (!snapshot) return;

  state.activeConceptFilter = normalizeConceptFilter(snapshot.conceptFilter || 'all');
  if (ui.conceptFilterSelect) {
    ui.conceptFilterSelect.value = state.activeConceptFilter;
  }
  populateQuickTemplates(snapshot.templateSelect || '');

  if (snapshot.pillarFilter && [...ui.pillarFilter.options].some((option) => option.value === snapshot.pillarFilter)) {
    ui.pillarFilter.value = snapshot.pillarFilter;
  }
  populateCatalogMintTypes();

  const persona = snapshot.stateValues.activePersona || 'creator';
  if (personaProfiles[persona]) {
    setPersona(persona);
  }

  Object.entries(snapshot.fieldValues || {}).forEach(([key, value]) => {
    if (ui.fields[key]) {
      ui.fields[key].value = value;
    }
  });

  if (snapshot.mintTypeSelect && mintTypeById.has(snapshot.mintTypeSelect)) {
    applyCatalogMintType(snapshot.mintTypeSelect);
  }

  if (snapshot.templateSelect && [...ui.templateSelect.options].some((option) => option.value === snapshot.templateSelect)) {
    ui.templateSelect.value = snapshot.templateSelect;
  }

  state.activePersona = snapshot.stateValues.activePersona;
  state.activeCatalogMintType = snapshot.stateValues.activeCatalogMintType;
  state.activeFastTemplate = snapshot.stateValues.activeFastTemplate;
  state.mintPhase = snapshot.stateValues.mintPhase || 'draft';

  updateTemplateActions();
  buildPayload();
  setMintStatus(state.mintPhase);
  saveState();
}

function collectSweepIssues(payload, scenario) {
  const requiredChecks = [
    ['who.displayName', payload?.who?.displayName],
    ['who.did', payload?.who?.did],
    ['who.role', payload?.who?.role],
    ['what.assetType', payload?.what?.assetType],
    ['what.description', payload?.what?.description],
    ['what.source', payload?.what?.source],
    ['when.epoch', payload?.when?.epoch],
    ['when.activationWindow', payload?.when?.activationWindow],
    ['where.executionSurface', payload?.where?.executionSurface],
    ['where.storage', payload?.where?.storage],
    ['why.valueProposition', payload?.why?.valueProposition],
    ['contract.chain', payload?.contract?.chain],
    ['contract.rarityClass', payload?.contract?.rarityClass],
    ['contract.derivativeRights', payload?.contract?.derivativeRights],
    ['contract.mintIdFormat', payload?.contract?.mintIdFormat],
    ['contract.catalogMintTypeId', payload?.contract?.catalogMintTypeId]
  ];

  const missingFields = requiredChecks
    .filter(([, value]) => value === null || value === undefined || String(value).trim() === '')
    .map(([fieldName]) => fieldName);

  const issues = [...missingFields];

  if (scenario?.catalogMintTypeId && payload?.contract?.catalogMintTypeId !== scenario.catalogMintTypeId) {
    issues.push(`catalog mismatch (${payload.contract.catalogMintTypeId || 'none'} != ${scenario.catalogMintTypeId})`);
  }

  return issues;
}

function runScenarioSweep() {
  const scenarios = SCENARIO_TEMPLATES.length > 0 ? SCENARIO_TEMPLATES : BUILT_IN_QUICK_TEMPLATES;
  if (scenarios.length === 0) {
    if (ui.fastSweepOutput) {
      ui.fastSweepOutput.textContent = 'No scenarios found to sweep.';
    }
    ui.promoLine.textContent = 'Scenario sweep skipped: no scenarios available.';
    return;
  }

  const snapshot = captureDraftSnapshot();
  const lines = [];
  let passCount = 0;
  let failCount = 0;

  scenarios.forEach((scenario, index) => {
    const quickTemplate = getQuickTemplates().find((item) => item.id === scenario.id);

    if (quickTemplate) {
      applyQuickTemplate(quickTemplate.id);
    } else {
      if (scenario.persona && personaProfiles[scenario.persona]) {
        setPersona(scenario.persona);
      }

      Object.entries(scenario.values || {}).forEach(([key, value]) => {
        if (ui.fields[key]) {
          ui.fields[key].value = value;
        }
      });

      if (scenario.catalogMintTypeId && mintTypeById.has(scenario.catalogMintTypeId)) {
        applyCatalogMintType(scenario.catalogMintTypeId);
      }
    }

    const payload = buildPayload();
    const issues = collectSweepIssues(payload, scenario);
    const label = scenario.label || scenario.id || `Scenario ${index + 1}`;

    if (issues.length === 0) {
      passCount += 1;
      lines.push(`✅ ${label} — PASS`);
    } else {
      failCount += 1;
      lines.push(`❌ ${label} — FAIL [${issues.join(', ')}]`);
    }
  });

  restoreDraftSnapshot(snapshot);

  const header = [
    `Scenario Sweep @ ${new Date().toLocaleString()}`,
    `Scenarios: ${scenarios.length} | Pass: ${passCount} | Fail: ${failCount}`,
    ''
  ];

  if (ui.fastSweepOutput) {
    ui.fastSweepOutput.textContent = [...header, ...lines].join('\n');
  }

  setMintStatus(failCount > 0 ? 'draft' : 'verified');
  ui.promoLine.textContent = failCount > 0
    ? `Scenario sweep complete: ${passCount}/${scenarios.length} passed. Review failed templates.`
    : `Scenario sweep complete: all ${scenarios.length} scenarios passed.`;
}

function saveCurrentAsTemplate() {
  const rawName = ui.templateNameInput.value.trim();
  const fallbackName = `${ui.fields.whoName.value.trim() || 'Untitled'} ${ui.fields.whatType.value || 'Mint'}`;
  const finalName = rawName || fallbackName;

  const customTemplate = {
    id: `custom-${makeSafeId(finalName)}-${Date.now()}`,
    label: `Custom · ${finalName}`,
    persona: state.activePersona,
    catalogMintTypeId: ui.mintTypeSelect.value || null,
    values: {
      whoName: ui.fields.whoName.value,
      whoDid: ui.fields.whoDid.value,
      whoRole: ui.fields.whoRole.value,
      whatType: ui.fields.whatType.value,
      whatDescription: ui.fields.whatDescription.value,
      whatSource: ui.fields.whatSource.value,
      whenEpoch: ui.fields.whenEpoch.value,
      whenActivation: ui.fields.whenActivation.value,
      whereSurface: ui.fields.whereSurface.value,
      whyValue: ui.fields.whyValue.value
    }
  };

  state.customTemplates.unshift(customTemplate);
  state.customTemplates = state.customTemplates.slice(0, 30);
  saveState();

  populateQuickTemplates(customTemplate.id);
  ui.templateNameInput.value = '';
  ui.promoLine.textContent = `Saved template: ${customTemplate.label}`;
}

function deleteCurrentTemplate() {
  const selectedId = ui.templateSelect.value;
  if (!selectedId) {
    ui.promoLine.textContent = 'No template selected to delete.';
    return;
  }

  if (isBuiltInTemplateId(selectedId)) {
    ui.promoLine.textContent = 'Built-in templates cannot be deleted.';
    updateTemplateActions();
    return;
  }

  const target = (state.customTemplates || []).find((item) => item.id === selectedId);
  if (!target) {
    ui.promoLine.textContent = 'Template not found in custom library.';
    updateTemplateActions();
    return;
  }

  const shouldConfirm = !sessionFlags.skipDeleteConfirm;
  if (shouldConfirm) {
    const confirmDelete = window.confirm(`Delete template "${target.label}"? This cannot be undone.`);
    if (!confirmDelete) {
      ui.promoLine.textContent = 'Delete canceled.';
      return;
    }
  }

  state.customTemplates = (state.customTemplates || []).filter((item) => item.id !== selectedId);
  saveState();

  const templates = getQuickTemplates();
  populateQuickTemplates(templates[0]?.id || '');
  if (templates[0]) {
    applyQuickTemplate(templates[0].id);
  } else {
    buildPayload();
  }

  ui.promoLine.textContent = `Deleted template: ${target.label}`;
}

function resetDraft() {
  state.mints = [];
  state.activePersona = 'creator';
  state.activeCatalogMintType = '';
  state.activeFastTemplate = 'sample-1-jdoe-screenshot';
  state.activeConceptFilter = 'all';
  state.mintPhase = 'draft';

  ui.fields.whoName.value = 'Epoch Fox';
  ui.fields.whoDid.value = 'did:e3:fox:pilot-001';
  ui.fields.whenActivation.value = '2026-10-15/2026-12-31';
  ui.fields.whatDescription.value = 'proof-of-concept mint';
  ui.fields.whatSource.value = 'browse-button-selected-path';

  setPersona('creator');
  if (ui.conceptFilterSelect) {
    ui.conceptFilterSelect.value = 'all';
  }
  populateQuickTemplates();

  const templates = getQuickTemplates();
  if (templates[0]) {
    ui.templateSelect.value = templates[0].id;
    applyQuickTemplate(templates[0].id);
  }

  ui.receiptOut.textContent = '{\n  "status": "waiting-for-test-mint"\n}';
  setMintStatus('draft');
  if (ui.fastSweepOutput) {
    ui.fastSweepOutput.textContent = 'Sweep idle. Click "Run Scenario Sweep" to validate templates.';
  }
  ui.promoLine.textContent = 'Why be an Xbot? Pick a path, mint a capability, prove value.';
  renderLog();
  saveState();
}

function wireEvents() {
  ui.personaButtons.forEach((button) => {
    button.addEventListener('click', () => setPersona(button.dataset.persona));
  });

  ui.pillarFilter.addEventListener('change', () => {
    populateCatalogMintTypes();
    buildPayload();
  });

  ui.mintTypeSelect.addEventListener('change', () => {
    state.activeCatalogMintType = ui.mintTypeSelect.value;
    renderCatalogHint(ui.mintTypeSelect.value);
    buildPayload();
  });

  ui.templateSelect.addEventListener('change', updateTemplateActions);
  if (ui.conceptFilterSelect) {
    ui.conceptFilterSelect.addEventListener('change', () => {
      state.activeConceptFilter = normalizeConceptFilter(ui.conceptFilterSelect.value);
      const previouslySelected = ui.templateSelect.value;
      populateQuickTemplates(previouslySelected);

      const filteredTemplates = getFilteredQuickTemplates();
      const selectedAfterFilter = ui.templateSelect.value;
      if (filteredTemplates.length > 0 && selectedAfterFilter) {
        applyQuickTemplate(selectedAfterFilter);
      } else {
        buildPayload();
        ui.promoLine.textContent = 'No templates in this concept filter yet. Switch filter or save a matching template.';
      }
      saveState();
    });
  }
  if (ui.copyHudDebugBtn) {
    ui.copyHudDebugBtn.addEventListener('click', copyHudDebugJson);
  }
  ui.applyTemplateBtn.addEventListener('click', () => applyQuickTemplate(ui.templateSelect.value));
  ui.saveTemplateBtn.addEventListener('click', saveCurrentAsTemplate);
  ui.deleteTemplateBtn.addEventListener('click', deleteCurrentTemplate);

  ui.skipDeleteConfirmSession.addEventListener('change', () => {
    sessionFlags.skipDeleteConfirm = Boolean(ui.skipDeleteConfirmSession.checked);
    ui.promoLine.textContent = sessionFlags.skipDeleteConfirm
      ? 'Delete confirm disabled for this browser session.'
      : 'Delete confirm enabled.';
  });

  ui.applyCatalogTemplateBtn.addEventListener('click', () => applyCatalogMintType(ui.mintTypeSelect.value));
  ui.fastApplyBtn.addEventListener('click', applyFastPromptToDraft);
  ui.fastOpenAdvancedBtn.addEventListener('click', openAdvancedControls);
  if (ui.fastSweepBtn) {
    ui.fastSweepBtn.addEventListener('click', runScenarioSweep);
  }
  ui.buildBtn.addEventListener('click', buildPayload);
  ui.mintBtn.addEventListener('click', simulateMint);
  ui.resetBtn.addEventListener('click', resetDraft);
}

function init() {
  sessionFlags.skipDeleteConfirm = false;
  if (ui.skipDeleteConfirmSession) {
    ui.skipDeleteConfirmSession.checked = false;
  }

  populateCatalogDropdowns();
  populateConceptFilters();
  populateCatalogMintTypes();
  populateQuickTemplates();
  wireEvents();

  setPersona(state.activePersona || 'creator');

  const templates = getFilteredQuickTemplates();
  const initialTemplate = templates.find((item) => item.id === state.activeFastTemplate)?.id || templates[0]?.id;
  if (initialTemplate) {
    state.activeFastTemplate = initialTemplate;
    ui.templateSelect.value = initialTemplate;
    applyQuickTemplate(initialTemplate);
    renderFastTemplateChips();
  }

  if (state.activeCatalogMintType && mintTypeById.has(state.activeCatalogMintType)) {
    applyCatalogMintType(state.activeCatalogMintType);
  }

  renderLog();
  buildPayload();
  setMintStatus(state.mintPhase || 'draft');
}

init();




