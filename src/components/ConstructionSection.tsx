import React, { useState } from 'react';
import { 
  Hammer, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Sliders,
  HardHat,
  Truck,
  Wrench,
  Sun
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/mockData';
import { generateWhatsAppLink } from '../utils/formatters';

export const ConstructionSection: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [activeTab, setActiveTab] = useState<'chalet' | 'duplex' | 'villa'>('chalet');

  const stages = [
    {
      number: '01',
      title: 'Étude & Cimentation Armée',
      description: 'Topographie au laser, semelles filantes en béton dosé à 350 kg/m³ et armatures anti-fissures garanties 10 ans.',
      icon: HardHat,
    },
    {
      number: '02',
      title: 'Élévation & Maçonnerie Pleine',
      description: 'Briques agglomérées vibrées de haute densité issues de la Quincaillerie Kaniba Plus pour une isolation thermique maximale.',
      icon: Building2,
    },
    {
      number: '03',
      title: 'Second Oeuvre & Finitions Luxe',
      description: 'Carrelage poli grès cérame, staff décoratif moderne, vitrage teinté anti-UV et plomberie multicouche sécurisée.',
      icon: Wrench,
    },
    {
      number: '04',
      title: 'Solaire & Remise Clés en Main',
      description: 'Kits solaires hybrides autonomes, forage avec château d’eau et remise solennelle des clés avec certificat notarié.',
      icon: Sun,
    },
  ];

  return (
    <section id="construccion" className="py-16 sm:py-24 bg-white dark:bg-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
            <Hammer className="w-3.5 h-3.5" />
            <span>Groupe Kaniba Construction & BTP</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight text-balance">
            De la Fondation au Dernier Carreau : Votre Maison Bâtie Sans Compromis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 dark:text-stone-300">
            Nous construisons votre villa sur votre propre terrain ou au sein de 
            <span className="font-semibold text-emerald-800 dark:text-amber-400"> La Cité Kaniba</span> avec 
            des matériaux rigoureusement sélectionnés auprès de notre quincaillerie agréée.
          </p>
        </div>

        {/* Interactive Before & After Visual Slider */}
        <div className="mb-16 bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 p-4 sm:p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 text-white">
            <div>
              <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
                Comparatif Chantier · Avant / Après Réalisation
              </span>
              <h3 className="text-lg sm:text-xl font-bold">
                Du Gros Oeuvre Brut à la Villa Livrée à Sirakoro
              </h3>
            </div>
            
            {/* Control helper */}
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Glissez le curseur pour comparer :</span>
            </div>
          </div>

          {/* Slider viewport container */}
          <div className="relative aspect-16/9 w-full rounded-xl overflow-hidden select-none touch-none">
            {/* "After" Image (Complete villa) */}
            <img
              src={ASSETS.heroCiteKaniba}
              alt="Villa finie Cité Kaniba"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-emerald-900/90 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md border border-amber-400/30">
              APRÈS : Villa Livrée & Habitée
            </div>

            {/* "Before" Image (Under construction) with dynamic clip path */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.constructionProgress}
                alt="Chantier en cours gros oeuvre"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 bg-stone-900/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg backdrop-blur-md border border-stone-700">
                AVANT : Gros Oeuvre & Piliers
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-xs shadow-lg">
                ↔
              </div>
            </div>

            {/* Slider invisible range input for accessibility and touch */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Ajuster comparateur avant après"
            />
          </div>

          {/* Slider bottom stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-stone-800 text-white text-xs">
            <div>
              <span className="text-stone-400 block">Délai Moyen de Livraison:</span>
              <span className="font-bold font-mono text-amber-400 text-sm">4 à 6 Mois Clés en Main</span>
            </div>
            <div>
              <span className="text-stone-400 block">Garantie Décennale:</span>
              <span className="font-bold text-emerald-400 text-sm">10 Ans Couverture Structure</span>
            </div>
            <div>
              <span className="text-stone-400 block">Fourniture Matériaux:</span>
              <span className="font-bold text-white text-sm">Quincaillerie Kaniba Plus</span>
            </div>
            <div>
              <span className="text-stone-400 block">Suivi Numérique:</span>
              <span className="font-bold text-amber-400 text-sm">Rapports Vidéo Hebdo</span>
            </div>
          </div>
        </div>

        {/* 4 Execution Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stages.map((stg) => {
            const Icon = stg.icon;
            return (
              <div 
                key={stg.number}
                className="p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-extrabold text-amber-600 dark:text-amber-400">
                      ÉTAPE {stg.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-emerald-900/10 dark:bg-emerald-900/40 text-emerald-800 dark:text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-stone-900 dark:text-white">
                    {stg.title}
                  </h4>

                  <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {stg.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quincaillerie Kaniba Plus Integration Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 text-white border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
              <Truck className="w-4 h-4" />
              <span>{CONTACT_INFO.hardwareStore}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Pas d’intermédiaires, pas de surcoûts sur le ciment et le fer
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Grâce à notre centrale d'approvisionnement directe à Bamako, vos chantiers bénéficient des tarifs grossistes sur le ciment Dangote/Diamond, les fers FE500 et les sanitaires européens.
            </p>
          </div>

          <a
            href={generateWhatsAppLink(
              CONTACT_INFO.whatsappPrimary,
              'Bonjour Groupe Kaniba, je souhaite un devis pour la construction d’une villa ou pour des matériaux de quincaillerie.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-sm rounded-xl shadow-lg transition-colors whitespace-nowrap flex items-center gap-2 shrink-0"
          >
            <span>Demander Devis de Construction</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
