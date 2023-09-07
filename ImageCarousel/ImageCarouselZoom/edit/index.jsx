// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState, useEffect, useRef } from 'react'
import EditImageCarouselZoomContainer from './EditImageCarouselZoomContainer'
import ImageCarouselZoomUI from '../index'

const Index = props => {
  const { edit, data, uploadContent, updateData, style } = props // uploadContent is a function to upload content like image on server
  const [contents, updateContents] = useState(data || {})
  const prevProps = useRef(null) // to store the prev props value

  useEffect(() => {
    if (
      prevProps.current &&
      edit === false &&
      typeof updateData === 'function'
    ) {
      updateData(contents)
    }
    prevProps.current = edit
  }, [edit])

  const handleUpdateData = (newData, index) => {
    if (!index) {
      updateContents({
        ...newData,
        slideData: contents.slideData,
      })
      return
    }

    // eslint-disable-next-line no-param-reassign
    index -= 3
    const newSlideData = [...contents.slideData]
    if (index < 0) {
      newSlideData.push(newData)
    } else {
      newSlideData[index] = {
        ...newSlideData[index],
        ...newData,
      }
    }

    updateContents({
      title: contents.title,
      slideData: newSlideData,
    })
  }

  const handleRemoveData = id => {
    // eslint-disable-next-line prefer-const
    let updatedData = {
      title: contents.title,
      slideData: [...contents.slideData],
    }
    updatedData.slideData.splice(id - 3, 1) // -3 because we are adding 5 extra card for infinite scrolling effect
    updateContents(updatedData)
  }

  if (edit) {
    return (
      <EditImageCarouselZoomContainer
        data={contents}
        onUpdateData={handleUpdateData}
        onRemoveData={handleRemoveData}
        uploadContent={uploadContent}
        style={style}
      />
    )
  }

  return <ImageCarouselZoomUI data={data} style={style} />
}

export default Index
