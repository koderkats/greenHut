// @flow

import React from 'react'
// import D from '../../comp/D/D'
import s from './WorkspacePage.css'


type Props = {
  alias?: String,
}

const compName = 'WorkspacePage'

const WorspacePage = (props) => (
  <div comp={compName} alias={props.alias} className={s.comp}>


  </div>
)

export default WorspacePage
