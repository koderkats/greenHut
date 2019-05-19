// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'
import Divider from '../../comp/Divider/Divider'
import u from '../../lib/util/util'
import api from '../../lib/api/api'
import s from './AppHeader.css'

const thisFile = 'AppHeader.js'

type Props = {
  alias: string,
  children?: React.Node,
}

function AppHeader(props: Props) {
  const thisFunc = 'AppHeader'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  const [state, setState] = useContext(g.GlobalContext);
  g.dir(thisFile, thisFunc, state, 'GLOBAL CONTEXT');

  const [user, setUser] = useState(g.initialState.user);

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
    <div comp={thisFunc} className={cn('app-header')} alias={props.alias} style={u.mergeComponentStyles(props, style)}>

      <div className={cn(`segment`)}>
        <div className={cn(`cont`)}>
          <div className={cn(`item item-1`)}>1</div>
          <div className={cn(`item item-2`)}>2</div>
          <div className={cn(`item item-3`)}>3</div>
        </div>
      </div>

      <div className={cn(`item item-1 right`)}>1</div>
      <div className={cn(`item item-2 right`)}>{user.email}</div>
      <div className={cn(`item item-3 right`)}>{g.toUpperCase(user.alias, 'first')}</div>
      <div className={cn(`item item-4 right`)}>{user.id}</div>
    </div>
  );

}

export default AppHeader

const style = (props: Props) => ({
});
