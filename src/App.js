// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g, { which } from './global'
import { GlobalContextProvider } from "./context";

import Divider from './comp/Divider/Divider'
import AppStateful from './AppStateful'
import AppHeader from './comp/AppHeader/AppHeader'
import DashboardBridge from './comp/DashboardBridge/DashboardBridge'
import DashboardContent from './comp/DashboardContent/DashboardContent'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import TasksTab from './tabs/TasksTab/TasksTab'



// export const GlobalContext = React.createContext(g.state);


const thisFile = 'App.js'

type Props = {
  alias?: String,
}

function App(props: Props) {
  const thisFunc = 'App'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const [state, setState] = useState(g.state);
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(AppStyle, state, thisFunc)}} />
    <div comp={`${thisFunc}`} className={cn(`app-container`)} style={g.style(props, style, thisFunc)} data-app-page={state.dashboardBridge.activePage} data-dbb-tab={state.dashboardBridge.activeTab}>
    <GlobalContextProvider state={state}>
      <AppStateful/>
    </GlobalContextProvider>

    </div>
</>)
}

export default hot(module)(App)

const style = (props: Props) => ({});

export function AppStyle(state, thisFunc) {
return `
`
}
