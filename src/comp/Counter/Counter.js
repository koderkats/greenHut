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

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(CounterStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={`counter`} style={g.style(props, style, thisFunc)}>
      <div className={`section`}>{`COUNT: ${count}`}</div>
      <div className={`section`}>
        <button className={`button`} onClick={()=>setCount(0)}>reset</button>
        <button className={`button`} onClick={()=>setCount(count=>count-1)}>-</button>
        <button className={`button`} onClick={()=>setCount(count=>count+1)}>+</button>
      </div>
    </div>
  </>);
}

export default Counter

const style = (props: Props) => ({});

export function CounterStyle(state, thisFunc) {
  return `
  .counter { display:block; min-height:200px; height:100%; }
  .section { display:block; }
  .button { margin:5px; }  
  `
}
