import { Chevron } from '../../images/icons/'

export default function LanguageDropdown() {
  return (
    <div className="dropdown">
      <button className="btn dropdown lang-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <span className="dropdown-title">Укр</span>
        <img src={Chevron} alt="⌄" />
      </button>
      <ul className="dropdown-menu dropdown-menu-lg-end">
        <li><a className="dropdown-item" href="/">Українська</a></li>
        <li><a className="dropdown-item" href="/">English</a></li>
      </ul>
    </div>
  )
}
