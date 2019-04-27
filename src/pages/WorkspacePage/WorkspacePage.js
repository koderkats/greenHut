// @flow

import React from 'react'
import ViewBox from '../../comp/ViewBox/ViewBox'
import TaskBox from '../../comp/TaskBox/TaskBox'
import D from '../../comp/D/D'

const WorspacePage = () => (
  <>

    <style>{`
      [alias="page-cont-wordList"],
      _ { width: 150px; margin:auto; text-align:center; background:blue; overflow-x:hidden; }

      [alias="page-cont-wordList"] [comp="D"],
      [alias="page-cont-wordList"] [comp="E"],
      [alias="page-cont-wordList"] [comp="S"],
      _ { padding-left:3px; padding-right:3px; background:white; color:green; }

      [alias="taskBox"] { margin-left:30px; margin-top:120px; margin-bottom:30px; min-width:360px; width:360px; }
      [alias="viewboxMain"] { margin-right:30px; }
    `}</style>

    <ViewBox alias="viewboxMain" s={{overflowX:"scroll", overflowY:"hidden", display:"flex", background:'skyblue'}}>

      <TaskBox alias="taskBox">
        <D alias="page-cont-wordList">
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
          <D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D><D>DDDD</D>
        </D>
      </TaskBox>

      <D alias="spacer" s={{display:'inline-block', position:'relative', minWidth:'30px'}}></D>
    </ViewBox>

  </>
)

export default WorspacePage
