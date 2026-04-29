import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import PasswordProtection from './pages/PasswordProtection'
import Welcome from './pages/Welcome'
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
  const [direction, setDirection] = useState('forward')

  useEffect(() => {
    if (isAuthenticated) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [currentStep, isAuthenticated])

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

  const allServices = [
    {
      id: 'creacion-santceloni',
      title: 'Web velasegalasantceloni.com',
      shortDescription: 'Diseño y desarrollo completo de la clínica dental de Sant Celoni',
      price: '1.500€',
      type: 'initial',
      features: [
        'Diseño UX/UI moderno y 100% personalizado',
        'Desarrollo responsive premium (móvil, tablet, desktop)',
        'Panel de administración completo e intuitivo',
        'Chat con IA integrado para atención al paciente',
        'Botón de WhatsApp flotante siempre visible',
        'Formularios inteligentes de contacto y solicitud de citas',
        'Galería de imágenes optimizada con lazy loading',
        'Integración con Google Maps y direcciones',
        'Certificado SSL Premium incluido',
        'Optimización SEO técnica inicial',
        'Migración de contenidos existentes',
        'Formación completa del equipo'
      ],
      pricing: { monthly: 0, initial: 1500 }
    },
    {
      id: 'creacion-esteticasegala',
      title: 'Web esteticasegala.com',
      shortDescription: 'Diseño y desarrollo completo de la web de Estética Segala',
      price: '1.500€',
      type: 'initial',
      features: [
        'Diseño UX/UI moderno y 100% personalizado',
        'Desarrollo responsive premium (móvil, tablet, desktop)',
        'Panel de administración completo e intuitivo',
        'Chat con IA integrado para atención al cliente',
        'Botón de WhatsApp flotante siempre visible',
        'Formularios de contacto y reservas online',
        'Galería de tratamientos y resultados antes/después',
        'Integración con Google Maps y direcciones',
        'Certificado SSL Premium incluido',
        'Optimización SEO técnica inicial',
        'Contenido inicial redactado y optimizado',
        'Formación completa del equipo'
      ],
      pricing: { monthly: 0, initial: 1500 }
    },
    {
      id: 'creacion-esteticavela',
      title: 'Web esteticavela.com',
      shortDescription: 'Diseño y desarrollo completo de la web de Estética Vela',
      price: '1.500€',
      type: 'initial',
      features: [
        'Diseño UX/UI moderno y 100% personalizado',
        'Desarrollo responsive premium (móvil, tablet, desktop)',
        'Panel de administración completo e intuitivo',
        'Chat con IA integrado para atención al cliente',
        'Botón de WhatsApp flotante siempre visible',
        'Formularios de contacto y reservas online',
        'Galería de tratamientos y resultados antes/después',
        'Integración con Google Maps y direcciones',
        'Certificado SSL Premium incluido',
        'Optimización SEO técnica inicial',
        'Contenido inicial redactado y optimizado',
        'Formación completa del equipo'
      ],
      pricing: { monthly: 0, initial: 1500 }
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento Web Premium',
      shortDescription: 'Gestión integral de las 4 webs corporativas',
      price: '250€/mes',
      type: 'monthly',
      features: [
        'Mantenimiento de velasegalaviladecans.com',
        'Mantenimiento de velasegalasantceloni.com',
        'Mantenimiento de esteticasegala.com',
        'Mantenimiento de esteticavela.com',
        'Actualizaciones de seguridad mensuales',
        'Backups automáticos diarios en múltiples ubicaciones',
        'Monitorización 24/7 con alertas en tiempo real',
        'Optimización continua de rendimiento y velocidad',
        'Soporte técnico prioritario con respuesta en <2 horas',
        'Informes mensuales detallados de rendimiento'
      ],
      pricing: { monthly: 250, initial: 0 }
    },
    {
      id: 'ia-blog',
      title: 'Agente IA Blog',
      shortDescription: 'Sistema IA de contenido para Sant Celoni y Viladecans',
      price: '399€/mes · Sin coste inicial',
      type: 'monthly',
      features: [
        'Agente IA ya desarrollado y operativo en Viladecans',
        'Duplicado para Sant Celoni con textos y contenido diferente',
        'Sin coste de desarrollo — reutilización del agente existente',
        '8-12 artículos/mes por web (hasta 24 artículos/mes en total)',
        'Contenido 100% SEO-optimizado con keywords estratégicas',
        'Análisis continuo de tendencias del sector dental',
        'Generación y optimización de imágenes con IA',
        'Publicación automática en WordPress',
        'Programación inteligente basada en analytics',
        'Optimización automática de metadatos',
        'Dashboard de rendimiento en tiempo real',
        'Tono y estilo adaptado a cada clínica'
      ],
      pricing: { monthly: 399, initial: 0 }
    },
    {
      id: 'google-ads',
      title: 'Campañas SEM Google Ads',
      shortDescription: 'Gestión de campañas + nueva campaña esteticasegala.com',
      price: '300€/mes',
      type: 'monthly',
      features: [
        'Gestión de todas las campañas activas de Vela Segalà',
        'Nueva campaña para esteticasegala.com incluida',
        'Optimización continua de anuncios y keywords',
        'Segmentación avanzada de público objetivo',
        'A/B testing de creatividades y copys',
        'Remarketing estratégico',
        'Informes semanales de rendimiento',
        'Extensiones de anuncios optimizadas',
        'Análisis de competencia en pujas',
        'Presupuesto publicitario no incluido (gestionado aparte)'
      ],
      pricing: { monthly: 300, initial: 0 }
    },
    {
      id: 'seo',
      title: 'Posicionamiento SEO',
      shortDescription: 'SEO de velasegalaviladecans.com + webs extra opcionales',
      price: '450€/mes · +150€/web extra',
      type: 'monthly',
      features: [
        'SEO completo de velasegalaviladecans.com (450€/mes base)',
        'Análisis exhaustivo de palabras clave locales',
        'Optimización on-page completa y continua',
        'Creación de contenido SEO optimizado (4 artículos/mes)',
        'Link building profesional con backlinks de alta autoridad',
        'SEO técnico avanzado y optimización de Core Web Vitals',
        'SEO local premium (Google My Business + directorios)',
        'Análisis de competencia mensual',
        'Seguimiento de más de 100 palabras clave',
        'Informes ejecutivos detallados',
        'Consultoría estratégica mensual',
        '+ 150€/mes por cada web adicional (sant celoni, estética segala, estética vela)'
      ],
      pricing: { monthly: 450, initial: 0 }
    }
  ]

  const steps = [
    { component: Welcome, title: 'Bienvenida', level: 0 },
    { component: Introduction, title: 'Introducción', level: 0 },
    ...allServices.flatMap((service) => {
      // Las 3 webs de creación: detail + demo de diseño
      if (service.id.startsWith('creacion-')) {
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
      // Mantenimiento: solo detail
      if (service.id === 'mantenimiento') {
        return [{
          component: ServiceDetail,
          title: service.title,
          level: 0,
          props: { service }
        }]
      }
      // Google Ads: solo detail
      if (service.id === 'google-ads') {
        return [{
          component: ServiceDetail,
          title: service.title,
          level: 0,
          props: { service }
        }]
      }
      // IA Blog y SEO: detail + demo + stats
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
    }),
    { component: BudgetCalculator, title: 'Presupuesto', level: 0 },
    { component: FinalProposal, title: 'Propuesta Final', level: 0 }
  ]

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

  return (
    <div className="app">
      <Navigation
        currentStep={currentStep}
        totalSteps={steps.length}
        onNext={nextStep}
        onPrev={prevStep}
        onGoTo={goToStep}
        steps={steps}
        selectedProposal="web"
      />
      <div className={`page-container ${direction}`}>
        <CurrentComponent
          {...currentProps}
          onNext={nextStep}
          onPrev={prevStep}
          selectedServices={selectedServices}
          toggleService={toggleService}
          allServices={allServices}
          selectedProposal="web"
        />
      </div>
    </div>
  )
}

export default App
