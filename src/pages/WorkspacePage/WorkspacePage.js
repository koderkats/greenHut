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
  return (
    <div comp={thisFunc} alias={props.alias} className={s.comp}></div>
  );
}

export default WorspacePage
