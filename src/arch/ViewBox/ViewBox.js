// @flow

import * as React from 'react'
import s from './ViewBox.css'
import u from '../../lib/util/util';

type Props = {
  children?: React.Node,
}

const compName = 'ViewBox'

const ViewBox = (props: Props) => {
  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
      {props.children}
    </div>
  )
}

export default ViewBox

const style = (props: Props) => ({
});
