import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className='contenedor-productos'>
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ItemList;
