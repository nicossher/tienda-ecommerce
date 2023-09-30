import { Link } from "react-router-dom";

const BtnDetalle = ({ path }) => {
  return (
    <>
      <button className='btn btn-primary mb-3 container text-center'>
        <Link
          className='text-white link-offset-2 link-underline link-underline-opacity-0'
          to={path}
        >
          VER DETALLE
        </Link>
      </button>
    </>
  );
};

export default BtnDetalle;
