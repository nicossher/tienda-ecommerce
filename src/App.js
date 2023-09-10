import "./App.css";
import NavBar from "./components/NavBar";
import ItemListConteiner from "./components/ItemListConteiner";

function App() {
  return (
    <>
      <NavBar />
      <ItemListConteiner greeting='HOLA MUNDO!' />
    </>
  );
}

export default App;
