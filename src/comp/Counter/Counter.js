// @flow

import React, { useState } from 'react'
import s from './Counter.css'
import u from '../../lib/util/util';

type Props = {
  alias: string,
  children?: React.Node,
}

function randomItemColors() {
  const items = document.querySelectorAll('.item');
  for(let item of items){
    var r = Math.floor(255 * Math.random());
    var g = Math.floor(255 * Math.random());
    var b = Math.floor(255 * Math.random());
    item.style.background = `rgb(${r},${g},${b})`
  }
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
