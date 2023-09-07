// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react'
import EditImageCarouselZoomUI from './EditImageCarouselZoomUI'

const EditImageCarouselZoomContainer = props => {
  const { data, onUpdateData, onRemoveData, uploadContent, style } = props

  const handleChange = (newField, index) => {
    onUpdateData(newField, index)
  }

  const handleRemove = id => {
    onRemoveData(id)
  }

  return (
    <EditImageCarouselZoomUI
      data={data}
      onChange={handleChange}
      onRemove={handleRemove}
      uploadContent={uploadContent}
      style={style}
    />
  )
}

export default EditImageCarouselZoomContainer
