import { useState } from 'react'
import { TrendingUp, Users, Euro, Calculator } from 'lucide-react'
import './CommissionCalculator.css'

function CommissionCalculator() {
  const [numSubvenciones, setNumSubvenciones] = useState(5)
  const [numCliniciasIA, setNumClinicasIA] = useState(10)
  
  const SUBVENCION_AMOUNT = 30000
  const COMMISSION_SUBVENCION = 0.15 // 15%
  const COMMISSION_IA_MENSUAL = 50 // 50€/mes por clínica
  
  // Cálculos
  const comisionPorSubvencion = SUBVENCION_AMOUNT * COMMISSION_SUBVENCION
  const totalSubvenciones = numSubvenciones * comisionPorSubvencion
  const ingresosMensualesIA = numCliniciasIA * COMMISSION_IA_MENSUAL
  const ingresosAnualesIA = ingresosMensualesIA * 12
  const totalPrimerAno = totalSubvenciones + ingresosAnualesIA
  
  return (
    <div className="commission-calculator">
      <div className="calculator-header">
        <Calculator size={32} />
        <h3>Calculadora de Comisiones</h3>
        <p>Simula tus ingresos potenciales con diferentes escenarios</p>
      </div>

      <div className="calculator-controls">
        {/* Control Subvenciones */}
        <div className="calculator-control">
          <div className="control-header">
            <Euro size={20} />
            <label>Subvenciones Conseguidas</label>
          </div>
          <div className="control-input">
            <input
              type="range"
              min="0"
              max="80"
              value={numSubvenciones}
              onChange={(e) => setNumSubvenciones(Number(e.target.value))}
              className="calculator-slider"
            />
            <div className="control-value">{numSubvenciones} clínicas</div>
          </div>
          <div className="control-detail">
            <span>Comisión por subvención:</span>
            <strong>{comisionPorSubvencion.toLocaleString('es-ES')}€</strong>
          </div>
        </div>

        {/* Control Agentes IA */}
        <div className="calculator-control">
          <div className="control-header">
            <Users size={20} />
            <label>Clínicas con Agente IA</label>
          </div>
          <div className="control-input">
            <input
              type="range"
              min="0"
              max="80"
              value={numCliniciasIA}
              onChange={(e) => setNumClinicasIA(Number(e.target.value))}
              className="calculator-slider"
            />
            <div className="control-value">{numCliniciasIA} clínicas</div>
          </div>
          <div className="control-detail">
            <span>Comisión mensual por clínica:</span>
            <strong>50€/mes</strong>
          </div>
        </div>
      </div>

      {/* Resultados */}
      <div className="calculator-results">
        <div className="result-card result-card-primary">
          <div className="result-icon">
            <TrendingUp size={24} />
          </div>
          <div className="result-content">
            <div className="result-label">Total Primer Año</div>
            <div className="result-value">{totalPrimerAno.toLocaleString('es-ES')}€</div>
            <div className="result-breakdown">
              {totalSubvenciones.toLocaleString('es-ES')}€ subvenciones + {ingresosAnualesIA.toLocaleString('es-ES')}€ IA recurrente
            </div>
          </div>
        </div>

        <div className="result-row">
          <div className="result-card result-card-secondary">
            <div className="result-label">Comisiones Subvenciones</div>
            <div className="result-value">{totalSubvenciones.toLocaleString('es-ES')}€</div>
            <div className="result-note">Pago único</div>
          </div>

          <div className="result-card result-card-secondary">
            <div className="result-label">Ingresos Mensuales IA</div>
            <div className="result-value">{ingresosMensualesIA.toLocaleString('es-ES')}€</div>
            <div className="result-note">Recurrentes</div>
          </div>

          <div className="result-card result-card-secondary">
            <div className="result-label">Ingresos Anuales IA</div>
            <div className="result-value">{ingresosAnualesIA.toLocaleString('es-ES')}€</div>
            <div className="result-note">Año 1 y siguientes</div>
          </div>
        </div>
      </div>

      {/* Escenarios de ejemplo */}
      <div className="calculator-scenarios">
        <h4>Escenarios de Ejemplo</h4>
        <div className="scenarios-grid">
          <div 
            className="scenario-card"
            onClick={() => {
              setNumSubvenciones(10)
              setNumClinicasIA(15)
            }}
          >
            <div className="scenario-title">Conservador</div>
            <div className="scenario-stats">
              <span>10 subvenciones</span>
              <span>15 clínicas IA</span>
            </div>
            <div className="scenario-result">
              {(10 * comisionPorSubvencion + 15 * COMMISSION_IA_MENSUAL * 12).toLocaleString('es-ES')}€ año 1
            </div>
          </div>

          <div 
            className="scenario-card scenario-card-recommended"
            onClick={() => {
              setNumSubvenciones(25)
              setNumClinicasIA(35)
            }}
          >
            <div className="scenario-badge">Recomendado</div>
            <div className="scenario-title">Moderado</div>
            <div className="scenario-stats">
              <span>25 subvenciones</span>
              <span>35 clínicas IA</span>
            </div>
            <div className="scenario-result">
              {(25 * comisionPorSubvencion + 35 * COMMISSION_IA_MENSUAL * 12).toLocaleString('es-ES')}€ año 1
            </div>
          </div>

          <div 
            className="scenario-card"
            onClick={() => {
              setNumSubvenciones(50)
              setNumClinicasIA(60)
            }}
          >
            <div className="scenario-title">Ambicioso</div>
            <div className="scenario-stats">
              <span>50 subvenciones</span>
              <span>60 clínicas IA</span>
            </div>
            <div className="scenario-result">
              {(50 * comisionPorSubvencion + 60 * COMMISSION_IA_MENSUAL * 12).toLocaleString('es-ES')}€ año 1
            </div>
          </div>
        </div>
      </div>

      {/* Proyección a largo plazo */}
      <div className="calculator-projection">
        <h4>Proyección de Ingresos Recurrentes</h4>
        <div className="projection-table">
          <div className="projection-row projection-header">
            <span>Año</span>
            <span>Ingresos IA</span>
            <span>Total Acumulado</span>
          </div>
          {[1, 2, 3, 4, 5].map(year => {
            const ingresosIA = ingresosAnualesIA * year
            const totalAcumulado = totalSubvenciones + ingresosIA
            return (
              <div key={year} className="projection-row">
                <span>Año {year}</span>
                <span>{ingresosIA.toLocaleString('es-ES')}€</span>
                <span className="projection-total">{totalAcumulado.toLocaleString('es-ES')}€</span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="calculator-note">
        <p>
          <strong>Nota:</strong> Estos cálculos son estimaciones basadas en las comisiones acordadas. 
          Los ingresos reales dependerán del número de clínicas que adopten las soluciones y la duración de los contratos.
        </p>
      </div>
    </div>
  )
}

export default CommissionCalculator

