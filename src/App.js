// @flow

import React, {useContext} from 'react'
import { hot } from 'react-hot-loader'
import {  StoreProvider, /*StoreContext*/ } from './context/StoreContext'

import { which } from './lib/global/global'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import AppHeader from './comp/AppHeader/AppHeader'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import s from './App.css'

// const { state, dispatch, actions } = useContext(StoreContext);

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
  //document.body.classList.add('u-panes');

  which(2, {
    1: () => console.log('ONE'),
    2: () => console.log('TWO'),
    3: () => console.log('THREE'),    
  }, 'DEFAULT_VALUE');

  which(42, {
    1: 'someString',
    2: {some: 'object'},
    3: () => console.log('someExecutedFunction'),    
  }, () => {
    console.log('VALUE NOT FOUND')
  });

  const curState = { count: 50 }
  const action = { type:'INCREMENT_COUNTER', value: 1 }
  const newState =  which(action.type, {
    'INCREMENT_COUNTER': { ...curState, ...{count: curState.count + action.value} },
    'DECREMENT_COUNTER': { ...curState, ...{count: curState.count + action.value} },
  }, curState);
  console.log('NEWSTATE:', newState);
  return (
    <div data-app-container>
      <AppHeader/>
      <Divider/>
      <TaskList/>
      <Divider/>
      <Counter/>
      <Divider/>
    </div>
  )
}

function StateApp() {
  return (
    <StoreProvider>
      <App/>
    </StoreProvider>
  )
}

export default hot(module)(StateApp)
