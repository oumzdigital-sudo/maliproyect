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
  FileCheck2,
  ShieldCheck
} from 'lucide-react';
import { CurrencyCode } from '../types';
import { CONTACT_INFO } from '../data/mockData';

interface HeaderProps {
  currency: CurrencyCode;
  onCurrencyChange: (curr: CurrencyCode) => void;
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
  darkMode,
  onToggleDarkMode,
  onOpenNotifications,
  unreadNotificationsCount,
  onOpenBot,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'catalogo', label: 'Propiedades' },
    { id: 'mapa', label: 'Mapa Dinámico' },
    { id: 'construccion', label: 'Construcción' },
    { id: 'diaspora', label: 'Diáspora Mali' },
    { id: 'seguimiento', label: 'Seguimiento & Portal' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-stone-900/90 border-b border-stone-200 dark:border-stone-800 transition-colors">
      {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark */}
        <button 
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-2.5 text-left focus:outline-none shrink-0"
        >
          <div className="w-10 h-10 rounded-lg bg-emerald-900 dark:bg-emerald-800 text-amber-400 flex items-center justify-center font-bold text-xl shadow-xs border border-amber-500/30">
            <span>K</span>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-emerald-950 dark:text-stone-100 whitespace-nowrap">
              GROUPE KANIBA
            </span>
            <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400 tracking-wider uppercase whitespace-nowrap">
              Immobilier & BTP · Bamako
            </span>
          </div>
        </button>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors whitespace-nowrap py-1 border-b-2 ${
                  isActive
                    ? 'border-emerald-700 dark:border-amber-400 text-emerald-900 dark:text-amber-400 font-semibold'
                    : 'border-transparent hover:text-stone-950 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action + minimal utility toggles */}
        <div className="flex items-center gap-2.5 shrink-0">
          
          {/* Currency Selector (FCFA / EUR / USD) */}
          <div className="hidden sm:flex items-center bg-stone-100 dark:bg-stone-800 rounded-lg p-1 border border-stone-200 dark:border-stone-700 text-xs font-semibold">
            {(['XOF', 'EUR', 'USD'] as CurrencyCode[]).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-2 py-1 rounded-md transition-colors ${
                  currency === c
                    ? 'bg-white dark:bg-stone-700 text-emerald-900 dark:text-amber-300 shadow-xs'
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
            aria-label="Alternar modo oscuro"
            className="p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Notification Center Trigger */}
          <button
            onClick={onOpenNotifications}
            aria-label="Ver notificaciones"
            className="relative p-2 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg transition-colors"
          >
            <Bell className="w-4 h-4" />
            {unreadNotificationsCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white dark:ring-stone-900" />
            )}
          </button>

          {/* Primary Action Button: WhatsApp Contact */}
          <a
            href={`https://wa.me/22370156565?text=${encodeURIComponent('Bonjour Groupe Kaniba, je souhaite me renseigner sur vos terrains et villas à Sirakoro / Bamako.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
            <span>Hablar con Agente</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-lg"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-5 space-y-3 bg-white dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800 shadow-xl">
          <div className="grid grid-cols-1 gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-amber-400 font-semibold'
                    : 'text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Currency and Phone quick dial */}
          <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
            <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">Moneda:</span>
            <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 rounded-lg p-1 text-xs">
              {(['XOF', 'EUR', 'USD'] as CurrencyCode[]).map((c) => (
                <button
                  key={c}
                  onClick={() => onCurrencyChange(c)}
                  className={`px-2 py-0.5 rounded ${
                    currency === c
                      ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-amber-400 font-bold shadow-xs'
                      : 'text-stone-500'
                  }`}
                >
                  {c === 'XOF' ? 'FCFA' : c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <a
              href={`https://wa.me/22370156565?text=${encodeURIComponent('Bonjour Groupe Kaniba, je souhaite échanger sur un projet immobilier.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-800 text-white rounded-lg text-xs font-semibold text-center"
            >
              <MessageSquare className="w-3.5 h-3.5 text-amber-300" />
              WhatsApp
            </a>
            <a
              href="tel:+22370156565"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-lg text-xs font-semibold text-center"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
              Llamar (+223)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
