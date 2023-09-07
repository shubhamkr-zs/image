import styled, { css } from 'styled-components'
import Add from '../../../../icon/Add'
import EditInput from '../../EditInput'

export const Wrp = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.02);
  position: relative;
  z-index: 10;
  box-sizing: border-box;
  display: flex;
`

const dimention = css`
  height: 63px;
  width: 63px;
  border-radius: 50%;
`

export const AddImage = styled.div`
  ${dimention}
  position: relative;
  margin: auto;
`

export const AddIcon = styled(Add)`
  ${dimention}
  cursor: pointer;
`

export const Input = styled.input`
  ${dimention}
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
`

export const InputGroup = styled.div`
  position: absolute;
  width: 100%;
  white-space: initial;
  text-align: center;
  top: calc(100% + 15px);
`

export const Title = styled(EditInput)`
  height: 24px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  display: inline-block;
  overflow: hidden;
  text-align: center;
  padding: 0 0 2px 0;
`

export const SubTitleWrp = styled.div`
  max-height: 56px;
  overflow: hidden;
  padding: 0 0 3px 0;
  margin-top: 10px;
`

export const SubTitle = styled(EditInput)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  margin: 0;
  padding: 0 1px 2px 1px;
`

export const Img = styled.img`
  width: 100%;
  image-rendering: auto;
`

export const LoaderWrp = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
