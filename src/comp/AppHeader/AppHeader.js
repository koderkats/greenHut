// @flow

import React, {useState, useEffect, useContext} from 'react'
import g, { which } from '../../global'
// import s from './AppHeader.css'
import thisStyle from './AppHeader.css.js'


import api from '../../lib/api/api'
import Divider from '../../comp/Divider/Divider'

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

function styler(style, state, prefix) {
  const styles = style();
  let newStyles = {}
  for (let key in styles) {
    newStyles[`${prefix}__${key}`] = styles[key]
  }
  let styleString = ''
  console.log('ASDF', newStyles)
  for (let key in newStyles) {
    styleString += ` .${key}{\n${newStyles[key]}\n}\n`
    //newStyles[`${prefix}__${key}`] = styles[key]
  }
  //     <style dangerouslySetInnerHTML={{__html: styleString}} />

  return styleString
}


  // const [user, setUser] = useState(g.initialState.user);

  useEffect(() => {
    g.func(thisFile, thisFunc + ':useEffect');

    api.getUser(1).then((user)=>{
      g.func(thisFile, thisFunc + ':useEffect:api.getUser:resolved', user);
      setState( Object.assign({}, state, {user}) );
    });

  }, []);

  return (<>
    <style dangerouslySetInnerHTML={{__html: styler(thisStyle, state, thisFunc)}} />
    <div comp={thisFunc} className={cn('app_header')} alias={props.alias} style={g.style(props, style, thisFunc)}>

      <div className={cn(`segment`)}>
        <div className={cn(`cont`)}>
          <div className={cn(`item item_1`)}>1</div>
          <div className={cn(`item item_2`)}>2</div>
          <div className={cn(`item item_3`)}>3</div>
        </div>
      </div>

      <div className={cn(`item item_1 right`)}>1</div>
      <div className={cn(`item item_2 right`)}>{state.user.email}</div>
      <div className={cn(`item item_3 right`)}>{g.toUpperCase(state.user.alias, 'first')}</div>
      <div className={cn(`item item_4 right`)}>{state.user.id}</div>
    </div>
  </>);

}

export default AppHeader

const style = (props: Props) => ({});
