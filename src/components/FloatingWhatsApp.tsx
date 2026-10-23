import React, { useState } from 'react';
import { MessageSquare, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { generateWhatsAppLink } from '../utils/formatters';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showPopup, setShowPopup] = useState(false);
  const t = TRANSLATIONS[language];

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-3 sm:right-6 z-40 flex flex-col items-end max-w-[calc(100vw-24px)]">
      
      {/* Agent Selector Popup */}
      {showPopup && (
        <div className="mb-2 sm:mb-3 w-72 sm:w-80 max-w-[calc(100vw-24px)] bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 p-3.5 sm:p-4 text-xs space-y-3 animate-in fade-in slide-in-from-bottom-3 overflow-hidden">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-stone-800">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900 dark:text-amber-400">
              <span className="text-sm">🇲🇱</span>
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>{t.floatingWhatsApp.title}</span>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
            {t.floatingWhatsApp.desc}
          </p>

          <div className="space-y-2">
            <a
              href={generateWhatsAppLink(
                CONTACT_INFO.whatsappPrimary,
                language === 'es'
                  ? 'Hola, deseo hablar con un asesor de ventas de Groupe Kaniba para la compra de una parcela o casa en Malí 🇲🇱.'
                  : language === 'en'
                  ? 'Hello, I would like to speak with a sales advisor from Groupe Kaniba for land or housing in Mali 🇲🇱.'
                  : 'Bonjour, je souhaite échanger avec un agent du Groupe Kaniba pour un achat de terrain ou maison au Mali 🇲🇱.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-white transition-colors"
            >
              <div className="min-w-0 pr-2">
                <span className="font-bold block text-xs truncate flex items-center gap-1">
                  <span>🇲🇱</span>
                  <span>{t.floatingWhatsApp.agentBamakoTitle}</span>
                </span>
                <span className="text-[11px] text-stone-500 font-mono">+223 70 15 65 65</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-bold shrink-0">
                WhatsApp
              </span>
            </a>

            <a
              href={generateWhatsAppLink(
                CONTACT_INFO.whatsappSecondary,
                language === 'es'
                  ? 'Hola, deseo información sobre los chalets y terrenos en La Cité Kaniba en Sirakoro (Malí 🇲🇱).'
                  : language === 'en'
                  ? 'Hello, I would like information regarding chalets and plots in La Cité Kaniba in Sirakoro (Mali 🇲🇱).'
                  : 'Bonjour, je souhaite des renseignements sur les chalets et la Cité Kaniba à Sirakoro (Mali 🇲🇱).'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 transition-colors"
            >
              <div className="min-w-0 pr-2">
                <span className="font-bold block text-xs truncate flex items-center gap-1">
                  <span>🇲🇱</span>
                  <span>{t.floatingWhatsApp.agentSirakoroTitle}</span>
                </span>
                <span className="text-[11px] text-stone-500 font-mono">+223 95 95 95 62</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-bold shrink-0">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        aria-label={t.floatingWhatsApp.btnLabel}
        className="group flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full shadow-2xl border-2 border-emerald-500/40 transition-all hover:scale-105 active:scale-95"
      >
        <span className="text-base sm:text-lg">🇲🇱</span>
        <div className="relative">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-amber-400 rounded-full animate-ping" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
          {t.floatingWhatsApp.btnLabel}
        </span>
      </button>

    </div>
  );
};
