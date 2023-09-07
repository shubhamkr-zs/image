import React, { useState, useRef, useEffect, useCallback } from 'react'
import ContentCard from '../ContentCard'
import { Container, LeftArrow, RightArrow, Slider, ImgWrp, Img } from './style'
import { withTheme } from 'styled-components'

const Index = props => {
  const [index, updateIndex] = useState(2)
  const [size, updateSize] = useState({
    width: '40%',
    height: '30%',
  })
  const action = useRef(true)
  const stopAnimation = useRef(false)
  const timeout = useRef(null)
  const interval = useRef(null)

  const resetCardSize = useCallback(() => {
    if (timeout.current) {
      window.cancelAnimationFrame(timeout)
    }
    timeout.current = window.requestAnimationFrame(function() {
      // Run our scroll functions
      const width = window.innerWidth
      updateSize({
        width: '65%',
        height: 0.3 * width,
      })
    })
  })

  const handleClick = i => {
    if (index != i && action.current) {
      action.current = false
      updateIndex(i)
    }
  }

  const handleTransitionEnd = () => {
    action.current = true
    if (index === props.contents.length + 2) {
      stopAnimation.current = true
      updateIndex(2)
    } else if (index === 1) {
      stopAnimation.current = true
      updateIndex(props.contents.length + 1)
    } else {
      stopAnimation.current = false
    }
  }

  const nextSlide = () => {
    if (action.current) {
      updateIndex(index + 1)
      action.current = false
    }
  }

  const prevSlide = () => {
    if (action.current) {
      updateIndex(index - 1)
      action.current = false
    }
  }

  const autoScroll = useCallback(() => {
    // clearInterval(interval.current)
    setInterval(() => {
      nextSlide()
    }, props.timer || 3000)
  })

  useEffect(() => {
    window.addEventListener('resize', resetCardSize, false)
    resetCardSize()
    // autoScroll()
  }, [])

  const { contents, showDescription } = props
  const first = contents[0]
  const second = contents[1]
  const last = contents[contents.length - 1]
  const secondLast = contents[contents.length - 2]
  const updateImages = [secondLast, last, ...contents, first, second]
  return (
    <Container>
      <LeftArrow onClick={prevSlide} fillColor={props.theme} />
      <Slider height={size.height}>
        {updateImages.map((image, i) => {
          const s1 = index - 1
          const s2 = index
          const s3 = index + 1

          return (
            <ImgWrp
              key={i}
              size={size}
              onClick={() => handleClick(i)}
              activeStyle={
                (i === s1 && 's1') || (i === s2 && 's2') || (i === s3 && 's3')
              }
              stopAnimation={stopAnimation.current}
              onTransitionEnd={handleTransitionEnd}
            >
              <ContentCard
                image={image}
                active={i === s2}
                showDescription={showDescription}
              />
            </ImgWrp>
          )
        })}
      </Slider>
      <RightArrow onClick={nextSlide} fillColor={props.theme} />
    </Container>
  )
}

export default withTheme(Index)
