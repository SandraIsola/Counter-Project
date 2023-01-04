import useCounter from "./useCounter";

function Counter() {
  const { count, increment, decrement, reset, handleChange } = useCounter();
  return (
    <div className="counter">
      <div>
        <input
          className="input-btn"
          type="number"
          id="value"
          name="value"
          placeholder="Input Value"
          onChange={handleChange}
        />
      </div>
      <div className="in-de">
        <button className="counter-btn" onClick={increment}>
          Increment
        </button>
        <button className="counter-btn" onClick={decrement}>
          Decrement
        </button>
      </div>

      <div className="half-circle">
        <h3>{count}</h3>
      </div>

      <button className="counter-btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
