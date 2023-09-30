import ItemList from "../components/itemListConteiner/ItemList";
import LoadSpinner from "../components/loadSpinner/LoadSpinner";
import { useProductList } from "../hooks/useProductList";

function ItemListContainer({ greeting }) {
  const { products, loading } = useProductList();

  return (
    <div>
      {loading ? (
        <LoadSpinner />
      ) : (
        <h1 className='text-center mt-5'>{greeting}</h1>
      )}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
