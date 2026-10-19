export type PropertyType = 'terreno' | 'casa' | 'construccion' | 'chateau_ferme';
export type DocumentType = 'Titre Foncier (TF)' | 'Permis d\'Occuper' | 'Concession Rurale';
export type CurrencyCode = 'XOF' | 'EUR' | 'USD';

export interface Property {
  id: string;
  title: string;
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
  description: string;
  features: string[];
  isFeatured: boolean;
  status: 'disponible' | 'reserve' | 'vendu';
  badgeLabel?: string;
  videoUrl?: string;
}

export interface TrackingStep {
  stepNumber: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'in_progress' | 'pending';
  authority: string;
}

export interface TrackingDossier {
  code: string;
  clientName: string;
  phone: string;
  propertyTitle: string;
  location: string;
  lotNumber: string;
  surfaceM2: number;
  totalPriceFCFA: number;
  amountPaidFCFA: number;
  currentStep: number;
  totalSteps: number;
  lastUpdate: string;
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
  title: string;
  message: string;
  time: string;
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
