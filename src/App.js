// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g, { which } from './global'

import Divider from './comp/Divider/Divider'
import AppHeader from './comp/AppHeader/AppHeader'
import DashboardBridge from './comp/DashboardBridge/DashboardBridge'
import DashboardContent from './comp/DashboardContent/DashboardContent'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import TasksTab from './tabs/TasksTab/TasksTab'

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
    g.func(thisFile, thisFunc + ':useEffect [SET_INITIAL_STATE]');
    // setState({page:'home', count:12});
    setState(g.initialState);

    window.addEventListener('resize', () => {
      g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT, [ON_RESIZE]');
      setState(Object.assign({}, state, {
        app: {
          ...state.app,
          width: window.innerWidth,
          height: window.innerHeight,
          widthHeight: `${window.innerWidth}x${window.innerHeight}`,
        }
      }));
    });

  },[]);

  return (<>
    <g.GlobalContext.Provider value={[state, setState]}>
      <style dangerouslySetInnerHTML={{__html: g.styler(AppStyle, state, thisFunc)}} />
      <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} 
            data-app-page={state.dashboardBridge.activePage} data-dbb-tab={state.dashboardBridge.activeTab}>
        <AppHeader/>
        <Divider/>
        <DashboardBridge/>
        <DashboardContent>
          <TasksTab/>
          <TasksTab/>
          <TasksTab/>
        </DashboardContent>      
        {/* <TaskList/> */}
      </div>
    </g.GlobalContext.Provider>
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

