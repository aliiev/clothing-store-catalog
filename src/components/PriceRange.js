import { Range, getTrackBackground } from 'react-range'

export default function PriceRange({ step = 1, min = 0, max = 100, values = [25, 50], onChange }) {
  return (
    <div className="range">
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={e => onChange(e)}
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
