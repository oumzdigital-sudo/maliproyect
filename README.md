# 🇲🇱 Groupe Kaniba Immobilier & Construction — Bamako, Mali

Plataforma web moderna e interactiva para la empresa inmobiliaria **Groupe Kaniba**, especializada en terrenos con Título Fonciario, chalets residenciales y proyectos de construcción en Bamako y Sirakoro (Mali).

---

## 🌐 Ver la Aplicación en Vivo

### 1. Servidor de Previsualización Activo
Puedes interactuar con la aplicación directamente aquí:
- **Enlace de visualización activa:** [https://ais-pre-735qziwnxb2f6zrmg5btq7-250606617901.europe-west2.run.app](https://ais-pre-735qziwnxb2f6zrmg5btq7-250606617901.europe-west2.run.app)

---

## ❓ ¿Por qué GitHub no muestra la página web directamente?

**GitHub es un repositorio de código fuente**, no un navegador o servidor web. Por defecto, al entrar a un repositorio en GitHub verás únicamente la lista de archivos (`.tsx`, `.json`, etc.).

Para que tu repositorio de GitHub muestre la página web funcionando como un sitio web real, tienes **3 opciones muy sencillas**:

---

### Opción A: Activar GitHub Pages (100% Automático y Gratuito)
Ya hemos incluido el flujo de trabajo en `.github/workflows/deploy.yml`. Solo debes activarlo una vez en tu repositorio de GitHub:

1. Ve a tu repositorio en **GitHub**.
2. Haz clic en la pestaña **Settings** (Configuración) en la parte superior.
3. En el menú lateral izquierdo, haz clic en **Pages**.
4. En **Build and deployment > Source**, cambia la opción a:
   👉 **`GitHub Actions`**
5. ¡Listo! En 1 minuto tu página estará publicada automáticamente en:  
   `https://<tu-usuario>.github.io/<nombre-del-repositorio>/`

---

### Opción B: Desplegar en Vercel o Netlify (Gratis en 1 Clic)
El proyecto ya cuenta con `vercel.json` y `netlify.toml` preconfigurados:

1. Entra a [Vercel.com](https://vercel.com) o [Netlify.com](https://netlify.com).
2. Conecta tu cuenta de GitHub y selecciona este repositorio.
3. Haz clic en **Deploy**. ¡Se publicará con HTTPS y dominio propio al instante!

---

### Opción C: Ejecutar en tu computadora (Local)

Si tienes Node.js instalado (versión 18 o superior):

```bash
# 1. Clonar el repositorio
git clone <url-de-tu-repositorio-en-github>
cd <carpeta-del-proyecto>

# 2. Instalar las dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

Abre tu navegador en `http://localhost:3000` o la URL que muestre la terminal.

*(Nota: **No** se requieren variables de entorno ni claves secretas para arrancar la aplicación; todo funciona de forma autónoma con datos y respuestas inteligentes integradas).*

---

## ✨ Características Principales

- 🇲🇱 **Identidad Nacional de Mali**: Colores corporativos (Verde Malí `#008751`, Dorado Kaniba `#D4AF37`, Rojo `#D21034`, Tierra de Sirakoro), bandera oficial y moneda CFA (FCFA) con conversión a EUR y USD.
- 🌍 **Soporte Multilingüe Completo**: Selector global de idioma en el encabezado con traducción fluida entre:
  - 🇪🇸 **Español**
  - 🇫🇷 **Français** (Idioma oficial de Mali)
  - 🇬🇧 **English**
- 🗺️ **Mapa Dinámico Interactivo**: Visualización de parcelas y chalets en Bamako, Sirakoro Niaré, Kati y Moribabougou con filtros por tipo de propiedad, presupuesto y documento legal (Título Fonciario / Permis d'Occuper).
- 🤖 **Bot de Atención al Cliente ("Kaniba Bot")**:
  - Asistente virtual multilingüe siempre disponible.
  - Respuestas rápidas automáticas sobre precios, Título Fonciario, reservas para la Diáspora y visitas a obra.
  - Conexión directa a WhatsApp con un agente humano certificado.
- ✈️ **Portal Especial para la Diáspora**:
  - Asesoría para malienses residentes en Francia, EE.UU., España, Canadá y otros países.
  - Protocolo de reserva legal y poderes notariales seguros.
- 📁 **Rastreador de Trámites y Dossier**:
  - Consulta en tiempo real del estado de solicitudes y títulos de propiedad mediante código de expediente (ej. `KAN-2024-884`).
- 🌓 **Modo Oscuro / Claro**: Adaptable con un solo clic.
- 📱 **Diseño 100% Responsivo**: Optimizado para teléfonos móviles, sin desbordes laterales ni scroll horizontal indeseado.

---

## 🛠️ Tecnologías

- **React 19** + **TypeScript**
- **Vite 8** (Empaquetador ultra-rápido)
- **Tailwind CSS v4** (Estilos modernos y optimizados)
- **Lucide Icons** (Iconografía minimalista de arquitectura y llaves)
- **Motion** (Animaciones fluidas y ligeras)
