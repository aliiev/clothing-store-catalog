export default function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, i) => {
          if (i + 1 !== items.length)
            return <li key={i} className="breadcrumb-item"><a href="/">{item}</a></li>
          else
            return <li className="breadcrumb-item active">{item}</li>
        })}
      </ol>
    </nav>
  )
}
