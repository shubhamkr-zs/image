/* eslint-disable prefer-const */
// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import ContentSlider from './ContentSlider'
import { Container, Title } from './style'

const index = props => {
  const { data, autoScroll, timer, style } = props
  let showDescription = false
  // eslint-disable-next-line no-restricted-syntax
  for (let i in data.slideData) {
    if (data.slideData[i].description) {
      showDescription = true
      break
    }
  }

  return (
    <Container showDescription={showDescription} style={style}>
      <Title>{data.title}</Title>
      <ContentSlider
        contents={data.slideData}
        showDescription={showDescription}
        autoScroll={autoScroll}
        timer={timer}
      />
    </Container>
  )
}

export default index
