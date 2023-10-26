import ItemDetail from "../components/itemDetailConteiner/ItemDetail";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import { useParams } from "react-router-dom";
import { useItemById } from "../hooks/useItemById";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const { product, loading } = useItemById(itemId);

  if (loading) {
    return <LoadSpinner text='Loading...' />;
  }

  if (!product) {
    return (
      <div className='errorDiv'>
        <h1 className='d-flex container m-5'>
          ERROR 404! "PRODUCTO NO ENCONTRADO"
        </h1>
      </div>
    );
  }

  return (
    <div className='ItemDetailContainer'>
      <ItemDetail {...product} />
    </div>
  );
}

export default ItemDetailContainer;
