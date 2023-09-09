import { useState } from "react";

function ItemListConteiner() {
  const [count, setCount] = useState(0);

  return (
    <div className='d-flex justify-content-center bg-warning'>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default ItemListConteiner;
