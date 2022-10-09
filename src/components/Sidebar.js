import { AccordionItem, PriceRange, Checkbox } from './'

export default function Sidebar() {
  return (
    <div className="accordion" id="accordionFilters">
      <AccordionItem id="categories" title="Категорії" />
      
      <AccordionItem id="price" title="Ціна" expanded={true}>
        <div className="row mb-34">
          <div className="col">
            <PriceRange max={100000} defaultValues={[0, 50000]} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <input className="form-control" id="input-price-from" type="text" placeholder="Ціна" />
              <label htmlFor="input-price-from">Від</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input className="form-control" id="input-price-to" type="text" placeholder="Ціна" />
              <label htmlFor="input-price-to">До</label>
            </div>
          </div>
        </div>
      </AccordionItem>
      
      <AccordionItem id="seller" title="Продавець" />
      <AccordionItem id="brand" title="Бренд" />
      
      <AccordionItem id="sex" title="Стать" expanded={true}>
        <Checkbox id="women" title="Жінкам" checked={true} />
        <Checkbox id="men" title="Чоловікам" checked={true} />
        <Checkbox id="unisex" title="Унісекс" />
      </AccordionItem>
      
      <AccordionItem id="size" title="Розмір" />
      <AccordionItem id="color" title="Колір" />
      <AccordionItem id="material" title="Матеріал" />
      <AccordionItem id="season" title="Сезон" />
      <AccordionItem id="style" title="Стиль" />
    </div>
  )
}
