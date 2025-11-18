import { useState, useEffect } from 'react'
import Navigation from './components/Navigation'
import Welcome from './pages/Welcome'
import Introduction from './pages/Introduction'
import ServiceDetail from './pages/ServiceDetail'
import ServiceDemo from './pages/ServiceDemo'
import ServiceStats from './pages/ServiceStats'
import BudgetCalculator from './pages/BudgetCalculator'
import FinalProposal from './pages/FinalProposal'
import './App.css'

function App() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedServices, setSelectedServices] = useState([])
  const [direction, setDirection] = useState('forward')

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentStep])

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

  const services = [
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
      shortDescription: 'Sistema propio 100% personalizado o integración con GESDEN G5 existente',
      price: '53.000€ + 599€/mes',
      type: 'both',
      features: [
        '✓ Actualmente utilizan GESDEN G5 (líder en España con 14.000 clínicas)',
        '✓ Opción A: Desarrollo CRM propio 100% personalizado',
        '✓ Opción B: Integración avanzada con GESDEN G5 vía API',
        'Gestión avanzada de pacientes con historial completo',
        'Historial clínico digital con firma electrónica',
        'Sistema de citas con IA predictiva',
        'Módulo de facturación y contabilidad integrado',
        'Gestión de pagos y planes de financiación',
        'Dashboard ejecutivo con analytics en tiempo real',
        'Aplicación móvil nativa iOS y Android para dentistas',
        'Sincronización en tiempo real entre las 2 clínicas',
        'Sistema de recordatorios multi-canal automatizado',
        'Integración completa con Agentes IA (WhatsApp y telefónico)',
        'Portal del paciente con área privada',
        'Sistema de notificaciones push inteligente',
        'Informes personalizados con BI avanzado',
        'Gestión de inventario y almacén',
        'Control de horarios y turnos del personal',
        'Sistema de fidelización de pacientes',
        'Backup automático cifrado',
        'Cumplimiento RGPD y seguridad médica',
        'Soporte técnico prioritario 24/7',
        'Formación intensiva de 40 horas',
        'Propiedad intelectual 100% de Vela Segalà (si CRM propio)',
        'Documentación técnica completa',
        'Garantía extendida de 3 años'
      ],
      pricing: { monthly: 599, initial: 53000 }
    }
  ]

  const steps = [
    { component: Welcome, title: 'Bienvenida', level: 0 },
    { component: Introduction, title: 'Introducción', level: 0 },
    ...services.flatMap((service, index) => {
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
    }),
    { component: BudgetCalculator, title: 'Presupuesto', level: 0 },
    { component: FinalProposal, title: 'Propuesta Final', level: 0 }
  ]

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
      />
      <div className={`page-container ${direction}`}>
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

