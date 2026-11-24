import { useState } from 'react'
import Dropzone from './components/Dropzone'
import './App.css'
import { getPixels } from './lib/loadImage'
import { extractPalette } from './lib/extractPalette'
import PaletteGrid from './components/PaletteGrid'

export default function App() {
  const [imageUrl, setImageUrl] = useState(null)
  const [palette, setPalette] = useState([])

  async function handleImage(file) {
    if (imageUrl) URL.revokeObjectURL(imageUrl)
    setImageUrl(URL.createObjectURL(file))

    const pixels = await getPixels(file)
    setPalette(extractPalette(pixels))
  }

  return (
    <main className="app">
      <h1>Palette Ripper</h1>
      <Dropzone onImage={handleImage} />
      {imageUrl && (
        <img className="preview" src={imageUrl} alt="Imagen subida" />
      )}
      {palette.length > 0 && <PaletteGrid palette={palette} />}
    </main>
  )
}
