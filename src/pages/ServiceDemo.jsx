import { Play, MessageCircle, Globe, Bot, Database, TrendingUp, Award, Users, Euro, CheckCircle, FileText } from 'lucide-react'
import CommissionCalculator from '../components/CommissionCalculator'
import './ServiceExtras.css'

function ServiceDemo({ service }) {
  if (!service) return null

  const getServiceNumber = () => {
    const services = ['mantenimiento', 'creacion', 'seo', 'google-ads', 'ia-blog', 'ia-cliente', 'subvencion', 'colaboracion']
    return (services.indexOf(service.id) + 1).toString().padStart(2, '0')
  }

  const renderDemo = () => {
    switch(service.id) {
      case 'mantenimiento':
        return <MaintenanceDemo />
      case 'creacion':
        return <WebsiteDemo />
      case 'seo':
        return <SEODemo />
      case 'ia-blog':
        return <BlogAIDemo />
      case 'ia-cliente':
        return <ClientAIDemo />
      case 'subvencion':
        return <SubvencionDemo />
      case 'colaboracion':
        return <ColaboracionDemo />
      default:
        return null
    }
  }

  return (
    <div className="page demo-page">
      <div className="page-header">
        <span className="page-number">{getServiceNumber()}.1</span>
        <div>
          <h1 className="page-title">Demostración Funcional</h1>
          <p className="service-description">{service.title}</p>
        </div>
      </div>

      {renderDemo()}
    </div>
  )
}

