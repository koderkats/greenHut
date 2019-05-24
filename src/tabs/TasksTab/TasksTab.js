// @flow

import * as React from 'react'
import g, { which } from '../../global'

const thisFile = 'TasksTab.js'

type Props = {
}

function TasksTab(props: Props) {
  const thisFunc = 'TasksTab'
  g.func(false, thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(TasksTabStyle, null, thisFunc)}} />
    {/* <hr comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}/> */}
    <div comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
      <div style={{display:'block'}}>TasksTab Content</div>
    </div>
  </>);
}

export default TasksTab

const style = (props: Props) => ({});

export function TasksTabStyle(state, thisFunc) {
  return `
  .comp {
    height:100%;
    width:200px;
    max-height:200px;
    background:white;
    overflow-x:hidden;
    overflow-y:scroll;
    margin:30px;
  }

  `
}
