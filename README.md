# Propuesta Interactiva Premium - Vela Segalà

Propuesta de transformación digital completamente interactiva para Vela Segalà, clínica dental con 2 clínicas en **Sant Celoni** y **Viladecans**.

## 🎯 Características Principales

### 📊 Sistema de Navegación Avanzado
- **Menú lateral fijo** siempre visible (negro sobre blanco)
- **Estructura jerárquica** con páginas principales y subpáginas inteligentes
- Navegación optimizada:
  - 1 Bienvenida
  - 1 Introducción Ejecutiva
  - 6 Servicios con subpáginas según relevancia:
    - **Mantenimiento Web**: Solo página principal (sin demos)
    - **Desarrollo Web**: Página principal + Demo del diseño web profesional
    - **SEO, IA Blog, IA Cliente, CRM**: Página principal + Demo + Estadísticas
  - 1 Presupuesto Interactivo
  - 1 Propuesta Final

### 🎨 Diseño Premium en Blanco y Negro

- **Sidebar negro** con navegación elegante y pestañas activas
- **Contenido en blanco** con tipografía negra profesional
- **Animaciones suaves** y transiciones de página
- **100% Responsive** adaptado a todos los dispositivos

## 🌐 Mockup Web Profesional

El diseño de **velasegalaviladecans.com** está basado en el sitio exitoso de Sant Celoni:
- Header con información de contacto y navegación
- Hero section impactante
- Sección de tratamientos odontológicos con tarjetas
- Presentación del equipo médico
- Tecnología e instalaciones
- Reseñas de Google (373 reviews - 5 estrellas)
- Footer completo con información

**Características técnicas destacadas:**
- Diseño totalmente scrollable dentro del mockup del navegador
- Secciones fieles al diseño original de velasegalasantceloni.com
- Adaptación específica para Viladecans

## 💼 CRM Interactivo Profesional

El CRM es **completamente funcional** con pestañas navegables:

### Módulos del CRM:

1. **Dashboard**
   - 4 KPIs principales (Citas, Pacientes, Facturación, Ocupación)
   - Gráfico de barras de citas semanales
   - Gráfico circular de tipos de tratamiento
   - Tabla de próximas citas

2. **Pacientes**
   - Tabla completa con 847 pacientes simulados
   - Búsqueda y filtros
   - Información detallada (DNI, teléfono, email, última visita)
   - Acciones rápidas

3. **Agenda**
   - Calendario mensual completo
   - Vista de citas por día
   - Selector de clínica (Sant Celoni / Viladecans)

4. **Tratamientos**
   - Grid de 6 tipos de tratamiento
   - Estadísticas de uso mensual
   - Precio medio por tratamiento

5. **Facturación**
   - Resumen financiero del mes
   - Tabla de facturas con estados (Pagada/Pendiente/Vencida)
   - Acciones de descarga

6. **Analytics**
   - Gráfico de ingresos anuales
   - Distribución por clínica
   - Tasa de ocupación
   - Satisfacción de pacientes

### Características Técnicas del CRM:
- Sidebar lateral con iconos (Lucide React)
- Selector de clínica global
- Notificaciones
- Sistema de pestañas totalmente funcional
- Diseño profesional con hover states
- Estados visuales (confirmada, pendiente, vencida)

## 📈 Estadísticas y Gráficas

Cada servicio (excepto Mantenimiento y Desarrollo Web) incluye:
- **Gráficos de barras** con mejoras proyectadas
- **Comparativas antes/después**
- **ROI estimado**
- **Métricas de tiempo ahorrado**
- **Impacto en captación de pacientes**

## 💰 Calculadora de Presupuesto

- Selección múltiple de servicios
- Cálculo automático en tiempo real
- Desglose de pagos únicos vs mensuales
- Comparación con precios de mercado

## 📋 Servicios Incluidos

### 1. Mantenimiento Web Premium - 199€/mes
- Gestión de **2 sitios web**: velasegalasantceloni.com y velasegalaviladecans.com
- Monitorización 24/7
- Backups automáticos
- Actualizaciones de seguridad

### 2. Desarrollo Web Viladecans - 1.500€
- Diseño 100% responsive
- Optimización PageSpeed 95+
- SEO local integrado
- CMS intuitivo

### 3. Posicionamiento SEO - 1.000€ + 450€/mes
- Setup inicial y análisis completo
- Análisis de palabras clave
- Optimización on-page y off-page
- Link building
- Reportes mensuales

### 4. Agente IA para Contenidos - 399€/mes
- Generación automática de artículos
- Publicación programada
- SEO optimizado
- Integración con blog

### 5. Agente IA Atención al Cliente - 13.000€ + 699€/mes
- **Desarrollo personalizado del agente IA**
- WhatsApp + telefónico
- Gestión de reservas
- Respuestas 24/7
- Integración CRM

### 6. CRM Vela Segalà - 22.000€ + 599€/mes
- **Desarrollo 100% desde cero**
- Personalizado para 2 clínicas
- Propiedad total del código
- Escalable sin límites

## 🚀 Tecnologías Utilizadas

