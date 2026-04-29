import React from 'react'
import { Bot } from 'lucide-react'
import './ServiceExtras.css'

function ServiceDemo({ service }) {
  if (!service) return null

  const getServiceNumber = () => {
    const services = [
      'creacion-santceloni', 'creacion-esteticasegala', 'creacion-esteticavela',
      'mantenimiento', 'ia-blog', 'google-ads', 'seo'
    ]
    const idx = services.indexOf(service.id)
    return (idx + 1).toString().padStart(2, '0')
  }

  const renderDemo = () => {
    if (service.id.startsWith('creacion-')) {
      return <WebsiteDemo service={service} />
    }
    switch(service.id) {
      case 'seo':
        return <SEODemo />
      case 'ia-blog':
        return <BlogAIDemo />
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

// Demostración de Creación Web
function WebsiteDemo({ service }) {
  const webInfo = {
    'creacion-santceloni': {
      url: 'velasegalasantceloni.com',
      title: 'Clínica dental en Sant Celoni',
      subtitle: 'Tu salud bucodental en las mejores manos',
      desc: 'En Clínica Dental Vela Segalà Sant Celoni ofrecemos un enfoque odontológico altamente especializado, combinando <strong>tratamientos personalizados de máxima calidad</strong>, <strong>tecnología de vanguardia</strong> y un equipo médico con sólida trayectoria.',
      location: 'Sant Celoni',
      type: 'dental'
    },
    'creacion-esteticasegala': {
      url: 'esteticasegala.com',
      title: 'Centro de Estética Segala',
      subtitle: 'Belleza y bienestar en manos expertas',
      desc: 'En Estética Segala ofrecemos tratamientos de belleza y bienestar de la más alta calidad, con <strong>tecnología de última generación</strong> y un equipo especializado en cada tratamiento.',
      location: 'Estética Segala',
      type: 'estetica'
    },
    'creacion-esteticavela': {
      url: 'esteticavela.com',
      title: 'Centro de Estética Vela',
      subtitle: 'Tratamientos de belleza exclusivos',
      desc: 'En Estética Vela ofrecemos una experiencia única en tratamientos de belleza y estética avanzada, combinando <strong>técnicas innovadoras</strong> con los mejores productos del mercado.',
      location: 'Estética Vela',
      type: 'estetica'
    }
  }
  const info = webInfo[service?.id] || webInfo['creacion-santceloni']

  return (
    <div className="demo-content">
      <div className="demo-section full-width">
        <h2>Diseño Propuesto — {info.url}</h2>
        <p className="demo-intro">Web moderna con panel de administración, chat IA y botón de WhatsApp integrados</p>

        <div className="website-mockup-pro">
          <div className="browser-bar">
            <div className="browser-dots">
              <span className="dot-red"></span>
              <span className="dot-yellow"></span>
              <span className="dot-green"></span>
            </div>
            <div className="browser-url">
              <span className="url-icon">🔒</span>
              <span>https://{info.url}</span>
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
                <h1 className="web-hero-title">{info.title}</h1>
                <h2 className="web-hero-subtitle">{info.subtitle}</h2>
                <p className="web-hero-text" dangerouslySetInnerHTML={{ __html: info.desc }} />
                <button className="web-cta-button">{info.type === 'estetica' ? 'Reservar Cita' : 'Pedir Cita'}</button>
              </div>
              <div className="web-hero-image">
                <img src="/images/portrait-of-senior-male-dentist-with-dental-instru-2025-01-16-22-34-30-utc.jpg" alt="Clínica Dental Vela Segalà" />
              </div>
            </div>

            {/* Tratamientos Section */}
            <div className="web-section">
              <h2 className="web-section-title">
                {info.type === 'estetica' ? 'Tratamientos de belleza y estética' : 'Tratamientos odontológicos especializados'}
              </h2>
              <p className="web-section-subtitle">
                {info.type === 'estetica'
                  ? <span>En <strong>{info.location}</strong> ofrecemos una amplia gama de tratamientos estéticos con tecnología avanzada y resultados garantizados.</span>
                  : <span>En <strong>{info.location}</strong> ofrecemos un <strong>enfoque odontológico completo</strong>, basado en la evidencia científica y la personalización del tratamiento.</span>
                }
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
              <h2 className="web-section-title">
                {info.type === 'estetica'
                  ? `Especialistas en ${info.location} con años de experiencia`
                  : `Dentistas en ${info.location} con trayectoria internacional`
                }
              </h2>
              <p className="web-section-subtitle">
                {info.type === 'estetica'
                  ? <span>Nuestro equipo de especialistas está comprometido con la excelencia y la atención personalizada a cada cliente.</span>
                  : <span>Nuestro equipo está liderado por el <strong>Dr. Xavier Vela</strong> y la <strong>Dra. Maribel Segalà</strong>, dentistas de referencia a nivel internacional.</span>
                }
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
              <h2 className="web-section-title">
                {info.type === 'estetica'
                  ? `Tu nuevo centro de estética en ${info.location} te espera`
                  : `Tu nueva clínica dental en ${info.location} te espera`
                }
              </h2>
              <p className="web-section-subtitle">Solicita tu primera visita sin compromiso.</p>
              <button className="web-cta-button large">
                {info.type === 'estetica' ? 'Reservar Cita' : 'Pedir Cita'}
              </button>
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
            <h4>🤖 Chat con IA Integrado</h4>
            <p>Asistente inteligente para atender consultas 24/7</p>
          </div>
          <div className="showcase-item">
            <h4>💬 Botón WhatsApp</h4>
            <p>Acceso directo a WhatsApp siempre visible en la web</p>
          </div>
          <div className="showcase-item">
            <h4>📝 Panel de Administración</h4>
            <p>Gestión intuitiva de contenidos sin conocimientos técnicos</p>
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

export default ServiceDemo

// UNUSED LEGACY CODE BELOW — kept as reference only
function _UNUSED_ClientAIDemo() {
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
      <div className="demo-section">
        <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>📋 ¿En Qué Consiste la Subvención?</h2>
        <p className="section-intro" style={{textAlign: 'center', marginBottom: '3rem'}}>
          Financiación europea de hasta <strong>30.000€</strong> para digitalización sanitaria y 
          participación en la red europea de intercambio de datos clínicos.
        </p>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '3rem'}}>
          <div style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div style={{textAlign: 'center', marginBottom: '1rem'}}>
              <FileText size={32} style={{color: '#000000'}} />
            </div>
            <h3 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937'}}>Programa Red.es</h3>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#6b7280'}}>
              Subvención del Ministerio de Asuntos Económicos y Transformación Digital 
              para promover la digitalización del sector sanitario español y su integración 
              en la red europea de datos de salud.
            </p>
          </div>

          <div style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div style={{textAlign: 'center', marginBottom: '1rem'}}>
              <Globe size={32} style={{color: '#000000'}} />
            </div>
            <h3 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937'}}>Global Data Care EU</h3>
            <p style={{fontSize: '0.95rem', lineHeight: '1.6', color: '#6b7280'}}>
              Plataforma europea que permite el intercambio seguro de datos clínicos entre 
              clínicas dentales de toda Europa. Al registrarte, puedes acceder a historiales 
              de pacientes que hayan visitado otras clínicas participantes.
            </p>
          </div>

          <div style={{
            background: 'white',
            border: '2px solid #e5e7eb',
            borderRadius: '12px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
          }}>
            <div style={{textAlign: 'center', marginBottom: '1rem'}}>
              <CheckCircle size={32} style={{color: '#000000'}} />
            </div>
            <h3 style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937'}}>Requisitos</h3>
            <ul style={{fontSize: '0.95rem', lineHeight: '1.9', color: '#6b7280', paddingLeft: '1.2rem'}}>
              <li>Clínica dental registrada en España</li>
              <li>Compartir datos anónimos con la UE</li>
              <li>Implementar digitalización (IA)</li>
              <li>Cumplir con RGPD</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>🌍 Cómo Funciona Global Data Care</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem'}}>
          {[
            {step: 1, title: 'Paciente Nuevo', desc: 'Llega a tu clínica por primera vez', color: '#0066cc'},
            {step: 2, title: 'Búsqueda en GDC', desc: 'Buscas su DNI/NIE en la plataforma', color: '#0066cc'},
            {step: 3, title: 'Historial Disponible', desc: 'Ves todo su historial clínico europeo', color: '#0066cc'},
            {step: 4, title: 'Mejor Atención', desc: 'Información completa desde el día 1', color: '#10b981'}
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '2rem 1.5rem',
              textAlign: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <div style={{
                background: item.color,
                color: 'white',
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem',
                fontWeight: '700'
              }}>{item.step === 4 ? '✓' : item.step}</div>
              <h4 style={{fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.5rem', color: '#1f2937'}}>{item.title}</h4>
              <p style={{fontSize: '0.9rem', color: '#6b7280'}}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{
          background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
          border: '2px solid #0066cc',
          borderRadius: '12px',
          padding: '2rem',
          marginTop: '3rem'
        }}>
          <h4 style={{fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', color: '#1f2937'}}>📋 Ejemplo Práctico</h4>
          <p style={{fontSize: '0.95rem', lineHeight: '1.8', color: '#374151'}}>
            <strong>Escenario:</strong> Un turista alemán llega a tu clínica con dolor dental.<br/>
            <strong style={{color: '#10b981'}}>✓ Con Global Data Care:</strong> Ves que hace 3 meses se hizo un tratamiento 
            de conductos en Berlín. Tienes acceso a las radiografías y al informe del dentista alemán. 
            Puedes tratar el problema informado desde el minuto 1.<br/>
            <strong style={{color: '#dc2626'}}>✗ Sin Global Data Care:</strong> Tendrías que hacer nuevas radiografías, 
            investigar desde cero y posiblemente repetir pruebas que ya se hicieron.
          </p>
        </div>
      </div>

      <div className="demo-section">
        <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>🚀 Gestión Completa por NexGent</h2>
        <p style={{textAlign: 'center', color: '#6b7280', marginBottom: '3rem'}}>
          No te preocupes por la burocracia. Nosotros nos encargamos de TODO.
        </p>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem'}}>
          {[
            {icon: '📝', title: 'Documentación', desc: 'Preparación completa'},
            {icon: '📤', title: 'Presentación', desc: 'Solicitud ante Red.es'},
            {icon: '📊', title: 'Seguimiento', desc: 'Control del proceso'},
            {icon: '🌍', title: 'Registro GDC', desc: 'Plataforma europea'},
            {icon: '✅', title: 'Justificación', desc: 'Cobro de la subvención'},
            {icon: '🔧', title: 'Implementación', desc: 'Setup técnico completo'}
          ].map((item, idx) => (
            <div key={idx} style={{
              background: 'white',
              border: '2px solid #e5e7eb',
              borderRadius: '12px',
              padding: '1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}>
              <div style={{fontSize: '2rem'}}>{item.icon}</div>
              <div>
                <h4 style={{fontSize: '1rem', fontWeight: '700', marginBottom: '0.25rem', color: '#1f2937'}}>{item.title}</h4>
                <p style={{fontSize: '0.85rem', color: '#6b7280'}}>{item.desc}</p>
              </div>
            </div>
          ))}
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
              <p>Las clínicas reciben IA 100% subvencionada y mejoran su eficiencia</p>
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

