import { TrendingUp, Clock, Users, Target } from 'lucide-react'
import './ServiceExtras.css'

function ServiceStats({ service }) {
  if (!service) return null

  const getServiceNumber = () => {
    const services = [
      'creacion-santceloni', 'creacion-esteticasegala', 'creacion-esteticavela',
      'mantenimiento', 'ia-blog', 'google-ads', 'seo'
    ]
    const idx = services.indexOf(service.id)
    return (idx + 1).toString().padStart(2, '0')
  }

  const renderStats = () => {
    switch(service.id) {
      case 'seo':
        return <SEOStats />
      case 'ia-blog':
        return <BlogAIStats />
      default:
        return null
    }
  }

  return (
    <div className="page stats-page">
      <div className="page-header">
        <span className="page-number">{getServiceNumber()}.2</span>
        <div>
          <h1 className="page-title">Estadísticas e Impacto</h1>
          <p className="service-description">{service.title}</p>
        </div>
      </div>

      {renderStats()}
    </div>
  )
}

// Legacy functions below (no longer used in current proposal)
function _UNUSED_MaintenanceStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Métricas de Rendimiento</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <Zap className="metric-icon" />
            <div className="metric-value">99.98%</div>
            <div className="metric-label">Uptime Garantizado</div>
          </div>
          <div className="metric-card">
            <Clock className="metric-icon" />
            <div className="metric-value">&lt;2h</div>
            <div className="metric-label">Tiempo de Respuesta</div>
          </div>
          <div className="metric-card">
            <Target className="metric-icon" />
            <div className="metric-value">0</div>
            <div className="metric-label">Incidentes Críticos</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Ahorro de Tiempo del Equipo</h2>
        <div className="chart-container">
          <div className="bar-chart">
            <div className="bar-chart-item">
              <div className="bar-label">Sin Mantenimiento Profesional</div>
              <div className="bar-wrapper">
                <div className="bar" style={{width: '100%'}}></div>
                <span className="bar-value">12h/mes</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Con Nuestro Servicio</div>
              <div className="bar-wrapper">
                <div className="bar success" style={{width: '8.33%'}}></div>
                <span className="bar-value">1h/mes</span>
              </div>
            </div>
          </div>
          <div className="chart-insight">
            <TrendingUp size={20} />
            <span>Ahorro de <strong>11 horas mensuales</strong> de trabajo técnico</span>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Impacto en Costes</h2>
        <div className="cost-comparison">
          <div className="cost-option">
            <h4>Gestión Interna</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span>Personal técnico</span>
                <span>€800/mes</span>
              </div>
              <div className="cost-item">
                <span>Herramientas</span>
                <span>€150/mes</span>
              </div>
              <div className="cost-item">
                <span>Incidencias</span>
                <span>€200/mes</span>
              </div>
              <div className="cost-total">
                <span>Total</span>
                <span>€1.150/mes</span>
              </div>
            </div>
          </div>
          <div className="cost-option highlighted">
            <div className="cost-badge">Recomendado</div>
            <h4>Nuestro Servicio</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span>Todo incluido</span>
                <span>€299/mes</span>
              </div>
              <div className="cost-total success">
                <span>Total</span>
                <span>€299/mes</span>
              </div>
            </div>
            <div className="savings-badge">
              Ahorro: €851/mes (74%)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function _UNUSED_WebsiteStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Impacto Esperado</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <Users className="metric-icon" />
            <div className="metric-value">+450</div>
            <div className="metric-label">Visitas/mes estimadas</div>
          </div>
          <div className="metric-card">
            <Target className="metric-icon" />
            <div className="metric-value">35-40</div>
            <div className="metric-label">Leads/mes proyectados</div>
          </div>
          <div className="metric-card">
            <TrendingUp className="metric-icon" />
            <div className="metric-value">4.2%</div>
            <div className="metric-label">Tasa de Conversión</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Proyección de Captación de Pacientes</h2>
        <div className="chart-container">
          <div className="line-chart">
            <div className="line-chart-header">
              <span className="chart-label">Primeros 12 Meses</span>
            </div>
            <div className="line-chart-grid">
              <div className="line-chart-line" style={{height: '25%', left: '8.33%'}}></div>
              <div className="line-chart-line" style={{height: '35%', left: '25%'}}></div>
              <div className="line-chart-line" style={{height: '48%', left: '41.67%'}}></div>
              <div className="line-chart-line" style={{height: '52%', left: '58.33%'}}></div>
              <div className="line-chart-line" style={{height: '68%', left: '75%'}}></div>
              <div className="line-chart-line" style={{height: '85%', left: '91.67%'}}></div>
            </div>
            <div className="line-chart-labels">
              <span>Mes 2</span>
              <span>Mes 4</span>
              <span>Mes 6</span>
              <span>Mes 8</span>
              <span>Mes 10</span>
              <span>Mes 12</span>
            </div>
            <div className="line-chart-values">
              <span>10</span>
              <span>14</span>
              <span>19</span>
              <span>21</span>
              <span>27</span>
              <span>34</span>
            </div>
          </div>
          <div className="chart-insight">
            <TrendingUp size={20} />
            <span>Proyección: <strong>34 nuevos pacientes/mes</strong> en el mes 12</span>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>ROI Proyectado</h2>
        <div className="roi-calculation">
          <div className="roi-item">
            <span className="roi-label">Inversión Inicial</span>
            <span className="roi-value">€4.999</span>
          </div>
          <div className="roi-item">
            <span className="roi-label">Valor Medio por Paciente</span>
            <span className="roi-value">€180</span>
          </div>
          <div className="roi-item">
            <span className="roi-label">Nuevos Pacientes Año 1</span>
            <span className="roi-value">250</span>
          </div>
          <div className="roi-item highlight">
            <span className="roi-label">Ingresos Generados Año 1</span>
            <span className="roi-value success">€45.000</span>
          </div>
          <div className="roi-item highlight">
            <span className="roi-label">ROI Año 1</span>
            <span className="roi-value success">801%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Estadísticas de SEO
function SEOStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Resultados SEO Proyectados (6 meses)</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <TrendingUp className="metric-icon" />
            <div className="metric-value">+340%</div>
            <div className="metric-label">Aumento en Tráfico Orgánico</div>
          </div>
          <div className="metric-card">
            <Target className="metric-icon" />
            <div className="metric-value">15</div>
            <div className="metric-label">Keywords en Top 3</div>
          </div>
          <div className="metric-card">
            <Users className="metric-icon" />
            <div className="metric-value">2.8K</div>
            <div className="metric-label">Visitas Orgánicas/mes</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Evolución del Posicionamiento</h2>
        <div className="chart-container">
          <div className="position-chart">
            <div className="position-chart-row">
              <div className="position-keyword">dentista viladecans</div>
              <div className="position-progress">
                <div className="position-bar">
                  <div className="position-before" style={{width: '85%'}}>Posición 17</div>
                  <div className="position-after" style={{width: '15%'}}>Posición 3</div>
                </div>
              </div>
            </div>
            <div className="position-chart-row">
              <div className="position-keyword">clínica dental viladecans</div>
              <div className="position-progress">
                <div className="position-bar">
                  <div className="position-before" style={{width: '60%'}}>Posición 12</div>
                  <div className="position-after" style={{width: '40%'}}>Posición 1</div>
                </div>
              </div>
            </div>
            <div className="position-chart-row">
              <div className="position-keyword">implantes dentales viladecans</div>
              <div className="position-progress">
                <div className="position-bar">
                  <div className="position-before" style={{width: '100%'}}>No posicionado</div>
                  <div className="position-after" style={{width: '30%'}}>Posición 6</div>
                </div>
              </div>
            </div>
          </div>
          <div className="chart-legend">
            <span className="legend-item"><span className="legend-color before"></span> Actual</span>
            <span className="legend-item"><span className="legend-color after"></span> Tras 6 meses</span>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Valor del Tráfico Orgánico</h2>
        <div className="traffic-value">
          <div className="value-card">
            <h4>Si pagases por este tráfico (Google Ads)</h4>
            <div className="value-breakdown">
              <div className="value-item">
                <span>2.800 visitas/mes</span>
              </div>
              <div className="value-item">
                <span>× €2.80 CPC promedio</span>
              </div>
              <div className="value-divider"></div>
              <div className="value-result">
                <span>Coste equivalente:</span>
                <span className="value-amount">€7.840/mes</span>
              </div>
            </div>
          </div>
          <div className="value-card highlighted">
            <h4>Tu inversión en SEO</h4>
            <div className="value-breakdown">
              <div className="value-result success">
                <span>Inversión mensual:</span>
                <span className="value-amount">€599/mes</span>
              </div>
            </div>
            <div className="savings-badge large">
              Ahorro equivalente: €7.241/mes
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Estadísticas de IA Blog
function BlogAIStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Productividad y Ahorro</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <Clock className="metric-icon" />
            <div className="metric-value">48h</div>
            <div className="metric-label">Ahorro de Tiempo/mes</div>
          </div>
          <div className="metric-card">
            <Target className="metric-icon" />
            <div className="metric-value">10</div>
            <div className="metric-label">Artículos Publicados/mes</div>
          </div>
          <div className="metric-card">
            <TrendingUp className="metric-icon" />
            <div className="metric-value">+180%</div>
            <div className="metric-label">Aumento en Contenido</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Ventajas Clave del Sistema IA</h2>
        <div className="benefits-showcase-grid">
          <div className="benefit-showcase-card">
            <h3>Posicionamiento SEO Superior</h3>
            <p>
              Contenido 100% optimizado para motores de búsqueda con análisis de palabras clave,
              meta descripciones automáticas y estructura SEO perfecta en cada artículo.
            </p>
            <div className="benefit-stat">+350% tráfico orgánico promedio</div>
          </div>

          <div className="benefit-showcase-card">
            <h3>Ahorro de Tiempo Masivo</h3>
            <p>
              De investigación, redacción y publicación manual que tomaba días,
              a publicación automática instantánea. Tu equipo puede enfocarse en el negocio.
            </p>
            <div className="benefit-stat">~20 horas/mes ahorradas</div>
          </div>

          <div className="benefit-showcase-card">
            <h3>Consistencia Garantizada</h3>
            <p>
              8-12 artículos de alta calidad publicados mensualmente de forma automática.
              Sin depender de disponibilidad humana, vacaciones o enferm edades.
            </p>
            <div className="benefit-stat">100% fiabilidad</div>
          </div>

          <div className="benefit-showcase-card">
            <h3>Actualización Continua</h3>
            <p>
              El sistema analiza constantemente tendencias del sector dental, noticias y
              actualizaciones para mantener tu blog siempre relevante y actualizado.
            </p>
            <div className="benefit-stat">24/7 monitorización</div>
          </div>

          <div className="benefit-showcase-card">
            <h3>Escalable Sin Costes Extra</h3>
            <p>
              A diferencia de contratar más redactores, el sistema puede generar más contenido
              sin incrementar significativamente los costes. Precio fijo mensual predecible.
            </p>
            <div className="benefit-stat">€399/mes todo incluido</div>
          </div>

          <div className="benefit-showcase-card">
            <h3>Contenido Multimedia Completo</h3>
            <p>
              Generación automática de imágenes optimizadas, infografías y elementos visuales
              atractivos que aumentan el engagement y tiempo en página.
            </p>
            <div className="benefit-stat">+80% engagement visual</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Impacto en Tráfico Web</h2>
        <div className="chart-container">
          <div className="line-chart">
            <div className="line-chart-header">
              <span className="chart-label">Crecimiento de Visitas (6 meses)</span>
            </div>
            <div className="line-chart-grid">
              <div className="line-chart-line" style={{height: '15%', left: '8.33%'}}></div>
              <div className="line-chart-line" style={{height: '30%', left: '25%'}}></div>
              <div className="line-chart-line" style={{height: '45%', left: '41.67%'}}></div>
              <div className="line-chart-line" style={{height: '62%', left: '58.33%'}}></div>
              <div className="line-chart-line" style={{height: '78%', left: '75%'}}></div>
              <div className="line-chart-line" style={{height: '92%', left: '91.67%'}}></div>
            </div>
            <div className="line-chart-labels">
              <span>Mes 1</span>
              <span>Mes 2</span>
              <span>Mes 3</span>
              <span>Mes 4</span>
              <span>Mes 5</span>
              <span>Mes 6</span>
            </div>
            <div className="line-chart-values">
              <span>180</span>
              <span>320</span>
              <span>510</span>
              <span>750</span>
              <span>1.0K</span>
              <span>1.4K</span>
            </div>
          </div>
          <div className="chart-insight">
            <TrendingUp size={20} />
            <span>Incremento: <strong>+678% en 6 meses</strong></span>
          </div>
        </div>
      </div>
    </div>
  )
}

