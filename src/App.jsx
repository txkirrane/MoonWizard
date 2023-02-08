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
      <p>Built by Thomas, with &#128150;</p>
      <a href='https://ko-fi.com/L3L4IK3HU' target='_blank'><img height='36' style={{border: "0px", height: "36px"}} src='https://storage.ko-fi.com/cdn/kofi1.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
    </div>
  )
}

export default App
