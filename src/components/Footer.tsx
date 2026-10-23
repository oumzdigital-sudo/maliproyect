import React from 'react';
import { 
  Building2, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  language: Language;
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 transition-colors pt-12 sm:pt-16 pb-24 lg:pb-16 text-xs w-full max-w-full overflow-hidden">
      
      {/* Mali Flag Ribbon at top of footer */}
      <div className="w-full h-1 flex mb-8">
        <div className="flex-1 bg-emerald-600" />
        <div className="flex-1 bg-amber-400" />
        <div className="flex-1 bg-red-600" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-stone-800">
          
          {/* Brand & Vision */}
          <div className="lg:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-500/30 relative">
                <span>K</span>
                <span className="absolute -bottom-1 -right-1 text-xs">🇲🇱</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white flex items-center gap-1.5">
                  <span>GROUPE KANIBA</span>
                  <span className="text-xs">🇲🇱</span>
                </span>
                <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                  {t.footer.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed max-w-md text-xs">
              {t.footer.about}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white rounded-xl flex items-center gap-2 transition-colors text-xs"
              >
                <span className="font-bold">{t.footer.btnTiktok}</span>
                <span className="text-amber-400">873K 🇲🇱</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="https://wa.me/22370156565"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-700 text-emerald-300 rounded-xl flex items-center gap-2 transition-colors text-xs"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.footer.btnWhatsApp}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-1.5">
              <span>🇲🇱</span>
              <span>{t.footer.navTitle}</span>
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {t.nav.properties}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mapa')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {t.nav.map}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('construccion')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {t.nav.construction}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diaspora')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {t.nav.diaspora}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seguimiento')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  {t.nav.tracking}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-1.5">
              <span>🇲🇱</span>
              <span>{t.footer.contactTitle}</span>
            </h4>
            
            <div className="space-y-2 text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-white font-semibold">+223 70 15 65 65 / +223 95 95 95 62</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t.maliIdentity.republic} · Études Notariales Partenaires</span>
              </p>
            </div>

            <div className="pt-2 text-[11px] text-stone-500">
              {t.footer.hours}
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-stone-500 text-[10px] sm:text-[11px]">
          <p>{t.footer.copyright}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center">
            {t.footer.legalItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <span>·</span>}
                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
