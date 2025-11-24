import { Calculator, TrendingUp, Percent, Info } from 'lucide-react'

function BudgetCalculator({ selectedServices, allServices, selectedProposal }) {
  const calculateTotals = () => {
    let monthlyTotal = 0
    let initialTotal = 0

    selectedServices.forEach(serviceId => {
      const service = allServices.find(s => s.id === serviceId)
      if (service) {
        monthlyTotal += service.pricing.monthly
        initialTotal += service.pricing.initial
      }
    })

    return { monthlyTotal, initialTotal }
  }

  const { monthlyTotal, initialTotal } = calculateTotals()
  const annualTotal = monthlyTotal * 12
  const totalFirstYear = initialTotal + annualTotal

  const hasSelection = selectedServices.length > 0
  const allServicesSelected = selectedServices.length === allServices.length
  // No aplicar descuento en propuesta tech (la subvención ya lo cubre todo)
  const discount = (allServicesSelected && selectedProposal !== 'tech') ? 0.10 : 0

  const discountedMonthly = monthlyTotal * (1 - discount)
  const discountedInitial = initialTotal * (1 - discount)
  const totalWithDiscount = discountedInitial + (discountedMonthly * 12)

  const selectedServiceDetails = allServices.filter(s => 
    selectedServices.includes(s.id)
  )

  return (
    <div className="page budget-page">
      <div className="page-header">
        <span className="page-number">08</span>
        <h1 className="page-title">Inversión y Presupuesto</h1>
      </div>

      {hasSelection ? (
        <>
          {allServicesSelected && selectedProposal !== 'tech' && (
            <div className="discount-alert">
              <Percent size={32} />
              <div className="discount-content">
                <h3>Descuento Paquete Completo</h3>
                <p>
                  Por contratar todos nuestros servicios, obtiene un <strong>10% de descuento</strong> en 
                  toda la inversión
                </p>
              </div>
            </div>
          )}

          <div className="budget-summary">
            <div className="budget-card primary">
              <Calculator size={40} className="budget-icon" />
              <h3>Inversión Inicial</h3>
              {discount > 0 && (
                <div className="original-amount">{initialTotal.toLocaleString('es-ES')}€</div>
              )}
              <div className="budget-amount">
                {discountedInitial.toLocaleString('es-ES')}€
              </div>
              <div className="budget-label">Pago único</div>
            </div>

            <div className="budget-card secondary">
              <TrendingUp size={40} className="budget-icon" />
              <h3>Cuota Mensual</h3>
              {discount > 0 && (
                <div className="original-amount">{monthlyTotal.toLocaleString('es-ES')}€</div>
              )}
              <div className="budget-amount">
                {discountedMonthly.toLocaleString('es-ES')}€
              </div>
              <div className="budget-label">Facturación mensual</div>
            </div>
          </div>

          <div className="budget-breakdown">
            <h2 className="breakdown-title">Desglose de Servicios Seleccionados</h2>
            <div className="breakdown-table">
              <div className="breakdown-header">
                <div className="col-service">Servicio</div>
                <div className="col-initial">Inicial</div>
                <div className="col-monthly">Mensual</div>
              </div>
              {selectedServiceDetails.map(service => (
                <div key={service.id} className="breakdown-row">
                  <div className="col-service">{service.title}</div>
                  <div className="col-initial">
                    {service.pricing.initial > 0 
                      ? `${service.pricing.initial.toLocaleString('es-ES')}€`
                      : '—'
                    }
                  </div>
                  <div className="col-monthly">
                    {service.pricing.monthly > 0 
                      ? `${service.pricing.monthly.toLocaleString('es-ES')}€`
                      : '—'
                    }
                  </div>
                </div>
              ))}
              <div className="breakdown-row total">
                <div className="col-service"><strong>Subtotal</strong></div>
                <div className="col-initial">
                  <strong>{initialTotal.toLocaleString('es-ES')}€</strong>
                </div>
                <div className="col-monthly">
                  <strong>{monthlyTotal.toLocaleString('es-ES')}€</strong>
                </div>
              </div>
              {discount > 0 && (
                <div className="breakdown-row discount">
                  <div className="col-service">Descuento (10%)</div>
                  <div className="col-initial">
                    -{(initialTotal * discount).toLocaleString('es-ES')}€
                  </div>
                  <div className="col-monthly">
                    -{(monthlyTotal * discount).toLocaleString('es-ES')}€
                  </div>
                </div>
              )}
            </div>
          </div>

          {selectedProposal === 'tech' && (
            <div className="tech-proposal-note">
              <Info size={24} />
              <div className="note-content">
                <h3>💡 Sobre la Propuesta de Tecnología Avanzada</h3>
                <div className="note-details">
                  <p>
                    <strong>Agente IA WhatsApp + Telefónico:</strong> Inversión inicial de 13.000€ + 699€/mes
                  </p>
                  <p>
                    <strong>✨ Subvención Global Data Care:</strong> Cubre TOTALMENTE el coste del Agente IA 
                    (desarrollo + 2 meses de mantenimiento). <span className="highlight">Desarrollo 100% subvencionado.</span>
                  </p>
                  <p>
                    <strong>🤝 Propuesta Comercial BQDC:</strong> Sin coste inicial. Modelo basado en comisiones 
                    (10% por subvención + 50€/mes por clínica con IA). Potencial de ingresos recurrentes.
                  </p>
                  <p className="note-summary">
                    <strong>Resumen:</strong> Con la subvención, la implementación de IA queda <strong>totalmente cubierta</strong>. 
                    Solo pagarías 699€/mes a partir del 3er mes. La propuesta BQDC puede generar ingresos adicionales 
                    sin inversión inicial.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="budget-projections">
            <h2 className="projection-title">Proyección de Inversión</h2>
            <div className="projection-grid">
              <div className="projection-item">
                <div className="projection-label">Total Año 1</div>
                <div className="projection-value">
                  {totalWithDiscount.toLocaleString('es-ES')}€
                </div>
              </div>
              <div className="projection-item">
                <div className="projection-label">Total Año 2-3</div>
                <div className="projection-value">
                  {(discountedMonthly * 12).toLocaleString('es-ES')}€/año
                </div>
              </div>
              <div className="projection-item">
                <div className="projection-label">Total 3 Años</div>
                <div className="projection-value">
                  {(totalWithDiscount + (discountedMonthly * 24)).toLocaleString('es-ES')}€
                </div>
              </div>
            </div>
          </div>

          <div className="budget-notes">
            <h3>Condiciones</h3>
            <ul>
              <li>Todos los precios expresados en euros (€), IVA no incluido</li>
              <li>Facturación mensual mediante domiciliación bancaria</li>
              <li>Servicios sin permanencia (salvo CRM personalizado)</li>
              <li>Presupuesto válido por 30 días naturales</li>
              <li>Condiciones especiales para paquete completo</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="budget-empty">
          <Calculator size={64} className="empty-icon" />
          <h3>No hay servicios seleccionados</h3>
          <p>
            Vuelva atrás y seleccione los servicios de su interés para visualizar 
            el presupuesto detallado
          </p>
        </div>
      )}
    </div>
  )
}

export default BudgetCalculator

