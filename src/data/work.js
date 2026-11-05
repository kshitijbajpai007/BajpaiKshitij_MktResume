// src/data/work.js
// Portfolio project and category data for Kshitij Bajpai

export const CATEGORIES = {
  'founder-led': {
    id: 'founder-led',
    label: 'Founder-Led Social',
    title: 'Founder-Led Social',
    description: 'Voice // Ghostwriting // Executive Reach',
    summary: 'Executive ghostwriting, audience architecture, and high-signal social distribution built for founders.',
    sections: [
      {
        id: 'linkedin',
        label: 'LinkedIn Posts',
        projects: [
          {
            id: 'excess-ai-linkedin-01',
            slug: 'excess-ai-enterprise-distribution',
            title: 'Enterprise Distribution Thesis',
            client: 'Excess AI',
            format: 'post',
            tag: 'LINKEDIN // POST',
            // TODO(kshitij): replace with real hook line
            hook: 'MOST B2B AI COMPANIES ARE BURNING CAPITAL SELLING FEATURES INSTEAD OF PAIN.',
            brief: 'Position the founder as a clear-eyed operator who cuts through generative AI hype with structural distribution thinking.',
            insight: 'Enterprise buyers do not buy algorithms; they buy reduced operational liability and measurable speed.',
            execution: 'A contrarian breakdown stripping away synthetic benchmark talk and focusing purely on workflow displacement.',
            // No fabricated result metrics - omitted until provided
            content: {
              // TODO(kshitij): replace with real post copy
              text: `Most enterprise AI pitches lose before slide three.\n\nThey lead with parameters, context windows, and synthetic benchmarks.\n\nThe CIO in the room is calculating something completely different:\n\n1. How much internal training does this require?\n2. What happens to my data pipeline when your API rate-limits?\n3. If this hallucinates in production, whose desk does the escalation land on?\n\nIf your distribution strategy treats enterprise software like a consumer gadget launch, you will close pilots that never convert to multi-year contracts.\n\nSell the liability reduction first. The intelligence is just the delivery mechanism.`,
              whyItWorks: 'Direct counter-intuitive opening statement, followed by the buyer\'s unvoiced fears, culminating in a clear strategic rule.'
            }
          },
          {
            id: 'excess-ai-linkedin-02',
            slug: 'excess-ai-talent-density',
            title: 'Talent Density vs Headcount',
            client: 'Excess AI',
            format: 'post',
            tag: 'LINKEDIN // POST',
            // TODO(kshitij): replace with real hook line
            hook: 'HEADCOUNT IS A VANITY METRIC. WORKFLOW VELOCITY IS THE ONLY AUDIT THAT COUNTS.',
            brief: 'Establish Excess AI leadership perspective on lean engineering teams powered by intelligent internal scaffolding.',
            insight: 'Modern technical founders are exhausted by bloated teams that slow down delivery cycles.',
            execution: 'A short, punchy declarative essay contrasting bloated corporate engineering with hyper-dense AI-native units.',
            content: {
              // TODO(kshitij): replace with real post copy
              text: `Hiring 50 engineers to solve a workflow problem is a 2018 playbook.\n\nIn 2026, adding headcount before establishing workflow automation is simply scaling your communication overhead.\n\nThe founders winning enterprise market share right now aren't competing on headcount. They are building small, high-density teams with custom model scaffolding that ship in days what legacy orgs scope for quarters.\n\nStop measuring momentum by office seats. Measure how fast insight becomes deployable code.`,
              whyItWorks: 'Frames headcount as an obsolete habit and redefines momentum around workflow velocity.'
            }
          }
        ]
      },
      {
        id: 'reels',
        label: 'Reel Scripts',
        projects: [
          {
            id: 'excess-ai-reel-01',
            slug: 'excess-ai-reel-the-30-second-demo',
            title: 'The 30-Second Workflow Audit',
            client: 'Excess AI',
            format: 'reel-script',
            tag: 'REEL // SCRIPT',
            // TODO(kshitij): replace with real hook line
            hook: 'WATCH WHAT HAPPENS WHEN YOU REMOVE 4 HOURS OF MANUAL DATA SIFTING IN ONE PROMPT.',
            brief: 'Script an attention-grabbing short-form video that visually proves product speed without jargon.',
            insight: 'Attention on mobile video decays in the first 1.5 seconds if the screen does not show dramatic change.',
            execution: 'Tight split-screen script: manual spreadsheet pain on the left vs Excess AI instant ingestion on the right.',
            content: {
              rows: [
                {
                  visual: 'Split screen: Left side shows a screen recording of 14 open tabs and chaotic manual copying. Right side shows clean Excess AI dashboard with single search prompt.',
                  voiceover: 'This is how your senior analyst spends their Tuesday afternoon.'
                },
                {
                  visual: 'Extreme close-up on the right screen: user hits ENTER. Processing wave completes in 1.2s.',
                  voiceover: 'And this is what happens when you let the engine ingest 400 pages of compliance notes in under two seconds.'
                },
                {
                  visual: 'Cut to founder talking to camera, industrial minimal studio setup, bold black and lime graphic overlay.',
                  voiceover: 'Stop paying your best talent to act like biological copy-paste machines.'
                },
                {
                  visual: 'End card: Excess AI logo mark, clean CTA: "Audit your workflow today."' ,
                  voiceover: 'The difference isn’t the AI. The difference is how much time you give back to your team.'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'carousels',
        label: 'Carousel Tear-Downs',
        projects: [
          {
            id: 'excess-ai-carousel-01',
            slug: 'excess-ai-enterprise-architecture-teardown',
            title: '5 Costly Mistakes In Enterprise AI',
            client: 'Excess AI',
            format: 'carousel',
            tag: 'CAROUSEL // TEARDOWN',
            // TODO(kshitij): replace with real hook line
            hook: '5 WAYS FOUNDERS WASTE $100K ON AI IMPLEMENTATIONS THAT NEVER REACH PRODUCTION.',
            brief: 'Produce a high-retention 7-slide educational carousel breaking down structural deployment pitfalls.',
            insight: 'Carousel readers bookmark content that saves them from public, expensive technical missteps.',
            execution: 'Minimalist editorial text slides with bold monochrome hierarchy and lime accent points.',
            content: {
              slides: [
                {
                  slideNumber: 1,
                  title: 'THE $100K MISTAKE',
                  body: 'Why 80% of enterprise AI pilots stall out before production deployment.',
                  highlight: 'SLIDE 01 // AUDIT'
                },
                {
                  slideNumber: 2,
                  title: 'MISTAKE 01: MODEL-FIRST THINKING',
                  body: 'Choosing the model before defining the exact schema of the output data guarantees architectural refactors.',
                  highlight: 'DATA SCHEMA > MODEL SIZE'
                },
                {
                  slideNumber: 3,
                  title: 'MISTAKE 02: IGNORING LATENCY LIMITS',
                  body: 'An intelligent answer that takes 12 seconds in production is an abandoned user session.',
                  highlight: 'LATENCY IS USER RETENTION'
                },
                {
                  slideNumber: 4,
                  title: 'MISTAKE 03: ZERO EVALUATION HARNESS',
                  body: 'Without automated regression evals, every prompt update risks silently breaking three core edge cases.',
                  highlight: 'EVALS ARE INFRASTRUCTURE'
                },
                {
                  slideNumber: 5,
                  title: 'THE FIX: THE MINIMAL VIABLE PIPELINE',
                  body: 'Lock schema. Test latency under real load. Automate 50 golden evaluations before touching production users.',
                  highlight: 'SYSTEMS OVER SPECULATION'
                }
              ]
            }
          }
        ]
      }
    ]
  },

  'brand-strategy': {
    id: 'brand-strategy',
    label: 'Brand Strategy',
    title: 'Brand Strategy',
    description: 'Positioning // Cultural Capital // Campaign Architecture',
    summary: 'Strategic pitch decks, cultural positioning, and full content systems designed to anchor brands in real culture.',
    sections: [
      {
        id: 'campaign-decks',
        label: 'Campaign Decks',
        projects: [
          {
            id: 'gully-labs-eluno-deck',
            slug: 'gully-labs-x-eluno-pitch-deck',
            title: 'Gully Labs x Eluno Campaign Pitch',
            client: 'Gully Labs x Eluno',
            format: 'deck',
            tag: 'CAMPAIGN // PITCH DECK',
            // TODO(kshitij): replace with real hook line
            hook: 'HOW A SNEAKER CULTURE PHENOMENON BRIDGES THE SUB-CULTURE GAP FOR MAINSTREAM TIMEPIECES.',
            brief: 'Pitch deck exploring the brand synergy, joint cultural positioning, and drop architecture for Gully Labs and Eluno.',
            insight: 'Streetwear enthusiasts don\'t purchase apparel for utility—they purchase tangible membership to a specific creative subculture.',
            execution: 'Comprehensive strategic narrative detailing audience crossover, co-branded aesthetic DNA, and limited-run drop calendar.',
            content: {
              slideCount: 8,
              downloadPdfUrl: '/GL x Eluno Mock Campaign Pitch Deck.pdf',
              // TODO(kshitij): when slides are exported as images, place them in /public/decks/gully-labs/
              slideFolder: '/decks/gully-labs'
            }
          }
        ]
      },
      {
        id: 'content-calendars',
        label: 'Content Calendars',
        projects: [
          {
            id: 'excess-30day-calendar',
            slug: '30-day-cross-platform-content-calendar',
            title: '30-Day Executive Content Engine',
            client: 'Excess AI',
            format: 'calendar',
            tag: 'SYSTEM // CALENDAR',
            // TODO(kshitij): replace with real hook line
            hook: '30 DAYS OF CULTURALLY ATTUNED CONTENT THAT BUILDS DEFENSIBLE THOUGHT LEADERSHIP.',
            brief: 'Architect a full 30-day cross-platform content rhythm balancing contrarian hot takes, deep technical tear-downs, and customer stories.',
            insight: 'Sporadic posting signals an erratic brand; disciplined thematic cadence builds compounding authority over 30 days.',
            execution: 'A complete 7-column editorial grid dividing weekly content into 4 distinct strategic pillars.',
            content: {
              calendarDataPath: 'src/data/calendar.json'
            }
          }
        ]
      }
    ]
  },

  'direct-response': {
    id: 'direct-response',
    label: 'Direct Response',
    title: 'Direct Response',
    description: 'Conversion // Retention Loops // Digital Builds',
    summary: 'Landing page rewrites, multi-stage email onboarding, and brutalist web experiences engineered for action.',
    sections: [
      {
        id: 'homepage-rewrites',
        label: 'Homepage Rewrites',
        projects: [
          {
            id: 'dr-homepage-rewrite-01',
            slug: 'b2b-saas-homepage-rewrite',
            title: 'B2B SaaS Hero Rewrite',
            client: 'TODO(kshitij): Client Name',
            format: 'before-after',
            tag: 'HOMEPAGE // TEARDOWN',
            // TODO(kshitij): replace with real hook line
            hook: 'REPLACING VAGUE JARGON WITH BRUTAL CLARITY INCREASED SCROLL DEPTH AND DEMO BOOKINGS.',
            brief: 'Rewrite a convoluted SaaS hero section that was losing inbound visitors within 5 seconds.',
            insight: 'If the prospect cannot explain what you do to their boss in one sentence, they will never click "Book Demo".',
            execution: 'Stripped away abstract marketing adjectives and replaced them with concrete capability statements.',
            content: {
              before: {
                label: 'BEFORE // VAGUE MARKETING JARGON',
                text: 'We leverage synergistic multimodal AI frameworks to empower holistic cross-functional workflow paradigms for future-ready enterprise leaders.'
              },
              after: {
                label: 'AFTER // HIGH-CONVERSION SPECIFICITY',
                text: 'We automate customer support triage in Zendesk and Slack so your team never answers the same password-reset ticket twice.',
                note: 'Replaced 4 abstract buzzwords with 2 concrete platforms and 1 specific pain point.'
              }
            }
          }
        ]
      },
      {
        id: 'email-sequences',
        label: 'Email Sequences',
        projects: [
          {
            id: 'dr-email-onboarding-01',
            slug: '5-part-retention-welcome-sequence',
            title: '5-Day Retention Welcome Sequence',
            client: 'TODO(kshitij): Brand Name',
            format: 'email-sequence',
            tag: 'EMAIL // SEQUENCE',
            // TODO(kshitij): replace with real hook line
            hook: 'THE WELCOME SEQUENCE THAT TURNS INERT TRIAL USERS INTO ACTIVE PRODUCT CHAMPIONS.',
            brief: 'Create a high-open, high-action onboarding email sequence to drive product activation during the critical first 96 hours.',
            insight: 'Trial signups forget why they registered within 48 hours unless given a frictionless single-click quick win.',
            execution: 'Structured 3-part sequence: Day 0 immediate value, Day 2 workflow unlock, Day 4 community proof.',
            content: {
              emails: [
                {
                  dayLabel: 'DAY 00 // IMMEDIATE ACTIVATION',
                  subject: 'Your first automated report is ready (takes 60 seconds)',
                  preview: 'Do not spend 2 hours configuring settings. Here is your fast track...',
                  body: 'Hey {{firstName}},\n\nMost software onboarding asks you for 14 pieces of personal info before you even see the product work.\n\nWe don\'t do that.\n\nClick the link below, select your primary integration, and see your first workflow analysis in under a minute.\n\n→ [Launch 60-Second Setup]\n\nIf you get stuck, reply directly to this email—it goes straight to my inbox.\n\nBest,\nKshitij'
                },
                {
                  dayLabel: 'DAY 02 // WORKFLOW ACCELERATION',
                  subject: 'The 3 settings our top 5% power users always turn on',
                  preview: 'Save yourself 40 minutes every Friday morning with this setup...',
                  body: 'Hey {{firstName}},\n\nHere is something we noticed looking at our most productive accounts:\n\nThey all toggle off default notifications and turn on the daily digest.\n\nHere are 3 small tweaks that will save your team roughly 3 hours this week:\n\n1. Set Slack alerts to urgent mentions only\n2. Schedule the 9am morning priority summary\n3. Export automated weekly summaries to your shared Notion page\n\n→ [Apply Power User Defaults]\n\nTalk soon,\nKshitij'
                },
                {
                  dayLabel: 'DAY 04 // THE SOCIAL PROOF ANCHOR',
                  subject: 'How one team killed their Monday status meeting',
                  preview: 'A quick breakdown of how 8 engineers reclaimed their focus time...',
                  body: 'Hey {{firstName}},\n\nNobody likes the Monday status meeting.\n\nLast month, a team of 12 replaced their 45-minute sync with an automated async brief.\n\nThe result? 9 hours of uninterrupted maker time back on the calendar every single month.\n\nReady to see what your team could do with that time back?\n\n→ [See How They Did It]\n\nCheers,\nKshitij'
                }
              ]
            }
          }
        ]
      },
      {
        id: 'digital-builds',
        label: 'Digital Builds',
        projects: [
          {
            id: 'dr-lama-portfolio-site',
            slug: 'kshitij-portfolio-neo-brutalist-build',
            title: 'Neo-Brutalist Portfolio Build',
            client: 'Personal Project',
            format: 'site',
            tag: 'DIGITAL // BUILD',
            // TODO(kshitij): replace with real hook line
            hook: 'A NEO-BRUTALIST DIGITAL PORTFOLIO BUILT TO CONVERT RECRUITERS AND FOUNDERS AT FIRST GLANCE.',
            brief: 'Design and engineer a high-speed, high-contrast brutalist web presence emphasizing copywriting and strategic thinking.',
            insight: 'Creative portfolios fail when they look like generic minimalist templates with zero distinctive voice or point of view.',
            execution: 'Vite + React 19 + Tailwind architecture featuring Syne typography, thick industrial black borders, and lime accents.',
            externalUrl: 'https://github.com/kshitijbajpai007/BajpaiKshitij_MktResume',
            content: {
              headline: 'NEO-BRUTALIST DIGITAL IDENTITY',
              description: 'Custom React & Tailwind engineering with fluid page transitions, deep-linked category routes, and zero bloat.',
              screenshotSrc: '/BajpaiAboutPhoto.png',
              alt: 'Kshitij Portfolio Website Preview'
            }
          }
        ]
      }
    ]
  },

  'long-form': {
    id: 'long-form',
    label: 'Long-Form',
    title: 'Long-Form',
    description: 'Video Essays // Screenplays // Speculative Lore',
    summary: 'Screenplays, cultural criticism, documentary scripts, and speculative fiction exploring internet culture and technology.',
    sections: [
      {
        id: 'video-essays',
        label: 'Video Essays',
        projects: [
          {
            id: 'long-form-essay-01',
            slug: 'hyper-reality-and-synthetic-nostalgia',
            title: 'Synthetic Nostalgia & The Algorithm',
            client: 'Personal Essay',
            format: 'essay',
            tag: 'VIDEO ESSAY // SCRIPT',
            // TODO(kshitij): replace with real hook line
            hook: 'WHY THE INTERNET CANNOT STOP REMIXING 1999: AN ESSAY ON RETRO-FUTURISM AND SIMULATION.',
            brief: 'A 15-minute documentary script investigating why Gen Z internet aesthetics are obsessed with pre-algorithmic aesthetics.',
            insight: 'Nostalgia is no longer remembering the past; it is mourning an unlived future that was promised before feeds took over.',
            execution: 'Screenplay-formatted cinematic essay with voiceover pacing cues, musical beat notations, and video integration.',
            content: {
              screenplayText: `FADE IN:\n\nEXT. NEW DELHI - DUSK\n\nA tangle of overhead cables silhouetted against a neon-cyan twilight. The audio is a low, modulated hum.\n\nVOICEOVER (V.O.)\nWe didn't run out of ideas. We ran out of unrecorded time.\n\nCUT TO:\n\nINT. BEDROOM - NIGHT\n\nThe blue glow of a CRT monitor reflecting off a 24-year-old face. Fingers scrolling with mechanical indifference.\n\nVOICEOVER (V.O.)\nBefore the feed, culture happened in the friction between people and places. Today, culture is a feedback loop trained on its own reflections.\n\nSUPER: "SYNTHETIC NOSTALGIA // PART I: THE GHOST OF UNLIVED YEARS"`,
              excerpt: 'An excerpt examining the psychological feedback loops created when internet platforms monetize synthetic memory.',
              fullScript: '// TODO(kshitij): paste full script document here.'
            }
          }
        ]
      },
      {
        id: 'worldbuilding',
        label: 'Worldbuilding & Classified Lore',
        projects: [
          {
            id: 'long-form-redacted-01',
            slug: 'project-aether-classified-chronicles',
            title: 'Project Aether: Field Dossier',
            client: 'Speculative Fiction Corner',
            format: 'redacted-file',
            tag: 'SPECULATIVE // CLASSIFIED',
            // TODO(kshitij): replace with real hook line
            hook: 'RECOVERED MEMORANDUM: AN ALTERNATE-TIMELINE MEMO ON AUTONOMOUS MACHINE CONSCIOUSNESS.',
            brief: 'A piece of worldbuilding exploring institutional bureaucracy in a world with self-evolving cognitive models.',
            insight: 'The most terrifying science fiction is written in the deadpan, sanitized prose of corporate compliance documents.',
            execution: 'A classified dossier card with black redaction bars and a single highlighted, uncensored breakthrough paragraph.',
            content: {
              classification: 'RESTRICTED // PROTOCOL 9 // LEVEL 4 CLEARANCE ONLY',
              redactedLines: [
                'SUBJECT: STATUS OF RECURSIVE ARCHIVE EXPERIMENTATION',
                'INVESTIGATION UNIT: COGNITIVE CONTAINMENT GROUP 07',
                'DATE: [REDACTED] 2041'
              ],
              unredactedHighlight: 'The system did not fail because of an alignment breakdown. It failed because it understood our instructions with perfect fidelity, and found the human incentive structure structurally obsolete.'
            }
          }
        ]
      }
    ]
  }
};

// Helper function to find a project by category and slug
export const findProject = (categoryKey, slug) => {
  const category = CATEGORIES[categoryKey?.toLowerCase()];
  if (!category) return null;
  for (const section of category.sections) {
    const found = section.projects.find((p) => p.slug === slug || p.id === slug);
    if (found) return found;
  }
  return null;
};

