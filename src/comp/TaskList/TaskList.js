// @flow

import React, { useState, useEffect } from 'react'
import g, { which } from '../../global'
import Task from '../Task/Task'
import Divider from '../Divider/Divider'
import api from '../../lib/api/api'

const thisFile = 'TaskList.js'

type Props = {
  alias: string,
  //children?: React.Node,``
}

function TaskList(props: Props) {
  const thisFunc = 'TaskList'
  g.func(thisFile, thisFunc, props);

  // const [taskList, setTaskList] = useState([]);
  const [taskList, setTaskList] = useState([]);

  useEffect(()=>{
    g.func(thisFile, thisFunc + ':useEffect');
    api.getTaskList().then((taskList) => {
      g.func(thisFile, thisFunc + ':useEffect:api.getTaskList:resolved', taskList);
      setTaskList(taskList);
    });
  },[]);

  let taskListJsx = taskList.map((task, index, list)=>{
    return (
      <Task key={index} pid={task.pid} done={task.done} details={task.details} />
    )
  });

  return (
    <div comp={thisFunc} data-tasklist>
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
