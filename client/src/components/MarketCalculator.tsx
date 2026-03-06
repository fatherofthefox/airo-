import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MarketCalculator() {
  const [dailyRate, setDailyRate] = useState(400);
  const [teamSize, setTeamSize] = useState(5);
  const ukPremium = 1.8;

  const currentRevenue = dailyRate * teamSize * 20;
  const ukPotentialRevenue = (dailyRate * ukPremium) * teamSize * 20;
  const arbitrageValue = ukPotentialRevenue - currentRevenue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-card p-8 lg:p-10 rounded shadow-2xl border border-white/10 max-w-2xl mx-auto"
      data-testid="market-calculator"
    >
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-primary mb-2">UK Market Value Realisation</h3>
        <p className="text-muted-foreground text-sm">Calculate the revenue delta of shifting from "Offshore Vendor" to "UK Strategic Partner".</p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="daily-rate" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Current Daily Rate ($)</label>
          <input
            id="daily-rate"
            type="range" min="200" max="1000" step="50"
            value={dailyRate}
            onChange={(e) => setDailyRate(parseInt(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            aria-valuemin={200} aria-valuemax={1000} aria-valuenow={dailyRate} aria-valuetext={`$${dailyRate} per day`}
            data-testid="input-daily-rate"
          />
          <div className="flex justify-between mt-2 font-mono text-primary">
            <span className="text-xs">$200</span>
            <span className="text-xl font-bold">${dailyRate}</span>
            <span className="text-xs">$1000</span>
          </div>
        </div>

        <div>
          <label htmlFor="team-size" className="block text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Engineering Team Size</label>
          <input
            id="team-size"
            type="range" min="1" max="30" step="1"
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e.target.value))}
            className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer accent-primary"
            aria-valuemin={1} aria-valuemax={30} aria-valuenow={teamSize} aria-valuetext={`${teamSize} engineers`}
            data-testid="input-team-size"
          />
          <div className="flex justify-between mt-2 font-mono text-primary">
            <span className="text-xs">1</span>
            <span className="text-xl font-bold">{teamSize} engineers</span>
            <span className="text-xs">30</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 py-6 border-t border-white/5">
          <div className="text-center p-4 bg-secondary/50 rounded">
            <span className="block text-muted-foreground text-xs mb-1">Current Monthly Rev</span>
            <span className="text-2xl font-display font-bold">${currentRevenue.toLocaleString()}</span>
          </div>
          <div className="text-center p-4 bg-primary/10 rounded border border-primary/30">
            <span className="block text-primary text-xs mb-1 font-semibold">UK Managed Revenue</span>
            <span className="text-2xl font-display font-bold text-primary">${ukPotentialRevenue.toLocaleString()}</span>
          </div>
        </div>

        <div className="bg-primary p-6 rounded text-center">
          <p className="text-xs uppercase tracking-widest font-semibold text-primary-foreground/80">Monthly Growth Opportunity</p>
          <h2 className="text-4xl font-display font-bold text-primary-foreground mt-1">+${arbitrageValue.toLocaleString()}</h2>
          <p className="text-xs mt-3 text-primary-foreground/70 leading-relaxed">
            *Based on UK-India ETP 2026 trade premiums and AI-driven "Human-in-the-Loop" UK presence.
          </p>
        </div>

        <Button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="w-full font-bold text-base group bg-[#1a1f2e] text-white border-0 shadow-none py-6"
          data-testid="button-calculator-cta"
        >
          Get Your Full UK Entry Audit
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      <p className="text-[10px] text-muted-foreground text-center mt-6 leading-relaxed">
        Calculations based on 2026 UK Data Use and Access Act frameworks for cross-border engineering squads.
      </p>
    </motion.div>
  );
}
