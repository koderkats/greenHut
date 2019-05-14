// @flow

import React, { useState } from 'react'
import s from './TaskList.css'
import u from '../../lib/util/util';

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'TaskList'

function TaskList(props: Props) {
  const [taskList, setTaskList] = useState({});

  let tasks = [
    <div data-section>1</div>,
    <div data-section>2</div>,
    <div data-section>3</div>
  ]

  return (
    <div data-tasklist>
      <div data-section>TASKLIST</div>
      <div data-section>{tasks}</div>
    </div>
  );
}

export default TaskList

const style = (props: Props) => ({
});
