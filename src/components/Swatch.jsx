import { rgbToHex } from '../lib/colorUtils'
import { useState } from 'react'
export default function Swatch({ color }) {
  const hex = rgbToHex(color)
  const [copied, setCopied] = useState(false)

  return (
    <button
      className="swatch"
      onClick={() => {
        navigator.clipboard.writeText(hex)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      }}
    >
      <span className="swatch__color" style={{ backgroundColor: hex }}></span>
      <span className="swatch__label">{copied ? 'Copied!' : hex}</span>
    </button>
  )
}
