export default function AccordionItem({ id, title, expanded = false, children }) {
  return (
    <div className="accordion-item">
      <h3 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${!expanded ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={expanded}
          aria-controls={`collapse-${id}`}
        >
          {title}
        </button>
      </h3>
      <div
        className={`accordion-collapse collapse ${expanded ? 'show' : ''}`} 
        id={`collapse-${id}`}
        aria-labelledby={`heading-${id}`}
        data-bs-target="#accordionFilters"
      >
        <div className="accordion-body">
          {children}
        </div>
      </div>
    </div>
  )
}
