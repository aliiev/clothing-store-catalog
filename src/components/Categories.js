export default function Categories() {
  const links = ['Головна', 'Каталог', 'Жінкам', 'Чоловікам', 'Дитячі речі', 'Аукціон', 'Бренди', 'Акції', 'Аутентифікація', 'Блог']

  return (
    <div className="border-bottom">
      <div className="container">
        <ul className="nav flex-nowrap overflow-auto categories-nav">
          {links.map((link, i) => (
            <li key={i} className="nav-item">
              <a className={`nav-link ${link === 'Каталог' ? 'active' : ''}`} href="/">{link}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
