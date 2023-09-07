// eslint-disable-next-line import/no-extraneous-dependencies
import styled from 'styled-components'
import { SCREEN_SIZE } from '../../../../lib/Media'
import styleVariables from '../../../utils/styleVariables'

const {
  paddingTopDesktop,
  paddingBottomDesktop,
  paddingLeftDesktop,
  paddingRightDesktop,
  paddingTopMobile,
  paddingBottomMobile,
  paddingLeftMobile,
  paddingRightMobile,
  paddingTopTablet,
  paddingBottomTablet,
  paddingLeftTablet,
  paddingRightTablet,
  maxWidthDesktop,
} = styleVariables

export const Container = styled.div`
  max-width: ${maxWidthDesktop};
  margin: auto;
  background-color: #ffffff;
  padding: ${paddingTopMobile} ${paddingRightMobile}
    ${props => (props.showDescription ? '110px' : paddingBottomMobile)}
    ${paddingLeftMobile};

  ${SCREEN_SIZE.From.Tablet} {
    padding: ${paddingTopTablet} ${paddingRightTablet}
      ${props => (props.showDescription ? '120px' : paddingBottomTablet)}
      ${paddingLeftTablet};
  }

  ${SCREEN_SIZE.From.Desktop} {
    padding: ${paddingTopDesktop} ${paddingRightDesktop}
      ${props => (props.showDescription ? '140px' : paddingBottomDesktop)}
      ${paddingLeftDesktop};
  }
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

export const Title = styled.h2`
  height: 40px;
  font-size: 24px;
  line-height: 1.67;
  font-weight: normal;
  color: ${({ theme }) =>
    theme.primaryColor ? `${theme.primaryColor}` : '#7e7efc'};
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : '#7e7efc'};
  overflow: hidden;
  margin: 0 0 25px 0;
  text-align: center;
  font-family: ${({ theme }) =>
      theme.fontFamily ? `${theme.fontFamily}` : '#7e7efc'}
    ${SCREEN_SIZE.From.Tablet} {
    margin: 0 0 30px 0;
    height: 28px;
    line-height: 1.17;
  }

  ${SCREEN_SIZE.From.Desktop} {
    height: 40px;
    font-size: 30px;
    line-height: 1.33;
    margin: 0 0 50px 0;
  }
`
