import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import Arrow from '../../../icon/Arrow'

const Container = styled.div`
  position: relative;
  margin: 0 auto;
`

const SliderWrp = styled.div`
  overflow: hidden;
  padding: 5rem 2rem 1rem 2rem;
`

const Slider = styled.div`
  height: 500px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
`

const ArrowWrp = styled.div`
  display: flex;
  justify-content: center;
`

const RightArrow = styled(Arrow)`
  height: 1.5rem;
  width: 1.5rem;
  transform: rotateZ(-90deg);
  cursor: pointer;
`

const LeftArrow = styled(RightArrow)`
  margin-right: 1.25rem;
  transform: rotateZ(90deg);
`

const ContentSlider3D = props => {
  const sliderEle = useRef(null)
  const index = useRef(1)
  const interval = useRef()
  const action = useRef(true)

  useEffect(() => {
    const slider = sliderEle.current
    const firstSlide = slider.children[0]
    const secondSlide = slider.children[1]
    const lastSlide = slider.children[slider.children.length - 1]
    const secondLastSlide = slider.children[slider.children.length - 2]
    const cloneFirst = firstSlide.cloneNode(true)
    const cloneSecond = secondSlide.cloneNode(true)
    const cloneLast = lastSlide.cloneNode(true)
    const cloneSecondLast = secondLastSlide.cloneNode(true)

    slider.appendChild(cloneFirst)
    slider.appendChild(cloneSecond)
    slider.insertBefore(cloneSecondLast, firstSlide)
    slider.insertBefore(cloneLast, firstSlide)

    goToNextSlide()

    // setInterval(() =>{
    //   goToNextSlide()
    // }, 1500)
  }, [])

  const removeAnimation = () => {
    const slider = sliderEle.current
    const children = slider.children

    for (let i = 0; i < children.length; i++) {
      children[i].style.transform = `translate3d(-50%, -40px, -120px)`
      children[i].style.boxShadow =
        '0 6px 10px 0 rgba(0,0,0,.3), 0 2px 2px 0 rgba(0,0,0,.2)'
      children[i].style.transition = `none`
      children[i].style.opacity = 0
    }
  }

  const animationEnd = () => {
    action.current = true
    const children = sliderEle.current.children
    children[index.current].removeEventListener('transitionend', animationEnd)

    if (index.current === children.length - 2) {
      index.current = 2
      slide(index.current)
    }

    if (index.current === 1) {
      index.current = children.length - 3
      slide(index.current)
    }
  }

  const goToPrevSlide = () => {
    if (!action.current) return
    action.current = false

    index.current -= 1
    slide(index.current, true)
  }

  const goToNextSlide = () => {
    if (!action.current) return
    action.current = false

    index.current += 1
    slide(index.current, true)
  }

  const slide = (currentIndex, animate) => {
    if (typeof props.onSlide === 'function') {
      props.onSlide(currentIndex)
    }

    removeAnimation()

    const slider = sliderEle.current
    const children = slider.children || []

    const i = currentIndex
    if (animate) {
      children[i - 1].style.transition = `all 0.50s ease`
      children[i].style.transition = `all 0.50s ease`
      children[i + 1].style.transition = `all 0.50s ease`

      if (i + 2 >= children.length) {
        children[4].style.transition = `all 0.50s ease`
      } else {
        children[i + 2].style.transition = `all 0.50s ease`
      }
    }

    children[i].addEventListener('transitionend', animationEnd)

    children[i].style.opacity = 1
    children[i + 1].style.opacity = 1

    children[i - 1].style.transform = `translate3d(-50%, 100px, 0) scale(0.9)`
    children[i].style.transform = `translate3d(-50%, 0, 0)`
    children[i + 1].style.transform = `translate3d(-50%, -50px, -70px)`

    if (i + 2 >= children.length) {
      children[4].style.opacity = 1
      children[4].style.transform = `translate3d(-50%, -100px, -130px)`
    } else {
      children[i + 2].style.opacity = 1
      children[i + 2].style.transform = `translate3d(-50%, -100px, -130px)`
    }
  }

  const { children } = props
  if (children.length === 0) return
  return (
    <Container>
      <SliderWrp>
        <Slider ref={sliderEle}>{children}</Slider>
      </SliderWrp>
      <ArrowWrp>
        <LeftArrow direction="left" onClick={goToPrevSlide} />
        <RightArrow onClick={goToNextSlide} />
      </ArrowWrp>
      {/* <IndicatorWrp>
        {
          children.slice(0,numOfIndicator).map((_, i) => {
            return (
              <li key={i}>
                <Indicator active={index.current===i} onClick={slideTo} id={i}/>
              </li>
            )
          })
        }
      </IndicatorWrp> */}
    </Container>
  )
}

export default ContentSlider3D
