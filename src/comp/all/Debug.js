// @flow

import React, {useState, useEffect, useContext, useReducer} from 'react'
import g from '../../all/global'
import { GlobalContext } from "../../all/context";

const thisFile = 'Debug.js'

type Props = {
  
}

function TaskListCont(props: Props) {
  const thisFunc = 'TaskListCont'
  g.func(false, thisFile, thisFunc + ':TaskListCont', props);
  const cn = g.cn(thisFunc);

  const {state, dispatch} = useContext(GlobalContext);
  
  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(TaskListContStyle, null, thisFunc)}} />
    <div comp={thisFunc} className={cn(`comp`)}>
      {props.children}
    </div>
  </>);
}
export function TaskListContStyle(state, thisFunc) {
  const taskListContWidth = '1200px'
  return `
  .comp {
    width:${taskListContWidth};
    max-width:${taskListContWidth};
    overflow:hidden;
  }
  `
}
function Head(props: Props) {
  const thisFunc = 'Head'
  g.func(false, thisFile, thisFunc + ':Head', props);
  const cn = g.cn(thisFunc);
  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(HeadStyle, null, thisFunc)}} />
    <div comp={thisFunc} className={cn(`comp`)}>
      AASSDSF
    </div>
  </>);
}
export function HeadStyle(state, thisFunc) {
  return `
  .comp {
    display:block;
    height:49px;
    min-height:50px;
  }
  `
}


function Debug(props: Props) {
  const thisFunc = 'Debug'
  g.func(false, thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const {state, dispatch} = useContext(GlobalContext)

  useEffect(()=>{
    g.func(thisFile, thisFunc + ':useEffect [SET_INITIAL_STATE]');
    g.dir(thisFile, thisFunc, state, 'USEEFFECT STATE')
    window.addEventListener('resize', () => {
      // g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT, [ON_RESIZE]');
      dispatch({ type:'WINDOW_RESIZE' })
      // dispatch({type:'WINDOW_RESIZE'})
      g.log(thisFile, thisFunc, `WINDOW ${window.innerWidth}x${window.innerHeight}`);
    });
    dispatch({ type:'WINDOW_RESIZE' })

  },[]);



  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(DebugStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn(`debug`)} style={g.style(props, style, thisFunc)} onClick={()=>dispatch({ type:'DEBUG_TOGGLE_MAXIMIZED' })}>
      <div className={cn(`item`)}>{JSON.stringify(state, null, '\n')}</div>
    </div>
  </>);
}

export default Debug

const style = (props: Props) => ({});

export function DebugStyle(state, thisFunc) {
  return `
  .debug {
    display:block;
    position:fixed;
    bottom:0px;
    left:0px;
    width:100%;
    max-width:${state.debug.isMaximized ? '360' : '40'}px;
    max-height:${state.debug.isMaximized ? 'unset' : '40'}px;
    height:120px;
    padding:7px 10px 7px 10px;
    color:white;
    background-color:#f009;
    font-size:12px;
    font-weight:unset;
    text-shadow: 2px 2px black;
    border:1px solid gray;
    overflow:${state.debug.isMaximized ? 'auto' : 'hidden'};
    z-index:2000000000;
  }
  .item {
    display:block;
  }
  `
}
