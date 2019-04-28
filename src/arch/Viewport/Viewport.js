// X@flow

import * as React from 'react'
import s from './Viewport.css'
import u from '../../lib/util/util';

type Props = {
  children?: React.Node,
  w?: Number,
  h?: Number,
  vw?: Number,
  vh?: Number,
}

const compName = 'Viewport'

const Viewport = (props: Props) => {
  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
      {props.children}
    </div>
  )
}

export default Viewport

const style = (props: Props) => ({
  width: props.w,
  height: props.h,
  // maxWidth: props.w > props.vw ? props.vw + 'px' : props.w + 'px',
  // maxHeight: props.h > props.vh ? props.vh + 'px' : props.h + 'px',
});
