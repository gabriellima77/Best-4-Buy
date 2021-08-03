import React, { useState } from 'react';

const Input = ()=> {
  const [value, setValue] = useState(0);
  const increase = ()=> setValue((prev)=> prev + 1);
  const decrease = ()=> setValue((prev)=> prev - 1);

  const changeValue = (e)=> setValue(e.target.value);

  return (
    <div>
      <button onClick={increase}>+</button>
      <input onChange={changeValue} type="text" value={value} />
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default Input;