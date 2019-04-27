// @flow

// body prop on Item should be a number not a string
// Running 'yarn flow' should produce an error

import React from 'react'
import { hot } from 'react-hot-loader'
import ViewBoxApp from './pocs/ViewBoxApp/ViewBoxApp'
import s from './App.css'

type Props = {
  alias: ?String,
}

const compName = 'App'
let i = 0;

const App = (props: Props) => (
  <div comp={compName + ' a'} alias={props.alias} className={s.comp} id="a">
    {window.addEventListener('resize', function(){ location.reload(true); })}
    <ViewBoxApp />
  </div>
)

export default hot(module)(App)
