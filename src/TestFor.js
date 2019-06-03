import React from 'react';

function CustomButton(props) {
  let CustomButton = () => (<><br /><button onClick={() => { alert(`반복될 버튼 ${props.num} 을 클릭하셨습니다.`) }}>반복되는 버튼들 {props.num}</button></>);
  return <CustomButton></CustomButton>
}

function TestFor() {
  let CustomButtons2 = Array(10).fill('').map((ele, idx) => (<CustomButton key={idx} num={idx} />));
  return CustomButtons2;
}

export default TestFor;