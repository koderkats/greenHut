// @flow

import React from 'react'
import s from './TaskBoxAdder.css'
import u from '../../lib/util/util';

type Props = {
}

const compName = 'TaskBoxAdder'

const TaskBoxAdder = (props: Props) => {
  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
      <div>+</div>
    </div>
  )
}

export default TaskBoxAdder

const style = (props: Props) => ({
});
