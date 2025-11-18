import { useState } from 'react'
import { LayoutDashboard, Users, Calendar, FileText, DollarSign, BarChart3, Settings, Bell, Search, Filter } from 'lucide-react'

function CRMInteractive() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedClinic, setSelectedClinic] = useState('all')

  const renderTabContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return <DashboardTab selectedClinic={selectedClinic} />
      case 'patients':
        return <PatientsTab />
      case 'appointments':
        return <AppointmentsTab />
      case 'treatments':
        return <TreatmentsTab />
      case 'billing':
        return <BillingTab />
      case 'analytics':
        return <AnalyticsTab />
      default:
        return <DashboardTab selectedClinic={selectedClinic} />
    }
  }

  return (
    <div className="crm-interactive">
      {/* Sidebar Desktop */}
      <aside className="crm-sidebar-pro">
        <div className="crm-sidebar-header">
          <div className="crm-brand-pro">
            <div className="crm-brand-icon">
              <img src="/logos/Isotipo blanco.png" alt="VS" />
            </div>
            <div className="crm-brand-text">
              <div className="crm-brand-name">Vela Segalà</div>
              <div className="crm-brand-subtitle">CRM Sistema</div>
            </div>
          </div>
        </div>

        <nav className="crm-nav-pro">
          <button 
            className={`crm-nav-item-pro ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </button>
          <button 
            className={`crm-nav-item-pro ${activeTab === 'patients' ? 'active' : ''}`}
            onClick={() => setActiveTab('patients')}
          >
            <Users size={20} />
            <span>Pacientes</span>
            <span className="nav-badge">847</span>
          </button>
          <button 
            className={`crm-nav-item-pro ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            <Calendar size={20} />
            <span>Agenda</span>
            <span className="nav-badge alert">12</span>
          </button>
          <button 
            className={`crm-nav-item-pro ${activeTab === 'treatments' ? 'active' : ''}`}
            onClick={() => setActiveTab('treatments')}
          >
            <FileText size={20} />
            <span>Tratamientos</span>
          </button>
          <button 
            className={`crm-nav-item-pro ${activeTab === 'billing' ? 'active' : ''}`}
            onClick={() => setActiveTab('billing')}
          >
            <DollarSign size={20} />
            <span>Facturación</span>
          </button>
          <button 
            className={`crm-nav-item-pro ${activeTab === 'analytics' ? 'active' : ''}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart3 size={20} />
            <span>Analytics</span>
          </button>
        </nav>

        <div className="crm-sidebar-footer-pro">
          <button className="crm-settings-btn">
            <Settings size={18} />
            <span>Configuración</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="crm-main-pro">
        {/* Top Bar */}
        <div className="crm-topbar">
          <div className="crm-topbar-left">
            <h1 className="crm-page-title">
              {activeTab === 'dashboard' && 'Dashboard'}
              {activeTab === 'patients' && 'Gestión de Pacientes'}
              {activeTab === 'appointments' && 'Agenda de Citas'}
              {activeTab === 'treatments' && 'Tratamientos'}
              {activeTab === 'billing' && 'Facturación'}
              {activeTab === 'analytics' && 'Analytics'}
            </h1>
          </div>
          <div className="crm-topbar-right">
            <select 
              className="crm-clinic-selector"
              value={selectedClinic}
              onChange={(e) => setSelectedClinic(e.target.value)}
            >
              <option value="all">Todas las Clínicas</option>
              <option value="santceloni">Sant Celoni</option>
              <option value="viladecans">Viladecans</option>
            </select>
            <button className="crm-icon-btn">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>
            <div className="crm-user-avatar">DR</div>
          </div>
        </div>

        {/* Content Area */}
        <div className="crm-content-area">
          {renderTabContent()}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="crm-mobile-nav" style={{display: 'none'}}>
        <button 
          className={`crm-mobile-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveTab('dashboard')}
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>
        <button 
          className={`crm-mobile-nav-item ${activeTab === 'patients' ? 'active' : ''}`}
          onClick={() => setActiveTab('patients')}
        >
          <Users size={20} />
          <span>Pacientes</span>
        </button>
        <button 
          className={`crm-mobile-nav-item ${activeTab === 'appointments' ? 'active' : ''}`}
          onClick={() => setActiveTab('appointments')}
        >
          <Calendar size={20} />
          <span>Agenda</span>
        </button>
        <button 
          className={`crm-mobile-nav-item ${activeTab === 'treatments' ? 'active' : ''}`}
          onClick={() => setActiveTab('treatments')}
        >
          <FileText size={20} />
          <span>Tratamientos</span>
        </button>
        <button 
          className={`crm-mobile-nav-item ${activeTab === 'billing' ? 'active' : ''}`}
          onClick={() => setActiveTab('billing')}
        >
          <DollarSign size={20} />
          <span>Facturación</span>
        </button>
        <button 
          className={`crm-mobile-nav-item ${activeTab === 'analytics' ? 'active' : ''}`}
          onClick={() => setActiveTab('analytics')}
        >
          <BarChart3 size={20} />
          <span>Analytics</span>
        </button>
      </nav>
    </div>
  )
}

