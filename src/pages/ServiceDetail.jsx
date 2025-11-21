import { Check, Plus, X } from 'lucide-react'

function ServiceDetail({ service, selectedServices, toggleService }) {
  const isSelected = selectedServices.includes(service.id)

  const getServiceNumber = () => {
    const services = ['mantenimiento', 'creacion', 'seo', 'ia-blog', 'ia-cliente', 'crm']
    return (services.indexOf(service.id) + 1).toString().padStart(2, '0')
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

        <div className="service-features-section">
          <h2 className="features-title">Características y Beneficios</h2>
          
          {service.id === 'ia-cliente' ? (
            <div className="ia-features-redesign">
              {/* Hero Channels */}
              <div className="ia-channels-hero">
                <div className="ia-channel-card whatsapp">
                  <div className="channel-icon">💬</div>
                  <h3>WhatsApp Business 24/7</h3>
                  <p>Chatbot avanzado con IA que gestiona consultas, reservas y recordatorios automáticamente</p>
                </div>
                <div className="ia-channel-card phone">
                  <div className="channel-icon">📞</div>
                  <h3>Asistente Telefónico con Voz</h3>
                  <p>IA de voz natural que atiende llamadas, agenda citas y responde preguntas 24/7</p>
                </div>
              </div>

              {/* Core Features */}
              <div className="ia-core-section">
                <h3 className="ia-section-title">🔗 Integración Total con Gesden G5</h3>
                <div className="ia-features-grid">
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Sincronización bidireccional en tiempo real</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Gestión automática de citas en Gesden</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Consulta de disponibilidad en tiempo real</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Acceso al historial clínico del paciente</span>
                  </div>
                </div>
              </div>

              {/* Automation Features */}
              <div className="ia-core-section">
                <h3 className="ia-section-title">⚡ Automatización Inteligente</h3>
                <div className="ia-features-grid">
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Recordatorios personalizados (SMS, email, WhatsApp)</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Solicitud automática de reseñas de Google tras cada visita</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Sistema de generación masiva de reseñas positivas</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Respuestas contextuales basadas en historial</span>
                  </div>
                </div>
              </div>

              {/* Intelligence Features */}
              <div className="ia-core-section">
                <h3 className="ia-section-title">🧠 Inteligencia Avanzada</h3>
                <div className="ia-features-grid">
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Escalado inteligente a operadores humanos cuando necesario</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Soporte multiidioma: Español, Catalán, Inglés</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Análisis de satisfacción y sentiment analysis</span>
                  </div>
                  <div className="ia-feature-item">
                    <Check size={18} />
                    <span>Dashboard de métricas y KPIs en tiempo real</span>
                  </div>
                </div>
              </div>

              {/* Impact Banner */}
              <div className="ia-impact-banner">
                <div className="impact-stat">
                  <div className="impact-number">70%</div>
                  <div className="impact-label">Reducción carga de recepción</div>
                </div>
                <div className="impact-stat">
                  <div className="impact-number">24/7</div>
                  <div className="impact-label">Atención sin interrupciones</div>
                </div>
                <div className="impact-stat">
                  <div className="impact-number">3x</div>
                  <div className="impact-label">Más reseñas de Google</div>
                </div>
              </div>
            </div>
          ) : (
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
          )}
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

        {service.id === 'crm' && (
          <div className="service-highlight">
            <h3>Desarrollo 100% Personalizado</h3>
            <p>
              Este CRM será desarrollado completamente desde cero, adaptado específicamente 
              a los procesos y necesidades únicas de Vela Segala. No es una solución 
              genérica, sino una plataforma única construida exclusivamente para sus 3 clínicas.
            </p>
            <ul className="highlight-list">
              <li>Arquitectura escalable y moderna</li>
              <li>Propiedad 100% del código fuente</li>
              <li>Sin dependencias de terceros</li>
              <li>Evolución continua según sus necesidades</li>
            </ul>
          </div>
        )}

        <div className="service-benefits">
          <h2 className="features-title">Beneficios Clave para Vela Segala</h2>
          <div className="benefits-cards">
            {service.id === 'mantenimiento' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Tranquilidad Total</h4>
                  <p>Olvídese de preocupaciones técnicas. Nos encargamos de todo el mantenimiento y seguridad.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Disponibilidad Garantizada</h4>
                  <p>Sus 3 páginas web siempre online y funcionando a máxima velocidad.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Ahorro de Tiempo</h4>
                  <p>Su equipo puede enfocarse en los pacientes, no en problemas técnicos.</p>
                </div>
              </>
            )}
            {service.id === 'creacion' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Presencia en Viladecans</h4>
                  <p>Capte pacientes locales con una web optimizada para la zona.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Imagen Profesional</h4>
                  <p>Diseño moderno que refleja la calidad de sus servicios dentales.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Generación de Leads</h4>
                  <p>Formularios optimizados para convertir visitantes en pacientes.</p>
                </div>
              </>
            )}
            {service.id === 'seo' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Más Visibilidad</h4>
                  <p>Aparecer en los primeros resultados de Google para búsquedas locales.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Tráfico Cualificado</h4>
                  <p>Atraer pacientes que buscan activamente servicios dentales.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Ventaja Competitiva</h4>
                  <p>Superar a la competencia en posicionamiento online.</p>
                </div>
              </>
            )}
            {service.id === 'ia-blog' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Contenido Constante</h4>
                  <p>Blog siempre actualizado sin esfuerzo de su equipo.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Autoridad Online</h4>
                  <p>Posicionarse como expertos en salud dental.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>SEO Mejorado</h4>
                  <p>Contenido optimizado que mejora su posicionamiento.</p>
                </div>
              </>
            )}
            {service.id === 'ia-cliente' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Disponibilidad 24/7</h4>
                  <p>Atienda consultas y gestione citas a cualquier hora.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Menos Cancelaciones</h4>
                  <p>Recordatorios automáticos reducen las ausencias.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Personal Liberado</h4>
                  <p>Su equipo se enfoca en tareas de mayor valor.</p>
                </div>
              </>
            )}
            {service.id === 'crm' && (
              <>
                <div className="benefit-card-detail">
                  <h4>Gestión Centralizada</h4>
                  <p>Control total de las 2 clínicas desde una sola plataforma.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Decisiones Informadas</h4>
                  <p>Analytics y reportes para tomar mejores decisiones de negocio.</p>
                </div>
                <div className="benefit-card-detail">
                  <h4>Eficiencia Operativa</h4>
                  <p>Automatización de procesos que ahorra tiempo y reduce errores.</p>
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

