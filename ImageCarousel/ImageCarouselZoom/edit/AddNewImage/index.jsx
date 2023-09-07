import React, { useState, useRef } from 'react'
import UploadImage from '../UpdateImage'
import Loader from '../../../../Loader'
import {
  Wrp,
  AddImage,
  AddIcon,
  Input,
  InputGroup,
  Title,
  SubTitle,
  SubTitleWrp,
  Img,
  LoaderWrp,
} from './style'

const Index = props => {
  const [contentData, updateContentData] = useState({
    url: '',
    title: '',
    description: '',
  })
  const [loading, updateLoadingStatus] = useState(false)
  const contentUrl = useRef('')

  const { onChange, active, productId } = props

  const handleChange = data => {
    updateContentData({
      ...contentData,
      ...data,
    })
  }

  const handleSave = () => {
    if (
      typeof onChange === 'function' &&
      contentData.title &&
      contentData.description &&
      contentUrl.current
    ) {
      onChange({ ...contentData, url: contentUrl.current }, productId)
      contentUrl.current = ''
      updateContentData({
        title: '',
        description: '',
        url: '',
      })
    }
  }

  const handleUpload = e => {
    const file = e.target.files[0]

    var reader = new FileReader()
    reader.addEventListener(
      'load',
      function() {
        const url = reader.result
        updateContentData({
          ...contentData,
          url,
        })
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
        contentUrl.current = url
      })
    }
  }

  const handleRemove = () => {
    contentUrl.current = '' // clear stored content url
    updateContentData({
      ...contentData,
      url: '',
    })
  }

  const handleClick = () => {
    if (typeof props.onClick === 'function' && !active) {
      props.onClick(productId)
    }
  }

  return (
    <Wrp onClick={handleClick}>
      {contentData.url ? (
        <>
          <Img src={contentData.url} />
          {loading ? (
            <LoaderWrp>
              <Loader color="#7e7efc" />
            </LoaderWrp>
          ) : (
            <UploadImage onUpload={handleUpload} onRemove={handleRemove} />
          )}
        </>
      ) : (
        <AddImage>
          <AddIcon />
          {active && <Input type="file" onChange={handleUpload} />}
        </AddImage>
      )}
      {active && (
        <InputGroup>
          <Title
            name="title"
            placeholder="Header goes here"
            onChange={handleChange}
            onBlur={handleSave}
            value={contentData.title}
          />
          <SubTitleWrp>
            <SubTitle
              name="description"
              placeholder="Sub text goes here"
              onChange={handleChange}
              onBlur={handleSave}
              value={contentData.description}
            />
          </SubTitleWrp>
        </InputGroup>
      )}
    </Wrp>
  )
}

export default Index
