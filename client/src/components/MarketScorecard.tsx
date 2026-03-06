import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ClipboardCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  id: string;
  question: string;
  options: { label: string; score: number }[];
}

const questions: Question[] = [
  {
    id: "case-studies",
    question: "Do you have UK-specific case studies or client references?",
    options: [
      { label: "Yes — multiple UK/EU references", score: 3 },
      { label: "Some, but not UK-localised", score: 2 },
      { label: "Only domestic market references", score: 1 },
      { label: "No formal case studies yet", score: 0 },
    ],
  },
  {
    id: "data-compliance",
    question: "How prepared is your organisation for UK data compliance (GDPR / DUAA 2025)?",
    options: [
      { label: "Fully compliant — audited and certified", score: 3 },
      { label: "Partially compliant — policies in place", score: 2 },
      { label: "Aware but not yet implemented", score: 1 },
      { label: "Not yet assessed", score: 0 },
    ],
  },
  {
    id: "uk-presence",
    question: "Do you have any existing UK commercial presence or partnerships?",
    options: [
      { label: "UK entity / registered office", score: 3 },
      { label: "Active UK partner or reseller", score: 2 },
      { label: "Informal connections only", score: 1 },
      { label: "No UK presence at all", score: 0 },
    ],
  },
  {
    id: "team-readiness",
    question: "Can your engineering teams operate within UK time-zone and communication norms?",
    options: [
      { label: "Yes — proven overlap and cultural training", score: 3 },
      { label: "Partial overlap — willing to adapt", score: 2 },
      { label: "Limited overlap — exploring options", score: 1 },
      { label: "No current overlap", score: 0 },
    ],
  },
  {
    id: "revenue-target",
    question: "What is your UK revenue target for the next 12 months?",
    options: [
      { label: "£1M+ — aggressive market entry", score: 3 },
      { label: "£250K–£1M — strategic pilot", score: 2 },
      { label: "£50K–£250K — exploratory", score: 1 },
      { label: "Not yet defined", score: 0 },
    ],
  },
];

function getReadinessResult(score: number) {
  const maxScore = questions.length * 3;
  const pct = Math.round((score / maxScore) * 100);

  if (pct >= 80) {
    return {
      tier: "Market Ready",
      colour: "text-emerald-400",
      bgColour: "bg-emerald-400",
      summary: "Your organisation is well-positioned for UK market entry. You have the foundations — now it's about speed-to-contract and pipeline acceleration.",
      cta: "Let's accelerate your UK pipeline.",
    };
  }
  if (pct >= 50) {
    return {
      tier: "High Potential",
      colour: "text-primary",
      bgColour: "bg-primary",
      summary: "Strong fundamentals, but critical gaps in compliance or local presence could slow your entry. A targeted audit will identify exactly where to invest.",
      cta: "Get your gap analysis.",
    };
  }
  return {
    tier: "Foundation Stage",
    colour: "text-amber-400",
    bgColour: "bg-amber-400",
    summary: "Your firm has significant upside, but needs foundational work on compliance, case studies, and UK positioning before approaching enterprise buyers.",
    cta: "Start with a readiness consultation.",
  };
}

export function MarketScorecard() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);

  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const q = questions[currentQ];

  const handleSelect = (score: number) => {
    setAnswers((prev) => ({ ...prev, [q.id]: score }));
  };

  const goNext = () => {
    if (currentQ < totalQuestions - 1) {
      setDirection(1);
      setCurrentQ((prev) => prev + 1);
    } else if (answeredCount === totalQuestions) {
      setShowResult(true);
    }
  };

  const goPrev = () => {
    if (currentQ > 0) {
      setDirection(-1);
      setCurrentQ((prev) => prev - 1);
    }
  };

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const result = getReadinessResult(totalScore);
  const maxScore = totalQuestions * 3;
  const pct = Math.round((totalScore / maxScore) * 100);

  if (showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded p-8 lg:p-10 space-y-6"
        data-testid="scorecard-result"
      >
        <div className="flex items-center gap-3 mb-2">
          <ClipboardCheck className="w-6 h-6 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Your Readiness Score</span>
        </div>

        <div className="flex items-end gap-4">
          <span className={`text-6xl font-display font-bold ${result.colour}`}>{pct}%</span>
          <span className={`text-xl font-display font-bold ${result.colour} mb-2`}>{result.tier}</span>
        </div>

        <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${pct}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`h-full rounded-full ${result.bgColour}`}
          />
        </div>

        <p className="text-muted-foreground leading-relaxed">{result.summary}</p>

        <Button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="cta-glow font-bold text-base group"
          data-testid="button-scorecard-cta"
        >
          {result.cta}
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        <button
          onClick={() => { setShowResult(false); setCurrentQ(0); setAnswers({}); }}
          className="text-xs text-muted-foreground underline underline-offset-2"
          data-testid="button-scorecard-reset"
        >
          Retake assessment
        </button>
      </motion.div>
    );
  }

  return (
    <div className="glass-panel rounded p-8 lg:p-10 space-y-6" data-testid="scorecard-form">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <ClipboardCheck className="w-6 h-6 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">UK Market Readiness Scorecard</span>
        </div>
        <span className="text-xs text-muted-foreground font-mono">{currentQ + 1} / {totalQuestions}</span>
      </div>

      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${((currentQ + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={q.id}
          custom={direction}
          initial={{ x: direction > 0 ? 80 : -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -80 : 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          <h4 className="text-lg font-display font-bold leading-snug" data-testid={`text-scorecard-q-${currentQ}`}>
            {q.question}
          </h4>
          <div className="space-y-2">
            {q.options.map((opt, i) => {
              const isSelected = answers[q.id] === opt.score;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.score)}
                  className={`w-full text-left px-4 py-3 rounded border transition-all text-sm ${
                    isSelected
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-white/10 bg-secondary/30 text-muted-foreground hover:border-white/20"
                  }`}
                  data-testid={`button-scorecard-opt-${currentQ}-${i}`}
                >
                  <span className="flex items-center gap-3">
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />}
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <button
          onClick={goPrev}
          disabled={currentQ === 0}
          className="flex items-center gap-1 text-sm text-muted-foreground disabled:opacity-30 transition-opacity"
          data-testid="button-scorecard-prev"
        >
          <ChevronLeft className="w-4 h-4" /> Previous
        </button>
        <button
          onClick={goNext}
          disabled={answers[q.id] === undefined}
          className="flex items-center gap-1 text-sm text-primary font-semibold disabled:opacity-30 transition-opacity"
          data-testid="button-scorecard-next"
        >
          {currentQ === totalQuestions - 1 ? "See Your Score" : "Next"} <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
