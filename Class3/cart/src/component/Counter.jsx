import { use, useEffect, useState } from "react";

const Counter = ({ quantity, onUpdate, productId }) => {
  const [count, setCount] = useState(quantity);
  const [randomNumber, setRandomNumber] = useState(0);
  // Mount
  useEffect(() => {
    setInterval(() => {
      setRandomNumber(Math.random() * 10);
    }, 1000);
    console.log("Counter mounted");
  }, []);
  console.log(randomNumber);
  // Update
  useEffect(() => {
    console.log("Counter mounted - Trigger only on count change");
  }, [count]);

  useEffect(() => {
    console.log("Counter mounted - Trigger on every rerender");
  }); // Trigger on every rerender

  // Unmount
  useEffect(() => {
    return () => {
      console.log("Counter uncmounted");
    };
  }, []);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    onUpdate(productId, count);
  }, [count]);

  return (
    <div style={{ display: "inline-block" }}>
      <button onClick={handleMinus}>-</button>
      <span>{count}</span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default Counter;
