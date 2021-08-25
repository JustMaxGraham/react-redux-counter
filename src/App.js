import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'
import { Button, Input, Display } from './components'

function App() {

  /* REACT STATE
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count -1)
  }
  */ 

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>Basic Counter with Redux!</h1>
      <Display>{count}</Display>
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Input></Input>
      <Button onClick={() => dispatch(decrement())}>-1</Button>
      <Button onClick={() => dispatch(incrementByAmount(10))}>+10</Button>

    </div>
  );
}

export default App;
