import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
  useState
} from 'react'
import styles from '../styles/Home.module.css'

// interface Engineer {
//   name: string
//   social?: {
//     facebook: boolean
//     twitter: boolean
//   }
// }

// type ContainerProps = {
//   title: string
//   children: ReactNode
// }

// const TitleContext = createContext('')

// const Title = () => {
//   return (
//     <TitleContext.Consumer>
//       {(title) => {
//         return <h1>{title}</h1>
//       }}
//     </TitleContext.Consumer>
//   )
// }

// const Header = () => {
//   return (
//     <div>
//       <Title />
//     </div>
//   )
// }

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const Home = () => {
  const initialValue = { count: 0 }
  const reducer = (currentCount: number, action: Action) => {
    switch (action) {
      case 'INCREMENT':
        return currentCount + 1

      case 'DECREMENT':
        return currentCount - 1

      case 'DOUBLE':
        return currentCount * 2

      case 'RESET':
        return 0

      default:
        return currentCount
    }
  }

  const [count, dispatch] = useReducer(reducer, initialValue.count)

  return (
    <div className={styles.container}>
      <p>{`Count : ${count}`}</p>
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>x2</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default Home
