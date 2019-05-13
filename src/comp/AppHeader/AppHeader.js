// @flow

import * as React from 'react'
import {useEffect} from 'react'
import s from './AppHeader.css'
import u from '../../lib/util/util';

type Props = {
  alias: string,
  children?: React.Node,
}

const compName = 'AppHeader'

function AppHeader(props: Props) {
  // useEffect: executes after component rendered
  useEffect(() => {
    console.log('useEffect running');
    (function randomItemColors() {
      const items = document.querySelectorAll('[data-item]');
      for(let item of items){
        var r = Math.floor(255 * Math.random());
        var g = Math.floor(255 * Math.random());
        var b = Math.floor(255 * Math.random());
        item.style.background = `rgb(${r},${g},${b})`
      }
    })();

  });
  return (
    <div data-app-header comp={compName} alias={props.alias} className={s.comp} style={u.mergeComponentStyles(props, style)}>

      <div data-segment>
        <div data-cont>
          <div data-item="1">1</div>
          <div data-item="2">2</div>
          <div data-item="3">3</div>
        </div>
      </div>

      <div data-item="1" data-right>1</div>
      <div data-item="2" data-right>2</div>
      <div data-item="3" data-right>3</div>
      <div data-item="4" data-right>4</div>

    </div>
  );
}

export default AppHeader

const style = (props: Props) => ({
});
