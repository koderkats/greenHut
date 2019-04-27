// @flow

// body prop on Item should be a number not a string
// Running 'yarn flow' should produce an error

import React from 'react'
import { hot } from 'react-hot-loader'
import Viewport from './comp/Viewport/Viewport'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import s from './App.css'

type Props = {
  alias: ?String,
}

const compName = 'App'
let i = 0;

const App = (props: Props) => (
  <div comp={compName + ' a'} alias={props.alias} className={s.comp} id="a">
    {window.addEventListener('resize', function(){ location.reload(true); })}

    {/* <Viewport alias="viewport" w={720} h={480} vw={window.innerWidth} vh={window.innerHeight} s={{alignContent:"left"}}> */}
    <Viewport alias="viewport" w={window.innerWidth} h={window.innerHeight} vw={window.innerWidth} vh={window.innerHeight} s={{alignContent:"left"}}>
      <WorkspacePage />
    </Viewport>

  </div>
)

export default hot(module)(App)
