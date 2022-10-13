import formatThousands from 'format-thousands'
import { LikeBtn } from './'
import { MapPin } from '../images/icons/'

export default function Card({ product }) {
  return (
    <div className="card h-100">
      <div className="card-header position-relative">
        <LikeBtn />
        <img src={product.img} alt="Product" />
        { product.tag && <span className="badge tag text-lowercase">{product.tag}</span> }
        { product.badge && <span className="badge text-uppercase">{product.badge}</span>}
      </div>
      <div className="card-body">
        <h6 className="card-subtitle text-uppercase text-muted">{product.brand}</h6>
        <h5 className="card-title">{product.title}</h5>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-column">
            <span className="text-decoration-line-through old-price">{formatThousands(product.oldPrice)}</span>
            <span className="price">{formatThousands(product.price)}</span>
          </div>
          <div className="d-flex flex-column align-items-end">
            <div className="flex align-items-center">
              <img src={MapPin} height="10" alt="Місто" />
              <span className="location">{product.location}</span>
            </div>
            <div className="flex align-items-center">
              <img className="rounded-circle object-fit-cover" src={product.author.img} width="20" height="20" alt={product.author.name} />
              <span className="username">{product.author.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
