import  { useEffect, useState } from 'react';

const useCounter = () => {
  const key = "CounterApp:count";

  const [count, setCount] = useState(() => {
  let data = window.localStorage.getItem(key);
  if (data === null) {
    return 0;
  }

  try {
    return JSON.parse(data);
  } catch (error) {
    return 0;
  }
});

useEffect(() => {
  let data = JSON.stringify(count);
  window.localStorage.setItem(key, data);
}, [count]);


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