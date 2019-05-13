// @flow

import React from 'react'
import { hot } from 'react-hot-loader'
// import Viewport from './comp/Viewport/Viewport'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import AppHeader from './comp/AppHeader/AppHeader'
import Counter from './comp/Counter/Counter'
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
  return (
    <div data-app-container>
      <AppHeader/>
      <Divider/>
      <Divider/>
      <Counter/>
      <Divider/>
    </div>
  )
}
export default hot(module)(App)
