export default function PageHeader({ title }) {
  return (
    <section className="container page-header">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="/">Головна</a></li>
          <li className="breadcrumb-item active">Каталог одягу</li>
        </ol>
      </nav>
      <h2 className="title">{title}</h2>
    </section>
  )
}
