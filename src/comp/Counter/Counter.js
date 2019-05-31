// @flow

import React, { useState, useContext } from 'react'
import g from '../../global'
import { GlobalContext } from "../../context";

const thisFile = 'Counter.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function Counter(props: Props) {
  const thisFunc = 'Counter'
  g.func(thisFile, thisFunc, props);

  const {state, dispatch} = useContext(GlobalContext)

  g.dir(thisFile, thisFunc, state, 'STATE')

  // const [count, setCount] = useState(0); // [state, stateSetter] = useState(state)

  return (<>
    {/* <style dangerouslySetInnerHTML={{__html: g.styler(CounterStyle, null, thisFunc)}} /> */}
    <div comp={thisFunc} className={`counter`} style={g.style(props, style, thisFunc)}>
      <div className={`section`}>{`COUNT: ${state.counter.count}`}</div>
      <div className={`section`}>
        <button className={`button`} onClick={()=>setCount(0)}>reset</button>
        <button className={`button`} onClick={()=>dispatch({ type:'COUNTER_DECREMENT' })}>-</button>
        <button className={`button`} onClick={()=>dispatch({ type:'COUNTER_INCREMENT' })}>+</button>
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
