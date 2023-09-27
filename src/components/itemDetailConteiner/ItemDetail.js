import BtnCarrito from "./BtnCarrito";

const ItemDetail = ({
  id,
  pictureUrl,
  title,
  price,
  stock,
  description,
  category,
}) => {
  return (
    <div className='card container mt-5 mb-3 card-detail'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={pictureUrl}
            className='img-fluid rounded-start'
            alt={title}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <p className='card-text text-center fw-bold'>Precio: €{price}</p>
            <p className='card-text'>
              <small className='text-body-secondary'>
                Categoria: {category}
              </small>
            </p>
            <p className='card-text'>
              <small className='text-body-secondary'>
                Stock disponible: {stock}
              </small>
            </p>
            <BtnCarrito stock={stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