// Dashboard Tab
function DashboardTab({ selectedClinic }) {
  return (
    <div className="crm-tab-content">
      {/* KPI Cards */}
      <div className="crm-kpi-grid">
        <div className="crm-kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Citas Hoy</span>
            <Calendar size={20} className="kpi-icon" />
          </div>
          <div className="kpi-value">47</div>
          <div className="kpi-change positive">
            <span>↑ 12%</span>
            <span className="kpi-period">vs ayer</span>
          </div>
        </div>

        <div className="crm-kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Nuevos Pacientes</span>
            <Users size={20} className="kpi-icon" />
          </div>
          <div className="kpi-value">23</div>
          <div className="kpi-change positive">
            <span>↑ 18%</span>
            <span className="kpi-period">este mes</span>
          </div>
        </div>

        <div className="crm-kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Facturación Hoy</span>
            <DollarSign size={20} className="kpi-icon" />
          </div>
          <div className="kpi-value">€8.420</div>
          <div className="kpi-change positive">
            <span>↑ 8%</span>
            <span className="kpi-period">vs promedio</span>
          </div>
        </div>

        <div className="crm-kpi-card">
          <div className="kpi-header">
            <span className="kpi-label">Tasa Ocupación</span>
            <BarChart3 size={20} className="kpi-icon" />
          </div>
          <div className="kpi-value">87%</div>
          <div className="kpi-change neutral">
            <span>→ 0%</span>
            <span className="kpi-period">sin cambios</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="crm-charts-row">
        <div className="crm-chart-card">
          <div className="chart-card-header">
            <h3>Citas por Día (Esta Semana)</h3>
            <button className="chart-options">⋮</button>
          </div>
          <div className="mini-bar-chart">
            <div className="mini-bar" style={{height: '60%'}}><span>42</span></div>
            <div className="mini-bar" style={{height: '80%'}}><span>56</span></div>
            <div className="mini-bar" style={{height: '70%'}}><span>49</span></div>
            <div className="mini-bar" style={{height: '95%'}}><span>67</span></div>
            <div className="mini-bar active" style={{height: '67%'}}><span>47</span></div>
            <div className="mini-bar future" style={{height: '40%'}}><span>28</span></div>
            <div className="mini-bar future" style={{height: '20%'}}><span>14</span></div>
          </div>
          <div className="mini-chart-labels">
            <span>Lun</span><span>Mar</span><span>Mié</span><span>Jue</span>
            <span>Vie</span><span>Sáb</span><span>Dom</span>
          </div>
        </div>

        <div className="crm-chart-card">
          <div className="chart-card-header">
            <h3>Tipos de Tratamiento (Hoy)</h3>
            <button className="chart-options">⋮</button>
          </div>
          <div className="donut-mini-chart">
            <div className="donut-chart-pro"></div>
            <div className="donut-center">
              <div className="donut-total">47</div>
              <div className="donut-label-small">Total</div>
            </div>
          </div>
          <div className="donut-legend-pro">
            <div className="legend-item-pro">
              <span className="legend-dot-pro" style={{background: '#000'}}></span>
              <span>Revisiones (18)</span>
            </div>
            <div className="legend-item-pro">
              <span className="legend-dot-pro" style={{background: '#666'}}></span>
              <span>Limpiezas (14)</span>
            </div>
            <div className="legend-item-pro">
              <span className="legend-dot-pro" style={{background: '#999'}}></span>
              <span>Tratamientos (10)</span>
            </div>
            <div className="legend-item-pro">
              <span className="legend-dot-pro" style={{background: '#ccc'}}></span>
              <span>Urgencias (5)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Próximas Citas */}
      <div className="crm-section-card">
        <div className="section-card-header">
          <h3>Próximas Citas</h3>
          <button className="view-all-btn">Ver todas →</button>
        </div>
        <div className="appointments-table-pro">
          <div className="table-header-pro">
            <div className="th-pro">Hora</div>
            <div className="th-pro">Paciente</div>
            <div className="th-pro">Tratamiento</div>
            <div className="th-pro">Doctor</div>
            <div className="th-pro">Clínica</div>
            <div className="th-pro">Estado</div>
          </div>
          <div className="appointment-row-pro">
            <div className="td-pro time">09:00</div>
            <div className="td-pro patient">
              <div className="patient-avatar">MG</div>
              <span>María García López</span>
            </div>
            <div className="td-pro">Revisión General</div>
            <div className="td-pro">Dr. Vela</div>
            <div className="td-pro">Sant Celoni</div>
            <div className="td-pro"><span className="status-badge confirmed">Confirmada</span></div>
          </div>
          <div className="appointment-row-pro">
            <div className="td-pro time">09:30</div>
            <div className="td-pro patient">
              <div className="patient-avatar">JP</div>
              <span>Juan Pérez Ruiz</span>
            </div>
            <div className="td-pro">Limpieza Dental</div>
            <div className="td-pro">Dra. Segalà</div>
            <div className="td-pro">Viladecans</div>
            <div className="td-pro"><span className="status-badge confirmed">Confirmada</span></div>
          </div>
          <div className="appointment-row-pro">
            <div className="td-pro time">10:00</div>
            <div className="td-pro patient">
              <div className="patient-avatar">AM</div>
              <span>Ana Martínez Sanz</span>
            </div>
            <div className="td-pro">Ortodoncia - Revisión</div>
            <div className="td-pro">Dr. Rodríguez</div>
            <div className="td-pro">Sant Celoni</div>
            <div className="td-pro"><span className="status-badge pending">Pendiente</span></div>
          </div>
          <div className="appointment-row-pro">
            <div className="td-pro time">10:30</div>
            <div className="td-pro patient">
              <div className="patient-avatar">LC</div>
              <span>Luis Campos Torres</span>
            </div>
            <div className="td-pro">Implante Dental</div>
            <div className="td-pro">Dr. Vela</div>
            <div className="td-pro">Viladecans</div>
            <div className="td-pro"><span className="status-badge confirmed">Confirmada</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Patients Tab
function PatientsTab() {
  return (
    <div className="crm-tab-content">
      <div className="table-controls">
        <div className="search-box">
          <Search size={18} />
          <input type="text" placeholder="Buscar pacientes..." />
        </div>
        <button className="filter-btn">
          <Filter size={18} />
          <span>Filtros</span>
        </button>
        <button className="crm-primary-btn">+ Nuevo Paciente</button>
      </div>

      <div className="crm-section-card">
        <div className="patients-table-pro">
          <div className="table-header-pro">
            <div className="th-pro">Paciente</div>
            <div className="th-pro">DNI/NIE</div>
            <div className="th-pro">Teléfono</div>
            <div className="th-pro">Email</div>
            <div className="th-pro">Última Visita</div>
            <div className="th-pro">Próxima Cita</div>
            <div className="th-pro">Acciones</div>
          </div>
          {[...Array(8)].map((_, i) => (
            <div key={i} className="patient-row-pro">
              <div className="td-pro patient">
                <div className="patient-avatar">{['MG', 'JP', 'AM', 'LC', 'SF', 'PR', 'CL', 'DM'][i]}</div>
                <div className="patient-info">
                  <div className="patient-name">
                    {['María García López', 'Juan Pérez Ruiz', 'Ana Martínez Sanz', 
                      'Luis Campos Torres', 'Sara Fernández Gil', 'Pablo Rodríguez Díaz',
                      'Carmen López Vera', 'David Moreno Ruiz'][i]}
                  </div>
                  <div className="patient-id">#{847 - i}</div>
                </div>
              </div>
              <div className="td-pro">12345678{i}</div>
              <div className="td-pro">6{i}0 123 45{i}</div>
              <div className="td-pro">paciente{i}@email.com</div>
              <div className="td-pro">15/11/2025</div>
              <div className="td-pro">
                {i < 4 ? <span className="next-date">22/11/2025</span> : <span className="no-appointment">Sin cita</span>}
              </div>
              <div className="td-pro actions">
                <button className="action-btn">Ver</button>
                <button className="action-btn">Editar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Appointments Tab
function AppointmentsTab() {
  return (
    <div className="crm-tab-content">
      <div className="calendar-view">
        <div className="calendar-header-pro">
          <button className="calendar-nav-btn">‹</button>
          <h2 className="calendar-title">Noviembre 2025</h2>
          <button className="calendar-nav-btn">›</button>
          <button className="crm-primary-btn">+ Nueva Cita</button>
        </div>
        
        <div className="calendar-grid-pro">
          <div className="calendar-day-header">Lun</div>
          <div className="calendar-day-header">Mar</div>
          <div className="calendar-day-header">Mié</div>
          <div className="calendar-day-header">Jue</div>
          <div className="calendar-day-header">Vie</div>
          <div className="calendar-day-header">Sáb</div>
          <div className="calendar-day-header">Dom</div>
          
          {[...Array(35)].map((_, i) => (
            <div key={i} className={`calendar-day-cell ${i === 17 ? 'today' : ''} ${i < 4 || i > 33 ? 'other-month' : ''}`}>
              <div className="day-number">{i < 4 ? 28 + i : i > 33 ? i - 33 : i - 3}</div>
              {i >= 4 && i <= 33 && (i - 4) % 7 < 5 && (
                <div className="day-appointments">
                  <div className="appointment-mini">{Math.floor(Math.random() * 50) + 30} citas</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Treatments Tab
function TreatmentsTab() {
  return (
    <div className="crm-tab-content">
      <div className="treatments-grid-pro">
        {[
          { name: 'Revisión General', count: 245, avg: '€45', color: '#000' },
          { name: 'Limpieza Dental', count: 189, avg: '€60', color: '#333' },
          { name: 'Empaste', count: 156, avg: '€80', color: '#666' },
          { name: 'Ortodoncia', count: 78, avg: '€3.200', color: '#999' },
          { name: 'Implante Dental', count: 45, avg: '€1.800', color: '#aaa' },
          { name: 'Endodoncia', count: 67, avg: '€350', color: '#ccc' },
        ].map((treatment, i) => (
          <div key={i} className="treatment-card-pro">
            <div className="treatment-icon-pro" style={{background: treatment.color}}>
              <FileText size={24} color="white" />
            </div>
            <h4>{treatment.name}</h4>
            <div className="treatment-stats-pro">
              <div className="stat-pro">
                <span className="stat-label-pro">Este Mes</span>
                <span className="stat-value-pro">{treatment.count}</span>
              </div>
              <div className="stat-pro">
                <span className="stat-label-pro">Precio Medio</span>
                <span className="stat-value-pro">{treatment.avg}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// Billing Tab
function BillingTab() {
  return (
    <div className="crm-tab-content">
      <div className="billing-summary">
        <div className="billing-card">
          <h3>Facturación del Mes</h3>
          <div className="billing-amount">€45.280</div>
          <div className="billing-change positive">+15% vs mes anterior</div>
        </div>
        <div className="billing-card">
          <h3>Pendiente de Cobro</h3>
          <div className="billing-amount">€8.420</div>
          <div className="billing-detail">23 facturas</div>
        </div>
        <div className="billing-card">
          <h3>Cobrado Hoy</h3>
          <div className="billing-amount">€3.150</div>
          <div className="billing-detail">12 pagos</div>
        </div>
      </div>

      <div className="crm-section-card">
        <div className="section-card-header">
          <h3>Últimas Facturas</h3>
          <button className="crm-primary-btn">+ Nueva Factura</button>
        </div>
        <div className="invoices-table-pro">
          <div className="table-header-pro">
            <div className="th-pro">Nº Factura</div>
            <div className="th-pro">Paciente</div>
            <div className="th-pro">Concepto</div>
            <div className="th-pro">Importe</div>
            <div className="th-pro">Estado</div>
            <div className="th-pro">Acciones</div>
          </div>
          {[...Array(10)].map((_, i) => (
            <div key={i} className="invoice-row-pro">
              <div className="td-pro">FAC-2025-{1234 + i}</div>
              <div className="td-pro">Paciente {i + 1}</div>
              <div className="td-pro">Tratamiento dental</div>
              <div className="td-pro font-bold">€{(Math.random() * 500 + 100).toFixed(2)}</div>
              <div className="td-pro">
                <span className={`status-badge ${i % 3 === 0 ? 'paid' : i % 3 === 1 ? 'pending' : 'overdue'}`}>
                  {i % 3 === 0 ? 'Pagada' : i % 3 === 1 ? 'Pendiente' : 'Vencida'}
                </span>
              </div>
              <div className="td-pro actions">
                <button className="action-btn">Ver</button>
                <button className="action-btn">Descargar</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Analytics Tab
function AnalyticsTab() {
  return (
    <div className="crm-tab-content">
      <div className="analytics-grid">
        <div className="analytics-card large">
          <h3>Ingresos Mensuales (2025)</h3>
          <div className="revenue-chart-realistic">
            {[
              { month: 'E', value: 18500, height: 35 },
              { month: 'F', value: 22300, height: 52 },
              { month: 'M', value: 26800, height: 68 },
              { month: 'A', value: 31200, height: 82 },
              { month: 'M', value: 35600, height: 95 },
              { month: 'J', value: 28900, height: 72 },
              { month: 'J', value: 24100, height: 58 },
              { month: 'A', value: 19800, height: 40 },
              { month: 'S', value: 33400, height: 88 },
              { month: 'O', value: 38700, height: 100 },
              { month: 'N', value: 29500, height: 75 },
              { month: 'D', value: 27600, height: 65 }
            ].map((data, i) => (
              <div key={i} className="revenue-bar-realistic">
                <div className="revenue-value">{(data.value / 1000).toFixed(1)}k</div>
                <div className="revenue-bar-fill-realistic" style={{height: `${data.height}%`}}></div>
                <span className="revenue-bar-label-realistic">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="revenue-total">
            <span className="revenue-total-label">Total Anual:</span>
            <span className="revenue-total-value">336.400€</span>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Distribución por Clínica</h3>
          <div className="clinic-distribution">
            <div className="clinic-bar">
              <div className="clinic-label">Sant Celoni</div>
              <div className="clinic-bar-bg">
                <div className="clinic-bar-fill" style={{width: '62%'}}>62%</div>
              </div>
            </div>
            <div className="clinic-bar">
              <div className="clinic-label">Viladecans</div>
              <div className="clinic-bar-bg">
                <div className="clinic-bar-fill" style={{width: '38%'}}>38%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Tasa de Ocupación</h3>
          <div className="occupation-gauge">
            <div className="gauge-value">87%</div>
            <div className="gauge-label">Promedio Mensual</div>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Satisfacción de Pacientes</h3>
          <div className="satisfaction-score">
            <div className="score-stars">⭐⭐⭐⭐⭐</div>
            <div className="score-value">4.8/5.0</div>
            <div className="score-reviews">Basado en 373 reseñas</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CRMInteractive

