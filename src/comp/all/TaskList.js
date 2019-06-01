// @flow

import React, { useState, useEffect } from 'react'
import g from '../../all/global'

import api from '../../all/lib/api'
import Task from './Task'
import Divider from './Divider'

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
    <style dangerouslySetInnerHTML={{__html: g.styler(TaskListStyle, null, thisFunc)}} />
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

export function TaskListStyle(state, thisFunc) {
  return `
  .tasklist { display:block; height:100%; }
  .section { display:block; }
  .button { margin:5px; }
  `
}
