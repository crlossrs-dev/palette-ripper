import { useRef, useState } from 'react'

export default function Dropzone({ onImage }) {
  const input = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [error, setError] = useState('')

  function handleFile(file) {
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('That file is not an image')
      return
    }
    setError('')
    onImage(file)
  }

  function handleDrop(e) {
    e.preventDefault()
    setIsDragging(false)
    handleFile(e.dataTransfer.files[0])
  }

  function handleDragOver(e) {
    e.preventDefault()
    setIsDragging(true)
  }
  return (
    <div
      className={`dropzone ${isDragging ? 'dropzone--active' : ''}`}
      onClick={() => input.current.click()}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      <input
        ref={input}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => handleFile(e.target.files[0])}
      />
      <p>Drop an image here or click to select one</p>
      {error && <p className="dropzone__error">{error}</p>}
    </div>
  )
}
