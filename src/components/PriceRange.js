import { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'

export default function PriceRange({ step = 1, min = 0, max = 100, defaultValues = [25, 50] }) {
  const [values, setValues] = useState(defaultValues)

  return (
    <div className="range">
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={values => setValues(values)}
        renderTrack={({props, children}) => (
          <div 
            {...props}
            className="range-track"
            style={{
              background: getTrackBackground({
                values,
                colors: ['#c4c7c7','#8e9192', '#c4c7c7'],
                min: min,
                max: max
              }) 
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({props}) => (
          <div {...props} className="range-thumb" />
        )}/>
    </div>
  )
}
