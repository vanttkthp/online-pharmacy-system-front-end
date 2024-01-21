import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slides/counterSlice";
import { styled } from "styled-components";
import { Button } from "antd";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const Button = styled.button({
    background: "red",
    color: "yellow",
  });

  return (
    <div>
      <div>
    
        <Button
    
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default App;
