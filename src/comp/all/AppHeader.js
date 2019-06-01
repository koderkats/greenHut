// @flow

import React, {useState, useEffect, useContext} from 'react'
import g from '../../all/global'
import { GlobalContext } from "../../all/context";

import api from '../../all/lib/api'
import Divider from './Divider'

const thisFile = 'AppHeader.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function AppHeader(props: Props) {
  const thisFunc = 'AppHeader'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const globalContext = useContext(GlobalContext);
  const { state, setState } = globalContext;
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');
  

  return (
      <>
    <style dangerouslySetInnerHTML={{__html: g.styler(AppHeaderStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn('app_header')} alias={props.alias} style={g.style(props, style, thisFunc)}>

      <div className={cn(`segment`)}>
        <div className={cn(`cont`)}>
          <div className={cn(`item item_1`)}>|&nbsp;&nbsp;|</div>
          <div className={cn(`item item_2`)}>Dashboard</div>
          <div className={cn(`item item_3`)}>Workspaces</div>
          <div className={cn(`item item_4`)}>Reports</div>
        </div>
      </div>

      <div className={cn(`item right`)}>{g.toUpperCase(state.user.alias, 'first')} V</div>
      <div className={cn(`item right`)}>?</div>
      <div className={cn(`item right`)}>+</div>
      <div className={cn(`item right`)}>
        <input className={cn(`search`)} placeholder="Search"></input>
      </div>
    </div>
    </>
  );

}

export default AppHeader


{/* <div className={cn(`item item_1 right`)}>1</div>
<div className={cn(`item item_2 right`)}>{state.user.email}</div>
<div className={cn(`item item_3 right`)}>{g.toUpperCase(state.user.alias, 'first')}</div>
<div className={cn(`item item_4 right`)}>{state.user.id}</div> */}


const style = (props: Props) => ({});



export function AppHeaderStyle(state, thisFunc) {
  return `
  .app_header {
    width:100%;
  }
  .search {
    width:110px;
    padding-left:10px;
    border-radius:10px;
    border:solid #5555 1px;
  }
  .segment {
    padding-left:30px;
  }
  .cont {
    display:-webkit-box;display:-ms-flexbox;display:flex;
    flex-direction:row;
    flex-grow:1;
    flex-shrink:1;
    flex-basis:auto;
    height:auto;
    max-width:100%;
    width:auto;
    //background-color:gray;
   }
   .item {
    display:flex;
    justify-content:center;
    align-items:center;
    height:40px;
    color:black;
    text-shadow:1px 1px black;
    font-size:10px;
    font-size:15px;
    padding-left:10px;
    padding-right:10px;
   }

  .right {
    float:right;
  }
      `
}
