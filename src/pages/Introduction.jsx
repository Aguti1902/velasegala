import { Target, Zap, Globe, TrendingUp, Users, Award } from 'lucide-react'

function Introduction({ onNext }) {
  const objectives = [
    {
      icon: Globe,
      title: 'Crear 3 Nuevas Webs',
      description: 'Desarrollar velasegalasantceloni.com, esteticasegala.com y esteticavela.com desde cero'
    },
    {
      icon: TrendingUp,
      title: 'Presencia Digital Unificada',
      description: 'Las 4 webs bajo un estándar moderno con panel de administración, chat IA y WhatsApp'
    },
    {
      icon: Zap,
      title: 'Blog con IA Duplicado',
      description: 'El agente IA de Viladecans se replica para Sant Celoni sin coste extra de desarrollo'
    },
    {
      icon: Target,
      title: 'Publicidad y SEO Ampliados',
      description: 'Nueva campaña Ads para esteticasegala.com y paquetes SEO escalables por web'
    }
  ]

  const benefits = [
    {
      icon: Users,
      value: '+3 webs',
      label: 'Nuevas presencias digitales profesionales'
    },
    {
      icon: Zap,
      value: '0€',
      label: 'Coste de desarrollo del 2º agente IA Blog'
    },
    {
      icon: Award,
      value: '4 webs',
      label: 'Mantenidas por 250€/mes todo incluido'
    }
  ]

  return (
    <div className="page introduction-page">
      <div className="page-header">
        <span className="page-number">01</span>
        <h1 className="page-title">Resumen Ejecutivo</h1>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">La Propuesta</h2>
        <p className="intro-text">
          Esta propuesta recoge todo lo acordado: la <strong>creación de 3 nuevas webs</strong> 
          (velasegalasantceloni.com, esteticasegala.com y esteticavela.com), 
          el mantenimiento de las <strong>4 webs</strong> del grupo Vela Segalà, 
          la <strong>duplicación del agente IA Blog</strong> para Sant Celoni, 
          la gestión de <strong>campañas SEM</strong> con una nueva para Estética Segala, 
          y un <strong>servicio SEO escalable</strong> por web.
        </p>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Objetivos Estratégicos</h2>
        <div className="objectives-grid">
          {objectives.map((objective, index) => {
            const Icon = objective.icon
            return (
              <div key={index} className="objective-card">
                <div className="objective-icon">
                  <Icon size={32} />
                </div>
                <h3>{objective.title}</h3>
                <p>{objective.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Puntos Clave</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="benefit-card">
                <Icon size={24} className="benefit-icon" />
                <div className="benefit-value">{benefit.value}</div>
                <div className="benefit-label">{benefit.label}</div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Las 3 Nuevas Webs</h2>
        <p className="intro-text">
          Las webs de <strong>velasegalasantceloni.com</strong>, <strong>esteticasegala.com</strong> y 
          <strong> esteticavela.com</strong> se crearán desde cero a <strong>1.500€ cada una</strong>. 
          Cada web incluirá panel de administración, chat con IA, botón de WhatsApp flotante, 
          diseño responsive moderno y todas las funcionalidades necesarias para convertir visitantes en pacientes o clientes.
        </p>
        <p className="intro-text">
          La web de <strong>velasegalaviladecans.com</strong> ya está desarrollada y se incluye en el 
          paquete de mantenimiento junto a las nuevas.
        </p>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Agente IA Blog — Sin Coste Extra</h2>
        <p className="intro-text">
          El agente IA de generación de contenido ya está desarrollado y operativo para Viladecans. 
          Se <strong>duplicará para Sant Celoni</strong> con textos diferentes y otro tipo de contenido, 
          sin coste de desarrollo adicional. La optimización de tokens y gasto de IA permite 
          mantener la <strong>mensualidad de 399€ para ambas webs</strong>.
        </p>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Mantenimiento y Servicios Recurrentes</h2>
        <div className="challenges-list">
          <div className="challenge-item">
            <div className="challenge-number">01</div>
            <div className="challenge-content">
              <h3>Mantenimiento — 250€/mes</h3>
              <p>
                Las 4 webs del grupo (incluyendo velasegalaviladecans.com) quedan cubiertas por 
                250€/mes en lugar de los 199€ anteriores, dado el mayor volumen de webs a gestionar.
              </p>
            </div>
          </div>
          <div className="challenge-item">
            <div className="challenge-number">02</div>
            <div className="challenge-content">
              <h3>Campañas SEM — 300€/mes</h3>
              <p>
                Las campañas de Google Ads se mantienen al mismo precio, añadiendo una campaña 
                extra para esteticasegala.com sin coste adicional de gestión.
              </p>
            </div>
          </div>
          <div className="challenge-item">
            <div className="challenge-number">03</div>
            <div className="challenge-content">
              <h3>SEO — 450€/mes base + 150€ por web extra</h3>
              <p>
                El SEO de velasegalaviladecans.com se mantiene en 450€/mes. Si se desea ampliar 
                a las otras webs, el precio es de 150€/mes por cada web extra.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Nuestra Propuesta de Valor</h2>
        <div className="value-props">
          <div className="value-prop">
            <h4>🎯 Webs Modernas y Potentes</h4>
            <p>Panel de administración, chat IA y WhatsApp en todas las webs.</p>
          </div>
          <div className="value-prop">
            <h4>🤖 IA Blog Optimizada</h4>
            <p>El agente IA duplicado para Sant Celoni, sin coste de desarrollo.</p>
          </div>
          <div className="value-prop">
            <h4>📊 ROI Medible</h4>
            <p>Métricas claras y reportes detallados de resultados en cada web.</p>
          </div>
          <div className="value-prop">
            <h4>🤝 Soporte Continuo</h4>
            <p>Acompañamiento constante y evolución según las necesidades del grupo.</p>
          </div>
        </div>
      </div>

      <div className="intro-cta">
        <p className="intro-cta-text">
          A continuación se detallan los <strong>7 servicios</strong> que componen esta propuesta
        </p>
      </div>
    </div>
  )
}

export default Introduction
