import styled, { css } from 'styled-components'
import Upload from '../../../../icon/Upload'
import Delete from '../../../../icon/Delete'

export const EditWrp = styled.div`
  box-sizing: border-box;
  position: absolute;
  cursor: initial;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.59);
  width: 100%;
  top: 0;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
`

export const EditContainer = styled.div`
  margin: auto;
  display: flex;
`

export const EditContentWrp = styled.button`
  border: none;
  padding: 0;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  height: 22px;
  font-size: 16px;
  color: #ffffff;
  position: relative;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  position: absolute;
  width: 100%;
  opacity: 0;
  cursor: pointer;
`

export const Divider = styled.span`
  height: 22px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 0 20px;
`

const IconStyle = css`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`

export const UploadIcon = styled(Upload)`
  ${IconStyle}
`

export const DeleteIcon = styled(Delete)`
  ${IconStyle}
`
