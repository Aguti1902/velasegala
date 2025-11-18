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
              <h2 className="section-heading">Análisis: ¿CRM Propio o Continuar con GESDEN G5?</h2>
              <p className="intro-text">
                Esta es una <strong>decisión estratégica crítica</strong> que afectará a las operaciones 
                de Vela Segalà durante años. A continuación analizamos ambas opciones:
              </p>

              <div className="comparison-grid-crm">
                {/* OPCIÓN A: GESDEN G5 + Integración API */}
                <div className="comparison-card">
                  <div className="comparison-header option-a">
                    <h3>Opción A: GESDEN G5 + Integración IA</h3>
                    <div className="comparison-badge">Recomendado si GESDEN G5 tiene API</div>
                  </div>
                  
                  <div className="comparison-content">
                    <h4 className="pros-title">✅ Ventajas</h4>
                    <ul className="comparison-list">
                      <li><strong>Menor inversión inicial:</strong> Sin desarrollo desde cero</li>
                      <li><strong>Sistema probado:</strong> 14.000 clínicas lo usan con éxito</li>
                      <li><strong>Soporte especializado:</strong> Equipo de 50 técnicos dentales</li>
                      <li><strong>Actualizaciones continuas:</strong> Mejoras y nuevas funcionalidades</li>
                      <li><strong>Integraciones nativas:</strong> Compatible con equipos médicos</li>
                      <li><strong>Cumplimiento normativo:</strong> RGPD y normativa sanitaria</li>
                      <li><strong>Formación disponible:</strong> Equipo ya familiarizado</li>
                      <li><strong>Implementación rápida:</strong> Solo desarrollo de API de conexión</li>
                      <li><strong>Módulos especializados:</strong> IA dental (DENTIA), odontograma avanzado</li>
                    </ul>

                    <h4 className="cons-title">❌ Desventajas</h4>
                    <ul className="comparison-list">
                      <li><strong>Dependencia de terceros:</strong> Licencias mensuales perpetuas</li>
                      <li><strong>Costes recurrentes:</strong> Cuotas mensuales que aumentan con el tiempo</li>
                      <li><strong>Personalización limitada:</strong> Cambios sujetos al proveedor</li>
                      <li><strong>API puede ser limitada:</strong> Restricciones en la integración con IA</li>
                      <li><strong>Sin propiedad del software:</strong> No es un activo de la empresa</li>
                      <li><strong>Riesgo de cambios de precio:</strong> Aumentos sin control</li>
                      <li><strong>Datos en servidores externos:</strong> Menor control sobre la información</li>
                      <li><strong>Competencia usa lo mismo:</strong> Sin ventaja competitiva tecnológica</li>
                    </ul>

                    <div className="comparison-cost">
                      <h4>💰 Coste Estimado (5 años)</h4>
                      <p className="cost-breakdown">
                        <span className="cost-item">Licencias GESDEN G5: ~40.000€ - 60.000€</span>
                        <span className="cost-item">Desarrollo API integración: 8.000€ - 12.000€</span>
                        <span className="cost-item highlight-cost">Total estimado: 48.000€ - 72.000€</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* OPCIÓN B: CRM Propio */}
                <div className="comparison-card">
                  <div className="comparison-header option-b">
                    <h3>Opción B: CRM Vela Segalà Propio</h3>
                    <div className="comparison-badge premium">Inversión Estratégica a Largo Plazo</div>
                  </div>
                  
                  <div className="comparison-content">
                    <h4 className="pros-title">✅ Ventajas</h4>
                    <ul className="comparison-list">
                      <li><strong>100% personalizado:</strong> Diseñado específicamente para Vela Segalà</li>
                      <li><strong>Propiedad intelectual:</strong> El software es un activo de la empresa</li>
                      <li><strong>Independencia total:</strong> Sin dependencia de proveedores</li>
                      <li><strong>Integración nativa con IAs:</strong> Agentes IA conectados al núcleo</li>
                      <li><strong>Escalabilidad sin límites:</strong> Crece con el negocio</li>
                      <li><strong>Sin costes recurrentes:</strong> Solo mantenimiento y hosting</li>
                      <li><strong>Ventaja competitiva:</strong> Tecnología única en el mercado</li>
                      <li><strong>Control total de datos:</strong> Información en servidores propios</li>
                      <li><strong>Funcionalidades exclusivas:</strong> Lo que imaginen, lo tendrán</li>
                      <li><strong>Valor de reventa:</strong> Aumenta el valor de la empresa</li>
                      <li><strong>Marca blanca:</strong> Posibilidad de licenciar a otras clínicas</li>
                    </ul>

                    <h4 className="cons-title">❌ Desventajas</h4>
                    <ul className="comparison-list">
                      <li><strong>Inversión inicial alta:</strong> 53.000€ de desarrollo</li>
                      <li><strong>Tiempo de desarrollo:</strong> 6-9 meses hasta producción</li>
                      <li><strong>Riesgo de proyecto:</strong> Requiere gestión técnica adecuada</li>
                      <li><strong>Curva de aprendizaje:</strong> Equipo debe adaptarse a nuevo sistema</li>
                      <li><strong>Migración de datos:</strong> Traspasar información de GESDEN G5</li>
                      <li><strong>Mantenimiento propio:</strong> Responsabilidad del equipo técnico</li>
                      <li><strong>Sin soporte 24/7 inicial:</strong> Hasta establecer equipo propio</li>
                    </ul>

                    <div className="comparison-cost">
                      <h4>💰 Coste Estimado (5 años)</h4>
                      <p className="cost-breakdown">
                        <span className="cost-item">Desarrollo inicial: 53.000€</span>
                        <span className="cost-item">Mantenimiento (5 años): 35.940€</span>
                        <span className="cost-item highlight-cost">Total: 88.940€</span>
                        <span className="cost-note">Después de 5 años, solo costes de hosting (~200€/mes)</span>
                      </p>
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

