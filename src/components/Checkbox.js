export default function Checkbox({ id, title, checked = false }) {
  return (
    <div className="form-check">
      <input className="form-check-input" id={`checkbox-${id}`} type="checkbox" defaultChecked={checked} />
      <label className="form-check-label" htmlFor={`checkbox-${id}`}>{title}</label>
    </div>
  )
}
