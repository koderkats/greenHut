// @flow

import React, {useContext, useState, useEffect, useReducer} from 'react'
import { hot } from 'react-hot-loader'
import g from './global'
import { GlobalContextProvider, GlobalContext } from "./context";

import Debug from '../comp/all/Debug'
import Divider from '../comp/all/Divider'
import AppStateful from './AppStateful'
import AppHeader from '../comp/all/AppHeader'
import DashboardBridge from '../comp/all/DashboardBridge'
import DashboardContent from '../comp/all/DashboardContent'
import Counter from '../comp/all/Counter'
import TaskList from '../comp/all/TaskList'
import TasksTab from '../comp/tabs/TasksTab'

// export const GlobalContext = React.createContext(g.state);


const thisFile = 'App.js'

type Props = {
  alias?: String,
}

function App(props: Props) {
  const thisFunc = 'App'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  // const [state, setState] = useState(g.state);
  // g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  const {state, dispatch} = useContext(GlobalContext)

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(AppStyle, state, thisFunc)}} />
    <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={'default'} data-dbb-tab={'mytasks'}>
    <GlobalContextProvider>
      <Debug/>
      {/* <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={state.dashboardBridge.activePage} data-dbb-tab={state.dashboardBridge.activeTab}> */}
      <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={'default'} data-dbb-tab={'mytasks'}>
        <AppHeader/>
        <Divider/>
        <DashboardBridge/>
        {/*
        <DashboardContent>
          {state.dashboardBridge.activeTab === 'tasks' ? <TasksTab/> : ''}
          {state.dashboardBridge.activeTab === 'convos' ? <div>CONVOS</div> : ''}
          {state.dashboardBridge.activeTab === 'notes' ? <div>NOTES</div> : ''}
          {state.dashboardBridge.activeTab === 'files' ? <div>FILES</div> : ''}
        </DashboardContent> */}
      </div>

    </GlobalContextProvider>

    </div>
</>)
}

export default hot(module)(App)

const style = (props: Props) => ({});

export function AppStyle(state, thisFunc) {
return `
body {
  margin:0;
  width:100%;
  height:100%;
  background:white;
  color:black;
  font-family:arial;
  font-size:16px;
  overflow:hidden;
}
div {
  box-sizing:border-box;
  display:inline-block;
}
.app-container {
  display:block;
  position:absolute;
  width:100%;
  min-height:100%;
}
`
}
