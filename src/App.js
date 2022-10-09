import { Navbar, Categories, PageHeader, Select, Sidebar, Card } from './components'
import { Product0Img } from './images/products/'
import { LoveBrandImg } from './images/users/'
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
          <div className="col-12 col-md-5 col-lg-3">
            <Sidebar />
          </div>
          <div className="col-12 col-md-7 col-lg-9">
            <div className="row">
              <div className="col-12 col-md-4">
                <Card
                  img={Product0Img}
                  title="Темно-сині джинси Louis Vuitton"
                  brand="Louis Vuitton"
                  price="3 799"
                  oldPrice="5 499"
                  location="Херсон"
                  author={{name: 'LoveBrand', img: LoveBrandImg}}
                  badge="Топ" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
