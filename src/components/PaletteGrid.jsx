import Swatch from './Swatch'
export default function PaletteGrid({ palette }) {
  return (
    <div className="palette-grid">
      {palette.map((color, index) => (
        <Swatch key={index} color={color} />
      ))}
    </div>
  )
}
