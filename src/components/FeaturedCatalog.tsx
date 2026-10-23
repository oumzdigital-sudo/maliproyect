import React, { useState } from 'react';
import { 
  MapPin, 
  Maximize2, 
  FileCheck2, 
  MessageSquare, 
  ArrowUpRight, 
  Layers
} from 'lucide-react';
import { Property, PropertyType, CurrencyCode, Language } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';
import { CONTACT_INFO } from '../data/mockData';
import { TRANSLATIONS } from '../i18n/translations';

interface FeaturedCatalogProps {
  properties: Property[];
  currency: CurrencyCode;
  language: Language;
  onSelectProperty: (property: Property) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FeaturedCatalog: React.FC<FeaturedCatalogProps> = ({
  properties,
  currency,
  language,
  onSelectProperty,
  selectedCategory,
  onSelectCategory,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'surface'>('featured');
  const [onlyTitreFoncier, setOnlyTitreFoncier] = useState(false);

  const t = TRANSLATIONS[language];

  // Filter properties
  const filtered = properties.filter((prop) => {
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'terreno' && prop.type !== 'terreno') return false;
      if (selectedCategory === 'casa' && prop.type !== 'casa') return false;
      if (selectedCategory === 'construccion' && prop.type !== 'construccion' && prop.type !== 'casa') return false;
      if (selectedCategory === 'chateau_ferme' && prop.type !== 'chateau_ferme') return false;
    }
    if (selectedZone !== 'all' && prop.zone !== selectedZone) {
      return false;
    }
    if (onlyTitreFoncier && !prop.documentType.includes('Titre Foncier')) {
      return false;
    }
    return true;
  });

