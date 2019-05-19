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
  const cn = g.cn(thisFunc);

  const [state, setState] = useContext(g.GlobalContext);
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  const [user, setUser] = useState(g.initialState.user);
  const [dashboardBridge, setdashboardBridge] = useState(g.initialState.dashboardBridge);

  useEffect(() => {
    g.func(thisFile, thisFunc + ':useEffect');

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
    <div comp={thisFunc} className={cn(`dashboardbridge`)} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>

      <div className={cn(`segment`)}>
        <div className={cn(`cont`)}>
          <div className={cn(`item item-1`)}>
            <div className={cn(`greeting`)}>{`Good afternoon, ${g.toUpperCase(user.alias, 'first')}.`}</div>
            <div className={cn(`status`)}>{`You have ${0} tasks, ${0} are due today.`}</div>
          </div>
        </div>

        <div className={cn(`cont tabs`)}>
          <div className={cn(`item item-1`)} tab="myTasks" data-active={dashboardBridge.activeTab === 'myTasks'}>MY TASKS</div>
          <div className={cn(`item item-2`)} tab="updates" data-active={dashboardBridge.activeTab === 'updates'}>UPDATES</div>
        </div>

      </div>

      <div className={cn(`item item-1 right`)}>1</div>
    </div>
  );

}

export default DashboardBridge

const style = (props: Props) => ({
});
