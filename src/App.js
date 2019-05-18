// @flow

import React, {useContext, useState, useEffect} from 'react'
import { hot } from 'react-hot-loader'
import g, { which } from './global'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import AppHeader from './comp/AppHeader/AppHeader'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import s from './App.css'

const thisFile = 'App.js'

export const GlobalContext = React.createContext({});

type Props = {
  alias?: String,
}

function Divider() {
  return (
    <hr/>
  )
}

const compName = 'App'

const App = (props: Props) => {
  const thisFunc = 'App'
  g.func(thisFile, thisFunc, props);

  const [state, setState] = useState({page:'', count:0});

  //document.body.classList.add('u-panes');
  useEffect(()=>{
    setState({page:'home', count:12});
  },[]);

  which(2, {
    1: () => g.log(thisFile, thisFunc, 'ONE'),
    2: () => g.log(thisFile, thisFunc, 'TWO'),
    3: () => g.log(thisFile, thisFunc, 'THREE'),    
  }, 'DEFAULT_VALUE');

  which(42, {
    1: 'someString',
    2: {some: 'object'},
    3: () => g.log(thisFile, thisFunc, 'someExecutedFunction'),    
  }, () => {
    g.log(thisFile, thisFunc, 'VALUE NOT FOUND')
  });

  const curState = { count: 50 }
  const action = { type:'INCREMENT_COUNTER', value: 1 }
  const newState =  which(action.type, {
    'INCREMENT_COUNTER': { ...curState, ...{count: curState.count + action.value} },
    'DECREMENT_COUNTER': { ...curState, ...{count: curState.count + action.value} },
  }, curState);

  g.log(thisFile, thisFunc, `NEWSTATE: ${newState}`)

  return (
    <GlobalContext.Provider value={[state, setState]}>
      <div data-app-container>
        <AppHeader/>
        <Divider/>
        <TaskList/>
        <Divider/>
        <Counter/>
        <Divider/>
        <div style={{display:'block'}}>APP PAGE: {state.page}</div>
        <div style={{display:'block'}}>APP COUNT: {state.count}</div>
      </div>
    </GlobalContext.Provider>
  )
}

export default hot(module)(App)
