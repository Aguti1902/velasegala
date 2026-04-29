import { Check, Plus, X } from 'lucide-react'

function ServiceDetail({ service, selectedServices, toggleService }) {
  const isSelected = selectedServices.includes(service.id)

  const getServiceNumber = () => {
    const services = [
      'creacion-santceloni', 'creacion-esteticasegala', 'creacion-esteticavela',
      'mantenimiento', 'ia-blog', 'google-ads', 'seo'
    ]
    const idx = services.indexOf(service.id)
    return (idx + 1).toString().padStart(2, '0')
  }

  return (
    <div className="page service-detail-page">
      <div className="page-header">
        <span className="page-number">{getServiceNumber()}</span>
        <div className="service-header-content">
          <h1 className="page-title">{service.title}</h1>
          <p className="service-description">{service.shortDescription}</p>
        </div>
      </div>

      <div className="service-detail-content">
        <div className="service-pricing-box">
          <div className="pricing-label">Inversión</div>
          <div className="pricing-value">{service.price}</div>
          {service.type === 'monthly' && <div className="pricing-type">Cuota mensual</div>}
          {service.type === 'initial' && <div className="pricing-type">Pago único</div>}
          {service.type === 'both' && <div className="pricing-type">Inicial + Mensual</div>}
        </div>

        {/* Nota especial para ia-blog */}
        {service.id === 'ia-blog' && (
          <div className="tech-proposal-note" style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.5rem' }}>🤖</div>
            <div className="note-content">
              <h3>Agente ya desarrollado — sin coste inicial</h3>
              <div className="note-details">
                <p>
                  El agente IA de generación de contenido ya está <strong>creado y operativo</strong> en 
                  velasegalaviladecans.com. Se duplicará para <strong>velasegalasantceloni.com</strong> con 
                  textos diferentes y contenido adaptado a Sant Celoni.
                </p>
                <p className="note-summary">
                  La optimización de tokens y gasto de IA permite cubrir ambas webs 
                  manteniendo la <strong>mensualidad de 399€</strong>.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Nota especial para SEO */}
        {service.id === 'seo' && (
          <div className="tech-proposal-note" style={{ marginBottom: '2rem' }}>
            <div style={{ fontSize: '1.5rem' }}>📈</div>
            <div className="note-content">
              <h3>Precio base + packs por web adicional</h3>
              <div className="note-details">
                <p>
                  <strong>Base (velasegalaviladecans.com):</strong> 450€/mes — incluye todo el trabajo de SEO 
                  que actualmente se está realizando.
                </p>
                <p>
                  <strong>Cada web extra:</strong> +150€/mes por web (velasegalasantceloni.com, 
                  esteticasegala.com, esteticavela.com).
                </p>
                <p className="note-summary">
                  Ejemplo paquete completo (4 webs): 450€ + 3 × 150€ = <strong>900€/mes</strong>
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="service-features-section">
          <h2 className="features-title">Características y Beneficios</h2>
          <div className="features-grid">
            {service.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-check">
                  <Check size={20} />
                </div>
                <span className="feature-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="service-action">
          <button
            className={`service-select-button ${isSelected ? 'selected' : ''}`}
            onClick={() => toggleService(service.id)}
          >
            {isSelected ? (
              <>
                <X size={20} />
                <span>Remover de la propuesta</span>
              </>
            ) : (
              <>
                <Plus size={20} />
                <span>Añadir a la propuesta</span>
              </>
            )}
          </button>

          {isSelected && (
            <div className="service-selected-badge">
              <Check size={16} />
              <span>Incluido en tu selección</span>
            </div>
          )}
        </div>

        <div className="service-implementation">
          <h2 className="features-title">Proceso de Implementación</h2>
          <div className="implementation-steps">
            <div className="impl-step">
              <div className="impl-step-number">1</div>
              <div className="impl-step-content">
                <h4>Análisis y Planificación</h4>
                <p>Reunión inicial, análisis de requisitos y planificación detallada del proyecto.</p>
              </div>
            </div>
            <div className="impl-step">
              <div className="impl-step-number">2</div>
              <div className="impl-step-content">
                <h4>Desarrollo e Integración</h4>
                <p>Implementación técnica y configuración según especificaciones acordadas.</p>
              </div>
            </div>
            <div className="impl-step">
              <div className="impl-step-number">3</div>
              <div className="impl-step-content">
                <h4>Pruebas y Ajustes</h4>
                <p>Testing exhaustivo y optimización basada en feedback del equipo.</p>
              </div>
            </div>
            <div className="impl-step">
              <div className="impl-step-number">4</div>
              <div className="impl-step-content">
                <h4>Formación y Puesta en Marcha</h4>
                <p>Capacitación del personal y lanzamiento oficial con soporte intensivo.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="service-benefits">
          <div className="benefits-cards">
            {service.id === 'creacion-santceloni' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Presencia en Sant Celoni</h4>
                  <p>Web nueva con chat IA y WhatsApp para captar pacientes locales.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Panel de Administración</h4>
                  <p>Control total del contenido sin necesidad de conocimientos técnicos.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Generación de Leads</h4>
                  <p>Formularios optimizados para convertir visitantes en pacientes.</p>
                </div>
              </>
            )}
            {service.id === 'creacion-esteticasegala' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Presencia para Estética Segala</h4>
                  <p>Web profesional con chat IA y reservas online para el centro de estética.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Galería de Resultados</h4>
                  <p>Showcase visual de tratamientos con fotos antes/después optimizadas.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Captación de Clientes</h4>
                  <p>Formularios y botón WhatsApp para convertir visitas en reservas.</p>
                </div>
              </>
            )}
            {service.id === 'creacion-esteticavela' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Presencia para Estética Vela</h4>
                  <p>Web profesional con chat IA y reservas online para el centro de estética.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Imagen de Marca</h4>
                  <p>Diseño moderno que refleja la calidad y profesionalidad del centro.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Captación de Clientes</h4>
                  <p>Formularios y botón WhatsApp para convertir visitas en reservas.</p>
                </div>
              </>
            )}
            {service.id === 'mantenimiento' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Tranquilidad Total</h4>
                  <p>Las 4 webs siempre operativas y seguras sin preocupaciones técnicas.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Disponibilidad Garantizada</h4>
                  <p>Monitorización 24/7 con alertas y respuesta en menos de 2 horas.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Ahorro de Tiempo</h4>
                  <p>El equipo puede enfocarse en los pacientes, no en problemas técnicos.</p>
                </div>
              </>
            )}
            {service.id === 'ia-blog' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Contenido Constante</h4>
                  <p>Blogs de Sant Celoni y Viladecans siempre actualizados sin esfuerzo.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Autoridad Online</h4>
                  <p>Posicionarse como expertos en salud dental en ambas ubicaciones.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>SEO Mejorado</h4>
                  <p>Hasta 24 artículos/mes optimizados para motores de búsqueda.</p>
                </div>
              </>
            )}
            {service.id === 'google-ads' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Más Visibilidad Inmediata</h4>
                  <p>Aparece en los primeros resultados de Google desde el primer día.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Nueva Campaña Incluida</h4>
                  <p>esteticasegala.com con campaña propia al mismo precio de gestión.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Tráfico Cualificado</h4>
                  <p>Anuncios segmentados para atraer pacientes y clientes activos.</p>
                </div>
              </>
            )}
            {service.id === 'seo' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Posicionamiento Orgánico</h4>
                  <p>Top 3 en Google para búsquedas locales de Viladecans (y otras webs).</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Tráfico Gratuito a Largo Plazo</h4>
                  <p>A diferencia de los Ads, el tráfico SEO no tiene coste por clic.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Escalable por Web</h4>
                  <p>Amplía el SEO a cada nueva web por solo 150€/mes adicionales.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetail
