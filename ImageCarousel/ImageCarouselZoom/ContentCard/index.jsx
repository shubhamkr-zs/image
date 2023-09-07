import React from 'react'
import { ImgWrp, Img, FigCaption, Title, SubTitle } from './style'

const Index = props => {
  const { image, active, showDescription } = props
  return (
    <>
      <ImgWrp>
        <Img src={image.url} />
      </ImgWrp>
      {showDescription && active && (
        <FigCaption>
          <Title>{image.title}</Title>
          <SubTitle>{image.description}</SubTitle>
        </FigCaption>
      )}
    </>
  )
}

export default Index
