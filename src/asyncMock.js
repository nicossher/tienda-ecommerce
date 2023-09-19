const products = [
  {
    id: 1,
    title: "Zapatillas Nike Air Max 270",
    price: 129.99,
    stock: 5,
    pictureUrl:
      "https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/F/D/FD2764-001_0_12.jpg",
    category: "zapatilla",
    description:
      "Zapatillas deportivas Nike Air Max 270 con amortiguación y comodidad excepcionales.",
  },
  {
    id: 2,
    title: "Remera Adidas Originals Trefoil",
    price: 29.99,
    stock: 10,
    pictureUrl:
      "https://www.blowland.com.ar/1933-thickbox_default/adidas-originals-remera-lifestyle-hombre-trefoil-azul-blanco-.jpg",
    category: "remera",
    description:
      "Remera clásica de Adidas Originals con el icónico logotipo del trébol en el pecho.",
  },
  {
    id: 3,
    title: "Shorts Under Armour HeatGear",
    price: 39.99,
    stock: 0,
    pictureUrl:
      "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-under-armour-running-launch-5-pulgadas-negro-700021361492001-1.jpg",
    category: "short",
    description:
      "Shorts de rendimiento Under Armour HeatGear ideales para entrenamientos intensivos.",
  },
  {
    id: 4,
    title: "Zapatillas Converse Chuck Taylor All Star",
    price: 49.99,
    stock: 7,
    pictureUrl:
      "https://woker.vtexassets.com/arquivos/ids/178124-800-800?v=637388078563630000&width=800&height=800&aspect=true",
    category: "zapatilla",
    description:
      "Zapatillas clásicas Converse Chuck Taylor All Star en un diseño atemporal.",
  },
  {
    id: 5,
    title: "Remera Puma Essential Logo",
    price: 24.99,
    stock: 2,
    pictureUrl: "puma_essential_remera.jpg",
    category: "remera",
    description:
      "Remera Puma Essential con el logotipo de Puma en el pecho, perfecta para el uso diario.",
  },
  {
    id: 6,
    title: "Shorts Nike Dri-FIT",
    price: 34.99,
    stock: 8,
    pictureUrl: "nike_dri_fit_shorts.jpg",
    category: "short",
    description:
      "Shorts Nike Dri-FIT con tecnología de absorción de sudor para mantenerte fresco y seco.",
  },
  {
    id: 7,
    title: "Zapatillas New Balance 574",
    price: 79.99,
    stock: 1,
    pictureUrl: "new_balance_574.jpg",
    category: "zapatilla",
    description:
      "Zapatillas New Balance 574 con estilo retro y comodidad duradera.",
  },
  {
    id: 8,
    title: "Remera Reebok Classic Vector",
    price: 27.99,
    stock: 10,
    pictureUrl: "reebok_classic_remera.jpg",
    category: "remera",
    description:
      "Remera Reebok Classic Vector con un diseño icónico y estilo deportivo.",
  },
  {
    id: 9,
    title: "Shorts Adidas 3-Stripes",
    price: 31.99,
    stock: 3,
    pictureUrl: "adidas_3_stripes_shorts.jpg",
    category: "short",
    description:
      "Shorts Adidas 3-Stripes con las clásicas franjas de Adidas en los laterales.",
  },
  {
    id: 10,
    title: "Zapatillas Vans Old Skool",
    price: 59.99,
    stock: 6,
    pictureUrl: "vans_old_skool.jpg",
    category: "zapatilla",
    description:
      "Zapatillas Vans Old Skool con un aspecto retro y suela vulcanizada.",
  },
  {
    id: 11,
    title: "Remera Champion Script Logo",
    price: 22.99,
    stock: 0,
    pictureUrl: "champion_script_remera.jpg",
    category: "remera",
    description: "Remera Champion con el logotipo Script Logo en el pecho.",
  },
  {
    id: 12,
    title: "Shorts Puma Collective",
    price: 36.99,
    stock: 4,
    pictureUrl: "puma_collective_shorts.jpg",
    category: "short",
    description:
      "Shorts Puma Collective ideales para actividades al aire libre.",
  },
  {
    id: 13,
    title: "Zapatillas Reebok Classic Leather",
    price: 69.99,
    stock: 9,
    pictureUrl: "reebok_classic_leather.jpg",
    category: "zapatilla",
    description:
      "Zapatillas Reebok Classic Leather con un estilo retro y comodidad superior.",
  },
  {
    id: 14,
    title: "Remera Nike Sportswear",
    price: 26.99,
    stock: 0,
    pictureUrl: "nike_sportswear_remera.jpg",
    category: "remera",
    description: "Remera Nike Sportswear para un look deportivo y casual.",
  },
  {
    id: 15,
    title: "Shorts Under Armour Tech",
    price: 32.99,
    stock: 5,
    pictureUrl: "under_armour_tech_shorts.jpg",
    category: "short",
    description:
      "Shorts Under Armour Tech con tejido de secado rápido y comodidad excepcional.",
  },
  {
    id: 16,
    title: "Zapatillas Adidas Superstar",
    price: 89.99,
    stock: 2,
    pictureUrl: "adidas_superstar.jpg",
    category: "zapatilla",
    description:
      "Zapatillas Adidas Superstar con la famosa puntera de concha y estilo clásico.",
  },
  {
    id: 17,
    title: "Remera Fila Logo",
    price: 28.99,
    stock: 7,
    pictureUrl: "fila_logo_remera.jpg",
    category: "remera",
    description:
      "Remera Fila con el logotipo de Fila en el pecho para un look vintage.",
  },
  {
    id: 18,
    title: "Shorts Nike Pro",
    price: 37.99,
    stock: 10,
    pictureUrl: "nike_pro_shorts.jpg",
    category: "short",
    description: "Shorts Nike Pro de alto rendimiento con un ajuste cómodo.",
  },
  {
    id: 19,
    title: "Zapatillas Puma Suede Classic",
    price: 54.99,
    stock: 0,
    pictureUrl: "puma_suede_classic.jpg",
    category: "zapatilla",
    description:
      "Zapatillas Puma Suede Classic con un aspecto retro y comodidad premium.",
  },
  {
    id: 20,
    title: "Remera Vans Off The Wall",
    price: 25.99,
    stock: 3,
    pictureUrl: "vans_off_the_wall_remera.jpg",
    category: "remera",
    description:
      "Remera Vans Off The Wall con el logotipo icónico para los amantes del skate.",
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export default getProducts;
