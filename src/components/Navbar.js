import { SearchBar } from './'
import { LanguageDropdown, IconDropdown, ProfileDropdown } from './dropdowns/'
import Logo from '../images/logo.svg'
import { Heart, MessageBulb, ShoppingCart } from '../images/icons/'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container position-relative">
        <span className="navbar-divider border-bottom"></span>
        <a className="navbar-brand" href="/">
          <img src={Logo} height="20" alt="monvalise" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Відкрити меню">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="d-flex flex-column flex-lg-row justify-content-end align-items-stretch align-items-lg-center w-100 mt-2 mt-lg-0">
            <SearchBar />
            <div className="d-flex justify-content-between align-items-center dropdown-nav">
              <LanguageDropdown />
              <div className="d-flex align-items-center">
                <IconDropdown title="Збережене" icon={Heart} count="8">
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li className="dropdown-header text-uppercase">Збережене</li>
                    <li className="dropdown-item">Збережене</li>
                  </ul>
                </IconDropdown>
                <IconDropdown title="Повідомлення" icon={MessageBulb} count="3" active={true}>
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li className="dropdown-header text-uppercase">Повідомлення</li>
                    <li className="dropdown-item">Повідомлення</li>
                  </ul>
                </IconDropdown>
                <IconDropdown title="Кошик" icon={ShoppingCart} count="3">
                  <ul className="dropdown-menu dropdown-menu-lg-end">
                    <li className="dropdown-header text-uppercase">Кошик</li>
                    <li className="dropdown-item">Кошик</li>
                  </ul>
                </IconDropdown>
              </div>
              <ProfileDropdown />
            </div> 
          </div>
        </div>
      </div>
    </nav>
  )
}
