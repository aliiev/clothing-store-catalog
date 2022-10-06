import Avatar from '../../images/avatar.jpg'
import { Chevron } from '../../images/icons/'

export default function ProfileDropdown() {
  return (
    <div className="dropdown">
      <button className="btn dropdown profile-dropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img className="rounded-circle profile-picture" src={Avatar} width="32" height="32" alt="Фото профілю" />
        <img src={Chevron} alt="⌄" />
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        <li className="dropdown-header text-uppercase">Профіль</li>
        <li className="dropdown-item">Профіль</li>
      </ul>
    </div>
  )
}
