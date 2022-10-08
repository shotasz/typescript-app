import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PropsWithChildren, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components'
import { useRouter } from 'next/router'
import { Input } from '../components/Input'
import { DelayInput } from '../components/DelayInput'

type BaseLinkProps = PropsWithChildren<LinkProps> & {
  className?: string
  children: ReactNode
}

const BaseLink = (props: BaseLinkProps) => {
  const { className, children, ...rest } = props

  return (
    <Link {...rest}>
      <a className={className}>{children}</a>
    </Link>
  )
}

const StyledLink = styled(BaseLink)`
  color: #1e90ff;
  font-size: 2em;
`

const Text = styled.span`
  color: ${(props) => props.theme.colors.red};
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <StyledLink href="/">Go to Index</StyledLink>
      <Text>Themeから参照した</Text>
      {/* <Input label="Label" /> */}
    </div>
  )
}

export default Home
