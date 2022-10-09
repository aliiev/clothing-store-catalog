import {
  Product0Img,
  Product1Img,
  Product2Img,
  Product3Img,
  Product4Img,
  Product5Img,
  Product6Img,
  Product7Img,
  Product8Img
} from '../images/products/'

import {
  LoveBrandImg,
  SellForMenImg,
  BrandearImg,
  AlexalexImg,
  SellBuyImg,
  DeevaSofiaImg
} from '../images/users/'

const authors = {
  loveBrand: {
    name: 'LoveBrand',
    img: LoveBrandImg
  },
  sellForMen: {
    name: 'Sell_For_Men',
    img: SellForMenImg
  },
  brandear: {
    name: 'Brandear',
    img: BrandearImg
  },
  alexalex: {
    name: 'Alexalex',
    img: AlexalexImg
  },
  sellBuy: {
    name: 'SellBuy',
    img: SellBuyImg
  },
  deevaSofia: {
    name: 'Deeva_Sofia',
    img: DeevaSofiaImg
  }
}

export const products = [{
  title: 'Темно-сині джинси Louis Vuitton',
  brand: 'Louis Vuitton',
  img: Product0Img,
  price: 3799,
  oldPrice: 5499,
  badge: 'ТОП',
  location: 'Херсон',
  author: authors.loveBrand
}, {
  title: 'Чорний піджак Thom Browne',
  brand: 'Thom Browne',
  img: Product1Img,
  price: 8599,
  oldPrice: 11999,
  badge: 'ТОП',
  location: 'Хмельницький',
  author: authors.sellForMen
}, {
  title: 'Вовняний піджак Canali',
  brand: 'Canali',
  img: Product2Img,
  price: 2599,
  oldPrice: 4999,
  location: 'Хмельницький',
  author: authors.sellForMen
}, {
  title: 'Клатч Louis Vuitton Limelight',
  brand: 'Louis Vuitton',
  img: Product3Img,
  price: 3499,
  oldPrice: 4999,
  location: 'Дніпро',
  author: authors.brandear
}, {
  title: 'Сумка з декором Elena Ghiselini',
  brand: 'Elena Ghiselini',
  img: Product4Img,
  price: 1599,
  oldPrice: 1999,
  tag: 'organic',
  location: 'Дніпро',
  author: authors.brandear
}, {
  title: 'Бомбер Acne на блискавці',
  brand: 'Acne',
  img: Product5Img,
  price: 4199,
  oldPrice: 5999,
  location: 'Київ',
  author: authors.alexalex
}, {
  title: 'Довга сукня Gucci',
  brand: 'Gucci',
  img: Product6Img,
  price: 8599,
  oldPrice: 11999,
  location: 'Рівне',
  author: authors.sellBuy
}, {
  title: 'Помаранчевий бомбер Woolrich',
  brand: 'Chanel',
  img: Product7Img,
  price: 1599,
  oldPrice: 1999,
  location: 'Кроповницький',
  author: authors.deevaSofia
}, {
  title: 'Салатове пальто Hache',
  brand: 'Hache',
  img: Product8Img,
  price: 4199,
  oldPrice: 5999,
  location: 'Київ',
  author: authors.loveBrand
}]
