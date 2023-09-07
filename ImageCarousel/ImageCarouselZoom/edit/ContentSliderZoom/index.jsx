import React, { useState, useRef, useEffect, useCallback } from 'react'
import EditImageCard from '../EditImageCard'
import AddNewImage from '../AddNewImage'
import { Container, LeftArrow, RightArrow, Slider, ImgWrp } from './style'
import { withTheme } from 'styled-components'

const ADD = 'add'
const REMOVE = 'remove'

const Index = props => {
  const [index, updateIndex] = useState(3)
  const [size, updateSize] = useState({
    width: '40%',
    height: '30%',
  })
  const action = useRef(true)
  const stopAnimation = useRef(false)
  const timeout = useRef(null)
  const userAction = useRef('')

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

  const nextSlide = () => {
    stopAnimation.current = false
    if (action.current) {
      updateIndex(index + 1)
      action.current = false
    }
  }

  const prevSlide = () => {
    stopAnimation.current = false
    if (action.current) {
      updateIndex(index - 1)
      action.current = false
    }
  }

  const handleRemove = id => {
    userAction.current = REMOVE
    if (typeof props.onRemove === 'function') {
      props.onRemove(id)
    }
  }

  const handleAdd = (data, id) => {
    if (props.onChange && typeof props.onChange === 'function') {
      userAction.current = ADD
      props.onChange(data, id)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', resetCardSize, false)
    resetCardSize()
  }, [])

  useEffect(() => {
    if (userAction.current === ADD) {
      prevSlide()
      userAction.current = ''
    }

    if (
      props.contents.length != 0 &&
      userAction.current === REMOVE &&
      index >= props.contents.length + 3
    ) {
      stopAnimation.current = true
      userAction.current = ''
      updateIndex(2)
    }
  }, [props.contents])

  const { contents, onChange, uploadContent } = props
  const first = contents[0]
  const last = contents[contents.length - 1]
  const secondLast = contents[contents.length - 2]

  let updatedContents = []
  if (contents.length === 0) {
    updatedContents = [
      { type: ADD },
      { type: ADD },
      { type: ADD },
      { type: ADD },
      { type: ADD },
      { type: ADD },
    ]
  } else if (contents.length === 1) {
    updatedContents = [
      { type: ADD },
      last,
      { type: ADD },
      ...contents,
      { type: ADD },
      first,
    ]
  } else {
    updatedContents = [
      secondLast,
      last,
      { type: ADD },
      ...contents,
      { type: ADD },
      first,
    ]
  }

  const handleTransitionEnd = () => {
    action.current = true
    if (index >= updatedContents.length - 2) {
      stopAnimation.current = true
      updateIndex(2)
    } else if (index === 1) {
      stopAnimation.current = true
      updateIndex(updatedContents.length - 3)
    } else {
      stopAnimation.current = false
    }
  }

  return (
    <Container>
      <LeftArrow onClick={prevSlide} fillColor={props.theme} />
      <Slider height={size.height}>
        {updatedContents.map((image, i) => {
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
              {image.type === ADD ? (
                <AddNewImage
                  onChange={handleAdd}
                  active={i === s2}
                  productId={i}
                  uploadContent={uploadContent}
                />
              ) : (
                <EditImageCard
                  content={image}
                  active={i === s2}
                  productId={i}
                  onChange={onChange}
                  onRemove={handleRemove}
                  uploadContent={uploadContent}
                />
              )}
            </ImgWrp>
          )
        })}
      </Slider>
      <RightArrow onClick={nextSlide} fillColor={props.theme} />
    </Container>
  )
}

export default withTheme(Index)
