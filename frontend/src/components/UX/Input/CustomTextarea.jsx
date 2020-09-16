import React, { useState, useEffect, useRef } from 'react'
import { StyledTextarea } from './styles'

export default function CustomTextarea({ value, onChange, ...props }) {
  const TextAreaRef = useRef(null)
  const [Text, setText] = useState('')
  const [fieldHeight, setHeight] = useState('40px')

  const handleChange = e => {
    setText(e.target.value)
    onChange(e)
  }

  useEffect(() => {
    if (Text) {
      setHeight(`${TextAreaRef.current.scrollHeight}px`)
    } else {
      setHeight('40px')
    }
  }, [Text])
  return (
    <StyledTextarea
      ref={TextAreaRef}
      onChange={handleChange}
      height={fieldHeight}
      value={value}
      {...props}
    />
  )
}
