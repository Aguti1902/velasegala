import { TrendingUp, Clock, Euro, Users, Target, Zap } from 'lucide-react'

function ServiceStats({ service }) {
  if (!service) return null

  const getServiceNumber = () => {
    const services = ['mantenimiento', 'creacion', 'seo', 'ia-blog', 'ia-cliente', 'crm']
    return (services.indexOf(service.id) + 1).toString().padStart(2, '0')
  }

  const renderStats = () => {
    switch(service.id) {
      case 'mantenimiento':
        return <MaintenanceStats />
      case 'creacion':
        return <WebsiteStats />
      case 'seo':
        return <SEOStats />
      case 'ia-blog':
        return <BlogAIStats />
      case 'ia-cliente':
        return <ClientAIStats />
      case 'crm':
        return <CRMStats />
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

// Estadísticas de Mantenimiento
function MaintenanceStats() {
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

// Estadísticas de Creación Web
function WebsiteStats() {
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
              <div className="line-chart-line" style={{height: '25%', left: '0%'}}></div>
              <div className="line-chart-line" style={{height: '35%', left: '16.66%'}}></div>
              <div className="line-chart-line" style={{height: '48%', left: '33.33%'}}></div>
              <div className="line-chart-line" style={{height: '52%', left: '50%'}}></div>
              <div className="line-chart-line" style={{height: '68%', left: '66.66%'}}></div>
              <div className="line-chart-line" style={{height: '85%', left: '83.33%'}}></div>
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
              <div className="line-chart-line" style={{height: '20%', left: '0%'}}></div>
              <div className="line-chart-line" style={{height: '38%', left: '20%'}}></div>
              <div className="line-chart-line" style={{height: '52%', left: '40%'}}></div>
              <div className="line-chart-line" style={{height: '68%', left: '60%'}}></div>
              <div className="line-chart-line" style={{height: '82%', left: '80%'}}></div>
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
              <span>800</span>
              <span>1.5K</span>
              <span>2.1K</span>
              <span>2.7K</span>
              <span>3.3K</span>
            </div>
          </div>
          <div className="chart-insight">
            <TrendingUp size={20} />
            <span>Incremento: <strong>+312% en 6 meses</strong></span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Estadísticas de IA Cliente
function ClientAIStats() {
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

// Estadísticas de CRM
function CRMStats() {
  return (
    <div className="stats-content">
      <div className="stats-section">
        <h2>Impacto Operativo</h2>
        <div className="metrics-grid">
          <div className="metric-card">
            <Clock className="metric-icon" />
            <div className="metric-value">200h</div>
            <div className="metric-label">Ahorro/mes</div>
          </div>
          <div className="metric-card">
            <Target className="metric-icon" />
            <div className="metric-value">-85%</div>
            <div className="metric-label">Reducción Errores</div>
          </div>
          <div className="metric-card">
            <TrendingUp className="metric-icon" />
            <div className="metric-value">+42%</div>
            <div className="metric-label">Eficiencia General</div>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>Distribución del Tiempo Ahorrado</h2>
        <div className="chart-container">
          <div className="bar-chart horizontal">
            <div className="bar-chart-item">
              <div className="bar-label">Gestión de Citas</div>
              <div className="bar-wrapper">
                <div className="bar" style={{width: '40%'}}></div>
                <span className="bar-value">80h/mes</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Facturación</div>
              <div className="bar-wrapper">
                <div className="bar" style={{width: '30%'}}></div>
                <span className="bar-value">60h/mes</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Gestión de Historiales</div>
              <div className="bar-wrapper">
                <div className="bar" style={{width: '25%'}}></div>
                <span className="bar-value">50h/mes</span>
              </div>
            </div>
            <div className="bar-chart-item">
              <div className="bar-label">Coordinación Multi-Clínica</div>
              <div className="bar-wrapper">
                <div className="bar" style={{width: '5%'}}></div>
                <span className="bar-value">10h/mes</span>
              </div>
            </div>
          </div>
          <div className="chart-insight">
            <Clock size={20} />
            <span>Total: <strong>200 horas mensuales liberadas</strong> para atención al paciente</span>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <h2>ROI del CRM</h2>
        <div className="roi-timeline">
          <div className="roi-timeline-item">
            <div className="timeline-period">Año 1</div>
            <div className="timeline-content">
              <div className="timeline-investment">Inversión: €47.088</div>
              <div className="timeline-savings">Ahorro operativo: €28.800</div>
              <div className="timeline-revenue">Ingresos extra: €42.000</div>
              <div className="timeline-result positive">Balance: +€23.712</div>
            </div>
          </div>
          <div className="roi-timeline-item">
            <div className="timeline-period">Año 2</div>
            <div className="timeline-content">
              <div className="timeline-investment">Inversión: €7.188</div>
              <div className="timeline-savings">Ahorro operativo: €28.800</div>
              <div className="timeline-revenue">Ingresos extra: €50.400</div>
              <div className="timeline-result positive">Balance: +€72.012</div>
            </div>
          </div>
          <div className="roi-timeline-item">
            <div className="timeline-period">Año 3</div>
            <div className="timeline-content">
              <div className="timeline-investment">Inversión: €7.188</div>
              <div className="timeline-savings">Ahorro operativo: €28.800</div>
              <div className="timeline-revenue">Ingresos extra: €58.800</div>
              <div className="timeline-result positive">Balance: +€80.412</div>
            </div>
          </div>
        </div>
        <div className="roi-summary">
          <h4>ROI Total a 3 Años</h4>
          <div className="roi-final">
            <div className="roi-final-item">
              <span>Inversión Total:</span>
              <span>€61.464</span>
            </div>
            <div className="roi-final-item">
              <span>Beneficio Total:</span>
              <span className="success">€176.136</span>
            </div>
            <div className="roi-final-result">
              <span>ROI:</span>
              <span className="success">286%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceStats

