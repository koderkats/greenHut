// @flow

import * as React from 'react'
import g, { which } from '../../global'

const thisFile = 'Divider.js'

type Props = {
}

function Divider(props: Props) {
  const thisFunc = 'Divider'
  g.func(false, thisFile, thisFunc, props);

  return (
    <hr comp={thisFunc}/>
  );
}

export default Divider
