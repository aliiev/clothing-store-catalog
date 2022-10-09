import { Navbar, Categories, PageHeader, Select, Sidebar, Card } from './components'
import { products } from './data/products'
import './styles/App.scss'

export default function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <PageHeader title="Каталог одягу" />
      <section className="container filters-section">
        <div className="d-flex justify-content-between">
          <h3 className="title">Фільтри</h3>
          <div className="d-flex align-items-center sort-select">
            <span className="d-none d-md-block label">Сортувати за:</span>
            <Select />
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <Sidebar />
          </div>
          <div className="col-12 col-md-8 col-lg-9">
            <div className="row g-24">
              {products.map((product, i) => (
                <div key={i} className="col-12 col-md-6 col-lg-4">
                  <Card
                    title={product.title}
                    brand={product.brand}
                    img={product.img}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    badge={product.badge}
                    tag={product.tag}
                    location={product.location}
                    author={product.author} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
