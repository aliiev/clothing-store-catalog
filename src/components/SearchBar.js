import { Search } from '../images/icons/'

export default function SearchBar() {
  return (
    <div className="d-flex flex-column flex-sm-row flex-grow-1 search-bar">
      <div className="position-relative flex-grow-1 search-input">
        <img className="position-absolute top-50 left-0 translate-middle-y form-icon" src={Search} alt="Пошук" />
        <input className="form-control" type="text" placeholder="Знайти речі або бренди" />
      </div>
      <button className="btn btn-darkgray">Додати товар</button>
    </div>
  )
}
