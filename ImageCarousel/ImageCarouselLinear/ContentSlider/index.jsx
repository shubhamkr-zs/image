import React, { useState, useRef, useEffect } from 'react'
import { withTheme } from 'styled-components'
import debounce from '../../../../utils/debounce'

import {
  Container,
  Window,
  Slider,
  SliderWrp,
  RightArrow,
  LeftArrow,
  IndicatorWrp,
  Indicator,
} from './style'

const ContentSlider = props => {
  const [translateValue, updateTranslateValue] = useState(0)
  const sliderEle = useRef(null)
  const index = useRef(0)
  const interval = useRef()
  const [numOfIndicator, updateNumOfIndicator] = useState(0)

  const getNumOfIndicators = () => {
    const ele = sliderEle.current
    const windowWidth = ele.offsetWidth
    const sliderWidth = ele.scrollWidth
    const child = ele.children[0]
    const oneSlideWidth = elementWidth(child)
    const numOfSlide = Math.floor(windowWidth / oneSlideWidth)
    const widthToSlide = oneSlideWidth * numOfSlide

    const indicatorCount = Math.ceil(sliderWidth / widthToSlide)

    return indicatorCount
  }

  useEffect(() => {
    const ele = sliderEle.current
    const windowWidth = ele.offsetWidth
    const sliderWidth = ele.scrollWidth
    const child = ele.children[0]
    const oneSlideWidth = elementWidth(child)
    const numOfSlide = Math.floor(windowWidth / oneSlideWidth)
    const widthToSlide = oneSlideWidth * numOfSlide
    const indicatorCount = Math.ceil(sliderWidth / widthToSlide)
    updateNumOfIndicator(indicatorCount)

    window.addEventListener('resize', debounce(handleResize, 500))
  }, [])

  const handleResize = () => {
    const indicator = getNumOfIndicators()
    updateNumOfIndicator(indicator)
    index.current = 0
    updateTranslateValue(0) // on resize window reset carousel position
  }

  const slide = width => {
    props.onSlide(index.current)
    updateTranslateValue(width)
  }

  const goToPrevSlide = () => {
    clearInterval(interval.current)

    if (index.current - 1 < 0) return

    index.current -= 1
    slide(-slideWidth(index.current))
  }

  const goToNextSlide = () => {
    clearInterval(interval.current)

    if (index.current + 1 > numOfIndicator - 1) return // current index start from 0

    index.current += 1
    const width = -slideWidth(index.current)
    slide(width)
  }

  const slideTo = e => {
    index.current = +e.target.id
    const width = slideWidth(index.current)
    slide(-width)
  }

  const slideWidth = currentIndex => {
    const ele = sliderEle.current
    const windowWidth = ele.offsetWidth
    const sliderWidth = ele.scrollWidth
    const slidableWidth = sliderWidth - windowWidth
    const child = ele.children[0]
    const oneSlideWidth = elementWidth(child)
    const numOfSlide = Math.floor(windowWidth / oneSlideWidth) // to find how many card can fit in window
    const widthToSlide = oneSlideWidth * numOfSlide // to find the width, to slide in each click

    if (currentIndex * widthToSlide > slidableWidth) {
      return -translateValue + (slidableWidth + translateValue)
    } else {
      return currentIndex * oneSlideWidth * numOfSlide
    }
  }

  // To find the html element exact with including margin, padding and border
  const elementWidth = ele => {
    const style = ele.currentStyle || window.getComputedStyle(ele)
    const width = ele.scrollWidth
    const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight)
    const padding =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight)
    const border =
      parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth)
    const totalWidth = width + margin + padding + border
    return totalWidth || 0
  }

  const { children } = props
  if (children.length === 0) return
  return (
    <Container>
      <Window>
        <LeftArrow
          direction="left"
          onClick={goToPrevSlide}
          fillColor={props.theme}
        />
        <SliderWrp>
          <Slider ref={sliderEle} translateValue={translateValue}>
            {children}
          </Slider>
        </SliderWrp>
        <RightArrow onClick={goToNextSlide} fillColor={props.theme} />
      </Window>
      <IndicatorWrp>
        {children.slice(0, numOfIndicator).map((_, i) => {
          return (
            <li key={i}>
              <Indicator
                active={index.current === i}
                onClick={slideTo}
                id={i}
              />
            </li>
          )
        })}
      </IndicatorWrp>
    </Container>
  )
}

export default withTheme(ContentSlider)
