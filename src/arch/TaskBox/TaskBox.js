// X@flow

import * as React from 'react'
import s from './TaskBox.css'
import u from '../../lib/util/util';

type Props = {
  children?: React.Node,
  alias?: String,
}

const compName = 'TaskBox'

const TaskBox = (props: Props) => {
  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
      {props.children}
    </div>
  )
}

export default TaskBox

const style = (props: Props) => ({
});
