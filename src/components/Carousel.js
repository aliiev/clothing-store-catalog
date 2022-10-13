import { ThumbsUp, Dress, Flower, Fire } from '../images/emoji/'

const slides = [{
  background: '#cbdcff',
  title: 'Брендовий верхній одяг від 899 грн',
  icons: [ThumbsUp, Dress],
  active: true
}, {
  background: '#ffdef3',
  title: 'Весняні знижки до 50%',
  icons: [Flower, Fire]
}]

export default function Carousel() {
  return (
    <div className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`carousel-item ${slide.active ? 'active' : ''} d-flex justify-content-center align-items-center`}
            style={{background: slide.background}}
            data-bs-interval="5000"
          >
            <div className="icon-row">
              <img src={slide.icons[0]} alt="*" />
              <img src={slide.icons[1]} alt="*" />
            </div>
            <h5 className="title">{slide.title}</h5>
          </div>
        ))}
      </div>
    </div>
  )
}
