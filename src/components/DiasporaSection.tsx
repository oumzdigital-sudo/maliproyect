import React, { useState } from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  Video, 
  FileCheck2, 
  Send, 
  Calculator
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/mockData';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface DiasporaSectionProps {
  language: Language;
}

export const DiasporaSection: React.FC<DiasporaSectionProps> = ({ language }) => {
  const [investBudgetEur, setInvestBudgetEur] = useState<number>(20000);
  const [yearsHolding, setYearsHolding] = useState<number>(3);
  
  const t = TRANSLATIONS[language];

  // Rate: 1 EUR = 655.957 FCFA. Average appreciation in Sirakoro is ~18% per year
  const budgetFCFA = investBudgetEur * 655.957;
  const estimatedFutureFCFA = budgetFCFA * Math.pow(1.18, yearsHolding);
  const estimatedFutureEur = estimatedFutureFCFA / 655.957;
  const netGainEur = estimatedFutureEur - investBudgetEur;

  const diasporaPillars = [
    {
      icon: ShieldCheck,
      title: t.diaspora.pillar1Title,
      text: t.diaspora.pillar1Desc,
    },
    {
      icon: Video,
      title: t.diaspora.pillar2Title,
      text: t.diaspora.pillar2Desc,
    },
    {
      icon: FileCheck2,
      title: t.diaspora.pillar3Title,
      text: t.diaspora.pillar3Desc,
    },
    {
      icon: Send,
      title: t.diaspora.pillar4Title,
      text: t.diaspora.pillar4Desc,
    },
  ];

  return (
    <section id="diaspora" className="py-12 sm:py-24 bg-stone-900 text-white relative w-full max-w-full overflow-hidden">
      {/* Decorative background glow strictly clipped */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-72 sm:w-96 h-72 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20 self-start">
              <span>🇲🇱</span>
              <Globe2 className="w-4 h-4" />
              <span>{t.diaspora.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.diaspora.title}
            </h2>

            <p className="text-sm sm:text-lg text-stone-300 leading-relaxed font-normal">
              {t.diaspora.subtitle}
            </p>

            {/* Diaspora Trust Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-1 sm:pt-2">
              {diasporaPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="p-3.5 sm:p-4 rounded-xl bg-stone-800/80 border border-stone-700 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-amber-400 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-white mb-1">{pillar.title}</h4>
                      <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed">{pillar.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={generateWhatsAppLink(
                  CONTACT_INFO.whatsappPrimary,
                  language === 'es'
                    ? 'Hola Groupe Kaniba, vivo en el extranjero y deseo coordinar una visita en vivo por videollamada de WhatsApp a los terrenos de Sirakoro (Malí 🇲🇱).'
                    : language === 'en'
                    ? 'Hello Groupe Kaniba, I live abroad and would like to schedule a live WhatsApp video tour of the Sirakoro plots (Mali 🇲🇱).'
                    : 'Bonjour Groupe Kaniba, je réside à l’étranger et souhaite planifier une visite vidéo WhatsApp en direct à Sirakoro (Mali 🇲🇱).'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 sm:px-6 sm:py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                <span>{t.diaspora.btnVideoCall}</span>
              </a>

              <span className="text-[11px] sm:text-xs text-stone-400">
                {t.diaspora.directLines}
              </span>
            </div>

          </div>

          {/* Right Column: Photo + Diaspora Yield Calculator */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 w-full">
            
            {/* Owner Photo with Malian Title */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 bg-stone-800 w-full">
              <img
                src={ASSETS.diasporaFamily}
                alt="Propriétaire diaspora Titre Foncier Mali 🇲🇱"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/10 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                <span className="text-[10px] sm:text-[11px] font-mono text-amber-400 block font-semibold flex items-center gap-1">
                  <span>🇲🇱</span>
                  <span>{t.diaspora.testimonialBadge}</span>
                </span>
                <p className="text-xs font-medium text-stone-200 mt-0.5">
                  {t.diaspora.testimonialQuote}
                </p>
                <span className="text-[10px] sm:text-[11px] text-stone-400 block mt-1">
                  {t.diaspora.testimonialAuthor}
                </span>
              </div>
            </div>

            {/* Interactive Diaspora Yield Calculator */}
            <div className="p-4 sm:p-5 rounded-2xl bg-stone-800/90 border border-stone-700 shadow-xl text-xs space-y-3 sm:space-y-4 w-full">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700">
                <div className="flex items-center gap-2 font-bold text-amber-400">
                  <Calculator className="w-4 h-4" />
                  <span className="text-xs sm:text-sm">{t.diaspora.calcTitle}</span>
                </div>
                <span className="text-[10px] sm:text-[11px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold flex items-center gap-1">
                  <span>🇲🇱</span>
                  <span>{t.diaspora.calcRateBadge}</span>
                </span>
              </div>

              {/* Slider Budget */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-medium text-[11px] sm:text-xs">
                  <span className="text-stone-300">{t.diaspora.calcCapitalLabel}</span>
                  <span className="font-bold text-amber-300 font-mono">
                    {investBudgetEur.toLocaleString('fr-FR')} € (~{formatCurrency(budgetFCFA, 'XOF')})
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="80000"
                  step="2500"
                  value={investBudgetEur}
                  onChange={(e) => setInvestBudgetEur(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              {/* Horizon slider */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-medium text-[11px] sm:text-xs">
                  <span className="text-stone-300">{t.diaspora.calcHorizonLabel}</span>
                  <span className="font-bold text-white font-mono">{yearsHolding} {t.diaspora.calcYears}</span>
                </div>
                <div className="flex gap-2">
                  {[2, 3, 5, 8].map((yr) => (
                    <button
                      key={yr}
                      onClick={() => setYearsHolding(yr)}
                      className={`flex-1 py-1 rounded text-[11px] font-semibold transition-colors ${
                        yearsHolding === yr ? 'bg-amber-500 text-stone-950' : 'bg-stone-700 text-stone-300'
                      }`}
                    >
                      {yr} {t.diaspora.calcYears}
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Result */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-1.5 sm:space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-400 text-[11px] sm:text-xs">{t.diaspora.calcEstimatedVal}</span>
                  <span className="text-sm sm:text-lg font-bold text-emerald-400 font-mono">
                    ~{Math.round(estimatedFutureEur).toLocaleString('fr-FR')} €
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-[10px] sm:text-[11px]">
                  <span className="text-stone-400">{t.diaspora.calcNetGain}</span>
                  <span className="font-bold text-amber-400 font-mono">
                    +{Math.round(netGainEur).toLocaleString('fr-FR')} € (+{Math.round((netGainEur / investBudgetEur) * 100)}%)
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
