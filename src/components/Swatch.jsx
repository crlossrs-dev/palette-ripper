import { rgbToHex } from '../lib/colorUtils'
export default function Swatch({ color }) {
  const hex = rgbToHex(color)
  return (
    <button className="swatch">
      <span className="swatch__color" style={{ backgroundColor: hex }}></span>
      <span className="swatch__label">{hex}</span>
    </button>
  )
}
