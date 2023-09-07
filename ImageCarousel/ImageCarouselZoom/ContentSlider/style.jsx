import styled from 'styled-components'
import Arrow from '../../../icon/Arrow'
import { SCREEN_SIZE } from '../../../../../lib/Media'
import styleVariables from '../../../../utils/styleVariables'

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
} = styleVariables

export const Container = styled.div`
  position: relative;
`

export const LeftArrow = styled(Arrow)`
  width: 24px;
  height: 24px;
  object-fit: contain;
  cursor: pointer;
  position: absolute;
  top: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`

export const RightArrow = styled(LeftArrow)`
  left: auto;
  right: 0;
  transform: translate(50%, -50%) rotateY(180deg);
`

export const Slider = styled.section`
  height: ${props => props.height}px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
`

export const ImgWrp = styled.figure`
  position: relative;
  margin: auto;
  width: ${props => props.size.width};
  height: ${props => props.size.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;

  border-radius: 4px;
  position: absolute;
  left: 0;
  right: 0;
  cursor: pointer;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37);
  transform: ${props => {
    if (props.activeStyle === 's1') return 'translate3d(-25%, 0, -200px)'
    if (props.activeStyle === 's2') return 'translate3d(0, 0, 0)'
    if (props.activeStyle === 's3') return 'translate3d(25%, 0, -200px)'
    return 'translate3d(0, 0, -400px)'
  }};
  transition: ${props => (props.stopAnimation ? 'none' : 'all 0.6s ease')};

  ${SCREEN_SIZE.From.Tablet} {
    transform: ${props => {
      if (props.activeStyle === 's1') return 'translate3d(-25%, 0, -200px)'
      if (props.activeStyle === 's2') return 'translate3d(0, 0, 0)'
      if (props.activeStyle === 's3') return 'translate3d(25%, 0, -200px)'
      return 'translate3d(0, 0, -400px)'
    }};
  }

  ${SCREEN_SIZE.From.Desktop} {
    transform: ${props => {
      if (props.activeStyle === 's1') return 'translate3d(-35%, 0, -200px)'
      if (props.activeStyle === 's2') return 'translate3d(0, 0, 0)'
      if (props.activeStyle === 's3') return 'translate3d(35%, 0, -200px)'
      return 'translate3d(0, 0, -400px)'
    }};
  }
`

export const Img = styled.img`
  width: 100%;
`
