import React, { useState } from 'react';
import { 
  Globe2, 
  ShieldCheck, 
  Video, 
  FileCheck2, 
  Send, 
  ArrowRight, 
  Calculator, 
  Plane,
  Building,
  CheckCircle2,
  BadgeAlert,
  Percent
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/mockData';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';

export const DiasporaSection: React.FC = () => {
  const [investBudgetEur, setInvestBudgetEur] = useState<number>(20000);
  const [yearsHolding, setYearsHolding] = useState<number>(3);
  
  // Rate: 1 EUR = 655.957 FCFA. Average appreciation in Sirakoro / Bamako is ~18% per year
  const budgetFCFA = investBudgetEur * 655.957;
  const estimatedFutureFCFA = budgetFCFA * Math.pow(1.18, yearsHolding);
  const estimatedFutureEur = estimatedFutureFCFA / 655.957;
  const netGainEur = estimatedFutureEur - investBudgetEur;

  const diasporaPillars = [
    {
      icon: ShieldCheck,
      title: 'Procuration & Notaire Agréé',
      text: 'Mandat officiel authentifié par le consulat ou notaire en France/Espagne/USA. Votre nom figure noir sur blanc sur le Titre Foncier national.',
    },
    {
      icon: Video,
      title: 'Inspections Vidéo par Drone & WhatsApp',
      text: 'Visite en direct avec notre géomètre sur la parcelle de Sirakoro. Vous visualisez les bornes en béton réelles avant tout versement.',
    },
    {
      icon: FileCheck2,
      title: 'Compte Sécurisé & Virement Bancaire',
      text: 'Fonds logés sur compte bancaire séquestre avec quittance officielle et morcellement cadastral suivi étape par étape.',
    },
    {
      icon: Send,
      title: 'Expédition Titre Foncier par DHL Express',
      text: 'Réception sécurisée de vos documents juridiques originaux directement à votre domicile en Europe, Amérique ou Afrique.',
    },
  ];

  return (
    <section id="diaspora" className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1.5 rounded-lg border border-amber-500/20">
              <Globe2 className="w-4 h-4" />
              <span>Guichet Spécial Diáspora Malienne & Internationale</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight text-balance">
              ¿Vives en el extranjero? Invierte en Mali con total seguridad.
            </h2>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-normal">
              Ne confiez plus aveuglément vos économies. Le <span className="font-bold text-amber-300">Groupe Kaniba</span> a mis en place le protocole d’acquisition juridique le plus strict pour les Maliens résidant en France, Espagne, États-Unis, Canada et Afrique de l'Ouest.
            </p>

            {/* Diaspora Trust Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {diasporaPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div key={idx} className="p-4 rounded-xl bg-stone-800/80 border border-stone-700 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-900/60 text-amber-400 flex items-center justify-center mb-2.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1">{pillar.title}</h4>
                      <p className="text-xs text-stone-400 leading-normal">{pillar.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={generateWhatsAppLink(
                  CONTACT_INFO.whatsappPrimary,
                  'Bonjour Groupe Kaniba, je réside à l’étranger et souhaite investir en toute sécurité dans un terrain ou une villa avec Titre Foncier à Bamako/Sirakoro.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-colors flex items-center gap-2"
              >
                <Video className="w-4 h-4" />
                <span>Planifier Visite Vidéo en Direct (WhatsApp)</span>
              </a>

              <span className="text-xs text-stone-400">
                Lignes directes : +223 70 15 65 65 / +223 95 95 95 62
              </span>
            </div>

          </div>

          {/* Right Column: High Quality Photo + Diaspora Yield Calculator */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Joyful Diaspora Owner Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-stone-700 bg-stone-800">
              <img
                src={ASSETS.diasporaFamily}
                alt="Propriétaire de la diaspora recevant son Titre Foncier à Bamako"
                referrerPolicy="no-referrer"
                className="w-full aspect-16/10 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-amber-400 block font-semibold">Témoignage Vérifié</span>
                <p className="text-xs font-medium text-stone-200 mt-0.5">
                  "Après 12 ans à Paris, j’ai reçu les clés de ma villa à la Cité Kaniba et mon Titre Foncier sans le moindre souci."
                </p>
                <span className="text-[11px] text-stone-400 block mt-1">M. & Mme Keïta · Résidents en Île-de-France</span>
              </div>
            </div>

            {/* Interactive Diaspora Yield Calculator */}
            <div className="p-5 rounded-2xl bg-stone-800/90 border border-stone-700 shadow-xl text-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-700">
                <div className="flex items-center gap-2 font-bold text-amber-400">
                  <Calculator className="w-4 h-4" />
                  <span className="text-sm">Simulateur Plus-Value Foncière Mali</span>
                </div>
                <span className="text-[11px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded font-mono font-bold">
                  +18% /an (Sirakoro)
                </span>
              </div>

              {/* Slider Budget */}
              <div className="space-y-1.5">
                <div className="flex justify-between font-medium">
                  <span className="text-stone-300">Votre Capital d'Investissement:</span>
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
                <div className="flex justify-between font-medium">
                  <span className="text-stone-300">Horizon de Détention:</span>
                  <span className="font-bold text-white font-mono">{yearsHolding} Ans</span>
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
                      {yr} ans
                    </button>
                  ))}
                </div>
              </div>

              {/* Calculated Result */}
              <div className="p-3.5 rounded-xl bg-stone-950 border border-stone-800 space-y-2">
                <div className="flex justify-between items-baseline">
                  <span className="text-stone-400">Valeur Patrimoniale Estimée:</span>
                  <span className="text-base sm:text-lg font-bold text-emerald-400 font-mono">
                    ~{Math.round(estimatedFutureEur).toLocaleString('fr-FR')} €
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-[11px]">
                  <span className="text-stone-400">Gain Net Potentiel:</span>
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
