import { useState, useEffect } from "react";
import { getItem } from "../asyncMock";
import ItemDetail from "../components/itemDetailConteiner/ItemDetail";

function ItemDetailContainer({ idSelected = 1 }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getItem(idSelected)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <ItemDetail {...product} />
    </>
  );
}

export default ItemDetailContainer;
