import styled from 'styled-components'

export const ImgWrp = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Img = styled.img`
  width: 100%;
`

export const FigCaption = styled.figcaption`
  position: absolute;
  width: 100%;
  top: calc(100% + 20px);
  text-align: center;
`

export const Title = styled.h3`
  margin: 0;
  height: 24px;
  overflow: hidden;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: -0.16px;
  color: #000000;
  margin-bottom: 10px;
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : `#7e7efc`};
`

export const SubTitle = styled.p`
  margin: 0;
  height: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: normal;
  letter-spacing: -0.09px;
  color: rgba(0, 0, 0, 0.75);
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : `#7e7efc`};
`
