import { ArrowRight } from 'lucide-react'

function Welcome({ onNext }) {
  return (
    <div className="page welcome-page">
      <div className="welcome-content">
        <div className="welcome-logo">
          <img src="/logos/Logo.png" alt="Vela Segalà" />
        </div>
        
        <h1 className="welcome-title">
          Vela Segalà
        </h1>
        
        <div className="welcome-divider" />
        
        <h2 className="welcome-subtitle">
          Propuesta de Transformación Digital
        </h2>
        
        <p className="welcome-description">
          Una solución integral y personalizada para elevar su presencia digital 
          y optimizar la gestión de sus tres clínicas dentales
        </p>

        <div className="welcome-meta">
          <div className="meta-item">
            <span className="meta-label">Fecha</span>
            <span className="meta-value">{new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Válido hasta</span>
            <span className="meta-value">{new Date(Date.now() + 30*24*60*60*1000).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </div>

        <button className="welcome-cta" onClick={onNext}>
          <span>Comenzar Presentación</span>
          <ArrowRight size={20} />
        </button>

        <div className="welcome-footer">
          <p>Documento confidencial · Uso exclusivo de Vela Segalà</p>
          <div className="agency-badge">
            <span className="agency-label">Propuesta elaborada por</span>
            <img src="/nexgent-logo.png" alt="NexGent" className="agency-logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome

