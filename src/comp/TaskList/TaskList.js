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
    <Task pid="0" alias="ann" email="ann@a.com" />,
    <Divider/>,
    <Task pid="1" alias="bob" email="bob@b.com" />,
    <Divider/>,
    <Task pid="2" alias="cat" email="cat@c.com" />,
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
