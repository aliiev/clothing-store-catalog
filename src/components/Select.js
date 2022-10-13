import { ChevronSelect } from '../images/icons/'

export default function Select({ label, value, onChange, children }) {
  return (
    <div className="position-relative select">
      <select className="form-select" value={value} aria-label={label} onChange={e => onChange(e.target.value)}>
        {children}
      </select>
      <span className="select-chevron">
        <img src={ChevronSelect} alt="⌄" />
      </span>
    </div>
  )
}
