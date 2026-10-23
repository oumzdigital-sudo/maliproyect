import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  ShieldCheck, 
  KeyRound, 
  Compass, 
  Building, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { ASSETS } from '../data/mockData';
import { PropertyType, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeroSectionProps {
  language: Language;
  onSearch: (type: PropertyType, zone: string, maxPrice: number) => void;
  onExploreMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  language, 
  onSearch, 
  onExploreMap 
}) => {
  const [activeTab, setActiveTab] = useState<PropertyType>('terreno');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [budgetTier, setBudgetTier] = useState<number>(100000000);

  const t = TRANSLATIONS[language];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(activeTab, selectedZone, budgetTier);
  };

  return (
    <section className="relative min-h-[580px] lg:min-h-[700px] w-full max-w-full flex flex-col justify-between overflow-hidden bg-stone-900 text-white">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={ASSETS.heroCiteKaniba}
          alt="La Cité Kaniba - Bamako et Sirakoro (Mali 🇲🇱)"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Measured dark gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/45" />
        <div className="absolute inset-0 bg-emerald-950/30 mix-blend-multiply" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-12 lg:pt-16 lg:pb-20 flex-1 flex flex-col justify-center">
        
        {/* Editorial Trust Badge with Mali Flag */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 mb-3 tracking-wide uppercase bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-amber-500/30 self-start">
          <span className="text-sm">🇲🇱</span>
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>{t.hero.trustBadge}</span>
        </div>

        {/* H1 Impactful Headline */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl leading-tight drop-shadow-xs">
          {t.hero.h1}
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-lg lg:text-xl text-stone-200 max-w-2xl font-normal drop-shadow-xs leading-relaxed">
          {t.hero.subtitle}
        </p>

        {/* Fast Search Card */}
        <div className="mt-6 sm:mt-8 max-w-3xl w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-stone-200/50 dark:border-stone-800 text-stone-900 dark:text-stone-100 overflow-hidden">
          
          {/* 3 Simple Fast Tabs */}
          <div className="flex items-center gap-1 sm:gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl mb-4 sm:mb-5 overflow-x-auto scrollbar-none">
            <button
              type="button"
              onClick={() => setActiveTab('terreno')}
              className={`flex-1 py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'terreno'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t.hero.tabLand}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('casa')}
              className={`flex-1 py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'casa'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <Building className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t.hero.tabHouse}</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('construccion')}
              className={`flex-1 py-2 sm:py-2.5 px-2.5 sm:px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'construccion'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <KeyRound className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{t.hero.tabConstruction}</span>
            </button>
          </div>

          {/* Search Filter Inputs */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            {/* Zone Selector */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
                <span>{t.hero.labelLocation}</span>
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg py-2 sm:py-2.5 px-3 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value="all">{t.hero.allZones}</option>
                <option value="Sirakoro">{t.hero.zoneSirakoro}</option>
                <option value="Dialakorobougou">{t.hero.zoneDialakorobougou}</option>
                <option value="Sotuba">{t.hero.zoneSotuba}</option>
                <option value="Sanankoroba">{t.hero.zoneSanankoroba}</option>
                <option value="Kati">{t.hero.zoneKati}</option>
              </select>
            </div>

            {/* Budget Selector */}
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                {t.hero.labelBudget}
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(Number(e.target.value))}
                className="w-full text-xs sm:text-sm font-medium bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg py-2 sm:py-2.5 px-3 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value={100000000}>{t.hero.anyBudget}</option>
                <option value={10000000}>{t.hero.upTo10m}</option>
                <option value={20000000}>{t.hero.upTo20m}</option>
                <option value={45000000}>{t.hero.upTo45m}</option>
                <option value={80000000}>{t.hero.upTo80m}</option>
              </select>
            </div>

            {/* Action Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2 sm:py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-xs sm:text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>{t.hero.btnSearch}</span>
              </button>
            </div>
          </form>

          {/* Quick link to interactive map */}
          <div className="mt-3.5 pt-3 border-t border-stone-100 dark:border-stone-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 dark:text-stone-400">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{t.hero.guaranteedTf}</span>
            </span>
            <button
              type="button"
              onClick={onExploreMap}
              className="text-emerald-800 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>{t.hero.exploreMap}</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Proof Banner: 4-Item strip */}
      <div className="relative z-10 w-full max-w-full bg-stone-950/85 backdrop-blur-md border-t border-white/10 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{t.hero.kpi1Title}</p>
              <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">{t.hero.kpi1Sub}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Building className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{t.hero.kpi2Title}</p>
              <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">{t.hero.kpi2Sub}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <KeyRound className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{t.hero.kpi3Title}</p>
              <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">{t.hero.kpi3Sub}</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{t.hero.kpi4Title}</p>
              <p className="text-[10px] sm:text-[11px] text-stone-400 truncate">{t.hero.kpi4Sub}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
