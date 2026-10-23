import React, { useState } from 'react';
import { 
  Hammer, 
  Building2, 
  ArrowRight, 
  Sliders, 
  HardHat, 
  Truck, 
  Wrench, 
  Sun
} from 'lucide-react';
import { ASSETS, CONTACT_INFO } from '../data/mockData';
import { generateWhatsAppLink } from '../utils/formatters';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ConstructionSectionProps {
  language: Language;
}

export const ConstructionSection: React.FC<ConstructionSectionProps> = ({ language }) => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const t = TRANSLATIONS[language];

  const stages = [
    {
      number: t.construction.stage1Number,
      title: t.construction.stage1Title,
      description: t.construction.stage1Desc,
      icon: HardHat,
    },
    {
      number: t.construction.stage2Number,
      title: t.construction.stage2Title,
      description: t.construction.stage2Desc,
      icon: Building2,
    },
    {
      number: t.construction.stage3Number,
      title: t.construction.stage3Title,
      description: t.construction.stage3Desc,
      icon: Wrench,
    },
    {
      number: t.construction.stage4Number,
      title: t.construction.stage4Title,
      description: t.construction.stage4Desc,
      icon: Sun,
    },
  ];

  return (
    <section id="construccion" className="py-12 sm:py-24 bg-white dark:bg-stone-900 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header with Mali Flag */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
            <span>🇲🇱</span>
            <Hammer className="w-3.5 h-3.5" />
            <span>{t.construction.badge}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
            {t.construction.title}
          </h2>
          <p className="mt-3 text-xs sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
            {t.construction.subtitle}
          </p>
        </div>

        {/* Interactive Before & After Visual Slider */}
        <div className="mb-12 sm:mb-16 bg-stone-950 rounded-2xl overflow-hidden shadow-2xl border border-stone-800 p-3 sm:p-6 lg:p-8 w-full max-w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 text-white">
            <div>
              <span className="text-[11px] sm:text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider flex items-center gap-1.5">
                <span>🇲🇱</span>
                <span>{t.construction.comparisonBadge}</span>
              </span>
              <h3 className="text-base sm:text-xl font-bold mt-0.5">
                {t.construction.comparisonTitle}
              </h3>
            </div>
            
            <div className="flex items-center gap-2 text-xs text-stone-400">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>{t.construction.dragHelper}</span>
            </div>
          </div>

          {/* Slider viewport container */}
          <div className="relative aspect-16/9 w-full max-w-full rounded-xl overflow-hidden select-none touch-none bg-stone-900">
            {/* "After" Image */}
            <img
              src={ASSETS.heroCiteKaniba}
              alt={t.construction.afterLabel}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-emerald-900/90 text-amber-300 text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg backdrop-blur-md border border-amber-400/30">
              {t.construction.afterLabel}
            </div>

            {/* "Before" Image with dynamic clip path */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={ASSETS.constructionProgress}
                alt={t.construction.beforeLabel}
                className="absolute inset-0 min-w-full w-full h-full object-cover"
                style={{ minWidth: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-stone-900/90 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg backdrop-blur-md border border-stone-700 whitespace-nowrap">
                {t.construction.beforeLabel}
              </div>
            </div>

            {/* Draggable Divider Bar */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-amber-400 cursor-ew-resize z-20 shadow-[0_0_15px_rgba(245,158,11,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center font-bold text-xs shadow-lg">
                ↔
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Avant Après"
            />
          </div>

          {/* Slider bottom stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-5 pt-5 border-t border-stone-800 text-white text-xs">
            <div>
              <span className="text-stone-400 block text-[11px]">{t.construction.kpiDeliveryTitle}</span>
              <span className="font-bold font-mono text-amber-400 text-xs sm:text-sm">{t.construction.kpiDeliveryVal}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px]">{t.construction.kpiWarrantyTitle}</span>
              <span className="font-bold text-emerald-400 text-xs sm:text-sm">{t.construction.kpiWarrantyVal}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px]">{t.construction.kpiMaterialsTitle}</span>
              <span className="font-bold text-white text-xs sm:text-sm">{t.construction.kpiMaterialsVal}</span>
            </div>
            <div>
              <span className="text-stone-400 block text-[11px]">{t.construction.kpiFollowupTitle}</span>
              <span className="font-bold text-amber-400 text-xs sm:text-sm">{t.construction.kpiFollowupVal}</span>
            </div>
          </div>
        </div>

        {/* 4 Execution Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {stages.map((stg) => {
            const Icon = stg.icon;
            return (
              <div 
                key={stg.number}
                className="p-5 sm:p-6 rounded-2xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="font-mono text-xs font-extrabold text-amber-600 dark:text-amber-400">
                      {stg.number}
                    </span>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-900/10 dark:bg-emerald-900/40 text-emerald-800 dark:text-amber-400 flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                    {stg.title}
                  </h4>

                  <p className="mt-1.5 sm:mt-2 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                    {stg.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quincaillerie Kaniba Plus Banner */}
        <div className="rounded-2xl p-5 sm:p-8 bg-gradient-to-r from-emerald-950 via-stone-900 to-amber-950 text-white border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-5 shadow-xl w-full max-w-full overflow-hidden">
          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wide">
              <span>🇲🇱</span>
              <Truck className="w-4 h-4" />
              <span>{t.construction.hardwareBadge}</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-extrabold">
              {t.construction.hardwareTitle}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {t.construction.hardwareDesc}
            </p>
          </div>

          <a
            href={generateWhatsAppLink(
              CONTACT_INFO.whatsappPrimary,
              language === 'es'
                ? 'Hola Groupe Kaniba, deseo un presupuesto de construcción para una villa en Malí 🇲🇱.'
                : language === 'en'
                ? 'Hello Groupe Kaniba, I would like a quote for villa construction in Mali 🇲🇱.'
                : 'Bonjour Groupe Kaniba, je souhaite un devis pour la construction d’une villa ou pour des matériaux de quincaillerie (Mali 🇲🇱).'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 sm:px-6 sm:py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-colors whitespace-nowrap flex items-center gap-2 shrink-0 self-start sm:self-auto"
          >
            <span>{t.construction.btnQuote}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
