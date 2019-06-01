// @flow

import React, { useState } from 'react'
import g from '../../all/global'
import { GlobalContext } from "../../all/context";

const thisFile = 'Task.js'

type Props = {
  pid: number,
  alias: string,
  email: string,
  children?: React.Node,
}

function Task(props: Props) {
  const thisFunc = 'Task'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(TaskStyle, null, thisFunc)}} />
    <div comp={thisFunc} className={cn(`task`)} style={g.style(props, style, thisFunc)}>
      <div className={cn(`section pid`)}>{props.pid}</div>
      <div className={cn(`section done`)}>{props.done ? 'true' : 'false'}</div>
      <div className={cn(`section details`)}>{props.details}</div>
    </div>
  </>);
}
 
export default Task

const style = (props: Props) => ({});

export function TaskStyle(state, thisFunc) {
  return `
  .task { display:block; height:100%; }
  .section { display:block; }
  .button { margin:5px; }
  `
}

