// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import EditImageCarouselLinear from '../ImageCarouselLinear/edit'
import EditImageCarouselZoom from '../ImageCarouselZoom/edit'
import EditImageCarousel3D from '../ImageCarousel3D/edit'
import { images } from '../../data'

const ZOOM = 'default'
const ThreeD = '3d'

const Index = props => {
  const { data, activeStyle, edit, updateData, uploadContent, style } = props

  switch (activeStyle) {
    case ThreeD:
      return (
        <EditImageCarousel3D
          updateData={updateData}
          uploadContent={uploadContent}
          data={data}
          edit={edit}
          style={style}
        />
      )

    case ZOOM:
      return (
        <EditImageCarouselZoom
          updateData={updateData}
          uploadContent={uploadContent}
          data={data}
          edit={edit}
          style={style}
        />
      )

    default:
      return (
        <EditImageCarouselLinear
          updateData={updateData}
          uploadContent={uploadContent}
          data={data}
          edit={edit}
          style={style}
        />
      )
  }
}

Index.defaultProps = {
  data: images,
  edit: false,
}

export default Index