  // Sort properties
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'priceAsc') return a.priceFCFA - b.priceFCFA;
    if (sortBy === 'priceDesc') return b.priceFCFA - a.priceFCFA;
    if (sortBy === 'surface') return b.surfaceM2 - a.surfaceM2;
    return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
  });

  const categories = [
    { id: 'all', label: t.catalog.catAll },
    { id: 'terreno', label: t.catalog.catLand },
    { id: 'casa', label: t.catalog.catHouse },
    { id: 'chateau_ferme', label: t.catalog.catFarm },
  ];

  return (
    <section id="catalogo" className="py-12 sm:py-20 bg-stone-50 dark:bg-stone-950 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Editorial Section Header with Mali flag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
              <span className="text-sm">🇲🇱</span>
              <Layers className="w-3.5 h-3.5" />
              <span>{t.catalog.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
              {t.catalog.title}
            </h2>
            <p className="mt-2 text-xs sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
              {t.catalog.subtitle}
            </p>
          </div>

          <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            <span>{sorted.length} {t.catalog.countVerified}</span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-8 p-3 sm:p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-xs overflow-hidden">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-900 text-amber-300 dark:bg-amber-500 dark:text-stone-950 shadow-xs'
                    : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 bg-stone-100 dark:bg-stone-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Sub-filters & Sorting */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
            
            <div className="flex flex-wrap items-center gap-2">
              {/* Zone Filter */}
              <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 px-2.5 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="bg-transparent text-xs font-medium text-stone-800 dark:text-stone-200 focus:outline-none"
                >
                  <option value="all">{t.catalog.allZonesOption}</option>
                  <option value="Sirakoro">Sirakoro & Cité Kaniba</option>
                  <option value="Dialakorobougou">Dialakorobougou</option>
                  <option value="Sotuba">Sotuba ACI</option>
                  <option value="Sanankoroba">Sanankoroba</option>
                </select>
              </div>

              {/* Titre Foncier toggle checkbox */}
              <label className="flex items-center gap-2 cursor-pointer bg-stone-100 dark:bg-stone-800 px-2.5 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 select-none">
                <input
                  type="checkbox"
                  checked={onlyTitreFoncier}
                  onChange={(e) => setOnlyTitreFoncier(e.target.checked)}
                  className="rounded text-emerald-800 focus:ring-emerald-700"
                />
                <span className="font-semibold text-emerald-900 dark:text-amber-400 flex items-center gap-1">
                  <span>🇲🇱</span>
                  <span>{t.catalog.onlyTf}</span>
                </span>
              </label>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5">
              <span className="text-stone-500 dark:text-stone-400">{t.catalog.sortBy}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-2.5 py-1.5 rounded-lg text-xs font-medium text-stone-800 dark:text-stone-200 focus:outline-none"
              >
                <option value="featured">{t.catalog.sortFeatured}</option>
                <option value="priceAsc">{t.catalog.sortPriceAsc}</option>
                <option value="priceDesc">{t.catalog.sortPriceDesc}</option>
                <option value="surface">{t.catalog.sortSurface}</option>
              </select>
            </div>

          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {sorted.map((property) => {
            const title = property.title[language] || property.title.es;
            const desc = property.description[language] || property.description.es;
            const badge = property.badgeLabel?.[language] || property.badgeLabel?.es;

            const whatsAppMsg = 
              language === 'es'
                ? `Hola Groupe Kaniba, deseo información sobre la propiedad: ${title} en ${property.location} (Réf: ${property.id}). 🇲🇱`
                : language === 'en'
                ? `Hello Groupe Kaniba, I would like information regarding the property: ${title} in ${property.location} (Ref: ${property.id}). 🇲🇱`
                : `Bonjour Groupe Kaniba, je souhaite me renseigner sur le bien: ${title} à ${property.location} (Réf: ${property.id}). 🇲🇱`;
            
            return (
              <div
                key={property.id}
                className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-amber-500/50 dark:hover:border-amber-400/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-full"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={property.imageUrl}
                    alt={title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none" />

                  {/* Document Type Label with Mali Flag */}
                  <div className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-xs border border-amber-400/30">
                    <span>🇲🇱</span>
                    <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{property.documentType}</span>
                  </div>

                  {/* Surface Badge */}
                  <div className="absolute bottom-2.5 right-3 text-white text-xs font-mono font-semibold flex items-center gap-1 drop-shadow-md">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>{property.surfaceM2} m²</span>
                  </div>

                  {/* Optional Status / Commercial badge */}
                  {badge && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {badge}
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & TF Number */}
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                      <span className="flex items-center gap-1 text-emerald-800 dark:text-emerald-400 font-medium truncate max-w-[200px]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{property.location}</span>
                      </span>
                      {property.tfNumber && (
                        <span className="font-mono text-[10px] sm:text-[11px] text-stone-400 dark:text-stone-500 shrink-0">
                          {property.tfNumber.split('(')[0]}
                        </span>
                      )}
                    </div>

                    {/* Property Title */}
                    <h3 
                      onClick={() => onSelectProperty(property)}
                      className="text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-800 dark:hover:text-amber-400 cursor-pointer transition-colors line-clamp-1"
                    >
                      {title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                      {desc}
                    </p>
                  </div>

                  {/* Price and Action Bar */}
                  <div className="mt-4 pt-3.5 border-t border-stone-100 dark:border-stone-800">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[10px] text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                          {t.catalog.officialPrice}
                        </span>
                        <span className="text-lg sm:text-xl font-extrabold text-emerald-950 dark:text-amber-400 font-mono tabular-nums">
                          {formatCurrency(property.priceFCFA, currency)}
                        </span>
                      </div>

                      {currency !== 'XOF' && (
                        <span className="text-[10px] sm:text-[11px] font-mono text-stone-400">
                          {formatCurrency(property.priceFCFA, 'XOF')}
                        </span>
                      )}
                    </div>

                    {/* Actions: View Details + WhatsApp */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProperty(property)}
                        className="w-full py-2 px-2.5 text-xs font-semibold rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors flex items-center justify-center gap-1"
                      >
                        <span>{t.catalog.btnDetails}</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, whatsAppMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-2.5 text-xs font-semibold rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-1 shadow-xs text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                        <span>{t.catalog.btnReserve}</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if filter doesn't match */}
        {sorted.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8">
            <p className="text-base font-semibold text-stone-800 dark:text-stone-200">
              {t.catalog.emptyTitle}
            </p>
            <p className="text-xs text-stone-500 mt-1">
              {t.catalog.emptySub}
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSelectedZone('all');
                setOnlyTitreFoncier(false);
              }}
              className="mt-4 px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-lg"
            >
              {t.catalog.btnReset}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
