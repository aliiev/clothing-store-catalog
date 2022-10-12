import { useState } from 'react'
import { Search, Close } from '../images/icons/'

export default function SearchBar() {
  const [value, setValue] = useState('')

  return (
    <div className="d-flex flex-column flex-sm-row flex-grow-1 search-bar">
      <div className="position-relative flex-grow-1 search-input">
        <img className="position-absolute top-50 start-0 translate-middle-y icon-search" src={Search} alt="Пошук" />
        <input
          className="form-control"
          type="text"
          placeholder="Знайти речі або бренди"
          value={value}
          onChange={e => setValue(e.target.value)} />
        <button
          className={`${!value ? 'd-none' : ''} btn position-absolute top-50 end-0 translate-middle-y icon-close`}
          onClick={() => setValue('')} 
        >
          <img src={Close} alt="Стерти"/>
        </button>
      </div>
      <button className="btn btn-darkgray search-btn">Додати товар</button>
    </div>
  )
}
