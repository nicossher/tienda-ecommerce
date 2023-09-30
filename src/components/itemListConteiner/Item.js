import BtnDetalle from "./BtnDetalle";

const Item = ({ id, pictureUrl, title, price, stock }) => {
  return (
    <div className='card card-product container mt-5'>
      <img src={pictureUrl} className='card-img-top mt-2' alt={title} />
      <div className='card-body'>
        <h5 className='card-title text-center'>{title}</h5>
        <p className='card-text text-center fw-bold'>Precio: €{price}</p>
        <p className='card-text text-center'>Stock disponible: {stock}</p>
      </div>
      <BtnDetalle path={`/item/${id}`} />
    </div>
  );
};

export default Item;
