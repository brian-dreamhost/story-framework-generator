// ===== TONE ENGINE =====
// Each tone defines structural rules that affect the entire output — not just word swaps.

const TONE_PROFILES = {
  conversational: {
    label: 'Conversational',
    sentenceStyle: 'short-medium',    // avg 8-15 words
    useContractions: true,
    useQuestions: true,
    useFirstPerson: true,             // "we", "you"
    punctuationStyle: 'casual',       // dashes, ellipses OK
    emojiUsage: 'light',              // 1-2 max
    paragraphLength: 'short',         // 2-3 sentences
    ctaStyle: 'friendly',
    vocabulary: {
      discovered: 'found out',
      transformed: 'completely changed',
      achieved: 'pulled off',
      struggled: 'kept hitting walls',
      realized: 'figured out',
      implemented: 'started using',
      eliminated: 'got rid of',
      facilitated: 'helped out',
      significant: 'huge',
      demonstrated: 'showed',
      immediately: 'right away',
      subsequently: 'then',
      nevertheless: 'but',
      approximately: 'about',
      commenced: 'started',
      endeavored: 'tried',
      remarkable: 'amazing',
      obstacle: 'roadblock',
      solution: 'fix',
      frustration: 'headache',
    },
    openers: [
      "Here's the thing — ",
      "You know that feeling when ",
      "Let's be honest: ",
      "We've all been there. ",
      "Real talk: ",
    ],
    transitions: [
      "And here's the kicker — ",
      "But then something clicked. ",
      "So what changed? ",
      "That's when things shifted. ",
      "Here's where it gets interesting. ",
    ],
    closers: [
      "Sound familiar? Let's talk.",
      "Ready to see what's possible?",
      "Your move.",
      "Let's make it happen.",
      "We're here when you're ready.",
    ],
  },
  professional: {
    label: 'Professional',
    sentenceStyle: 'medium-long',     // avg 15-25 words
    useContractions: false,
    useQuestions: false,
    useFirstPerson: true,             // "we" but formal
    punctuationStyle: 'formal',       // no dashes, no ellipses
    emojiUsage: 'none',
    paragraphLength: 'medium',        // 3-4 sentences
    ctaStyle: 'authoritative',
    vocabulary: {
      discovered: 'identified',
      transformed: 'facilitated a transformation in',
      achieved: 'delivered',
      struggled: 'encountered persistent challenges with',
      realized: 'recognized',
      implemented: 'deployed',
      eliminated: 'eliminated',
      facilitated: 'enabled',
      significant: 'substantial',
      demonstrated: 'demonstrated',
      immediately: 'immediately',
      subsequently: 'subsequently',
      nevertheless: 'however',
      approximately: 'approximately',
      commenced: 'initiated',
      endeavored: 'pursued',
      remarkable: 'notable',
      obstacle: 'impediment',
      solution: 'solution',
      frustration: 'inefficiency',
    },
    openers: [
      "Organizations today face a critical challenge: ",
      "In an increasingly competitive landscape, ",
      "The data is clear: ",
      "Industry leaders recognize that ",
      "A growing number of professionals are discovering that ",
    ],
    transitions: [
      "This is precisely where our approach differs. ",
      "The strategic inflection point came when ",
      "Through systematic analysis, ",
      "This shift in methodology produced measurable results. ",
      "The evidence supports a different approach. ",
    ],
    closers: [
      "Contact our team to discuss your specific requirements.",
      "Schedule a consultation to explore how this applies to your organization.",
      "Request a detailed analysis for your situation.",
      "Learn more about our proven methodology.",
      "Explore the full case study and supporting data.",
    ],
  },
  inspirational: {
    label: 'Inspirational',
    sentenceStyle: 'varied',          // mix of short punchy + longer flowing
    useContractions: true,
    useQuestions: true,
    useFirstPerson: true,
    punctuationStyle: 'expressive',   // em dashes, occasional exclamation
    emojiUsage: 'moderate',           // 2-3
    paragraphLength: 'short',
    ctaStyle: 'aspirational',
    vocabulary: {
      discovered: 'uncovered',
      transformed: 'transformed',
      achieved: 'achieved the extraordinary',
      struggled: 'faced the impossible',
      realized: 'awakened to',
      implemented: 'embraced',
      eliminated: 'broke free from',
      facilitated: 'empowered',
      significant: 'extraordinary',
      demonstrated: 'proved',
      immediately: 'from day one',
      subsequently: 'from that moment',
      nevertheless: 'yet',
      approximately: 'nearly',
      commenced: 'embarked on',
      endeavored: 'dared to',
      remarkable: 'breathtaking',
      obstacle: 'mountain to climb',
      solution: 'breakthrough',
      frustration: 'burning desire for change',
    },
    openers: [
      "Imagine a world where ",
      "What if everything you believed about ",
      "There's a moment in every journey when ",
      "The greatest breakthroughs begin with ",
      "Behind every success story is ",
    ],
    transitions: [
      "That's when the breakthrough happened. ",
      "And suddenly, everything changed. ",
      "This was the turning point. ",
      "What happened next was extraordinary. ",
      "The impossible became possible. ",
    ],
    closers: [
      "Your breakthrough moment is waiting. Take the first step today.",
      "The future you've imagined? It starts now.",
      "Join the movement. Your story is just beginning.",
      "This is your moment. Don't let it pass.",
      "The only limit is the one you haven't challenged yet.",
    ],
  },
  bold: {
    label: 'Bold / Provocative',
    sentenceStyle: 'short',           // avg 5-10 words
    useContractions: true,
    useQuestions: true,
    useFirstPerson: true,
    punctuationStyle: 'punchy',       // periods for emphasis, dashes
    emojiUsage: 'none',
    paragraphLength: 'very-short',    // 1-2 sentences
    ctaStyle: 'urgent',
    vocabulary: {
      discovered: 'cracked',
      transformed: 'dominated',
      achieved: 'crushed',
      struggled: 'got wrecked by',
      realized: 'woke up to',
      implemented: 'deployed',
      eliminated: 'destroyed',
      facilitated: 'powered',
      significant: 'massive',
      demonstrated: 'proved',
      immediately: 'instantly',
      subsequently: 'then',
      nevertheless: 'but here\'s the thing',
      approximately: 'roughly',
      commenced: 'launched',
      endeavored: 'went all-in on',
      remarkable: 'game-changing',
      obstacle: 'brick wall',
      solution: 'weapon',
      frustration: 'pain point',
    },
    openers: [
      "Stop. ",
      "Most advice is wrong. Here's why: ",
      "Let's cut the fluff. ",
      "Everyone tells you to ",
      "Here's what nobody's saying: ",
    ],
    transitions: [
      "Then everything flipped. ",
      "Plot twist. ",
      "Here's the real story. ",
      "That changed overnight. ",
      "One move changed everything. ",
    ],
    closers: [
      "Stop waiting. Start now.",
      "The window is closing. Move.",
      "Your competitors already know this. Do you?",
      "No more excuses. Let's go.",
      "This is the edge you've been looking for.",
    ],
  },
  humorous: {
    label: 'Humorous',
    sentenceStyle: 'varied',
    useContractions: true,
    useQuestions: true,
    useFirstPerson: true,
    punctuationStyle: 'playful',      // parentheticals, asides
    emojiUsage: 'moderate',
    paragraphLength: 'short',
    ctaStyle: 'witty',
    vocabulary: {
      discovered: 'stumbled upon',
      transformed: 'somehow turned around',
      achieved: 'actually pulled off',
      struggled: 'spectacularly failed at',
      realized: 'had the "aha" moment about',
      implemented: 'finally tried',
      eliminated: 'kicked to the curb',
      facilitated: 'made possible (we\'re as surprised as you)',
      significant: 'borderline ridiculous',
      demonstrated: 'proved (with receipts)',
      immediately: 'faster than you can say "ROI"',
      subsequently: 'and then (plot twist)',
      nevertheless: 'but wait, there\'s more',
      approximately: 'give or take',
      commenced: 'kicked off',
      endeavored: 'gave it the old college try',
      remarkable: 'honestly kind of unbelievable',
      obstacle: 'disaster',
      solution: 'secret sauce',
      frustration: 'existential crisis',
    },
    openers: [
      "Okay, confession time: ",
      "You know what's funny? ",
      "Spoiler alert: ",
      "Not to be dramatic, but ",
      "Plot twist nobody asked for: ",
    ],
    transitions: [
      "And then (cue dramatic music) — ",
      "But here's where it gets interesting. No, seriously. ",
      "Against all odds (and common sense) — ",
      "Then something unexpected happened. Actually, scratch that, it was totally expected. ",
      "What happened next will... actually help your business. ",
    ],
    closers: [
      "Anyway, we're here. You're here. Let's do this.",
      "TL;DR: We can help. Promise we won't be boring about it.",
      "Come for the results, stay for the dad jokes.",
      "We'll be here. Probably snacking, but also ready to help.",
      "Ready when you are. No pressure. (Okay, a little pressure.)",
    ],
  },
};

// ===== INDUSTRY CONTEXT ENGINE =====

