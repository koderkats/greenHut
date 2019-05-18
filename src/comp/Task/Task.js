// @flow

import React, { useState } from 'react'
import g, { which } from '../../global'
import s from './Task.css'
import u from '../../lib/util/util';

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

  return (
    <div data-task>
      <div data-section data-pid>{props.pid}</div>
      <div data-section data-done>{props.done ? 'true' : 'false'}</div>
      <div data-section data-details>{props.details}</div>
    </div>
  );
}
 
export default Task
