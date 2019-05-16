// @flow

import React from 'react'
import { hot } from 'react-hot-loader'
import { which } from './lib/global/global'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import AppHeader from './comp/AppHeader/AppHeader'
import Counter from './comp/Counter/Counter'
import TaskList from './comp/TaskList/TaskList'
import s from './App.css'

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

  const state = { count: 50 }
  const action = { type:'INCREMENT_COUNTER', value: 1 }
  const newState =  which(action.type, {
    'INCREMENT_COUNTER': { ...state, ...{count: state.count + action.value} },
    'DECREMENT_COUNTER': { ...state, ...{count: state.count + action.value} },
  }, state);
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
export default hot(module)(App)
