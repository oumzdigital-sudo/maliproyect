export type PropertyType = 'terreno' | 'casa' | 'construccion' | 'chateau_ferme';
export type DocumentType = 'Titre Foncier (TF)' | 'Permis d\'Occuper' | 'Concession Rurale';
export type CurrencyCode = 'XOF' | 'EUR' | 'USD';
export type Language = 'es' | 'fr' | 'en';

export interface LocalizedString {
  es: string;
  fr: string;
  en: string;
}

export interface LocalizedFeatures {
  es: string[];
  fr: string[];
  en: string[];
}

export interface Property {
  id: string;
  title: LocalizedString;
  type: PropertyType;
  location: string;
  zone: 'Sirakoro' | 'Bamako' | 'Dialakorobougou' | 'Sotuba' | 'Kati' | 'Moribabougou' | 'Sanankoroba';
  coordinates: {
    lat: number;
    lng: number;
    x: number; // percentage on interactive map canvas (0-100)
    y: number; // percentage on interactive map canvas (0-100)
  };
  priceFCFA: number;
  surfaceM2: number;
  documentType: DocumentType;
  tfNumber?: string;
  imageUrl: string;
  gallery: string[];
  description: LocalizedString;
  features: LocalizedFeatures;
  isFeatured: boolean;
  status: 'disponible' | 'reserve' | 'vendu';
  badgeLabel?: LocalizedString;
  videoUrl?: string;
}

export interface TrackingStep {
  stepNumber: number;
  title: LocalizedString;
  description: LocalizedString;
  date: string;
  status: 'completed' | 'in_progress' | 'pending';
  authority: LocalizedString;
}

export interface TrackingDossier {
  code: string;
  clientName: string;
  phone: string;
  propertyTitle: LocalizedString;
  location: string;
  lotNumber: string;
  surfaceM2: number;
  totalPriceFCFA: number;
  amountPaidFCFA: number;
  currentStep: number;
  totalSteps: number;
  lastUpdate: LocalizedString;
  notaryName: string;
  isSecuredBiometric: boolean;
  steps: TrackingStep[];
  documents: {
    name: string;
    type: 'pdf' | 'doc' | 'image';
    date: string;
    size: string;
    isEncrypted: boolean;
  }[];
}

export interface NotificationItem {
  id: string;
  title: LocalizedString;
  message: LocalizedString;
  time: LocalizedString;
  type: 'document' | 'property' | 'construction' | 'system';
  read: boolean;
  linkAction?: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  suggestedActions?: { label: string; action: string }[];
}
