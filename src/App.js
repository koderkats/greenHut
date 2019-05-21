// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g, { which } from './global'
import s from './App.css'

import Divider from './comp/Divider/Divider'
import AppHeader from './comp/AppHeader/AppHeader'
import DashboardBridge from './comp/DashboardBridge/DashboardBridge'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'

const thisFile = 'App.js'

type Props = {
  alias?: String,
}

function App(props: Props) {
  const thisFunc = 'App'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const [state, setState] = useState(g.initialState);

  useEffect(()=>{
    // setState({page:'home', count:12});
    setState(g.initialState);
  },[]);

  return (<>
    <g.GlobalContext.Provider value={[state, setState]}>

      <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={state.dashboardBridge.activePage} data-dbb-tab={state.dashboardBridge.activeTab}>
        <AppHeader/>
        <Divider/>
        <DashboardBridge/>
        <Divider/>
        <TaskList/>
      </div>
    </g.GlobalContext.Provider>
  </>)
}

export default hot(module)(App)

const style = (props: Props) => ({});
