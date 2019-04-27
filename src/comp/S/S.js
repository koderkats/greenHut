// @flow

import React from 'react'
import s from './S.css'
import u from '../../lib/util/util';

type Props = {
  alias: ?String,
}

const compName = 'S'

const S = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
    {props.children}
  </div>
)

export default S

const style = (props: Props) => ({
});
