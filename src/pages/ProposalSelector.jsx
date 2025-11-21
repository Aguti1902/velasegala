import { Globe, Brain, ArrowRight, CheckCircle, Lock } from 'lucide-react'

function ProposalSelector({ onSelectProposal }) {
  return (
    <div className="page proposal-selector-page">
      <div className="selector-header">
        <div className="welcome-logo">
          <img src="/logos/Logo.png" alt="Vela Segalà" />
        </div>
        <h1>Propuesta de Transformación Digital</h1>
        <p className="selector-subtitle">
          Hemos preparado dos propuestas especializadas para cubrir todas sus necesidades
        </p>
      </div>

      <div className="proposals-grid">
        {/* Card 1: Servicios Web */}
        <div className="proposal-card web-card">
          <div className="proposal-icon">
            <Globe size={48} />
          </div>
          <h2>Servicios Web</h2>
          <p className="proposal-description">
            Presencia digital profesional y posicionamiento online
          </p>
          
          <div className="proposal-services">
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Desarrollo Web Viladecans</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Mantenimiento Web Premium</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Posicionamiento SEO Avanzado</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Campañas SEM Google Ads</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Agente IA Generación de Contenido</span>
            </div>
          </div>

          <button 
            className="proposal-button"
            onClick={() => onSelectProposal('web')}
          >
            <span>Ver Propuesta Completa</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Card 2: Tecnología Avanzada - IA + Subvención */}
        <div className="proposal-card tech-card">
          <div className="proposal-icon">
            <Brain size={48} />
          </div>
          <h2>Tecnología Avanzada + Subvención</h2>
          <p className="proposal-description">
            IA de atención al paciente con financiación europea hasta 30.000€
          </p>
          
          <div className="proposal-services">
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Agente IA WhatsApp + Telefónico</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Integración con Gesden G5</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Subvención Global Data Care (30.000€)</span>
            </div>
            <div className="service-item">
              <CheckCircle size={18} />
              <span>Propuesta Comercial BQDC</span>
            </div>
          </div>

          <button 
            className="proposal-button"
            onClick={() => onSelectProposal('tech')}
          >
            <span>Ver Propuesta Completa</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="selector-footer">
        <div className="selector-agency">
          <span>Propuesta elaborada por</span>
          <img src="/nexgent-logo.png" alt="NexGent" />
        </div>
      </div>
    </div>
  )
}

export default ProposalSelector

