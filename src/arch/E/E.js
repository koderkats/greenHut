// X@flow

import * as React from 'react'
import s from './E.css'
import u from '../../lib/util/util';

type Props = {
  children?: React.Node,
  alias: ?String,
}

const compName = 'E'

 const E = (props: Props) => (
  <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
    {props.children}
  </div>
)

export default E

const style = (props: Props) => ({
});
