import React from 'react'

import { Container, StyledField, StyledLabel } from './styles'

export default function Input({ fieldName, inputProps }) {
  return (
    <Container>
      <StyledLabel htmlFor={inputProps.name}>{fieldName}</StyledLabel>
      <StyledField {...inputProps} />
    </Container>
  )
}
