const products = [
  {
    id: 1,
    title: "Camiseta Nike NBA Classic Brokling Nets",
    price: 49.99,
    stock: 3,
    pictureUrl:
      "https://images.footballfanatics.com/brooklyn-nets/brooklyn-nets-nike-classic-edition-swingman-jersey-white-patty-mills-unisex_ss4_p-13364122+pv-1+u-117qe2jytvisr9z5dlsf+v-106b4359b6ab47a98e8a4b7c395a6459.jpg?_hv=2&w=600",
    category: "Camisetas",
    descripcion:
      "Camiseta clásica del equipo Brokling Nets de la NBA fabricada por Nike. Hecha de algodón suave y cómodo, perfecta para lucir tu equipo favorito en la cancha.",
  },
  {
    id: 2,
    title: "Zapatillas Adidas Pro Bounce",
    price: 129.99,
    stock: 0,
    pictureUrl:
      "https://www.tradeinn.com/f/13720/137209681/adidas-zapatillas-baloncesto-pro-bounce.jpg",
    category: "Zapatillas",
    descripcion:
      "Las zapatillas Adidas Pro Bounce son ideales para jugadores de baloncesto que buscan un rendimiento excepcional y comodidad durante todo el juego.",
  },
  {
    id: 3,
    title: "Shorts Under Armour Court",
    price: 34.99,
    stock: 2,
    pictureUrl:
      "https://media.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/s/h/short-de-basquet-under-armour-10-baseline-court-negro-700021351285002-1.jpg",
    category: "Shorts",
    descripcion:
      "Shorts de baloncesto diseñados por Under Armour para proporcionar libertad de movimiento en la cancha. Fabricados con tela transpirable de alta calidad.",
  },
  {
    id: 4,
    title: "Camiseta Nike LeBron James",
    price: 59.99,
    stock: 2,
    pictureUrl:
      "https://www.opensports.com.ar/media/catalog/product/cache/6f91ed87555a15260d810a895c116072/C/W/CW3669-738_0_7.jpg",
    category: "Camisetas",
    descripcion:
      "Camiseta oficial de LeBron James con el logotipo de su línea. Hecha de materiales de rendimiento para una comodidad superior en la cancha.",
  },
  {
    id: 5,
    title: "Zapatillas Jordan 1 Retro",
    price: 179.99,
    stock: 1,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROt3ReumYxSo7MqtPgW0ffnXOgrkfutQK8WhiIlWaqNxXn99xm_cDKmu2sxizwBqNJiNs&usqp=CAU",
    category: "Zapatillas",
    descripcion:
      "Las icónicas zapatillas Air Jordan 1 Retro, un clásico atemporal con un diseño de alto rendimiento y estilo inigualable.",
  },
  {
    id: 6,
    title: "Shorts Nike Elite",
    price: 44.99,
    stock: 3,
    pictureUrl: "https://i.ebayimg.com/images/g/D~wAAOSwrXhf5nvh/s-l1600.jpg",
    category: "Shorts",
    descripcion:
      "Shorts Nike Elite diseñados para jugadores de baloncesto de élite. Con tecnología de transpiración y comodidad superior.",
  },
  {
    id: 7,
    title: "Camiseta Adidas NBA All-Star",
    price: 69.99,
    stock: 2,
    pictureUrl:
      "https://24segons.es/157340-large_default/camiseta-larry-bird-all-star-east-1985-white-authentic.jpg",
    descripcion:
      "Camiseta oficial de la NBA con el logotipo del All-Star Game. Ideal para los fanáticos que quieren mostrar su apoyo a las estrellas de la liga.",
  },
  {
    id: 8,
    title: "Zapatillas Puma Clyde Court",
    price: 119.99,
    stock: 1,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVoCm9ScukaeeVYyLzWYd305cohLakEUOtCw&usqp=CAU",
    category: "Zapatillas",
    descripcion:
      "Las zapatillas Puma Clyde Court son conocidas por su estilo y rendimiento. Diseñadas para dominar la cancha con estilo.",
  },
  {
    id: 9,
    title: "Shorts Reebok Cross-Over",
    price: 29.99,
    stock: 5,
    pictureUrl:
      "https://media.purehockey.com/images/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_400,h_400/products/39487/11/131375/bauer-crossover-training-shorts-youth",
    category: "Shorts",
    descripcion:
      "Shorts de baloncesto Reebok Cross-Over con un diseño moderno y tejido transpirable que te mantendrá fresco en la cancha.",
  },
  {
    id: 10,
    title: "Camiseta Under Armour Street",
    price: 54.99,
    stock: 0,
    pictureUrl:
      "https://i.ebayimg.com/thumbs/images/g/FVsAAOSwXcRlCguq/s-l640.jpg",
    category: "Camisetas",
    descripcion:
      "Camiseta Under Armour Street con un diseño urbano y moderno. Fabricada con materiales de alto rendimiento para jugadores de baloncesto.",
  },
  {
    id: 11,
    title: "Zapatillas Converse Chuck Taylor",
    price: 79.99,
    stock: 5,
    pictureUrl:
      "https://s3.sa-east-1.amazonaws.com/www.vaypol.com.ar/variants/rkgvmlezrset0mmz1v5hmnumlsv3/c77c2a06864ac9aca38dc5bd9371de015471edcdbf322dfb14411689bf968ae5",
    category: "Zapatillas",
    descripcion:
      "Las clásicas zapatillas Converse Chuck Taylor, un icono del estilo urbano y la comodidad en la cancha.",
  },
  {
    id: 12,
    title: "Shorts Nike Dunk Style",
    price: 39.99,
    stock: 3,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dxgtHHWFmnmwX78CVlaN6v3GSz9PQGLo_kRsB6jBhVmwz91XES8BKqTDZezSnrmbHSo&usqp=CAUg",
    category: "Shorts",
    descripcion:
      "Shorts Nike Dunk Style inspirados en el baloncesto callejero. Combina estilo y rendimiento en la cancha.",
  },
  {
    id: 13,
    title: "Camiseta Adidas Harden MVP",
    price: 64.99,
    stock: 2,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHNQolBXgRluv1dRhD_ad4wEco4EWhaKahA&usqp=CAU",
    category: "Camisetas",
    descripcion:
      "Camiseta Adidas Harden MVP con el logotipo del Jugador Más Valioso. Para los seguidores de James Harden y su estilo de juego único.",
  },
  {
    id: 14,
    title: "Zapatillas Under Armour Curry 8",
    price: 139.99,
    stock: 0,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblYhIIn6WBlH3i37jilrRbAXKM6gEd3xBFIjXX3ZbPM7wqv1DBd2WsKQMCi4B-5z17O8&usqp=CAU",
    category: "Zapatillas",
    descripcion:
      "Las zapatillas Under Armour Curry 8, diseñadas en colaboración con Stephen Curry, ofrecen un rendimiento de élite en la cancha.",
  },
  {
    id: 15,
    title: "Shorts Adidas Streetstyle",
    price: 49.99,
    stock: 4,
    pictureUrl:
      "https://m.media-amazon.com/images/I/41ycC481UuL._AC_SY350_.jpg",
    category: "Shorts",
    descripcion:
      "Shorts Adidas Streetstyle con un diseño urbano y tejido resistente. Perfectos para un juego casual o para lucir un estilo fresco.",
  },
  {
    id: 16,
    title: "Camiseta Puma Retro",
    price: 45.99,
    stock: 3,
    pictureUrl:
      "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_706,h_706/global/539246/01/fnd/ARG/fmt/png",
    category: "Camisetas",
    descripcion:
      "Camiseta Puma Retro con un diseño inspirado en la moda de los años 80. Combina estilo y comodidad en la cancha.",
  },
  {
    id: 17,
    title: "Zapatillas Reebok Classic",
    price: 69.99,
    stock: 2,
    pictureUrl:
      "https://reebokarg.vtexassets.com/arquivos/ids/177216-800-800?v=638213802794600000&width=800&height=800&aspect=true",
    category: "Zapatillas",
    descripcion:
      "Las zapatillas Reebok Classic son una elección atemporal con un diseño retro y comodidad duradera para jugar al baloncesto.",
  },
  {
    id: 18,
    title: "Shorts Jordan Flight",
    price: 54.99,
    stock: 1,
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw6QRvOspe7GlHtAgjvFgRx5GVaYsqHx1r2r8sooUkiiYmEVCObs0B4bEjKHGZ-7zrZOM&usqp=CAU",
    category: "Shorts",
    descripcion:
      "Shorts Jordan Flight diseñados para volar en la cancha. Inspirados en el legado de Michael Jordan y su estilo de juego.",
  },
  {
    id: 19,
    title: "Camiseta Nike Team USA",
    price: 79.99,
    stock: 5,
    pictureUrl:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f735d029-2fd9-4d19-be00-70ddaab639f9/jersey-de-b%C3%A1squetbol-usa-road-authentic-P7GQ75.png",
    category: "Camisetas",
    descripcion:
      "Camiseta oficial del equipo nacional de baloncesto de EE. UU. Hecha con materiales de alto rendimiento para representar a tu país en la cancha.",
  },
  {
    id: 20,
    title: "Zapatillas New Balance Hoops",
    price: 89.99,
    stock: 3,
    pictureUrl: "https://trcmnbco.s3.amazonaws.com/BB2WYFS3_1.jpg",
    category: "Zapatillas",
    descripcion:
      "Zapatillas New Balance Hoops diseñadas para una comodidad excepcional y un rendimiento óptimo en la cancha de baloncesto.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    resolve(products.filter((product) => product.category == categoryId));
  });
};

export const getItem = (itemId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == itemId));
    }, 1000);
  });
};
