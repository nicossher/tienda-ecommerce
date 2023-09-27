import { useState, useEffect } from "react";
import { getProducts } from "../asyncMock";
import ItemList from "../components/itemListConteiner/ItemList";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";

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
      {loading ? (
        <LoadSpinner />
      ) : (
        <h1 className='text-center mt-5'>{greeting}</h1>
      )}
      <ItemList products={products} />
    </>
  );
}

export default ItemListContainer;
