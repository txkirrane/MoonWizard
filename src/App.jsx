import { useState } from 'react'
import { CompactPicker } from 'react-color'

function App() {
  
  const [colors, setColors] = useState({
    bg: '#005',
    text: '#DDD'
  })

  const url = `https://txkirrane.github.io/MoonPhases/?bgcolor=${colors.bg.replace('#', '%23')}&textcolor=${colors.text.replace('#', '%23')}`

  return (
    <div className='app'>
      <h1>Moon Wizard</h1>
      <div className="frame">
        <iframe src={url} />
        <div className='pickers'>
          <h2>Background Color</h2>
          <CompactPicker
            color={colors.bg}
            onChange={(color) => setColors({...colors, bg: color.hex})}
            disableAlpha
          />
          <h2>Text Color</h2>
          <CompactPicker
            color={colors.text}
            onChange={(color) => setColors({...colors, text: color.hex})}
            disableAlpha
          />
        </div>
      </div>
      <code onClick={() => navigator.clipboard.writeText(url)}>Click here to copy embed link</code>
    </div>
  )
}

export default App
