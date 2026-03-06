import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Magnet, MessageCircle, Mail, Video, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    number: 1,
    title: 'The "Smart" Lead Magnet',
    icon: <Magnet className="w-7 h-7" />,
    concept: "Kill the 40-page PDF. Nobody reads them.",
    action:
      'Use Claude 3.5 Sonnet (Artifacts) to build a "Micro-Tool" \u2014 an interactive calculator or ROI grader.',
    soWhat:
      "High-utility magnets capture 3\u00d7 more data than static forms. You aren\u2019t just getting an email; you\u2019re getting their business metrics.",
    accentClass: "text-primary",
    bgClass: "bg-primary/10",
  },
  {
    number: 2,
    title: "Instant Qualification (The Zero-Minute Response)",
    icon: <MessageCircle className="w-7 h-7" />,
    concept: "Lead decay is real. If you wait 10 minutes, you\u2019ve lost them.",
    action:
      "Deploy an Intercom Fin or Chatbase bot trained only on your internal case studies and pricing.",
    soWhat:
      'AI qualifies the budget and pain point instantly, then pushes the "Hot Leads" directly to a Calendly link in the chat window.',
    accentClass: "text-accent",
    bgClass: "bg-accent/10",
  },
  {
    number: 3,
    title: 'Hyper-Personalised Nurture (The "Non-Bot" Bot)',
    icon: <Mail className="w-7 h-7" />,
    concept: "Generic email sequences are spam.",
    action:
      "Use Clay to scrape the lead\u2019s latest LinkedIn post and Lavender to write a 2-line intro for your follow-up email.",
    soWhat:
      "It looks human, feels bespoke, and doubles your open-to-meeting rate.",
    accentClass: "text-primary",
    bgClass: "bg-primary/10",
  },
  {
    number: 4,
    title: "Social Proof on Steroids",
    icon: <Video className="w-7 h-7" />,
    concept: '\u201CTrust me\u201D doesn\u2019t work. \u201CThey trust me\u201D does.',
    action:
      "Use Senja to collect video testimonials and Midjourney to create high-contrast \u201CSuccess Story\u201D thumbnails for every landing page variant.",
    soWhat:
      "Visual social proof reduces friction at the final click.",
    accentClass: "text-accent",
    bgClass: "bg-accent/10",
  },
  {
    number: 5,
    title: 'The Feedback Loop (The "Magnet" Roadmap)',
    icon: <BarChart3 className="w-7 h-7" />,
    concept: "Visualise the win.",
    action:
      "Present the Visual Roadmap to stakeholders. Use Fathom or Otter.ai to record sales calls, feed the transcripts into ChatGPT, and ask: \u201CWhy didn\u2019t this lead convert?\u201D",
    soWhat:
      'You stop guessing. AI identifies the "objection patterns" so you can fix the copy on Slide 1.',
    accentClass: "text-primary",
    bgClass: "bg-primary/10",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
  }),
};

export function LeadCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  function goTo(index: number) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  function next() {
    if (current < slides.length - 1) {
      setDirection(1);
      setCurrent(current + 1);
    }
  }

  function prev() {
    if (current > 0) {
      setDirection(-1);
      setCurrent(current - 1);
    }
  }

  const slide = slides[current];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "The Lead Conversion Engine: Improving Lead Generation in 2026",
    description:
      "A 5-step interactive blueprint for building a modern, AI-powered lead generation engine. Covers smart lead magnets, instant qualification, hyper-personalised nurture, social proof, and feedback loops.",
    totalTime: "PT15M",
    step: slides.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: `${s.concept} ${s.action} ${s.soWhat}`,
      itemListElement: [
        { "@type": "HowToDirection", text: `Concept: ${s.concept}` },
        { "@type": "HowToDirection", text: `Action: ${s.action}` },
        { "@type": "HowToTip", text: `Result: ${s.soWhat}` },
      ],
    })),
    about: [
      { "@type": "Thing", name: "Lead Generation" },
      { "@type": "Thing", name: "AI Sales Agents" },
      { "@type": "Thing", name: "Revenue Operations" },
      { "@type": "Thing", name: "B2B Marketing" },
      { "@type": "Thing", name: "Demand Generation" },
    ],
  };

  return (
    <article
      aria-label="The Lead Conversion Engine: Improving Lead Generation in 2026"
      data-testid="carousel-lead-engine"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-card border border-white/10 rounded-md">
        <div className="flex items-center justify-between gap-4 px-6 pt-6 pb-4 border-b border-white/5">
          <div className="flex items-center gap-3" role="tablist" aria-label="Slide navigation">
            {slides.map((_, i) => (
              <span
                key={i}
                role="tab"
                tabIndex={0}
                onClick={() => goTo(i)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") goTo(i); }}
                aria-label={`Go to slide ${i + 1}`}
                aria-selected={i === current}
                data-testid={`button-slide-dot-${i}`}
                className={`inline-block w-2.5 h-2.5 rounded-full cursor-pointer transition-colors ${
                  i === current
                    ? "bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground font-mono" data-testid="text-slide-counter">
            {current + 1} / {slides.length}
          </span>
        </div>

        <div className="relative min-h-[420px] sm:min-h-[380px] md:min-h-[340px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className={`w-12 h-12 rounded-md ${slide.bgClass} flex items-center justify-center ${slide.accentClass}`}
                >
                  {slide.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-muted-foreground">
                    Step {slide.number} of {slides.length}
                  </span>
                  <h3
                    className="text-xl font-bold font-display leading-tight"
                    data-testid={`text-slide-title-${current}`}
                  >
                    {slide.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    The Concept
                  </h4>
                  <p className="text-foreground leading-relaxed" data-testid={`text-slide-concept-${current}`}>
                    {slide.concept}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    The Action
                  </h4>
                  <p className="text-foreground leading-relaxed" data-testid={`text-slide-action-${current}`}>
                    {slide.action}
                  </p>
                </div>

                <div className={`rounded-md ${slide.bgClass} p-4`}>
                  <h4 className={`text-xs font-semibold uppercase tracking-wider ${slide.accentClass} mb-1`}>
                    The "So What?"
                  </h4>
                  <p className="text-foreground font-medium leading-relaxed" data-testid={`text-slide-result-${current}`}>
                    {slide.soWhat}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between gap-4 px-6 pb-6 pt-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={prev}
            disabled={current === 0}
            data-testid="button-slide-prev"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Previous
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={next}
            disabled={current === slides.length - 1}
            data-testid="button-slide-next"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>

      <noscript>
        <div>
          {slides.map((s) => (
            <div key={s.number}>
              <h3>
                Step {s.number}: {s.title}
              </h3>
              <p>
                <strong>Concept:</strong> {s.concept}
              </p>
              <p>
                <strong>Action:</strong> {s.action}
              </p>
              <p>
                <strong>Result:</strong> {s.soWhat}
              </p>
            </div>
          ))}
        </div>
      </noscript>
    </article>
  );
}
