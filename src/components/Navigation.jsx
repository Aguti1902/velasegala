import { ChevronLeft, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from 'react'

function Navigation({ currentStep, totalSteps, onNext, onPrev, onGoTo, steps, selectedProposal }) {
  const progress = ((currentStep + 1) / totalSteps) * 100
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = (index) => {
    onGoTo(index)
    setMobileMenuOpen(false) // Cerrar menú al navegar
  }

  // Texto para mostrar la propuesta en móvil
  const getProposalText = () => {
    if (!selectedProposal) return ''
    if (selectedProposal === 'web') return '🌐 Web'
    if (selectedProposal === 'tech') return '🧠 Tech'
    if (selectedProposal === 'all') return '⭐ Completa'
    return ''
  }

  return (
    <>
      {/* Botón hamburguesa móvil */}
      <button 
        className="mobile-menu-toggle" 
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay para cerrar menú en móvil */}
      {mobileMenuOpen && (
        <div 
          className="mobile-overlay" 
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <aside className={`sidebar ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="sidebar-header">
            <div className="sidebar-logo">
              <img src="/logos/Isotipo blanco.png" alt="Vela Segalà" />
            </div>
            <h3 className="sidebar-brand">Vela Segalà</h3>
            <span className="sidebar-subtitle">Propuesta Digital</span>
          </div>

        <div className="sidebar-progress">
          <div className="progress-label">Progreso</div>
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="progress-text">
            {currentStep + 1} de {totalSteps}
          </div>
        </div>

        <nav className="sidebar-nav">
          <h4 className="nav-title">Índice</h4>
          <div className="nav-items">
            {steps.map((step, index) => (
              <button
                key={index}
                className={`nav-item ${step.level === 1 ? 'sub-item' : ''} ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
                onClick={() => handleNavClick(index)}
              >
                {step.level === 0 ? (
                  <span className="item-number">{steps.filter((s, i) => i <= index && s.level === 0).length}</span>
                ) : (
                  <span className="item-bullet">→</span>
                )}
                <span className="item-title">{step.title}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="sidebar-footer">
          <p>© 2025 Vela Segala</p>
          <p className="confidential">Confidencial</p>
        </div>
      </aside>

      <div className="bottom-controls" data-proposal-text={getProposalText()}>
        <button 
          className="nav-button prev"
          onClick={onPrev}
          disabled={currentStep === 0}
        >
          <ChevronLeft size={20} />
          <span>Anterior</span>
        </button>

        <div className="current-step-indicator">
          {steps[currentStep].title}
        </div>

        <button 
          className="nav-button next"
          onClick={onNext}
          disabled={currentStep === totalSteps - 1}
        >
          <span>Siguiente</span>
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  )
}

export default Navigation

