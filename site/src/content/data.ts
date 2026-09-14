export type Feature = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  metric?: { value: string; label: string };
};

export const features: Feature[] = [
  {
    id: 'graph',
    index: '01',
    eyebrow: 'The Graph',
    title: 'A deterministic creative DAG.',
    description:
      'Twenty-seven specialised agents execute as a directed acyclic graph — branching, conditions, checks, and loops. Every production is reproducible and inspectable end-to-end.',
    bullets: [
      'Showrunner → StyleGuide → Story → Cast → Script',
      'Branching checkpoints, gap detection, supervisor fan-out',
      'Runs are execution traces; the Production is the unit of truth',
    ],
    metric: { value: '27', label: 'specialised agents' },
  },
  {
    id: 'swarm',
    index: '02',
    eyebrow: 'The Swarm',
    title: 'Convergence, not collisions.',
    description:
      'Story ↔ Character ↔ Costume ↔ Environment iterate in parallel up to N turns, then a convergence probe locks the world. Wardrobe intent, location texture and visual bible settle into one canon.',
    bullets: [
      'Parallel narrative + cast + wardrobe + environment',
      'Convergence probe terminates when revisions align',
      'Continuity rules enforced across every revision',
    ],
    metric: { value: '≤4', label: 'turns to convergence' },
  },
  {
    id: 'workflow',
    index: '03',
    eyebrow: 'The Workflow',
    title: 'Per-shot, resumable, deterministic.',
    description:
      'Each shot moves through plan → regenerate → recolor / revoice / recut → continuity review → done. Crash mid-run? Resume exactly where you left off, no lost work.',
    bullets: [
      'plan_revision · regenerate · recolor · revoice · recut',
      'Continuity review gate before assembly',
      'Session files persist on disk — restart-safe',
    ],
    metric: { value: '∞', label: 'resumable runs' },
  },
  {
    id: 'dispatcher',
    index: '04',
    eyebrow: 'Render Dispatcher',
    title: 'Parallel render, every backend.',
    description:
      'A dispatch layer routes shots across MiniMax, Veo, Sora, Runway and friends in parallel. The dispatcher batches by prompt budget, isolates failures, and merges results back into the Production.',
    bullets: [
      'Pluggable provider registry — swap keys, keep canon',
      'Concurrency limits & cost budgets enforced per shot',
      'Failed shots surface as actionable issues, never silent drops',
    ],
    metric: { value: '5+', label: 'render providers' },
  },
  {
    id: 'copilot',
    index: '05',
    eyebrow: 'The Copilot',
    title: 'A creative partner, scoped to your Production.',
    description:
      'Ask for a wardrobe change, a continuity fix, an alternate take. The Copilot answers with citations to specific Characters, Scenes and Shots — never generic chat.',
    bullets: [
      'Tools: search_knowledge, find_continuity_gaps, draft_scene_revision',
      'Every reply carries citations to entities it referenced',
      'Production-scoped context — never leaks across productions',
    ],
    metric: { value: '12+', label: 'creative tools' },
  },
  {
    id: 'continuity',
    index: '06',
    eyebrow: 'Continuity Supervisor',
    title: 'Catches the gaps before render.',
    description:
      'A fan-out supervisor watches for wardrobe drifts, lighting breaks, prop inconsistencies and pacing issues. It produces a SupervisorReport that the coordinator tracks until everything resolves.',
    bullets: [
      'Wardrobe, lighting, prop & pacing checks per shot',
      'Unresolved dependencies tracked, not dropped',
      'Visual quality reviewer scores style-guide adherence',
    ],
    metric: { value: '4', label: 'supervision lanes' },
  },
];

export type Stat = { value: string; label: string; suffix?: string };

export const stats: Stat[] = [
  { value: '27', label: 'Graph agents' },
  { value: '1', label: 'render dispatcher' },
  { value: '1', label: 'Copilot' },
  { value: '20m', label: 'max film length' },
];

export type Step = {
  index: string;
  name: string;
  agent: string;
  desc: string;
};

