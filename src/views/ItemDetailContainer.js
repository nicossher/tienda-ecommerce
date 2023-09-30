import ItemDetail from "../components/itemDetailConteiner/ItemDetail";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import { useParams } from "react-router-dom";
import { useItemById } from "../hooks/useItemById";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const { product, loading } = useItemById(itemId);

  if (loading) {
    return <LoadSpinner />;
  }

  if (!product) {
    return (
      <h1 className='d-flex container m-5'>
        ERROR 404! "PRODUCTO NO ENCONTRADO"
      </h1>
    );
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
