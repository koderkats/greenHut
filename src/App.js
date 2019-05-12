// @flow

import React from 'react'
import { hot } from 'react-hot-loader'
// import Viewport from './comp/Viewport/Viewport'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import AppHeader from './comp/AppHeader/AppHeader'
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

// const AppHeader = (props) => (
//   <Container className="js-app-header">

//     <header className="app-header">      
//       <div></div>App-Header
//     </header>

//   </Container>
// )

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
      <AppHeader/>
    </>
  )
}
export default hot(module)(App)
