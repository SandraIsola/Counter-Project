import { useReducer } from "react";


function CountReducer(initialState = 0) {
  function reducer(initialState, action) {
    switch (action.type) {
      case "increment":
        return initialState + 1;
      case "decrement":
        return initialState - 1;
      case "reset":
        return 0;
      case "setValue":
        return setValue(action.payload);
        default:
        return initialState;
    }
  }
  function setValue(value) {
    return value;
  }
  const handleChange = (event) => {
    let num = Number(event.target.value);
    dispatch({ type: "setValue", payload: num });

    console.log("value is:", event.target.value);
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    
    <div className="counter">
      <div>
        <div>
          <input className="input-btn"
            type="number"
            id="value"
            placeholder="Input Value"
            name="value"
            onChange={handleChange}
          />
        </div>
      </div>
      <h3>Count = {count}</h3>
      <button
        className="counter-btn"
        onClick={() => dispatch({ type: "increment" })}
      >
        Increment
      </button>
      <button
        className="counter-btn"
        onClick={() => dispatch({ type: "decrement" })}
      >
        Decrement
      </button>
      <button
        className="counter-btn"
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </button>
    </div>
  
  );
}

export default CountReducer;
