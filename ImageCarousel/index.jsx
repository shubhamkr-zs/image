// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import ImageCarouselLinear from './ImageCarouselLinear'
import ImageCarouselZoom from './ImageCarouselZoom'
import ImageCarousel3D from './ImageCarousel3D'
import { images } from '../data'

const LINEAR = 'LINEAR'
const ZOOM = 'default'
const ThreeD = '3d'

const Index = props => {
  const { data, activeStyle, autoScroll, timer, style } = props

  switch (activeStyle) {
    case ThreeD:
      return (
        <ImageCarousel3D
          data={data}
          autoScroll={autoScroll}
          timer={timer}
          style={style}
        />
      )

    case ZOOM:
      return (
        <ImageCarouselZoom
          data={data}
          autoScroll={autoScroll}
          timer={timer}
          style={style}
        />
      )

    default:
      return (
        <ImageCarouselLinear
          data={data}
          autoScroll={autoScroll}
          timer={timer}
        />
      )
  }
}

Index.defaultProps = {
  data: images,
  activeStyle: LINEAR,
}

export default Index