// Demostración de Mantenimiento Web
function MaintenanceDemo() {
  return (
    <div className="demo-content">
      <div className="demo-section">
        <h2>Dashboard de Monitorización 24/7</h2>
        <div className="dashboard-mockup">
          <div className="dashboard-header">
            <div className="dashboard-logo">Vela Segala Monitoring</div>
            <div className="dashboard-time">Actualizado hace 2 minutos</div>
          </div>
          <div className="dashboard-sites">
            <div className="site-card status-online">
              <div className="site-header">
                <Globe size={24} />
                <div className="site-info">
                  <h4>velasegalabcn.com</h4>
                  <span className="site-status">Online</span>
                </div>
              </div>
              <div className="site-metrics">
                <div className="metric">
                  <span className="metric-label">Tiempo de respuesta</span>
                  <span className="metric-value green">127ms</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Uptime (30 días)</span>
                  <span className="metric-value green">99.98%</span>
                </div>
              </div>
            </div>

            <div className="site-card status-online">
              <div className="site-header">
                <Globe size={24} />
                <div className="site-info">
                  <h4>velasegalasantcugat.com</h4>
                  <span className="site-status">Online</span>
                </div>
              </div>
              <div className="site-metrics">
                <div className="metric">
                  <span className="metric-label">Tiempo de respuesta</span>
                  <span className="metric-value green">142ms</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Uptime (30 días)</span>
                  <span className="metric-value green">100%</span>
                </div>
              </div>
            </div>

            <div className="site-card status-online">
              <div className="site-header">
                <Globe size={24} />
                <div className="site-info">
                  <h4>velasegalaviladecans.com</h4>
                  <span className="site-status">Online</span>
                </div>
              </div>
              <div className="site-metrics">
                <div className="metric">
                  <span className="metric-label">Tiempo de respuesta</span>
                  <span className="metric-value green">135ms</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Uptime (30 días)</span>
                  <span className="metric-value green">99.99%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Historial de Actualizaciones</h2>
        <div className="updates-timeline">
          <div className="update-item">
            <div className="update-date">15 Nov 2025</div>
            <div className="update-content">
              <h4>Actualización de Seguridad</h4>
              <p>WordPress actualizado a versión 6.4.2 en las 3 webs</p>
            </div>
          </div>
          <div className="update-item">
            <div className="update-date">08 Nov 2025</div>
            <div className="update-content">
              <h4>Optimización de Rendimiento</h4>
              <p>Caché optimizada - Mejora del 23% en velocidad de carga</p>
            </div>
          </div>
          <div className="update-item">
            <div className="update-date">01 Nov 2025</div>
            <div className="update-content">
              <h4>Backup Automático Completado</h4>
              <p>Backup completo de las 3 webs almacenado en ubicaciones redundantes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demostración de Creación Web
function WebsiteDemo() {
  return (
    <div className="demo-content">
      <div className="demo-section full-width">
        <h2>Diseño Propuesto - velasegalaviladecans.com</h2>
        <p className="demo-intro">Diseño profesional basado en el exitoso modelo de Sant Celoni, adaptado específicamente para Viladecans</p>
        
        <div className="website-mockup-pro">
          <div className="browser-bar">
            <div className="browser-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="browser-url">
              <span className="url-icon">🔒</span>
              <span>https://velasegalaviladecans.com</span>
            </div>
            <div className="browser-actions">
              <span>⟳</span>
              <span>⋮</span>
            </div>
          </div>
          
          <div className="website-scroll-container">
            {/* Header Section */}
            <div className="web-header">
              <div className="web-header-top">
                <div className="web-contact-info">
                  <span>📧 vela@velasegala.com</span>
                  <span>📞 936 XXX XXX</span>
                </div>
              </div>
              <div className="web-nav">
                <div className="web-logo">
                  <img src="/logos/Logo.png" alt="Vela Segalà Viladecans" />
                </div>
                <nav className="web-menu">
                  <a href="#" className="active">Inicio</a>
                  <a href="#">Tratamientos</a>
                  <a href="#">Clínica</a>
                  <a href="#">Contacto</a>
                </nav>
              </div>
            </div>

            {/* Hero Section */}
            <div className="web-hero">
              <div className="web-hero-content">
                <h1 className="web-hero-title">Clínica dental en Viladecans</h1>
                <h2 className="web-hero-subtitle">Tu salud bucodental en las mejores manos</h2>
                <p className="web-hero-text">
                  En Clínica Dental Vela Segalà Viladecans ofrecemos un enfoque odontológico 
                  altamente especializado, combinando <strong>tratamientos personalizados de máxima 
                  calidad</strong>, <strong>tecnología de vanguardia</strong> y un equipo médico con sólida trayectoria.
                </p>
                <button className="web-cta-button">Pedir Cita</button>
              </div>
              <div className="web-hero-image">
                <img src="/images/portrait-of-senior-male-dentist-with-dental-instru-2025-01-16-22-34-30-utc.jpg" alt="Clínica Dental Vela Segalà" />
              </div>
            </div>

            {/* Tratamientos Section */}
            <div className="web-section">
              <h2 className="web-section-title">Tratamientos odontológicos especializados</h2>
              <p className="web-section-subtitle">
                En Vela Segalà Viladecans ofrecemos un <strong>enfoque odontológico completo</strong>, 
                basado en la evidencia científica y la personalización del tratamiento.
              </p>
              
              <div className="web-treatments">
                <div className="web-treatment-card">
                  <div className="treatment-image">
                    <img src="/images/a-dentist-checks-a-patient-s-teeth-in-an-african-d-2025-03-09-11-49-38-utc.jpg" alt="Implantes dentales" />
                  </div>
                  <h3>Implantes dentales</h3>
                  <p>Rehabilitación de piezas dentales ausentes mediante técnicas de implantes avanzadas.</p>
                  <a href="#" className="treatment-link">Más información →</a>
                </div>
                
                <div className="web-treatment-card">
                  <div className="treatment-image">
                    <img src="/images/dentist-giving-high-five-to-girl-in-modern-dental-2025-02-16-09-29-22-utc.jpg" alt="Ortodoncia" />
                  </div>
                  <h3>Ortodoncia</h3>
                  <p>Corrección de maloclusiones mediante soluciones convencionales y ortodoncia invisible.</p>
                  <a href="#" className="treatment-link">Más información →</a>
                </div>
                
                <div className="web-treatment-card">
                  <div className="treatment-image">
                    <img src="/images/male-black-dentist-doctor-demonstrating-female-pat-2025-03-18-19-08-17-utc.jpg" alt="Estética dental" />
                  </div>
                  <h3>Estética dental</h3>
                  <p>Mejoramos la armonía de la sonrisa mediante carillas, blanqueamiento y DSD.</p>
                  <a href="#" className="treatment-link">Más información →</a>
                </div>
              </div>
            </div>

            {/* Equipo Section */}
            <div className="web-section dark">
              <h2 className="web-section-title">Dentistas en Viladecans con trayectoria internacional</h2>
              <p className="web-section-subtitle">
                Nuestro equipo está liderado por el <strong>Dr. Xavier Vela</strong> y la <strong>Dra. Maribel Segalà</strong>, 
                dentistas de referencia a nivel internacional.
              </p>
              <div className="web-stats">
                <div className="web-stat">
                  <div className="stat-icon">👥</div>
                  <div className="stat-number">14+</div>
                  <div className="stat-label">Profesionales</div>
                </div>
                <div className="web-stat">
                  <div className="stat-icon">⭐</div>
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Años experiencia</div>
                </div>
                <div className="web-stat">
                  <div className="stat-icon">🏆</div>
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Casos de éxito</div>
                </div>
              </div>
            </div>

            {/* Tecnología Section */}
            <div className="web-section">
              <h2 className="web-section-title">Instalaciones modernas con la última tecnología</h2>
              <div className="web-tech-list">
                <div className="tech-item">✓ Escáner intraoral y radiología digital</div>
                <div className="tech-item">✓ Diseño digital de sonrisa (DSD)</div>
                <div className="tech-item">✓ Tecnología de sedación consciente</div>
                <div className="tech-item">✓ Materiales certificados y mínimamente invasivos</div>
              </div>
            </div>

            {/* Reseñas Section */}
            <div className="web-section">
              <h2 className="web-section-title">La mejor garantía es la satisfacción de nuestros pacientes</h2>
              <div className="web-reviews">
                <div className="review-badge">
                  <div className="review-stars">⭐⭐⭐⭐⭐</div>
                  <div className="review-rating">EXCELENTE</div>
                  <div className="review-count">373 reseñas</div>
                  <div className="review-source">Google Reviews</div>
                </div>
                <div className="review-samples">
                  <div className="review-card">
                    <div className="review-author">Sergio G.</div>
                    <div className="review-stars-small">⭐⭐⭐⭐⭐</div>
                    <p>"Muy profesionales. Buen trato."</p>
                  </div>
                  <div className="review-card">
                    <div className="review-author">Thelius</div>
                    <div className="review-stars-small">⭐⭐⭐⭐⭐</div>
                    <p>"Instalaciones nuevas, personal profesional y muy agradable."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Final Section */}
            <div className="web-section cta-section">
              <h2 className="web-section-title">Tu nueva clínica dental en Viladecans te espera</h2>
              <p className="web-section-subtitle">Solicita tu primera visita sin compromiso.</p>
              <button className="web-cta-button large">Pedir Cita</button>
            </div>

            {/* Footer */}
            <div className="web-footer">
              <div className="footer-content">
                <div className="footer-col">
                  <h4>Contacto</h4>
                  <p>Teléfono: 936 XXX XXX</p>
                  <p>Email: vela@velasegala.com</p>
                </div>
                <div className="footer-col">
                  <h4>Dirección</h4>
                  <p>Calle Example, 123</p>
                  <p>08840 Viladecans, Barcelona</p>
                </div>
                <div className="footer-col">
                  <h4>Horario</h4>
                  <p>Lunes a Viernes: 9:00 - 20:00</p>
                  <p>Sábados: 9:00 - 14:00</p>
                </div>
              </div>
              <div className="footer-bottom">
                <p>©2025 Clínica Vela Segalà · Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Características Técnicas del Desarrollo</h2>
        <div className="features-showcase">
          <div className="showcase-item">
            <h4>📱 100% Responsive</h4>
            <p>Adaptación perfecta a móvil, tablet y desktop con diseño fluido</p>
          </div>
          <div className="showcase-item">
            <h4>⚡ Optimización Avanzada</h4>
            <p>Google PageSpeed 95+, Core Web Vitals optimizados</p>
          </div>
          <div className="showcase-item">
            <h4>🎨 Diseño Profesional</h4>
            <p>Basado en el exitoso modelo de Sant Celoni</p>
          </div>
          <div className="showcase-item">
            <h4>📍 SEO Local Avanzado</h4>
            <p>Optimizado específicamente para "dentista Viladecans"</p>
          </div>
          <div className="showcase-item">
            <h4>📝 CMS Intuitivo</h4>
            <p>Panel de administración fácil para actualizar contenidos</p>
          </div>
          <div className="showcase-item">
            <h4>🔒 Seguridad Premium</h4>
            <p>SSL, protección contra ataques, backups automáticos</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demostración de SEO
function SEODemo() {
  return (
    <div className="demo-content">
      <div className="demo-section">
        <h2>Posiciones en Google (Simulación)</h2>
        <div className="google-mockup">
          <div className="google-header">
            <div className="google-logo">Google</div>
            <div className="google-search">dentista viladecans</div>
          </div>
          <div className="google-results">
            <div className="google-result featured">
              <div className="result-position">#1</div>
              <div className="result-content">
                <h4>Vela Segala Viladecans - Clínica Dental de Confianza</h4>
                <div className="result-url">velasegalaviladecans.com</div>
                <p>Tu dentista en Viladecans. Odontología general, estética dental e implantes. ⭐⭐⭐⭐⭐ +200 opiniones</p>
              </div>
            </div>
            <div className="google-result">
              <div className="result-position">#2</div>
              <div className="result-content">
                <h4>Otras Clínicas Dentales Viladecans</h4>
                <div className="result-url">competencia.com</div>
                <p>Servicios dentales en Viladecans...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Palabras Clave Objetivo</h2>
        <div className="keywords-list">
          <div className="keyword-item">
            <span className="keyword">dentista viladecans</span>
            <span className="keyword-volume">1.2K búsquedas/mes</span>
            <span className="keyword-difficulty">Media</span>
          </div>
          <div className="keyword-item">
            <span className="keyword">clínica dental viladecans</span>
            <span className="keyword-volume">720 búsquedas/mes</span>
            <span className="keyword-difficulty">Baja</span>
          </div>
          <div className="keyword-item">
            <span className="keyword">implantes dentales viladecans</span>
            <span className="keyword-volume">480 búsquedas/mes</span>
            <span className="keyword-difficulty">Media</span>
          </div>
          <div className="keyword-item">
            <span className="keyword">ortodoncia viladecans</span>
            <span className="keyword-volume">390 búsquedas/mes</span>
            <span className="keyword-difficulty">Alta</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demostración de IA Blog
function BlogAIDemo() {
  return (
    <div className="demo-content">
      <div className="demo-section">
        <h2>Ejemplo de Artículo Generado por IA</h2>
        <div className="blog-mockup">
          <div className="blog-post">
            <div className="blog-meta">
              <span className="blog-date">Publicado: 15 Nov 2025</span>
              <span className="blog-tag">Salud Dental</span>
            </div>
            <h3>5 Consejos para Mantener una Sonrisa Saludable este Invierno</h3>
            <p className="blog-excerpt">
              El invierno puede ser especialmente duro para nuestra salud dental. El aire frío, 
              los cambios de temperatura y las bebidas calientes pueden afectar la sensibilidad 
              dental. En este artículo, nuestros expertos de Vela Segala comparten...
            </p>
            <div className="blog-ai-badge">
              <Bot size={16} />
              <span>Generado y optimizado automáticamente</span>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Calendario de Publicaciones</h2>
        <div className="publishing-calendar">
          <div className="calendar-item published">
            <div className="calendar-day">Lunes</div>
            <div className="calendar-content">
              <h4>Cuidado de Encías</h4>
              <span className="status-badge published">Publicado</span>
            </div>
          </div>
          <div className="calendar-item published">
            <div className="calendar-day">Miércoles</div>
            <div className="calendar-content">
              <h4>Blanqueamiento Dental</h4>
              <span className="status-badge published">Publicado</span>
            </div>
          </div>
          <div className="calendar-item scheduled">
            <div className="calendar-day">Viernes</div>
            <div className="calendar-content">
              <h4>Implantes Dentales</h4>
              <span className="status-badge scheduled">Programado</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demostración de IA Cliente
function ClientAIDemo() {
  return (
    <div className="demo-content">
      {/* Integración con Gesden G5 */}
      <div className="demo-section highlight-section">
        <h2>🔗 Integración Completa con Gesden G5</h2>
        <p className="section-intro">
          El agente IA se conecta directamente con su sistema Gesden G5 mediante API, 
          sincronizando citas, pacientes e historial clínico en tiempo real.
        </p>
        
        <div className="gesden-integration">
          <div className="integration-diagram">
            <div className="integration-node">
              <MessageCircle size={32} />
              <h4>WhatsApp</h4>
              <p>Paciente solicita cita</p>
            </div>
            <div className="integration-arrow">→</div>
            <div className="integration-node primary">
              <Bot size={32} />
              <h4>Agente IA</h4>
              <p>Procesa la solicitud</p>
            </div>
            <div className="integration-arrow">↔</div>
            <div className="integration-node">
              <Database size={32} />
              <h4>Gesden G5 API</h4>
              <p>Consulta disponibilidad</p>
            </div>
            <div className="integration-arrow">→</div>
            <div className="integration-node primary">
              <TrendingUp size={32} />
              <h4>Cita Confirmada</h4>
              <p>Registro sincronizado</p>
            </div>
          </div>

          <div className="integration-benefits">
            <div className="benefit-card">
              <h4>✅ Sin Doble Gestión</h4>
              <p>Todo se registra automáticamente en Gesden G5</p>
            </div>
            <div className="benefit-card">
              <h4>⚡ Tiempo Real</h4>
              <p>Disponibilidad actualizada al instante</p>
            </div>
            <div className="benefit-card">
              <h4>📊 Historial Completo</h4>
              <p>Acceso al historial clínico del paciente</p>
            </div>
            <div className="benefit-card">
              <h4>🔒 Seguridad Garantizada</h4>
              <p>Conexión cifrada y cumplimiento RGPD</p>
            </div>
            <div className="benefit-card">
              <h4>🤖 Inteligencia Artificial</h4>
              <p>Respuestas contextuales basadas en historial del paciente</p>
            </div>
            <div className="benefit-card">
              <h4>🔄 Sincronización Bidireccional</h4>
              <p>Actualización automática en ambos sentidos entre IA y Gesden</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conversación WhatsApp */}
      <div className="demo-section">
        <h2>💬 Conversación Ejemplo - WhatsApp</h2>
        <div className="chat-mockup">
          <div className="chat-header">
            <MessageCircle size={20} />
            <span>Vela Segalà IA Assistant</span>
            <span className="chat-status">Online</span>
          </div>
          <div className="chat-messages">
            <div className="message user">
              <div className="message-content">Hola, me gustaría pedir cita para una limpieza</div>
              <div className="message-time">10:23</div>
            </div>
            <div className="message bot">
              <div className="message-content">
                ¡Hola! Encantado de ayudarte. 😊 Veo en tu historial que tu última limpieza fue hace 6 meses. 
                ¿Qué clínica te queda mejor: Sant Celoni o Viladecans?
              </div>
              <div className="message-time">10:23</div>
            </div>
            <div className="message user">
              <div className="message-content">Sant Celoni</div>
              <div className="message-time">10:24</div>
            </div>
            <div className="message bot">
              <div className="message-content">
                Perfecto. Consultando disponibilidad en Gesden...<br/>
                Tengo estos horarios disponibles:<br/><br/>
                📅 Jueves 21 Nov - 10:00h, 16:30h<br/>
                📅 Viernes 22 Nov - 09:30h, 11:00h, 17:00h<br/><br/>
                ¿Alguno te viene bien?
              </div>
              <div className="message-time">10:24</div>
            </div>
            <div className="message user">
              <div className="message-content">El jueves a las 10:00 perfecto</div>
              <div className="message-time">10:25</div>
            </div>
            <div className="message bot">
              <div className="message-content">
                ¡Cita confirmada y registrada en Gesden! ✅<br/><br/>
                📍 Vela Segalà Sant Celoni<br/>
                📅 Jueves 21 Noviembre 2025<br/>
                🕐 10:00h<br/>
                👨‍⚕️ Dra. Martínez<br/>
                🦷 Limpieza Dental<br/><br/>
                Te enviaré un recordatorio 24h antes por WhatsApp. ¿Necesitas algo más?
              </div>
              <div className="message-time">10:25</div>
            </div>
          </div>
        </div>
      </div>

      {/* Asistente Telefónico */}
      <div className="demo-section">
        <h2>📞 Asistente Telefónico con IA de Voz</h2>
        <p className="section-intro">
          Además de WhatsApp, el agente también funciona como operador telefónico con voz natural, 
          atendiendo llamadas 24/7 y gestionando citas por teléfono.
        </p>
        
        <div className="phone-demo">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="call-header">
                <div className="call-icon">📞</div>
                <div className="call-info">
                  <h4>Llamada Entrante</h4>
                  <p>+34 612 345 678</p>
                </div>
                <div className="call-status">En curso</div>
              </div>
              
              <div className="call-transcript">
                <div className="transcript-line caller">
                  <strong>Paciente:</strong> "Hola, quería pedir cita para una revisión"
                </div>
                <div className="transcript-line ai">
                  <strong>IA:</strong> "Buenos días, encantada de atenderle. Déjeme consultar la disponibilidad en nuestro sistema Gesden. ¿Tiene preferencia por alguna clínica?"
                </div>
                <div className="transcript-line caller">
                  <strong>Paciente:</strong> "Viladecans, por favor"
                </div>
                <div className="transcript-line ai">
                  <strong>IA:</strong> "Perfecto, tengo disponibilidad en Viladecans el próximo martes a las 11:00 o el miércoles a las 16:30. ¿Cuál le viene mejor?"
                </div>
              </div>

              <div className="call-features">
                <div className="feature-badge">Voz Natural</div>
                <div className="feature-badge">Reconocimiento Catalán/Español</div>
                <div className="feature-badge">Gesden G5 Integrado</div>
              </div>
            </div>
          </div>

          <div className="phone-benefits">
            <h4>Ventajas del Asistente Telefónico:</h4>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🕐</div>
                <div className="benefit-content">
                  <strong>Disponibilidad 24/7</strong>
                  <p>Atiende llamadas fuera del horario de oficina</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-content">
                  <strong>Sin Esperas</strong>
                  <p>Los pacientes no esperan en la línea</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💬</div>
                <div className="benefit-content">
                  <strong>Voz Natural</strong>
                  <p>Conversación fluida y profesional</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">👥</div>
                <div className="benefit-content">
                  <strong>Reducción de Carga</strong>
                  <p>Libera al personal de recepción</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📝</div>
                <div className="benefit-content">
                  <strong>Registro Automático</strong>
                  <p>Todo queda documentado en Gesden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generación de Reseñas */}
      <div className="demo-section highlight-section">
        <h2>⭐ Generación Automática de Reseñas de Google</h2>
        <p className="section-intro">
          El agente IA solicita automáticamente reseñas de Google a cada paciente tras su visita, 
          multiplicando exponencialmente su reputación online.
        </p>
        
        <div className="reviews-system">
          <div className="reviews-flow">
            <div className="flow-step">
              <div className="step-number">1</div>
              <h4>Visita Completada</h4>
              <p>Registro en Gesden G5</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h4>IA Detecta</h4>
              <p>Sincronización automática</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h4>Solicitud Enviada</h4>
              <p>WhatsApp personalizado</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h4>Reseña Publicada</h4>
              <p>SEO mejorado</p>
            </div>
          </div>

          <div className="reviews-impact">
            <div className="impact-card">
              <div className="impact-icon">📈</div>
              <div className="impact-stat">+300%</div>
              <div className="impact-label">Más reseñas mensuales</div>
            </div>
            <div className="impact-card">
              <div className="impact-icon">⭐</div>
              <div className="impact-stat">4.8+</div>
              <div className="impact-label">Valoración media</div>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🎯</div>
              <div className="impact-stat">85%</div>
              <div className="impact-label">Tasa de respuesta</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demostración de Subvención Global Data Care
function SubvencionDemo() {
  return (
    <div className="demo-content">
      <div className="demo-section highlight-section">
        <h2>🇪🇺 Subvención Global Data Care - Red.es</h2>
        <p className="section-intro">
          Financiación europea de hasta <strong>30.000€</strong> para digitalización sanitaria y 
          participación en la red europea de intercambio de datos clínicos.
        </p>
        
        <div className="subvencion-hero">
          <div className="hero-card">
            <Award size={48} />
            <div className="hero-amount">30.000€</div>
            <div className="hero-label">Subvención Máxima</div>
            <div className="hero-note">Toda la IA gratis</div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>📋 ¿En Qué Consiste la Subvención?</h2>
        <div className="subvencion-explanation">
          <div className="explanation-card">
            <div className="card-header">
              <FileText size={24} />
              <h3>Programa Red.es</h3>
            </div>
            <p>
              Subvención del Ministerio de Asuntos Económicos y Transformación Digital 
              para promover la digitalización del sector sanitario español y su integración 
              en la red europea de datos de salud.
            </p>
          </div>

          <div className="explanation-card">
            <div className="card-header">
              <Globe size={24} />
              <h3>Global Data Care EU</h3>
            </div>
            <p>
              Plataforma europea que permite el intercambio seguro de datos clínicos entre 
              clínicas dentales de toda Europa. Al registrarte, puedes acceder a historiales 
              de pacientes que hayan visitado otras clínicas participantes.
            </p>
          </div>

          <div className="explanation-card">
            <div className="card-header">
              <CheckCircle size={24} />
              <h3>Requisitos</h3>
            </div>
            <ul>
              <li>✓ Ser clínica dental registrada en España</li>
              <li>✓ Comprometerse a compartir datos anónimos con la red europea</li>
              <li>✓ Implementar soluciones de digitalización (como nuestra IA)</li>
              <li>✓ Cumplir con RGPD y normativa de protección de datos</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>💰 Distribución de la Subvención (30.000€)</h2>
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

      <div className="demo-section highlight-section">
        <h2>✨ Beneficios Clave de Global Data Care</h2>
        <p className="section-intro">
          Más allá de la financiación, la verdadera ventaja es el acceso a la red europea 
          de datos clínicos que transformará la atención a tus pacientes.
        </p>
        <div className="benefits-grid-large">
          <div className="benefit-card-large highlight">
            <div className="benefit-icon-large">🗂️</div>
            <h4>Acceso a Historiales Clínicos Europeos</h4>
            <p>
              Visualiza el historial completo de cualquier paciente que haya visitado clínicas 
              de la red Global Data Care en toda Europa. Accede a radiografías, tratamientos 
              previos, diagnósticos, alergias y medicación.
            </p>
            <div className="benefit-highlight">
              <strong>Impacto:</strong> 15-20% de tus pacientes nuevos tendrán historial disponible 
              (especialmente turistas y expatriados)
            </div>
          </div>

          <div className="benefit-card-large highlight">
            <div className="benefit-icon-large">⚡</div>
            <h4>Atención 40% Más Rápida</h4>
            <p>
              Reduce el tiempo de primera consulta de 45 minutos a 29 minutos al tener 
              información previa del paciente. No necesitas repetir radiografías ni pruebas 
              ya realizadas en otras clínicas europeas.
            </p>
            <div className="benefit-highlight">
              <strong>Ahorro:</strong> ~2.400€/año en radiografías y pruebas no duplicadas
            </div>
          </div>

          <div className="benefit-card-large highlight">
            <div className="benefit-icon-large">🎯</div>
            <h4>Decisiones Clínicas Más Informadas</h4>
            <p>
              Mejora del 25% en diagnósticos al tener el contexto completo del paciente desde 
              el primer día. Conoce tratamientos previos, complicaciones pasadas y evolución 
              de su salud dental.
            </p>
            <div className="benefit-highlight">
              <strong>Resultado:</strong> Mayor satisfacción del paciente y mejor calidad asistencial
            </div>
          </div>

          <div className="benefit-card-large highlight">
            <div className="benefit-icon-large">🔬</div>
            <h4>Red de 10.000+ Clínicas en Europa</h4>
            <p>
              Acceso a la mayor red de datos clínicos dentales de Europa. Compartir datos 
              anónimos contribuye a la investigación y mejora de protocolos dentales europeos.
            </p>
            <div className="benefit-highlight">
              <strong>Ventaja:</strong> Posicionamiento como clínica innovadora y conectada
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>🌍 Cómo Funciona Global Data Care</h2>
        <div className="gdc-workflow">
          <div className="workflow-step">
            <div className="step-icon">1</div>
            <h4>Paciente Nuevo</h4>
            <p>Un paciente llega a tu clínica por primera vez</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-icon">2</div>
            <h4>Búsqueda en GDC</h4>
            <p>Buscas su DNI/NIE en la plataforma Global Data Care</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-icon">3</div>
            <h4>Historial Disponible</h4>
            <p>Si ha visitado otras clínicas, ves todo su historial</p>
          </div>
          <div className="workflow-arrow">→</div>
          <div className="workflow-step">
            <div className="step-icon">4</div>
            <h4>Mejor Atención</h4>
            <p>Tratas al paciente con información completa desde el día 1</p>
          </div>
        </div>

        <div className="gdc-example">
          <h4>Ejemplo Práctico:</h4>
          <div className="example-card">
            <p>
              <strong>Escenario:</strong> Un turista alemán llega a tu clínica con dolor dental.<br/>
              <strong>Con Global Data Care:</strong> Ves que hace 3 meses se hizo un tratamiento 
              de conductos en Berlín. Tienes acceso a las radiografías y al informe del dentista alemán. 
              Puedes tratar el problema informado desde el minuto 1.<br/>
              <strong>Sin Global Data Care:</strong> Tendrías que hacer nuevas radiografías, 
              investigar desde cero y posiblemente repetir pruebas que ya se hicieron.
            </p>
          </div>
        </div>
      </div>

      <div className="demo-section highlight-section">
        <h2>🚀 Gestión Completa por NexGent</h2>
        <p className="section-intro">
          No te preocupes por la burocracia. Nosotros nos encargamos de TODO.
        </p>
        
        <div className="gestion-grid">
          <div className="gestion-item">
            <CheckCircle size={20} color="#10b981" />
            <span>Preparación de toda la documentación</span>
          </div>
          <div className="gestion-item">
            <CheckCircle size={20} color="#10b981" />
            <span>Presentación de la solicitud ante Red.es</span>
          </div>
          <div className="gestion-item">
            <CheckCircle size={20} color="#10b981" />
            <span>Seguimiento del proceso de aprobación</span>
          </div>
          <div className="gestion-item">
            <CheckCircle size={20} color="#10b981" />
            <span>Registro en plataforma Global Data Care</span>
          </div>
          <div className="gestion-item">
            <CheckCircle size={20} color="#10b981" />
            <span>Justificación de gastos para cobrar la subvención</span>
          </div>
          <div className="gestion-item">
            <CheckCircle size={20} color="#10b981" />
            <span>Implementación técnica completa</span>
          </div>
        </div>

        <div className="timeline">
          <h4>Plazo Estimado:</h4>
          <div className="timeline-bar">
            <div className="timeline-segment">
              <div className="segment-label">Solicitud</div>
              <div className="segment-duration">2 semanas</div>
            </div>
            <div className="timeline-segment">
              <div className="segment-label">Evaluación</div>
              <div className="segment-duration">1-2 meses</div>
            </div>
            <div className="timeline-segment">
              <div className="segment-label">Aprobación</div>
              <div className="segment-duration">1 semana</div>
            </div>
            <div className="timeline-segment">
              <div className="segment-label">Implementación</div>
              <div className="segment-duration">2-3 meses</div>
            </div>
          </div>
          <div className="timeline-total">Plazo total: 4-6 meses</div>
        </div>
      </div>
    </div>
  )
}

// Demostración de Propuesta Comercial BQDC
function ColaboracionDemo() {
  return (
    <div className="demo-content">
      <div className="demo-section highlight-section">
        <h2>🤝 Propuesta de Colaboración Comercial</h2>
        <p className="section-intro">
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

      <div className="demo-section">
        <h2>💰 Modelo de Comisiones</h2>
        
        <div className="commission-models">
          <div className="model-card">
            <div className="model-header">
              <Award size={28} />
              <h3>Comisiones por Subvenciones</h3>
            </div>
            <div className="model-content">
              <div className="model-highlight">
                <span className="percentage">15%</span>
                <span className="description">de cada subvención conseguida</span>
              </div>
              <div className="model-example">
                <h4>Ejemplo:</h4>
                <div className="example-row">
                  <span>Subvención de 30.000€</span>
                  <span className="result">= 4.500€ para Xavier</span>
                </div>
                <div className="example-row">
                  <span>10 clínicas × 30.000€</span>
                  <span className="result">= 45.000€ en comisiones</span>
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

      {/* Calculadora Interactiva */}
      <div className="demo-section full-width">
        <CommissionCalculator />
      </div>

      <div className="demo-section">
        <h2>🎯 Estrategia de Promoción</h2>
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

      <div className="demo-section highlight-section">
        <h2>✨ Ventajas para Xavier y BQDC</h2>
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

      <div className="demo-section">
        <h2>📞 Próximos Pasos</h2>
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
  )
}

export default ServiceDemo

