import { Target, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'

function Introduction({ onNext }) {
  const objectives = [
    {
      icon: Target,
      title: 'Unificar Presencia Digital',
      description: 'Consolidar y mantener las 2 páginas web bajo un estándar de excelencia'
    },
    {
      icon: TrendingUp,
      title: 'Aumentar Visibilidad',
      description: 'Posicionamiento SEO para captar nuevos pacientes en Viladecans'
    },
    {
      icon: Zap,
      title: 'Automatización Inteligente',
      description: 'IA para contenidos y atención al cliente 24/7'
    },
    {
      icon: Shield,
      title: 'Sistema Integrado',
      description: 'CRM único y personalizado para las 2 clínicas'
    }
  ]

  const benefits = [
    {
      icon: Users,
      value: '+40%',
      label: 'Incremento en captación de pacientes'
    },
    {
      icon: Zap,
      value: '70%',
      label: 'Reducción en tareas administrativas'
    },
    {
      icon: Award,
      value: '24/7',
      label: 'Disponibilidad sin interrupciones'
    }
  ]

  return (
    <div className="page introduction-page">
      <div className="page-header">
        <span className="page-number">01</span>
        <h1 className="page-title">Resumen Ejecutivo</h1>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">La Oportunidad</h2>
        <p className="intro-text">
          En un mercado cada vez más digitalizado, <strong>Vela Segalà</strong> tiene la oportunidad 
          de posicionarse como líder en innovación dental mediante la implementación de tecnologías 
          de vanguardia que optimizarán la experiencia del paciente y la eficiencia operativa.
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
        <h2 className="section-heading">Resultados Esperados</h2>
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
        <h2 className="section-heading">Contexto del Mercado</h2>
        <p className="intro-text">
          El sector dental en España está experimentando una <strong>transformación digital acelerada</strong>. 
          Los pacientes actuales esperan poder gestionar sus citas online, recibir recordatorios 
          automáticos y acceder a información relevante 24/7. Las clínicas que adoptan tecnología 
          avanzada no solo mejoran la experiencia del paciente, sino que también optimizan sus 
          operaciones internas, reduciendo costes y aumentando la eficiencia.
        </p>
        <p className="intro-text">
          Según estudios recientes del sector, las clínicas dentales que implementan sistemas 
          de gestión digital experimentan un <strong>incremento del 35% en la retención de pacientes</strong> 
          y una <strong>reducción del 60% en las cancelaciones</strong> de citas gracias a los recordatorios 
          automatizados.
        </p>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Desafíos Actuales</h2>
        <div className="challenges-list">
          <div className="challenge-item">
            <div className="challenge-number">01</div>
            <div className="challenge-content">
              <h3>Gestión Multi-Clínica</h3>
              <p>
                Coordinar operaciones entre Sant Celoni y Viladecans requiere 
                sistemas integrados que permitan visibilidad completa y gestión centralizada.
              </p>
            </div>
          </div>
          <div className="challenge-item">
            <div className="challenge-number">02</div>
            <div className="challenge-content">
              <h3>Captación de Nuevos Pacientes</h3>
              <p>
                La competencia en el sector dental es intensa. Destacar en buscadores y 
                mantener una presencia digital activa es fundamental para el crecimiento.
              </p>
            </div>
          </div>
          <div className="challenge-item">
            <div className="challenge-number">03</div>
            <div className="challenge-content">
              <h3>Carga Administrativa</h3>
              <p>
                El personal dedica excesivo tiempo a tareas repetitivas como confirmación 
                de citas, responder consultas básicas y gestión de documentación.
              </p>
            </div>
          </div>
          <div className="challenge-item">
            <div className="challenge-number">04</div>
            <div className="challenge-content">
              <h3>Contenido y Marketing</h3>
              <p>
                Mantener un blog actualizado y presencia en redes sociales requiere tiempo 
                y recursos que las clínicas no siempre tienen disponibles.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="intro-section">
        <h2 className="section-heading">Nuestra Propuesta de Valor</h2>
        <p className="intro-text">
          Esta propuesta no es una solución genérica. Cada servicio ha sido diseñado específicamente 
          para <strong>Vela Segalà</strong>, considerando su estructura de 2 clínicas, su posicionamiento 
          de marca y sus objetivos de crecimiento.
        </p>
        <div className="value-props">
          <div className="value-prop">
            <h4>🎯 Personalización Total</h4>
            <p>Cada solución se adapta 100% a sus procesos y necesidades específicas.</p>
          </div>
          <div className="value-prop">
            <h4>🚀 Tecnología de Vanguardia</h4>
            <p>IA, automatización y sistemas cloud de última generación.</p>
          </div>
          <div className="value-prop">
            <h4>📊 ROI Medible</h4>
            <p>Métricas claras y reportes detallados de resultados.</p>
          </div>
          <div className="value-prop">
            <h4>🤝 Soporte Continuo</h4>
            <p>Acompañamiento constante y evolución según sus necesidades.</p>
          </div>
        </div>
      </div>

      <div className="intro-cta">
        <p className="intro-cta-text">
          A continuación se detallan las <strong>6 soluciones tecnológicas</strong> diseñadas 
          específicamente para Vela Segalà
        </p>
      </div>
    </div>
  )
}

export default Introduction

