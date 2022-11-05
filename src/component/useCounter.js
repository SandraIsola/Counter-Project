import  { useState } from 'react';

 
const useCounter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }

const reset = () => {
  setCount(0)
  }

 // To get the setValue function
  const handleChange = event => {
    let num=Number(event.target.value)
    setCount(num);

    console.log('value is:', event.target.value);
  };
return {
  count, increment, decrement, reset, handleChange
}
}

  
  
  export default useCounter;