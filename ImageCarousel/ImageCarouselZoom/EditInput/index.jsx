import React, { Component } from 'react'

import { Input } from './style'

const ENTER_KEY_CODE = 13

/**
 *
 * @description This component expects three props value, onChange and singleLine
 * The value prop expects a string
 * The onChange prop expects a function and this function will be called the text content of the component changes
 * If it gets a HTML string as value prop, it is not going to pass the HTML string in onChange but will pass the text of that HTML string.
 */

class EditTextUI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      placeHolder: props.placeholder || 'Placeholder please ....',
    }
    this.ref = React.createRef()
    this.lastText = this.props.value
  }

  handleKeyPress = e => {
    if (this.props.singleLine) {
      if (e.keyCode === ENTER_KEY_CODE) {
        e.preventDefault()
        e.stopPropagation()
      }
    }
  }

  onInput = _ => {
    const key = this.ref.current.getAttribute('name')
    const value = this.ref.current.innerText
    if (this.props.onChange && typeof this.props.onChange === 'function')
      this.props.onChange({ [key]: value })
  }

  shouldComponentUpdate(nextProps, nextState) {
    const currentText = this.ref.current.innerText

    // /**
    //  * Re-render only when the props value is different from the current innerText
    //  * This ensures  we are not re-rendering on every user input
    //  */
    if (this.state !== nextState) return true
    else if (currentText === nextProps.value) return false
    /**
     * Do a shallow comparison of the other props and return true if they have changed
     */ else return true
  }

  componentDidUpdate() {
    //Ensuring the DOM changes are in sync with React vDOM
    // if (this.props.value !== this.ref.current.innerText) {
    //   this.ref.current.innerHTML = this.lastText = this.props.value
    // }
  }

  handleBlur = e => {
    if (!this.props.value) {
      this.setState({
        placeHolder: this.props.placeholder || 'Placeholder please....',
      })
    }

    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(e)
    }
  }

  handleFocus = () => {
    this.setState({ placeHolder: '' })
  }

  render() {
    const { name, value, className } = this.props
    const { placeHolder } = this.state
    return (
      <Input
        ref={this.ref}
        name={name}
        className={className}
        contentEditable={true}
        onInput={this.onInput}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        onKeyDown={this.handleKeyPress}
        dangerouslySetInnerHTML={{
          __html: value || placeHolder,
        }}
      ></Input>
    )
  }
}

export default EditTextUI
