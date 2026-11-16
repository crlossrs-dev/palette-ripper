import { useState } from 'react'
import Dropzone from './components/Dropzone'
import './App.css'

export default function App() {
  const [imageUrl, setImageUrl] = useState(null)

  function handleImage(file) {
    if (imageUrl) URL.revokeObjectURL(imageUrl)
    setImageUrl(URL.createObjectURL(file))
  }

  return (
    <main className="app">
      <h1>Palette Ripper</h1>
      <Dropzone onImage={handleImage} />
      {imageUrl && (
        <img className="preview" src={imageUrl} alt="Imagen subida" />
      )}
    </main>
  )
}
