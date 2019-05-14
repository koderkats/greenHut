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
      <div data-section data-id>{props.pid}</div>
      <div data-section data-alias>{props.alias}</div>
      <div data-section data-email>{props.email}</div>
    </div>
  );
}

export default Task
