import { MapPin, Like } from '../images/icons/'

export default function Card({ img, title, brand, price, oldPrice, location, author, badge  }) {
  return (
    <div className="card">
      <div className="card-header position-relative">
        <button className="btn btn-like">
          <img src={Like} height="16" alt="Зберегти" />
        </button>
        <img src={img} alt="Product" />
        { badge && <span className="badge text-uppercase">{badge}</span>}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-uppercase text-muted">{brand}</h6>
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span className="text-decoration-line-through old-price">{oldPrice}</span>
            <span className="price">{price}</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <div className="flex align-items-center">
              <img src={MapPin} height="10" alt="Місто" />
              <span className="location">{location}</span>
            </div>
            <div className="flex align-items-center">
              <img className="rounded-circle object-fit-cover" src={author.img} width="20" height="20" alt={author.name} />
              <span className="username">{author.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
