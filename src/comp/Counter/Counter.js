// @flow

import React, { useState } from 'react'
import s from './Counter.css'
import u from '../../lib/util/util';

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'Counter'

function Counter(props: Props) {
  const [count, setCount] = useState(0); // [state, stateSetter] = useState(initialState)

  return (
    <div data-counter>
      <div data-section>{`COUNT: ${count}`}</div>
      <div data-section>
        <button data-button onClick={()=>setCount(0)}>reset</button>
        <button data-button onClick={()=>setCount(count=>count-1)}>-</button>
        <button data-button onClick={()=>setCount(count=>count+1)}>+</button>
      </div>
    </div>
  );
}

export default Counter

const style = (props: Props) => ({
});
