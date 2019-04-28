// @flow

import React from 'react'
import { hot } from 'react-hot-loader'
// import Viewport from './comp/Viewport/Viewport'
import WorkspacePage from './pages/WorkspacePage/WorkspacePage'
import s from './App.css'


type Props = {
  alias?: String,
}


const Container = (props) => (
    <div className={props.className}>{props.children}</div>
)

const Divider = (props) => (
    <div style={{width:'100%', borderTop:'1px solid #d6e6e6', borderTopColor:'rgb(173,148,120)'}}></div>
)

const AppHeader = (props) => (
    <Container className="js-app-header">
      <style>{`
        .app-header,
        _ {
          min-height: 44px;
          background-color: white;
          padding: 0 20px;
        }
      `}</style>

      <header className="app-header">
        app-header
      </header>

    </Container>
)

const MainHeader = (props) => (
  <Container className="js-main-header">{props.children}</Container>
)

const MainContent = (props) => (
  <Container className="js-main-content app-content">{props.children}</Container>
)



const compName = 'App'
let i = 0;

const App = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp + ' js-main-layout app-container'}>
    {window.addEventListener('resize', function(){ location.reload(true); })}



<Container className="app-container__header">
  <AppHeader />
  <Divider />
  <MainHeader />
</Container>

<Container className="app-container__content">
  <MainContent>
  <div>aaaaaaaaaaaaaaaaaa</div>
  <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    <div>aaaaaaaaaaaaaaaaaa</div>
    {/* <div className="l-panes-view l-panes-view-no-subheader"></div> */}
  </MainContent>
</Container>


  </div>
)

export default hot(module)(App)
