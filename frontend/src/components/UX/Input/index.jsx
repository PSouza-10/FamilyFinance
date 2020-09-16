import React from 'react'

import { Container, StyledField, StyledLabel, StyledDropdown } from './styles'
import CustomTextarea from './CustomTextarea'
export default function Input({ children, fieldName, inputProps }) {
  const inputs = {
    select: <StyledDropdown {...inputProps}>{children}</StyledDropdown>,
    textarea: <CustomTextarea {...inputProps} />
  }

  return (
    <Container>
      <StyledLabel htmlFor={inputProps.name}>{fieldName}</StyledLabel>
      {inputProps.type === 'select' || inputProps.type === 'textarea' ? (
        inputs[inputProps.type]
      ) : (
        <StyledField {...inputProps}></StyledField>
      )}
    </Container>
  )
}
