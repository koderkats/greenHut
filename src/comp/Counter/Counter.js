// @flow

import React, { useState } from 'react'
import s from './Counter.css'
import u from '../../lib/util/util';

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'Counter'

function Counter(props: Props) {
  return (
    <div>
      Content
    </div>
  );
}

export default Counter

const style = (props: Props) => ({
});
