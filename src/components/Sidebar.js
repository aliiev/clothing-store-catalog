import { AccordionItem, Checkbox } from './'

export default function Sidebar() {
  return (
    <div className="accordion" id="accordionFilters">
      <AccordionItem id="categories" title="Категорії" />
      <AccordionItem id="price" title="Ціна" expanded={true} />
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
