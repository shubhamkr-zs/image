import React from 'react'
import {
  EditWrp,
  EditContainer,
  EditContentWrp,
  UploadIcon,
  Input,
  Divider,
  DeleteIcon,
} from './style'

const Index = props => {
  const { onUpload, onRemove } = props
  return (
    <EditWrp>
      <EditContainer>
        <EditContentWrp>
          <UploadIcon />
          <Input type="file" onChange={onUpload} />
          Upload New
        </EditContentWrp>
        <Divider />
        <EditContentWrp onClick={onRemove}>
          <DeleteIcon />
          Remove Image
        </EditContentWrp>
      </EditContainer>
    </EditWrp>
  )
}

export default Index
