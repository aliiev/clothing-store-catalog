export default function Pagination() {
  return (
    <nav aria-label="Навігація">
      <ul className="pagination justify-content-center align-items-center">
        <li className="page-item"><a className="page-link" href="/">Попередня</a></li>
        <li className="page-item"><a className="page-link" href="/">1</a></li>
        <li className="page-item active" aria-current="page"><a className="page-link" href="/">2</a></li>
        <li className="page-item"><a className="page-link" href="/">3</a></li>
        <li className="page-item d-none d-md-block"><a className="page-link" href="/">4</a></li>    
        <li className="page-item d-none d-md-block"><a className="page-link" href="/">5</a></li>
        <li className="page-item d-none d-md-block"><a className="page-link" href="/">6</a></li>
        <li className="page-item d-none d-md-block"><a className="page-link" href="/">7</a></li>
        <li className="page-item d-none d-md-block"><a className="page-link" href="/">8</a></li>
        <li className="page-item"><a className="page-link" href="/">Наступна</a></li>
      </ul>
    </nav>
  )
}
