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

const compName = 'App'

const App = (props: Props) => {
  //document.body.classList.add('u-panes');
  return (<>


<style>{`
  body { margin:0; width:100%; height:100%; background:#888;  color:white; font-family:arial; font-size:16px; }
  .msg.title { display:block; padding-top:10px; font-weight: 600; font-size:22px; text-indent: 15px; }
  .msg.details { text-indent: 30px; }

  div { box-sizing: border-box; display:inline-block; }

  .app-container { display:block; position:absolute; width:100%;}

  .item1 { min-width:50px; }
  .item2 { min-width:100px; }
  .item3 { min-width:200px; }

  .item.right { min-width:50px; }

  .container { display:flex; flex-direction:row; flex-grow:1; flex-shrink:1; flex-basis:auto; height:auto; max-width:100%; width:auto; background:gray; }

  .item-container { display:flex; flex-direction:row; flex-grow:1; flex-shrink:1; flex-basis:auto; height:auto; border:2px solid black; }
  .item { height:40px; color:red; text-shadow: 1px 1px black; font-size:10px; display:flex; justify-content:center; align-items:center; font-size:34px}

  .header { width:100%;}
  .flex-left .item-container { flex-grow:0; }
  .segment.left { float:left; }
  .item.right { float:right; }
`}</style>

<div class="app-container">
  <AppHeader/>
    <Counter/>
</div>


   </>)
}
export default hot(module)(App)
