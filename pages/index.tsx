import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { createContext, ReactElement, ReactNode } from 'react'
import styles from '../styles/Home.module.css'

interface Engineer {
  name: string
  social?: {
    facebook: boolean
    twitter: boolean
  }
}

type ContainerProps = {
  title: string
  children: ReactNode
}

const TitleContext = createContext('')

const Title = () => {
  return (
    <TitleContext.Consumer>
      {(title) => {
        return <h1>{title}</h1>
      }}
    </TitleContext.Consumer>
  )
}

const Header = () => {
  return (
    <div>
      <Title />
    </div>
  )
}

const Home: NextPage = () => {
  const title = 'React Book'

  return (
    <div className={styles.container}>
      <TitleContext.Provider value="title">
        <Header />
      </TitleContext.Provider>
    </div>
  )
}

export default Home
