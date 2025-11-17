import { Mail, Phone, MapPin, Calendar, FileText, Award } from 'lucide-react'

function FinalProposal({ selectedServices, allServices }) {
  const { monthlyTotal, initialTotal } = (() => {
    let monthly = 0
    let initial = 0
    selectedServices.forEach(serviceId => {
      const service = allServices.find(s => s.id === serviceId)
      if (service) {
        monthly += service.pricing.monthly
        initial += service.pricing.initial
      }
    })
    return { monthlyTotal: monthly, initialTotal: initial }
  })()

  const hasSelection = selectedServices.length > 0
  const allServicesSelected = selectedServices.length === 6
  const discount = allServicesSelected ? 0.10 : 0
  const finalMonthly = monthlyTotal * (1 - discount)
  const finalInitial = initialTotal * (1 - discount)

  return (
    <div className="page final-page">
      <div className="page-header">
        <span className="page-number">09</span>
        <h1 className="page-title">Propuesta Final</h1>
      </div>

      <div className="final-content">
        <div className="final-summary-box">
          <h2>Resumen de la Propuesta</h2>
          {hasSelection ? (
            <>
              <div className="summary-stats">
                <div className="stat-item">
                  <div className="stat-label">Servicios Seleccionados</div>
                  <div className="stat-value">{selectedServices.length} de 6</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Inversión Inicial</div>
                  <div className="stat-value">{finalInitial.toLocaleString('es-ES')}€</div>
                </div>
                <div className="stat-item">
                  <div className="stat-label">Cuota Mensual</div>
                  <div className="stat-value">{finalMonthly.toLocaleString('es-ES')}€</div>
                </div>
              </div>
              {allServicesSelected && (
                <div className="summary-discount">
                  <Award size={24} />
                  <span>Incluye 10% de descuento por paquete completo</span>
                </div>
              )}
            </>
          ) : (
            <p className="summary-empty">
              No se han seleccionado servicios aún. Esta propuesta incluye 6 soluciones 
              tecnológicas disponibles para Vela Segala.
            </p>
          )}
        </div>

        <div className="timeline-section">
          <h2>Cronograma de Implementación</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h3>Semana 1-2: Kick-off y Planificación</h3>
                <p>Reunión inicial, análisis de requisitos y planificación detallada</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Mes 1-2: Desarrollo e Implementación</h3>
                <p>Desarrollo de servicios web, SEO, y configuración de IAs</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Mes 3-6: CRM y Testing</h3>
                <p>Desarrollo del CRM personalizado y pruebas integrales</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Mes 6+: Optimización y Soporte</h3>
                <p>Ajustes finales, formación del equipo y soporte continuo</p>
              </div>
            </div>
          </div>
        </div>

        <div className="guarantees-section">
          <h2>Nuestro Compromiso</h2>
          <div className="guarantees-grid">
            <div className="guarantee-item">
              <FileText size={32} />
              <h3>Transparencia Total</h3>
              <p>Informes detallados y comunicación constante durante todo el proyecto</p>
            </div>
            <div className="guarantee-item">
              <Award size={32} />
              <h3>Calidad Garantizada</h3>
              <p>Todos nuestros desarrollos cumplen los más altos estándares de calidad</p>
            </div>
            <div className="guarantee-item">
              <Calendar size={32} />
              <h3>Plazos Cumplidos</h3>
              <p>Nos comprometemos a cumplir los tiempos establecidos en el cronograma</p>
            </div>
          </div>
        </div>

        <div className="contact-section">
          <h2>O contáctanos directamente</h2>
          <p className="contact-intro">Elige el canal que prefieras</p>
          <div className="contact-grid">
            <div className="contact-item">
              <Mail size={24} />
              <div className="contact-details">
                <div className="contact-label">Email</div>
                <div className="contact-value">info@nexgent.io</div>
                <div className="contact-extra">Respuesta en menos de 24h</div>
              </div>
            </div>
            <div className="contact-item">
              <Phone size={24} />
              <div className="contact-details">
                <div className="contact-label">Teléfono</div>
                <div className="contact-value">+34 684 48 66 47</div>
                <div className="contact-extra">Lunes a Viernes, 9:00-18:00</div>
              </div>
            </div>
          </div>
        </div>

        <div className="final-cta">
          <h2>Próximo Paso</h2>
          <p>
            Estamos listos para comenzar esta transformación digital. 
            Contacte con nosotros para agendar una reunión y resolver cualquier duda.
          </p>
          <div className="cta-buttons">
            <a href="mailto:info@nexgent.io" className="cta-button primary">
              <Mail size={20} />
              <span>Enviar Email</span>
            </a>
            <a href="tel:+34684486647" className="cta-button secondary">
              <Phone size={20} />
              <span>Llamar Ahora</span>
            </a>
          </div>
        </div>

        <div className="final-footer">
          <div className="footer-agency">
            <img src="/nexgent-logo.png" alt="NexGent" className="footer-logo" />
          </div>
          <p>
            <strong>NexGent</strong> · Propuesta para Vela Segalà<br />
            Documento confidencial · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FinalProposal

