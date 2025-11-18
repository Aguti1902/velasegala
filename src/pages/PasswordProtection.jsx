import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

function PasswordProtection({ onCorrectPassword }) {
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState(false)
  const [isShaking, setIsShaking] = useState(false)

  // Contraseña definida (puedes cambiarla)
  const CORRECT_PASSWORD = 'velasegala2025'

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (password === CORRECT_PASSWORD) {
      setError(false)
      onCorrectPassword()
    } else {
      setError(true)
      setIsShaking(true)
      setTimeout(() => setIsShaking(false), 500)
      setPassword('')
    }
  }

  return (
    <div className="password-protection-page">
      <div className="password-container">
        <div className="password-header">
          <div className="lock-icon">
            <img src="/logos/Isotipo.png" alt="Vela Segalà" />
          </div>
          <h1>Propuesta Confidencial</h1>
          <p className="password-subtitle">
            Este documento contiene información confidencial para uso exclusivo de Vela Segalà.
            Por favor, introduce la contraseña para acceder.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={`password-form ${isShaking ? 'shake' : ''}`}>
          <div className="password-input-group">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Introduce la contraseña"
              className={`password-input ${error ? 'error' : ''}`}
              autoFocus
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div className="password-error">
              ❌ Contraseña incorrecta. Por favor, inténtalo de nuevo.
            </div>
          )}

          <button type="submit" className="password-submit">
            Acceder a la Propuesta
          </button>
        </form>

        <div className="password-footer">
          <div className="agency-badge-login">
            <span className="agency-label">Propuesta elaborada por</span>
            <img src="/nexgent-logo.png" alt="NexGent" className="agency-logo" />
          </div>
          <p className="confidential-notice">
            🔒 Documento confidencial y de uso exclusivo
          </p>
        </div>
      </div>
    </div>
  )
}

export default PasswordProtection

