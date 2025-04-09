import React, { useState, useEffect } from "react";

const LoggerCounter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Giá trị count mới là:", count);
  }, [count]);
  useEffect(() => {
    console.log("Component đã được tạo!");
  }, []);
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
};

export default LoggerCounter;