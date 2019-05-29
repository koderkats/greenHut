// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'
import { GlobalContext } from "../../context";

const thisFile = 'Debug.js'

type Props = {
}

function TaskListCont(props: Props) {
  const thisFunc = 'TaskListCont'
  g.func(false, thisFile, thisFunc + ':TaskListCont', props);
  const cn = g.cn(thisFunc);
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

  const globalContext = useContext(GlobalContext);
  const { state, setState } = globalContext;

  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');


  function debugToggleMaximized(state, setState) {
    const tabs = document.querySelectorAll('.DashboardBridge.tab');
    setState(Object.assign({}, state, {
      debug: {
        ...state.debug,
        maximized: !state.debug.maximized
      }
    }));
  }

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(DebugStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn(`debug`)} style={g.style(props, style, thisFunc)} onClick={(e)=>debugToggleMaximized(state, setState)}>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
      <div className={cn(`item`)}>Debug Content</div>
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
    max-width:${state.debug.maximized ? '360' : '40'}px;
    height:120px;
    padding:7px 10px 7px 10px;
    color:white;
    background-color:#f009;
    font-size:20px;
    font-weight:bold;
    text-shadow: 2px 2px black;
    border:1px solid gray;
    overflow:${state.debug.maximized ? 'auto' : 'hidden'};
    z-index:2000000000;
  }
  .item {
    display:block;
  }
  `
}
