import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementStep, setIncrementStep] = useState(1);
  const [decrementStep, setDecrementStep] = useState(1);

  const handleIncrement = () =>
    setCount((prevCount) => prevCount + incrementStep);
  const handleDecrement = () =>
    setCount((prevCount) => prevCount - decrementStep);

  return (
    <div className="counter-app">
      <h1 className="counter-heading">Counter App</h1>
      <div className="count-display">
        <span className="count-value">{count}</span>
      </div>
      <div className="controls">
        <div className="control-group">
          <h3 className="control-label">Decrement</h3>
          <div className="control-buttons">
            <button
              className="control-btn decrement-btn"
              onClick={handleDecrement}
            >
              <i className="fas fa-minus"></i>
            </button>
            <input
              type="number"
              className="step-input"
              value={decrementStep}
              onChange={(e) => setDecrementStep(parseInt(e.target.value) || 1)}
              min="1"
            />
          </div>
        </div>
        <div className="control-group">
          <h3 className="control-label">Increment</h3>
          <div className="control-buttons">
            <input
              type="number"
              className="step-input"
              value={incrementStep}
              onChange={(e) => setIncrementStep(parseInt(e.target.value) || 1)}
              min="1"
            />
            <button
              className="control-btn increment-btn"
              onClick={handleIncrement}
            >
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
