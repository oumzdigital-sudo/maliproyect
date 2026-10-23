import React, { useState } from 'react';
import { 
  Send, 
  MessageSquare, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  ExternalLink,
  Play
} from 'lucide-react';
import { CONTACT_INFO, ASSETS } from '../data/mockData';
import { generateWhatsAppLink } from '../utils/formatters';
import { Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ContactAndCtaSectionProps {
  language: Language;
  onFormSubmittedNotification: (name: string) => void;
}

export const ContactAndCtaSection: React.FC<ContactAndCtaSectionProps> = ({
  language,
  onFormSubmittedNotification,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectInterest, setProjectInterest] = useState('terrain_sirakoro');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const t = TRANSLATIONS[language];

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
    <section id="contacto" className="py-12 sm:py-24 bg-white dark:bg-stone-900 transition-colors w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* TikTok Official Social Proof Banner */}
        <div className="mb-12 sm:mb-16 p-5 sm:p-8 rounded-2xl bg-gradient-to-r from-stone-950 via-stone-900 to-emerald-950 text-white border border-stone-800 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6 w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-stone-900 shadow-lg relative">
              <img
                src={ASSETS.tiktokProfile}
                alt="Agence Immobilière Kaniba TikTok Mali 🇲🇱"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-xl font-extrabold text-white truncate">
                  {t.contact.tiktokTitle}
                </h3>
                <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                  ✓
                </span>
              </div>
              <p className="text-xs text-amber-300 font-medium mt-0.5">
                {t.contact.tiktokSub}
              </p>
              <p className="text-xs text-stone-300 mt-1 max-w-xl leading-relaxed">
                {t.contact.tiktokDesc}
              </p>
            </div>
          </div>

          <a
            href={CONTACT_INFO.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors flex items-center gap-2 shadow-lg whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>{t.contact.btnWatchTiktok}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 2-Column Contact Form + Direct Phone Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start w-full">
          
          {/* Left Column: Direct Agency Channels */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 w-full">
            <div>
              <span className="text-xs font-bold text-emerald-800 dark:text-amber-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                <span>🇲🇱</span>
                <span>{t.contact.badge}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-white tracking-tight">
                {t.contact.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Direct Phone Numbers list */}
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2">
                <span className="text-xs font-bold text-stone-700 dark:text-stone-300 block flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                  <span>{t.contact.linesTitle}</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono font-bold text-stone-800 dark:text-stone-200">
                  {CONTACT_INFO.phones.map((p, i) => (
                    <a
                      key={i}
                      href={`tel:${p.replace(/\s+/g, '')}`}
                      className="p-2 rounded-lg bg-white dark:bg-stone-900 hover:text-emerald-700 dark:hover:text-amber-400 border border-stone-200 dark:border-stone-700 flex items-center justify-between"
                    >
                      <span className="truncate">{p}</span>
                      <Phone className="w-3 h-3 text-stone-400 shrink-0 ml-1" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 text-xs text-stone-600 dark:text-stone-300">
                <span className="font-bold text-stone-800 dark:text-stone-200 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span>{t.contact.officesTitle}</span>
                </span>
                <ul className="space-y-1.5 pl-2">
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{t.contact.office1}</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{t.contact.office2}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="p-4 rounded-xl bg-emerald-950 text-white border border-emerald-800 flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-amber-300 block">{t.contact.fastResponseTitle}</span>
                <span className="text-[11px] text-stone-300">{t.contact.fastResponseSub}</span>
              </div>
              <a
                href={generateWhatsAppLink(
                  CONTACT_INFO.whatsappPrimary,
                  language === 'es'
                    ? 'Hola Groupe Kaniba, deseo información express sobre terrenos en Malí 🇲🇱.'
                    : language === 'en'
                    ? 'Hello Groupe Kaniba, I would like fast info regarding plots in Mali 🇲🇱.'
                    : 'Bonjour Groupe Kaniba, je souhaite une information express (Mali 🇲🇱).'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold shadow-xs whitespace-nowrap flex items-center gap-1.5 shrink-0"
              >
                <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
                <span>{t.contact.btnWhatsAppFast}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact & Visit Form */}
          <div className="lg:col-span-7 bg-stone-50 dark:bg-stone-800/80 rounded-2xl p-5 sm:p-8 border border-stone-200 dark:border-stone-700 shadow-xl w-full">
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 dark:text-white mb-1">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-5 sm:mb-6 leading-relaxed">
              {t.contact.formSub}
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold">{t.contact.successTitle}</h4>
                <p className="text-xs">
                  {t.contact.successDesc} ({phone})
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                      {t.contact.nameLabel}
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
                      {t.contact.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+223 70... / +33 6... / +34 6..."
                      className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                    {t.contact.projectLabel}
                  </label>
                  <select
                    value={projectInterest}
                    onChange={(e) => setProjectInterest(e.target.value)}
                    className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  >
                    <option value="terrain_sirakoro">{t.contact.projectOpt1}</option>
                    <option value="villa_kaniba">{t.contact.projectOpt2}</option>
                    <option value="construction">{t.contact.projectOpt3}</option>
                    <option value="ferme_sanankoroba">{t.contact.projectOpt4}</option>
                    <option value="diaspora_invest">{t.contact.projectOpt5}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-stone-700 dark:text-stone-300 block mb-1">
                    {t.contact.msgLabel}
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.msgPlaceholder}
                    className="w-full py-2.5 px-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="flex items-center gap-2 text-[11px] text-stone-500 dark:text-stone-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400 shrink-0" />
                  <span>{t.contact.privacyNote}</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 sm:py-3.5 px-6 bg-emerald-800 hover:bg-emerald-700 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-amber-300" />
                  <span>{t.contact.btnSubmit}</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
