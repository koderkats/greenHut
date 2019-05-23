// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'

import api from '../../lib/api/api'
import Divider from '../../comp/Divider/Divider'

const thisFile = 'DashboardBridge.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function DashboardBridge(props: Props) {
  const thisFunc = 'DashboardBridge'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const [state, setState] = useContext(g.GlobalContext);
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  useEffect(() => {
    g.func(thisFile, thisFunc + ':useEffect');

    g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT, useeffect');

    api.getUser(1).then((user)=>{
      g.func(thisFile, thisFunc + ':useEffect:api.getUser:resolved', user);
      setState( Object.assign({}, state, {user}) );  
    });

  }, []);

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(DashboardBridgeStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn(`dashboardbridge`)} alias={props.alias} style={g.style(props, style, thisFunc)}>

      <div className={cn(`segment`)}>
        <div className={cn(`cont-greeting`)}>
            <div className={cn(`item item-1`)}>
            <div className={cn(`greeting`)}>{`Good afternoon, ${g.toUpperCase(state.user.alias, 'first')}.`}</div>
            <div className={cn(`status`)}>{`You have ${0} tasks, ${0} are due today.`}</div>
          </div>
        </div>

        <div className={cn(`cont tabs`)}>
          <div className={cn(`cont cont-left tabs`)}>
            <div className={cn(`tab item item-1`)} tab="myTasks" data-active={state.dashboardBridge.activeTab === 'myTasks'}>MY TASKS</div>
            <div className={cn(`tab item item-2`)} tab="updates" data-active={state.dashboardBridge.activeTab === 'updates'}>UPDATES</div>
          </div>

          <div className={cn(`cont-right`)}>
            <div className={cn(`item`)}>|&nbsp;&nbsp;|</div>
            <div className={cn(`item`)}>|&nbsp;&nbsp;|</div>
            <div className={cn(`item`)}>|&nbsp;&nbsp;|</div>
          </div>
        </div>

      </div>

    </div>
  </>);

}

export default DashboardBridge

const style = (props: Props) => ({
});


export function DashboardBridgeStyle(state, thisFunc) {
  return `
  .dashboardbridge {
    height:64px;
    width:100%;
  }
  .segment {
    padding-left:30px;
    width:100%;
  }
  .cont {
    display:flex;
    flex-direction:row;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:auto;
    max-width:100%;
    height:auto;
    width:auto;
   }
  .cont-greeting { min-width:480px; }
  .cont-left {
    //min-width:480px;
  }   
  .cont-right {
    display:flex;
    padding-left:30px;
  }   


  .greeting {
    font-size:20px;
  }
  .status {
    font-size:16px;
  }
  .item {
    height:40px;
    color:black;
    text-shadow: 1px 1px black;
    font-size:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:14px;
    padding-left:15px;
    padding-right:15px;
  }
  .tabs {
    padding-top:5px;
  }  
  .tab {
    display: flex;
    flex-shrink: 0;
    min-width:50px;
    padding-left:10px; padding-right:10px;
    margin-right:10px;
    font-size:16px;
    border-radius: 5px 5px 0 0; 
    background-color:#f2f5f6;
    border: solid #ccc;
    border-width: 1px 1px 0px 1px
  }
  .tab [data-active="true"] {
    background-color:black;
  }  
  .right {
    min-width:50px; float:right;
  }
  `
}






