import React, { useState } from 'react';
import { 
  Search, 
  FileCheck2, 
  ShieldCheck, 
  Fingerprint, 
  Lock, 
  Unlock, 
  Cloud, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  RefreshCw,
  FileText,
  UserCheck
} from 'lucide-react';
import { TRACKING_DOSSIERS } from '../data/mockData';
import { TrackingDossier, CurrencyCode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface TrackingAndDashboardProps {
  currency: CurrencyCode;
  language: Language;
  onTriggerNotification: (title: string, message: string) => void;
}

export const TrackingAndDashboard: React.FC<TrackingAndDashboardProps> = ({
  currency,
  language,
  onTriggerNotification,
}) => {
  const [searchCode, setSearchCode] = useState<string>('KNB-2026-7842');
  const [activeDossier, setActiveDossier] = useState<TrackingDossier | null>(TRACKING_DOSSIERS['KNB-2026-7842'] || null);
  const [biometricUnlocked, setBiometricUnlocked] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [backupStatus, setBackupStatus] = useState<'idle' | 'syncing' | 'completed'>('idle');
  const [lastBackupTime, setLastBackupTime] = useState<string>('20/10/2026, 00:15 GMT');

  const t = TRANSLATIONS[language];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = searchCode.trim().toUpperCase();
    if (TRACKING_DOSSIERS[clean]) {
      setActiveDossier(TRACKING_DOSSIERS[clean]);
      setBiometricUnlocked(false);
      setAuthError(null);
    } else {
      setActiveDossier(null);
    }
  };

  const handleSelectSample = (code: string) => {
    setSearchCode(code);
    setActiveDossier(TRACKING_DOSSIERS[code]);
    setBiometricUnlocked(false);
    setAuthError(null);
  };

  const handleBiometricAuth = async () => {
    setIsAuthenticating(true);
    setAuthError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 750));
      setBiometricUnlocked(true);
      onTriggerNotification(
        language === 'es' ? 'Autenticación Biométrica Exitosa 🇲🇱' : language === 'en' ? 'Biometric Authentication Successful 🇲🇱' : 'Authentification Biométrique Réussie 🇲🇱',
        language === 'es'
          ? 'Acceso desbloqueado a los Títulos Fonciers y escrituras notariales seguras.'
          : language === 'en'
          ? 'Access unlocked to official Land Titles and secure notarized deeds.'
          : 'Accès déverrouillé aux Titres Fonciers et documents notariés sécurisés.'
      );
    } catch (err) {
      setAuthError('Erreur d’authentification');
    } finally {
      setIsAuthenticating(false);
    }
  };

  const handleTriggerCloudBackup = () => {
    setBackupStatus('syncing');
    setTimeout(() => {
      setBackupStatus('completed');
      const now = new Date().toLocaleString(language === 'es' ? 'es-ES' : language === 'en' ? 'en-US' : 'fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      setLastBackupTime(`${now} GMT`);
      onTriggerNotification(
        language === 'es' ? 'Copia en la Nube Cifrada Sincronizada 🇲🇱' : language === 'en' ? 'Encrypted Cloud Backup Synchronized 🇲🇱' : 'Sauvegarde Cloud Chiffrée Réussie 🇲🇱',
        language === 'es'
          ? 'Tus títulos fonciers y actas notariales están respaldados bajo cifrado AES-256 (APDP Malí).'
          : language === 'en'
          ? 'Your land titles and notary deeds are safeguarded under AES-256 encryption (APDP Mali).'
          : 'Vos dossiers fonciers et actes notariés sont protégés sous chiffrement AES-256 (APDP Mali).'
      );
      setTimeout(() => setBackupStatus('idle'), 3000);
    }, 1100);
  };

  const handleDownloadVault = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({
        vault: "GROUPE_KANIBA_ENCRYPTED_VAULT_MALI_V2",
        republic: "République du Mali 🇲🇱",
        dossier: activeDossier?.code,
        client: activeDossier?.clientName,
        checksumSha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        timestamp: new Date().toISOString(),
        encryption: "AES-GCM-256-BIT-SOVEREIGN"
      }, null, 2)
    );
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Dossier_Kaniba_${activeDossier?.code || 'Backup'}.vault`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <section id="seguimiento" className="py-12 sm:py-24 bg-stone-100 dark:bg-stone-950 transition-colors border-t border-stone-200 dark:border-stone-800 w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header with Mali Flag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
              <span>🇲🇱</span>
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>{t.tracking.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              {t.tracking.title}
            </h2>
            <p className="mt-2 text-xs sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl leading-relaxed">
              {t.tracking.subtitle}
            </p>
          </div>

          {/* Quick Dossier Switcher Chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-stone-500 dark:text-stone-400 font-medium mr-1">{t.tracking.sampleChipsLabel}</span>
            {['KNB-2026-7842', 'KNB-2026-9104', 'KNB-2026-5321'].map((code) => (
              <button
                key={code}
                onClick={() => handleSelectSample(code)}
                className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-colors ${
                  searchCode === code
                    ? 'bg-emerald-900 text-amber-300 dark:bg-amber-500 dark:text-stone-950 font-bold'
                    : 'bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Dossier Search Input Bar */}
        <div className="max-w-2xl mx-auto mb-8 sm:mb-10 w-full">
          <form onSubmit={handleSearch} className="flex gap-2 w-full">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder={t.tracking.searchPlaceholder}
                className="w-full pl-10 pr-3 py-2.5 sm:py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-xs sm:text-sm font-mono text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>
            <button
              type="submit"
              className="px-4 sm:px-5 py-2.5 sm:py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs shrink-0"
            >
              {t.tracking.btnSearch}
            </button>
          </form>
        </div>

        {activeDossier ? (
          <div className="space-y-6 sm:space-y-8 w-full">
            
            {/* Dossier Overview Card */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-4 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xl w-full overflow-hidden">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 sm:pb-6 border-b border-stone-100 dark:border-stone-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded flex items-center gap-1">
                      <span>🇲🇱</span>
                      <span>DOSSIER {activeDossier.code}</span>
                    </span>
                    <span className="text-[11px] sm:text-xs text-stone-500">
                      {t.tracking.lastUpdateLabel} {activeDossier.lastUpdate[language] || activeDossier.lastUpdate.es}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-extrabold text-stone-900 dark:text-white">
                    {activeDossier.propertyTitle[language] || activeDossier.propertyTitle.es}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                    {t.tracking.ownerLabel} <span className="font-semibold text-stone-900 dark:text-stone-200">{activeDossier.clientName}</span> · {activeDossier.location} ({activeDossier.surfaceM2} m²)
                  </p>
                </div>

                {/* Status KPI */}
                <div className="flex items-center gap-3 sm:gap-4 bg-stone-50 dark:bg-stone-800/80 p-3 sm:p-3.5 rounded-xl border border-stone-200 dark:border-stone-700 self-start md:self-auto">
                  <div className="text-right">
                    <span className="text-[10px] sm:text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                      {t.tracking.kpiLegalProgress}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-emerald-800 dark:text-amber-400 font-mono">
                      {t.tracking.stepOf} {activeDossier.currentStep} / {activeDossier.totalSteps}
                    </span>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-stone-200 dark:border-stone-700 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-amber-400 relative">
                    <span className="font-mono">{Math.round((activeDossier.currentStep / activeDossier.totalSteps) * 100)}%</span>
                  </div>
                </div>
              </div>

              {/* Progress Stepper Timeline */}
              <div className="pt-6 sm:pt-8 w-full">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-5 sm:mb-6">
                  {t.tracking.timelineTitle}
                </h4>

                <div className="relative w-full">
                  <div className="hidden md:block absolute top-5 left-6 right-6 h-0.5 bg-stone-200 dark:bg-stone-700 z-0" />

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                    {activeDossier.steps.map((st, i) => {
                      const isPast = st.status === 'completed';
                      const isCurrent = st.status === 'in_progress';
                      const stepTitle = st.title[language] || st.title.es;
                      const stepDesc = st.description[language] || st.description.es;
                      const stepAuth = st.authority[language] || st.authority.es;

                      return (
                        <div key={i} className="flex md:flex-col items-start gap-3 md:gap-2">
                          <div
                            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                              isPast
                                ? 'bg-emerald-700 text-white shadow-md'
                                : isCurrent
                                ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-400/20 shadow-md animate-pulse'
                                : 'bg-stone-100 dark:bg-stone-800 text-stone-400 border border-stone-300 dark:border-stone-700'
                            }`}
                          >
                            {isPast ? <CheckCircle2 className="w-5 h-5" /> : st.stepNumber}
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-stone-400 block">
                              {st.date}
                            </span>
                            <h5 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white mt-0.5">
                              {stepTitle}
                            </h5>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                              {stepDesc}
                            </p>
                            <span className="text-[10px] text-emerald-700 dark:text-amber-400 font-medium block mt-1">
                              {stepAuth}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>

            {/* Security & Documents Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 w-full">
              
              {/* Left Column: Protected Documents Vault with Biometrics */}
              <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xl space-y-4 overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
                      <span>🇲🇱</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                      <span>{t.tracking.vaultTitle}</span>
                    </h4>
                    <p className="text-xs text-stone-500">
                      {t.tracking.vaultDesc}
                    </p>
                  </div>

                  {/* Biometric Trigger Button */}
                  {!biometricUnlocked ? (
                    <button
                      onClick={handleBiometricAuth}
                      disabled={isAuthenticating}
                      className="px-3.5 py-2 bg-emerald-900 text-amber-300 hover:bg-emerald-800 text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-xs shrink-0 self-start sm:self-auto"
                    >
                      <Fingerprint className={`w-4 h-4 text-amber-400 ${isAuthenticating ? 'animate-spin' : ''}`} />
                      <span>{isAuthenticating ? t.tracking.biometricVerifying : t.tracking.btnBiometricUnlock}</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-lg border border-emerald-300 dark:border-emerald-800 shrink-0 self-start sm:self-auto">
                      <Unlock className="w-3.5 h-3.5" />
                      <span>{t.tracking.biometricUnlockedBadge}</span>
                    </div>
                  )}
                </div>

                {/* Documents List */}
                <div className="space-y-2">
                  {activeDossier.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 text-xs gap-2"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300 shrink-0">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-semibold text-stone-800 dark:text-stone-200 block truncate">
                            {doc.name}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-stone-400">
                            {doc.date} · {doc.size}
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0">
                        {biometricUnlocked ? (
                          <button
                            onClick={() => {
                              onTriggerNotification('Document Download', `${doc.name}`);
                            }}
                            className="px-2.5 sm:px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors text-xs"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>{t.tracking.btnDownload}</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-1 text-stone-400 font-medium text-xs">
                            <Lock className="w-3.5 h-3.5 text-amber-500" />
                            <span className="hidden sm:inline">{t.tracking.lockedLabel}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notary Attribution Stamp */}
                <div className="p-3 bg-stone-100 dark:bg-stone-800/80 rounded-xl text-xs text-stone-600 dark:text-stone-300 flex items-center justify-between">
                  <span>{t.tracking.notaryAssigned} <strong>{activeDossier.notaryName}</strong></span>
                  <UserCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400 shrink-0" />
                </div>
              </div>

              {/* Right Column: Encrypted Cloud Backup */}
              <div className="lg:col-span-4 bg-white dark:bg-stone-900 rounded-2xl p-4 sm:p-6 border border-stone-200 dark:border-stone-800 shadow-xl flex flex-col justify-between space-y-4 overflow-hidden">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
                    <Cloud className="w-4 h-4" />
                    <span>{t.tracking.cloudTitle}</span>
                  </div>
                  
                  <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-white">
                    {t.tracking.cloudSubtitle}
                  </h4>
                  
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    {t.tracking.cloudDesc}
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500">{t.tracking.cloudStatusLabel}</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1 text-[11px] sm:text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {t.tracking.cloudSyncedBadge}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-stone-500">{t.tracking.lastBackupLabel}</span>
                      <span className="font-mono text-stone-700 dark:text-stone-300 text-[10px] sm:text-[11px]">
                        {lastBackupTime}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleTriggerCloudBackup}
                    disabled={backupStatus === 'syncing'}
                    className="w-full py-2.5 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${backupStatus === 'syncing' ? 'animate-spin text-amber-500' : ''}`} />
                    <span>{backupStatus === 'syncing' ? t.tracking.btnSyncing : t.tracking.btnForceSync}</span>
                  </button>

                  <button
                    onClick={handleDownloadVault}
                    className="w-full py-2.5 px-3 bg-emerald-900 text-amber-300 hover:bg-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t.tracking.btnExportVault}</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-8 max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-stone-900 dark:text-white">
              {t.tracking.notFoundTitle}
            </h4>
            <p className="text-xs text-stone-500 mt-1">
              {t.tracking.notFoundDesc}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
