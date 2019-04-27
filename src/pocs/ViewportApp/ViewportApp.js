// @flow

import React from 'react'
import Viewport from '../../comp/Viewport/Viewport'
import E from '../../comp/E/E'
import D from '../../comp/D/D'
import S from '../../comp/S/S'

const ViewportApp = () => (
  <>

    <style>{`
      [alias="page-cont-wordList-a"],
      _ { width:400px; background:purple; margin:auto; padding:30px; }
      [alias="page-cont-wordList"],
      _ { width: 150px; margin:auto; text-align:center; background:blue; overflow-x:hidden; }

      [alias="page-cont-wordList"] [comp="D"],
      [alias="page-cont-wordList"] [comp="E"],
      [alias="page-cont-wordList"] [comp="S"],
      _ { padding-left:3px; padding-right:3px; background:white; color:green; }
    `}</style>

<Viewport alias="viewport" fg="purple" bg="pink" w={1280} h={720} vw={window.innerWidth} vh={window.innerHeight}>
      test message
      <D alias="page-cont-wordList-a">
        <D alias="page-cont-wordList">
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <E>EEEE</E>
          <E>EEEE</E>
          <E>EEEE</E>
          <E>EEEE</E>
          <E>EEEE</E>
          <E>EEEE</E>
          <E>EEEE</E>
          <E>EEEE</E>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <S>SSSS</S>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
          <D>DDDD</D>
        </D>
      </D>
    </Viewport>

  </>
)

export default ViewportApp
