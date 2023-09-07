import React from 'react'
import UpdateImage from '../UpdateImage'
import {
  ContentWrp,
  ImgWrp,
  Img,
  LoaderWrp,
  FigCaption,
  InputWrp,
  Title,
  SubTitle,
} from './style'
import Loader from '../../../../Loader'

const EditImageCardUI = props => {
  const { content, active, loading, onChange, onUpload, onRemove } = props

  return (
    <>
      <ContentWrp>
        <ImgWrp>
          <Img src={content.url} />
        </ImgWrp>
        {loading ? (
          <LoaderWrp>
            <Loader />
          </LoaderWrp>
        ) : (
          active && <UpdateImage onUpload={onUpload} onRemove={onRemove} />
        )}
      </ContentWrp>
      {active && (
        <FigCaption>
          <Title
            type="text"
            name="title"
            onChange={onChange}
            value={content.title}
          />
          <InputWrp>
            <SubTitle
              type="text"
              name="description"
              onChange={onChange}
              value={content.description}
            />
          </InputWrp>
        </FigCaption>
      )}
    </>
  )
}

export default EditImageCardUI
