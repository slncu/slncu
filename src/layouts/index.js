import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import Header from '../components/Header'

class Template extends React.Component {
  render() {
    const { children } = this.props
    return (
      <Wrapper>
        <Header />
        <Contents>
          {children()}
        </Contents>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
`

const Contents = styled.div`
  width: 900px;
  margin: 40px auto 0;
`

export default Template
