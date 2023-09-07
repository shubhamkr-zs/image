import styled from 'styled-components'
import { SCREEN_SIZE } from '../../../../lib/Media'
import styleVariables from '../../../utils/styleVariables'

const {
  paddingTopMobile,
  paddingBottomMobile,
  paddingLeftMobile,
  paddingRightMobile,

  paddingTopTablet,
  paddingBottomTablet,
  paddingLeftTablet,
  paddingRightTablet,

  paddingTopDesktop,
  paddingBottomDesktop,
  paddingLeftDesktop,
  paddingRightDesktop,
} = styleVariables

export const Container = styled.div`
  border: solid 1px #e3e3e3;
  background-color: #ffffff;
  padding: ${paddingTopMobile} ${paddingRightMobile} ${paddingBottomMobile}
    ${paddingLeftMobile};

  ${SCREEN_SIZE.From.MobileL} {
    padding: ${paddingTopTablet} ${paddingRightTablet} ${paddingBottomTablet}
      ${paddingLeftTablet};
  }

  ${SCREEN_SIZE.From.Desktop} {
    padding: ${paddingTopDesktop} ${paddingRightDesktop} ${paddingBottomDesktop}
      ${paddingLeftDesktop};
  }
`

export const Title = styled.h3`
  font-size: 1.875rem;
  line-height: 1.33;
  letter-spacing: -0.66px;
  color: ${({ theme }) =>
    theme.primaryColor ? `${theme.primaryColor}` : `#7e7efc`};
  font-family: ${({ theme }) =>
    theme.fontFamily ? `${theme.fontFamily}` : `Open Sans, sans-serif`};
  text-align: center;
  font-weight: normal;
  margin: 0 0 1.875rem 0;
`

export const ProductSliderWrp = styled.div``

export const ImgWrp = styled.div`
  display: inline-block;
  width: 376px;
  height: 240px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  &:not(:last-child) {
    margin-right: 1.25rem;
  }
`

export const Img = styled.img`
  width: 100%;
`
