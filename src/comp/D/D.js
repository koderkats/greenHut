// @flow

import * as React from 'react'
import g, { which } from '../../global'
import s from './D.css'
import u from '../../lib/util/util';

const thisFile = 'D.js'

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'D'

const D = (props: Props) => {
  const thisFunc = 'D'
  g.func(thisFile, thisFunc, props);

  return (
    <div comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>
      {props.children}
    </div>
  );  
}


export default D

const style = (props: Props) => ({
});
