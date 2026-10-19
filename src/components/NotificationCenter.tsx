import React, { useState } from 'react';
import { 
  Bell, 
  X, 
  Check, 
  CheckCheck, 
  FileCheck2, 
  Building, 
  Cloud, 
  Hammer,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { NotificationItem } from '../types';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
  onMarkAllAsRead: () => void;
  onNavigateAction?: (action: string) => void;
}

export const NotificationCenter: React.FC<NotificationCenterProps> = ({
  isOpen,
  onClose,
  notifications,
  onMarkAllAsRead,
  onNavigateAction,
}) => {
  const [pushEnabled, setPushEnabled] = useState(false);
  const [permissionState, setPermissionState] = useState<string>('default');

  if (!isOpen) return null;

  const handleRequestPush = async () => {
    if ('Notification' in window) {
      try {
        const perm = await Notification.requestPermission();
        setPermissionState(perm);
        if (perm === 'granted') {
          setPushEnabled(true);
          new Notification('Groupe Kaniba Immobilier', {
            body: 'Notifications push activées avec succès pour vos alertes de Titres Fonciers.',
            icon: '/assets/aistudio/image_ca295a99.png',
          });
        }
      } catch (e) {
        setPushEnabled(true);
      }
    } else {
      setPushEnabled(true);
    }
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white dark:bg-stone-900 h-full shadow-2xl border-l border-stone-200 dark:border-stone-800 flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-stone-100 dark:border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-900/10 dark:bg-emerald-900/40 text-emerald-800 dark:text-amber-400 flex items-center justify-center">
              <Bell className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-stone-900 dark:text-white flex items-center gap-2">
                <span>Centre de Notifications</span>
                {unreadCount > 0 && (
                  <span className="text-[10px] bg-amber-500 text-stone-950 px-2 py-0.5 rounded-full font-bold">
                    {unreadCount} nouveau(x)
                  </span>
                )}
              </h3>
              <p className="text-[11px] text-stone-500">Alertes Titres Fonciers & Chantiers</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Push Activation Banner */}
        <div className="p-3.5 mx-4 mt-3 bg-stone-50 dark:bg-stone-800/70 rounded-xl border border-stone-200 dark:border-stone-700 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700 dark:text-amber-400 shrink-0" />
            <span className="text-stone-700 dark:text-stone-300">
              {pushEnabled ? 'Notifications Push Actives' : 'Activer les alertes sur mobile'}
            </span>
          </div>

          {!pushEnabled ? (
            <button
              onClick={handleRequestPush}
              className="px-2.5 py-1 bg-emerald-800 hover:bg-emerald-700 text-white rounded-md text-[11px] font-semibold whitespace-nowrap"
            >
              Autoriser
            </button>
          ) : (
            <span className="text-[11px] text-emerald-600 font-bold flex items-center gap-1">
              <Check className="w-3 h-3" /> Connecté
            </span>
          )}
        </div>

        {/* Notification Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {notifications.map((item) => {
            const Icon = 
              item.type === 'document' ? FileCheck2 :
              item.type === 'property' ? Building :
              item.type === 'construction' ? Hammer : Cloud;

            return (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border transition-all text-xs ${
                  item.read
                    ? 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400'
                    : 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800 text-stone-800 dark:text-stone-200 shadow-xs'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    item.read
                      ? 'bg-stone-200 dark:bg-stone-700 text-stone-500'
                      : 'bg-emerald-900 text-amber-300'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-bold text-stone-900 dark:text-white truncate">
                        {item.title}
                      </span>
                      <span className="text-[10px] text-stone-400 font-mono shrink-0 ml-2">
                        {item.time}
                      </span>
                    </div>

                    <p className="text-[11px] leading-relaxed text-stone-600 dark:text-stone-300">
                      {item.message}
                    </p>

                    {item.linkAction && (
                      <button
                        onClick={() => {
                          onNavigateAction?.(item.linkAction!);
                          onClose();
                        }}
                        className="mt-2 text-[11px] font-semibold text-emerald-800 dark:text-amber-400 hover:underline flex items-center gap-1"
                      >
                        <span>Consulter la mise à jour</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between bg-stone-50 dark:bg-stone-900">
          <button
            onClick={onMarkAllAsRead}
            className="text-xs font-semibold text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white flex items-center gap-1.5"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Tout marquer comme lu</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 rounded-lg text-xs font-semibold"
          >
            Fermer
          </button>
        </div>

      </div>
    </div>
  );
};
