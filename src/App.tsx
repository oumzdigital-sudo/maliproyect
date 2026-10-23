import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedCatalog } from './components/FeaturedCatalog';
import { InteractiveMap } from './components/InteractiveMap';
import { ConstructionSection } from './components/ConstructionSection';
import { DiasporaSection } from './components/DiasporaSection';
import { TrackingAndDashboard } from './components/TrackingAndDashboard';
import { ContactAndCtaSection } from './components/ContactAndCtaSection';
import { PropertyDetailModal } from './components/PropertyDetailModal';
import { KanibaBot } from './components/KanibaBot';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { NotificationCenter } from './components/NotificationCenter';
import { PrivacyBanner } from './components/PrivacyBanner';
import { Footer } from './components/Footer';

import { PROPERTIES, NOTIFICATIONS_DATA } from './data/mockData';
import { Property, CurrencyCode, PropertyType, NotificationItem, Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('es');
  const [currency, setCurrency] = useState<CurrencyCode>('XOF');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(NOTIFICATIONS_DATA);
  const [botOpen, setBotOpen] = useState(false);

  // Initialize and persist dark mode
  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Sync document language attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleTriggerNotification = (title: string, message: string) => {
    const newNotif: NotificationItem = {
      id: `notif-${Date.now()}`,
      title: { es: title, fr: title, en: title },
      message: { es: message, fr: message, en: message },
      time: { es: 'Al instante', fr: 'À l’instant', en: 'Just now' },
      type: 'system',
      read: false,
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  const handleMarkAllNotificationsAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleHeroSearch = (type: PropertyType, zone: string, maxPrice: number) => {
    setSelectedCategory(type);
    const element = document.getElementById('catalogo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreMap = () => {
    const element = document.getElementById('mapa');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-100 transition-colors">
      
      {/* 1. Header with dedicated ES/FR/EN language switcher and Mali ribbons */}
      <Header
        currency={currency}
        onCurrencyChange={setCurrency}
        language={language}
        onLanguageChange={setLanguage}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        onOpenNotifications={() => setNotificationsOpen(true)}
        unreadNotificationsCount={unreadCount}
        onOpenBot={() => setBotOpen(true)}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 w-full max-w-full overflow-x-hidden">
        {/* Block 1: Hero Section */}
        <HeroSection
          language={language}
          onSearch={handleHeroSearch}
          onExploreMap={handleExploreMap}
        />

        {/* Block 2: Featured Properties Catalog */}
        <FeaturedCatalog
          properties={PROPERTIES}
          currency={currency}
          language={language}
          onSelectProperty={setSelectedProperty}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Dynamic Interactive Map Section */}
        <InteractiveMap
          properties={PROPERTIES}
          currency={currency}
          language={language}
          onSelectProperty={setSelectedProperty}
        />

        {/* Block 3: Construction & Projects */}
        <ConstructionSection language={language} />

        {/* Block 4: Diaspora Section */}
        <DiasporaSection language={language} />

        {/* Tracking Tool & User Control Panel with Biometrics & Cloud Backup */}
        <TrackingAndDashboard
          currency={currency}
          language={language}
          onTriggerNotification={handleTriggerNotification}
        />

        {/* Block 5: Contact, CTA & WhatsApp */}
        <ContactAndCtaSection
          language={language}
          onFormSubmittedNotification={(name) => {
            handleTriggerNotification(
              language === 'es' ? 'Solicitud de Contacto Recibida 🇲🇱' : language === 'en' ? 'Contact Request Received 🇲🇱' : 'Demande de Contact Reçue 🇲🇱',
              language === 'es'
                ? `Gracias ${name}, un asesor de Groupe Kaniba te contactará por WhatsApp en menos de 24h.`
                : language === 'en'
                ? `Thank you ${name}, a Groupe Kaniba advisor will reach out to you via WhatsApp within 24h.`
                : `Merci ${name}, un conseiller commercial du Groupe Kaniba va vous contacter sur WhatsApp sous 24h.`
            );
          }}
        />
      </main>

      {/* Footer */}
      <Footer language={language} onNavigate={handleNavigate} />

      {/* Property Detail Modal */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        currency={currency}
        language={language}
      />

      {/* Customer Attention Bot (KanibaBot) */}
      <KanibaBot
        isOpen={botOpen}
        onClose={() => setBotOpen(false)}
        onOpen={() => setBotOpen(true)}
        language={language}
      />

      {/* Always Visible Floating WhatsApp Button */}
      <FloatingWhatsApp language={language} />

      {/* Push Notifications Center */}
      <NotificationCenter
        isOpen={notificationsOpen}
        onClose={() => setNotificationsOpen(false)}
        notifications={notifications}
        onMarkAllAsRead={handleMarkAllNotificationsAsRead}
        onNavigateAction={(action) => {
          handleNavigate(action);
        }}
        language={language}
      />

      {/* Privacy APDP Mali Banner */}
      <PrivacyBanner language={language} />

    </div>
  );
}
