export default function Checkbox({ id, title, count, checked = false }) {
  return (
    <div className="form-check">
      <input className="form-check-input cursor-pointer" id={`checkbox-${id}`} type="checkbox" defaultChecked={checked} />
      <label className="form-check-label w-100" htmlFor={`checkbox-${id}`}>
        {title}
        {count && <span className="float-end count">({count})</span>}
      </label>
    </div>
  )
}
