import { Navbar, Categories, PageHeader } from './components'
import './styles/App.scss'

export default function App() {
  return (
    <>
      <Navbar />
      <Categories />
      <PageHeader title="Каталог одягу" />
    </>
  )
}
