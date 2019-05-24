// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'

import api from '../../lib/api/api'
import Divider from '../../comp/Divider/Divider'

const thisFile = 'DashboardContent.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function DashboardContent(props: Props) {
  const thisFunc = 'DashboardContent'
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
    <style dangerouslySetInnerHTML={{__html: g.styler(DashboardContentStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn(`dashboardContent`)} alias={props.alias} style={g.style(props, style, thisFunc)}>
      {props.children}
    </div>
  </>);

}

export default DashboardContent

const style = (props: Props) => ({
});


export function DashboardContentStyle(state, thisFunc) {
  const bg = '#f2f6f6'
  return `
  .dashboardContent {
    flex:1;
    min-height:100%;
    height:100%;
    width:100%;
    background-color:${bg};
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
    color:#ad9178;
  }
  .status {
    font-size:16px;
  }
  .item {
    height:40px;
    color:black;
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
    background-color:#f2f6f6;
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






