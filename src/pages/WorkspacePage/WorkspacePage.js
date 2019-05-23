// @flow

import React from 'react'
import g, { which } from '../../global'
import s from './WorkspacePage.css'

const thisFile = 'WorkspacePage.js'

type Props = {
  alias?: String,
}

const WorkspacePage = (props) => {
  const thisFunc = 'WorkspacePage'
  g.func(thisFile, thisFunc, props);
  const cn = g.cn(thisFunc);

  return (<>
    <style dangerouslySetInnerHTML={{__html: g.styler(WorkspacePageStyle, null, thisFunc)}} />
    <div comp={thisFunc} className={cn(``)} alias={props.alias} style={g.style(props, style, thisFunc)}></div>
  </>);
}

export default WorkspacePage

const style = (props: Props) => ({});

export function WorkspacePageStyle(state, thisFunc) {
  return `
  `
}
