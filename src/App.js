import { Navbar, Categories, PageHeader, Select } from './components'
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
    </>
  )
}
