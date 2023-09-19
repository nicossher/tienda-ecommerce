import Spinner from "react-bootstrap/Spinner";

function LoadSpinner() {
  return (
    <div className='d-flex spinner'>
      <h1>Loading... </h1>
      <Spinner animation='border' />;
    </div>
  );
}

export default LoadSpinner;
