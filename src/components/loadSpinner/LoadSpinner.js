import Spinner from "react-bootstrap/Spinner";

function LoadSpinner({ text }) {
  return (
    <div className='d-flex spinner justify-content-center m-auto'>
      <h1>{text} </h1>
      <Spinner animation='border' />;
    </div>
  );
}

export default LoadSpinner;
