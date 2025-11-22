import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import PasswordProtection from './pages/PasswordProtection'
import Welcome from './pages/Welcome'
import ProposalSelector from './pages/ProposalSelector'
import Introduction from './pages/Introduction'
import ServiceDetail from './pages/ServiceDetail'
import ServiceDemo from './pages/ServiceDemo'
import ServiceStats from './pages/ServiceStats'
import BudgetCalculator from './pages/BudgetCalculator'
import FinalProposal from './pages/FinalProposal'
import './App.css'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedProposal, setSelectedProposal] = useState(null)
  const [direction, setDirection] = useState('forward')

  // Scroll to top when page changes (DEBE estar antes del return condicional)
  useEffect(() => {
    if (isAuthenticated) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentStep, isAuthenticated])

  // Si no está autenticado, mostrar página de contraseña
  if (!isAuthenticated) {
    return <PasswordProtection onCorrectPassword={() => setIsAuthenticated(true)} />
  }

  const toggleService = (serviceId) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    )
  }

  const nextStep = () => {
    setDirection('forward')
    setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
  }

  const prevStep = () => {
    setDirection('backward')
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const goToStep = (step) => {
    setDirection(step > currentStep ? 'forward' : 'backward')
    setCurrentStep(step)
  }

  const handleProposalSelection = (proposal) => {
    setSelectedProposal(proposal)
    // Avanzar 2 pasos: saltar bienvenida e ir directo a introducción
    setDirection('forward')
    setCurrentStep(2) // Índice 2 = Introducción (después de Bienvenida y Selector)
  }

  const allServices = [
    {
      id: 'mantenimiento',
      title: 'Mantenimiento Web Premium',
      shortDescription: 'Gestión integral de 4 sitios web corporativos',
      price: '199€/mes',
      type: 'monthly',
      features: [
        'Mantenimiento de velasegala.com',
        'Mantenimiento de velasegalasantceloni.com',
        'Mantenimiento de velasegalaviladecans.com',
        'Mantenimiento de esteticavelasegala.com',
        'Actualizaciones de seguridad mensuales',
        'Backups automáticos diarios en múltiples ubicaciones',
        'Monitorización 24/7 con alertas en tiempo real',
        'Optimización continua de rendimiento y velocidad',
        'Soporte técnico prioritario con respuesta en menos de 2 horas',
        'Informes mensuales detallados de rendimiento'
      ],
      pricing: { monthly: 199, initial: 0 }
    },
    {
      id: 'creacion',
      title: 'Desarrollo Web Viladecans',
      shortDescription: 'Diseño y desarrollo completo de velasegalaviladecans.com',
      price: '1.500€',
      type: 'initial',
      features: [
        'Diseño UX/UI personalizado y exclusivo',
        'Desarrollo responsive premium (móvil, tablet, desktop)',
        'Sistema de gestión de contenidos (CMS) avanzado',
        'Formularios inteligentes de contacto y solicitud de citas',
        'Galería de imágenes optimizada con lazy loading',
        'Integración con Google Maps y direcciones',
        'Panel de administración intuitivo y potente',
        'Certificado SSL Premium incluido',
        'Optimización SEO técnica inicial',
        'Migración profesional de contenidos',
        'Formación completa del equipo'
      ],
      pricing: { monthly: 0, initial: 1500 }
    },
    {
      id: 'seo',
      title: 'Posicionamiento SEO Avanzado',
      shortDescription: 'Estrategia SEO integral para dominar el mercado local',
      price: '1.000€ + 450€/mes',
      type: 'both',
      features: [
        'Análisis exhaustivo de palabras clave locales',
        'Optimización on-page completa y continua',
        'Creación de contenido SEO optimizado (4 artículos/mes)',
        'Link building profesional con backlinks de alta autoridad',
        'SEO técnico avanzado y optimización de Core Web Vitals',
        'SEO local premium (Google My Business + directorios)',
        'Estrategia de contenidos trimestral personalizada',
        'Análisis de competencia mensual',
        'Informes ejecutivos detallados',
        'Seguimiento de más de 100 palabras clave',
        'Consultoría estratégica mensual'
      ],
      pricing: { monthly: 450, initial: 1000 }
    },
    {
      id: 'google-ads',
      title: 'Campañas SEM Google Ads',
      shortDescription: 'Gestión profesional de publicidad en Google',
      price: '300€/mes',
      type: 'monthly',
      features: [
        'Gestión completa de campañas de búsqueda',
        'Optimización continua de anuncios y keywords',
        'Segmentación avanzada de público objetivo',
        'A/B testing de creatividades y copys',
        'Remarketing estratégico',
        'Informes semanales de rendimiento',
        'Optimización de conversiones y CTR',
        'Ajuste de pujas automático basado en rendimiento',
        'Extensiones de anuncios optimizadas',
        'Análisis de competencia en pujas',
        'Presupuesto publicitario no incluido (gestionado aparte)'
      ],
      pricing: { monthly: 300, initial: 0 }
    },
    {
      id: 'ia-blog',
      title: 'Agente IA Generación de Contenido',
      shortDescription: 'Sistema inteligente de creación y publicación automática',
      price: '2.000€ + 399€/mes',
      type: 'both',
      features: [
        'Publicación automática de artículos de alta calidad (8-12/mes)',
        'Contenido 100% SEO-optimizado con palabras clave estratégicas',
        'Análisis continuo de tendencias del sector dental',
        'Integración con fuentes de noticias médicas verificadas',
        'Generación y optimización de imágenes con IA',
        'Programación inteligente basada en analytics',
        'Reescritura adaptada al tono de la marca',
        'Publicación automática en redes sociales',
        'Optimización automática de metadatos',
        'A/B testing de titulares',
        'Dashboard de rendimiento en tiempo real'
      ],
      pricing: { monthly: 399, initial: 2000 }
    },
    {
      id: 'ia-cliente',
      title: 'Agente IA WhatsApp + Telefónico',
      shortDescription: 'IA de atención al paciente integrada con Gesden G5 vía API',
      price: '13.000€ + 699€/mes',
      type: 'both',
      features: [
        'Chatbot avanzado para WhatsApp Business 24/7',
        'Asistente telefónico con IA de voz natural conversacional',
        'Integración completa con CRM Gesden G5 vía API',
        'Sincronización bidireccional en tiempo real',
        'Gestión automática e inteligente de citas en Gesden',
        'Consulta de disponibilidad en tiempo real',
        'Recordatorios personalizados automáticos (SMS, email, WhatsApp)',
        'Solicitud automática de reseñas de Google tras cada visita',
        'Respuestas contextuales basadas en historial del paciente',
        'Acceso al historial clínico para respuestas personalizadas',
        'Soporte multiidioma: Español, Catalán, Inglés',
        'Escalado inteligente a operadores humanos cuando sea necesario',
        'FAQ dinámicas con machine learning continuo',
        'Análisis de satisfacción y sentiment analysis avanzado',
        'Dashboard de métricas y KPIs en tiempo real',
        'Historial completo de conversaciones para auditoría',
        'Atención simultánea a múltiples pacientes sin límite',
        'Reducción del 70% en carga de trabajo de recepción'
      ],
      pricing: { monthly: 699, initial: 13000 }
    },
    {
      id: 'subvencion',
      title: 'Subvención Global Data Care',
      shortDescription: 'Financiación europea de hasta 30.000€ + acceso a red sanitaria UE',
      price: 'GRATIS (100% subvencionado)',
      type: 'initial',
      features: [
        'Subvención de Red.es de hasta 30.000€',
        'Gestión completa por Accuro (empresa gestora)',
        'NexGent coordina todo el proceso técnico',
        '💰 De los 30.000€: Accuro cobra 15.000€ en comisión de gestión',
        '💰 Los otros 15.000€ cubren: Desarrollo IA (13.000€) + 2 meses de mantenimiento',
        '💡 BENEFICIO CLAVE: Acceso a red europea de datos clínicos',
        'Registro en plataforma Global Data Care EU',
        'Intercambio bidireccional de datos con clínicas europeas',
        'Acceso a historiales clínicos de pacientes de otras clínicas',
        'Visualización de radiografías, tratamientos previos y diagnósticos',
        'Historial completo de enfermedades y alergias',
        'Mejor atención a nuevos pacientes con información previa',
        'Reducción de tiempo en primera consulta (30-40% más rápido)',
        'Decisiones clínicas más informadas desde el primer día',
        'Cumplimiento automático con RGPD y normativa europea',
        'Compartir datos anónimos para investigación médica',
        'Contribuir al avance de la odontología europea',
        'Sin costes ocultos para Vela Segalà',
        'Gestión de toda la documentación por Accuro y NexGent',
        'Plazo de resolución: 2-3 meses'
      ],
      pricing: { monthly: 0, initial: 0 }
    },
    {
      id: 'colaboracion',
      title: 'Propuesta Comercial BQDC',
      shortDescription: 'Modelo de colaboración y comisiones para Xavier Vela',
      price: 'Basado en comisiones',
      type: 'commercial',
      features: [
        '🤝 MODELO DE COLABORACIÓN CON BQDC',
        'Xavier Vela recomienda nuestras soluciones a la red BQDC',
        'Más de 80 clínicas dentales en España y Portugal',
        'Posicionamiento como socio tecnológico oficial de BQDC',
        '',
        '💰 ESTRUCTURA DE COMISIONES - SUBVENCIONES',
        '15% de cada subvención conseguida para clínicas BQDC',
        'Ejemplo: Subvención de 30.000€ = 4.500€ para Xavier',
        'Pago único al conseguir la subvención',
        'Sin límite de clínicas participantes',
        '',
        '💰 ESTRUCTURA DE COMISIONES - AGENTES IA',
        '50€/mes por cada clínica que contrate el Agente IA',
        'Comisión recurrente mientras la clínica mantenga el servicio',
        'Ejemplo: 10 clínicas = 500€/mes recurrentes',
        'Ejemplo: 30 clínicas = 1.500€/mes recurrentes',
        '',
        '🎯 POTENCIAL DE INGRESOS',
        'Con solo 20 clínicas usando IA: 1.000€/mes recurrentes',
        'Con 20 subvenciones conseguidas: 90.000€ en comisiones únicas',
        'Ingresos pasivos mensuales escalables sin límite',
        '',
        '📊 CALCULADORA INTERACTIVA INCLUIDA',
        'Simula diferentes escenarios de colaboración',
        'Visualiza el potencial de ingresos en tiempo real'
      ],
      pricing: { monthly: 0, initial: 0 }
    }
  ]

  // Filtrar servicios según la propuesta seleccionada
  const services = selectedProposal === 'web' 
    ? allServices.filter(s => ['mantenimiento', 'creacion', 'seo', 'google-ads', 'ia-blog'].includes(s.id))
    : selectedProposal === 'tech'
    ? allServices.filter(s => ['ia-cliente', 'subvencion', 'colaboracion'].includes(s.id))
    : allServices // 'all' muestra todos

  const steps = [
    { component: Welcome, title: 'Bienvenida', level: 0 },
    { 
      component: ProposalSelector, 
      title: 'Selección de Propuesta', 
      level: 0,
      props: { onSelectProposal: handleProposalSelection }
    },
    ...(selectedProposal ? [
      { component: Introduction, title: 'Introducción', level: 0 }
    ] : []),
    ...(selectedProposal ? services.flatMap((service) => {
      // Solo mantenimiento y creación web NO tienen subpáginas
      if (service.id === 'mantenimiento') {
        return [{ 
          component: ServiceDetail, 
          title: service.title,
          level: 0,
          props: { service }
        }]
      }
      // Creación web solo tiene la demo del diseño
      if (service.id === 'creacion') {
        return [
          { 
            component: ServiceDetail, 
            title: service.title,
            level: 0,
            props: { service }
          },
          {
            component: ServiceDemo,
            title: 'Diseño de la Web',
            level: 1,
            props: { service }
          }
        ]
      }
      // Google Ads solo tiene la página de detalle (sin demo ni stats)
      if (service.id === 'google-ads') {
        return [
          { 
            component: ServiceDetail, 
            title: service.title,
            level: 0,
            props: { service }
          }
        ]
      }
      // Servicios que incluyen demo y estadísticas en la misma página
      if (service.id === 'subvencion') {
        return [
          { 
            component: ServiceDetail, 
            title: service.title,
            level: 0,
            props: { service }
          },
          {
            component: ServiceDemo,
            title: 'Información Detallada',
            level: 1,
            props: { service }
          }
        ]
      }
      if (service.id === 'colaboracion') {
        return [
          { 
            component: ServiceDetail, 
            title: service.title,
            level: 0,
            props: { service }
          },
          {
            component: ServiceStats,
            title: 'Impacto y Beneficios',
            level: 1,
            props: { service }
          }
        ]
      }
      // El resto de servicios tienen demo + estadísticas
      return [
        { 
          component: ServiceDetail, 
          title: service.title,
          level: 0,
          props: { service }
        },
        {
          component: ServiceDemo,
          title: 'Demostración',
          level: 1,
          props: { service }
        },
        {
          component: ServiceStats,
          title: 'Estadísticas e Impacto',
          level: 1,
          props: { service }
        }
      ]
    }) : []),
    ...(selectedProposal ? [
      { component: BudgetCalculator, title: 'Presupuesto', level: 0 },
      { component: FinalProposal, title: 'Propuesta Final', level: 0 }
    ] : [])
  ]

  // Verificación de seguridad
  if (steps.length === 0 || !steps[currentStep]) {
    return (
      <div className="app">
        <div className="page-container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            minHeight: '100vh',
            fontSize: '1.5rem',
            color: 'var(--gray-600)'
          }}>
            Cargando...
          </div>
        </div>
      </div>
    )
  }

  const CurrentComponent = steps[currentStep].component
  const currentProps = steps[currentStep].props || {}

  // Determinar el nombre de la propuesta para el badge
  const getProposalLabel = () => {
    if (selectedProposal === 'web') return { text: '🌐 Propuesta: Servicios Web', color: 'web' }
    if (selectedProposal === 'tech') return { text: '🧠 Propuesta: Tecnología Avanzada', color: 'tech' }
    if (selectedProposal === 'all') return { text: '⭐ Propuesta: Integral Completa', color: 'all' }
    return null
  }

  const proposalLabel = getProposalLabel()
  const showProposalBadge = selectedProposal && currentStep > 1 // Mostrar después del selector

  return (
    <div className="app">
      <Navigation 
        currentStep={currentStep}
        totalSteps={steps.length}
        onNext={nextStep}
        onPrev={prevStep}
        onGoTo={goToStep}
        steps={steps}
        selectedProposal={selectedProposal}
      />
      <div className={`page-container ${direction}`}>
        {showProposalBadge && proposalLabel && (
          <div className={`proposal-badge proposal-badge-${proposalLabel.color}`}>
            {proposalLabel.text}
          </div>
        )}
        <CurrentComponent 
          {...currentProps}
          onNext={nextStep}
          onPrev={prevStep}
          selectedServices={selectedServices}
          toggleService={toggleService}
          allServices={services}
        />
      </div>
    </div>
  )
}

export default App

/* FORCE BUILD Sat Nov 22 02:20:03 CET 2025 */
