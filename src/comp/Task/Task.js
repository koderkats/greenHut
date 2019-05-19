// @flow

import React, { useState } from 'react'
import g, { which } from '../../global'
import s from './Task.css'

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

  return (
    <div comp={thisFunc} className={cn(`task`)}>
      <div className={cn(`section pid`)}>{props.pid}</div>
      <div className={cn(`section done`)}>{props.done ? 'true' : 'false'}</div>
      <div className={cn(`section details`)}>{props.details}</div>
    </div>
  );
}
 
export default Task
