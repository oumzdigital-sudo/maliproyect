import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  MessageSquare, 
  Moon, 
  Sun, 
  Bell, 
  Menu, 
  X, 
  Globe2,
  ShieldCheck
} from 'lucide-react';
import { CurrencyCode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeaderProps {
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  onOpenNotifications: () => void;
  unreadNotificationsCount: number;
  onOpenBot: () => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currency,
  onCurrencyChange,
  language,
  onLanguageChange,
  darkMode,
  onToggleDarkMode,
  onOpenNotifications,
  unreadNotificationsCount,
  onOpenBot,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { id: 'catalogo', label: t.nav.properties },
    { id: 'mapa', label: t.nav.map },
    { id: 'construccion', label: t.nav.construction },
    { id: 'diaspora', label: t.nav.diaspora },
    { id: 'seguimiento', label: t.nav.tracking },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full max-w-full backdrop-blur-md bg-white/95 dark:bg-stone-900/95 border-b border-stone-200 dark:border-stone-800 transition-colors overflow-hidden">
      
      {/* Mali National Tricolor Ribbon */}
      <div className="w-full h-1 flex">
        <div className="flex-1 bg-emerald-600" title="Vert Mali" />
        <div className="flex-1 bg-amber-400" title="Or Mali" />
        <div className="flex-1 bg-red-600" title="Rouge Mali" />
      </div>

      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (Actions & Toggles) */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-3 md:gap-6">
        
        {/* Zone 1: Brand Wordmark with Mali Flag Crest */}
        <button 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2 sm:gap-2.5 text-left focus:outline-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-900 dark:bg-emerald-800 text-amber-400 flex items-center justify-center font-bold text-lg sm:text-xl shadow-xs border border-amber-500/40 relative">
            <span>K</span>
            <span className="absolute -bottom-1 -right-1 text-xs leading-none" title="Mali">
              🇲🇱
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-emerald-950 dark:text-stone-100 whitespace-nowrap">
                GROUPE KANIBA
              </span>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-stone-500 dark:text-stone-400 tracking-wider uppercase whitespace-nowrap flex items-center gap-1">
              <span>Bamako · Sirakoro</span>
              <span className="text-emerald-700 dark:text-amber-400">🇲🇱</span>
            </span>
          </div>
        </button>

        {/* Zone 2: 4–5 Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap py-1 border-b-2 text-xs xl:text-sm ${
                  isActive
                    ? 'border-emerald-700 dark:border-amber-400 text-emerald-900 dark:text-amber-400 font-bold'
                    : 'border-transparent hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Switcher + Currency + Utilities + CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          
          {/* Dedicated Multilingual Language Switcher (ES / FR / EN) */}
          <div className="flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-0.5 sm:p-1 border border-stone-200 dark:border-stone-700 text-xs font-semibold">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLanguageChange(l.code)}
                title={l.label}
                className={`px-1.5 sm:px-2 py-1 rounded-md transition-all flex items-center gap-1 text-[11px] sm:text-xs ${
                  language === l.code
                    ? 'bg-white dark:bg-stone-700 text-emerald-900 dark:text-amber-300 shadow-xs font-bold'
                    : 'text-stone-500 hover:text-stone-800 dark:text-stone-400'
                }`}
              >
                <span>{l.flag}</span>
                <span className="hidden sm:inline uppercase">{l.code}</span>
              </button>
            ))}
          </div>

          {/* Currency Selector (FCFA / EUR / USD) */}
          <div className="hidden sm:flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-1 border border-stone-200 dark:border-stone-700 text-xs font-semibold">
            {(['XOF', 'EUR', 'USD'] as CurrencyCode[]).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  currency === c
                    ? 'bg-white dark:bg-stone-700 text-emerald-900 dark:text-amber-300 shadow-xs font-bold'
                    : 'text-stone-500 hover:text-stone-800 dark:text-stone-400'
                }`}
              >
                {c === 'XOF' ? 'FCFA' : c}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleDarkMode}
            aria-label={t.nav.darkMode}
            className="p-1.5 sm:p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Notifications Trigger */}
          <button
            onClick={onOpenNotifications}
            aria-label={t.nav.notifications}
            className="relative p-1.5 sm:p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white dark:ring-stone-900" />
            )}
          </button>

          {/* Primary Action Button: WhatsApp */}
          <a
            href={`https://wa.me/22370156565?text=${encodeURIComponent(
              language === 'es'
                ? 'Hola Groupe Kaniba, deseo información sobre sus terrenos y villas en Bamako y Sirakoro (Malí 🇲🇱).'
                : language === 'en'
                ? 'Hello Groupe Kaniba, I would like information regarding your land plots and villas in Bamako and Sirakoro (Mali 🇲🇱).'
                : 'Bonjour Groupe Kaniba, je souhaite me renseigner sur vos terrains et villas à Sirakoro / Bamako (Mali 🇲🇱).'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.nav.contactAgent}</span>
          </a>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 space-y-3 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 shadow-xl max-w-full overflow-hidden">
          
          {/* Mali National Badge on Mobile */}
          <div className="flex items-center justify-between p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-amber-300 font-bold">
            <span className="flex items-center gap-1.5">
              <span>🇲🇱</span>
              <span>{t.maliIdentity.republic}</span>
            </span>
            <span className="text-[11px] font-mono text-stone-500 dark:text-stone-400">
              {t.maliIdentity.phoneCode}
            </span>
          </div>

          {/* Language selector full row */}
          <div className="space-y-1">
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
              {t.nav.language} :
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onLanguageChange(l.code)}
                  className={`py-2 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
                    language === l.code
                      ? 'bg-emerald-900 text-amber-300 dark:bg-amber-500 dark:text-stone-950 shadow-xs'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 gap-1 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  activeSection === item.id
                    ? 'bg-emerald-100/70 dark:bg-emerald-950 text-emerald-900 dark:text-amber-400 font-bold'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Currency selector */}
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">{t.nav.currency} :</span>
            <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg p-1 text-xs">
              {(['XOF', 'EUR', 'USD'] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  onClick={() => onCurrencyChange(c)}
                  className={`px-2 py-1 rounded-md text-[11px] font-bold ${
                    currency === c
                      ? 'bg-white dark:bg-stone-700 text-emerald-900 dark:text-amber-400 shadow-xs'
                      : 'text-stone-500'
                  }`}
                >
                  {c === 'XOF' ? 'FCFA' : c}
                </button>
              ))}
            </div>
          </div>

          {/* Direct Mobile Contact Buttons */}
          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href="https://wa.me/22370156565"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-800 text-white rounded-lg text-xs font-bold text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
              WhatsApp
            </a>
            <a
              href="tel:+22370156565"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-lg text-xs font-bold text-center"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700 dark:text-amber-400" />
              {t.nav.callNow}
            </a>
          </div>

        </div>
      )}
    </header>
  );
};
