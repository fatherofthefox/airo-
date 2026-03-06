import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Zap, ArrowRight, BarChart3, Database, Users, AlertTriangle } from "lucide-react";
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
          <Button 
            variant="ghost"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-semibold"
            data-testid="button-cta-nav"
          >
            Strategy Session
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 bg-grid-white">
        <div className="absolute inset-0 bg-background/90" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
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
              Providing strategic local presence, with "Human-in-the-Loop" intelligence, and AI-driven demand engines required to convert your technical excellence into UK B2B contracts. Architecting predictable £1M+ pipelines through Bilateral Trade expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="font-semibold group cta-glow"
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
          >
            <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative bg-gradient-to-br from-white/5 to-transparent">
              <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-accent/20 animate-[spin_40s_linear_infinite_reverse]" />
              <div className="w-32 h-32 rounded-full bg-primary/20 blur-xl absolute" />
              <BarChart3 className="w-20 h-20 text-primary relative z-10" />
            </div>
          </motion.div>
        </div>
        <div className="relative z-10 mt-12 max-w-7xl mx-auto w-full">
          <p className="text-sm md:text-lg text-muted-foreground font-semibold tracking-wide text-center whitespace-nowrap">
            Strategic Fractional COO | Transforming Offshore Operations into UK-Compliant Revenue Engines | AI Sales Agents | Legal, Insurance &amp; Tax Infrastructure for Global Scale
          </p>
        </div>
      </section>

      {/* Semantic SEO Keywords via section tags and hidden structured text */}
      <div className="sr-only">
        Bilateral Trade, Revenue Operations, AI Sales Agents, Sales Workflow Optimisation
      </div>

      {/* Edutainment Hook */}
      <section className="py-20 bg-card relative z-10 border-y border-white/5" data-testid="section-edutainment">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-destructive/30 bg-destructive/10 text-destructive text-sm font-medium">
              <AlertTriangle className="w-4 h-4" />
              <span>Industry Reality Check</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight" data-testid="text-edutainment-heading">
              Why <span className="text-destructive">90%</span> of bizdev agencies fail in their first year?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto" data-testid="text-edutainment-description">
              They rely on volume over value. Cold lists, generic outreach, and zero personalisation. The agencies that survive build intelligent systems — ones that blend AI-powered prospecting with genuine human relationships.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              {[
                { stat: "90%", label: "Fail within 12 months" },
                { stat: "3\u00d7", label: "Higher close rate with HITL" },
                { stat: "< 2 min", label: "Average lead response needed" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="text-center"
                  data-testid={`text-stat-${i}`}
                >
                  <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-background relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6" data-testid="text-expertise-heading">25+ Years of B2B Expertise</h2>
            <p className="text-lg text-muted-foreground">
              We leverage a "Gold Standard" tech stack, including Apollo, Reply.io, and leading CRM systems to optimise every phase of the customer journey.
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
                desc: "Precision targeting using intent signals and demographic enrichment via Apollo."
              },
              {
                icon: <Zap className="w-8 h-8 text-accent" />,
                title: "AI Sales Agents",
                desc: "Automated, hyper-personalised outreach sequences orchestrated through Reply.io."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary" />,
                title: "CRM Integration",
                desc: "Flawless bidirectional syncing ensuring single-source-of-truth reliability."
              },
              {
                icon: <Users className="w-8 h-8 text-accent" />,
                title: "Human-in-the-Loop (HITL)",
                desc: "Our human-in-the-loop engine fuses AI intent signals with the personal touch required to close deals. Automating prospecting so your team can focus on building high-value relationships."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                className="bg-card border border-white/5 p-8 rounded-md"
                data-testid={`card-expertise-${i}`}
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Frameworks Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              className="space-y-6"
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display font-bold" data-testid="text-frameworks-heading">
                Advanced Qualification Frameworks
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-muted-foreground">
                Our sales workflow integrates robust methodologies to ensure your pipeline is populated with high-intent, highly qualified opportunities.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-4 pt-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">BANT Methodology</h4>
                    <p className="text-muted-foreground">Budget, Authority, Need, Timeline assessment embedded into the discovery phase.</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">FAINT Methodology</h4>
                    <p className="text-muted-foreground">Funds, Authority, Interest, Need, Timing. Proactively creating demand before the budget is formally allocated.</p>
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
              <div className="aspect-video bg-card rounded-md border border-white/10 p-8 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />
                <div className="space-y-6 relative z-10">
                  <div className="h-2 w-1/3 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full" />
                  </div>
                  <div className="text-4xl font-display font-bold text-white/50">Discovery</div>
                  
                  <div className="h-2 w-2/3 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full" />
                  </div>
                  <div className="text-4xl font-display font-bold text-white/70">Qualification</div>
                  
                  <div className="h-2 w-full bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-full shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
                  </div>
                  <div className="text-4xl font-display font-bold text-white">Conversion</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
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
        {/* Background texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjE1KSIvPjwvc3ZnPg==')] opacity-50" />
        
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-8 tracking-tight"
            data-testid="text-cta-heading"
          >
            Ready to scale your UK market share?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto"
          >
            Leverage Intelligent Revenue Operations today. Unify your technology, data, and human strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button 
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-bold text-lg group cta-glow-light"
              data-testid="button-cta-footer"
            >
              Secure Your UK Market Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
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
