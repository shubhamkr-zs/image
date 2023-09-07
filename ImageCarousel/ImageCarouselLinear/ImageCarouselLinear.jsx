import React, { useState } from 'react'
import ContentSlider from './ContentSlider'

import { Container, Title, ProductSliderWrp, ImgWrp, Img } from './style'

const LinierVideoCarousel = props => {
  const [slide, updateSlide] = useState({
    status: false,
    id: 1,
  })
  const slided = index => {
    updateSlide({
      status: !slide.status,
      id: index - 1,
    })
  }

  const { data } = props

  if (!data) return

  return (
    <Container>
      <Title>{data.title}</Title>
      <ProductSliderWrp>
        <ContentSlider onSlide={slided}>
          {data.slideData.map((image, index) => {
            return (
              <ImgWrp key={image.url + index}>
                <Img src={image.url} />
              </ImgWrp>
            )
          })}
        </ContentSlider>
      </ProductSliderWrp>
    </Container>
  )
}

export default LinierVideoCarousel
