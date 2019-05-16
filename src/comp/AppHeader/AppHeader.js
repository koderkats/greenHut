// @flow

import * as React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import s from './AppHeader.css'
import u from '../../lib/util/util'
import api from '../../lib/api/api'

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'AppHeader'

function AppHeader(props: Props) {

  const [user, setUser] = useState({id:-1, alias:'ALIAS', email:'EMAIL'});


  // useEffect: executes after every render, if props/state changes
  useEffect(() => {
    console.log('AppHeader useEffect running');
    (function randomItemColors() {
      const items = document.querySelectorAll('[data-item]');
      for(let item of items){
        var r = Math.floor(255 * Math.random());
        var g = Math.floor(255 * Math.random());
        var b = Math.floor(255 * Math.random());
        item.style.background = `rgb(${r},${g},${b})`
      }
    })();

    api.getUser(1).then((user)=>{
      setUser(user);
    });

  }, []); // []: dependecy vars, if dendency vars change then run useEffect again

  return (
    <div data-app-header comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>

      <div data-segment>
        <div data-cont>
          <div data-item="1">1</div>
          <div data-item="2">2</div>
          <div data-item="3">3</div>
        </div>
      </div>

      <div data-item="1" data-right>1</div>
      <div data-item="2" data-right>{user.email}</div>
      <div data-item="3" data-right>{user.alias}</div>
      <div data-item="4" data-right>{user.id}</div>

    </div>
  );

}

export default AppHeader

const style = (props: Props) => ({
});
