// @flow

import React, { useState, useEffect } from 'react'
import g, { which } from '../../global'
import s from './TaskList.css'

import api from '../../lib/api/api'
import Task from '../Task/Task'
import Divider from '../Divider/Divider'

const thisFile = 'TaskList.js'

type Props = {
  alias: string,
  //children?: React.Node,``
}

function TaskList(props: Props) {
  const thisFunc = 'TaskList'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

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

  return (<>
    <div comp={thisFunc} className={cn(`tasklist`)} style={g.style(props, style, thisFunc)}>
      <div className={cn(`section`)}>TASKLIST</div>
      <Divider/>
      <div className={cn(`section`)}>{taskListJsx}</div>
      <Divider/>
    </div>
  </>);
}

export default TaskList

const style = (props: Props) => ({});
