import { ChevronSelect } from '../images/icons/'

export default function Select() {
  return (
    <div className="position-relative sort-select">
      <select className="form-select" defaultValue="замовчування" aria-label="Сортувати">
        <option value="замовчування">За замовчуванням</option>
      </select>
      <span className="select-chevron">
        <img src={ChevronSelect} alt="⌄" />
      </span>
    </div>
  )
}
