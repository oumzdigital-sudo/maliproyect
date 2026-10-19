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
import { PropertyType } from '../types';

interface HeroSectionProps {
  onSearch: (type: PropertyType, zone: string, maxPrice: number) => void;
  onExploreMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onSearch, onExploreMap }) => {
  const [activeTab, setActiveTab] = useState<PropertyType>('terreno');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [budgetTier, setBudgetTier] = useState<number>(100000000);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(activeTab, selectedZone, budgetTier);
  };

  return (
    <section className="relative min-h-[620px] lg:min-h-[720px] flex flex-col justify-between overflow-hidden bg-stone-900 text-white">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroCiteKaniba}
          alt="La Cité Kaniba - Bamako et Sirakoro"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-102 transform duration-1000"
        />
        {/* Measured dark gradient scrim for 4.5:1 text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        <div className="absolute inset-0 bg-emerald-950/25 mix-blend-multiply" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24 flex-1 flex flex-col justify-center">
        
        {/* Editorial Trust Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-300 mb-4 tracking-wide uppercase">
          <ShieldCheck className="w-4 h-4 text-amber-400" />
          <span>Groupe Kaniba · Garantie Titre Foncier & Acte Notarié à Bamako</span>
        </div>

        {/* H1 Impactful Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl text-balance leading-tight drop-shadow-xs">
          Tu terreno seguro y la casa de tus sueños en Bamako y Sirakoro.
        </h1>

        <p className="mt-4 text-base sm:text-lg lg:text-xl text-stone-200 max-w-2xl text-pretty font-normal drop-shadow-xs">
          Accede a parcelas 100% legalizadas con Titre Foncier, chalets modernos en 
          <span className="font-semibold text-amber-300"> La Cité Kaniba</span> y construcción 
          llave en mano con acompañamiento notarial exclusivo para residentes y la diáspora.
        </p>

        {/* Fast Search Card */}
        <div className="mt-8 sm:mt-10 max-w-3xl w-full bg-white/95 dark:bg-stone-900/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 shadow-2xl border border-stone-200/50 dark:border-stone-800 text-stone-900 dark:text-stone-100">
          
          {/* 3 Simple Fast Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-800 rounded-xl mb-5">
            <button
              type="button"
              onClick={() => setActiveTab('terreno')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'terreno'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Comprar Terreno</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('casa')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'casa'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <Building className="w-4 h-4" />
              <span>Comprar Casa</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('construccion')}
              className={`flex-1 py-2.5 px-3 text-xs sm:text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap ${
                activeTab === 'construccion'
                  ? 'bg-emerald-800 text-white shadow-sm'
                  : 'text-stone-600 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white'
              }`}
            >
              <KeyRound className="w-4 h-4" />
              <span>Construcción</span>
            </button>
          </div>

          {/* Search Filter Inputs */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            
            {/* Zone Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
                Ubicación
              </label>
              <select
                value={selectedZone}
                onChange={(e) => setSelectedZone(e.target.value)}
                className="w-full text-sm font-medium bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg py-2.5 px-3 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value="all">Todas las zonas (Bamako & Sirakoro)</option>
                <option value="Sirakoro">Sirakoro Meguetana & Cité Kaniba</option>
                <option value="Dialakorobougou">Dialakorobougou</option>
                <option value="Sotuba">Sotuba ACI</option>
                <option value="Sanankoroba">Sanankoroba (Fermes & Champs)</option>
                <option value="Kati">Kati & Koulikoro</option>
              </select>
            </div>

            {/* Budget Selector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-600 dark:text-stone-400">
                Presupuesto Máximo
              </label>
              <select
                value={budgetTier}
                onChange={(e) => setBudgetTier(Number(e.target.value))}
                className="w-full text-sm font-medium bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 rounded-lg py-2.5 px-3 text-stone-800 dark:text-stone-100 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              >
                <option value={100000000}>Cualquier presupuesto</option>
                <option value={10000000}>Hasta 10 000 000 FCFA (~15 000 €)</option>
                <option value={20000000}>Hasta 20 000 000 FCFA (~30 500 €)</option>
                <option value={45000000}>Hasta 45 000 000 FCFA (~68 600 €)</option>
                <option value={80000000}>Hasta 80 000 000 FCFA (~122 000 €)</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex items-end gap-2">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm rounded-lg shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4" />
                <span>Buscar</span>
              </button>
            </div>
          </form>

          {/* Quick link to interactive map */}
          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              100% de expedientes con Título Foncier verificado
            </span>
            <button
              type="button"
              onClick={onExploreMap}
              className="text-emerald-800 dark:text-amber-400 font-semibold hover:underline flex items-center gap-1"
            >
              <span>Ver en el mapa interactivo</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Proof Banner: 4-Item strip */}
      <div className="relative z-10 w-full bg-stone-950/80 backdrop-blur-md border-t border-white/10 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Titre Foncier (TF)</p>
              <p className="text-[11px] text-stone-400">Garantía jurídica absoluta</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">La Cité Kaniba</p>
              <p className="text-[11px] text-stone-400">Chalets modernos en Sirakoro</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">+870K Seguidores</p>
              <p className="text-[11px] text-stone-400">Líder inmobiliario en TikTok Mali</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-900/60 border border-emerald-500/30 flex items-center justify-center shrink-0 text-amber-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Guichet Diáspora</p>
              <p className="text-[11px] text-stone-400">Compra segura a distancia</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
