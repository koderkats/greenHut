// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g, { which } from './global'
import { GlobalContext } from "./context";

import Divider from './comp/Divider/Divider'
import AppHeader from './comp/AppHeader/AppHeader'
import DashboardBridge from './comp/DashboardBridge/DashboardBridge'
import DashboardContent from './comp/DashboardContent/DashboardContent'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import TasksTab from './tabs/TasksTab/TasksTab'



// export const GlobalContext = React.createContext(g.state);


const thisFile = 'AppStateful.js'

type Props = {
  alias?: String,
}

function AppStateful(props: Props) {
  const thisFunc = 'AppStateful'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  // const [state, setState] = useState(g.state);
  // g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');
  // const [state, setState] = useContext(g.GlobalContext);

  const globalContext = useContext(GlobalContext);
  const { state, setState } = globalContext;
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');



  useEffect(()=>{
    g.func(thisFile, thisFunc + ':useEffect [SET_INITIAL_STATE]');

    window.addEventListener('resize', () => {
      g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT, [ON_RESIZE]');
      setState(Object.assign({}, state, {
        app: {
          ...state.app,
          width: window.innerWidth,
          height: window.innerHeight,
          widthHeight: `${window.innerWidth}x${window.innerHeight}`,
        },
        appHeader: {
          ...state.appHeader,
          height: document.querySelector(`.AppHeader`).clientHeight,
        },
        dashboardBridge: {
          ...state.dashboardBridge,
          height: document.querySelector(`.DashboardBridge`).clientHeight,
        },
        dashboardContent: {
          height: window.innerHeight - document.querySelector(`.AppHeader`).clientHeight - document.querySelector(`.DashboardBridge`).clientHeight
        }
      }));
    });
  },[]);

  useEffect(()=>{
    if (!state.app.widthHeight || state.app.widthHeight === '') {
      setState(Object.assign({}, state, {
        app: {
          ...state.app,
          width: window.innerWidth,
          height: window.innerHeight,
          widthHeight: `${window.innerWidth}x${window.innerHeight}`,
        },
        appHeader: {
          ...state.appHeader,
          height: document.querySelector(`.AppHeader`).clientHeight,
        },
        dashboardBridge: {
          ...state.dashboardBridge,
          height: document.querySelector(`.DashboardBridge`).clientHeight,
        },
        dashboardContent: {
          height: window.innerHeight - document.querySelector(`.AppHeader`).clientHeight - document.querySelector(`.DashboardBridge`).clientHeight
        }
      }));
    }
  });
  
  return (<>
      <style dangerouslySetInnerHTML={{__html: g.styler(AppStatefulStyle, state, thisFunc)}} />
      <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={state.dashboardBridge.activePage} data-dbb-tab={state.dashboardBridge.activeTab}>
          <AppHeader/>
        <Divider/>
        <DashboardBridge/>
        <DashboardContent>
        <TasksTab/>
        <TasksTab/>
        <TasksTab/>
        {/* <TaskList/> */}
        </DashboardContent>
      </div>
  </>)
}

export default AppStateful

const style = (props: Props) => ({});

export function AppStatefulStyle(state, thisFunc) {
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

