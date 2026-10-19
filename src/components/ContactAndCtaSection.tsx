import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Sparkles,
  Play
} from 'lucide-react';
import { CONTACT_INFO, ASSETS } from '../data/mockData';
import { generateWhatsAppLink } from '../utils/formatters';

interface ContactAndCtaSectionProps {
  onFormSubmittedNotification: (name: string) => void;
}

export const ContactAndCtaSection: React.FC<ContactAndCtaSectionProps> = ({
  onFormSubmittedNotification,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectInterest, setProjectInterest] = useState('terrain_sirakoro');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
    onFormSubmittedNotification(fullName);
    setTimeout(() => {
      setSubmitted(false);
      setFullName('');
      setPhone('');
      setMessage('');
    }, 4000);
  };

  return (
    <section id="contacto" className="py-16 sm:py-24 bg-white dark:bg-stone-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TikTok Official Social Proof Banner */}
        <div className="mb-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-emerald-950 text-white border border-stone-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-stone-900 shadow-lg">
              <img
                src={ASSETS.tiktokProfile}
                alt="Agence Immobilière Kaniba TikTok"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-extrabold text-white">
                  @agenceimmokaniba sur TikTok
                </h3>
                <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">
                  ✓
                </span>
              </div>
              <p className="text-xs text-amber-300 font-medium">
                873.1K Abonnés · 7.6 Millions de J'aime · La référence N°1 au Mali
              </p>
              <p className="text-xs text-stone-300 mt-1 max-w-xl">
                Suivez en direct nos cérémonies de remise de clés, vidéos des parcelles à Sirakoro, bornages contradictoires et nos conseils fonciers.
              </p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-lg whitespace-nowrap shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Voir les Vidéos sur TikTok</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column Contact Form + Direct Phone Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-emerald-800 dark:text-amber-400 uppercase tracking-wider block mb-2">
                Prendre Contact Immédiatement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
                Une équipe sur le terrain à Bamako pour vous accompagner
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                Nos conseillers vous reçoivent dans nos deux agences ou organisent votre visite guidée sur le terrain de votre choix du lundi au samedi.
              </p>
            </div>

            {/* Direct Phone Numbers list */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2">
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300 block flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                  Lignes Directes d'Appels & WhatsApp :
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold text-stone-800 dark:text-stone-200">
                  {CONTACT_INFO.phones.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.replace(/\s+/g, '')}`}
                      className="p-2 rounded-lg bg-white dark:bg-stone-900 hover:text-emerald-700 dark:hover:text-amber-400 border border-stone-200 dark:border-stone-700 flex items-center justify-between"
                    >
                      <span>{p}</span>
                      <Phone className="w-3 h-3 text-stone-400" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 text-xs text-stone-600 dark:text-stone-300">
                <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  Nos Agences Physiques :
                </span>
                <ul className="space-y-1.5 pl-2">
                  {CONTACT_INFO.locations.map((loc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-700 font-bold">•</span>
                      <span>{loc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-emerald-950 text-white border border-emerald-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-300 block">Besoin d'une réponse en moins de 5 min ?</span>
                <span className="text-[11px] text-stone-300">Notre guichet WhatsApp est connecté 7j/7</span>
              </div>
              <a
                href={generateWhatsAppLink(CONTACT_INFO.whatsappPrimary, 'Bonjour, je souhaite un devis ou une information express.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs whitespace-nowrap flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                WhatsApp
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Visit Form */}
          <div className="lg:col-span-7 bg-stone-50 dark:bg-stone-800/80 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-700 shadow-xl">
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white mb-1">
              Formulaire de Demande d'Acquisition & Visite
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-6">
              Remplissez ce formulaire pour être recontacté sous 24h par notre notaire ou conseiller dédié.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold">Demande Envoyée avec Succès !</h4>
                <p className="text-xs">
                  Merci {fullName}. Un conseiller officiel du Groupe Kaniba va vous contacter sur votre numéro {phone}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                      Nom & Prénom *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Ibrahima Coulibaly"
                      className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                      Numéro Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+223 70... ou +33 6..."
                      className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                    Votre Projet Immobilier
                  </label>
                  <select
                    value={projectInterest}
                    onChange={(e) => setProjectInterest(e.target.value)}
                    className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="terrain_sirakoro">Achat Terrain Résidentiel avec Titre Foncier (Sirakoro)</option>
                    <option value="villa_kaniba">Achat Villa / Chalet Cité Kaniba</option>
                    <option value="construction">Construction Clés en Main sur Mon Terrain</option>
                    <option value="ferme_sanankoroba">Champ Agricole / Ferme (Sanankoroba)</option>
                    <option value="diaspora_invest">Investissement Sécurisé depuis la Diaspora</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                    Message / Précisions (Facultatif)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Indiquez vos critères spécifiques, budget ou disponibilités pour une visite..."
                    className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400 shrink-0" />
                  <span>Vos informations restent strictement confidentielles selon la loi APDP Mali.</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>Envoyer ma Demande de Visite</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