const INDUSTRY_CONTEXTS = {
  saas: {
    label: 'SaaS / Tech',
    metaphors: ['scaling a system', 'shipping faster', 'technical debt', 'breaking through bottlenecks'],
    painPhrases: ['churn eating into growth', 'onboarding drop-off killing conversion', 'manual processes that should have been automated yesterday', 'integration headaches across their stack'],
    outcomeVerbs: ['automated', 'streamlined', 'scaled', 'integrated', 'optimized'],
    proofFormats: ['reduced churn by X%', 'cut onboarding time from X to Y', 'saved X hours per week', 'increased MRR by X%'],
    audienceTerms: ['product teams', 'engineering leaders', 'SaaS founders', 'tech-forward companies'],
    ctaVerbs: ['Start your free trial', 'See the demo', 'Get started', 'Try it free'],
  },
  ecommerce: {
    label: 'E-commerce',
    metaphors: ['converting browsers to buyers', 'the checkout moment', 'cart abandonment', 'the revenue leaderboard'],
    painPhrases: ['cart abandonment hemorrhaging revenue', 'ad spend climbing while ROAS drops', 'inventory management nightmares', 'customer acquisition costs spiraling'],
    outcomeVerbs: ['boosted', 'recovered', 'converted', 'retained', 'maximized'],
    proofFormats: ['increased AOV by X%', 'recovered X% of abandoned carts', 'grew revenue by $X/month', 'improved conversion rate from X% to Y%'],
    audienceTerms: ['online store owners', 'D2C brands', 'e-commerce managers', 'Shopify merchants'],
    ctaVerbs: ['Boost your revenue', 'See your growth potential', 'Start selling smarter', 'Unlock more sales'],
  },
  professional: {
    label: 'Professional Services',
    metaphors: ['building trust at scale', 'the referral engine', 'client pipeline', 'billable hours vs. growth time'],
    painPhrases: ['feast-or-famine client pipeline', 'spending more time marketing than doing actual work', 'competitors undercutting on price', 'relying entirely on referrals with no backup plan'],
    outcomeVerbs: ['established', 'positioned', 'attracted', 'retained', 'elevated'],
    proofFormats: ['doubled client pipeline in X months', 'reduced time-to-close by X%', 'increased average contract value by X%', 'grew referral rate to X%'],
    audienceTerms: ['consultants', 'agencies', 'professional firms', 'service providers'],
    ctaVerbs: ['Build your pipeline', 'Attract better clients', 'Grow your practice', 'Elevate your brand'],
  },
  local: {
    label: 'Local Business',
    metaphors: ['becoming the neighborhood go-to', 'the Google Maps gold rush', 'foot traffic to repeat customers', 'the local reputation engine'],
    painPhrases: ['invisible on Google Maps', 'losing customers to the chain down the street', 'relying on word-of-mouth alone', 'no online presence beyond a Facebook page'],
    outcomeVerbs: ['attracted', 'retained', 'grew', 'established', 'dominated'],
    proofFormats: ['grew foot traffic by X%', 'went from X to Y Google reviews', 'increased repeat customers by X%', 'ranked #1 for "X near me"'],
    audienceTerms: ['local shop owners', 'neighborhood businesses', 'community-focused brands', 'main street entrepreneurs'],
    ctaVerbs: ['Get found locally', 'Dominate your area', 'Grow your local presence', 'Attract nearby customers'],
  },
  health: {
    label: 'Health & Wellness',
    metaphors: ['the wellness journey', 'holistic transformation', 'mind-body connection', 'the path to vitality'],
    painPhrases: ['information overload making decisions impossible', 'generic programs that don\'t account for individual needs', 'struggling to maintain consistency', 'frustrated by one-size-fits-all approaches'],
    outcomeVerbs: ['restored', 'achieved', 'reclaimed', 'balanced', 'strengthened'],
    proofFormats: ['helped X clients reach their goals', 'X% of participants saw results in Y weeks', 'improved client satisfaction to X%', 'reduced dropout rate by X%'],
    audienceTerms: ['wellness seekers', 'health-conscious individuals', 'patients', 'practitioners'],
    ctaVerbs: ['Start your journey', 'Take the first step', 'Transform your health', 'Begin today'],
  },
  education: {
    label: 'Education',
    metaphors: ['unlocking potential', 'the lightbulb moment', 'bridging the knowledge gap', 'building future-ready skills'],
    painPhrases: ['students falling behind without personalized support', 'outdated curriculum failing to engage learners', 'educators stretched too thin', 'skills gaps widening in the workforce'],
    outcomeVerbs: ['mastered', 'developed', 'accelerated', 'empowered', 'equipped'],
    proofFormats: ['improved test scores by X%', 'X students placed in advanced programs', 'reduced learning time by X%', 'increased course completion to X%'],
    audienceTerms: ['educators', 'students', 'learning professionals', 'academic institutions'],
    ctaVerbs: ['Start learning', 'Enroll today', 'Unlock your potential', 'Explore programs'],
  },
  nonprofit: {
    label: 'Non-profit',
    metaphors: ['amplifying impact', 'the ripple effect', 'turning donors into champions', 'mission-driven momentum'],
    painPhrases: ['donor fatigue shrinking contribution pools', 'grant writing consuming all available bandwidth', 'volunteer burnout threatening operations', 'struggling to measure and communicate real impact'],
    outcomeVerbs: ['mobilized', 'amplified', 'sustained', 'connected', 'championed'],
    proofFormats: ['increased donations by X%', 'reached X additional beneficiaries', 'improved donor retention to X%', 'expanded volunteer base by X%'],
    audienceTerms: ['nonprofit leaders', 'mission-driven organizations', 'social impact teams', 'community advocates'],
    ctaVerbs: ['Join the mission', 'Make an impact', 'Support the cause', 'Get involved'],
  },
  creative: {
    label: 'Creative Agency',
    metaphors: ['making brands unforgettable', 'the creative spark', 'cutting through the noise', 'visual storytelling'],
    painPhrases: ['competing on price instead of value', 'clients micromanaging the creative process', 'scope creep eating into margins', 'struggling to differentiate in a crowded market'],
    outcomeVerbs: ['crafted', 'reimagined', 'elevated', 'disrupted', 'captivated'],
    proofFormats: ['increased client engagement by X%', 'won X industry awards', 'grew client retention to X%', 'delivered X% ROI on creative campaigns'],
    audienceTerms: ['brand managers', 'marketing directors', 'creative professionals', 'visionary brands'],
    ctaVerbs: ['See our work', 'Start a project', 'Let\'s create together', 'Get a creative brief'],
  },
};

// ===== CONTEXT-AWARE STORY GENERATION =====

function detectIndustry(inputs) {
  const text = `${inputs.hero} ${inputs.struggle} ${inputs.transformation} ${inputs.yourRole} ${inputs.brandName}`.toLowerCase();

  const scores = {};
  const keywords = {
    saas: ['software', 'saas', 'app', 'platform', 'api', 'integration', 'onboarding', 'churn', 'mrr', 'subscription', 'users', 'deploy', 'code', 'tech', 'startup', 'scale', 'automation', 'dashboard'],
    ecommerce: ['shop', 'store', 'ecommerce', 'e-commerce', 'cart', 'product', 'shipping', 'inventory', 'orders', 'sell', 'buy', 'retail', 'merchant', 'shopify', 'revenue', 'aov', 'conversion'],
    professional: ['consult', 'agency', 'firm', 'practice', 'client', 'professional', 'service', 'billing', 'proposal', 'retainer', 'lawyer', 'accountant', 'advisor', 'contract'],
    local: ['local', 'neighborhood', 'community', 'foot traffic', 'google maps', 'reviews', 'near me', 'restaurant', 'salon', 'shop', 'bakery', 'gym', 'clinic', 'dentist', 'plumber'],
    health: ['health', 'wellness', 'fitness', 'nutrition', 'mental', 'therapy', 'coaching', 'yoga', 'meditation', 'patient', 'holistic', 'diet', 'exercise', 'wellbeing'],
    education: ['education', 'learn', 'student', 'course', 'training', 'teach', 'curriculum', 'school', 'university', 'tutor', 'skill', 'workshop', 'academy', 'certificate'],
    nonprofit: ['nonprofit', 'non-profit', 'donate', 'volunteer', 'mission', 'cause', 'charity', 'foundation', 'impact', 'community', 'grant', 'fundrais'],
    creative: ['creative', 'design', 'brand', 'visual', 'content', 'campaign', 'marketing', 'copy', 'video', 'photo', 'animation', 'art director', 'studio'],
  };

  for (const [industry, terms] of Object.entries(keywords)) {
    scores[industry] = terms.reduce((score, term) => score + (text.includes(term) ? 1 : 0), 0);
  }

  const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  return best[1] > 0 ? best[0] : 'professional'; // default fallback
}

function getContextualPhrases(industry) {
  const ctx = INDUSTRY_CONTEXTS[industry] || INDUSTRY_CONTEXTS.professional;
  const pain = ctx.painPhrases[Math.floor(Math.random() * ctx.painPhrases.length)];
  const outcome = ctx.outcomeVerbs[Math.floor(Math.random() * ctx.outcomeVerbs.length)];
  const metaphor = ctx.metaphors[Math.floor(Math.random() * ctx.metaphors.length)];
  const audience = ctx.audienceTerms[Math.floor(Math.random() * ctx.audienceTerms.length)];
  const cta = ctx.ctaVerbs[Math.floor(Math.random() * ctx.ctaVerbs.length)];
  return { pain, outcome, metaphor, audience, cta, industryLabel: ctx.label };
}

