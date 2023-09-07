// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import EditInput from '../EditInput'
import styleVariables from '../../../../utils/styleVariables'

const {
  paddingTopDesktop,
  paddingLeftDesktop,
  paddingRightDesktop,
} = styleVariables

export const Container = styled.div`
  padding: ${paddingTopDesktop} ${paddingRightDesktop} 130px
    ${paddingLeftDesktop};
  border: solid 1px #e3e3e3;
  background-color: #ffffff;
  text-align: center;
  ${({ style }) =>
    style && style.bgColor && `background-color: ${style.bgColor};`};
  ${({ style }) =>
    style &&
    style.bgImage &&
    `background-image: url(${style.bgImage});
  background-size:cover ; 
  background-repeat: no-repeat; 
  background-position: 50% 50%;
  `};
`

export const TitleWrp = styled.div`
  margin: 0 0 50px 0;
`

export const Title = styled(EditInput)`
  height: 40px;
  display: inline-block;
  overflow: hidden;
  font-size: 30px;
  font-weight: normal;
  line-height: 1.33;
  color: ${({ theme }) =>
    theme.primaryColor ? `${theme.primaryColor}` : '#7e7efc'};
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : '#7e7efc'};
  text-align: center;
  padding: 0 0 6px 0;
  border-width: 1.5px;
`

export const ProductSliderWrp = styled.div``
