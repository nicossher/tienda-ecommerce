import { useState, useEffect } from "react";
import getProducts from "../asyncMock";
import ItemList from "./ItemList";
import LoadSpinner from "./LoadSpinner";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? <LoadSpinner /> : <h1>{greeting}</h1>}
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
