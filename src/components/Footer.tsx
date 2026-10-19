import React from 'react';
import { 
  Building2, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  ExternalLink,
  MessageSquare,
  Globe2
} from 'lucide-react';
import { CONTACT_INFO, ASSETS } from '../data/mockData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-stone-950 text-stone-300 border-t border-stone-800 transition-colors pt-16 pb-24 lg:pb-16 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand & Vision */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-900 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-500/30">
                <span>K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-white">
                  GROUPE KANIBA
                </span>
                <span className="text-[11px] text-amber-400 uppercase tracking-wider font-semibold">
                  {CONTACT_INFO.tagline}
                </span>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed max-w-md">
              Pionnier de la sécurisation foncière en République du Mali. Terrains bornés avec Titre Foncier (TF), lotissements viabilisés à Sirakoro, chalets haut standing à La Cité Kaniba et solutions d'investissement pour la diaspora malienne.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={CONTACT_INFO.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-stone-900 hover:bg-stone-800 border border-stone-700 text-white rounded-xl flex items-center gap-2 transition-colors"
              >
                <span className="font-bold">TikTok Officiel</span>
                <span className="text-amber-400">873K abonnés</span>
                <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
              </a>

              <a
                href="https://wa.me/22370156565"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-900/60 hover:bg-emerald-900 border border-emerald-700 text-emerald-300 rounded-xl flex items-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>WhatsApp Ventes</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Navigation Rapide
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate('catalogo')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Catalogue des Propriétés
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mapa')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Carte Dynamique & Bornages
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('construccion')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Groupe Kaniba Construction
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('diaspora')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Guichet Diaspora & Investissement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('seguimiento')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Suivi de Dossier Notarié
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Contact & Permanences
            </h4>
            
            <div className="space-y-2 text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Bamako, ACI 2000 & Sirakoro Meguetana, Mali</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-mono text-white font-semibold">+223 70 15 65 65 / +223 95 95 95 62</span>
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Études Notariales Partenaires Agréées à Bamako</span>
              </p>
            </div>

            <div className="pt-2 text-[11px] text-stone-500">
              Horaires : Lundi au Vendredi de 08h00 à 18h00 · Samedi de 08h30 à 15h00
            </div>
          </div>

        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-stone-500 text-[11px]">
          <p>© 2026 Groupe Kaniba Immobilier & BTP. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Conformité APDP Mali (Loi 2013-015)</span>
            <span>·</span>
            <span>Titres Fonciers Inattaquables</span>
            <span>·</span>
            <span>Chiffrement Cloud AES-256</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
