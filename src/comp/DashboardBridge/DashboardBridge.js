// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'
import Divider from '../../comp/Divider/Divider'
import u from '../../lib/util/util'
import api from '../../lib/api/api'
import s from './DashboardBridge.css'

const thisFile = 'DashboardBridge.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function DashboardBridge(props: Props) {
  const thisFunc = 'DashboardBridge'
  g.func(thisFile, thisFunc, props);

  const [state, setState] = useContext(g.GlobalContext);
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  const [user, setUser] = useState({id:-1, alias:'ALIAS', email:'EMAIL'});


  // useEffect: executes after every render, if props/state changes
  useEffect(() => {
    g.func(thisFile, thisFunc + ':useEffect');
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
      g.func(thisFile, thisFunc + ':useEffect:api.getUser:resolved', user);
      setUser(user);
      const newState = {page:'random', count:84}
      if (state.page !== newState.page && state.count !== newState.count) {
        setState(newState);
      }
  
    });

  }, []);

  return (
    <div comp={thisFunc} data-app-header alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>

      <div data-segment>
        <div data-cont>
          <div data-item="1">
            <div data-greeting>{`Good afternoon, ${'Username'}.`}</div>
            <div data-status>{`You have ${0} tasks, ${0} are due today.`}</div>
          </div>
        </div>

        <div data-cont data-tabs>
          <div data-item="1" data-tab>MY TASKS</div>
          <div data-item="2" data-tab>UPDATES</div>
        </div>

      </div>

      <div data-item="1" data-right>1</div>
    </div>
  );

}

export default DashboardBridge

const style = (props: Props) => ({
});
