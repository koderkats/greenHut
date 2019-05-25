// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'

const thisFile = 'TasksTab.js'

type Props = {
}

function TasksTab(props: Props) {
  const thisFunc = 'TasksTab'
  g.func(false, thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const [state, setState] = useContext(g.GlobalContext);
    g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');


  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(TasksTabStyle, state, thisFunc)}} />
    {/* <hr comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}/> */}
    <div comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}>
    <div className={`wrap`}>
    <div className={`cont`}>
aasdf
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
    </div>
    </div>
  </>);
}

export default TasksTab

const style = (props: Props) => ({});

export function TasksTabStyle(state, thisFunc) {
  return `
  .comp {
    height:${state.dashboard.height-60}px;
    background:red;
    overflow:auto;
    width:360px;
  }
  .wrap {
    overflow:visible;
    height:0px;
    width:0px;    
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
