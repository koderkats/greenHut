// @flow

import React from 'react'
import { hot } from 'react-hot-loader'
// import Viewport from './comp/Viewport/Viewport'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import s from './App.css'

type Props = {
  alias?: String,
}

const Items = (props) => (
  <div className={props.className}>{props.children}</div>
)

const Item = (props) => (
  <div className={props.className}>{`Item-${ Math.floor(Math.random() * 10) }`}</div>
)

const Container = (props) => (
  <div className={props.className}>{props.children}</div>
)

const Divider = (props) => (
    <div style={{width:'100%', borderTop:'1px solid #d6e6e6', borderTopColor:'rgb(173,148,120)'}}></div>
)

const AppHeader = (props) => (
  <Container className="js-app-header">

    <header className="app-header">      
      <div></div>App-Header
    </header>

  </Container>
)

const MainHeader = (props) => (
  <Container className="js-main-header">Main-Header</Container>
)

const MainContent = (props) => (
  <Container className="js-main-content app-content">{props.children}</Container>
)

const compName = 'App'
let i = 0;

const App = (props: Props) => {
  //document.body.classList.add('u-panes');
  return (
    <>
      <style>{`
  pre { border-top:2px solid black; font-size:14px; }
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

    <div class="header">

      <div class="segment left">
        <div class="flex-left container">
          <div class="item item1">1</div>
          <div class="item item2">2</div>
          <div class="item item3">3</div>
        </div>
      </div>

      <div class="item right item1">1</div>
      <div class="item right item2">2</div>
      <div class="item right item3">3</div>

    </div>


</div>
    </>
  )
}
export default hot(module)(App)
