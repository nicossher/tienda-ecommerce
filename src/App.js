import "./App.css";
import Layout from "./views/Layout";
import ItemListConteiner from "./views/ItemListConteiner";
import ItemDetailContainer from "./views/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
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
            <Route path='*' element={<h1>NO EXISTE LA RUTA</h1>} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
