import { Play, MessageCircle, Globe, Bot, Database, TrendingUp } from 'lucide-react'
import CRMInteractive from '../components/CRMInteractive'

function ServiceDemo({ service }) {
  if (!service) return null

  const getServiceNumber = () => {
    const services = ['mantenimiento', 'creacion', 'seo', 'ia-blog', 'ia-cliente', 'crm']
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
      case 'crm':
        return <CRMDemo />
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
      <div className="demo-section">
        <h2>Conversación Ejemplo - WhatsApp</h2>
        <div className="chat-mockup">
          <div className="chat-header">
            <MessageCircle size={20} />
            <span>Vela Segala IA Assistant</span>
            <span className="chat-status">Online</span>
          </div>
          <div className="chat-messages">
            <div className="message user">
              <div className="message-content">Hola, me gustaría pedir cita para una limpieza</div>
              <div className="message-time">10:23</div>
            </div>
            <div className="message bot">
              <div className="message-content">
                ¡Hola! Encantado de ayudarte. 😊 Para programar tu cita de limpieza dental, 
                ¿qué clínica te queda mejor: Barcelona, Sant Cugat o Viladecans?
              </div>
              <div className="message-time">10:23</div>
            </div>
            <div className="message user">
              <div className="message-content">Sant Cugat</div>
              <div className="message-time">10:24</div>
            </div>
            <div className="message bot">
              <div className="message-content">
                Perfecto. Tengo disponibilidad en Sant Cugat para esta semana:
                <br/><br/>
                📅 Jueves 21 Nov - 10:00h, 16:30h<br/>
                📅 Viernes 22 Nov - 09:30h, 11:00h, 17:00h<br/><br/>
                ¿Alguno de estos horarios te viene bien?
              </div>
              <div className="message-time">10:24</div>
            </div>
            <div className="message user">
              <div className="message-content">El jueves a las 10:00 perfecto</div>
              <div className="message-time">10:25</div>
            </div>
            <div className="message bot">
              <div className="message-content">
                ¡Cita confirmada! ✅<br/><br/>
                📍 Vela Segala Sant Cugat<br/>
                📅 Jueves 21 Noviembre 2025<br/>
                🕐 10:00h<br/>
                👨‍⚕️ Dra. Martínez<br/>
                🦷 Limpieza Dental<br/><br/>
                Te enviaré un recordatorio 24h antes. ¿Necesitas algo más?
              </div>
              <div className="message-time">10:25</div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Capacidades del Asistente IA</h2>
        <div className="ai-capabilities">
          <div className="capability-item">
            <h4>🗓️ Gestión de Citas</h4>
            <p>Reserva, modifica y cancela citas automáticamente</p>
          </div>
          <div className="capability-item">
            <h4>🔔 Recordatorios Inteligentes</h4>
            <p>Notificaciones personalizadas 24h antes</p>
          </div>
          <div className="capability-item">
            <h4>💬 Respuestas Contextuales</h4>
            <p>Entiende preguntas complejas y responde naturalmente</p>
          </div>
          <div className="capability-item">
            <h4>🌐 Multiidioma</h4>
            <p>Español, Catalán e Inglés</p>
          </div>
        </div>
      </div>

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
              <p>El paciente finaliza su tratamiento</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <h4>Solicitud Automática</h4>
              <p>IA envía mensaje personalizado via WhatsApp/SMS</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <h4>Enlace Directo</h4>
              <p>Link directo a Google Reviews en 1 clic</p>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <h4>Reseña Publicada</h4>
              <p>Mejora automática del posicionamiento</p>
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
              <div className="impact-label">Valoración media mantenida</div>
            </div>
            <div className="impact-card">
              <div className="impact-icon">🎯</div>
              <div className="impact-stat">85%</div>
              <div className="impact-label">Tasa de respuesta</div>
            </div>
          </div>

          <div className="reviews-benefits">
            <h4>Beneficios Clave:</h4>
            <ul>
              <li>✓ <strong>SEO Local Mejorado:</strong> Más reseñas = mejor posicionamiento en Google Maps</li>
              <li>✓ <strong>Mayor Confianza:</strong> Pacientes nuevos confían más con muchas reseñas recientes</li>
              <li>✓ <strong>100% Automático:</strong> Sin intervención manual del personal</li>
              <li>✓ <strong>Timing Perfecto:</strong> Solicitud enviada cuando el paciente está más satisfecho</li>
              <li>✓ <strong>Seguimiento Inteligente:</strong> Recordatorio amable si no responden en 48h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

// Demostración de CRM
function CRMDemo() {
  return (
    <div className="demo-content">
      <div className="demo-section full-width">
        <h2>Sistema CRM Interactivo - Desarrollo 100% Personalizado</h2>
        <p className="demo-intro">
          Sistema de gestión integral desarrollado completamente desde cero para las 2 clínicas Vela Segalà. 
          <strong> Haz clic en las pestañas del menú lateral para navegar entre módulos.</strong>
        </p>
        
        <div className="crm-demo-container">
          <CRMInteractive />
        </div>
      </div>

      <div className="demo-section">
        <h2>Módulos y Funcionalidades del CRM</h2>
        <div className="crm-modules-grid">
          <div className="module-card-detailed">
            <Database size={32} />
            <h4>Gestión de Pacientes</h4>
            <ul className="module-features">
              <li>Ficha completa con historial clínico digital</li>
              <li>Documentación y consentimientos firmados</li>
              <li>Comunicaciones integradas (email, SMS, WhatsApp)</li>
              <li>Alertas y recordatorios automáticos</li>
            </ul>
          </div>
          <div className="module-card-detailed">
            <TrendingUp size={32} />
            <h4>Analytics Avanzado</h4>
            <ul className="module-features">
              <li>Dashboard en tiempo real con KPIs clave</li>
              <li>Reportes personalizados por clínica</li>
              <li>Gráficas de rendimiento y ocupación</li>
              <li>Exportación de datos a Excel/PDF</li>
            </ul>
          </div>
          <div className="module-card-detailed">
            <MessageCircle size={32} />
            <h4>Agenda Multi-Clínica</h4>
            <ul className="module-features">
              <li>Calendario sincronizado entre clínicas</li>
              <li>Gestión de disponibilidad por doctor</li>
              <li>Confirmaciones automáticas de citas</li>
              <li>Lista de espera inteligente</li>
            </ul>
          </div>
          <div className="module-card-detailed">
            <Globe size={32} />
            <h4>Facturación Integrada</h4>
            <ul className="module-features">
              <li>Generación automática de facturas</li>
              <li>Gestión de pagos y planes de financiación</li>
              <li>Control de impagados y reclamaciones</li>
              <li>Integración con contabilidad</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2>Ventajas del Desarrollo Personalizado</h2>
        <div className="advantages-grid">
          <div className="advantage-card">
            <h4>✓ 100% Adaptado</h4>
            <p>Diseñado específicamente para los procesos de Vela Segalà</p>
          </div>
          <div className="advantage-card">
            <h4>✓ Propiedad Total</h4>
            <p>Código fuente 100% de su propiedad, sin dependencias externas</p>
          </div>
          <div className="advantage-card">
            <h4>✓ Escalable</h4>
            <p>Preparado para crecer con el negocio y añadir nuevas clínicas</p>
          </div>
          <div className="advantage-card">
            <h4>✓ Sin Límites</h4>
            <p>Sin restricciones de usuarios, pacientes o almacenamiento</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDemo

