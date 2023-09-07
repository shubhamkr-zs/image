import styled from 'styled-components'
import Arrow from '../../../icon/Arrow'

export const Container = styled.div`
  position: relative;
`

export const Window = styled.div`
  position: relative;
`

export const LeftArrow = styled(Arrow)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  transform: translate(-50%, -50%);
`

export const RightArrow = styled(LeftArrow)`
  right: 0;
  left: auto;
  transform: translate(50%, -50%) rotateY(180deg);
`

export const SliderWrp = styled.div`
  overflow: hidden;
  position: relative;
`

export const Slider = styled.div`
  white-space: nowrap;
  transform: translateX(${props => props.translateValue}px);
  transition: transform ease-out 0.5s;
`

export const IndicatorWrp = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  text-align: center;
  line-height: 0;
  margin-top: 3rem;

  li {
    display: inline-block;
  }

  li:not(:last-child) {
    margin-right: 0.625rem;
  }
`

export const Indicator = styled.button`
  padding: 0;
  outline: none;
  border: none;
  display: inline-block;
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  opacity: ${props => (props.active ? '1' : '0.3')};
  background-color: ${({ active, theme }) =>
    active
      ? `${theme.primaryColor ? `${theme.primaryColor}` : `#7e7efc`}`
      : '00000080'};
  cursor: pointer;
`
