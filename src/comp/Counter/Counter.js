// @flow

import React, { useState } from 'react'
import g, { which } from '../../global'

const thisFile = 'Counter.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function Counter(props: Props) {
  const thisFunc = 'Counter'
  g.func(thisFile, thisFunc, props);

  const [count, setCount] = useState(0); // [state, stateSetter] = useState(initialState)

  return (
    <div comp={thisFunc} data-counter>
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
