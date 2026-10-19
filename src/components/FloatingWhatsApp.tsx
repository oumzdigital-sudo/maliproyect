import React, { useState } from 'react';
import { MessageSquare, Phone, X, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/mockData';
import { generateWhatsAppLink } from '../utils/formatters';

export const FloatingWhatsApp: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
      
      {/* Agent Selector Popup */}
      {showPopup && (
        <div className="mb-3 w-72 bg-white dark:bg-stone-900 rounded-2xl shadow-2xl border border-stone-200 dark:border-stone-800 p-4 text-xs space-y-3 animate-in fade-in slide-in-from-bottom-3">
          <div className="flex items-center justify-between pb-2 border-b border-stone-100 dark:border-stone-800">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900 dark:text-amber-400">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Agents Certifiés Mali</span>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-stone-600 dark:text-stone-300 text-[11px] leading-relaxed">
            Échangez directement avec notre équipe pour réserver votre parcelle ou planifier une visite à Sirakoro :
          </p>

          <div className="space-y-2">
            <a
              href={generateWhatsAppLink(
                CONTACT_INFO.whatsappPrimary,
                'Bonjour, je souhaite échanger avec un agent du Groupe Kaniba pour un achat de terrain ou maison.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-white transition-colors"
            >
              <div>
                <span className="font-bold block text-xs">Direction Ventes Bamako</span>
                <span className="text-[11px] text-stone-500 font-mono">+223 70 15 65 65</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-bold">
                WhatsApp
              </span>
            </a>

            <a
              href={generateWhatsAppLink(
                CONTACT_INFO.whatsappSecondary,
                'Bonjour, je souhaite des renseignements sur les chalets et la Cité Kaniba à Sirakoro.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 border border-stone-200 dark:border-stone-700 text-stone-900 dark:text-stone-100 transition-colors"
            >
              <div>
                <span className="font-bold block text-xs">Bureau Cité Kaniba (Sirakoro)</span>
                <span className="text-[11px] text-stone-500 font-mono">+223 95 95 95 62</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-700 text-white text-[10px] font-bold">
                WhatsApp
              </span>
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={() => setShowPopup(!showPopup)}
        aria-label="Hablar con un agente certificado por WhatsApp"
        className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-800 hover:bg-emerald-700 text-white rounded-full shadow-2xl border-2 border-emerald-500/40 transition-all hover:scale-105 active:scale-95"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5 text-amber-300" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-ping" />
        </div>
        <span className="text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap">
          Hablar con un agente certificado
        </span>
      </button>

    </div>
  );
};
