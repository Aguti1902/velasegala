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

        {/* Sección especial para CRM: Análisis GESDEN G5 vs CRM Propio */}
        {service.id === 'crm' && (
          <>
            <div className="service-section crm-analysis-section">
              <h2 className="section-heading">Situación Actual: GESDEN G5</h2>
              <p className="intro-text">
                Actualmente, Vela Segalà utiliza <strong>GESDEN G5</strong>, el software de gestión dental 
                líder en España con más de 14.000 clínicas. Es una plataforma robusta y completa que incluye 
                gestión de pacientes, historial clínico, odontograma, presupuestos, facturación, recalls y 
                módulos avanzados como DENTIA (IA para radiografías), firma digital y cuadro de mandos.
              </p>
              <div className="gesden-info-box">
                <h3>📊 Características de GESDEN G5</h3>
                <ul className="gesden-features-list">
                  <li>✓ Software líder con 14.000+ clínicas en España</li>
                  <li>✓ Historial clínico digital con odontograma completo</li>
                  <li>✓ Gestión de presupuestos y facturación automatizada</li>
                  <li>✓ Sistema de recalls y fidelización de pacientes</li>
                  <li>✓ Integración con sistemas de imágenes médicas</li>
                  <li>✓ Módulos: IA dental (DENTIA), firma digital (Clinipad), cuadro de mandos</li>
                  <li>✓ Soporte técnico de 8h a 21h con 50 técnicos especializados</li>
                  <li>✓ Versiones escalables: Easy, Profesional, Grandes Clínicas, Multicentro</li>
                  <li>⚠️ API pública: <strong>Disponibilidad por confirmar</strong></li>
                </ul>
              </div>
            </div>

            <div className="service-section crm-comparison-section">
              <h2 className="section-heading">Análisis: ¿CRM Propio o Integración con GESDEN G5?</h2>
              <p className="intro-text">
                Decisión estratégica con dos caminos posibles. Cada opción tiene sus ventajas según 
                la disponibilidad de API de GESDEN G5:
              </p>

              <div className="comparison-options-grid">
                {/* OPCIÓN A: GESDEN G5 + Integración API */}
                <div className="option-card option-a-card">
                  <div className="option-header">
                    <div className="option-icon">🔗</div>
                    <h3>Opción A: GESDEN G5 + Integración IA</h3>
                    <span className="option-badge badge-a">Recomendado si hay API</span>
                  </div>

                  <div className="option-body">
                    <div className="option-summary">
                      <p>Mantener GESDEN G5 actual e integrar Agentes IA mediante API</p>
                    </div>

                    <div className="pros-cons-compact">
                      <div className="pros-column">
                        <h4>✅ Principales Ventajas</h4>
                        <ul>
                          <li>Menor inversión inicial</li>
                          <li>Sistema ya probado (14.000 clínicas)</li>
                          <li>Soporte especializado dental</li>
                          <li>Equipo ya familiarizado</li>
                          <li>Implementación rápida</li>
                        </ul>
                      </div>

                      <div className="cons-column">
                        <h4>❌ Principales Desventajas</h4>
                        <ul>
                          <li>Dependencia de terceros</li>
                          <li>Costes recurrentes perpetuos</li>
                          <li>API puede ser limitada</li>
                          <li>Sin propiedad del software</li>
                          <li>Sin ventaja competitiva</li>
                        </ul>
                      </div>
                    </div>

                    <div className="option-cost">
                      <div className="cost-label">Coste estimado 5 años</div>
                      <div className="cost-value">48.000€ - 72.000€</div>
                      <div className="cost-detail">+ Licencias GESDEN G5 perpetuas</div>
                    </div>
                  </div>
                </div>

                {/* OPCIÓN B: CRM Propio */}
                <div className="option-card option-b-card">
                  <div className="option-header">
                    <div className="option-icon">🏗️</div>
                    <h3>Opción B: CRM Vela Segalà Propio</h3>
                    <span className="option-badge badge-b">Inversión Estratégica</span>
                  </div>

                  <div className="option-body">
                    <div className="option-summary">
                      <p>Desarrollo 100% personalizado desde cero con propiedad total</p>
                    </div>

                    <div className="pros-cons-compact">
                      <div className="pros-column">
                        <h4>✅ Principales Ventajas</h4>
                        <ul>
                          <li>100% personalizado</li>
                          <li>Propiedad intelectual</li>
                          <li>Independencia total</li>
                          <li>Integración nativa con IA</li>
                          <li>Ventaja competitiva única</li>
                        </ul>
                      </div>

                      <div className="cons-column">
                        <h4>❌ Principales Desventajas</h4>
                        <ul>
                          <li>Inversión inicial alta (53.000€)</li>
                          <li>Tiempo de desarrollo (6-9 meses)</li>
                          <li>Curva de aprendizaje</li>
                          <li>Migración de datos</li>
                          <li>Mantenimiento propio</li>
                        </ul>
                      </div>
                    </div>

                    <div className="option-cost">
                      <div className="cost-label">Coste estimado 5 años</div>
                      <div className="cost-value">88.940€</div>
                      <div className="cost-detail">Luego solo hosting ~200€/mes</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Análisis ROI y Recomendación */}
              <div className="roi-analysis">
                <h3>📈 Análisis de Retorno de Inversión (ROI)</h3>
                <div className="roi-content">
                  <div className="roi-card">
                    <h4>Año 1-3: GESDEN G5 más económico</h4>
                    <p>Durante los primeros años, mantener GESDEN G5 es más barato debido a la alta inversión inicial del CRM propio.</p>
                  </div>
                  <div className="roi-card">
                    <h4>Año 4+: CRM propio más rentable</h4>
                    <p>A partir del año 4, el CRM propio comienza a ser más económico. A los 10 años, el ahorro puede superar los 100.000€.</p>
                  </div>
                  <div className="roi-card highlight-roi">
                    <h4>Valor estratégico: Incalculable</h4>
                    <p>Independencia tecnológica, ventaja competitiva y control total de los datos no tienen precio.</p>
                  </div>
                </div>
              </div>

              {/* Recomendación Final */}
              <div className="final-recommendation">
                <h3>🎯 Recomendación NexGent</h3>
                <div className="recommendation-box">
                  <p className="recommendation-title">
                    <strong>SI GESDEN G5 TIENE API PÚBLICA:</strong> Opción A (Integración)
                  </p>
                  <p>
                    Si GESDEN G5 dispone de una API robusta, es más prudente integrar los Agentes IA con el sistema actual. 
                    Esto minimiza riesgos, reduce costes iniciales y permite validar el valor de la IA antes de una inversión mayor.
                  </p>
                  
                  <p className="recommendation-title mt-lg">
                    <strong>SI GESDEN G5 NO TIENE API O ES LIMITADA:</strong> Opción B (CRM Propio)
                  </p>
                  <p>
                    Sin API adecuada, los Agentes IA no podrán integrarse correctamente. En este escenario, desarrollar un CRM 
                    propio es la <strong>única opción viable</strong> para aprovechar todo el potencial de la IA. Además, 
                    a largo plazo (5-10 años), será más rentable y proporcionará una ventaja competitiva significativa.
                  </p>

                  <div className="recommendation-action">
                    <h4>✅ Próximos Pasos Recomendados</h4>
                    <ol className="action-steps">
                      <li>Contactar con Infomed (proveedor de GESDEN G5) para consultar disponibilidad de API</li>
                      <li>Si hay API: Solicitar documentación técnica completa</li>
                      <li>Evaluar capacidades de la API: ¿Permite crear/modificar citas, pacientes, historiales?</li>
                      <li>Si la API es adecuada: Proceder con Opción A (integración)</li>
                      <li>Si no hay API o es insuficiente: Proceder con Opción B (CRM propio)</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default ServiceDetail

