export function extractPalette(pixels, count = 6, step = 32) {
  const buckets = new Map()
  for (let i = 0; i < pixels.length; i += 4) {
    const r = pixels[i]
    const g = pixels[i + 1]
    const b = pixels[i + 2]
    const a = pixels[i + 3]
    if (a < 128) continue
    const half = step / 2
    const rKey = Math.floor(r / step) * step + half
    const gKey = Math.floor(g / step) * step + half
    const bKey = Math.floor(b / step) * step + half

    const key = `${rKey},${gKey},${bKey}`
    buckets.set(key, (buckets.get(key) || 0) + 1)
  }
  return [...buckets.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([key, total]) => {
      const [r, g, b] = key.split(',').map(Number)
      return { r, g, b, share: total }
    })
}
