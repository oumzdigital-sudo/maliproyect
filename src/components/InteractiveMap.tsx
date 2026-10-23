import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  MapPin, 
  Building, 
  TreePine, 
  ExternalLink
} from 'lucide-react';
import { Property, CurrencyCode, Language } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';
import { CONTACT_INFO } from '../data/mockData';
import { TRANSLATIONS } from '../i18n/translations';

interface InteractiveMapProps {
  properties: Property[];
  currency: CurrencyCode;
  language: Language;
  onSelectProperty: (property: Property) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  properties,
  currency,
  language,
  onSelectProperty,
}) => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(properties[0]?.id || null);
  const [mapMode, setMapMode] = useState<'cadastral' | 'satellite'>('cadastral');
  const [filterType, setFilterType] = useState<string>('all');
  const [activeZone, setActiveZone] = useState<string>('all');

  const t = TRANSLATIONS[language];
  const selectedProperty = properties.find((p) => p.id === selectedPropertyId);

  // Filter properties for map
  const visibleProperties = properties.filter((p) => {
    if (filterType !== 'all' && p.type !== filterType) return false;
    if (activeZone !== 'all' && p.zone !== activeZone) return false;
    return true;
  });

  return (
    <section id="mapa" className="py-12 sm:py-20 bg-stone-100 dark:bg-stone-900 border-y border-stone-200 dark:border-stone-800 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Header with Mali Flag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
              <span>🇲🇱</span>
              <Compass className="w-3.5 h-3.5" />
              <span>{t.map.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              {t.map.title}
            </h2>
            <p className="mt-2 text-xs sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
              {t.map.subtitle}
            </p>
          </div>

          {/* Map Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMapMode('cadastral')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                mapMode === 'cadastral'
                  ? 'bg-emerald-900 text-amber-300 dark:bg-amber-500 dark:text-stone-950 shadow-xs'
                  : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400'
              }`}
            >
              {t.map.btnCadastral}
            </button>
            <button
              onClick={() => setMapMode('satellite')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                mapMode === 'satellite'
                  ? 'bg-emerald-900 text-amber-300 dark:bg-amber-500 dark:text-stone-950 shadow-xs'
                  : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-400'
              }`}
            >
              {t.map.btnSatellite}
            </button>
          </div>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4 p-2 sm:p-2.5 bg-white dark:bg-stone-800/80 rounded-xl border border-stone-200 dark:border-stone-700 text-xs overflow-hidden">
          <span className="font-semibold text-stone-700 dark:text-stone-300 mr-2 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.map.filterPins}</span>
          </span>

          <button
            onClick={() => setFilterType('all')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'all' ? 'bg-stone-900 text-white dark:bg-stone-200 dark:text-stone-900 font-semibold' : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            {t.map.allProperties} ({properties.length})
          </button>
          <button
            onClick={() => setFilterType('terreno')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'terreno' ? 'bg-emerald-800 text-white font-semibold' : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            {t.map.boundaryLands}
          </button>
          <button
            onClick={() => setFilterType('casa')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'casa' ? 'bg-emerald-800 text-white font-semibold' : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            {t.map.villasKaniba}
          </button>
          <button
            onClick={() => setFilterType('chateau_ferme')}
            className={`px-2.5 py-1 rounded-md transition-colors ${
              filterType === 'chateau_ferme' ? 'bg-emerald-800 text-white font-semibold' : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-700'
            }`}
          >
            {t.map.farmsOption}
          </button>
        </div>

        {/* Map Container Viewport */}
        <div className="relative w-full max-w-full h-[460px] sm:h-[520px] lg:h-[620px] rounded-2xl overflow-hidden shadow-xl border border-stone-300 dark:border-stone-700 bg-stone-900">
          
          {/* SVG Map Canvas */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              mapMode === 'cadastral' 
                ? 'bg-amber-50/15 dark:bg-stone-950' 
                : 'bg-emerald-950/90'
            }`}
          >
            <svg 
              className="w-full h-full object-cover" 
              viewBox="0 0 1000 700" 
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <pattern id="cadastreGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke={mapMode === 'cadastral' ? 'rgba(150,150,150,0.12)' : 'rgba(255,255,255,0.06)'} strokeWidth="1" />
                </pattern>
                
                <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#0369a1" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#075985" stopOpacity="0.95" />
                </linearGradient>

                <linearGradient id="citeKanibaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#059669" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#d97706" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              <rect width="1000" height="700" fill="url(#cadastreGrid)" />

              {/* Landmass */}
              <path 
                d="M 50,50 Q 200,80 400,60 T 800,90 L 950,200 L 950,650 L 50,650 Z" 
                fill={mapMode === 'cadastral' ? 'rgba(230,220,200,0.15)' : 'rgba(20,50,30,0.4)'} 
              />

              {/* River Niger */}
              <path
                d="M -20,280 C 150,260 280,310 420,380 C 560,450 720,410 880,360 C 940,340 1020,350 1040,360 L 1040,430 C 940,410 860,430 730,480 C 580,540 400,460 270,390 C 130,320 -10,350 -20,350 Z"
                fill="url(#riverGradient)"
                stroke="#38bdf8"
                strokeWidth="1.5"
                opacity="0.85"
              />

              {/* River Label */}
              <text x="320" y="340" fill="#bae6fd" fontSize="13" fontWeight="bold" letterSpacing="4" opacity="0.85">
                {t.map.riverNigerLabel}
              </text>

              {/* Bridges */}
              <line x1="380" y1="360" x2="360" y2="400" stroke="#f1f5f9" strokeWidth="3" strokeDasharray="2,2" />
              <text x="390" y="380" fill="#94a3b8" fontSize="9" fontWeight="bold">{t.map.pontMartyrs}</text>

              <line x1="450" y1="390" x2="435" y2="435" stroke="#f1f5f9" strokeWidth="3" strokeDasharray="2,2" />
              <text x="460" y="420" fill="#94a3b8" fontSize="9" fontWeight="bold">{t.map.pontFahd}</text>

              {/* Arterial Highway */}
              <path
                d="M 400,380 L 520,480 L 620,550 L 750,600 L 950,680"
                fill="none"
                stroke="#e2e8f0"
                strokeWidth="4"
                opacity="0.8"
              />
              <path
                d="M 400,380 L 520,480 L 620,550 L 750,600 L 950,680"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
                strokeDasharray="6,4"
              />
              <text x="680" y="575" fill="#fde68a" fontSize="10" fontWeight="bold">{t.map.rn6Label}</text>

              {/* Zone Highlight: Sirakoro & Cité Kaniba */}
              <ellipse 
                cx="620" 
                cy="560" 
                rx="140" 
                ry="80" 
                fill="url(#citeKanibaGlow)" 
                stroke="#10b981" 
                strokeWidth="2" 
                strokeDasharray="6,4" 
              />
              <text x="540" y="520" fill="#34d399" fontSize="13" fontWeight="bold">
                {t.map.perimeterSirakoro}
              </text>

              {/* Sotuba */}
              <circle cx="680" cy="330" r="45" fill="rgba(59,130,246,0.15)" stroke="#60a5fa" strokeWidth="1" strokeDasharray="4,2" />
              <text x="650" y="310" fill="#93c5fd" fontSize="11" fontWeight="bold">Sotuba ACI</text>

              {/* Dialakorobougou */}
              <circle cx="750" cy="510" r="50" fill="rgba(245,158,11,0.15)" stroke="#fbbf24" strokeWidth="1" strokeDasharray="4,2" />
              <text x="715" y="490" fill="#fcd34d" fontSize="11" fontWeight="bold">Dialakorobougou</text>

              {/* Landmarks */}
              <text x="320" y="240" fill="#cbd5e1" fontSize="12" fontWeight="bold">ACI 2000 (Siège Groupe Kaniba 🇲🇱)</text>
              <text x="180" y="290" fill="#94a3b8" fontSize="11">Sébénikoro</text>
              <text x="480" y="160" fill="#94a3b8" fontSize="11">Kati (Cadastre & Conservation 🇲🇱)</text>
              <text x="500" y="660" fill="#94a3b8" fontSize="11">Sanankoroba</text>
            </svg>
          </div>

          {/* Interactive Property Pins */}
          <div className="absolute inset-0 pointer-events-none">
            {visibleProperties.map((prop) => {
              const isSelected = prop.id === selectedPropertyId;
              
              return (
                <div
                  key={prop.id}
                  style={{ left: `${prop.coordinates.x}%`, top: `${prop.coordinates.y}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-full pointer-events-auto cursor-pointer group z-20"
                  onClick={() => setSelectedPropertyId(prop.id)}
                >
                  <div className="flex flex-col items-center">
                    <div className={`px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-bold font-mono tracking-tight whitespace-nowrap mb-1 shadow-md transition-all ${
                      isSelected
                        ? 'bg-amber-500 text-stone-950 scale-110'
                        : 'bg-stone-900 text-white group-hover:bg-emerald-800'
                    }`}>
                      {formatCurrency(prop.priceFCFA, currency)}
                    </div>

                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-transform duration-200 ${
                      isSelected
                        ? 'bg-amber-500 border-white scale-125 ring-4 ring-amber-500/30'
                        : 'bg-emerald-900 border-amber-400 group-hover:scale-110'
                    }`}>
                      {prop.type === 'terreno' ? (
                        <Compass className="w-3.5 h-3.5 text-white" />
                      ) : prop.type === 'casa' ? (
                        <Building className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <TreePine className="w-3.5 h-3.5 text-white" />
                      )}
                    </div>

                    <div className="w-2 h-1 bg-black/40 rounded-full blur-[1px] mt-0.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Map Compass & Legend */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 bg-stone-950/85 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-stone-800 text-white text-xs max-w-xs hidden sm:block">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 mb-1">
              <span>🇲🇱</span>
              <Compass className="w-4 h-4" />
              <span>{t.map.legendTitle}</span>
            </div>
            <p className="text-[11px] text-stone-300 leading-tight">
              {t.map.legendText}
            </p>
            <div className="flex items-center gap-3 mt-2 pt-2 border-t border-stone-800 text-[10px] text-stone-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" /> {t.map.legendCite}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" /> {t.map.legendTf}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" /> {t.map.legendRiver}
              </span>
            </div>
          </div>

          {/* Selected Property Popup Card */}
          {selectedProperty && (() => {
            const selectedTitle = selectedProperty.title[language] || selectedProperty.title.es || '';
            return (
              <div className="absolute bottom-3 inset-x-3 sm:inset-x-auto sm:right-4 sm:bottom-4 z-30 max-w-sm w-[calc(100%-1.5rem)] sm:w-full bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-700 p-3 sm:p-4 transition-all">
                <div className="flex gap-3">
                  <img
                    src={selectedProperty.imageUrl}
                    alt={selectedTitle}
                    className="w-18 h-18 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border border-stone-200 dark:border-stone-800"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                      <span className="text-emerald-700 dark:text-amber-400 font-semibold truncate flex items-center gap-1">
                        <span>🇲🇱</span>
                        <span>{selectedProperty.documentType}</span>
                      </span>
                      <span className="font-mono">{selectedProperty.surfaceM2} m²</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white truncate mt-0.5">
                      {selectedTitle}
                    </h4>

                    <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1 mt-0.5 truncate">
                      <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{selectedProperty.location}</span>
                    </p>

                    <div className="mt-1 text-xs sm:text-sm font-extrabold text-emerald-950 dark:text-amber-400 font-mono">
                      {formatCurrency(selectedProperty.priceFCFA, currency)}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-stone-100 dark:border-stone-800">
                  <button
                    onClick={() => onSelectProperty(selectedProperty)}
                    className="py-1.5 px-2.5 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold rounded-lg text-center truncate"
                  >
                    {t.map.btnSheetPlans}
                  </button>
                  <a
                    href={generateWhatsAppLink(
                      CONTACT_INFO.whatsappPrimary,
                      `Bonjour, je regarde la parcelle ${selectedTitle} sur la carte de Sirakoro/Bamako (Mali 🇲🇱).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-1.5 px-2.5 bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg text-center truncate"
                  >
                    {t.map.btnSheetWhatsApp}
                  </a>
                </div>
              </div>
            );
          })()}

        </div>

      </div>
    </section>
  );
};
