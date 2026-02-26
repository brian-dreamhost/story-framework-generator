// Tone word substitution
const TONE_WORDS = {
  conversational: { discovered: 'found out', transformed: 'helped', unlocked: 'figured out', breakthrough: 'turning point', eliminated: 'got rid of', facilitated: 'helped', determined: 'figured out' },
  professional: { discovered: 'identified', transformed: 'facilitated', unlocked: 'determined', breakthrough: 'strategic inflection point', eliminated: 'eliminated', facilitated: 'facilitated', determined: 'determined' },
  inspirational: { discovered: 'discovered', transformed: 'transformed', unlocked: 'unlocked', breakthrough: 'breakthrough', eliminated: 'eliminated', facilitated: 'empowered', determined: 'realized' },
  bold: { discovered: 'cracked', transformed: 'crushed', unlocked: 'dominated', breakthrough: 'game-changer', eliminated: 'destroyed', facilitated: 'powered', determined: 'nailed' }
};

function tone(word, toneKey) {
  return TONE_WORDS[toneKey]?.[word] || word;
}

export function generateStoryFrameworks(inputs) {
  const { brandName, hero, struggle, transformation, yourRole, proofPoint, selectedTone } = inputs;
  const t = selectedTone || 'conversational';

  // 1. Hero's Journey (5-beat)
  const heroJourney = {
    id: 'heros-journey',
    name: "Hero's Journey (Brand Short Form)",
    description: 'A 5-beat narrative arc: Ordinary World → Call to Adventure → Struggle → Discovery → Transformation',
    scenes: [
      { beat: 'Ordinary World', text: `${hero} had a clear goal: ${transformation}. But day-to-day, life looked very different.` },
      { beat: 'Call to Adventure', text: `The pressure of ${struggle} was becoming impossible to ignore. Something had to change.` },
      { beat: 'Struggle', text: `They tried everything — but nothing worked. The real problem was deeper than they realized.` },
      { beat: 'Discovery of Solution', text: `Then they ${tone('discovered', t)} ${brandName}. As ${yourRole}, we showed them a better path forward.` },
      { beat: 'Transformation', text: `The result: ${transformation}. And ${proofPoint}.` },
    ],
  };
  heroJourney.narrative = heroJourney.scenes.map(s => s.text).join(' ');

  // 2. Problem-Agitate-Solution (PAS)
  const pas = {
    id: 'pas',
    name: 'Problem-Agitate-Solution (PAS)',
    description: 'Classic direct-response format: identify the problem, amplify the pain, introduce the solution',
    scenes: [
      { beat: 'Problem', text: `If you're ${hero}, you know the pain of ${struggle}. It slows everything down and holds you back from ${transformation}.` },
      { beat: 'Agitate', text: `And the longer it goes on, the worse it gets. You watch competitors move forward while you're stuck dealing with the same frustrating obstacles. It's exhausting.` },
      { beat: 'Solution', text: `${brandName} was built to fix exactly this. As ${yourRole}, we help you ${transformation} — without the headaches. ${proofPoint}.` },
    ],
  };
  pas.narrative = pas.scenes.map(s => s.text).join(' ');

  // 3. Before-After-Bridge (BAB)
  const bab = {
    id: 'bab',
    name: 'Before-After-Bridge (BAB)',
    description: 'Great for landing page hero sections: Present reality → Desired reality → The bridge',
    scenes: [
      { beat: 'Before', text: `Right now, ${hero} is dealing with ${struggle}. It's costly, frustrating, and holding back real growth.` },
      { beat: 'After', text: `Imagine instead: ${transformation}. More time, more confidence, better results — consistently.` },
      { beat: 'Bridge', text: `That's exactly what ${brandName} delivers. As ${yourRole}, we make the "after" your new normal. ${proofPoint}.` },
    ],
  };
  bab.narrative = bab.scenes.map(s => s.text).join(' ');

  // 4. Pixar Story Spine
  const pixar = {
    id: 'pixar',
    name: 'Pixar Story Spine',
    description: 'A fill-in-the-blank structure that generates a complete mini-story in 6 lines',
    scenes: [
      { beat: 'Once upon a time...', text: `...there was ${hero} who wanted more than anything to ${transformation}.` },
      { beat: 'Every day...', text: `...they faced the reality of ${struggle}, which made progress feel impossible.` },
      { beat: 'One day...', text: `...they ${tone('discovered', t)} ${brandName} — ${yourRole} that finally made sense.` },
      { beat: 'Because of that...', text: `...they ${tone('unlocked', t)} a way to move forward they never had before.` },
      { beat: 'Until finally...', text: `...they achieved ${transformation}. ${proofPoint}.` },
      { beat: 'And ever since then...', text: `...they haven't looked back. Neither will you.` },
    ],
  };
  pixar.narrative = pixar.scenes.map(s => `${s.beat} ${s.text}`).join(' ');

  // 5. Customer Success Story Arc
  const customerSuccess = {
    id: 'customer-success',
    name: 'Customer Success Story Arc',
    description: 'Structured testimonial/case study format — perfect for website case studies and social proof',
    scenes: [
      { beat: 'Setup', text: `${hero} — a customer with a clear mission but a growing problem on their hands.` },
      { beat: 'Challenge', text: `Their biggest obstacle: ${struggle}. It was blocking the path to ${transformation} and costing real time and money.` },
      { beat: 'Turning Point', text: `They turned to ${brandName}. As ${yourRole}, we helped them see a different approach — one that actually worked.` },
      { beat: 'Result', text: `${transformation}. ${proofPoint}.` },
      { beat: 'Recommendation', text: `"If you're dealing with what we were dealing with, ${brandName} is the answer. We only wish we'd found it sooner."` },
    ],
  };
  customerSuccess.narrative = customerSuccess.scenes.map(s => s.text).join(' ');

  return [heroJourney, pas, bab, pixar, customerSuccess];
}

export function adaptForSocial(narrative) {
  // Extract the most impactful 1-2 sentences, keep under 280 chars
  const sentences = narrative.match(/[^.!?]+[.!?]+/g) || [narrative];
  let social = '';
  for (const s of sentences) {
    if ((social + s).length <= 260) {
      social += s.trim() + ' ';
    } else break;
  }
  return social.trim().slice(0, 280);
}

export function readTime(text) {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return minutes === 1 ? '~1 min read' : `~${minutes} min read`;
}
