import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, ArrowRight, BarChart3, Database, Users, AlertTriangle, Scale, Globe, Bot, UserCheck, FileCheck } from "lucide-react";
import { Seo } from "@/components/Seo";
import { LeadForm } from "@/components/LeadForm";
import { LeadCarousel } from "@/components/LeadCarousel";
import { Button } from "@/components/ui/button";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Seo 
        title="A.I.R.O | Intelligent Revenue Operations" 
        description="Capitalise on UK market share and bilateral global trade frameworks. 25+ years of B2B expertise powering AI-driven demand generation with high-touch human strategy."
        ogImage="/favicon.png"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2" data-testid="link-home">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <TrendingUp className="text-primary-foreground w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">A.I.R.O</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#capabilities"
              className="text-sm text-muted-foreground transition-colors"
              data-testid="link-solutions"
            >
              Solutions
            </a>
            <a
              href="#lead-engine"
              className="text-sm text-muted-foreground transition-colors"
              data-testid="link-case-studies"
            >
              Case Studies
            </a>
            <a
              href="#frameworks"
              className="text-sm text-muted-foreground transition-colors"
              data-testid="link-compliance"
            >
              UK Compliance
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-grid-white">
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Zap className="w-4 h-4" />
              <span>Seamless UK Market Entry for Engineering Leaders</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold font-display leading-[1.1] tracking-tight" data-testid="text-hero-heading">
              UK Sovereign <span className="text-gradient">Growth</span> Partner.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-description">
              Architecting £1M+ UK revenue pipelines for offshore engineering firms through bilateral expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-semibold group cta-glow shadow-lg"
                data-testid="button-cta-hero"
              >
                Secure Your UK Market Audit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            data-testid="hero-dashboard"
          >
            <div className="bg-card rounded shadow-2xl border border-white/10 p-6 lg:p-8 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Performance Dashboard</p>
                  <h3 className="text-lg font-display font-bold mt-1">Time to UK Compliance</h3>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/15 text-emerald-400 px-3 py-1 rounded text-xs font-semibold">
                  <TrendingUp className="w-3 h-3" />
                  75% faster
                </div>
              </div>

              <div className="relative h-48 flex items-end gap-3 px-2">
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                  {[12, 9, 6, 3, 0].map((val) => (
                    <div key={val} className="flex items-center gap-2">
                      <span className="text-[10px] text-muted-foreground w-6 text-right">{val}m</span>
                      <div className="flex-1 border-t border-white/5" />
                    </div>
                  ))}
                </div>

                {[
                  { label: "Traditional", months: 12, color: "bg-muted-foreground/30" },
                  { label: "Assisted", months: 8, color: "bg-muted-foreground/50" },
                  { label: "A.I.R.O Phase 1", months: 5, color: "bg-primary/70" },
                  { label: "A.I.R.O Full", months: 3, color: "bg-primary" },
                ].map((bar, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-2 relative z-10">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${(bar.months / 12) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                      className={`w-full rounded-t ${bar.color} relative`}
                    >
                      <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-bold text-foreground whitespace-nowrap">
                        {bar.months}mo
                      </span>
                    </motion.div>
                    <span className="text-[9px] text-muted-foreground text-center leading-tight mt-1">{bar.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-white/5">
                {[
                  { label: "Compliance Speed", value: "3 months" },
                  { label: "Cost Reduction", value: "60%" },
                  { label: "Risk Score", value: "Low" },
                ].map((metric, i) => (
                  <div key={i} className="text-center">
                    <p className="text-lg font-display font-bold text-primary">{metric.value}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Semantic SEO Keywords via section tags and hidden structured text */}
      <div className="sr-only">
        Bilateral Trade, Revenue Operations, AI Sales Agents, Sales Workflow Optimisation
      </div>

      {/* The 2026 Market Reality — Dark-Mode Insight Panel */}
      <section className="py-24 bg-card relative z-10 border-y border-white/5" data-testid="section-edutainment">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-12"
          >
            <div className="text-center space-y-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded">
                The 2026 Market Reality
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-tight" data-testid="text-edutainment-heading">
                The Efficiency Gap: Universal Technical<br className="hidden md:block" /> Excellence <span className="text-destructive">Isn't Enough</span>.
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-edutainment-description">
                  Most expansions stall due to semantic misalignments — missing the subtle professional nuances and unwritten etiquette required to close deals. AIRO provides the commercial knowledge, semantically precise, and perfectly aligned with UK-specific business logic, to secure high-stakes UK contracts.
                </p>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  We don't just "prospect"; we architect <span className="text-primary">Intelligent Growth Systems</span> that bridge the gap between AI scale and human-level nuance — leveraging frameworks like the <span className="text-primary">UK-India Enhanced Trade Partnership (ETP)</span> and navigating cross-border data flows under the <span className="text-primary">Data Use and Access Act (DUAA) 2025</span>.
                </p>
                <p className="text-base text-muted-foreground leading-relaxed italic">
                  AIRO helps you operate within the legal landscape of bilateral trade — not around it. From regulatory compliance to sovereign data governance, we ensure your UK market entry is built on institutional-grade foundations.
                </p>
              </div>
            </div>

            {/* System Flow Diagram */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 py-8"
            >
              <div className="flex flex-col items-center gap-2 px-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Bot className="w-8 h-8 text-primary" />
                </div>
                <span className="text-sm font-semibold">AI Input</span>
                <span className="text-[10px] text-muted-foreground">Signal Detection</span>
              </div>

              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-primary/50 to-accent/50 relative">
                <ArrowRight className="w-4 h-4 text-primary absolute -right-2 -top-2" />
              </div>
              <div className="md:hidden h-8 w-px bg-gradient-to-b from-primary/50 to-accent/50 relative">
                <ArrowRight className="w-4 h-4 text-primary absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-90" />
              </div>

              <div className="flex flex-col items-center gap-2 px-6">
                <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <UserCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold">HITL Filter</span>
                <span className="text-[10px] text-muted-foreground">Risk Mitigation</span>
              </div>

              <div className="hidden md:block w-16 h-px bg-gradient-to-r from-accent/50 to-emerald-500/50 relative">
                <ArrowRight className="w-4 h-4 text-emerald-400 absolute -right-2 -top-2" />
              </div>
              <div className="md:hidden h-8 w-px bg-gradient-to-b from-accent/50 to-emerald-500/50 relative">
                <ArrowRight className="w-4 h-4 text-emerald-400 absolute -bottom-2 left-1/2 -translate-x-1/2 rotate-90" />
              </div>

              <div className="flex flex-col items-center gap-2 px-6">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-sm font-semibold">Qualified UK Contract</span>
                <span className="text-[10px] text-muted-foreground">Compliant &amp; Verified</span>
              </div>
            </motion.div>

            <p className="text-center text-sm text-muted-foreground italic max-w-2xl mx-auto">
              "AI finds the signal; our UK experts provide the cultural and legal verification required to close."
            </p>

            {/* Glassmorphism Metric Cards */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {[
                {
                  stat: "92%",
                  label: "Market Rejection Rate",
                  desc: "For generic, non-compliant automated outreach in 2026."
                },
                {
                  stat: "4.2\u00d7",
                  label: "Pipeline Velocity",
                  desc: "Achieved through HITL-verified B2B engagement."
                },
                {
                  stat: "< 15 min",
                  label: "Lead Response Time",
                  desc: 'Industry-leading latency for "Hot-to-Human" handovers.'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="glass-panel rounded p-6 text-center space-y-3"
                  data-testid={`text-stat-${i}`}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-primary">{item.stat}</div>
                  <div className="text-sm font-semibold text-foreground uppercase tracking-wider">{item.label}</div>
                  <div className="text-xs text-muted-foreground leading-relaxed">{item.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section — 3-Column Grid */}
      <section id="capabilities" className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6" data-testid="text-expertise-heading">Our Capabilities</h2>
            <p className="text-lg text-muted-foreground">
              Three pillars of UK market success — from entry strategy through to AI-powered revenue generation.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Market Entry",
                desc: "Fractional COO/CRO services for B2B tech companies entering the UK. Strategic local presence with bilateral trade expertise."
              },
              {
                icon: <Scale className="w-8 h-8 text-accent" />,
                title: "Compliance & Risk",
                desc: "Navigating UK legal, insurance, and tax infrastructure. Cross-border compliance that protects your operation and accelerates growth."
              },
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Revenue Engines",
                desc: "AI Sales Agents combined with Human-in-the-Loop growth systems. Automating prospecting so your team focuses on high-value relationships."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-card border border-white/5 p-8 rounded shadow-md"
                data-testid={`card-expertise-${i}`}
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The B2B Sales Engine — Bridging Technical Excellence to Local Markets */}
      <section className="py-24 bg-card relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-4xl mx-auto mb-16 space-y-6"
          >
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded">
              25+ Years of B2B Sales Engineering
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold">Global Innovation. Local Execution. Predicted Revenue.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              International trade frictions and semantic misalignments stall even the strongest offshore teams. AIRO bridges the gap — converting your engineering capability into a fully operational UK revenue machine through our "Gold Standard" tech stack and local market intelligence.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: <Database className="w-8 h-8 text-primary" />,
                title: "Data Architecture",
                desc: "AIRO eliminates semantic misalignments at the data layer. We deploy Apollo-driven intent signals and demographic enrichment calibrated for UK buyer personas — so your outreach resonates locally, not generically."
              },
              {
                icon: <Zap className="w-8 h-8 text-emerald-400" />,
                title: "AI Sales Agents",
                desc: "Our AI agents don't just automate — they localise. Hyper-personalised outreach sequences via Reply.io, engineered to navigate UK-specific trade frictions and professional etiquette that generic platforms miss."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "CRM & Compliance Bridge",
                desc: "AIRO acts as the essential bridge between your offshore operations and UK regulatory reality. Flawless bidirectional CRM syncing with built-in compliance guardrails — single-source-of-truth reliability, locally verified."
              },
              {
                icon: <Users className="w-8 h-8 text-emerald-400" />,
                title: "Human-in-the-Loop (HITL)",
                desc: "Where AI finds the signal, our UK experts provide cultural and legal verification. AIRO's HITL engine mitigates international trade frictions by fusing AI intent signals with the personal nuance required to close high-stakes B2B contracts."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-background border border-white/5 p-8 rounded shadow-md"
                data-testid={`card-detail-${i}`}
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Frameworks Section */}
      {/* Precision Qualification */}
      <section id="frameworks" className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold leading-tight" data-testid="text-frameworks-heading">
                Precision Qualification: Protecting Your UK GTM Velocity
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground leading-relaxed">
                We don't just fill pipelines; we protect your time and effort with HITL consultation and qualification frameworks, ensuring your resources are only deployed against high-intent, UK-validated opportunities.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Equal Business Stature</h4>
                    <p className="text-muted-foreground">Discovery meetings that establish "Equal Business Stature." Move your technical teams from "vendor" to "strategic partner" in the eyes of UK decision-makers.</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">BANT & FAINT Frameworks</h4>
                    <p className="text-muted-foreground">Budget, Authority, Need, Timeline — combined with Funds, Authority, Interest, Need, Timing. Proactively creating demand before budget is formally allocated.</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">Sandler Methodology</h4>
                    <p className="text-muted-foreground">Pain-based qualification that uncovers genuine commercial urgency — filtering out "tyre-kickers" before they consume your team's bandwidth.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-card rounded shadow-md border border-white/10 p-8 relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
                <div className="relative z-10 space-y-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-6">Funnel Efficiency</p>

                  {[
                    {
                      phase: "Phase 1",
                      label: "Semantic Discovery",
                      sub: "Identify intent vs. noise",
                      width: "w-full",
                      opacity: "text-white/60",
                      barColor: "bg-primary/40",
                      barFill: "w-full"
                    },
                    {
                      phase: "Phase 2",
                      label: "Commercial Qualification",
                      sub: "Hard-filtering via Sandler / BANT / FAINT",
                      width: "w-[75%]",
                      opacity: "text-white/80",
                      barColor: "bg-primary/60",
                      barFill: "w-[75%]"
                    },
                    {
                      phase: "Phase 3",
                      label: "High-Trust Conversion",
                      sub: 'Closing the "Nuance Gap"',
                      width: "w-[45%]",
                      opacity: "text-white",
                      barColor: "bg-primary",
                      barFill: "w-[45%]"
                    },
                  ].map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.15 * i }}
                      className="py-4"
                    >
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">{step.phase}</span>
                        <span className={`text-xl md:text-2xl font-display font-bold ${step.opacity}`}>{step.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{step.sub}</p>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + 0.2 * i }}
                          className={`h-full ${step.barColor} rounded-full ${step.barFill}`}
                        />
                      </div>
                    </motion.div>
                  ))}

                  <div className="pt-4 border-t border-white/5 mt-4 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-muted-foreground">Only UK-validated, high-intent opportunities pass through</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lead Conversion Engine — Interactive Blueprint */}
      <section id="lead-engine" className="py-24 bg-card relative z-10 border-y border-white/5" aria-label="Improving Lead Generation in 2026" data-testid="section-lead-engine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:sticky lg:top-28"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-sm font-medium">
                <BarChart3 className="w-4 h-4" />
                <span>Interactive Blueprint</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold" data-testid="text-carousel-heading">
                The Lead Conversion Engine
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A 5-step framework for improving lead generation in 2026. Each step builds on the last, creating a self-optimising revenue loop powered by AI sales agents and Revenue Operations best practices.
              </p>
              <p className="text-sm text-muted-foreground">
                Navigate the slides to explore each stage of the blueprint — from smart lead magnets through to AI-driven feedback loops for bilateral trade and UK market growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LeadCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form / Lead Section */}
      <section id="contact" className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6" data-testid="text-contact-heading">Transform Your Revenue Operations</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Partner with us to architect a predictable, high-velocity revenue engine tailored for the UK market. Fill out the form to schedule a comprehensive strategic audit.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">UK GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium">Data-Driven Strategies</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Power CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-8 tracking-tight"
            data-testid="text-cta-heading"
          >
            Bridge the Semantic Gap. Secure Your UK Market Entry.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Eliminate expansion friction with a diagnostic GTM roadmap. Unify your technical edge with our sovereign Revenue Operations strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <Button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-bold text-lg group bg-[#1a1f2e] text-white border-0 shadow-none px-8 py-6"
              data-testid="button-cta-footer"
            >
              Request Your Strategic UK Market Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <span className="text-sm text-primary-foreground/60">Directly for CEOs &amp; Founders. 30-minute high-level diagnostic.</span>
          </motion.div>
        </div>
      </section>

      {/* About the Methodology */}
      <section className="py-16 bg-background border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <p className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
            Strategic Fractional COO/CRO | Scaling B2B Tech into UK Markets | Expert in Cross-Border Compliance, Legal, Tax &amp; Revenue Operations | AI-Driven Sales &amp; HITL Growth Systems
          </p>
          <p className="text-base md:text-lg text-primary font-bold mt-4">
            Transforming your Offshore Operation into UK-Compliant Revenue Engine
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="font-display font-semibold text-foreground">A.I.R.O</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Intelligent Revenue Operations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
