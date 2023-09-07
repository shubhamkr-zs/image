import React, { useState, useEffect } from 'react'
import EditImageCardUI from './EditImageCardUI'

const EditImageCardContainer = props => {
  const { content, active, productId, onChange, onRemove } = props
  const [imageUrl, updateImageUrl] = useState(content.url)
  const [loading, updateLoadingStatus] = useState(false)

  useEffect(() => {
    updateImageUrl(content.url)
  }, [content])

  const handleChange = data => {
    if (typeof onChange === 'function') {
      onChange(data, productId)
    }
  }

  const handleUpload = e => {
    const file = e.target.files[0]

    var reader = new FileReader()
    reader.addEventListener(
      'load',
      function() {
        const url = reader.result
        updateImageUrl(url)
      },
      false
    )

    if (file) {
      reader.readAsDataURL(file)
    }

    updateLoadingStatus(true) // to show loader

    if (typeof props.uploadContent === 'function') {
      props.uploadContent(file, res => {
        updateLoadingStatus(false)
        const { url } = res.imageUpload || { url: '' }
        if (typeof onChange === 'function')
          onChange({ ...content, url }, productId)
      })
    }
  }

  const handleRemove = () => {
    if (typeof onRemove === 'function') {
      onRemove(productId)
    }
  }

  const handleClick = () => {
    if (typeof props.onClick === 'function' && !active) {
      props.onClick(productId)
    }
  }

  const updatedContent = {
    ...content,
    url: imageUrl || content.url,
  }

  return (
    <EditImageCardUI
      active={active}
      loading={loading}
      content={updatedContent}
      onClick={handleClick}
      onChange={handleChange}
      onUpload={handleUpload}
      onRemove={handleRemove}
    />
  )
}

export default EditImageCardContainer
