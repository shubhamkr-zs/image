// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import ContentSliderZoom from './ContentSliderZoom'
import { Container, Title, ProductSliderWrp, TitleWrp } from './style'

const EditImageCarouselZoomUI = props => {
  const { data, onChange, onRemove, uploadContent, style } = props
  return (
    <Container style={style}>
      <TitleWrp>
        <Title
          type="text"
          name="title"
          onChange={onChange}
          value={data.title}
        />
      </TitleWrp>
      <ProductSliderWrp>
        <ContentSliderZoom
          contents={data.slideData}
          onChange={onChange}
          onRemove={onRemove}
          uploadContent={uploadContent}
        />
      </ProductSliderWrp>
    </Container>
  )
}

export default EditImageCarouselZoomUI
