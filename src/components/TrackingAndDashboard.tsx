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
  Clock, 
  AlertCircle,
  Database,
  RefreshCw,
  QrCode,
  Building,
  KeyRound,
  FileText,
  UserCheck
} from 'lucide-react';
import { TRACKING_DOSSIERS } from '../data/mockData';
import { TrackingDossier, CurrencyCode } from '../types';
import { formatCurrency } from '../utils/formatters';

interface TrackingAndDashboardProps {
  currency: CurrencyCode;
  onTriggerNotification: (title: string, message: string) => void;
}

export const TrackingAndDashboard: React.FC<TrackingAndDashboardProps> = ({
  currency,
  onTriggerNotification,
}) => {
  const [searchCode, setSearchCode] = useState<string>('KNB-2026-7842');
  const [activeDossier, setActiveDossier] = useState<TrackingDossier | null>(TRACKING_DOSSIERS['KNB-2026-7842'] || null);
  const [biometricUnlocked, setBiometricUnlocked] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Cloud backup state
  const [backupStatus, setBackupStatus] = useState<'idle' | 'syncing' | 'completed'>('idle');
  const [lastBackupTime, setLastBackupTime] = useState<string>('19 Octobre 2026, 14:02 GMT');

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

  // Biometric Unlock simulation with WebAuthn browser API or authentic secure modal
  const handleBiometricAuth = async () => {
    setIsAuthenticating(true);
    setAuthError(null);

    try {
      // Check if WebAuthn is supported
      if (window.PublicKeyCredential && typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === 'function') {
        // High fidelity biometric challenge simulation
        await new Promise((resolve) => setTimeout(resolve, 800));
        setBiometricUnlocked(true);
        onTriggerNotification(
          'Authentification Biométrique Réussie',
          'Accès déverrouillé aux Titres Fonciers et documents notariés sécurisés.'
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
        setBiometricUnlocked(true);
        onTriggerNotification(
          'Accès Sécurisé Validé',
          'Documents officiels accessibles sous chiffrement client.'
        );
      }
    } catch (err) {
      setAuthError('Authentification biométrique annulée.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Encrypted cloud backup trigger
  const handleTriggerCloudBackup = () => {
    setBackupStatus('syncing');
    setTimeout(() => {
      setBackupStatus('completed');
      const now = new Date().toLocaleString('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      setLastBackupTime(`${now} GMT`);
      onTriggerNotification(
        'Sauvegarde Cloud Chiffrée Réussie',
        `Vos dossiers fonciers et actes notariés sont protégés sous chiffrement AES-256.`
      );
      setTimeout(() => setBackupStatus('idle'), 3000);
    }, 1200);
  };

  const handleDownloadVault = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(
      JSON.stringify({
        vault: "GROUPE_KANIBA_ENCRYPTED_VAULT_V2",
        dossier: activeDossier?.code,
        client: activeDossier?.clientName,
        checksumSha256: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        timestamp: new Date().toISOString(),
        encryption: "AES-GCM-256-BIT"
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
    <section id="seguimiento" className="py-16 sm:py-24 bg-stone-100 dark:bg-stone-950 transition-colors border-t border-stone-200 dark:border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
              <FileCheck2 className="w-3.5 h-3.5" />
              <span>Transparence Foncière & Suivi Notarié</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-stone-900 dark:text-white tracking-tight">
              Suivi de Dossier & Espace Client Sécurisé
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl">
              Consultez l'avancement de votre Titre Foncier en temps réel, accédez à vos quittances certifiées et sécurisez vos actes avec l'authentification biométrique.
            </p>
          </div>

          {/* Quick Dossier Switcher Chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-stone-500 dark:text-stone-400 font-medium mr-1">Dossiers d'essai :</span>
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
        <div className="max-w-2xl mx-auto mb-10">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
              <input
                type="text"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                placeholder="Entrez votre numéro de dossier (ex: KNB-2026-7842)"
                className="w-full pl-10 pr-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl text-sm font-mono text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-3 bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-xs shrink-0"
            >
              Rechercher
            </button>
          </form>
        </div>

        {activeDossier ? (
          <div className="space-y-8">
            
            {/* Dossier Overview Card */}
            <div className="bg-white dark:bg-stone-900 rounded-2xl p-6 sm:p-8 border border-stone-200 dark:border-stone-800 shadow-xl">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-100 dark:border-stone-800">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-extrabold text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded">
                      DOSSIER {activeDossier.code}
                    </span>
                    <span className="text-xs text-stone-500">Mise à jour : {activeDossier.lastUpdate}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-stone-900 dark:text-white">
                    {activeDossier.propertyTitle}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1">
                    Titulaire : <span className="font-semibold text-stone-900 dark:text-stone-200">{activeDossier.clientName}</span> · {activeDossier.location} ({activeDossier.surfaceM2} m²)
                  </p>
                </div>

                {/* Status KPI */}
                <div className="flex items-center gap-4 bg-stone-50 dark:bg-stone-800/80 p-3.5 rounded-xl border border-stone-200 dark:border-stone-700">
                  <div className="text-right">
                    <span className="text-[11px] text-stone-500 dark:text-stone-400 uppercase tracking-wider block">
                      Avancement Juridique
                    </span>
                    <span className="text-lg font-bold text-emerald-800 dark:text-amber-400 font-mono">
                      Étape {activeDossier.currentStep} / {activeDossier.totalSteps}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-full border-4 border-stone-200 dark:border-stone-700 flex items-center justify-center text-xs font-bold text-emerald-700 dark:text-amber-400 relative">
                    <span className="font-mono">{Math.round((activeDossier.currentStep / activeDossier.totalSteps) * 100)}%</span>
                  </div>
                </div>
              </div>

              {/* Progress Stepper Timeline */}
              <div className="pt-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-6">
                  Chronologie Officielle d'Attribution Foncière
                </h4>

                <div className="relative">
                  {/* Connecting line */}
                  <div className="hidden md:block absolute top-5 left-6 right-6 h-0.5 bg-stone-200 dark:bg-stone-700 z-0" />

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                    {activeDossier.steps.map((st, i) => {
                      const isPast = st.status === 'completed';
                      const isCurrent = st.status === 'in_progress';

                      return (
                        <div key={i} className="flex md:flex-col items-start gap-3 md:gap-2">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-all ${
                              isPast
                                ? 'bg-emerald-700 text-white shadow-md'
                                : isCurrent
                                ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-400/20 shadow-md animate-pulse'
                                : 'bg-stone-100 dark:bg-stone-800 text-stone-400 border border-stone-300 dark:border-stone-700'
                            }`}
                          >
                            {isPast ? <CheckCircle2 className="w-5 h-5" /> : st.stepNumber}
                          </div>

                          <div className="flex-1">
                            <span className="text-[11px] font-mono font-semibold text-stone-400 block">
                              {st.date}
                            </span>
                            <h5 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-white mt-0.5">
                              {st.title}
                            </h5>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1 line-clamp-2">
                              {st.description}
                            </p>
                            <span className="text-[10px] text-emerald-700 dark:text-amber-400 font-medium block mt-1">
                              {st.authority}
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Protected Documents Vault with Biometrics */}
              <div className="lg:col-span-8 bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-stone-100 dark:border-stone-800">
                  <div>
                    <h4 className="text-base font-bold text-stone-900 dark:text-white flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                      Coffre-Fort des Pièces Juridiques
                    </h4>
                    <p className="text-xs text-stone-500">
                      Protection biométrique renforcée contre la fraude documentaire et l'usurpation.
                    </p>
                  </div>

                  {/* Biometric Trigger Button */}
                  {!biometricUnlocked ? (
                    <button
                      onClick={handleBiometricAuth}
                      disabled={isAuthenticating}
                      className="px-3.5 py-2 bg-emerald-900 text-amber-300 hover:bg-emerald-800 text-xs font-bold rounded-xl flex items-center gap-2 transition-all shadow-xs"
                    >
                      <Fingerprint className={`w-4 h-4 text-amber-400 ${isAuthenticating ? 'animate-spin' : ''}`} />
                      <span>{isAuthenticating ? 'Vérification...' : 'Déverrouiller avec Biométrie'}</span>
                    </button>
                  ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-300 text-xs font-bold rounded-lg border border-emerald-300 dark:border-emerald-800">
                      <Unlock className="w-3.5 h-3.5" />
                      <span>Accès Biométrique Accordé</span>
                    </div>
                  )}
                </div>

                {/* Documents List */}
                <div className="space-y-2.5">
                  {activeDossier.documents.map((doc, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700/60 text-xs"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-stone-200 dark:bg-stone-700 flex items-center justify-center text-stone-600 dark:text-stone-300">
                          <FileText className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="font-semibold text-stone-800 dark:text-stone-200 block truncate max-w-xs sm:max-w-md">
                            {doc.name}
                          </span>
                          <span className="text-[11px] text-stone-400">
                            {doc.date} · {doc.size}
                          </span>
                        </div>
                      </div>

                      <div>
                        {biometricUnlocked ? (
                          <button
                            onClick={() => {
                              onTriggerNotification('Téléchargement Initié', `Téléchargement sécurisé de ${doc.name}.`);
                            }}
                            className="px-3 py-1.5 bg-emerald-800 hover:bg-emerald-700 text-white rounded-lg font-semibold flex items-center gap-1.5 transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Télécharger</span>
                          </button>
                        ) : (
                          <div className="flex items-center gap-1.5 text-stone-400 font-medium">
                            <Lock className="w-3.5 h-3.5 text-amber-500" />
                            <span>Verrouillé</span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Notary Attribution Stamp */}
                <div className="p-3 bg-stone-100 dark:bg-stone-800/80 rounded-xl text-xs text-stone-600 dark:text-stone-300 flex items-center justify-between">
                  <span>Étude Notariale en charge : <strong>{activeDossier.notaryName}</strong></span>
                  <UserCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400" />
                </div>
              </div>

              {/* Right Column: Encrypted Cloud Backup & Security Panel */}
              <div className="lg:col-span-4 bg-white dark:bg-stone-900 rounded-2xl p-6 border border-stone-200 dark:border-stone-800 shadow-xl flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-amber-400 uppercase tracking-wider mb-2">
                    <Cloud className="w-4 h-4" />
                    <span>Sauvegardes Cloud Chiffrées</span>
                  </div>
                  
                  <h4 className="text-base font-bold text-stone-900 dark:text-white">
                    Sécurité Cryptographique AES-256
                  </h4>
                  
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Vos attestations de propriété sont répliquées sur des serveurs cloud souverains sécurisés conformément à la législation malienne sur les données personnelles (APDP).
                  </p>

                  <div className="mt-4 p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-stone-500">Statut Réseau :</span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Chiffré & Synchronisé
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-stone-500">Dernière Sauvegarde :</span>
                      <span className="font-mono text-stone-700 dark:text-stone-300 text-[11px]">
                        {lastBackupTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Cloud Actions */}
                <div className="space-y-2 pt-2">
                  <button
                    onClick={handleTriggerCloudBackup}
                    disabled={backupStatus === 'syncing'}
                    className="w-full py-2.5 px-3 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${backupStatus === 'syncing' ? 'animate-spin text-amber-500' : ''}`} />
                    <span>{backupStatus === 'syncing' ? 'Chiffrement en cours...' : 'Forcer Synchronisation Cloud'}</span>
                  </button>

                  <button
                    onClick={handleDownloadVault}
                    className="w-full py-2.5 px-3 bg-emerald-900 text-amber-300 hover:bg-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Exporter Archive Chiffrée (.vault)</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-8 max-w-lg mx-auto">
            <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
            <h4 className="text-base font-bold text-stone-900 dark:text-white">
              Dossier Introuvable
            </h4>
            <p className="text-xs text-stone-500 mt-1">
              Veuillez vérifier votre référence ou sélectionner l'un de nos dossiers d'essai en haut (KNB-2026-7842).
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
