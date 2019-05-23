// @flow

import * as React from 'react'
import g, { which } from '../../global'

const thisFile = 'Divider.js'

type Props = {
}

function Divider(props: Props) {
  const thisFunc = 'Divider'
  g.func(false, thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(DividerStyle, null, thisFunc)}} />
    <hr comp={thisFunc} className={cn(`comp`)} style={g.style(props, style, thisFunc)}/>
  </>);
}

export default Divider

const style = (props: Props) => ({});

export function DividerStyle(state, thisFunc) {
	return `
	.comp {
		width:100%;
	}
  `
}
