export default function IconDropdown({ title, icon, count, active = false, children }) {
  return (
    <div className="dropdown">
      <button className="btn dropdown icon-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <div className="position-relative">
          <img src={icon} width="24" alt={title} />
          <span className={`position-absolute top-0 start-100 translate-middle badge ${active ? 'active' : ''}`}>{count}</span>
        </div>
      </button>
      {children}
    </div>
  )
}
