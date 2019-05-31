// @flow

import * as React from 'react'
import g from '../../global'

const thisFile = 'Divider.js'

type Props = {
}

function Divider(props: Props) {
  const thisFunc = 'Divider'
  g.func(false, thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(DividerStyle, null, thisFunc)}} />
    {/* <hr comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}/> */}
    <div comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}></div>
  </>);
}

export default Divider

const style = (props: Props) => ({});

export function DividerStyle(state, thisFunc) {
	return `
	.comp {
    width:100%;
    margin:0px;
    padding:0px;
    border-top:1px solid black;
    height:0px;
	}
  `
}