- **React 18** con Vite
- **Lucide React** para iconos
- **CSS personalizado** con variables y animaciones
- **Componentes modulares**
- **Estado con React Hooks**

## 📦 Instalación y Uso

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📱 Responsive Design

Adaptación completa a todos los dispositivos con 4 breakpoints:

- **Desktop (>1024px)**: Sidebar 280px + contenido completo
- **Tablet (768-1024px)**: Sidebar 250px + grids 2 columnas
- **Mobile (480-768px)**: Sidebar 200px + columna única
- **Small Mobile (<480px)**: Sidebar 70px (iconos) + diseño muy compacto

### Adaptaciones móvil:
- ✅ Logos escalados: 400px → 280px → 200px
- ✅ Grids: 4/3 cols → 2 cols → 1 col
- ✅ CRM: sidebar oculto, tablas con scroll horizontal
- ✅ Mockup web: altura 700px → 600px → 500px
- ✅ Gráficas: tamaños reducidos progresivamente
- ✅ Tipografía: -30% tablet, -50% móvil
- ✅ Touch targets: mínimo 44px
- ✅ Scroll to top automático al cambiar página

## 🎯 Experiencia de Usuario

- Navegación fluida entre páginas
- Animaciones de transición direccionales
- Progreso visual en sidebar
- Indicador de página actual
- Controles de navegación inferior
- Hover states y feedback visual

## 📄 Estructura del Proyecto

```
src/
├── components/
│   ├── Navigation.jsx          # Sidebar + controles
│   └── CRMInteractive.jsx      # CRM completo funcional
├── pages/
│   ├── Welcome.jsx             # Bienvenida
│   ├── Introduction.jsx        # Resumen ejecutivo
│   ├── ServiceDetail.jsx       # Detalles de servicios
│   ├── ServiceDemo.jsx         # Demos visuales
│   ├── ServiceStats.jsx        # Estadísticas
│   ├── BudgetCalculator.jsx    # Calculadora
│   └── FinalProposal.jsx       # Propuesta final
├── App.jsx                     # Componente principal
├── App.css                     # Estilos principales
├── stats-charts.css            # Estilos de gráficas
├── crm-web-styles.css          # Estilos CRM + Web mockup
└── main.jsx                    # Entry point

```

## 🔄 Cambios Recientes

### Versión 3.4 (Actual)
- ✅ **Branding NexGent Integrado**: Logo y datos de contacto de la agencia
  - Logo NexGent en página de bienvenida (footer)
  - Logo NexGent en página final (footer)
  - Datos de contacto actualizados: info@nexgent.io
  - Teléfono: +34 684 48 66 47 (L-V 9:00-18:00)
  - Texto: "Propuesta elaborada por NexGent"
  - Logos responsive: 150px → 120px → 100px

### Versión 3.3
- ✅ **Adaptación Móvil Completa**: 100% responsive en todos los dispositivos
  - 4 breakpoints (Desktop, Tablet, Mobile, Small Mobile)
  - Grids adaptativos (4 cols → 2 cols → 1 col)
  - CRM completamente funcional en móvil
  - Mockup web adaptativo con alturas progresivas
  - Gráficas y estadísticas optimizadas
  - Touch targets mínimo 44px
  - Scroll to top automático
- ✅ **Imágenes Reales Añadidas**: Fotos profesionales en mockup web
  - Hero section con dentista senior
  - 3 tratamientos con imágenes reales
  - Efecto zoom al hover

### Versión 3.2
- ✅ **Logos Añadidos**: Branding corporativo en toda la propuesta
- ✅ **Isotipo Blanco en Sidebar**: Mejor contraste en fondo negro
- ✅ **Favicon Actualizado**: Isotipo negro como favicon
- ✅ **Gráfica de Ingresos Mejorada**: CRM Analytics con mejor visualización
- ✅ **Reseñas de Google**: Sección completa en Agente IA
- ✅ **Scroll Automático**: Al cambiar de página vuelve arriba
- ✅ **Precio SEO Ajustado**: 1.000€ setup + 450€/mes

### Versión 3.1
- ✅ **Actualizado**: Nuevos precios ajustados:
  - Web: 1.500€ (antes 4.999€)
  - SEO: 1.000€ + 450€/mes (setup + mensualidad)
  - Agente IA Blog: 399€/mes (a precio coste, sin setup)
  - Agente IA Cliente: 13.000€ + 699€/mes (desarrollo incluido)
  - CRM: 22.000€ + 599€/mes (antes 39.900€)

### Versión 3.0
- ✅ **Corregido**: Ahora son 2 clínicas (Sant Celoni y Viladecans)
- ✅ **Mejorado**: Mockup web 100% profesional basado en velasegalasantceloni.com
- ✅ **Nuevo**: CRM completamente interactivo con 6 pestañas funcionales
- ✅ **Optimizado**: Submenús solo donde son relevantes
- ✅ **Actualizado**: Precios del mantenimiento (199€/mes)

## 👥 Autor

Propuesta desarrollada para **Vela Segalà** - Clínicas dentales de referencia en Sant Celoni y Viladecans.

---

**© 2025 - Propuesta Confidencial**
