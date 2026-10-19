import React, { useState } from 'react';
import { 
  MapPin, 
  Maximize2, 
  FileCheck2, 
  MessageSquare, 
  ArrowUpRight, 
  Filter, 
  CheckCircle,
  SlidersHorizontal,
  Layers
} from 'lucide-react';
import { Property, PropertyType, CurrencyCode } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';
import { CONTACT_INFO } from '../data/mockData';

interface FeaturedCatalogProps {
  properties: Property[];
  currency: CurrencyCode;
  onSelectProperty: (property: Property) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const FeaturedCatalog: React.FC<FeaturedCatalogProps> = ({
  properties,
  currency,
  onSelectProperty,
  selectedCategory,
  onSelectCategory,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'priceAsc' | 'priceDesc' | 'surface'>('featured');
  const [onlyTitreFoncier, setOnlyTitreFoncier] = useState(false);

  // Filter properties
  const filtered = properties.filter((prop) => {
    // Category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'terreno' && prop.type !== 'terreno') return false;
      if (selectedCategory === 'casa' && prop.type !== 'casa') return false;
      if (selectedCategory === 'construccion' && prop.type !== 'construccion' && prop.type !== 'casa') return false;
      if (selectedCategory === 'chateau_ferme' && prop.type !== 'chateau_ferme') return false;
    }
    // Zone filter
    if (selectedZone !== 'all' && prop.zone !== selectedZone) {
      return false;
    }
    // Titre foncier only
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
    { id: 'all', label: 'Toutes les Offres' },
    { id: 'terreno', label: 'Terrains (Sirakoro & Bamako)' },
    { id: 'casa', label: 'Villas & Chalets Cité Kaniba' },
    { id: 'chateau_ferme', label: 'Champs & Fermes' },
  ];

  return (
    <section id="catalogo" className="py-16 sm:py-20 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
              <Layers className="w-3.5 h-3.5" />
              <span>Catalogue Officiel Groupe Kaniba</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-stone-50 tracking-tight">
              Propriétés Réelles & Parcelles Bornées
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl">
              Chaque bien immobilier proposé est garanti avec Titre Foncier (TF) inattaquable, 
              vérifié auprès du cadastre et délivré par acte notarié officiel.
            </p>
          </div>

          <div className="text-xs text-stone-500 dark:text-stone-400 font-mono">
            <span>{sorted.length} bien(s) vérifié(s) disponible(s)</span>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-col gap-4 mb-8 p-3 sm:p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
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
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-stone-100 dark:border-stone-800 text-xs">
            
            <div className="flex flex-wrap items-center gap-2.5">
              {/* Zone Filter */}
              <div className="flex items-center gap-1.5 bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700">
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <select
                  value={selectedZone}
                  onChange={(e) => setSelectedZone(e.target.value)}
                  className="bg-transparent text-xs font-medium text-stone-800 dark:text-stone-200 focus:outline-none"
                >
                  <option value="all">Toutes les Localités</option>
                  <option value="Sirakoro">Sirakoro & Cité Kaniba</option>
                  <option value="Dialakorobougou">Dialakorobougou</option>
                  <option value="Sotuba">Sotuba ACI</option>
                  <option value="Sanankoroba">Sanankoroba</option>
                </select>
              </div>

              {/* Titre Foncier toggle checkbox */}
              <label className="flex items-center gap-2 cursor-pointer bg-stone-100 dark:bg-stone-800 px-3 py-1.5 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 select-none">
                <input
                  type="checkbox"
                  checked={onlyTitreFoncier}
                  onChange={(e) => setOnlyTitreFoncier(e.target.checked)}
                  className="rounded text-emerald-800 focus:ring-emerald-700"
                />
                <span className="font-semibold text-emerald-900 dark:text-amber-400">100% Titre Foncier</span>
              </label>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-stone-500 dark:text-stone-400">Trier par:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-800 dark:text-stone-200 focus:outline-none"
              >
                <option value="featured">En Vedette</option>
                <option value="priceAsc">Prix Croissant</option>
                <option value="priceDesc">Prix Décroissant</option>
                <option value="surface">Plus Grande Superficie</option>
              </select>
            </div>

          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sorted.map((property) => {
            const whatsAppMsg = `Bonjour Groupe Kaniba, je souhaite me renseigner sur le bien: ${property.title} à ${property.location} (Réf: ${property.id}).`;
            
            return (
              <div
                key={property.id}
                className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 hover:border-amber-500/50 dark:hover:border-amber-400/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-4/3 overflow-hidden bg-stone-100 dark:bg-stone-800">
                  <img
                    src={property.imageUrl}
                    alt={property.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Scrim at bottom of image */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/80 to-transparent pointer-events-none" />

                  {/* Document Type Label (Requirement) */}
                  <div className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide flex items-center gap-1.5 shadow-xs border border-amber-400/30">
                    <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>{property.documentType}</span>
                  </div>

                  {/* Surface Badge */}
                  <div className="absolute bottom-2.5 right-3 text-white text-xs font-mono font-semibold flex items-center gap-1 drop-shadow-md">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>{property.surfaceM2} m²</span>
                  </div>

                  {/* Optional Status / Commercial badge */}
                  {property.badgeLabel && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-stone-950 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-xs">
                      {property.badgeLabel}
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & TF Number */}
                    <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                      <span className="flex items-center gap-1 text-emerald-800 dark:text-emerald-400 font-medium truncate max-w-[200px]">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {property.location}
                      </span>
                      {property.tfNumber && (
                        <span className="font-mono text-[11px] text-stone-400 dark:text-stone-500">
                          {property.tfNumber.split('(')[0]}
                        </span>
                      )}
                    </div>

                    {/* Property Title */}
                    <h3 
                      onClick={() => onSelectProperty(property)}
                      className="text-lg font-bold text-stone-900 dark:text-stone-100 hover:text-emerald-800 dark:hover:text-amber-400 cursor-pointer transition-colors line-clamp-1"
                    >
                      {property.title}
                    </h3>

                    {/* Short Description */}
                    <p className="mt-2 text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  {/* Price and Action Bar */}
                  <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-[11px] text-stone-400 dark:text-stone-500 uppercase tracking-wider block">
                          Prix Officiel
                        </span>
                        <span className="text-xl font-extrabold text-emerald-950 dark:text-amber-400 font-mono tabular-nums">
                          {formatCurrency(property.priceFCFA, currency)}
                        </span>
                      </div>

                      {currency !== 'XOF' && (
                        <span className="text-[11px] font-mono text-stone-400">
                          {formatCurrency(property.priceFCFA, 'XOF')}
                        </span>
                      )}
                    </div>

                    {/* Actions: View Details + WhatsApp */}
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProperty(property)}
                        className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 transition-colors flex items-center justify-center gap-1.5"
                      >
                        <span>Fiche Complète</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, whatsAppMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-3 text-xs font-semibold rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center gap-1.5 shadow-xs text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
                        <span>Réserver</span>
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
              Aucune propriété ne correspond à ces critères spécifiques.
            </p>
            <p className="text-xs text-stone-500 mt-1">
              Contactez directement un agent au +223 70 15 65 65 pour des parcelles sur mesure.
            </p>
            <button
              onClick={() => {
                onSelectCategory('all');
                setSelectedZone('all');
                setOnlyTitreFoncier(false);
              }}
              className="mt-4 px-4 py-2 bg-emerald-800 text-white text-xs font-semibold rounded-lg"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
