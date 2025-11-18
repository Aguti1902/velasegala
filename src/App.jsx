import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import PasswordProtection from './pages/PasswordProtection'
import Welcome from './pages/Welcome'
import ProposalSelector from './pages/ProposalSelector'
import Introduction from './pages/Introduction'
import ServiceDetail from './pages/ServiceDetail'
import ServiceDemo from './pages/ServiceDemo'
import ServiceStats from './pages/ServiceStats'
import ProposalBridge from './pages/ProposalBridge'
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
      shortDescription: 'Gestión integral de 2 sitios web corporativos',
      price: '199€/mes',
      type: 'monthly',
      features: [
        'Mantenimiento de velasegalasantceloni.com',
        'Mantenimiento de velasegalaviladecans.com',
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
      id: 'ia-blog',
      title: 'Agente IA Generación de Contenido',
      shortDescription: 'Sistema inteligente de creación y publicación automática',
      price: '399€/mes',
      type: 'monthly',
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
      pricing: { monthly: 399, initial: 0 }
    },
    {
      id: 'ia-cliente',
      title: 'Agente IA Atención al Paciente',
      shortDescription: 'Asistente virtual inteligente con gestión completa de citas',
      price: '13.000€ + 699€/mes',
      type: 'both',
      features: [
        'Chatbot avanzado para WhatsApp Business',
        'Asistente telefónico con IA de voz natural',
        'Gestión automática e inteligente de reservas',
        'Recordatorios personalizados (SMS, email, WhatsApp)',
        'Solicitud automática de reseñas de Google tras cada visita',
        'Sistema de generación masiva de reseñas positivas',
        'Respuestas contextuales en tiempo real 24/7/365',
        'Integración bidireccional con calendarios',
        'Soporte multiidioma: Español, Catalán, Inglés',
        'Análisis de satisfacción y sentiment analysis',
        'Escalado inteligente a operadores humanos',
        'FAQ dinámicas con machine learning',
        'Historial completo de conversaciones',
        'Dashboard de métricas y KPIs en tiempo real'
      ],
      pricing: { monthly: 699, initial: 13000 }
    },
    {
      id: 'crm',
      title: 'CRM Vela Segalà - Desarrollo a Medida (OPCIONAL)',
      shortDescription: 'Sistema 100% personalizado con todas las funcionalidades de GESDEN G5 + IA integrada',
      price: '53.000€ + 599€/mes',
      type: 'both',
      features: [
        'Todas las funcionalidades de GESDEN G5 incluidas',
        'Gestión completa de pacientes con historial clínico digital',
        'Odontograma digital interactivo con anotaciones',
        'Historial clínico con firma electrónica y validación legal',
        'Sistema de citas inteligente con IA predictiva',
        'Módulo de facturación y contabilidad integrado',
        'Gestión de presupuestos con plantillas personalizables',
        'Sistema de recalls y seguimiento de pacientes',
        'Gestión de pagos y planes de financiación flexible',
        'Integración con sistemas de imágenes médicas (DICOM)',
        'Dashboard ejecutivo con analytics en tiempo real',
        'Informes personalizados con Business Intelligence avanzado',
        'Control de inventario y gestión de almacén',
        'Control de horarios, turnos y vacaciones del personal',
        'Sistema de fidelización y puntos de pacientes',
        'VENTAJAS ADICIONALES DEL CRM PROPIO:',
        'Integración nativa de Agentes IA (WhatsApp + telefónico)',
        'Arquitectura escalable preparada para crecimiento futuro',
        'Interfaz moderna, intuitiva y personalizada para Vela Segalà',
        'Rendimiento optimizado (3x más rápido que GESDEN G5)',
        'Aplicación móvil nativa iOS y Android para dentistas',
        'Portal del paciente con área privada y autogestión',
        'Sincronización en tiempo real entre las 2 clínicas',
        'Sistema de notificaciones push multi-canal',
        'API abierta para futuras integraciones sin límites',
        'Propiedad intelectual 100% de Vela Segalà',
        'Backup automático cifrado en múltiples ubicaciones',
        'Cumplimiento RGPD y normativa de datos médicos',
        'Soporte técnico prioritario 24/7 especializado',
        'Formación intensiva de 40 horas para todo el equipo',
        'Actualizaciones y mejoras continuas sin coste adicional',
        'Documentación técnica completa y código fuente',
        'Garantía extendida de 3 años con SLA del 99.9%'
      ],
      pricing: { monthly: 599, initial: 53000 }
    }
  ]

  // Filtrar servicios según la propuesta seleccionada
  const services = selectedProposal === 'web' 
    ? allServices.filter(s => ['mantenimiento', 'creacion', 'seo'].includes(s.id))
    : selectedProposal === 'tech'
    ? allServices.filter(s => ['ia-blog', 'ia-cliente', 'crm'].includes(s.id))
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
    // Mostrar ProposalBridge solo si no es 'all' (para ofrecer ver la otra propuesta)
    ...(selectedProposal && selectedProposal !== 'all' ? [
      { 
        component: ProposalBridge, 
        title: '¿Ver otra propuesta?', 
        level: 0,
        props: {
          currentProposal: selectedProposal,
          onViewOther: () => {
            setSelectedProposal('all')
            // Resetear al paso de Introducción para ver ambas propuestas
            setCurrentStep(2)
          },
          onContinue: nextStep
        }
      }
    ] : []),
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

