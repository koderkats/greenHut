// @flow

import * as React from 'react'
import s from './AppHeader.css'
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

const compName = 'AppHeader'

function AppHeader(props: Props) {
  return (
    <div class="header">

      <div class="segment left">
        <div class="flex-left container">
          <div class="item item1">1</div>
          <div class="item item2">2</div>
          <div class="item item3">3</div>
        </div>
      </div>

      <div class="item right item1">1</div>
      <div class="item right item2">2</div>
      <div class="item right item3">3</div>

    </div>
  );
}

export default AppHeader

const style = (props: Props) => ({
});
