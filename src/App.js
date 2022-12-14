import { useState } from 'react'
import { Carousel, Navbar, Categories, Breadcrumb, Select, Sidebar, Card, Pagination, Footer } from './components'
import { products } from './data/products'
import './styles/App.scss'

export default function App() {
  const [sorting, setSorting] = useState('default')

  const pricingSorting = (a, b) => {
    if (sorting === 'highest')
      return b.price - a.price
    else if (sorting === 'lowest')
      return a.price - b.price
    else
      return a.id - b.id
  }

  return (
    <>
      <Carousel />
      <Navbar />
      <Categories />

      <section className="container page-header">
        <Breadcrumb items={['Головна', 'Каталог одягу']} />
        <h2 className="title">Каталог одягу</h2>
      </section>
    
      <section className="container filters-section">
        <div className="d-flex justify-content-between">
          <h3 className="title">Фільтри</h3>
          <div className="d-flex align-items-center sorting-select">
            <span className="d-none d-md-block label">Сортувати за:</span>
            <Select label="Сортувати" value={sorting} onChange={value => setSorting(value)}>
              <option value="default">За замовчуванням</option>
              <option value="highest">Спочатку дорожче</option>
              <option value="lowest">Спочатку дешевше</option>
            </Select>
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
              {products.sort((a, b) => pricingSorting(a, b)).map((product) => (
                <div key={product.id} className="col-12 col-md-6 col-lg-4">
                  <Card product={product} />
                </div>
              ))}
            </div>
            <Pagination />
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  )
}