export const pipeline: Step[] = [
  { index: '01', name: 'Brief', agent: 'Showrunner', desc: 'Distill the prompt into a CinestudioBrief.' },
  { index: '02', name: 'Style Guide', agent: 'StyleGuide', desc: 'Lock palette, lensing, grain.' },
  { index: '03', name: 'Story', agent: 'StoryAnalyst', desc: 'Themes, beats, references.' },
  { index: '04', name: 'Cast', agent: 'CharacterDesigner', desc: 'Characters with intent.' },
  { index: '05', name: 'Wardrobe', agent: 'CostumeDesigner', desc: 'Variants & continuity rules.' },
  { index: '06', name: 'World', agent: 'EnvironmentDesigner', desc: 'Locations, weather, props.' },
  { index: '07', name: 'Script', agent: 'ScriptWriter', desc: 'Beats, scenes, dialogue.' },
  { index: '08', name: 'Storyboard', agent: 'ShotPlanner', desc: 'Shots, framing, movement.' },
  { index: '09', name: 'Supervise', agent: 'ContinuitySupervisor', desc: 'Fan-out review lanes.' },
  { index: '10', name: 'Render', agent: 'RenderDispatcher', desc: 'Parallel dispatch & merge.' },
  { index: '11', name: 'Assemble', agent: 'Editor + Colorist', desc: 'Cut, grade, polish.' },
  { index: '12', name: 'Score', agent: 'Composer', desc: 'Original score, foley, mix.' },
  { index: '13', name: 'Distribute', agent: 'Distribution', desc: 'Cutdowns, thumbnails, press.' },
];

export type Plan = {
  id: string;
  name: string;
  blurb: string;
  price: string;
  period: string;
  cta: string;
  highlight?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    id: 'producer',
    name: 'Producer',
    blurb: 'For solo creators shipping short films.',
    price: '$0',
    period: '/ open-source',
    cta: 'Self-host',
    features: [
      'Full 27-agent Graph',
      'MiniMax provider out of the box',
      'Local SQLite, single container',
      'Community support',
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    blurb: 'For small teams producing branded work.',
    price: '$49',
    period: '/ seat · month',
    cta: 'Start Studio',
    highlight: true,
    features: [
      'Everything in Producer',
      'Multi-provider render pool',
      'Team roles & asset libraries',
      'Priority renders + concurrency boost',
      'Email support, 24h SLA',
    ],
  },
  {
    id: 'cinema',
    name: 'Cinema',
    blurb: 'For agencies & post houses at scale.',
    price: 'Custom',
    period: '/ on request',
    cta: 'Talk to us',
    features: [
      'Everything in Studio',
      'SSO, audit logs, SCIM',
      'Dedicated render capacity',
      'Custom Copilot knowledge bases',
      'Onboarding & solution architect',
    ],
  },
];

export type FAQ = { q: string; a: string };

export const faqs: FAQ[] = [
  {
    q: 'What does a Production actually contain?',
    a: 'Characters, Wardrobe, Locations, Scenes, Shots, Transitions, Continuity, Knowledge, Assets, Comments, Versions, Runs and Copilot threads — all scoped to one Production. Runs are execution traces; the Production is the unit of truth.',
  },
  {
    q: 'Which AI providers are supported?',
    a: 'MiniMax ships as the default (text, video, image, speech, music behind a single key). The provider registry is pluggable — swap in Bedrock, OpenAI, Anthropic, Google or your own endpoint without touching the Graph.',
  },
  {
    q: 'Can I run this on a serverless host?',
    a: 'No. Productions run for 10–60 minutes per pass. We target long-lived containers — a single Docker container with SQLite is the supported profile. See DEPLOY.md.',
  },
  {
    q: 'How does the Copilot stay grounded?',
    a: 'Every reply carries a citations array linking to the specific Character, Scene or Shot it referenced. Tools like search_knowledge, find_continuity_gaps and draft_scene_revision make the reasoning traceable.',
  },
  {
    q: 'Is it open source?',
    a: 'Yes — MIT. Self-host the Producer tier for free. Studio and Cinema tiers fund the hosted service.',
  },
];

export const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Plans', href: '#plans' },
  { label: 'Docs', href: 'https://github.com/sachncs/cinestudio/blob/master/README.md' },
];

export type ValueProp = {
  title: string;
  body: string;
};

export const valueProps: ValueProp[] = [
  {
    title: 'One prompt, one film.',
    body: 'Brief to distribution in a single continuous flow. You stay in creative direction — the Graph handles the orchestration.',
  },
  {
    title: 'Continuity you can trust.',
    body: 'Wardrobe, lighting, props and pacing are supervised before render. Gaps surface as issues, not as silent drops.',
  },
  {
    title: 'Resumable, not restartable.',
    body: 'Every Run persists as a session file. Crash mid-shot? Resume exactly where the Workflow stopped — no lost work.',
  },
];

export type ProofItem = {
  metric: string;
  label: string;
  detail: string;
};

export const proof: ProofItem[] = [
  { metric: '30s → 20m', label: 'Film length envelope', detail: 'From a single prompt.' },
  { metric: '27 + 2', label: 'Agents in flight', detail: '27 Graph + dispatcher + Copilot.' },
  { metric: '5+', label: 'Provider backends', detail: 'Plug-and-play render pool.' },
  { metric: 'MIT', label: 'Open source', detail: 'Self-host forever.' },
];