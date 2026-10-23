import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Maximize2, 
  FileCheck2, 
  ShieldCheck, 
  MessageSquare, 
  Check, 
  Calendar,
  CreditCard,
  PhoneCall,
  Share2
} from 'lucide-react';
import { Property, CurrencyCode, Language } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';
import { CONTACT_INFO } from '../data/mockData';
import { TRANSLATIONS } from '../i18n/translations';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  currency: CurrencyCode;
  language: Language;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  currency,
  language,
}) => {
  if (!property) return null;

  const t = TRANSLATIONS[language];
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [monthsTerm, setMonthsTerm] = useState<number>(12);
  const [copiedLink, setCopiedLink] = useState(false);

  const images = property.gallery && property.gallery.length > 0 ? property.gallery : [property.imageUrl];

  // Financing calculation
  const downPayment = (property.priceFCFA * downPaymentPercent) / 100;
  const remaining = property.priceFCFA - downPayment;
  const monthlyPayment = monthsTerm > 0 ? remaining / monthsTerm : 0;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const propertyTitle = property.title[language] || property.title.es;
  const propertyDesc = property.description[language] || property.description.es;
  const propertyFeatures = property.features[language] || property.features.es;

  const whatsAppMessage = 
    language === 'es'
      ? `Hola Groupe Kaniba, deseo información sobre la propiedad "${propertyTitle}" (${property.location}, Precio: ${formatCurrency(property.priceFCFA, 'XOF')}, Réf: ${property.id}). 🇲🇱`
      : language === 'en'
      ? `Hello Groupe Kaniba, I would like details about the property "${propertyTitle}" (${property.location}, Price: ${formatCurrency(property.priceFCFA, 'XOF')}, Ref: ${property.id}). 🇲🇱`
      : `Bonjour Groupe Kaniba, je souhaite réserver ou visiter la propriété "${propertyTitle}" (${property.location}, Prix: ${formatCurrency(property.priceFCFA, 'XOF')}, Réf: ${property.id}). 🇲🇱`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 my-4 sm:my-8 max-h-[92vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto w-full">
          
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-7 bg-stone-950 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Main Preview Photo */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-stone-800">
                <img
                  src={images[activeImageIndex] || property.imageUrl}
                  alt={propertyTitle}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                
                {/* Document Badge overlay with Mali flag */}
                <div className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 backdrop-blur-md text-xs font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 border border-amber-400/30">
                  <span>🇲🇱</span>
                  <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{property.documentType}</span>
                </div>

                {property.tfNumber && (
                  <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-stone-300 px-2.5 py-1 rounded-md">
                    {property.tfNumber}
                  </div>
                )}
              </div>

              {/* Thumbnails Strip */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 mt-3 overflow-x-auto pb-1">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        activeImageIndex === idx ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Miniature" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Legal Guarantee Banner */}
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/60 border border-emerald-800/40 text-stone-200">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                    <span>{t.modal.certifiedLegal}</span>
                  </p>
                  <p className="text-xs text-stone-300 mt-0.5 leading-relaxed">
                    {t.modal.certifiedLegalSub}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Actions */}
          <div className="lg:col-span-5 p-4 sm:p-6 flex flex-col justify-between bg-white dark:bg-stone-900">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                <span className="uppercase tracking-wider font-semibold text-emerald-800 dark:text-amber-400">
                  {property.type === 'terreno' ? t.catalog.catLand : property.type === 'casa' ? t.catalog.catHouse : t.catalog.catFarm}
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  ● {property.status === 'disponible' ? t.modal.immediateAvailable : t.modal.underOption}
                </span>
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white leading-snug">
                {propertyTitle}
              </h2>

              <p className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 mt-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{property.location}</span>
              </p>

              {/* Price & Surface KPI box */}
              <div className="mt-3.5 p-3.5 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-700/60 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-stone-500 dark:text-stone-400 block font-medium">
                    {t.modal.acquisitionPrice}
                  </span>
                  <span className="text-lg sm:text-2xl font-extrabold text-emerald-950 dark:text-amber-400 font-mono tabular-nums">
                    {formatCurrency(property.priceFCFA, currency)}
                  </span>
                  {currency !== 'XOF' && (
                    <span className="text-[10px] text-stone-500 block font-mono">
                      ({t.modal.equivalent} {formatCurrency(property.priceFCFA, 'XOF')})
                    </span>
                  )}
                </div>
                <div className="text-right border-l border-stone-200 dark:border-stone-700 pl-4">
                  <span className="text-[11px] text-stone-500 dark:text-stone-400 block font-medium">
                    {t.modal.surfaceArea}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-stone-900 dark:text-white font-mono tabular-nums">
                    {property.surfaceM2} m²
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                {propertyDesc}
              </p>

              {/* Key Features */}
              <div className="mt-3 space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  {t.modal.featuresTitle}
                </h3>
                <div className="grid grid-cols-1 gap-1 text-xs text-stone-700 dark:text-stone-300">
                  {propertyFeatures.map((feat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Schedule Simulator */}
              <div className="mt-4 p-3 bg-stone-100 dark:bg-stone-800 rounded-xl text-xs space-y-2 border border-stone-200 dark:border-stone-700">
                <div className="flex items-center justify-between font-semibold text-stone-800 dark:text-stone-200">
                  <span className="flex items-center gap-1.5 text-[11px] sm:text-xs">
                    <CreditCard className="w-3.5 h-3.5 text-amber-500" />
                    {t.modal.simulatorTitle}
                  </span>
                  <span className="text-emerald-700 dark:text-amber-400 font-mono text-xs">
                    {monthsTerm} {t.modal.monthsLabel}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-stone-500">{t.modal.downPaymentLabel} ({downPaymentPercent}%):</span>
                    <p className="font-bold font-mono text-stone-800 dark:text-stone-200">
                      {formatCurrency(downPayment, currency)}
                    </p>
                  </div>
                  <div>
                    <span className="text-stone-500">{t.modal.monthlyPaymentLabel}:</span>
                    <p className="font-bold font-mono text-emerald-800 dark:text-amber-400">
                      {formatCurrency(monthlyPayment, currency)} {t.modal.perMonth}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1.5 pt-1">
                  {[6, 12, 18].map((term) => (
                    <button
                      key={term}
                      onClick={() => setMonthsTerm(term)}
                      className={`flex-1 py-1 rounded text-[11px] font-semibold transition-colors ${
                        monthsTerm === term ? 'bg-emerald-800 text-white' : 'bg-white dark:bg-stone-700 text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      {term} {t.modal.monthsLabel}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-5 pt-3 border-t border-stone-200 dark:border-stone-800 space-y-2">
              <a
                href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 sm:py-3 px-4 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors text-center"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>{t.modal.btnReserveWhatsApp}</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${CONTACT_INFO.whatsappPrimary}`}
                  className="flex-1 py-2 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
                  <span>{t.modal.btnCallAdvisor}</span>
                </a>

                <button
                  onClick={handleCopyLink}
                  className="py-2 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  title="Partager"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? t.modal.copied : t.modal.btnShare}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
