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
import { Property, CurrencyCode } from '../types';
import { formatCurrency, generateWhatsAppLink } from '../utils/formatters';
import { CONTACT_INFO } from '../data/mockData';

interface PropertyDetailModalProps {
  property: Property | null;
  onClose: () => void;
  currency: CurrencyCode;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  currency,
}) => {
  if (!property) return null;

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

  const whatsAppMessage = `Bonjour Groupe Kaniba, je souhaite réserver ou visiter la propriété "${property.title}" (${property.location}, Prix: ${formatCurrency(property.priceFCFA, 'XOF')}, Réf: ${property.id}). Pouvez-vous me transmettre les modalités ?`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800 my-8"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center backdrop-blur-md transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Media Gallery */}
          <div className="lg:col-span-7 bg-stone-950 p-4 sm:p-6 flex flex-col justify-between">
            <div>
              {/* Main Preview Photo */}
              <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-stone-800">
                <img
                  src={images[activeImageIndex] || property.imageUrl}
                  alt={property.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-all duration-300"
                />
                
                {/* Document Badge overlay */}
                <div className="absolute top-3 left-3 bg-emerald-900/90 text-amber-300 backdrop-blur-md text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5 border border-amber-400/30">
                  <FileCheck2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>{property.documentType}</span>
                </div>

                {property.tfNumber && (
                  <div className="absolute bottom-3 left-3 bg-stone-900/80 backdrop-blur-md text-[11px] font-mono text-stone-300 px-2.5 py-1 rounded-md">
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
                      className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
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
            <div className="mt-4 p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-800/40 text-stone-200">
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase tracking-wider">Sécurité Juridique Certifiée</p>
                  <p className="text-xs text-stone-300 mt-0.5">
                    Acte authentique par notaire partenaire ({CONTACT_INFO.notaryPartners[0]}). Bornage officiel et certificat de non-litige cadastral.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Specs & Actions */}
          <div className="lg:col-span-5 p-6 flex flex-col justify-between bg-white dark:bg-stone-900">
            <div>
              {/* Header Info */}
              <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400 mb-1.5">
                <span className="uppercase tracking-wider font-semibold text-emerald-800 dark:text-amber-400">
                  {property.type === 'terreno' ? 'Terrain Résidentiel' : property.type === 'casa' ? 'Villa / Chalet' : 'Projet Kaniba'}
                </span>
                <span className="capitalize font-medium text-emerald-600 dark:text-emerald-400">
                  ● {property.status === 'disponible' ? 'Disponible Immédiatement' : 'Sous Option'}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 dark:text-white leading-snug">
                {property.title}
              </h2>

              <p className="flex items-center gap-1.5 text-xs text-stone-600 dark:text-stone-300 mt-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{property.location}</span>
              </p>

              {/* Price & Surface KPI box */}
              <div className="mt-4 p-3.5 bg-stone-50 dark:bg-stone-800/60 rounded-xl border border-stone-200 dark:border-stone-700/60 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-500 dark:text-stone-400 block font-medium">Prix d'acquisition</span>
                  <span className="text-xl sm:text-2xl font-extrabold text-emerald-900 dark:text-amber-400 font-mono tabular-nums">
                    {formatCurrency(property.priceFCFA, currency)}
                  </span>
                  {currency !== 'XOF' && (
                    <span className="text-[11px] text-stone-500 block font-mono">
                      (Équivaut à {formatCurrency(property.priceFCFA, 'XOF')})
                    </span>
                  )}
                </div>
                <div className="text-right border-l border-stone-200 dark:border-stone-700 pl-4">
                  <span className="text-xs text-stone-500 dark:text-stone-400 block font-medium">Superficie</span>
                  <span className="text-lg font-bold text-stone-900 dark:text-white font-mono tabular-nums">
                    {property.surfaceM2} m²
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {property.description}
              </p>

              {/* Key Features */}
              <div className="mt-4 space-y-1.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400">
                  Caractéristiques Incluses
                </h3>
                <div className="grid grid-cols-1 gap-1 text-xs text-stone-700 dark:text-stone-300">
                  {property.features.map((feat, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Schedule Simulator */}
              <div className="mt-5 p-3.5 bg-stone-100 dark:bg-stone-800 rounded-xl text-xs space-y-2 border border-stone-200 dark:border-stone-700">
                <div className="flex items-center justify-between font-semibold text-stone-800 dark:text-stone-200">
                  <span className="flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5 text-amber-500" />
                    Simulateur Échelonnement (Sans Frais)
                  </span>
                  <span className="text-emerald-700 dark:text-amber-400 font-mono">
                    {monthsTerm} Mois
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div>
                    <span className="text-stone-500">Acompte ({downPaymentPercent}%):</span>
                    <p className="font-bold font-mono text-stone-800 dark:text-stone-200">
                      {formatCurrency(downPayment, currency)}
                    </p>
                  </div>
                  <div>
                    <span className="text-stone-500">Mensualité:</span>
                    <p className="font-bold font-mono text-emerald-800 dark:text-amber-400">
                      {formatCurrency(monthlyPayment, currency)} /mois
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
                      {term} mois
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-stone-200 dark:border-stone-800 space-y-2">
              <a
                href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, whatsAppMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-800 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-amber-300" />
                <span>Réserver via WhatsApp Officiel</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`tel:${CONTACT_INFO.whatsappPrimary}`}
                  className="flex-1 py-2.5 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
                  <span>Appeler Conseiller</span>
                </a>

                <button
                  onClick={handleCopyLink}
                  className="py-2.5 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  title="Partager"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Copié !' : 'Partager'}</span>
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
