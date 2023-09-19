import BtnCarrito from "./BtnCarrito";

const Item = ({ pictureUrl, title, price, stock }) => {
  return (
    <div className='card container mt-5'>
      <img src={pictureUrl} className='card-img-top mt-2' alt={title} />
      <div className='card-body'>
        <h5 className='card-title text-center'>{title}</h5>
        <p className='card-text text-center'>Precio: €{price}</p>
        <BtnCarrito stock={stock} />
      </div>
    </div>
  );
};

export default Item;
