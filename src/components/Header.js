import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import { Const } from '../index'
import logo from './logo.png'

const { Color } = Const;

export default function Header(props) {
  console.log(Color)
  return (
    <Wrapper>
      <Link to='/' style={{
        boxShadow: 'none'
      }}>
        <Logo
          src={logo}
          alt={`logo`}
        />
      </Link>
      <Nav>
        <List><Link to='#Blog' style={{ textDecoration: 'none', color: Color.LIGHT_GREEN }}>BLOG</Link></List>
        <List><Link to='#Skill' style={{ textDecoration: 'none', color: Color.LIGHT_GREEN }}>SKILL</Link></List>
      </Nav>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height:400px;
  text-align: center;
  background: #000;
  @media (max-width: 500px) {
    height:200px;
  }
`
const Logo = styled.img`
  height: 100%;
  margin: 0 auto;
  box-shadow: none;
  &:focus {
    box-shadow: none;
    outline: none;
  }
`
const Nav = styled.nav`
  display: flex;
  position: absolute;
  color: ${Color.LIGHT_GREEN};
  bottom: 0;
  right: 0;
`

const List = styled.div`
  padding: 10px 20px;
`
