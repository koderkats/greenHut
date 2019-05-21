// @flow

import React from 'react'
import g, { which } from '../../global'
import s from './WorkspacePage.css'

const thisFile = 'WorkspacePage.js'

type Props = {
  alias?: String,
}

const WorspacePage = (props) => {
  const thisFunc = 'WorkspacePage'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  return (<>
    <div comp={thisFunc} className={cn(``)} alias={props.alias} style={g.style(props, style, thisFunc)}></div>
  </>);
}

export default WorspacePage

const style = (props: Props) => ({});
