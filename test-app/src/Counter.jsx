import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  //ini adalah fungsi increment
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count} </h2>
      <button onClick={increment}>Tambah</button>
    </div>
  )
}

export default Counter;
