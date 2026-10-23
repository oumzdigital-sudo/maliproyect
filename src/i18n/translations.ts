import { Language } from '../types';

export interface Translations {
  maliIdentity: {
    country: string;
    republic: string;
    motto: string;
    flagAlt: string;
    cadastralRegistry: string;
    phoneCode: string;
    capital: string;
    mainZone: string;
  };
  nav: {
    properties: string;
    map: string;
    construction: string;
    diaspora: string;
    tracking: string;
    contactAgent: string;
    currency: string;
    language: string;
    notifications: string;
    darkMode: string;
    callNow: string;
  };
  hero: {
    trustBadge: string;
    h1: string;
    subtitle: string;
    tabLand: string;
    tabHouse: string;
    tabConstruction: string;
    labelLocation: string;
    allZones: string;
    zoneSirakoro: string;
    zoneDialakorobougou: string;
    zoneSotuba: string;
    zoneSanankoroba: string;
    zoneKati: string;
    labelBudget: string;
    anyBudget: string;
    upTo10m: string;
    upTo20m: string;
    upTo45m: string;
    upTo80m: string;
    btnSearch: string;
    guaranteedTf: string;
    exploreMap: string;
    kpi1Title: string;
    kpi1Sub: string;
    kpi2Title: string;
    kpi2Sub: string;
    kpi3Title: string;
    kpi3Sub: string;
    kpi4Title: string;
    kpi4Sub: string;
  };
  catalog: {
    badge: string;
    title: string;
    subtitle: string;
    countVerified: string;
    catAll: string;
    catLand: string;
    catHouse: string;
    catFarm: string;
    filterZone: string;
    allZonesOption: string;
    onlyTf: string;
    sortBy: string;
    sortFeatured: string;
    sortPriceAsc: string;
    sortPriceDesc: string;
    sortSurface: string;
    officialPrice: string;
    btnDetails: string;
    btnReserve: string;
    emptyTitle: string;
    emptySub: string;
    btnReset: string;
  };
  modal: {
    certifiedLegal: string;
    certifiedLegalSub: string;
    immediateAvailable: string;
    underOption: string;
    acquisitionPrice: string;
    equivalent: string;
    surfaceArea: string;
    featuresTitle: string;
    simulatorTitle: string;
    monthsLabel: string;
    downPaymentLabel: string;
    monthlyPaymentLabel: string;
    perMonth: string;
    btnReserveWhatsApp: string;
    btnCallAdvisor: string;
    btnShare: string;
    copied: string;
  };
  map: {
    badge: string;
    title: string;
    subtitle: string;
    btnCadastral: string;
    btnSatellite: string;
    filterPins: string;
    allProperties: string;
    boundaryLands: string;
    villasKaniba: string;
    farmsOption: string;
    riverNigerLabel: string;
    pontMartyrs: string;
    pontFahd: string;
    rn6Label: string;
    perimeterSirakoro: string;
    legendTitle: string;
    legendText: string;
    legendCite: string;
    legendTf: string;
    legendRiver: string;
    btnSheetPlans: string;
    btnSheetWhatsApp: string;
  };
  construction: {
    badge: string;
    title: string;
    subtitle: string;
    comparisonBadge: string;
    comparisonTitle: string;
    dragHelper: string;
    afterLabel: string;
    beforeLabel: string;
    kpiDeliveryTitle: string;
    kpiDeliveryVal: string;
    kpiWarrantyTitle: string;
    kpiWarrantyVal: string;
    kpiMaterialsTitle: string;
    kpiMaterialsVal: string;
    kpiFollowupTitle: string;
    kpiFollowupVal: string;
    stage1Number: string;
    stage1Title: string;
    stage1Desc: string;
    stage2Number: string;
    stage2Title: string;
    stage2Desc: string;
    stage3Number: string;
    stage3Title: string;
    stage3Desc: string;
    stage4Number: string;
    stage4Title: string;
    stage4Desc: string;
    hardwareBadge: string;
    hardwareTitle: string;
    hardwareDesc: string;
    btnQuote: string;
  };
  diaspora: {
    badge: string;
    title: string;
    subtitle: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    pillar4Title: string;
    pillar4Desc: string;
    btnVideoCall: string;
    directLines: string;
    testimonialBadge: string;
    testimonialQuote: string;
    testimonialAuthor: string;
    calcTitle: string;
    calcRateBadge: string;
    calcCapitalLabel: string;
    calcHorizonLabel: string;
    calcYears: string;
    calcEstimatedVal: string;
    calcNetGain: string;
  };
  tracking: {
    badge: string;
    title: string;
    subtitle: string;
    sampleChipsLabel: string;
    searchPlaceholder: string;
    btnSearch: string;
    lastUpdateLabel: string;
    ownerLabel: string;
    kpiLegalProgress: string;
    stepOf: string;
    timelineTitle: string;
    vaultTitle: string;
    vaultDesc: string;
    btnBiometricUnlock: string;
    biometricVerifying: string;
    biometricUnlockedBadge: string;
    btnDownload: string;
    lockedLabel: string;
    notaryAssigned: string;
    cloudTitle: string;
    cloudSubtitle: string;
    cloudDesc: string;
    cloudStatusLabel: string;
    cloudSyncedBadge: string;
    lastBackupLabel: string;
    btnForceSync: string;
    btnSyncing: string;
    btnExportVault: string;
    notFoundTitle: string;
    notFoundDesc: string;
  };
  contact: {
    tiktokTitle: string;
    tiktokSub: string;
    tiktokDesc: string;
    btnWatchTiktok: string;
    badge: string;
    title: string;
    subtitle: string;
    linesTitle: string;
    officesTitle: string;
    office1: string;
    office2: string;
    fastResponseTitle: string;
    fastResponseSub: string;
    btnWhatsAppFast: string;
    formTitle: string;
    formSub: string;
    nameLabel: string;
    phoneLabel: string;
    projectLabel: string;
    projectOpt1: string;
    projectOpt2: string;
    projectOpt3: string;
    projectOpt4: string;
    projectOpt5: string;
    msgLabel: string;
    msgPlaceholder: string;
    privacyNote: string;
    btnSubmit: string;
    successTitle: string;
    successDesc: string;
  };
  bot: {
    title: string;
    role: string;
    greeting: string;
    chipSirakoro: string;
    chipTf: string;
    chipDiaspora: string;
    chipVisit: string;
    querySirakoro: string;
    queryTf: string;
    queryDiaspora: string;
    queryVisit: string;
    answerSirakoro: string;
    answerTf: string;
    answerDiaspora: string;
    answerConstruction: string;
    answerVisit: string;
    answerFallback: string;
    inputPlaceholder: string;
    btnWhatsAppHandoff: string;
    btnCatalog: string;
    liveHandoffLink: string;
  };
  floatingWhatsApp: {
    title: string;
    desc: string;
    agentBamakoTitle: string;
    agentSirakoroTitle: string;
    btnLabel: string;
  };
  notificationsCenter: {
    title: string;
    subtitle: string;
    pushMobileTitle: string;
    pushActive: string;
    btnAuthorize: string;
    btnMarkAllRead: string;
    btnClose: string;
    seeUpdate: string;
  };
  privacy: {
    title: string;
    text: string;
    btnAccept: string;
  };
  footer: {
    tagline: string;
    about: string;
    btnTiktok: string;
    btnWhatsApp: string;
    navTitle: string;
    contactTitle: string;
    address: string;
    hours: string;
    copyright: string;
    legalItems: string[];
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  // ========================== ESPAÑOL ==========================
  es: {
    maliIdentity: {
      country: 'Malí',
      republic: 'República de Malí',
      motto: 'Un Pueblo - Una Meta - Una Fe',
      flagAlt: 'Bandera oficial de Malí 🇲🇱',
      cadastralRegistry: 'Registro Catastral Nacional de Malí',
      phoneCode: '+223',
      capital: 'Bamako',
      mainZone: 'Sirakoro & Bamako',
    },
    nav: {
      properties: 'Propiedades',
      map: 'Mapa Dinámico',
      construction: 'Construcción',
      diaspora: 'Diáspora Malí',
      tracking: 'Seguimiento & Portal',
      contactAgent: 'Hablar con Agente',
      currency: 'Moneda',
      language: 'Idioma',
      notifications: 'Notificaciones',
      darkMode: 'Modo oscuro',
      callNow: 'Llamar (+223)',
    },
    hero: {
      trustBadge: 'Groupe Kaniba · Garantía de Título Foncier y Acto Notarial en Malí 🇲🇱',
      h1: 'Tu terreno seguro y la casa de tus sueños en Bamako y Sirakoro.',
      subtitle: 'Accede a parcelas 100% legalizadas con Título Foncier, chalets modernos en La Cité Kaniba y construcción llave en mano con acompañamiento notarial exclusivo para residentes y la diáspora.',
      tabLand: 'Comprar Terreno',
      tabHouse: 'Comprar Casa',
      tabConstruction: 'Construcción',
      labelLocation: 'Ubicación en Malí',
      allZones: 'Todas las zonas (Bamako & Sirakoro)',
      zoneSirakoro: 'Sirakoro Meguetana & Cité Kaniba',
      zoneDialakorobougou: 'Dialakorobougou',
      zoneSotuba: 'Sotuba ACI',
      zoneSanankoroba: 'Sanankoroba (Fincas & Campos)',
      zoneKati: 'Kati & Koulikoro',
      labelBudget: 'Presupuesto Máximo',
      anyBudget: 'Cualquier presupuesto',
      upTo10m: 'Hasta 10 000 000 FCFA (~15 000 €)',
      upTo20m: 'Hasta 20 000 000 FCFA (~30 500 €)',
      upTo45m: 'Hasta 45 000 000 FCFA (~68 600 €)',
      upTo80m: 'Hasta 80 000 000 FCFA (~122 000 €)',
      btnSearch: 'Buscar Propiedades',
      guaranteedTf: '100% de expedientes con Título Foncier verificado',
      exploreMap: 'Ver en el mapa interactivo',
      kpi1Title: 'Título Foncier (TF)',
      kpi1Sub: 'Garantía jurídica absoluta de Malí 🇲🇱',
      kpi2Title: 'La Cité Kaniba',
      kpi2Sub: 'Chalets modernos en Sirakoro',
      kpi3Title: '+870K Seguidores',
      kpi3Sub: 'Líder inmobiliario en TikTok Malí',
      kpi4Title: 'Ventanilla Diáspora',
      kpi4Sub: 'Compra segura a distancia',
    },
    catalog: {
      badge: 'Catálogo Oficial Groupe Kaniba 🇲🇱',
      title: 'Propiedades Reales y Parcelas Delimitadas',
      subtitle: 'Cada propiedad cuenta con Título Foncier (TF) inatacable, certificado ante el Catastro Nacional y formalizado mediante acta notarial oficial.',
      countVerified: 'inmueble(s) verificado(s) disponible(s)',
      catAll: 'Todas las Ofertas',
      catLand: 'Terrenos (Sirakoro & Bamako)',
      catHouse: 'Villas & Chalets Cité Kaniba',
      catFarm: 'Campos & Fincas Agrícolas',
      filterZone: 'Filtrar por Zona',
      allZonesOption: 'Todas las Localidades',
      onlyTf: '100% Título Foncier',
      sortBy: 'Ordenar por:',
      sortFeatured: 'Destacados',
      sortPriceAsc: 'Precio Menor a Mayor',
      sortPriceDesc: 'Precio Mayor a Menor',
      sortSurface: 'Mayor Superficie',
      officialPrice: 'Precio Oficial',
      btnDetails: 'Ficha Completa',
      btnReserve: 'Reservar',
      emptyTitle: 'No se encontraron propiedades con estos criterios.',
      emptySub: 'Comunícate directamente con un agente al +223 70 15 65 65 para parcelas a medida.',
      btnReset: 'Restablecer filtros',
    },
    modal: {
      certifiedLegal: 'Seguridad Jurídica Certificada de Malí 🇲🇱',
      certifiedLegalSub: 'Acta auténtica por notaría asociada en Bamako. Delimitación oficial y certificado de no litigio catastral.',
      immediateAvailable: 'Disponible Inmediatamente',
      underOption: 'Bajo Opción',
      acquisitionPrice: 'Precio de Adquisición',
      equivalent: 'Equivale a',
      surfaceArea: 'Superficie',
      featuresTitle: 'Características Incluidas',
      simulatorTitle: 'Simulador de Cuotas (Sin Intereses)',
      monthsLabel: 'Meses',
      downPaymentLabel: 'Enganche inicial',
      monthlyPaymentLabel: 'Mensualidad estimada',
      perMonth: '/mes',
      btnReserveWhatsApp: 'Reservar por WhatsApp Oficial 🇲🇱',
      btnCallAdvisor: 'Llamar a un Asesor',
      btnShare: 'Compartir',
      copied: '¡Copiado!',
    },
    map: {
      badge: 'Cartografía Dinámica & Delimitaciones Catastrales 🇲🇱',
      title: 'Mapa Dinámico de Urbanizaciones en Bamako y Sirakoro',
      subtitle: 'Explora la ubicación exacta de las parcelas, la cercanía con el Río Níger, las avenidas pavimentadas y las fases de La Cité Kaniba.',
      btnCadastral: 'Plano Catastral',
      btnSatellite: 'Vista Satélite & Relieve',
      filterPins: 'Filtrar marcadores:',
      allProperties: 'Todos los Inmuebles',
      boundaryLands: 'Terrenos Delimitados',
      villasKaniba: 'Villas Cité Kaniba',
      farmsOption: 'Fincas Agrícolas',
      riverNigerLabel: 'RÍO NÍGER · BAMAKO 🇲🇱',
      pontMartyrs: 'Puente de los Mártires',
      pontFahd: 'Puente Rey Fahd',
      rn6Label: 'Ruta Nacional RN6 (Eje Ségou)',
      perimeterSirakoro: '★ PERÍMETRO SIRAKORO & CITÉ KANIBA',
      legendTitle: 'Distrito de Bamako y Círculo de Kati 🇲🇱',
      legendText: 'Haz clic en un marcador para ver la ficha y verificar el Título Foncier.',
      legendCite: 'Cité Kaniba',
      legendTf: 'Parcelas TF',
      legendRiver: 'Río Níger',
      btnSheetPlans: 'Ficha y Planos',
      btnSheetWhatsApp: 'WhatsApp',
    },
    construction: {
      badge: 'Groupe Kaniba Construcción & BTP 🇲🇱',
      title: 'De los Cimientos al Último Azulejo: Construcción sin Compromisos',
      subtitle: 'Edificamos tu villa sobre tu propio terreno o dentro de La Cité Kaniba con materiales rigurosamente seleccionados de nuestra ferretería certificada.',
      comparisonBadge: 'Comparativa de Obra · Antes / Después',
      comparisonTitle: 'De la Estructura en Bruto a la Villa Entregada en Sirakoro',
      dragHelper: 'Desliza el cursor para comparar:',
      afterLabel: 'DESPUÉS: Villa Entregada y Habitada',
      beforeLabel: 'ANTES: Obra Gruesa y Cimentación',
      kpiDeliveryTitle: 'Plazo Promedio de Entrega:',
      kpiDeliveryVal: '4 a 6 Meses Llave en Mano',
      kpiWarrantyTitle: 'Garantía Decenal:',
      kpiWarrantyVal: '10 Años de Cobertura Estructural',
      kpiMaterialsTitle: 'Suministro de Materiales:',
      kpiMaterialsVal: 'Ferretería Kaniba Plus 🇲🇱',
      kpiFollowupTitle: 'Seguimiento Digital:',
      kpiFollowupVal: 'Reportes en Video Semanales',
      stage1Number: '01',
      stage1Title: 'Topografía y Cimentación Armada',
      stage1Desc: 'Nivelación con láser, zapatas continuas de hormigón dosificado a 350 kg/m³ y armaduras anti-fisuras garantizadas.',
      stage2Number: '02',
      stage2Title: 'Estructura y Albañilería Compacta',
      stage2Desc: 'Bloques de alta densidad fabricados por Quincaillerie Kaniba Plus para un aislamiento térmico óptimo en el clima de Malí.',
      stage3Number: '03',
      stage3Title: 'Acabados y Carpintería de Lujo',
      stage3Desc: 'Gres porcelánico pulido, falsos techos con molduras de diseño moderno, vidrios polarizados y fontanería multicapa.',
      stage4Number: '04',
      stage4Title: 'Energía Solar y Entrega de Llaves',
      stage4Desc: 'Kits solares híbridos autónomos, pozo con torre de agua y entrega solemne de llaves con acta notarial oficial.',
      hardwareBadge: 'Quincaillerie Kaniba Plus (Materiales y Herramientas)',
      hardwareTitle: 'Sin intermediarios ni sobrecostes en cemento y hierro',
      hardwareDesc: 'Con nuestro centro logístico propio en Bamako, tus obras obtienen tarifas mayoristas en cemento certificado Dangote/Diamond, hierros FE500 y sanitarios europeos.',
      btnQuote: 'Solicitar Cotización de Construcción',
    },
    diaspora: {
      badge: 'Ventanilla Especial Diáspora Maliense e Internacional 🇲🇱',
      title: '¿Vives en el extranjero? Invierte en Malí con total seguridad.',
      subtitle: 'No pongas en riesgo tus ahorros. Groupe Kaniba ha diseñado el protocolo jurídico más riguroso para malienses y amigos de Malí residentes en Francia, España, EE. UU., Canadá y África.',
      pillar1Title: 'Poder Notarial Acreditado',
      pillar1Desc: 'Mandato formal validado consularmente o ante notario en el extranjero. Tu nombre figura plenamente registrado en el Título Foncier nacional de Malí.',
      pillar2Title: 'Inspecciones en Vivo por Dron y WhatsApp',
      pillar2Desc: 'Recorrido en directo con nuestro topógrafo sobre la parcela de Sirakoro. Verificas los mojones de hormigón antes de emitir cualquier pago.',
      pillar3Title: 'Cuenta de Custodia y Transferencia Segura',
      pillar3Desc: 'Fondos depositados en cuenta fiduciaria bancaria con recibo timbrado y seguimiento del fraccionamiento catastral paso a paso.',
      pillar4Title: 'Envío de Títulos por DHL Express',
      pillar4Desc: 'Recepción directa y asegurada de tus escrituras originales en tu domicilio particular en Europa, América o cualquier país.',
      btnVideoCall: 'Agendar Visita en Vivo por Videollamada',
      directLines: 'Líneas directas: +223 70 15 65 65 / +223 95 95 95 62',
      testimonialBadge: 'Testimonio Verificado de la Diáspora',
      testimonialQuote: '"Después de 12 años en el extranjero, recibí las llaves de mi villa en La Cité Kaniba y mi Título Foncier sin ningún contratiempo."',
      testimonialAuthor: 'Sr. y Sra. Keïta · Residentes en Francia 🇲🇱',
      calcTitle: 'Simulador de Plusvalía Inmobiliaria en Malí',
      calcRateBadge: '+18% Anual (Sirakoro)',
      calcCapitalLabel: 'Tu Capital de Inversión:',
      calcHorizonLabel: 'Plazo Estimado de Tenencia:',
      calcYears: 'Años',
      calcEstimatedVal: 'Valor Patrimonial Estimado:',
      calcNetGain: 'Ganancia Neta Estimada:',
    },
    tracking: {
      badge: 'Transparencia Catastral y Trámite Notarial 🇲🇱',
      title: 'Seguimiento de Expediente y Portal del Cliente',
      subtitle: 'Consulta el estado de tu Título Foncier en tiempo real, accede a tus recibos certificados y protege tus documentos confidenciales con autenticación biométrica.',
      sampleChipsLabel: 'Expedientes de prueba:',
      searchPlaceholder: 'Ingresa tu número de expediente (ej: KNB-2026-7842)',
      btnSearch: 'Buscar',
      lastUpdateLabel: 'Última actualización:',
      ownerLabel: 'Titular:',
      kpiLegalProgress: 'Avance Jurídico',
      stepOf: 'Paso',
      timelineTitle: 'Cronología Oficial de Otorgamiento Fonciario en Malí',
      vaultTitle: 'Bóveda de Documentos Legales Protegida',
      vaultDesc: 'Protección biométrica avanzada contra fraudes documentales y suplantación de identidad.',
      btnBiometricUnlock: 'Desbloquear con Biometría (Touch ID / Face ID)',
      biometricVerifying: 'Verificando credenciales...',
      biometricUnlockedBadge: 'Acceso Biométrico Concedido',
      btnDownload: 'Descargar',
      lockedLabel: 'Bloqueado',
      notaryAssigned: 'Notaría Asignada:',
      cloudTitle: 'Respaldos en la Nube Cifrados',
      cloudSubtitle: 'Seguridad Criptográfica AES-256',
      cloudDesc: 'Tus escrituras y certificados se respaldan en servidores soberanos de alta seguridad conforme a la ley maliense de protección de datos (APDP).',
      cloudStatusLabel: 'Estado del Respaldo:',
      cloudSyncedBadge: 'Cifrado y Sincronizado',
      lastBackupLabel: 'Última Copia:',
      btnForceSync: 'Sincronizar Respaldo en la Nube',
      btnSyncing: 'Cifrando datos...',
      btnExportVault: 'Exportar Bóveda Cifrada (.vault)',
      notFoundTitle: 'Expediente no encontrado',
      notFoundDesc: 'Por favor verifica la referencia o selecciona uno de los expedientes de prueba en la parte superior (KNB-2026-7842).',
    },
    contact: {
      tiktokTitle: '@agenceimmokaniba en TikTok Oficial 🇲🇱',
      tiktokSub: '873K Seguidores · 7.6 Millones de Me Gusta · Referencia N°1 en Malí',
      tiktokDesc: 'Sigue en directo las ceremonias de entrega de llaves, vídeos de parcelas en Sirakoro, delimitaciones y consejos inmobiliarios.',
      btnWatchTiktok: 'Ver Vídeos en TikTok',
      badge: 'Contacto Directo',
      title: 'Un equipo sobre el terreno en Bamako para asesorarte',
      subtitle: 'Nuestros asesores te atienden en nuestras dos agencias de Bamako y Sirakoro, u organizan visitas guiadas de lunes a sábado.',
      linesTitle: 'Líneas directas de llamada y WhatsApp (+223 🇲🇱):',
      officesTitle: 'Nuestras Sedes Físicas en Malí:',
      office1: 'Sede Central: Bamako, ACI 2000, Calle 314, Puerta 12',
      office2: 'Oficina de Ventas: Sirakoro Meguetana, Entrada Cité Kaniba',
      fastResponseTitle: '¿Necesitas respuesta en menos de 5 minutos?',
      fastResponseSub: 'Nuestro canal de WhatsApp está activo los 7 días de la semana',
      btnWhatsAppFast: 'WhatsApp Inmediato',
      formTitle: 'Solicitud de Adquisición y Visita en Terreno',
      formSub: 'Completa este formulario y un asesor asignado te contactará en menos de 24 horas.',
      nameLabel: 'Nombre y Apellidos *',
      phoneLabel: 'Teléfono / WhatsApp (con prefijo del país) *',
      projectLabel: 'Proyecto de Interés',
      projectOpt1: 'Terreno Residencial con Título Foncier (Sirakoro)',
      projectOpt2: 'Villa o Chalet en La Cité Kaniba',
      projectOpt3: 'Construcción Llave en Mano sobre Terreno Propio',
      projectOpt4: 'Campo Agrícola o Granja (Sanankoroba)',
      projectOpt5: 'Inversión Segura desde la Diáspora',
      msgLabel: 'Mensaje o Consultas Específicas',
      msgPlaceholder: 'Indica tu presupuesto estimado, superficie o fechas para visitar la parcela...',
      privacyNote: 'Tus datos están protegidos conforme a la ley maliense de protección de datos personales (APDP N° 2013-015).',
      btnSubmit: 'Enviar Solicitud de Visita',
      successTitle: '¡Solicitud Enviada con Éxito!',
      successDesc: 'Un asesor oficial de Groupe Kaniba se comunicará contigo vía WhatsApp a la brevedad.',
    },
    bot: {
      title: 'KanibaBot 24/7 🇲🇱',
      role: 'Asesor Virtual Inmobiliario y Catastral',
      greeting: '¡Hola! Soy el asistente virtual de Groupe Kaniba en Malí 🇲🇱. ¿En qué puedo orientarte hoy sobre terrenos, chalets o títulos de propiedad en Bamako y Sirakoro?',
      chipSirakoro: '📍 Precios en Sirakoro',
      chipTf: '📜 ¿Qué es un Título Foncier?',
      chipDiaspora: '🌍 Comprar desde el Extranjero',
      chipVisit: '🔑 Agendar Visita en Terreno',
      querySirakoro: 'Precios de parcelas en Sirakoro',
      queryTf: 'Qué es un Título Foncier en Malí',
      queryDiaspora: 'Cómo comprar desde la diáspora',
      queryVisit: 'Cómo agendar una visita a las parcelas',
      answerSirakoro: 'En Sirakoro Meguetana, nuestras parcelas residenciales de 400 m² (20x20m) con Título Foncier directo inician desde 7 500 000 FCFA (~11 400 €). Ofrecemos facilidades de pago fraccionado hasta en 12 meses sin intereses.',
      answerTf: 'El Título Foncier (TF) es la máxima garantía jurídica inmobiliaria en la República de Malí 🇲🇱. Es definitivo, inatacable y avalado por la Dirección Nacional de Dominios y el Notario.',
      answerDiaspora: 'Nuestra ventanilla para la diáspora te permite adquirir con total seguridad: 1) Elección de lote por videollamada en directo, 2) Mandato y poder notarial legalizado, 3) Pago mediante transferencia bancaria protegida, 4) Envío de tus escrituras originales por mensajería certificada DHL.',
      answerConstruction: 'Groupe Kaniba Construcción realiza villas llave en mano y chalets en La Cité Kaniba con materiales propios provistos por Quincaillerie Kaniba Plus. Incluimos estructura armada y paneles solares.',
      answerVisit: 'Las visitas guiadas a nuestros terrenos de Sirakoro, Cité Kaniba y Dialakorobougou son gratuitas de lunes a sábado. Puedes comunicarte directamente al +223 70 15 65 65 o al +223 95 95 95 62.',
      answerFallback: 'Gracias por tu consulta. Para enviarte los planos catastrales actualizados y las disponibilidades exactas en Malí, te sugerimos hablar de inmediato con un asesor por WhatsApp al +223 70 15 65 65.',
      inputPlaceholder: 'Escribe tu consulta sobre terrenos o villas...',
      btnWhatsAppHandoff: '💬 Pasar a WhatsApp con Agente',
      btnCatalog: '📐 Ver Catálogo de Propiedades',
      liveHandoffLink: 'Hablar por WhatsApp →',
    },
    floatingWhatsApp: {
      title: 'Agentes Certificados de Malí 🇲🇱',
      desc: 'Comunícate directamente con nuestro equipo en Bamako para reservar tu parcela o coordinar una visita:',
      agentBamakoTitle: 'Dirección Comercial Bamako',
      agentSirakoroTitle: 'Oficina Cité Kaniba (Sirakoro)',
      btnLabel: 'Hablar con un agente certificado 🇲🇱',
    },
    notificationsCenter: {
      title: 'Centro de Notificaciones',
      subtitle: 'Alertas de Títulos Fonciers y Obras en Malí 🇲🇱',
      pushMobileTitle: 'Activar notificaciones push en el móvil',
      pushActive: 'Notificaciones Push Activas',
      btnAuthorize: 'Permitir',
      btnMarkAllRead: 'Marcar todo como leído',
      btnClose: 'Cerrar',
      seeUpdate: 'Ver actualización',
    },
    privacy: {
      title: 'Protección de Datos & Confidencialidad Catastral :',
      text: 'En cumplimiento con la Ley N° 2013-015 de la República de Malí (APDP) y normativas internacionales, tus escrituras notariales, datos biométricos y planos catastrales se resguardan bajo cifrado soberano AES-256.',
      btnAccept: 'Aceptar y Continuar',
    },
    footer: {
      tagline: 'Tu socio confiable en la ciudad 🌐🤝',
      about: 'Pionero en la regularización y seguridad fonciaria en la República de Malí 🇲🇱. Terrenos delimitados con Título Foncier (TF), urbanizaciones en Sirakoro, chalets modernos en La Cité Kaniba y soluciones para la diáspora.',
      btnTiktok: 'TikTok Oficial',
      btnWhatsApp: 'WhatsApp Ventas',
      navTitle: 'Navegación Rápida',
      contactTitle: 'Contacto y Ubicación 🇲🇱',
      address: 'Bamako (ACI 2000) & Sirakoro Meguetana, Malí',
      hours: 'Lunes a Viernes de 08:00 a 18:00 · Sábados de 08:30 a 15:00',
      copyright: '© 2026 Groupe Kaniba Immobilier & BTP. Todos los derechos reservados.',
      legalItems: [
        'Conformidad APDP Malí (Ley 2013-015) 🇲🇱',
        'Títulos Fonciers Inatacables',
        'Cifrado en la Nube AES-256',
        'Un Peuple - Un But - Une Foi 🇲🇱',
      ],
    },
  },

  // ========================== FRANÇAIS ==========================
  fr: {
    maliIdentity: {
      country: 'Mali',
      republic: 'République du Mali',
      motto: 'Un Peuple - Un But - Une Foi',
      flagAlt: 'Drapeau officiel du Mali 🇲🇱',
      cadastralRegistry: 'Cadastre National de la République du Mali',
      phoneCode: '+223',
      capital: 'Bamako',
      mainZone: 'Sirakoro & Bamako',
    },
    nav: {
      properties: 'Propriétés',
      map: 'Carte Dynamique',
      construction: 'Construction & BTP',
      diaspora: 'Diaspora Mali',
      tracking: 'Suivi de Dossier',
      contactAgent: 'Parler à un Agent',
      currency: 'Devise',
      language: 'Langue',
      notifications: 'Notifications',
      darkMode: 'Mode sombre',
      callNow: 'Appeler (+223)',
    },
    hero: {
      trustBadge: 'Groupe Kaniba · Garantie Titre Foncier & Acte Notarié au Mali 🇲🇱',
      h1: 'Votre terrain sécurisé et la maison de vos rêves à Bamako et Sirakoro.',
      subtitle: 'Accédez à des parcelles 100% sécurisées avec Titre Foncier direct, des chalets modernes à La Cité Kaniba et une construction clés en main avec accompagnement notarié pour résidents et diaspora.',
      tabLand: 'Acheter un Terrain',
      tabHouse: 'Acheter une Maison',
      tabConstruction: 'Construction',
      labelLocation: 'Localisation au Mali',
      allZones: 'Toutes les zones (Bamako & Sirakoro)',
      zoneSirakoro: 'Sirakoro Meguetana & Cité Kaniba',
      zoneDialakorobougou: 'Dialakorobougou',
      zoneSotuba: 'Sotuba ACI',
      zoneSanankoroba: 'Sanankoroba (Fermes & Champs)',
      zoneKati: 'Kati & Koulikoro',
      labelBudget: 'Budget Maximum',
      anyBudget: 'Tous les budgets',
      upTo10m: 'Jusqu’à 10 000 000 FCFA (~15 000 €)',
      upTo20m: 'Jusqu’à 20 000 000 FCFA (~30 500 €)',
      upTo45m: 'Jusqu’à 45 000 000 FCFA (~68 600 €)',
      upTo80m: 'Jusqu’à 80 000 000 FCFA (~122 000 €)',
      btnSearch: 'Rechercher un Bien',
      guaranteedTf: '100% de dossiers avec Titre Foncier vérifié',
      exploreMap: 'Explorer la carte interactive',
      kpi1Title: 'Titre Foncier (TF)',
      kpi1Sub: 'Garantie juridique absolue au Mali 🇲🇱',
      kpi2Title: 'La Cité Kaniba',
      kpi2Sub: 'Chalets modernes à Sirakoro',
      kpi3Title: '+870K Abonnés',
      kpi3Sub: 'N°1 Immobilier sur TikTok Mali',
      kpi4Title: 'Guichet Diaspora',
      kpi4Sub: 'Achat sécurisé à distance',
    },
    catalog: {
      badge: 'Catalogue Officiel Groupe Kaniba 🇲🇱',
      title: 'Propriétés Réelles & Parcelles Bornées',
      subtitle: 'Chaque bien immobilier proposé bénéficie d’un Titre Foncier (TF) inattaquable, authentifié auprès du Cadastre National et délivré par acte notarié.',
      countVerified: 'bien(s) vérifié(s) disponible(s)',
      catAll: 'Toutes les Offres',
      catLand: 'Terrains (Sirakoro & Bamako)',
      catHouse: 'Villas & Chalets Cité Kaniba',
      catFarm: 'Champs & Fermes Agricoles',
      filterZone: 'Filtrer par Zone',
      allZonesOption: 'Toutes les Localités',
      onlyTf: '100% Titre Foncier',
      sortBy: 'Trier par :',
      sortFeatured: 'En Vedette',
      sortPriceAsc: 'Prix Croissant',
      sortPriceDesc: 'Prix Décroissant',
      sortSurface: 'Plus Grande Superficie',
      officialPrice: 'Prix Officiel',
      btnDetails: 'Fiche Complète',
      btnReserve: 'Réserver',
      emptyTitle: 'Aucun bien ne correspond à ces critères.',
      emptySub: 'Contactez directement un agent au +223 70 15 65 65 pour des parcelles sur mesure.',
      btnReset: 'Réinitialiser les filtres',
    },
    modal: {
      certifiedLegal: 'Sécurité Juridique Certifiée au Mali 🇲🇱',
      certifiedLegalSub: 'Acte authentique par notaire partenaire à Bamako. Bornage officiel géomètre et certificat de non-litige cadastral.',
      immediateAvailable: 'Disponible Immédiatement',
      underOption: 'Sous Option',
      acquisitionPrice: 'Prix d’Acquisition',
      equivalent: 'Équivaut à',
      surfaceArea: 'Superficie',
      featuresTitle: 'Caractéristiques Incluses',
      simulatorTitle: 'Simulateur d’Échelonnement (Sans Intérêts)',
      monthsLabel: 'Mois',
      downPaymentLabel: 'Acompte initial',
      monthlyPaymentLabel: 'Mensualité estimée',
      perMonth: '/mois',
      btnReserveWhatsApp: 'Réserver via WhatsApp Officiel 🇲🇱',
      btnCallAdvisor: 'Appeler un Conseiller',
      btnShare: 'Partager',
      copied: 'Copié !',
    },
    map: {
      badge: 'Cartographie Dynamique & Bornages Cadastraux 🇲🇱',
      title: 'Carte Dynamique des Lotissements de Bamako & Sirakoro',
      subtitle: 'Visualisez l’implantation exacte des parcelles, la proximité avec le Fleuve Niger, les axes goudronnés et les tranches de La Cité Kaniba.',
      btnCadastral: 'Plan Cadastral',
      btnSatellite: 'Vue Satellite & Relief',
      filterPins: 'Filtrer les repères :',
      allProperties: 'Tous les Biens',
      boundaryLands: 'Terrains Bornés',
      villasKaniba: 'Villas Cité Kaniba',
      farmsOption: 'Fermes Agricoles',
      riverNigerLabel: 'FLEUVE NIGER · BAMAKO 🇲🇱',
      pontMartyrs: 'Pont des Martyrs',
      pontFahd: 'Pont Roi Fahd',
      rn6Label: 'Route Nationale RN6 (Axe Ségou)',
      perimeterSirakoro: '★ PÉRIMÈTRE SIRAKORO & CITÉ KANIBA',
      legendTitle: 'District de Bamako & Cercle de Kati 🇲🇱',
      legendText: 'Cliquez sur un repère pour afficher les détails et vérifier le Titre Foncier.',
      legendCite: 'Cité Kaniba',
      legendTf: 'Parcelles TF',
      legendRiver: 'Fleuve Niger',
      btnSheetPlans: 'Fiche & Plans',
      btnSheetWhatsApp: 'WhatsApp',
    },
    construction: {
      badge: 'Groupe Kaniba Construction & BTP 🇲🇱',
      title: 'De la Fondation au Dernier Carreau : Votre Maison Bâtie Sans Compromis',
      subtitle: 'Nous bâtissons votre villa sur votre propre parcelle ou au coeur de La Cité Kaniba avec des matériaux certifiés issus de notre quincaillerie agréée.',
      comparisonBadge: 'Comparatif Chantier · Avant / Après',
      comparisonTitle: 'Du Gros Oeuvre Brut à la Villa Livrée à Sirakoro',
      dragHelper: 'Glissez le curseur pour comparer :',
      afterLabel: 'APRÈS : Villa Livrée & Habitée',
      beforeLabel: 'AVANT : Gros Oeuvre & Fondations',
      kpiDeliveryTitle: 'Délai Moyen de Livraison :',
      kpiDeliveryVal: '4 à 6 Mois Clés en Main',
      kpiWarrantyTitle: 'Garantie Décennale :',
      kpiWarrantyVal: '10 Ans Couverture Structure',
      kpiMaterialsTitle: 'Fourniture Matériaux :',
      kpiMaterialsVal: 'Quincaillerie Kaniba Plus 🇲🇱',
      kpiFollowupTitle: 'Suivi Numérique :',
      kpiFollowupVal: 'Rapports Vidéo Hebdomadaires',
      stage1Number: '01',
      stage1Title: 'Topographie & Cimentation Armée',
      stage1Desc: 'Nivellement au laser, semelles filantes en béton dosé à 350 kg/m³ et armatures anti-fissures garanties.',
      stage2Number: '02',
      stage2Title: 'Élévation & Maçonnerie Pleine',
      stage2Desc: 'Briques agglomérées vibrées de haute densité issues de la Quincaillerie Kaniba Plus pour une isolation thermique maximale au Mali.',
      stage3Number: '03',
      stage3Title: 'Second Oeuvre & Finitions Luxe',
      stage3Desc: 'Grès cérame poli, staff décoratif moderne, vitrage teinté anti-UV et plomberie multicouche haute pression.',
      stage4Number: '04',
      stage4Title: 'Solaire & Remise Clés en Main',
      stage4Desc: 'Installations solaires hybrides autonomes, forage avec château d’eau et remise solennelle des clés par acte notarié.',
      hardwareBadge: 'Quincaillerie Kaniba Plus (Matériaux & Outillage)',
      hardwareTitle: 'Zéro intermédiaire, tarifs grossistes sur le ciment et le fer',
      hardwareDesc: 'Grâce à notre centrale de distribution à Bamako, vos chantiers bénéficient des meilleurs tarifs sur le ciment Dangote/Diamond, fers FE500 et équipements sanitaires.',
      btnQuote: 'Demander un Devis de Construction',
    },
    diaspora: {
      badge: 'Guichet Spécial Diaspora Malienne & Internationale 🇲🇱',
      title: 'Vous vivez à l’étranger ? Investissez au Mali en toute sécurité.',
      subtitle: 'Ne prenez plus de risques avec vos économies. Le Groupe Kaniba applique le protocole d’acquisition juridique le plus rigoureux pour les Maliens de France, Espagne, USA, Canada et Afrique.',
      pillar1Title: 'Procuration & Notaire Agréé',
      pillar1Desc: 'Mandat officiel authentifié par consulat ou notaire étranger. Votre nom figure de manière irrévocable sur le Titre Foncier national du Mali.',
      pillar2Title: 'Inspections Vidéo par Drone & WhatsApp',
      pillar2Desc: 'Visite en direct avec notre géomètre sur la parcelle de Sirakoro. Vous visualisez les bornes réelles avant tout versement.',
      pillar3Title: 'Compte Séquestre Bancaire',
      pillar3Desc: 'Fonds logés sur compte bancaire dédié avec quittance officielle et morcellement cadastral suivi étape par étape.',
      pillar4Title: 'Expédition Titre par DHL Express',
      pillar4Desc: 'Réception sécurisée de vos documents juridiques originaux directement à votre domicile en Europe ou en Amérique.',
      btnVideoCall: 'Planifier une Visite Vidéo en Direct',
      directLines: 'Lignes directes : +223 70 15 65 65 / +223 95 95 95 62',
      testimonialBadge: 'Témoignage Vérifié de la Diaspora',
      testimonialQuote: '"Après 12 ans à l’étranger, j’ai reçu les clés de ma villa à La Cité Kaniba et mon Titre Foncier sans le moindre tracas."',
      testimonialAuthor: 'M. & Mme Keïta · Résidents en Île-de-France 🇲🇱',
      calcTitle: 'Simulateur de Plus-Value Foncière au Mali',
      calcRateBadge: '+18% /an (Sirakoro)',
      calcCapitalLabel: 'Votre Capital d’Investissement :',
      calcHorizonLabel: 'Horizon de Détention :',
      calcYears: 'Ans',
      calcEstimatedVal: 'Valeur Patrimoniale Estimée :',
      calcNetGain: 'Gain Net Potentiel :',
    },
    tracking: {
      badge: 'Transparence Cadastrale & Suivi Notarié 🇲🇱',
      title: 'Suivi de Dossier & Espace Client Sécurisé',
      subtitle: 'Consultez l’avancement de votre Titre Foncier en temps réel, accédez à vos quittances certifiées et sécurisez vos actes avec l’authentification biométrique.',
      sampleChipsLabel: 'Dossiers d’essai :',
      searchPlaceholder: 'Entrez votre numéro de dossier (ex: KNB-2026-7842)',
      btnSearch: 'Rechercher',
      lastUpdateLabel: 'Dernière mise à jour :',
      ownerLabel: 'Titulaire :',
      kpiLegalProgress: 'Avancement Juridique',
      stepOf: 'Étape',
      timelineTitle: 'Chronologie Officielle d’Attribution Foncière au Mali',
      vaultTitle: 'Coffre-Fort des Pièces Juridiques Protégé',
      vaultDesc: 'Protection biométrique renforcée contre la fraude documentaire et l’usurpation d’identité.',
      btnBiometricUnlock: 'Déverrouiller avec Biométrie (Touch ID / Face ID)',
      biometricVerifying: 'Vérification biométrique...',
      biometricUnlockedBadge: 'Accès Biométrique Accordé',
      btnDownload: 'Télécharger',
      lockedLabel: 'Verrouillé',
      notaryAssigned: 'Étude Notariale :',
      cloudTitle: 'Sauvegardes Cloud Chiffrées',
      cloudSubtitle: 'Sécurité Cryptographique AES-256',
      cloudDesc: 'Vos attestations de propriété sont répliquées sur des serveurs cloud souverains sécurisés conformément à la loi malienne APDP.',
      cloudStatusLabel: 'Statut Réseau :',
      cloudSyncedBadge: 'Chiffré & Synchronisé',
      lastBackupLabel: 'Dernière Sauvegarde :',
      btnForceSync: 'Forcer la Synchronisation Cloud',
      btnSyncing: 'Chiffrement en cours...',
      btnExportVault: 'Exporter l’Archive Chiffrée (.vault)',
      notFoundTitle: 'Dossier introuvable',
      notFoundDesc: 'Veuillez vérifier votre référence ou sélectionner l’un des dossiers d’essai en haut (KNB-2026-7842).',
    },
    contact: {
      tiktokTitle: '@agenceimmokaniba sur TikTok Officiel 🇲🇱',
      tiktokSub: '873K Abonnés · 7.6 Millions de J’aime · La référence N°1 au Mali',
      tiktokDesc: 'Suivez en direct nos cérémonies de remise de clés, vidéos des parcelles à Sirakoro, bornages et conseils fonciers.',
      btnWatchTiktok: 'Voir les Vidéos sur TikTok',
      badge: 'Contact Direct',
      title: 'Une équipe sur le terrain à Bamako pour vous accompagner',
      subtitle: 'Nos conseillers vous reçoivent dans nos deux agences de Bamako et Sirakoro ou organisent votre visite guidée du lundi au samedi.',
      linesTitle: 'Lignes directes d’appel et WhatsApp (+223 🇲🇱) :',
      officesTitle: 'Nos Agences Physiques au Mali :',
      office1: 'Siège Social : Bamako, ACI 2000, Rue 314, Porte 12',
      office2: 'Bureau des Ventes : Sirakoro Meguetana, Entrée Cité Kaniba',
      fastResponseTitle: 'Besoin d’une réponse en moins de 5 minutes ?',
      fastResponseSub: 'Notre guichet WhatsApp est connecté 7j/7',
      btnWhatsAppFast: 'WhatsApp Immédiat',
      formTitle: 'Demande d’Acquisition & Visite sur Site',
      formSub: 'Remplissez ce formulaire pour être contacté sous 24h par notre notaire ou conseiller dédié.',
      nameLabel: 'Nom & Prénom *',
      phoneLabel: 'Numéro Téléphone / WhatsApp (avec indicatif) *',
      projectLabel: 'Votre Projet Immobilier',
      projectOpt1: 'Terrain Résidentiel avec Titre Foncier (Sirakoro)',
      projectOpt2: 'Villa ou Chalet à La Cité Kaniba',
      projectOpt3: 'Construction Clés en Main sur Mon Terrain',
      projectOpt4: 'Champ Agricole ou Ferme (Sanankoroba)',
      projectOpt5: 'Investissement Sécurisé depuis la Diaspora',
      msgLabel: 'Précisions & Critères',
      msgPlaceholder: 'Indiquez votre budget, superficie souhaitée ou disponibilités de visite...',
      privacyNote: 'Vos informations restent strictement protégées selon la loi malienne APDP N° 2013-015.',
      btnSubmit: 'Envoyer ma Demande de Visite',
      successTitle: 'Demande Transmise avec Succès !',
      successDesc: 'Un conseiller officiel du Groupe Kaniba va vous contacter sur WhatsApp sous 24h.',
    },
    bot: {
      title: 'KanibaBot 24/7 🇲🇱',
      role: 'Conseiller Immobilier & Foncier Virtuel',
      greeting: 'Bonjour ! Je suis l’assistant virtuel du Groupe Kaniba au Mali 🇲🇱. Comment puis-je vous renseigner aujourd’hui sur nos terrains et villas à Bamako et Sirakoro ?',
      chipSirakoro: '📍 Prix à Sirakoro',
      chipTf: '📜 Qu’est-ce qu’un Titre Foncier ?',
      chipDiaspora: '🌍 Guide Diaspora',
      chipVisit: '🔑 Visite sur le Terrain',
      querySirakoro: 'Prix des parcelles à Sirakoro',
      queryTf: 'Explication Titre Foncier Mali',
      queryDiaspora: 'Comment acheter depuis la diaspora',
      queryVisit: 'Prendre rendez-vous pour visiter',
      answerSirakoro: 'À Sirakoro Meguetana, nos parcelles résidentielles de 400 m² (20x20m) avec Titre Foncier (TF direct) démarrent à partir de 7 500 000 FCFA (~11 400 €). Des facilités d’échelonnement jusqu’à 12 mois sans intérêts sont disponibles.',
      answerTf: 'Le Titre Foncier (TF) est le niveau de garantie juridique le plus élevé et irrévocable en République du Mali 🇲🇱. La transaction s’effectue obligatoirement devant notaire avec vérification cadastrale.',
      answerDiaspora: 'Notre Guichet Diaspora dédié permet d’acheter à distance en toute sécurité : 1) Choix du lot par vidéo drone en direct, 2) Procuration notariée légalisée, 3) Paiement par virement bancaire sécurisé, 4) Expédition de votre Titre original par DHL.',
      answerConstruction: 'Groupe Kaniba Construction réalise vos villas clés en main et chalets à La Cité Kaniba avec approvisionnement direct via Quincaillerie Kaniba Plus.',
      answerVisit: 'Des visites guidées gratuites sur nos sites de Sirakoro, Cité Kaniba et Dialakorobougou sont organisées du lundi au samedi. Contactez-nous au +223 70 15 65 65 ou au +223 95 95 95 62.',
      answerFallback: 'Merci pour votre demande. Pour vous transmettre les plans de bornage et les disponibilités exactes au Mali, échangez directement avec un conseiller sur WhatsApp au +223 70 15 65 65.',
      inputPlaceholder: 'Posez votre question sur les terrains ou villas...',
      btnWhatsAppHandoff: '💬 Échanger sur WhatsApp',
      btnCatalog: '📐 Voir le Catalogue des Propriétés',
      liveHandoffLink: 'Passer sur WhatsApp →',
    },
    floatingWhatsApp: {
      title: 'Agents Certifiés du Mali 🇲🇱',
      desc: 'Échangez directement avec notre équipe à Bamako pour réserver votre lot ou planifier une visite :',
      agentBamakoTitle: 'Direction Commerciale Bamako',
      agentSirakoroTitle: 'Bureau Cité Kaniba (Sirakoro)',
      btnLabel: 'Parler à un agent certifié 🇲🇱',
    },
    notificationsCenter: {
      title: 'Centre de Notifications',
      subtitle: 'Alertes Titres Fonciers & Chantiers au Mali 🇲🇱',
      pushMobileTitle: 'Activer les alertes sur mobile',
      pushActive: 'Notifications Push Actives',
      btnAuthorize: 'Autoriser',
      btnMarkAllRead: 'Tout marquer comme lu',
      btnClose: 'Fermer',
      seeUpdate: 'Consulter la mise à jour',
    },
    privacy: {
      title: 'Protection des Données & Confidentialité Foncière :',
      text: 'Conformément à la loi N° 2013-015 de la République du Mali (APDP) et aux règles internationales, vos actes notariés et données biométriques sont protégés sous chiffrement souverain AES-256.',
      btnAccept: 'Accepter et Continuer',
    },
    footer: {
      tagline: 'Votre partenaire dans la cité 🌐🤝',
      about: 'Pionnier de la sécurisation foncière en République du Mali 🇲🇱. Terrains bornés avec Titre Foncier (TF), lotissements à Sirakoro, chalets haut standing à La Cité Kaniba et investissement sécurisé pour la diaspora.',
      btnTiktok: 'TikTok Officiel',
      btnWhatsApp: 'WhatsApp Ventes',
      navTitle: 'Navigation Rapide',
      contactTitle: 'Contact & Sièges au Mali 🇲🇱',
      address: 'Bamako (ACI 2000) & Sirakoro Meguetana, Mali',
      hours: 'Lundi au Vendredi de 08h00 à 18h00 · Samedi de 08h30 à 15h00',
      copyright: '© 2026 Groupe Kaniba Immobilier & BTP. Tous droits réservés.',
      legalItems: [
        'Conformité APDP Mali (Loi 2013-015) 🇲🇱',
        'Titres Fonciers Inattaquables',
        'Chiffrement Cloud AES-256',
        'Un Peuple - Un But - Une Foi 🇲🇱',
      ],
    },
  },

  // ========================== ENGLISH ==========================
  en: {
    maliIdentity: {
      country: 'Mali',
      republic: 'Republic of Mali',
      motto: 'One People - One Goal - One Faith',
      flagAlt: 'Official flag of Mali 🇲🇱',
      cadastralRegistry: 'National Land Registry of the Republic of Mali',
      phoneCode: '+223',
      capital: 'Bamako',
      mainZone: 'Sirakoro & Bamako',
    },
    nav: {
      properties: 'Properties',
      map: 'Interactive Map',
      construction: 'Construction & Civil',
      diaspora: 'Mali Diaspora',
      tracking: 'Dossier Tracking',
      contactAgent: 'Talk to an Agent',
      currency: 'Currency',
      language: 'Language',
      notifications: 'Notifications',
      darkMode: 'Dark mode',
      callNow: 'Call (+223)',
    },
    hero: {
      trustBadge: 'Groupe Kaniba · Guaranteed Land Title & Notary Deeds in Mali 🇲🇱',
      h1: 'Your secured land and dream home in Bamako and Sirakoro.',
      subtitle: 'Access 100% legalized plots with official Land Title (Titre Foncier), modern villas in La Cité Kaniba, and turnkey construction with dedicated notary assistance for residents and diaspora.',
      tabLand: 'Buy Land',
      tabHouse: 'Buy House',
      tabConstruction: 'Construction',
      labelLocation: 'Location in Mali',
      allZones: 'All Areas (Bamako & Sirakoro)',
      zoneSirakoro: 'Sirakoro Meguetana & Cité Kaniba',
      zoneDialakorobougou: 'Dialakorobougou',
      zoneSotuba: 'Sotuba ACI',
      zoneSanankoroba: 'Sanankoroba (Farms & Land)',
      zoneKati: 'Kati & Koulikoro',
      labelBudget: 'Maximum Budget',
      anyBudget: 'Any budget',
      upTo10m: 'Up to 10,000,000 FCFA (~$16,400)',
      upTo20m: 'Up to 20,000,000 FCFA (~$32,800)',
      upTo45m: 'Up to 45,000,000 FCFA (~$73,800)',
      upTo80m: 'Up to 80,000,000 FCFA (~$131,000)',
      btnSearch: 'Search Properties',
      guaranteedTf: '100% of dossiers verified with official Land Title',
      exploreMap: 'Explore interactive map',
      kpi1Title: 'Land Title (TF)',
      kpi1Sub: 'Absolute legal deed in Mali 🇲🇱',
      kpi2Title: 'La Cité Kaniba',
      kpi2Sub: 'Modern chalets in Sirakoro',
      kpi3Title: '+870K Followers',
      kpi3Sub: '#1 Real Estate on TikTok Mali',
      kpi4Title: 'Diaspora Desk',
      kpi4Sub: 'Safe remote property acquisition',
    },
    catalog: {
      badge: 'Official Groupe Kaniba Catalog 🇲🇱',
      title: 'Real Estate Listings & Demarcated Plots',
      subtitle: 'Every property sold carries an irrevocable Land Title (Titre Foncier), certified by the National Cadastre and sealed by an official notary deed.',
      countVerified: 'verified property(ies) available',
      catAll: 'All Listings',
      catLand: 'Land Plots (Sirakoro & Bamako)',
      catHouse: 'Villas & Chalets Cité Kaniba',
      catFarm: 'Agricultural Farms & Land',
      filterZone: 'Filter by Zone',
      allZonesOption: 'All Locations',
      onlyTf: '100% Land Title (TF)',
      sortBy: 'Sort by:',
      sortFeatured: 'Featured',
      sortPriceAsc: 'Price Low to High',
      sortPriceDesc: 'Price High to Low',
      sortSurface: 'Largest Area',
      officialPrice: 'Official Price',
      btnDetails: 'Full Details',
      btnReserve: 'Reserve',
      emptyTitle: 'No properties match these criteria.',
      emptySub: 'Contact an agent directly at +223 70 15 65 65 for custom plot requests.',
      btnReset: 'Reset filters',
    },
    modal: {
      certifiedLegal: 'Certified Legal Security in Mali 🇲🇱',
      certifiedLegalSub: 'Authentic deed sealed by partner notary in Bamako. Official surveyor beacons and non-litigation certificate.',
      immediateAvailable: 'Available Immediately',
      underOption: 'Under Option',
      acquisitionPrice: 'Acquisition Price',
      equivalent: 'Equivalent to',
      surfaceArea: 'Surface Area',
      featuresTitle: 'Included Features',
      simulatorTitle: 'Payment Installment Simulator (0% Interest)',
      monthsLabel: 'Months',
      downPaymentLabel: 'Initial down payment',
      monthlyPaymentLabel: 'Estimated monthly installment',
      perMonth: '/mo',
      btnReserveWhatsApp: 'Reserve via Official WhatsApp 🇲🇱',
      btnCallAdvisor: 'Call an Advisor',
      btnShare: 'Share',
      copied: 'Copied!',
    },
    map: {
      badge: 'Dynamic Cartography & Cadastral Beacons 🇲🇱',
      title: 'Dynamic Map of Bamako & Sirakoro Developments',
      subtitle: 'View the exact layout of land parcels, proximity to the Niger River, paved avenues, and phases of La Cité Kaniba.',
      btnCadastral: 'Cadastral Plan',
      btnSatellite: 'Satellite & Terrain View',
      filterPins: 'Filter markers:',
      allProperties: 'All Properties',
      boundaryLands: 'Demarcated Land',
      villasKaniba: 'Villas Cité Kaniba',
      farmsOption: 'Farms & Countryside',
      riverNigerLabel: 'NIGER RIVER · BAMAKO 🇲🇱',
      pontMartyrs: 'Martyrs Bridge',
      pontFahd: 'King Fahd Bridge',
      rn6Label: 'National Highway RN6 (Ségou Corridor)',
      perimeterSirakoro: '★ SIRAKORO & CITÉ KANIBA PERIMETER',
      legendTitle: 'District of Bamako & Kati Circle 🇲🇱',
      legendText: 'Click on a pin to review specs and verify the Land Title.',
      legendCite: 'Cité Kaniba',
      legendTf: 'Land Titles (TF)',
      legendRiver: 'Niger River',
      btnSheetPlans: 'Details & Blueprints',
      btnSheetWhatsApp: 'WhatsApp',
    },
    construction: {
      badge: 'Groupe Kaniba Construction & Civil 🇲🇱',
      title: 'From Groundbreak to Key Handover: Homes Built Without Compromise',
      subtitle: 'We build your villa on your own land or within La Cité Kaniba with premium materials supplied directly from our certified warehouse.',
      comparisonBadge: 'Jobsite Comparison · Before / After',
      comparisonTitle: 'From Reinforced Shell to Completed Luxury Villa in Sirakoro',
      dragHelper: 'Drag slider to compare:',
      afterLabel: 'AFTER: Completed & Inhabited Villa',
      beforeLabel: 'BEFORE: Foundation & Structural Pillars',
      kpiDeliveryTitle: 'Average Delivery Timeline:',
      kpiDeliveryVal: '4 to 6 Months Turnkey',
      kpiWarrantyTitle: 'Structural Warranty:',
      kpiWarrantyVal: '10 Years Structural Coverage',
      kpiMaterialsTitle: 'Material Sourcing:',
      kpiMaterialsVal: 'Quincaillerie Kaniba Plus 🇲🇱',
      kpiFollowupTitle: 'Digital Updates:',
      kpiFollowupVal: 'Weekly Video Progress Reports',
      stage1Number: '01',
      stage1Title: 'Laser Surveying & Concrete Footings',
      stage1Desc: 'Laser leveling, continuous reinforced concrete foundations dosed at 350 kg/m³ with crack-prevention steel rebars.',
      stage2Number: '02',
      stage2Title: 'High-Density Masonry & Walls',
      stage2Desc: 'Vibrated hollow and solid concrete blocks produced by Quincaillerie Kaniba Plus for maximum thermal insulation in Mali’s climate.',
      stage3Number: '03',
      stage3Title: 'Finishing & Luxury Fixtures',
      stage3Desc: 'Polished porcelain stoneware tiles, modern staff ceiling moldings, tinted solar-control glass, and multi-layer plumbing.',
      stage4Number: '04',
      stage4Title: 'Solar Power & Official Key Handover',
      stage4Desc: 'Autonomous hybrid solar kits, private borehole water tower, and formal key handover with authenticated notary deed.',
      hardwareBadge: 'Quincaillerie Kaniba Plus (Tools & Materials)',
      hardwareTitle: 'No middlemen: wholesale pricing on cement and rebar',
      hardwareDesc: 'Thanks to our central supply warehouse in Bamako, your builds benefit from direct wholesale rates on certified Dangote/Diamond cement and FE500 rebar.',
      btnQuote: 'Request Construction Estimate',
    },
    diaspora: {
      badge: 'Special Desk for the Malian & International Diaspora 🇲🇱',
      title: 'Living abroad? Invest in Mali with complete security.',
      subtitle: 'Do not gamble with your hard-earned savings. Groupe Kaniba enforces the most rigorous legal acquisition protocol for buyers in France, Spain, the US, Canada, and Africa.',
      pillar1Title: 'Power of Attorney & Certified Notary',
      pillar1Desc: 'Official consular power of attorney. Your name is directly inscribed onto the official Republic of Mali Land Title.',
      pillar2Title: 'Live WhatsApp Drone & Field Inspections',
      pillar2Desc: 'Direct video inspection with our on-site surveyor in Sirakoro. View concrete boundary beacons prior to any wire transfer.',
      pillar3Title: 'Secure Bank Escrow & Receipts',
      pillar3Desc: 'Funds are deposited into dedicated bank escrow accounts with stamped receipts and cadastral parcel tracking.',
      pillar4Title: 'Original Deed Delivery via DHL Express',
      pillar4Desc: 'Tracked international delivery of your authenticated legal deeds directly to your doorstep worldwide.',
      btnVideoCall: 'Schedule Live Video Tour',
      directLines: 'Direct telephone lines: +223 70 15 65 65 / +223 95 95 95 62',
      testimonialBadge: 'Verified Diaspora Testimonial',
      testimonialQuote: '"After 12 years abroad, I received the keys to my villa in La Cité Kaniba along with my original Land Title without any hassle."',
      testimonialAuthor: 'Mr. & Mrs. Keïta · Living in Paris Area 🇲🇱',
      calcTitle: 'Mali Real Estate Capital Growth Simulator',
      calcRateBadge: '+18% Yearly (Sirakoro)',
      calcCapitalLabel: 'Your Investment Capital:',
      calcHorizonLabel: 'Holding Period:',
      calcYears: 'Years',
      calcEstimatedVal: 'Estimated Property Value:',
      calcNetGain: 'Estimated Net Capital Gain:',
    },
    tracking: {
      badge: 'Cadastral Transparency & Notary Tracking 🇲🇱',
      title: 'Dossier Tracking & Secure Client Portal',
      subtitle: 'Track your Land Title progress in real time, view certified receipts, and safeguard confidential land documents with biometric authentication.',
      sampleChipsLabel: 'Test dossiers:',
      searchPlaceholder: 'Enter your dossier code (e.g. KNB-2026-7842)',
      btnSearch: 'Search',
      lastUpdateLabel: 'Last updated:',
      ownerLabel: 'Property Owner:',
      kpiLegalProgress: 'Legal Progress',
      stepOf: 'Step',
      timelineTitle: 'Official Land Title Milestone Timeline in Mali',
      vaultTitle: 'Protected Legal Document Vault',
      vaultDesc: 'Biometric protection against document fraud and identity impersonation.',
      btnBiometricUnlock: 'Unlock with Biometrics (Touch ID / Face ID)',
      biometricVerifying: 'Verifying credentials...',
      biometricUnlockedBadge: 'Biometric Access Granted',
      btnDownload: 'Download',
      lockedLabel: 'Locked',
      notaryAssigned: 'Assigned Notary:',
      cloudTitle: 'Encrypted Cloud Backups',
      cloudSubtitle: 'AES-256 Cryptographic Security',
      cloudDesc: 'Your deeds are replicated across sovereign secure cloud servers in compliance with Malian data protection laws (APDP).',
      cloudStatusLabel: 'Network Status:',
      cloudSyncedBadge: 'Encrypted & Synchronized',
      lastBackupLabel: 'Last Backup:',
      btnForceSync: 'Force Cloud Backup Sync',
      btnSyncing: 'Encrypting data...',
      btnExportVault: 'Export Encrypted Vault (.vault)',
      notFoundTitle: 'Dossier Not Found',
      notFoundDesc: 'Please check your dossier code or select one of the test dossiers above (KNB-2026-7842).',
    },
    contact: {
      tiktokTitle: '@agenceimmokaniba on Official TikTok 🇲🇱',
      tiktokSub: '873K Followers · 7.6 Million Likes · #1 Real Estate Leader in Mali',
      tiktokDesc: 'Watch live key handovers, Sirakoro parcel video tours, cadastral surveying, and property legal guidance.',
      btnWatchTiktok: 'Watch Videos on TikTok',
      badge: 'Direct Contact',
      title: 'A dedicated team on the ground in Bamako to assist you',
      subtitle: 'Our advisors welcome you in our Bamako and Sirakoro offices or organize personalized field tours from Monday through Saturday.',
      linesTitle: 'Direct Phone & WhatsApp Lines (+223 🇲🇱):',
      officesTitle: 'Our Physical Offices in Mali:',
      office1: 'Headquarters: Bamako, ACI 2000, Street 314, Door 12',
      office2: 'Sales Office: Sirakoro Meguetana, Entrance of Cité Kaniba',
      fastResponseTitle: 'Need an answer in under 5 minutes?',
      fastResponseSub: 'Our WhatsApp desk is active 7 days a week',
      btnWhatsAppFast: 'Instant WhatsApp',
      formTitle: 'Property Inquiry & Site Visit Request',
      formSub: 'Submit this form and an assigned property consultant will reach out to you within 24 hours.',
      nameLabel: 'Full Name *',
      phoneLabel: 'Phone / WhatsApp Number (with country code) *',
      projectLabel: 'Property Project of Interest',
      projectOpt1: 'Residential Land with Land Title (Sirakoro)',
      projectOpt2: 'Villa or Chalet in La Cité Kaniba',
      projectOpt3: 'Turnkey Construction on My Own Land',
      projectOpt4: 'Agricultural Farm or Country Land (Sanankoroba)',
      projectOpt5: 'Secure Diaspora Investment',
      msgLabel: 'Additional Details',
      msgPlaceholder: 'Specify your budget, preferred size, or visit dates...',
      privacyNote: 'Your details are protected under the Malian Personal Data Protection Act (APDP Law N° 2013-015).',
      btnSubmit: 'Send Visit Request',
      successTitle: 'Request Sent Successfully!',
      successDesc: 'An official advisor from Groupe Kaniba will contact you via WhatsApp shortly.',
    },
    bot: {
      title: 'KanibaBot 24/7 🇲🇱',
      role: 'Virtual Real Estate & Land Title Advisor',
      greeting: 'Hello! I am Groupe Kaniba’s virtual advisor in Mali 🇲🇱. How can I assist you today regarding land plots, villas, or deeds in Bamako and Sirakoro?',
      chipSirakoro: '📍 Prices in Sirakoro',
      chipTf: '📜 What is a Land Title (TF)?',
      chipDiaspora: '🌍 Diaspora Guide',
      chipVisit: '🔑 Schedule a Field Visit',
      querySirakoro: 'Land plot prices in Sirakoro',
      queryTf: 'Explanation of Land Title in Mali',
      queryDiaspora: 'How to purchase safely from diaspora',
      queryVisit: 'How to schedule a site tour',
      answerSirakoro: 'In Sirakoro Meguetana, our demarcated 400 m² (20x20m) residential plots with direct Land Title (TF) start from 7,500,000 FCFA (~$12,300 / ~11,400 €). Flexible installment plans up to 12 months with 0% interest are available.',
      answerTf: 'The Land Title (Titre Foncier - TF) provides the highest irrevocable legal ownership guarantee in the Republic of Mali 🇲🇱. Transactions are mandatory conducted before an authenticated notary.',
      answerDiaspora: 'Our Diaspora Desk allows you to purchase remotely with complete confidence: 1) Live WhatsApp video walkthrough, 2) Consular power of attorney, 3) Secure bank wire, 4) Tracked DHL delivery of your original Land Title deed.',
      answerConstruction: 'Groupe Kaniba Construction builds turnkey modern villas and chalets in La Cité Kaniba with high-grade supplies from Quincaillerie Kaniba Plus, including solar power systems.',
      answerVisit: 'Free guided visits to our Sirakoro, Cité Kaniba, and Dialakorobougou sites are scheduled Monday through Saturday. Call us directly at +223 70 15 65 65 or +223 95 95 95 62.',
      answerFallback: 'Thank you for your question. To receive cadastral blueprints and current real-time plot availability in Mali, please chat directly with our advisor on WhatsApp at +223 70 15 65 65.',
      inputPlaceholder: 'Ask a question about land or villas...',
      btnWhatsAppHandoff: '💬 Switch to WhatsApp with Agent',
      btnCatalog: '📐 Browse Property Catalog',
      liveHandoffLink: 'Switch to WhatsApp →',
    },
    floatingWhatsApp: {
      title: 'Certified Agents in Mali 🇲🇱',
      desc: 'Chat directly with our team in Bamako to reserve your parcel or book a field tour:',
      agentBamakoTitle: 'Sales Office Bamako',
      agentSirakoroTitle: 'Cité Kaniba Desk (Sirakoro)',
      btnLabel: 'Talk to a certified agent 🇲🇱',
    },
    notificationsCenter: {
      title: 'Notification Center',
      subtitle: 'Land Titles & Construction Alerts in Mali 🇲🇱',
      pushMobileTitle: 'Enable mobile push notifications',
      pushActive: 'Push Notifications Active',
      btnAuthorize: 'Allow',
      btnMarkAllRead: 'Mark all as read',
      btnClose: 'Close',
      seeUpdate: 'View update',
    },
    privacy: {
      title: 'Data Protection & Land Confidentiality:',
      text: 'Pursuant to Law N° 2013-015 of the Republic of Mali (APDP) and international regulations, your notary deeds and biometric data are securely protected under sovereign AES-256 encryption.',
      btnAccept: 'Accept & Continue',
    },
    footer: {
      tagline: 'Your trusted partner in the city 🌐🤝',
      about: 'Pioneering verified land security in the Republic of Mali 🇲🇱. Demarcated plots with Land Title (TF), modern housing in La Cité Kaniba, and safe remote investments for the diaspora.',
      btnTiktok: 'Official TikTok',
      btnWhatsApp: 'Sales WhatsApp',
      navTitle: 'Quick Links',
      contactTitle: 'Contact & Offices in Mali 🇲🇱',
      address: 'Bamako (ACI 2000) & Sirakoro Meguetana, Mali',
      hours: 'Monday to Friday: 08:00 - 18:00 · Saturday: 08:30 - 15:00',
      copyright: '© 2026 Groupe Kaniba Immobilier & BTP. All rights reserved.',
      legalItems: [
        'APDP Mali Compliance (Law 2013-015) 🇲🇱',
        'Irrevocable Land Titles (TF)',
        'AES-256 Cloud Encryption',
        'One People - One Goal - One Faith 🇲🇱',
      ],
    },
  },
};
