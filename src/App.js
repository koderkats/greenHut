// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g, { which } from './global'
import Divider from './comp/Divider/Divider'
import AppHeader from './comp/AppHeader/AppHeader'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import s from './App.css'

const thisFile = 'App.js'

type Props = {
  alias?: String,
}

function App(props: Props) {
  const thisFunc = 'App'
  g.func(thisFile, thisFunc, props);

  const [state, setState] = useState({page:'', count:0});

  //document.body.classList.add('u-panes');
  useEffect(()=>{
    setState({page:'home', count:12});
  },[]);

  return (
    <g.GlobalContext.Provider value={[state, setState]}>
      <div comp={thisFunc} data-app-container>
        <AppHeader/>
        <Divider/>
        <TaskList/>
        <Divider/>
        <Counter/>
        <Divider/>
        <div style={{display:'block'}}>APP PAGE: {state.page}</div>
        <div style={{display:'block'}}>APP COUNT: {state.count}</div>
      </div>
    </g.GlobalContext.Provider>
  )
}

export default hot(module)(App)
