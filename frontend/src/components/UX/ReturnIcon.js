import { IoMdArrowRoundBack } from 'react-icons/io'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ReturnIcon = styled(IoMdArrowRoundBack)`
  fill: #fff;
  height: 36px;
  width: 36px;
  cursor: pointer;
  font-weight: 700;
  position: absolute;
  top: 8px;
  left: 6px;
`

export default function ReturnButton({ to }) {
  return (
    <Link to={to}>
      <ReturnIcon />
    </Link>
  )
}
