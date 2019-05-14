// @flow

import React, { useState } from 'react'
import Task from '../Task/Task'
import Divider from '../Divider/Divider'

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'TaskList'

function TaskList(props: Props) {
  const [taskList, setTaskList] = useState({});

  let tasks = [
    <Divider/>,
    <Task pid="0" done={false} details="task 0" />,
    <Divider/>,
    <Task pid="1" done={false} details="task 1" />,
    <Divider/>,
    <Task pid="2" done={false} details="task 2" />,
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
