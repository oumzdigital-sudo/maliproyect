import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Check } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface PrivacyBannerProps {
  language: Language;
}

export const PrivacyBanner: React.FC<PrivacyBannerProps> = ({ language }) => {
  const [accepted, setAccepted] = useState(true);
  const t = TRANSLATIONS[language];

  useEffect(() => {
    const stored = localStorage.getItem('kaniba_privacy_consent_v2');
    if (!stored) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kaniba_privacy_consent_v2', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-stone-950/95 text-white backdrop-blur-md border-t border-stone-800 shadow-2xl animate-in slide-in-from-bottom-2 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs w-full">
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <span className="text-base sm:text-lg shrink-0">🇲🇱</span>
          <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 shrink-0" />
          <p className="text-stone-300 text-pretty text-[11px] sm:text-xs leading-relaxed">
            <strong>{t.privacy.title}</strong> {t.privacy.text}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <button
            onClick={handleAccept}
            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-1.5 text-xs whitespace-nowrap"
          >
            <Check className="w-3.5 h-3.5" />
            <span>{t.privacy.btnAccept}</span>
          </button>
          <button
            onClick={() => setAccepted(true)}
            className="p-1.5 text-stone-400 hover:text-white"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
