import './App.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, setDelta } from './redux/counterSlice'
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
  const delta = useSelector((state) => state.counter.delta)
  const dispatch = useDispatch()
  
  return (
    <div className="App">
      <h1>COUNTER WITH REDUX</h1>
      <Display>{count}</Display>
      <div className="controls">
        <Button buttonStyle="negative" onClick={() => dispatch(decrement())}>-</Button>
        <Input value={delta} onChange={(event) => dispatch(setDelta(Number(event.target.value)))}></Input>
        <Button buttonStyle="positive" onClick={() => dispatch(increment())}>+</Button>
      </div>
    </div>
  );
}

export default App;
