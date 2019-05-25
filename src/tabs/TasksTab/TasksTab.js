// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'

const thisFile = 'TasksTab.js'

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


function TasksTab(props: Props) {
  const thisFunc = 'TasksTab'
  g.func(false, thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const [state, setState] = useContext(g.GlobalContext);
    g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');


  return (<>
  <TaskListCont>
    <Head/>
    <style dangerouslySetInnerHTML={{__html: g.styler(TasksTabStyle, state, thisFunc)}} />
    {/* <hr comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}/> */}
    <div comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
      <div className={cn(`item`)}>TasksTab Content</div>
    </div>
  </TaskListCont>
  </>);
}

export default TasksTab

const style = (props: Props) => ({});

export function TasksTabStyle(state, thisFunc) {
  const bg = '#f2f6f6'
  const itemMargin = '5px'
  return `
  .comp {
    height:${state.dashboard.height-100}px;
    background:${bg};
    overflow:auto;
    width:360px;
    overflow-x:hidden;
  }
  .item {
    display:block;
    width:auto;
    background-color:white;
    padding:15px;
    margin-left:${itemMargin};
    margin-right:${itemMargin};
    margin-bottom:${itemMargin};
  }
  .item:nth-child(1) {
    margin-top:${itemMargin};
  }
  .cont {
    overflow:auto;
    height:100px;
    position:relative;
    width:360px;
    direction:ltr;
    box-sizing:border-box;
  }
  `
}
