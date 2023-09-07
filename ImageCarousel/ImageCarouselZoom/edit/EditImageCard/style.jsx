import styled from 'styled-components'
import EditInput from '../../EditInput'

export const ContentWrp = styled.div`
  position: relative;
  top: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
`

export const ImgWrp = styled.div`
  background-color: black;
  height: 100%;
  width: 100%;
  overflow: hidden;
`

export const InputWrp = styled.div`
  max-height: 56px;
  margin-top: 10px;
  padding-bottom: 3px;
  overflow: hidden;
`

export const Title = styled(EditInput)`
  height: 24px;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  padding: 0 1px 2px 1px;
  overflow: hidden;
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : `#7e7efc`};
`

export const SubTitle = styled(EditInput)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.75);
  padding: 0 1px 2px 1px;
  overflow: hidden;
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : `#7e7efc`};
`

export const Img = styled.img`
  width: 100%;
`

export const LoaderWrp = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const FigCaption = styled.figcaption`
  position: absolute;
  width: 100%;
  white-space: initial;
  text-align: center;
  top: calc(100% + 15px);
  cursor: initial;
`
