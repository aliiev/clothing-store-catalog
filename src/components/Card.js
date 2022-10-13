import { useState } from 'react'
import formatThousands from 'format-thousands'
import { MapPin, Like } from '../images/icons/'

export default function Card({ title, brand, img, price, oldPrice, badge, tag, location, author }) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="card h-100">
      <div className="card-header position-relative">
        <button className="btn btn-like" onClick={() => setLiked(!liked)}>
          <img src={Like} height="16" alt="Зберегти" />
        </button>
        <img src={img} alt="Product" />
        { tag && <span className="badge tag text-lowercase">{tag}</span> }
        { badge && <span className="badge text-uppercase">{badge}</span>}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-uppercase text-muted">{brand}</h6>
        <h5 className="card-title">{title}</h5>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span className="text-decoration-line-through old-price">{formatThousands(oldPrice)}</span>
            <span className="price">{formatThousands(price)}</span>
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
