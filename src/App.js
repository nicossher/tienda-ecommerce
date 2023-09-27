import "./App.css";
import Layout from "./views/Layout";
import ItemListConteiner from "./views/ItemListConteiner";
import ItemDetailContainer from "./views/ItemDetailContainer";

function App() {
  return (
    <>
      <Layout>
        <ItemListConteiner greeting='HOLA MUNDO!' />
        <ItemDetailContainer />
      </Layout>
    </>
  );
}

export default App;
