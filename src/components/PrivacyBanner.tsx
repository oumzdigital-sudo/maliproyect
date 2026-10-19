import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, Check } from 'lucide-react';

export const PrivacyBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('kaniba_privacy_consent');
    if (!stored) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('kaniba_privacy_consent', 'true');
    setAccepted(true);
  };

  if (accepted) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 bg-stone-950/95 text-white backdrop-blur-md border-t border-stone-800 shadow-2xl animate-in slide-in-from-bottom-2">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-stone-300 text-pretty">
            <strong>Protection des Données & Confidentialité Foncière :</strong> En conformité avec la loi N° 2013-015 (APDP Mali) et les standards internationaux, nous protégeons vos actes notariés, coordonnées cadastrales et échanges biométriques sous chiffrement souverain.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Check className="w-3.5 h-3.5" />
            <span>J'accepte</span>
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
