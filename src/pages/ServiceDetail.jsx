import { Check, Plus, X, Users, Globe, TrendingUp, Award, Bot, CheckCircle } from 'lucide-react'
import CommissionCalculator from '../components/CommissionCalculator'

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
          ) : service.id === 'subvencion' ? (
            <div className="subvencion-detail-content">
              {/* Distribución de la Subvención */}
              <div className="subvencion-distribution" style={{marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center'}}>💰 Distribución de la Subvención (30.000€)</h3>
                <div className="subvencion-breakdown">
                  <div className="breakdown-card primary">
                    <div className="breakdown-amount">15.000€</div>
                    <div className="breakdown-label">Comisión de Gestión</div>
                    <div className="breakdown-description">
                      Accuro (empresa gestora) se encarga de toda la tramitación, documentación 
                      y justificación de la subvención ante Red.es
                    </div>
                  </div>
                  
                  <div className="breakdown-card success">
                    <div className="breakdown-amount">15.000€</div>
                    <div className="breakdown-label">Para Vela Segalà</div>
                    <div className="breakdown-description">
                      <strong>Desarrollo completo del Agente IA:</strong> 13.000€<br/>
                      <strong>Mantenimiento (2 meses):</strong> 1.398€ (699€/mes)<br/>
                      <em>Total cubierto sin coste para la clínica</em>
                    </div>
                  </div>
                </div>
                <p className="breakdown-note">
                  ℹ️ <strong>Importante:</strong> A partir del 3er mes, Vela Segalà asumirá 
                  el coste mensual de 699€ del Agente IA. Sin embargo, el desarrollo (13.000€) 
                  ya estará completamente pagado por la subvención.
                </p>
              </div>

              {/* Beneficios Clave */}
              <div className="subvencion-benefits" style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', padding: '3rem 2rem', borderRadius: '1rem', marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '0.5rem', textAlign: 'center'}}>✨ Beneficios Clave de Global Data Care</h3>
                <p style={{textAlign: 'center', marginBottom: '2.5rem', fontSize: '1rem', color: '#666'}}>
                  Más allá de la financiación, la verdadera ventaja es el acceso a la red europea 
                  de datos clínicos que transformará la atención a tus pacientes.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem'}}>
                  <div style={{
                    background: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '2rem 1.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }} className="benefit-card-compact">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>🗂️</div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937', lineHeight: '1.3'}}>
                      Acceso a Historiales Clínicos Europeos
                    </h4>
                    <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#6b7280', marginBottom: '1rem'}}>
                      Visualiza el historial completo de cualquier paciente que haya visitado clínicas 
                      de la red Global Data Care en toda Europa. Accede a radiografías, tratamientos 
                      previos, diagnósticos, alergias y medicación.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '2rem 1.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }} className="benefit-card-compact">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>⚡</div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937', lineHeight: '1.3'}}>
                      Atención 40% Más Rápida
                    </h4>
                    <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#6b7280', marginBottom: '1rem'}}>
                      Reduce el tiempo de primera consulta de 45 minutos a 29 minutos al tener 
                      información previa del paciente. No necesitas repetir radiografías ni pruebas 
                      ya realizadas en otras clínicas europeas.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '2rem 1.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }} className="benefit-card-compact">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>🎯</div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937', lineHeight: '1.3'}}>
                      Decisiones Clínicas Más Informadas
                    </h4>
                    <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#6b7280', marginBottom: '1rem'}}>
                      Mejora del 25% en diagnósticos al tener el contexto completo del paciente desde 
                      el primer día. Conoce tratamientos previos, complicaciones pasadas y evolución 
                      de su salud dental.
                    </p>
                  </div>

                  <div style={{
                    background: 'white',
                    border: '2px solid #e5e7eb',
                    borderRadius: '12px',
                    padding: '2rem 1.5rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                  }} className="benefit-card-compact">
                    <div style={{fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center'}}>🔬</div>
                    <h4 style={{fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.75rem', color: '#1f2937', lineHeight: '1.3'}}>
                      Red de 10.000+ Clínicas en Europa
                    </h4>
                    <p style={{fontSize: '0.9rem', lineHeight: '1.6', color: '#6b7280', marginBottom: '1rem'}}>
                      Acceso a la mayor red de datos clínicos dentales de Europa. Compartir datos 
                      anónimos contribuye a la investigación y mejora de protocolos dentales europeos.
                    </p>
                  </div>
                </div>
              </div>

              {/* Resto de características del servicio */}
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
          ) : service.id === 'colaboracion' ? (
            <div className="colaboracion-detail-content">
              {/* Intro con stats BQDC */}
              <div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', padding: '3rem 2rem', borderRadius: '1rem', marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center'}}>🤝 Propuesta de Colaboración Comercial</h3>
                <p style={{textAlign: 'center', marginBottom: '2.5rem', fontSize: '1rem', color: '#666'}}>
                  Como presidente de BQDC, Xavier Vela tiene acceso a más de 80 clínicas dentales 
                  en España y Portugal. Proponemos un modelo de colaboración win-win para promover 
                  nuestras soluciones de IA y subvenciones.
                </p>
                <div className="bqdc-stats">
                  <div className="stat-card">
                    <Users size={32} />
                    <div className="stat-number">80+</div>
                    <div className="stat-label">Clínicas en la Red</div>
                  </div>
                  <div className="stat-card">
                    <Globe size={32} />
                    <div className="stat-number">2</div>
                    <div className="stat-label">Países (ES + PT)</div>
                  </div>
                  <div className="stat-card">
                    <TrendingUp size={32} />
                    <div className="stat-number">Alta</div>
                    <div className="stat-label">Confianza y Prestigio</div>
                  </div>
                </div>
              </div>

              {/* Modelo de Comisiones */}
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center'}}>💰 Modelo de Comisiones</h3>
                <div className="commission-models">
                  <div className="model-card">
                    <div className="model-header">
                      <Award size={28} />
                      <h3>Comisiones por Subvenciones</h3>
                    </div>
                    <div className="model-content">
                      <div className="model-highlight">
                        <span className="percentage">10%</span>
                        <span className="description">de cada subvención conseguida</span>
                      </div>
                      <div className="model-example">
                        <h4>Ejemplo:</h4>
                        <div className="example-row">
                          <span>Subvención de 30.000€</span>
                          <span className="result">= 3.000€ para Xavier</span>
                        </div>
                        <div className="example-row">
                          <span>10 clínicas × 30.000€</span>
                          <span className="result">= 30.000€ en comisiones</span>
                        </div>
                      </div>
                      <div className="model-features">
                        <div className="feature-item">✓ Pago único al conseguir cada subvención</div>
                        <div className="feature-item">✓ Sin límite de clínicas</div>
                        <div className="feature-item">✓ NexGent gestiona todo el proceso</div>
                      </div>
                    </div>
                  </div>

                  <div className="model-card">
                    <div className="model-header">
                      <Bot size={28} />
                      <h3>Comisiones por Agentes IA</h3>
                    </div>
                    <div className="model-content">
                      <div className="model-highlight">
                        <span className="percentage">50€/mes</span>
                        <span className="description">por cada clínica con Agente IA</span>
                      </div>
                      <div className="model-example">
                        <h4>Ejemplo:</h4>
                        <div className="example-row">
                          <span>10 clínicas activas</span>
                          <span className="result">= 500€/mes recurrentes</span>
                        </div>
                        <div className="example-row">
                          <span>30 clínicas activas</span>
                          <span className="result">= 1.500€/mes recurrentes</span>
                        </div>
                      </div>
                      <div className="model-features">
                        <div className="feature-item">✓ Ingresos recurrentes mensuales</div>
                        <div className="feature-item">✓ Mientras la clínica mantenga el servicio</div>
                        <div className="feature-item">✓ Escalable sin límite</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calculadora */}
              <div style={{marginBottom: '3rem'}}>
                <CommissionCalculator />
              </div>

              {/* Estrategia de Promoción */}
              <div style={{marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center'}}>🎯 Estrategia de Promoción</h3>
                <div className="strategy-grid">
                  <div className="strategy-card">
                    <h4>1. Presentación en Eventos BQDC</h4>
                    <p>Presentar las soluciones en reuniones y eventos de la asociación</p>
                  </div>
                  <div className="strategy-card">
                    <h4>2. Newsletter BQDC</h4>
                    <p>Campañas de email explicando los beneficios de la IA y la subvención</p>
                  </div>
                  <div className="strategy-card">
                    <h4>3. Webinars Exclusivos</h4>
                    <p>Sesiones online demostrando el Agente IA y la calculadora de ROI</p>
                  </div>
                  <div className="strategy-card">
                    <h4>4. Soporte de NexGent</h4>
                    <p>Nosotros proporcionamos todo el material de marketing y presentaciones</p>
                  </div>
                </div>
              </div>

              {/* Ventajas */}
              <div style={{background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)', padding: '3rem 2rem', borderRadius: '1rem', marginBottom: '3rem'}}>
                <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center'}}>✨ Ventajas para Xavier y BQDC</h3>
                <div className="advantages-list">
                  <div className="advantage-item">
                    <CheckCircle size={24} color="#10b981" />
                    <div>
                      <h4>Ingresos Adicionales Significativos</h4>
                      <p>Potencial de 100.000€+ en comisiones con adopción moderada de la red</p>
                    </div>
                  </div>
                  <div className="advantage-item">
                    <CheckCircle size={24} color="#10b981" />
                    <div>
                      <h4>Valor Añadido para los Socios</h4>
                      <p>Ofrecer tecnología punta y acceso a subvenciones exclusivas</p>
                    </div>
                  </div>
                  <div className="advantage-item">
                    <CheckCircle size={24} color="#10b981" />
                    <div>
                      <h4>Sin Inversión ni Riesgo</h4>
                      <p>Xavier solo recomienda, NexGent hace todo el trabajo técnico y gestión</p>
                    </div>
                  </div>
                  <div className="advantage-item">
                    <CheckCircle size={24} color="#10b981" />
                    <div>
                      <h4>Posicionamiento Tecnológico</h4>
                      <p>BQDC se posiciona como asociación innovadora y tecnológicamente avanzada</p>
                    </div>
                  </div>
                  <div className="advantage-item">
                    <CheckCircle size={24} color="#10b981" />
                    <div>
                      <h4>Beneficio Real para las Clínicas</h4>
                      <p>Las clínicas reciben IA gratis con la subvención y mejoran su eficiencia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Próximos Pasos */}
              <div>
                <h3 style={{fontSize: '1.5rem', marginBottom: '2rem', textAlign: 'center'}}>📞 Próximos Pasos</h3>
                <div className="next-steps">
                  <div className="step-card">
                    <div className="step-number-large">1</div>
                    <div className="step-content">
                      <h4>Revisión de la Propuesta</h4>
                      <p>Xavier revisa los términos y condiciones de la colaboración</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <div className="step-number-large">2</div>
                    <div className="step-content">
                      <h4>Acuerdo Marco</h4>
                      <p>Firmamos un acuerdo de colaboración comercial</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <div className="step-number-large">3</div>
                    <div className="step-content">
                      <h4>Material de Marketing</h4>
                      <p>NexGent prepara presentaciones, demos y calculadoras</p>
                    </div>
                  </div>
                  <div className="step-card">
                    <div className="step-number-large">4</div>
                    <div className="step-content">
                      <h4>Lanzamiento</h4>
                      <p>Comenzamos la promoción en la red BQDC</p>
                    </div>
                  </div>
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

        {/* Ocultar botón para servicios de tecnología avanzada */}
        {!['ia-cliente', 'subvencion', 'colaboracion'].includes(service.id) && (
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
        )}

        {service.id !== 'subvencion' && service.id !== 'colaboracion' && (
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
        )}

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

