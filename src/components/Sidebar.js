import { useState } from 'react'
import { AccordionItem, PriceRange, Checkbox } from './'

export default function Sidebar() {
  const [price, setPrice] = useState({
    from: 0,
    to: 50000
  })

  const validatePrice = (type, value) => {
    //onChange={e => setPrice({...price, to: e.target.value})} />
    if (!isNaN(value))
      if (value >= 0 && value <= 100000)
        if (type === 'to')
          setPrice({...price, to: value})
        else
          setPrice({...price, from: value})
    else
      return
  }

  return (
    <div className="accordion mb-3" id="accordionFilters">
      <AccordionItem id="categories" title="Категорії" />
      
      <AccordionItem id="price" title="Ціна" expanded={true}>
        <div className="row mb-34">
          <div className="col">
            <PriceRange
              max={100000}
              step={100}
              values={[price.from, price.to]}
              onChange={values => setPrice({from: values[0], to: values[1]})} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="input-price-from"
                type="text"
                placeholder="Ціна"
                value={price.from}
                onChange={e => validatePrice('from', e.target.value)} />
              <label htmlFor="input-price-from">Від</label>
            </div>
          </div>
          <div className="col">
            <div className="form-floating">
              <input
                className="form-control"
                id="input-price-to"
                type="text"
                placeholder="Ціна"
                value={price.to}
                onChange={e => validatePrice('to', e.target.value)} />
              <label htmlFor="input-price-to">До</label>
            </div>
          </div>
        </div>
      </AccordionItem>
      
      <AccordionItem id="seller" title="Продавець" />
      <AccordionItem id="brand" title="Бренд" />
      
      <AccordionItem id="sex" title="Стать" expanded={true}>
        <Checkbox id="women" title="Жінкам" count={64} checked={true} />
        <Checkbox id="men" title="Чоловікам" count={16} checked={true} />
        <Checkbox id="unisex" title="Унісекс" count={24} />
      </AccordionItem>
      
      <AccordionItem id="size" title="Розмір" />
      <AccordionItem id="color" title="Колір" />
      <AccordionItem id="material" title="Матеріал" />
      <AccordionItem id="season" title="Сезон" />
      <AccordionItem id="style" title="Стиль" />
    </div>
  )
}
