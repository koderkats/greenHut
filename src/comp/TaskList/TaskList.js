// @flow

import React, { useState, useEffect } from 'react'
import Task from '../Task/Task'
import Divider from '../Divider/Divider'
import api from '../../lib/api/api'

type Props = {
  alias: string,
  //children?: React.Node,``
}

const compName = 'TaskList'

function TaskList(props: Props) {
  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    console.log('TaskList useEffect running');
    api.getTaskList().then((taskList) => {
        setTaskList(taskList);
    });
  },[]);

  let taskListJsx = taskList.map((task, index, list)=>{
    return (
      <Task key={index} pid={task.pid} done={task.done} details={task.details} />
    )
  });

  return (
    <div data-tasklist>
      <div data-section>TASKLIST</div>
      <Divider/>
      <div data-section>{taskListJsx}</div>
      <Divider/>
    </div>
  );
}

export default TaskList

const style = (props: Props) => ({
});
