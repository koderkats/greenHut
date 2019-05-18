// @flow

import React from 'react'
import g, { which } from '../../global'
// import D from '../../comp/D/D'
import s from './WorkspacePage.css'

const thisFile = 'WorkspacePage.js'

type Props = {
  alias?: String,
}

const compName = 'WorkspacePage'

const WorspacePage = (props) => {
  const thisFunc = 'WorkspacePage'
  g.func(thisFile, thisFunc, props);
  return (
    <div comp={compName} alias={props.alias} className={s.comp}></div>
  );
}

export default WorspacePage
