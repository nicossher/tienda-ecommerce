import "./App.css";
import Layout from "./views/Layout";
import ItemListConteiner from "./views/ItemListConteiner";
import ItemDetailContainer from "./views/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import CartView from "./views/cartView";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Layout>
            <Routes>
              <Route
                exact
                path='/'
                element={<ItemListConteiner greeting='Lista de productos' />}
              />
              <Route
                exact
                path='/category/:categoryId'
                element={<ItemListConteiner greeting={`Lista de productos`} />}
              />
              <Route
                exact
                path='/item/:itemId'
                element={<ItemDetailContainer />}
              />
              <Route exact path='/cart' element={<CartView />} />
              <Route
                exact
                path='/checkout'
                element={<h1>GRACIAS POR SU COMPRA!</h1>}
              />
              <Route path='*' element={<h1>NO EXISTE LA RUTA</h1>} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
