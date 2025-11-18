import { ArrowRight, Eye, CheckCircle } from 'lucide-react'

function ProposalBridge({ currentProposal, onViewOther, onContinue }) {
  const isWeb = currentProposal === 'web'
  const otherProposal = isWeb ? 'tech' : 'web'
  
  const otherProposalInfo = {
    web: {
      title: 'Servicios Web',
      icon: '🌐',
      description: 'Desarrollo web, mantenimiento y posicionamiento SEO',
      services: [
        'Desarrollo Web Viladecans',
        'Mantenimiento Web Premium',
        'Posicionamiento SEO Avanzado'
      ]
    },
    tech: {
      title: 'Tecnología Avanzada',
      icon: '🧠',
      description: 'Inteligencia artificial y CRM personalizado',
      services: [
        'Agente IA Generación de Contenido',
        'Agente IA Atención al Paciente',
        'CRM Vela Segalà (Opcional)'
      ]
    }
  }

  const other = otherProposalInfo[otherProposal]
  const current = otherProposalInfo[currentProposal]

  return (
    <div className="page proposal-bridge-page">
      <div className="bridge-container">
        {/* Confirmación de lo visto */}
        <div className="bridge-section">
          <div className="bridge-icon success">
            <CheckCircle size={48} />
          </div>
          <h1>Has completado la propuesta de</h1>
          <h2 className="bridge-proposal-name">{current.icon} {current.title}</h2>
          <p className="bridge-description">
            Has revisado todos los servicios incluidos en esta propuesta.
          </p>
        </div>

        {/* Separador */}
        <div className="bridge-divider">
          <div className="divider-line"></div>
        </div>

        {/* Opción de ver la otra propuesta */}
        <div className="bridge-section">
          <div className="bridge-icon question">
            <Eye size={48} />
          </div>
          <h2>¿Quieres ver también la propuesta de</h2>
          <h3 className="bridge-other-name">{other.icon} {other.title}?</h3>
          <p className="bridge-other-description">
            {other.description}
          </p>

          <div className="other-services-preview">
            {other.services.map((service, index) => (
              <div key={index} className="service-preview-item">
                <CheckCircle size={18} />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <button className="view-other-button" onClick={onViewOther}>
            <Eye size={20} />
            <span>Ver Propuesta de {other.title}</span>
            <ArrowRight size={20} />
          </button>

          <p className="bridge-note">
            Podrás revisar todos los detalles de esta propuesta y después continuar con el presupuesto final.
          </p>
        </div>

        {/* Botón para continuar sin ver la otra */}
        <div className="bridge-footer">
          <button className="continue-button" onClick={onContinue}>
            <span>No gracias, continuar con el presupuesto</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProposalBridge

