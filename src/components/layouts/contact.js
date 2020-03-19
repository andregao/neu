import React from "react"
import styled from "styled-components"
import { colors, fontPresets } from '../../styles/theme'

const Contact = () => {
  return (
    <Container>
      contact
    </Container>
  )
}
const Container = styled.button`
  ${fontPresets.nav};
  text-align: center;
  padding: 12px 14px;
  border:solid ${colors.linkStandby} 2px;
  &:hover{
  border-color: ${colors.linkHover};
  }
  margin-left: 40px;
  height: 40px;
`

export default Contact
