// @flow

import React from 'react'
import s from './D.css'
import u from '../../lib/util/util';

type Props = {
  alias: ?String,
}

const compName = 'D'

const D = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
    {props.children}
  </div>
)

export default D

const style = (props: Props) => ({
});
