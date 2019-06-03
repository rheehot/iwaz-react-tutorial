import React, { useState } from 'react';

function TestInput() {
  const [value, setValue] = useState("");

  return (
    <>
      <input value={value} onChange={(e) => { setValue(e.target.value) }}>
      </input>

      <button onClick={() => alert(value)}>
        {value} 값 출력하기!
      </button>

      {value === '123123' && <p> 123123을 입력했음!!!</p>}
    </>
  )
}

export default TestInput;