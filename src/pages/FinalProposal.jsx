import { Mail, Phone, Calendar, FileText, Award } from 'lucide-react'

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
            <div className="summary-stats">
              <div className="stat-item">
                <div className="stat-label">Servicios Seleccionados</div>
                <div className="stat-value">{selectedServices.length} de {allServices.length}</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Inversión Inicial</div>
                <div className="stat-value">{initialTotal.toLocaleString('es-ES')}€</div>
              </div>
              <div className="stat-item">
                <div className="stat-label">Cuota Mensual</div>
                <div className="stat-value">{monthlyTotal.toLocaleString('es-ES')}€</div>
              </div>
            </div>
          ) : (
            <p className="summary-empty">
              No se han seleccionado servicios aún. Esta propuesta incluye 7 soluciones
              diseñadas específicamente para el grupo Vela Segalà.
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
                <p>Reunión inicial, análisis de requisitos y definición de estructura y diseño de las 3 webs</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h3>Mes 1-2: Desarrollo de las 3 Webs</h3>
                <p>Diseño y programación de velasegalasantceloni.com, esteticasegala.com y esteticavela.com</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h3>Mes 2: Activación del Agente IA Blog</h3>
                <p>Duplicación y configuración del agente IA para Sant Celoni con contenido diferenciado</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h3>Mes 2-3: Puesta en Marcha</h3>
                <p>Lanzamiento de webs, nueva campaña Ads para esteticasegala.com y activación del SEO</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker">5</div>
              <div className="timeline-content">
                <h3>Mes 3+: Mantenimiento y Optimización</h3>
                <p>Seguimiento continuo de las 4 webs, ajuste de campañas y reportes mensuales</p>
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
              <p>Webs modernas con panel de administración, chat IA y WhatsApp incluidos</p>
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
            Estamos listos para comenzar. Contacte con nosotros para agendar una 
            reunión, resolver cualquier duda o ajustar los servicios a su medida.
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