function _UNUSED_ClientAIStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Eficiencia Operativa</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <Clock className="metric-icon" />
            <div className="metric-value">120h</div>
            <div className="metric-label">Ahorro/mes</div>
          </div>
          <div className="metric-card">
            <Users className="metric-icon" />
            <div className="metric-value">850</div>
            <div className="metric-label">Consultas Atendidas/mes</div>
          </div>
          <div className="metric-card">
            <Target className="metric-icon" />
            <div className="metric-value">-65%</div>
            <div className="metric-label">Reducción Cancelaciones</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Impacto en Cancelaciones</h2>
        <div className="chart-container">
          <div className="donut-chart-container">
            <div className="donut-chart-wrapper">
              <div className="donut-chart before">
                <div className="donut-hole">
                  <div className="donut-value">23%</div>
                  <div className="donut-label">Cancelaciones</div>
                </div>
              </div>
              <h4>Sin Recordatorios IA</h4>
              <div className="donut-legend">
                <div className="legend-item"><span className="legend-dot cancelled"></span> Canceladas (23%)</div>
                <div className="legend-item"><span className="legend-dot completed"></span> Completadas (77%)</div>
              </div>
            </div>
            <div className="donut-chart-wrapper">
              <div className="donut-chart after">
                <div className="donut-hole">
                  <div className="donut-value">8%</div>
                  <div className="donut-label">Cancelaciones</div>
                </div>
              </div>
              <h4>Con Recordatorios IA</h4>
              <div className="donut-legend">
                <div className="legend-item"><span className="legend-dot cancelled"></span> Canceladas (8%)</div>
                <div className="legend-item"><span className="legend-dot completed"></span> Completadas (92%)</div>
              </div>
            </div>
          </div>
          <div className="chart-insight">
            <TrendingUp size={20} />
            <span>Mejora: <strong>-65% en cancelaciones</strong> gracias a recordatorios automáticos</span>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Ahorro en Personal</h2>
        <div className="cost-comparison">
          <div className="cost-option">
            <h4>Recepcionista Dedicada</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span>Salario bruto</span>
                <span>€1.800/mes</span>
              </div>
              <div className="cost-item">
                <span>Seguridad Social</span>
                <span>€600/mes</span>
              </div>
              <div className="cost-item">
                <span>Formación y gestión</span>
                <span>€150/mes</span>
              </div>
              <div className="cost-total">
                <span>Total</span>
                <span>€2.550/mes</span>
              </div>
              <div className="comparison-details">
                <div>• Horario: 8h/día, L-V</div>
                <div>• Vacaciones y bajas</div>
                <div>• Capacidad limitada</div>
              </div>
            </div>
          </div>
          <div className="cost-option highlighted">
            <div className="cost-badge">Recomendado</div>
            <h4>Asistente IA 24/7</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span>Servicio completo</span>
                <span>€699/mes</span>
              </div>
              <div className="cost-total success">
                <span>Total</span>
                <span>€699/mes</span>
              </div>
              <div className="comparison-details">
                <div>• Disponibilidad 24/7/365</div>
                <div>• Sin vacaciones ni bajas</div>
                <div>• Capacidad ilimitada</div>
                <div>• 3 idiomas incluidos</div>
              </div>
            </div>
            <div className="savings-badge">
              Ahorro: €1.851/mes (73%)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function _UNUSED_SubvencionStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Impacto Económico</h2>
        <div className="metrics-grid">
          <div className="metric-card success-card">
            <Euro className="metric-icon" />
            <div className="metric-value">30.000€</div>
            <div className="metric-label">Subvención Total</div>
          </div>
          <div className="metric-card success-card">
            <TrendingUp className="metric-icon" />
            <div className="metric-value">100%</div>
            <div className="metric-label">IA Subvencionada</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Desglose Real de la Subvención (30.000€)</h2>
        <div className="chart-container">
          <div className="bar-chart horizontal">
            <div className="bar-chart-item">
              <div className="bar-label">Comisión Gestión (Accuro)</div>
              <div className="bar-wrapper">
                <div className="bar warning" style={{width: '50%'}}></div>
                <span className="bar-value">15.000€</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Desarrollo Agente IA</div>
              <div className="bar-wrapper">
                <div className="bar success" style={{width: '43.3%'}}></div>
                <span className="bar-value">13.000€</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Mantenimiento (2 meses)</div>
              <div className="bar-wrapper">
                <div className="bar success" style={{width: '4.66%'}}></div>
                <span className="bar-value">1.398€</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Margen</div>
              <div className="bar-wrapper">
                <div className="bar" style={{width: '2%'}}></div>
                <span className="bar-value">602€</span>
              </div>
            </div>
          </div>
          <div className="chart-insight">
            <Euro size={20} />
            <span>Para Vela Segalà: <strong>15.000€ cubren desarrollo + 2 meses de mantenimiento</strong></span>
          </div>
          <div className="chart-note">
            <p>
              ℹ️ A partir del 3er mes, Vela Segalà asumirá la mensualidad de 699€ del Agente IA. 
              El ahorro en desarrollo (13.000€) es significativo y el sistema ya estará 100% operativo.
            </p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Beneficios de Global Data Care</h2>
        <div className="benefits-metrics">
          <div className="benefit-metric-card">
            <div className="benefit-icon">⚡</div>
            <div className="benefit-content">
              <div className="benefit-value">-35%</div>
              <div className="benefit-label">Reducción tiempo primera consulta</div>
              <div className="benefit-detail">De 45 min a 29 min promedio con historial previo</div>
            </div>
          </div>
          
          <div className="benefit-metric-card">
            <div className="benefit-icon">🗂️</div>
            <div className="benefit-content">
              <div className="benefit-value">15-20%</div>
              <div className="benefit-label">Pacientes con historial disponible</div>
              <div className="benefit-detail">Especialmente turistas y expatriados europeos</div>
            </div>
          </div>
          
          <div className="benefit-metric-card">
            <div className="benefit-icon">✓</div>
            <div className="benefit-content">
              <div className="benefit-value">+25%</div>
              <div className="benefit-label">Mejora en diagnósticos</div>
              <div className="benefit-detail">Decisiones clínicas más informadas desde el primer día</div>
            </div>
          </div>
          
          <div className="benefit-metric-card">
            <div className="benefit-icon">💰</div>
            <div className="benefit-content">
              <div className="benefit-value">~2.400€</div>
              <div className="benefit-label">Ahorro en radiografías repetidas/año</div>
              <div className="benefit-detail">Menos pruebas duplicadas con historial previo</div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>ROI con Subvención vs Sin Subvención</h2>
        <div className="comparison-table">
          <div className="comparison-header">
            <div className="comparison-cell"></div>
            <div className="comparison-cell highlight">Con Subvención</div>
            <div className="comparison-cell">Sin Subvención</div>
          </div>
          
          <div className="comparison-row">
            <div className="comparison-cell label">Inversión Inicial</div>
            <div className="comparison-cell highlight success">0€</div>
            <div className="comparison-cell">13.000€</div>
          </div>
          
          <div className="comparison-row">
            <div className="comparison-cell label">Coste Primeros 2 Meses</div>
            <div className="comparison-cell highlight success">0€ (cubierto)</div>
            <div className="comparison-cell">1.398€</div>
          </div>
          
          <div className="comparison-row">
            <div className="comparison-cell label">Coste Meses 3-12 (10 meses)</div>
            <div className="comparison-cell highlight">6.990€</div>
            <div className="comparison-cell">6.990€</div>
          </div>
          
          <div className="comparison-row">
            <div className="comparison-cell label">Total Año 1</div>
            <div className="comparison-cell highlight success">6.990€</div>
            <div className="comparison-cell">21.388€</div>
          </div>
          
          <div className="comparison-row">
            <div className="comparison-cell label">Ahorro Primer Año</div>
            <div className="comparison-cell highlight success">14.398€</div>
            <div className="comparison-cell">0€</div>
          </div>
          
          <div className="comparison-row totals">
            <div className="comparison-cell label"><strong>Ahorro en Desarrollo + 2 Meses</strong></div>
            <div className="comparison-cell highlight success"><strong>14.398€ ✓</strong></div>
            <div className="comparison-cell"><strong>0€</strong></div>
          </div>
        </div>
        <div className="comparison-note">
          <p>
            💡 <strong>Ventaja clave:</strong> Con la subvención, evitas la inversión inicial de 13.000€ 
            y obtienes 2 meses subvencionados. Aunque luego pagarás 699€/mes, el ahorro inicial es muy significativo 
            y el sistema ya estará completamente implementado y operativo.
          </p>
        </div>
      </div>

      <div className="stats-section">
        <h2>Clínicas Europeas en Global Data Care</h2>
        <div className="europe-stats">
          <div className="country-stat">
            <div className="country-flag">🇪🇸</div>
            <div className="country-name">España</div>
            <div className="country-clinics">1.240</div>
          </div>
          <div className="country-stat">
            <div className="country-flag">🇩🇪</div>
            <div className="country-name">Alemania</div>
            <div className="country-clinics">3.580</div>
          </div>
          <div className="country-stat">
            <div className="country-flag">🇫🇷</div>
            <div className="country-name">Francia</div>
            <div className="country-clinics">2.120</div>
          </div>
          <div className="country-stat">
            <div className="country-flag">🇮🇹</div>
            <div className="country-name">Italia</div>
            <div className="country-clinics">1.890</div>
          </div>
          <div className="country-stat">
            <div className="country-flag">🇳🇱</div>
            <div className="country-name">Países Bajos</div>
            <div className="country-clinics">980</div>
          </div>
          <div className="country-stat">
            <div className="country-flag">🇵🇹</div>
            <div className="country-name">Portugal</div>
            <div className="country-clinics">640</div>
          </div>
        </div>
        <div className="chart-insight">
          <Globe size={20} />
          <span>Más de <strong>10.000 clínicas</strong> conectadas en la red europea</span>
        </div>
      </div>
    </div>
  )
}