function applyTone(text, toneKey) {
  const profile = TONE_PROFILES[toneKey] || TONE_PROFILES.conversational;
  let result = text;

  // Apply vocabulary substitutions
  for (const [formal, replacement] of Object.entries(profile.vocabulary)) {
    const regex = new RegExp(`\\b${formal}\\b`, 'gi');
    result = result.replace(regex, replacement);
  }

  // Apply contraction rules
  if (profile.useContractions) {
    result = result.replace(/\bdo not\b/gi, "don't")
      .replace(/\bcannot\b/gi, "can't")
      .replace(/\bwill not\b/gi, "won't")
      .replace(/\bit is\b/gi, "it's")
      .replace(/\bthat is\b/gi, "that's")
      .replace(/\bthey are\b/gi, "they're")
      .replace(/\bwe are\b/gi, "we're")
      .replace(/\byou are\b/gi, "you're")
      .replace(/\bwould not\b/gi, "wouldn't")
      .replace(/\bcould not\b/gi, "couldn't")
      .replace(/\bshould not\b/gi, "shouldn't")
      .replace(/\bwhat is\b/gi, "what's")
      .replace(/\bhere is\b/gi, "here's")
      .replace(/\bthere is\b/gi, "there's");
  } else {
    // Expand contractions for professional tone
    result = result.replace(/\bdon't\b/gi, "do not")
      .replace(/\bcan't\b/gi, "cannot")
      .replace(/\bwon't\b/gi, "will not")
      .replace(/\bit's\b/g, "it is")
      .replace(/\bthat's\b/gi, "that is")
      .replace(/\bthey're\b/gi, "they are")
      .replace(/\bwe're\b/gi, "we are")
      .replace(/\byou're\b/gi, "you are")
      .replace(/\bwouldn't\b/gi, "would not")
      .replace(/\bcouldn't\b/gi, "could not")
      .replace(/\bshouldn't\b/gi, "should not")
      .replace(/\bwhat's\b/gi, "what is")
      .replace(/\bhere's\b/gi, "here is")
      .replace(/\bthere's\b/gi, "there is");
  }

  return result;
}

function getToneElement(toneKey, type) {
  const profile = TONE_PROFILES[toneKey] || TONE_PROFILES.conversational;
  const arr = profile[type + 's'] || [];
  return arr[Math.floor(Math.random() * arr.length)] || '';
}

// ===== FRAMEWORK GENERATORS =====

export function generateStoryFrameworks(inputs) {
  const { brandName, hero, struggle, transformation, yourRole, proofPoint, selectedTone, industry: selectedIndustry } = inputs;
  const t = selectedTone || 'conversational';
  const industry = selectedIndustry || detectIndustry(inputs);
  const ctx = getContextualPhrases(industry);

  // 1. Hero's Journey (5-beat)
  const heroJourney = buildHerosJourney({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx });

  // 2. Problem-Agitate-Solution (PAS)
  const pas = buildPAS({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx });

  // 3. Before-After-Bridge (BAB)
  const bab = buildBAB({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx });

  // 4. Pixar Story Spine
  const pixar = buildPixar({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx });

  // 5. Customer Success Story Arc
  const customerSuccess = buildCustomerSuccess({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx });

  const frameworks = [heroJourney, pas, bab, pixar, customerSuccess];

  // Score each framework
  return frameworks.map(fw => ({
    ...fw,
    scores: scoreStory(fw.narrative, inputs, t),
    socialAdaptations: generateSocialAdaptations(fw, inputs, t, ctx),
  }));
}

function buildHerosJourney({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx }) {
  const opener = getToneElement(t, 'opener');
  const transition = getToneElement(t, 'transition');
  const closer = getToneElement(t, 'closer');

  let scenes;
  if (t === 'professional') {
    scenes = [
      { beat: 'Ordinary World', text: applyTone(`${hero} operated in a landscape where ${transformation} remained an aspirational goal. The day-to-day reality, however, presented a fundamentally different picture.`, t) },
      { beat: 'Call to Adventure', text: applyTone(`The challenge of ${struggle} reached a critical threshold. The cost of inaction — measured in ${ctx.metaphor} — became untenable. A strategic pivot was required.`, t) },
      { beat: 'Struggle', text: applyTone(`Previous approaches had yielded insufficient results. Conventional solutions addressed symptoms rather than root causes, leaving the core ${ctx.pain.split(' ').slice(0, 3).join(' ')} unresolved.`, t) },
      { beat: 'Discovery of Solution', text: applyTone(`${brandName} introduced a different methodology. As ${yourRole}, we identified the structural gap and deployed a targeted approach that addressed the underlying challenge.`, t) },
      { beat: 'Transformation', text: applyTone(`The measurable outcome: ${transformation}. The proof: ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'bold') {
    scenes = [
      { beat: 'Ordinary World', text: applyTone(`${hero}. Goal: ${transformation}. Reality: nowhere close.`, t) },
      { beat: 'Call to Adventure', text: applyTone(`${struggle} was killing momentum. Every day it continued, the gap between them and the competition widened. Something had to break.`, t) },
      { beat: 'Struggle', text: applyTone(`They tried the usual playbook. It failed. The real problem wasn't effort — it was approach. They were fighting the wrong battle entirely.`, t) },
      { beat: 'Discovery of Solution', text: applyTone(`Enter ${brandName}. As ${yourRole}, we didn't just patch the problem — we flipped the entire model.`, t) },
      { beat: 'Transformation', text: applyTone(`Result: ${transformation}. Proof: ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'inspirational') {
    scenes = [
      { beat: 'Ordinary World', text: applyTone(`${hero} carried a vision: ${transformation}. It was more than a goal — it was a calling. But the path forward was far from clear.`, t) },
      { beat: 'Call to Adventure', text: applyTone(`The weight of ${struggle} had become a defining challenge. Not just a problem to solve, but ${ctx.metaphor} that demanded courage and a leap of faith.`, t) },
      { beat: 'Struggle', text: applyTone(`The journey tested everything. Setbacks mounted. Conventional wisdom fell short. But giving up was never an option — the vision was too important.`, t) },
      { beat: 'Discovery of Solution', text: applyTone(`Then came ${brandName}. As ${yourRole}, we didn't just offer a tool — we became a partner in the pursuit of something extraordinary.`, t) },
      { beat: 'Transformation', text: applyTone(`And the dream became reality: ${transformation}. ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'humorous') {
    scenes = [
      { beat: 'Ordinary World', text: applyTone(`${hero} had a dream: ${transformation}. Ambitious? Sure. Naive? Maybe a little. But aren't all the best stories?`, t) },
      { beat: 'Call to Adventure', text: applyTone(`Meanwhile, ${struggle} was doing its best impression of a recurring nightmare. You know the type — you think you've fixed it, and then Monday happens.`, t) },
      { beat: 'Struggle', text: applyTone(`They tried everything. Google. YouTube tutorials at 2 AM. That one "guru" on LinkedIn. Spoiler: none of it worked. (Shocking, we know.)`, t) },
      { beat: 'Discovery of Solution', text: applyTone(`And then they found ${brandName}. As ${yourRole}, we actually knew what we were doing. Revolutionary concept, right?`, t) },
      { beat: 'Transformation', text: applyTone(`Fast forward: ${transformation}. The receipts? ${proofPoint}. ${closer}`, t) },
    ];
  } else {
    // conversational
    scenes = [
      { beat: 'Ordinary World', text: applyTone(`${opener}${hero} had a clear goal: ${transformation}. But the day-to-day reality? It looked nothing like that vision.`, t) },
      { beat: 'Call to Adventure', text: applyTone(`${struggle} was becoming impossible to ignore. It was costing real time, real money, and — let's be honest — real sanity. Something had to give.`, t) },
      { beat: 'Struggle', text: applyTone(`They'd tried the usual approaches. Nothing stuck. The real problem ran deeper than any quick fix could reach — it was about ${ctx.metaphor}.`, t) },
      { beat: 'Discovery of Solution', text: applyTone(`${transition}They found ${brandName}. As ${yourRole}, we showed them a path that actually made sense — and actually worked.`, t) },
      { beat: 'Transformation', text: applyTone(`The result: ${transformation}. And the proof speaks for itself — ${proofPoint}. ${closer}`, t) },
    ];
  }

  const narrative = scenes.map(s => s.text).join('\n\n');
  return {
    id: 'heros-journey',
    name: "Hero's Journey (Brand Short Form)",
    description: 'A 5-beat narrative arc: Ordinary World \u2192 Call to Adventure \u2192 Struggle \u2192 Discovery \u2192 Transformation',
    scenes,
    narrative,
  };
}

function buildPAS({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx }) {
  const closer = getToneElement(t, 'closer');

  let scenes;
  if (t === 'professional') {
    scenes = [
      { beat: 'Problem', text: applyTone(`For ${hero}, the challenge of ${struggle} represents more than an operational inconvenience. It is a fundamental barrier to achieving ${transformation} — one that compounds over time and erodes competitive positioning.`, t) },
      { beat: 'Agitate', text: applyTone(`Consider the cumulative cost: every week this challenge persists, resources are misallocated, opportunities are forfeit, and the gap between current performance and potential widens. Competitors who have addressed this challenge are already capitalizing on the advantage. The status quo is not neutral — it is actively costly.`, t) },
      { beat: 'Solution', text: applyTone(`${brandName} was engineered to address this precise challenge. As ${yourRole}, we deliver a systematic approach that ${ctx.outcome}s measurable results. The evidence: ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'bold') {
    scenes = [
      { beat: 'Problem', text: applyTone(`${hero}? Meet your biggest bottleneck: ${struggle}. It's the thing standing between you and ${transformation}. And it's costing you every single day.`, t) },
      { beat: 'Agitate', text: applyTone(`Here's what makes it worse. While you're stuck dealing with this, your competitors aren't. They've already moved past it. Every day you wait is another day you fall behind. That's not a scare tactic — that's math.`, t) },
      { beat: 'Solution', text: applyTone(`${brandName} exists to kill this problem. As ${yourRole}, we don't do band-aids. We ${ctx.outcome} the core issue. ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'inspirational') {
    scenes = [
      { beat: 'Problem', text: applyTone(`If you're ${hero}, you know the weight of ${struggle}. It's more than a challenge — it's the thing that makes you question whether ${transformation} is even possible.`, t) },
      { beat: 'Agitate', text: applyTone(`And the hardest part? Watching time pass. Watching others break through while you're still fighting the same uphill battle. It's exhausting. It's isolating. And deep down, you know you deserve better.`, t) },
      { beat: 'Solution', text: applyTone(`${brandName} was born from the belief that ${hero} deserves a clear path forward. As ${yourRole}, we don't just address the problem — we help you ${ctx.outcome} something extraordinary. ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'humorous') {
    scenes = [
      { beat: 'Problem', text: applyTone(`So you're ${hero}, and ${struggle} has become your unofficial full-time job. You didn't sign up for this. You signed up for ${transformation}. Yet here we are.`, t) },
      { beat: 'Agitate', text: applyTone(`And it just. Keeps. Getting worse. You've googled the problem so many times that Google is starting to feel sorry for you. Meanwhile, your competitors are out there living their best lives. Rude, honestly.`, t) },
      { beat: 'Solution', text: applyTone(`Good news: ${brandName} is here, and we actually fix this. As ${yourRole}, we've made it our entire personality to help people like you ${ctx.outcome} real results. ${proofPoint}. ${closer}`, t) },
    ];
  } else {
    scenes = [
      { beat: 'Problem', text: applyTone(`If you're ${hero}, you know the pain of ${struggle}. It slows everything down and keeps you stuck on the wrong side of ${transformation}.`, t) },
      { beat: 'Agitate', text: applyTone(`And the longer it goes on, the worse it gets. You watch competitors move forward while you're grinding through the same frustrating obstacles. It's exhausting, it's costly, and — worst of all — it feels like there's no good option.`, t) },
      { beat: 'Solution', text: applyTone(`That's exactly why ${brandName} exists. As ${yourRole}, we help you ${ctx.outcome} real results — ${transformation} — without the headaches. ${proofPoint}. ${closer}`, t) },
    ];
  }

  const narrative = scenes.map(s => s.text).join('\n\n');
  return {
    id: 'pas',
    name: 'Problem-Agitate-Solution (PAS)',
    description: 'Classic direct-response format: identify the problem, amplify the pain, introduce the solution',
    scenes,
    narrative,
  };
}

function buildBAB({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx }) {
  const closer = getToneElement(t, 'closer');

  let scenes;
  if (t === 'professional') {
    scenes = [
      { beat: 'Before', text: applyTone(`Currently, ${hero} contends with ${struggle}. This situation generates measurable inefficiency, restricts growth capacity, and diverts resources from strategic priorities. The operational and financial impact is well-documented.`, t) },
      { beat: 'After', text: applyTone(`The alternative scenario: ${transformation}. This is not hypothetical — it is the documented outcome for organizations that have addressed this challenge systematically. Greater efficiency, stronger results, and sustainable competitive advantage.`, t) },
      { beat: 'Bridge', text: applyTone(`${brandName} serves as the bridge between these two states. As ${yourRole}, we deliver the methodology and support required to ${ctx.outcome} this transition reliably. ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'bold') {
    scenes = [
      { beat: 'Before', text: applyTone(`Right now: ${hero} + ${struggle} = wasted potential. It's costing time, money, and momentum. Every day.`, t) },
      { beat: 'After', text: applyTone(`The flip side: ${transformation}. Not eventually. Not "hopefully." Consistently. Measurably. Starting now.`, t) },
      { beat: 'Bridge', text: applyTone(`The bridge? ${brandName}. As ${yourRole}, we make the "after" your default setting. ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'inspirational') {
    scenes = [
      { beat: 'Before', text: applyTone(`Picture this: ${hero}, pouring heart and soul into the work, yet held back by ${struggle}. The frustration is real. The potential is enormous. And the gap between what is and what could be? It's the source of every restless night.`, t) },
      { beat: 'After', text: applyTone(`Now imagine: ${transformation}. Not as a distant dream, but as your daily reality. More confidence. More impact. More of the results that made you start this journey in the first place.`, t) },
      { beat: 'Bridge', text: applyTone(`${brandName} is the bridge between where you are and where you're meant to be. As ${yourRole}, we walk that path with you. ${proofPoint}. ${closer}`, t) },
    ];
  } else if (t === 'humorous') {
    scenes = [
      { beat: 'Before', text: applyTone(`Current situation: ${hero} is dealing with ${struggle}, which is about as fun as a root canal during a Zoom meeting. Growth? Sure, in theory. In practice? More like treading water in quicksand.`, t) },
      { beat: 'After', text: applyTone(`But imagine this instead: ${transformation}. Wild, right? Almost sounds too good. Like finding out your flight got upgraded and there's free Wi-Fi. But it's real.`, t) },
      { beat: 'Bridge', text: applyTone(`How do you get from Point A (ugh) to Point B (amazing)? ${brandName}. As ${yourRole}, we've made this transition our whole thing. ${proofPoint}. ${closer}`, t) },
    ];
  } else {
    scenes = [
      { beat: 'Before', text: applyTone(`Right now, ${hero} is dealing with ${struggle}. It's frustrating, it's expensive, and it's holding back real progress toward ${transformation}.`, t) },
      { beat: 'After', text: applyTone(`Now imagine the flip side: ${transformation}. More time, more confidence, better results — and the peace of mind that comes with knowing things are actually working.`, t) },
      { beat: 'Bridge', text: applyTone(`That's exactly what ${brandName} delivers. As ${yourRole}, we make the "after" your new normal — and we've got the track record to prove it. ${proofPoint}. ${closer}`, t) },
    ];
  }

  const narrative = scenes.map(s => s.text).join('\n\n');
  return {
    id: 'bab',
    name: 'Before-After-Bridge (BAB)',
    description: 'Great for landing page hero sections: Present reality \u2192 Desired reality \u2192 The bridge',
    scenes,
    narrative,
  };
}

function buildPixar({ brandName, hero, struggle, transformation, yourRole, proofPoint, t, ctx }) {
  const closer = getToneElement(t, 'closer');

  let scenes;
  if (t === 'professional') {
    scenes = [
      { beat: 'Once upon a time...', text: applyTone(`...${hero} set out with a clear objective: to achieve ${transformation}. The mission was well-defined, and the commitment was unwavering.`, t) },
      { beat: 'Every day...', text: applyTone(`...the reality of ${struggle} consumed disproportionate resources and attention. Despite consistent effort, progress remained incremental at best — a pattern of diminishing returns.`, t) },
      { beat: 'One day...', text: applyTone(`...they identified ${brandName} — ${yourRole} that offered a fundamentally different approach to the challenge they had been addressing with inadequate tools.`, t) },
      { beat: 'Because of that...', text: applyTone(`...they gained access to methodology and capability that had previously been unavailable. The approach ${ctx.outcome}d a new trajectory — measurable and sustainable.`, t) },
      { beat: 'Until finally...', text: applyTone(`...they achieved ${transformation}. The evidence is documented: ${proofPoint}.`, t) },
      { beat: 'And ever since then...', text: applyTone(`...the results have sustained and compounded. What once seemed aspirational is now operational standard. ${closer}`, t) },
    ];
  } else if (t === 'bold') {
    scenes = [
      { beat: 'Once upon a time...', text: applyTone(`...${hero} had one mission: ${transformation}. Simple. Clear. Non-negotiable.`, t) },
      { beat: 'Every day...', text: applyTone(`...${struggle} got in the way. Like clockwork. Like a bad habit nobody could break.`, t) },
      { beat: 'One day...', text: applyTone(`...they found ${brandName}. ${yourRole} that didn't just talk — we delivered.`, t) },
      { beat: 'Because of that...', text: applyTone(`...everything shifted. Not slowly. Not "over time." Fast. Measurably. Undeniably.`, t) },
      { beat: 'Until finally...', text: applyTone(`...${transformation}. Done. ${proofPoint}.`, t) },
      { beat: 'And ever since then...', text: applyTone(`...there's been no looking back. Only forward. ${closer}`, t) },
    ];
  } else if (t === 'inspirational') {
    scenes = [
      { beat: 'Once upon a time...', text: applyTone(`...${hero} dared to dream of ${transformation}. It wasn't just a business goal — it was a vision of what could be.`, t) },
      { beat: 'Every day...', text: applyTone(`...${struggle} tested their resolve. Every setback whispered "give up." Every obstacle felt like a sign. But the dream was louder.`, t) },
      { beat: 'One day...', text: applyTone(`...they discovered ${brandName} — ${yourRole} who believed in the same vision and knew how to make it real.`, t) },
      { beat: 'Because of that...', text: applyTone(`...the impossible began to feel inevitable. Step by step, the barriers fell. The path forward revealed itself.`, t) },
      { beat: 'Until finally...', text: applyTone(`...the dream became reality: ${transformation}. ${proofPoint}.`, t) },
      { beat: 'And ever since then...', text: applyTone(`...they've been living proof that belief, paired with the right partner, can move mountains. ${closer}`, t) },
    ];
  } else if (t === 'humorous') {
    scenes = [
      { beat: 'Once upon a time...', text: applyTone(`...${hero} had a dream. ${transformation}. Pretty reasonable, right? The universe had other plans.`, t) },
      { beat: 'Every day...', text: applyTone(`...${struggle} showed up like that one coworker who always "has a quick question." Spoiler: it was never quick.`, t) },
      { beat: 'One day...', text: applyTone(`...they stumbled upon ${brandName}. Okay, "stumbled" is generous — they were desperately googling at midnight. As ${yourRole}, we answered the call.`, t) },
      { beat: 'Because of that...', text: applyTone(`...things actually started working. We know. We were surprised too. (Just kidding. We weren't.)`, t) },
      { beat: 'Until finally...', text: applyTone(`...${transformation}. For real. ${proofPoint}. No asterisks. No "results may vary."`, t) },
      { beat: 'And ever since then...', text: applyTone(`...they've been telling everyone who'll listen. And a few people who won't. ${closer}`, t) },
    ];
  } else {
    scenes = [
      { beat: 'Once upon a time...', text: applyTone(`...there was ${hero} who wanted more than anything to ${transformation}. It was the kind of goal that kept them up at night — in a good way.`, t) },
      { beat: 'Every day...', text: applyTone(`...they faced the reality of ${struggle}. It made progress feel like pushing a boulder uphill. Every small win was followed by a familiar setback.`, t) },
      { beat: 'One day...', text: applyTone(`...they found ${brandName} — ${yourRole} that finally made sense. Not just another promise, but a genuine path forward.`, t) },
      { beat: 'Because of that...', text: applyTone(`...things started to shift. Not overnight, but steadily and unmistakably. They ${ctx.outcome}d a way forward they'd never had before.`, t) },
      { beat: 'Until finally...', text: applyTone(`...they achieved ${transformation}. And it wasn't luck — it was the result of the right approach. ${proofPoint}.`, t) },
      { beat: 'And ever since then...', text: applyTone(`...they haven't looked back. And honestly? Neither will you. ${closer}`, t) },
    ];
  }

  const narrative = scenes.map(s => `${s.beat} ${s.text}`).join('\n\n');
  return {
    id: 'pixar',
    name: 'Pixar Story Spine',
    description: 'A fill-in-the-blank structure that generates a complete mini-story in 6 lines',
    scenes,
    narrative,
  };
}

function buildCustomerSuccess({ brandName, hero, struggle, transformation, yourRole, proofPoint, t }) {
  const closer = getToneElement(t, 'closer');

  let scenes;
  if (t === 'professional') {
    scenes = [
      { beat: 'Setup', text: applyTone(`${hero} — an organization with a clear strategic direction but a growing operational challenge that threatened to undermine their objectives.`, t) },
      { beat: 'Challenge', text: applyTone(`The primary impediment: ${struggle}. This challenge had measurable consequences — it was actively blocking the path to ${transformation} and generating quantifiable losses in both time and capital.`, t) },
      { beat: 'Turning Point', text: applyTone(`After evaluating alternatives, they engaged ${brandName}. As ${yourRole}, we conducted a thorough assessment and implemented a targeted strategy that addressed the root cause rather than the symptoms.`, t) },
      { beat: 'Result', text: applyTone(`The outcome: ${transformation}. The verification: ${proofPoint}. These results have been sustained and continue to compound.`, t) },
      { beat: 'Recommendation', text: applyTone(`"For any organization contending with similar challenges, ${brandName} delivered exactly what was promised — and exceeded our expectations on timeline and impact." ${closer}`, t) },
    ];
  } else if (t === 'bold') {
    scenes = [
      { beat: 'Setup', text: applyTone(`${hero}. Big ambitions. Bigger problems.`, t) },
      { beat: 'Challenge', text: applyTone(`${struggle} was the bottleneck that wouldn't budge. It was blocking ${transformation} and bleeding resources dry. Every day it continued was a day wasted.`, t) },
      { beat: 'Turning Point', text: applyTone(`They brought in ${brandName}. As ${yourRole}, we didn't sugarcoat the diagnosis. We named the problem, built the fix, and deployed it.`, t) },
      { beat: 'Result', text: applyTone(`${transformation}. Done. ${proofPoint}. End of story.`, t) },
      { beat: 'Recommendation', text: applyTone(`"We wasted months trying other solutions. ${brandName} delivered in weeks what nobody else could. Don't wait like we did." ${closer}`, t) },
    ];
  } else if (t === 'inspirational') {
    scenes = [
      { beat: 'Setup', text: applyTone(`${hero} — a team with a powerful mission and the determination to see it through, no matter the obstacles ahead.`, t) },
      { beat: 'Challenge', text: applyTone(`But ${struggle} stood in the way like a mountain. Not an inconvenience — a fundamental barrier between where they were and the ${transformation} they knew was possible.`, t) },
      { beat: 'Turning Point', text: applyTone(`Then they connected with ${brandName}. As ${yourRole}, we didn't just offer a service — we became a partner in their vision. Together, we charted a new course.`, t) },
      { beat: 'Result', text: applyTone(`The transformation was real: ${transformation}. The proof is undeniable: ${proofPoint}. What once felt impossible became their new reality.`, t) },
      { beat: 'Recommendation', text: applyTone(`"${brandName} didn't just solve our problem — they helped us see what we were truly capable of. That's priceless." ${closer}`, t) },
    ];
  } else if (t === 'humorous') {
    scenes = [
      { beat: 'Setup', text: applyTone(`Meet ${hero}. Great at their job. Less great at solving ${struggle}. (No judgment — that's literally why we exist.)`, t) },
      { beat: 'Challenge', text: applyTone(`${struggle} had gone from "annoying" to "keeps me up at night" to "I've started talking to my houseplants about it." It was blocking ${transformation}, and no amount of coffee was going to fix it.`, t) },
      { beat: 'Turning Point', text: applyTone(`Enter ${brandName}, stage left. As ${yourRole}, we took one look at the situation and said "yeah, we can fix that." (We're fun like that.)`, t) },
      { beat: 'Result', text: applyTone(`Plot twist with a happy ending: ${transformation}. And before you ask — yes, it's real. ${proofPoint}. We've got the receipts.`, t) },
      { beat: 'Recommendation', text: applyTone(`"Honestly, our only regret is not finding ${brandName} sooner. Would have saved us a lot of late nights and existential spiraling." ${closer}`, t) },
    ];
  } else {
    scenes = [
      { beat: 'Setup', text: applyTone(`${hero} — a customer with a clear mission and a real passion for what they do. But they had a growing problem that needed solving.`, t) },
      { beat: 'Challenge', text: applyTone(`Their biggest obstacle: ${struggle}. It wasn't just annoying — it was actively blocking the path to ${transformation} and costing real time and money.`, t) },
      { beat: 'Turning Point', text: applyTone(`They reached out to ${brandName}. As ${yourRole}, we helped them see the problem differently — and more importantly, showed them an approach that actually worked.`, t) },
      { beat: 'Result', text: applyTone(`The outcome: ${transformation}. The proof: ${proofPoint}. Not a fluke — a real, repeatable result.`, t) },
      { beat: 'Recommendation', text: applyTone(`"If you're dealing with what we were dealing with, seriously — talk to ${brandName}. We wish we'd found them sooner." ${closer}`, t) },
    ];
  }

  const narrative = scenes.map(s => s.text).join('\n\n');
  return {
    id: 'customer-success',
    name: 'Customer Success Story Arc',
    description: 'Structured testimonial/case study format \u2014 perfect for website case studies and social proof',
    scenes,
    narrative,
  };
}

// ===== STORY SCORING ENGINE =====

export function scoreStory(narrative, inputs, toneKey) {
  const specificity = scoreSpecificity(narrative, inputs);
  const emotionalArc = scoreEmotionalArc(narrative);
  const clarity = scoreClarity(narrative);
  const brandVoice = scoreBrandVoice(narrative, toneKey);
  const engagement = scoreEngagement(narrative);

  const overall = Math.round(
    specificity.score * 0.25 +
    emotionalArc.score * 0.20 +
    clarity.score * 0.20 +
    brandVoice.score * 0.15 +
    engagement.score * 0.20
  );

  return { specificity, emotionalArc, clarity, brandVoice, engagement, overall };
}

function scoreSpecificity(narrative, inputs) {
  let score = 40; // base
  const tips = [];

  // Check for numbers/data
  const numberMatches = narrative.match(/\d+[\d,.]*%?/g) || [];
  if (numberMatches.length >= 3) score += 20;
  else if (numberMatches.length >= 1) score += 10;
  else tips.push('Add specific numbers — "After 3 failed attempts" beats "They tried everything."');

  // Check for time references
  const timeWords = ['day', 'week', 'month', 'year', 'quarter', 'hour', 'minute', 'overnight', 'morning'];
  const hasTimeline = timeWords.some(w => narrative.toLowerCase().includes(w));
  if (hasTimeline) score += 10;
  else tips.push('Add a timeline — "Within 6 weeks" is more concrete than "over time."');

  // Check for named entities (brand is always there, check for others)
  const namedEntities = (narrative.match(/[A-Z][a-z]+(?:\s+[A-Z][a-z]+)*/g) || []).filter(e => e !== inputs.brandName);
  if (namedEntities.length >= 2) score += 10;
  else tips.push('Name specific tools, competitors, or industry terms to increase credibility.');

  // Check for generic filler phrases
  const genericPhrases = ['everything changed', 'tried everything', 'nothing worked', 'game-changer', 'next level', 'the rest is history', 'it just works'];
  const genericCount = genericPhrases.filter(p => narrative.toLowerCase().includes(p)).length;
  if (genericCount === 0) score += 10;
  else {
    score -= genericCount * 5;
    tips.push(`Replace generic phrases like "${genericPhrases.find(p => narrative.toLowerCase().includes(p))}" with specific outcomes.`);
  }

  // Check if proof point contains a number
  if (inputs.proofPoint && /\d/.test(inputs.proofPoint)) score += 10;
  else tips.push('Your proof point should include a specific metric — "Reduced churn by 34%" beats "Trusted by many."');

  score = Math.min(100, Math.max(0, score));
  return { score, tips, label: 'Specificity' };
}

function scoreEmotionalArc(narrative) {
  let score = 40;
  const tips = [];
  const lower = narrative.toLowerCase();

  // Check for tension/conflict words
  const tensionWords = ['struggle', 'challenge', 'problem', 'pain', 'frustrat', 'stuck', 'fail', 'obstacle', 'difficult', 'impossible', 'block', 'barrier', 'cost', 'waste', 'risk', 'threat'];
  const tensionCount = tensionWords.filter(w => lower.includes(w)).length;
  if (tensionCount >= 4) score += 15;
  else if (tensionCount >= 2) score += 10;
  else tips.push('Build more tension before the solution — the deeper the struggle, the more satisfying the resolution.');

  // Check for resolution/positive words
  const resolutionWords = ['achiev', 'transform', 'result', 'success', 'grow', 'improve', 'boost', 'deliver', 'proven', 'increase', 'reduced', 'saved', 'confident', 'peace of mind'];
  const resolutionCount = resolutionWords.filter(w => lower.includes(w)).length;
  if (resolutionCount >= 3) score += 15;
  else if (resolutionCount >= 1) score += 8;
  else tips.push('Strengthen the resolution — paint a vivid picture of the "after" state.');

  // Check for turning point signal
  const turningPointWords = ['then', 'but', 'until', 'when', 'discovered', 'found', 'entered', 'shifted', 'changed', 'turned to', 'brought in', 'connected'];
  const hasTurningPoint = turningPointWords.some(w => lower.includes(w));
  if (hasTurningPoint) score += 10;
  else tips.push('Make the turning point more dramatic — use a clear "before/after" pivot.');

  // Check for contrast (before vs after language)
  const contrastWords = ['but', 'however', 'instead', 'rather', 'unlike', 'versus', 'compared', 'while', 'whereas', 'on the other hand', 'flip side'];
  const hasContrast = contrastWords.some(w => lower.includes(w));
  if (hasContrast) score += 10;
  else tips.push('Use contrast to strengthen the arc — juxtapose the "before" pain with the "after" relief.');

  score = Math.min(100, Math.max(0, score));
  return { score, tips, label: 'Emotional Arc' };
}

function scoreClarity(narrative) {
  let score = 50;
  const tips = [];

  // Sentence length analysis
  const sentences = narrative.match(/[^.!?]+[.!?]+/g) || [narrative];
  const avgWords = sentences.reduce((sum, s) => sum + s.trim().split(/\s+/).length, 0) / sentences.length;

  if (avgWords <= 20) score += 20;
  else if (avgWords <= 25) score += 10;
  else {
    score -= 5;
    tips.push(`Average sentence length is ${Math.round(avgWords)} words — aim for under 20 for better readability.`);
  }

  // Word complexity (syllable proxy: words > 10 chars)
  const words = narrative.split(/\s+/);
  const complexWords = words.filter(w => w.replace(/[^a-zA-Z]/g, '').length > 10);
  const complexRatio = complexWords.length / words.length;
  if (complexRatio < 0.05) score += 15;
  else if (complexRatio < 0.10) score += 8;
  else {
    score -= 5;
    tips.push('Simplify vocabulary — replace long words with shorter alternatives where possible.');
  }

  // Paragraph variety (check newlines)
  const paragraphs = narrative.split(/\n\n+/).filter(p => p.trim());
  if (paragraphs.length >= 3) score += 10;
  else tips.push('Break the text into more paragraphs for easier scanning.');

  // Flesch-Kincaid approximation
  const totalWords = words.length;
  const totalSentences = sentences.length;
  const totalSyllables = words.reduce((sum, w) => sum + estimateSyllables(w), 0);
  const fk = 206.835 - 1.015 * (totalWords / totalSentences) - 84.6 * (totalSyllables / totalWords);

  if (fk >= 60) score += 5;  // Easy to read
  else if (fk < 40) {
    score -= 5;
    tips.push('The text reads at a college level — simplify for broader accessibility.');
  }

  score = Math.min(100, Math.max(0, score));
  return { score, tips, label: 'Clarity' };
}

function estimateSyllables(word) {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

function scoreBrandVoice(narrative, toneKey) {
  let score = 50;
  const tips = [];
  const lower = narrative.toLowerCase();

  if (toneKey === 'professional') {
    // Should avoid contractions
    const contractions = ["don't", "can't", "won't", "it's", "that's", "we're", "you're", "they're"];
    const contractionCount = contractions.filter(c => lower.includes(c)).length;
    if (contractionCount === 0) score += 15;
    else {
      score -= contractionCount * 3;
      tips.push('Professional tone should avoid contractions — expand "don\'t" to "do not," etc.');
    }
    // Should have formal vocabulary
    const formalWords = ['strategic', 'measurable', 'documented', 'methodology', 'operational', 'systematic', 'substantial', 'assessment', 'implemented', 'objective'];
    const formalCount = formalWords.filter(w => lower.includes(w)).length;
    if (formalCount >= 3) score += 15;
    else tips.push('Add more formal, data-driven language to match the professional tone.');

    score += 10; // base bonus for structured output
  } else if (toneKey === 'conversational') {
    // Should have contractions
    const contractions = ["don't", "can't", "won't", "it's", "that's", "we're", "you're", "they're", "here's", "there's"];
    const contractionCount = contractions.filter(c => lower.includes(c)).length;
    if (contractionCount >= 3) score += 15;
    else tips.push('Use more contractions to sound more natural and conversational.');
    // Should have questions or informal phrasing
    if (narrative.includes('?')) score += 10;
    else tips.push('Add a question to make the reader feel included in the conversation.');

    score += 5;
  } else if (toneKey === 'bold') {
    // Check for short, punchy sentences
    const sentences = narrative.match(/[^.!?]+[.!?]+/g) || [];
    const shortSentences = sentences.filter(s => s.trim().split(/\s+/).length <= 8);
    if (shortSentences.length >= 3) score += 15;
    else tips.push('Add more short, punchy sentences — bold tone relies on impact per word.');
    // Check for power words
    const powerWords = ['kill', 'crush', 'dominate', 'destroy', 'break', 'flip', 'crack', 'massive', 'instantly', 'undeniably'];
    const powerCount = powerWords.filter(w => lower.includes(w)).length;
    if (powerCount >= 2) score += 10;
    else tips.push('Use stronger power words — "eliminated" becomes "destroyed," "improved" becomes "crushed."');

    score += 5;
  } else if (toneKey === 'inspirational') {
    // Check for aspirational language
    const aspirational = ['dream', 'vision', 'believe', 'imagine', 'extraordinary', 'transform', 'journey', 'breakthrough', 'possible', 'potential', 'calling', 'courage'];
    const aspCount = aspirational.filter(w => lower.includes(w)).length;
    if (aspCount >= 3) score += 15;
    else tips.push('Lean into aspirational language — "vision," "dream," "extraordinary" set an inspirational tone.');
    // Emotional vocabulary
    if (lower.includes('heart') || lower.includes('soul') || lower.includes('passion') || lower.includes('believe')) score += 10;
    else tips.push('Add emotional anchors — words like "heart," "passion," and "believe" drive inspiration.');

    score += 5;
  } else if (toneKey === 'humorous') {
    // Check for humor markers
    const humorMarkers = ['spoiler', 'plot twist', 'honestly', 'just kidding', 'no judgment', 'we know', 'right?', 'shocking', 'fun like that', 'rude', 'basically', 'existential'];
    const humorCount = humorMarkers.filter(w => lower.includes(w)).length;
    if (humorCount >= 2) score += 15;
    else tips.push('Add more humor markers — parenthetical asides, self-deprecation, and unexpected turns.');
    // Parenthetical asides
    if (narrative.includes('(') && narrative.includes(')')) score += 10;
    else tips.push('Use parenthetical asides for comedic effect — "(No judgment — that\'s literally why we exist.)"');

    score += 5;
  }

  score = Math.min(100, Math.max(0, score));
  return { score, tips, label: 'Brand Voice' };
}

function scoreEngagement(narrative) {
  let score = 40;
  const tips = [];
  const lower = narrative.toLowerCase();

  // Hook strength (first sentence)
  const firstSentence = (narrative.match(/^[^.!?]+[.!?]+/) || [''])[0];
  const firstWords = firstSentence.trim().split(/\s+/).length;
  if (firstWords <= 12 && firstWords >= 3) score += 10;
  else if (firstWords > 20) tips.push('Your opening sentence is too long — hooks should be under 12 words for maximum impact.');

  // Questions create engagement
  const questionCount = (narrative.match(/\?/g) || []).length;
  if (questionCount >= 2) score += 10;
  else if (questionCount >= 1) score += 5;
  else tips.push('Add at least one question to create a curiosity gap and engage the reader.');

  // CTA presence
  const ctaWords = ['contact', 'start', 'try', 'get', 'schedule', 'learn', 'explore', 'join', 'sign up', 'talk to', 'reach out', 'book', 'let\'s', 'ready', 'your move', 'now'];
  const hasCTA = ctaWords.some(w => lower.includes(w));
  if (hasCTA) score += 15;
  else tips.push('End with a clear call-to-action — tell the reader exactly what to do next.');

  // Curiosity gaps
  const curiosityPhrases = ['here\'s', 'but', 'what if', 'imagine', 'the truth is', 'plot twist', 'here\'s the thing', 'turns out', 'what happened next'];
  const curiosityCount = curiosityPhrases.filter(p => lower.includes(p)).length;
  if (curiosityCount >= 2) score += 10;
  else tips.push('Create curiosity gaps — phrases like "Here\'s the thing" and "What if" keep readers scrolling.');

  // Avoid walls of text (good paragraph breaks)
  const paragraphs = narrative.split(/\n\n+/).filter(p => p.trim());
  if (paragraphs.length >= 4) score += 10;
  else if (paragraphs.length >= 3) score += 5;
  else tips.push('Break up the narrative into shorter paragraphs — walls of text kill engagement.');

  // Second person ("you") engagement
  const youCount = (lower.match(/\byou\b/g) || []).length;
  if (youCount >= 3) score += 5;
  else tips.push('Use "you" and "your" more often — it makes the reader feel like the story is about them.');

  score = Math.min(100, Math.max(0, score));
  return { score, tips, label: 'Engagement' };
}

// ===== SOCIAL ADAPTATION ENGINE =====

function generateSocialAdaptations(framework, inputs, toneKey, ctx) {
  return {
    twitter: generateTwitter(framework, inputs, toneKey, ctx),
    linkedin: generateLinkedIn(framework, inputs, toneKey, ctx),
    instagram: generateInstagram(framework, inputs, toneKey, ctx),
    facebook: generateFacebook(framework, inputs, toneKey, ctx),
    tiktok: generateTikTok(framework, inputs, toneKey, ctx),
  };
}

function generateTwitter(_fw, inputs, tone) {
  const { brandName, transformation, proofPoint, struggle } = inputs;

  let text;
  if (tone === 'bold') {
    text = `${struggle} is killing your growth. ${brandName} fixed that. Result: ${transformation}. ${proofPoint}.`;
  } else if (tone === 'professional') {
    text = `Challenge: ${struggle}. Solution: ${brandName}. Outcome: ${transformation}. ${proofPoint}.`;
  } else if (tone === 'inspirational') {
    text = `What if ${struggle} didn't have to hold you back? ${brandName} made ${transformation} possible. ${proofPoint}.`;
  } else if (tone === 'humorous') {
    text = `POV: You finally stopped fighting ${struggle} and let ${brandName} handle it. Result? ${transformation}. ${proofPoint}. You're welcome.`;
  } else {
    text = `Dealing with ${struggle}? Same. That's why we built ${brandName}. Now: ${transformation}. ${proofPoint}.`;
  }

  // Trim to 280 max
  if (text.length > 280) {
    text = text.slice(0, 277) + '...';
  }
  return { platform: 'X / Twitter', text, charLimit: 280, charCount: text.length };
}

function generateLinkedIn(_fw, inputs, tone) {
  const { brandName, hero, struggle, transformation, yourRole, proofPoint } = inputs;

  let text;
  if (tone === 'professional') {
    text = `The challenge facing ${hero} is one I see repeatedly:\n\n${struggle}.\n\nIt is not merely an operational inconvenience. It is a structural barrier to ${transformation}.\n\nAt ${brandName}, as ${yourRole}, we have developed a systematic approach to this challenge.\n\nThe results speak clearly:\n${proofPoint}.\n\nThe organizations that address this proactively gain a measurable advantage. The data supports a different approach.\n\nI welcome the opportunity to discuss how this applies to your specific situation.`;
  } else if (tone === 'bold') {
    text = `Unpopular opinion: Most ${hero} are losing to ${struggle} and don't even realize it.\n\nHere's the math:\n\nEvery day you let this slide, your competitors gain ground.\n\nEvery week, the gap widens.\n\nEvery month, the cost compounds.\n\nAt ${brandName}, as ${yourRole}, we don't do "gradual improvement." We fix it.\n\n${proofPoint}.\n\nThe question isn't whether to act. It's whether you can afford not to.\n\nDM me if you're ready to stop settling.`;
  } else if (tone === 'inspirational') {
    text = `There's a moment in every journey where the impossible starts feeling inevitable.\n\nFor ${hero}, that moment came when ${struggle} had pushed them to their limit.\n\nThey didn't give up. They didn't settle. They found a different path.\n\n${brandName} was that path. As ${yourRole}, we believed in their vision when the road was unclear.\n\nThe result? ${transformation}.\n\n${proofPoint}.\n\nYour breakthrough might be closer than you think. What's the one challenge you'd solve if you knew you couldn't fail?`;
  } else if (tone === 'humorous') {
    text = `Confession: ${hero} came to us looking like they hadn't slept in weeks.\n\nThe culprit? ${struggle}.\n\n(Honestly, we were impressed they held it together as long as they did.)\n\nWe did our thing. As ${yourRole}, ${brandName} stepped in with what I'd humbly call "the right answer."\n\nFast forward to today:\n${transformation}. ${proofPoint}.\n\nMoral of the story? You don't have to figure everything out alone.\n\nAlso: sleep helps.\n\nDrop a comment if this sounds familiar.`;
  } else {
    text = `Here's a story I keep coming back to.\n\n${hero} was dealing with something a lot of people deal with but don't talk about:\n\n${struggle}.\n\nNot a small annoyance. The kind of challenge that blocks real progress toward ${transformation}.\n\nThey found ${brandName}. As ${yourRole}, we helped them see the problem differently — and more importantly, we helped them fix it.\n\nThe result: ${transformation}.\n\n${proofPoint}.\n\nIf this sounds familiar, I'd love to hear your story. What's the biggest obstacle between you and your goals right now?`;
  }

  if (text.length > 3000) {
    text = text.slice(0, 2997) + '...';
  }
  return { platform: 'LinkedIn', text, charLimit: 3000, charCount: text.length };
}

function generateInstagram(_fw, inputs, tone, ctx) {
  const { brandName, hero, struggle, transformation, proofPoint } = inputs;

  const hashtags = generateHashtags(inputs, ctx);

  let text;
  if (tone === 'bold') {
    text = `${struggle.toUpperCase()} stops here. \u{1F6D1}\n\n${hero} was losing ground every day. The problem was clear. The fix? Even clearer.\n\n${brandName} stepped in and delivered:\n\u2714\uFE0F ${transformation}\n\u2714\uFE0F ${proofPoint}\n\nNo fluff. No "let's wait and see." Just results.\n\nYour turn. Link in bio. \u{1F517}\n\n${hashtags}`;
  } else if (tone === 'professional') {
    text = `Case Study: How ${hero} achieved ${transformation}\n\nThe challenge: ${struggle}\nThe approach: A systematic strategy through ${brandName}\nThe result: ${proofPoint}\n\nKey takeaway: The right methodology makes the difference between incremental progress and transformational results.\n\nLink in bio for the full analysis.\n\n${hashtags}`;
  } else if (tone === 'inspirational') {
    text = `Imagine this \u2728\n\n${hero} was stuck in a cycle of ${struggle}. The dream of ${transformation} felt further away with every passing day.\n\nBut they didn't give up. They found ${brandName}. And everything changed.\n\n\u{1F4AB} ${transformation}\n\u{1F4AB} ${proofPoint}\n\nYour story isn't over. It's just getting started. \u{1F49B}\n\nLink in bio \u{1F517}\n\n${hashtags}`;
  } else if (tone === 'humorous') {
    text = `POV: You finally solved ${struggle} and can sleep again \u{1F634}\u{1F62E}\u200D\u{1F4A8}\n\n${hero} went from "crying in the supply closet" to "${transformation}" and honestly? We love that for them.\n\nHow? ${brandName}.\n\nThe receipts: ${proofPoint} \u{1F4CB}\n\nFollow for more success stories (and bad puns). Link in bio \u{1F517}\n\n${hashtags}`;
  } else {
    text = `Real talk: ${struggle} is one of those problems that gets worse the longer you ignore it. \u{1F62C}\n\n${hero} finally decided enough was enough. They found ${brandName}, and here's what happened:\n\n\u2728 ${transformation}\n\u{1F4CA} ${proofPoint}\n\nIf you're dealing with the same thing, you don't have to figure it out alone.\n\nLink in bio for more \u{1F517}\n\n${hashtags}`;
  }

  if (text.length > 2200) {
    text = text.slice(0, 2197) + '...';
  }
  return { platform: 'Instagram', text, charLimit: 2200, charCount: text.length };
}

function generateFacebook(_fw, inputs, tone) {
  const { brandName, hero, struggle, transformation, proofPoint } = inputs;

  let text;
  if (tone === 'bold') {
    text = `Can we talk about ${struggle} for a second? Because ${hero} was dealing with this for way too long before something changed.\n\n${brandName} fixed it. Not "helped a little." Fixed it.\n\n${transformation}. ${proofPoint}.\n\nWho else is tired of dealing with this? Drop a \u{1F525} if you feel this.`;
  } else if (tone === 'professional') {
    text = `We recently worked with ${hero} to address a challenge many organizations face: ${struggle}.\n\nThrough a structured approach, we were able to deliver ${transformation}.\n\nThe numbers: ${proofPoint}.\n\nIf your organization is facing similar challenges, we would welcome the opportunity to discuss how our approach might apply to your situation.`;
  } else if (tone === 'inspirational') {
    text = `Every great transformation starts with a single decision: "enough is enough."\n\nFor ${hero}, that moment came when ${struggle} had pushed them to their breaking point. But instead of giving in, they chose to find a better way.\n\n${brandName} was that way. And the result? ${transformation}. ${proofPoint}.\n\nWhat would YOU change if you knew you couldn't fail? Tell us below \u{1F447}`;
  } else if (tone === 'humorous') {
    text = `${hero} + ${struggle} = one very stressed human.\n\n${hero} + ${brandName} = ${transformation}.\n\nThe math checks out. ${proofPoint}.\n\n(We're basically human calculators, but for your business problems. And with better snacks.)\n\nAnyone else need some of this math in their life? \u{1F64B}`;
  } else {
    text = `This one hit close to home for us.\n\n${hero} came to us dealing with ${struggle} — and if you've ever experienced that, you know how frustrating it is.\n\nHere's what happened after they found ${brandName}: ${transformation}. ${proofPoint}.\n\nHave you dealt with something similar? We'd love to hear your story \u{1F447}`;
  }

  if (text.length > 500) {
    text = text.slice(0, 497) + '...';
  }
  return { platform: 'Facebook', text, charLimit: 500, charCount: text.length };
}

function generateTikTok(_fw, inputs, tone) {
  const { brandName, hero, struggle, transformation, proofPoint } = inputs;

  let text;
  if (tone === 'bold') {
    text = `[HOOK - 0:00] "Nobody talks about how ${struggle} is silently destroying businesses."\n\n[BUILD - 0:05] "Here's what happened to ${hero} — and what they did about it."\n\n[REVEAL - 0:12] "They brought in ${brandName}. And the results were undeniable."\n\n[PROOF - 0:18] "${transformation}. ${proofPoint}."\n\n[CTA - 0:25] "Still dealing with this? Link in bio. Stop waiting."`;
  } else if (tone === 'professional') {
    text = `[HOOK - 0:00] "The #1 challenge I see ${hero} face? ${struggle}."\n\n[CONTEXT - 0:05] "Most approaches treat the symptoms. Here's what happens when you address the root cause."\n\n[SOLUTION - 0:12] "${brandName} took a different approach as ${inputs.yourRole}."\n\n[RESULT - 0:18] "The outcome: ${transformation}. ${proofPoint}."\n\n[CTA - 0:25] "Full breakdown in the link. Follow for more."`;
  } else if (tone === 'inspirational') {
    text = `[HOOK - 0:00] "This story gives me chills every time I tell it."\n\n[SETUP - 0:04] "${hero} was on the verge of giving up. ${struggle} had taken everything."\n\n[TURN - 0:10] "Then they found ${brandName}. And everything changed."\n\n[RESULT - 0:16] "${transformation}. ${proofPoint}."\n\n[CTA - 0:22] "Your breakthrough is closer than you think. Link in bio."`;
  } else if (tone === 'humorous') {
    text = `[HOOK - 0:00] "POV: ${hero} discovering ${brandName} after months of ${struggle}" [mime shocked face]\n\n[CONTEXT - 0:05] "Like, imagine dealing with ${struggle} for that long. Couldn't be me. (It was me.)" [deadpan to camera]\n\n[REVEAL - 0:12] "Anyway, ${brandName} fixed it." [casual shrug]\n\n[PROOF - 0:16] "${transformation}. ${proofPoint}. No cap." [show receipts gesture]\n\n[CTA - 0:22] "Link in bio if you're tired of the struggle bus." [peace sign]`;
  } else {
    text = `[HOOK - 0:00] "Wait — I need to tell you about this."\n\n[SETUP - 0:04] "${hero} was dealing with ${struggle}. You know the feeling — where you're doing everything right but nothing's working?"\n\n[SOLUTION - 0:10] "They found ${brandName}. Game changer."\n\n[RESULT - 0:15] "${transformation}. ${proofPoint}."\n\n[CTA - 0:20] "If this sounds like you, link's in the bio. Trust me on this one."`;
  }

  return { platform: 'TikTok Script', text, charLimit: null, charCount: text.length, isTikTok: true };
}

function generateHashtags(_inputs, ctx) {
  const base = ['#BusinessGrowth', '#Success', '#Entrepreneurship'];
  const industryTags = {
    saas: ['#SaaS', '#StartupLife', '#TechStartup', '#ProductLed'],
    ecommerce: ['#Ecommerce', '#OnlineBusiness', '#DTC', '#ShopSmall'],
    professional: ['#BusinessTips', '#Consulting', '#ProfessionalGrowth', '#B2B'],
    local: ['#SmallBusiness', '#LocalBiz', '#ShopLocal', '#CommunityFirst'],
    health: ['#HealthAndWellness', '#WellnessJourney', '#Fitness', '#SelfCare'],
    education: ['#EdTech', '#Learning', '#Education', '#SkillBuilding'],
    nonprofit: ['#Nonprofit', '#SocialImpact', '#GiveBack', '#Community'],
    creative: ['#CreativeAgency', '#Branding', '#Design', '#Marketing'],
  };

  const detectedKey = Object.keys(INDUSTRY_CONTEXTS).find(k => INDUSTRY_CONTEXTS[k].label === ctx.industryLabel);
  const specific = industryTags[detectedKey] || industryTags.professional;
  return [...base, ...specific.slice(0, 3)].join(' ');
}

// ===== EXPORT HELPERS =====

export function readTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes === 1 ? '~1 min read' : `~${minutes} min read`;
}

export function exportAllFrameworks(frameworks, inputs) {
  const header = `# Story Frameworks for ${inputs.brandName}\n\nGenerated by DreamHost Story Framework Generator\nTone: ${inputs.selectedTone}\nDate: ${new Date().toLocaleDateString()}\n\n---\n\n## Story Inputs\n\n- **Brand:** ${inputs.brandName}\n- **Hero:** ${inputs.hero}\n- **Struggle:** ${inputs.struggle}\n- **Transformation:** ${inputs.transformation}\n- **Your Role:** ${inputs.yourRole}\n- **Proof Point:** ${inputs.proofPoint}\n\n---\n\n`;

  let content = header;

  for (const fw of frameworks) {
    content += `## ${fw.name}\n\n`;
    content += `*${fw.description}*\n\n`;

    // Scenes
    content += `### Scene Breakdown\n\n`;
    for (const scene of fw.scenes) {
      content += `**${scene.beat}:** ${scene.text}\n\n`;
    }

    // Full narrative
    content += `### Full Narrative\n\n${fw.narrative}\n\n`;

    // Scores
    if (fw.scores) {
      content += `### Story Score: ${fw.scores.overall}/100\n\n`;
      const dims = ['specificity', 'emotionalArc', 'clarity', 'brandVoice', 'engagement'];
      for (const dim of dims) {
        const s = fw.scores[dim];
        if (s) {
          content += `- **${s.label}:** ${s.score}/100`;
          if (s.tips.length > 0) content += ` — ${s.tips[0]}`;
          content += '\n';
        }
      }
      content += '\n';
    }

    // Social adaptations
    if (fw.socialAdaptations) {
      content += `### Social Adaptations\n\n`;
      for (const [_key, adaptation] of Object.entries(fw.socialAdaptations)) {
        content += `#### ${adaptation.platform}\n\n\`\`\`\n${adaptation.text}\n\`\`\`\n\n`;
      }
    }

    content += `---\n\n`;
  }

  content += `\n\n*Generated by DreamHost Story Framework Generator — https://story-framework-generator.vercel.app/*\n`;

  return content;
}

// ===== INDUSTRY TEMPLATES =====

export const INDUSTRY_TEMPLATES = {
  saas: {
    label: 'SaaS / Tech',
    example: {
      brandName: 'FlowStack',
      hero: 'B2B SaaS founders with 50-200 customers',
      struggle: '38% monthly churn rate because onboarding takes 14 days and most users never reach their "aha moment"',
      transformation: 'reduced time-to-value from 14 days to 3, cutting churn to 12% and growing MRR by 47%',
      yourRole: 'the onboarding automation platform that turns signups into power users',
      proofPoint: '340+ SaaS companies onboarded, avg 26% churn reduction in the first 90 days',
    },
  },
  ecommerce: {
    label: 'E-commerce',
    example: {
      brandName: 'CartRecover',
      hero: 'Shopify store owners doing $10K-$100K/month in revenue',
      struggle: '71% cart abandonment rate and rising customer acquisition costs eating into margins',
      transformation: 'recovered $2.3M in abandoned cart revenue across our merchant network, with a 22% recovery rate',
      yourRole: 'the smart cart recovery platform that turns abandoned carts into completed purchases',
      proofPoint: '1,200+ stores using CartRecover, avg 18% increase in revenue within 30 days of install',
    },
  },
  professional: {
    label: 'Professional Services',
    example: {
      brandName: 'PipelineProCo',
      hero: 'independent consultants and small agency owners earning $150K-$500K/year',
      struggle: 'feast-or-famine revenue cycles where 60% of new business comes from referrals with no backup plan',
      transformation: 'built a predictable pipeline generating 8-12 qualified leads per month without cold outreach',
      yourRole: 'the authority-building platform that turns your expertise into a client magnet',
      proofPoint: 'Avg client sees 3.2x increase in inbound inquiries within 6 months, 94% client retention rate',
    },
  },
  local: {
    label: 'Local Business',
    example: {
      brandName: 'LocalBoost',
      hero: 'neighborhood restaurant and retail owners competing against chains',
      struggle: 'invisible on Google Maps with only 12 reviews while the chain competitor across the street has 340+',
      transformation: 'ranked #1 for "best [business type] near me" and grew from 12 to 180+ Google reviews in 8 months',
      yourRole: 'the local visibility platform that helps independent businesses outrank national chains',
      proofPoint: '2,100+ local businesses served, avg 340% increase in Google Maps visibility in 6 months',
    },
  },
  health: {
    label: 'Health & Wellness',
    example: {
      brandName: 'WellPath',
      hero: 'wellness practitioners and functional health coaches with growing practices',
      struggle: 'client dropout rates of 45% after the first month because generic programs fail to personalize',
      transformation: 'increased client retention to 82% and grew practice revenue by 55% through personalized wellness protocols',
      yourRole: 'the adaptive wellness platform that creates individualized plans based on real health data',
      proofPoint: '600+ practitioners using WellPath, avg 37% improvement in client outcomes and 2.1x revenue growth',
    },
  },
  education: {
    label: 'Education',
    example: {
      brandName: 'SkillBridge',
      hero: 'corporate L&D teams at mid-size companies (200-2000 employees)',
      struggle: 'only 23% course completion rates and no measurable link between training spend and performance improvement',
      transformation: 'boosted completion rates to 78% and demonstrated a measurable 31% improvement in targeted skill areas',
      yourRole: 'the adaptive learning platform that makes training programs actually stick',
      proofPoint: '150+ companies, 45,000+ learners, avg 3.4x improvement in training ROI within one quarter',
    },
  },
  nonprofit: {
    label: 'Non-profit',
    example: {
      brandName: 'ImpactAmp',
      hero: 'nonprofit executive directors managing teams of 5-25 with budgets under $2M',
      struggle: 'donor retention below 40%, with 80% of fundraising time spent on grant writing that yields a 15% success rate',
      transformation: 'increased donor retention to 68%, diversified revenue across 4 channels, and reduced fundraising cost per dollar by 40%',
      yourRole: 'the donor relationship platform that turns one-time givers into lifetime champions',
      proofPoint: '320+ nonprofits served, avg 52% increase in recurring donations within the first year',
    },
  },
  creative: {
    label: 'Creative Agency',
    example: {
      brandName: 'BrandForge',
      hero: 'boutique creative agencies with 5-15 team members',
      struggle: 'competing on price against larger agencies while scope creep eats 30% of project margins',
      transformation: 'repositioned as a premium brand strategy partner, increased avg project value by 65%, and eliminated scope creep with structured engagement models',
      yourRole: 'the agency growth platform that helps creative shops charge what they are worth',
      proofPoint: '200+ agencies scaled, avg 45% increase in project margins and 2.3x growth in retainer revenue',
    },
  },
};

export { TONE_PROFILES, INDUSTRY_CONTEXTS };
