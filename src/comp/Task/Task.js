// @flow

import React, { useState } from 'react'
import s from './Task.css'
import u from '../../lib/util/util';

type Props = {
  pid: number,
  alias: string,
  email: string,
  children?: React.Node,
}

function Task(props: Props) {
  return (
    <div data-task>
      <div data-section data-pid>{props.pid}</div>
      <div data-section data-done>{props.done ? 'true' : 'false'}</div>
      <div data-section data-details>{props.details}</div>
    </div>
  );
}

export default Task