function _UNUSED_ColaboracionStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Potencial de Ingresos BQDC</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <Users className="metric-icon" />
            <div className="metric-value">80+</div>
            <div className="metric-label">Clínicas en Red</div>
          </div>
          <div className="metric-card success-card">
            <Euro className="metric-icon" />
            <div className="metric-value">100K+</div>
            <div className="metric-label">Potencial Año 1</div>
          </div>
          <div className="metric-card">
            <TrendingUp className="metric-icon" />
            <div className="metric-value">Recurrente</div>
            <div className="metric-label">Modelo Ingresos</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Proyección Conservadora (30% Adopción)</h2>
        <div className="adoption-scenario">
          <div className="scenario-header">
            <h4>Escenario: 24 clínicas adoptan las soluciones (30% de 80)</h4>
          </div>
          
          <div className="scenario-breakdown">
            <div className="breakdown-section">
              <h4>💶 Comisiones por Subvenciones</h4>
              <div className="calc-row">
                <span>24 clínicas × 30.000€ × 10%</span>
                <strong className="calc-result">72.000€</strong>
              </div>
              <div className="calc-note">Pago único en el primer año</div>
            </div>
            
            <div className="breakdown-section">
              <h4>💶 Comisiones Recurrentes Agentes IA</h4>
              <div className="calc-row">
                <span>24 clínicas × 50€/mes × 12 meses</span>
                <strong className="calc-result">14.400€/año</strong>
              </div>
              <div className="calc-note">Ingresos recurrentes mientras mantengan el servicio</div>
            </div>
          </div>
          
          <div className="scenario-totals">
            <div className="total-row">
              <span>Total Año 1:</span>
              <strong className="total-value">86.400€</strong>
            </div>
            <div className="total-row">
              <span>Total Año 2:</span>
              <strong className="total-value">14.400€</strong>
            </div>
            <div className="total-row">
              <span>Total Año 3:</span>
              <strong className="total-value">14.400€</strong>
            </div>
            <div className="total-row highlight">
              <span>Total 3 Años:</span>
              <strong className="total-value success">151.200€</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Comparación de Escenarios</h2>
        <div className="scenarios-comparison">
          <div className="scenario-card-compact">
            <div className="scenario-title">Conservador (30%)</div>
            <div className="scenario-clinics">24 clínicas</div>
            <div className="scenario-income">
              <div className="income-row">
                <span>Año 1:</span>
                <strong>122.400€</strong>
              </div>
              <div className="income-row">
                <span>Recurrente:</span>
                <strong>14.400€/año</strong>
              </div>
            </div>
          </div>
          
          <div className="scenario-card-compact highlighted">
            <div className="scenario-badge">Realista</div>
            <div className="scenario-title">Moderado (50%)</div>
            <div className="scenario-clinics">40 clínicas</div>
            <div className="scenario-income">
              <div className="income-row">
                <span>Año 1:</span>
                <strong>204.000€</strong>
              </div>
              <div className="income-row">
                <span>Recurrente:</span>
                <strong>24.000€/año</strong>
              </div>
            </div>
          </div>
          
          <div className="scenario-card-compact">
            <div className="scenario-title">Ambicioso (70%)</div>
            <div className="scenario-clinics">56 clínicas</div>
            <div className="scenario-income">
              <div className="income-row">
                <span>Año 1:</span>
                <strong>285.600€</strong>
              </div>
              <div className="income-row">
                <span>Recurrente:</span>
                <strong>33.600€/año</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Beneficios para las Clínicas BQDC</h2>
        <div className="clinic-benefits">
          <div className="clinic-benefit-card">
            <div className="benefit-icon-large">💰</div>
            <h4>IA 100% Subvencionada</h4>
            <p>Con la subvención de 30.000€, las clínicas no pagan nada por implementar el agente IA</p>
            <div className="benefit-saving">Costo cubierto: 30.000€ por clínica</div>
          </div>
          
          <div className="clinic-benefit-card">
            <div className="benefit-icon-large">⏰</div>
            <h4>Reducción de Carga de Trabajo</h4>
            <p>70% menos llamadas y mensajes gestionados por el personal de recepción</p>
            <div className="benefit-saving">~120h/mes liberadas</div>
          </div>
          
          <div className="clinic-benefit-card">
            <div className="benefit-icon-large">📈</div>
            <h4>Más Pacientes Atendidos</h4>
            <p>El agente IA nunca pierde una llamada ni deja un mensaje sin responder</p>
            <div className="benefit-saving">+15-20% captación</div>
          </div>
          
          <div className="clinic-benefit-card">
            <div className="benefit-icon-large">🌍</div>
            <h4>Acceso a Red Europea</h4>
            <p>Consultar historiales de pacientes de 10.000+ clínicas europeas</p>
            <div className="benefit-saving">Mejor atención</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Ventajas Competitivas de BQDC</h2>
        <div className="competitive-advantages">
          <div className="advantage-row">
            <div className="advantage-icon">✓</div>
            <div className="advantage-content">
              <h4>Liderazgo Tecnológico</h4>
              <p>BQDC se posiciona como la asociación dental más innovadora de España</p>
            </div>
          </div>
          
          <div className="advantage-row">
            <div className="advantage-icon">✓</div>
            <div className="advantage-content">
              <h4>Valor Añadido Real</h4>
              <p>Ofrecer acceso a subvenciones y tecnología punta genera fidelidad de los socios</p>
            </div>
          </div>
          
          <div className="advantage-row">
            <div className="advantage-icon">✓</div>
            <div className="advantage-content">
              <h4>Atracción de Nuevos Socios</h4>
              <p>Clínicas independientes querrán unirse a BQDC para acceder a estos beneficios</p>
            </div>
          </div>
          
          <div className="advantage-row">
            <div className="advantage-icon">✓</div>
            <div className="advantage-content">
              <h4>Ingresos Sin Inversión</h4>
              <p>Xavier solo recomienda, NexGent gestiona todo el proceso técnico y administrativo</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Timeline de Implementación</h2>
        <div className="implementation-timeline">
          <div className="timeline-phase">
            <div className="phase-number">1</div>
            <div className="phase-content">
              <h4>Mes 1-2: Lanzamiento</h4>
              <ul>
                <li>Firma del acuerdo de colaboración</li>
                <li>Preparación de materiales de marketing</li>
                <li>Primera presentación en evento BQDC</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-phase">
            <div className="phase-number">2</div>
            <div className="phase-content">
              <h4>Mes 3-6: Primeras Adopciones</h4>
              <ul>
                <li>5-10 clínicas piloto comienzan solicitud de subvención</li>
                <li>Webinars para el resto de la red</li>
                <li>Casos de éxito documentados</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-phase">
            <div className="phase-number">3</div>
            <div className="phase-content">
              <h4>Mes 7-12: Escalado</h4>
              <ul>
                <li>20-30 clínicas con IA implementada</li>
                <li>Primeras comisiones recurrentes estables</li>
                <li>Expansión a Portugal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceStats

