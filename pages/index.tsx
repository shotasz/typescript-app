import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  createContext,
  memo,
  ReactElement,
  ReactNode,
  useCallback,
  useReducer,
  useState
} from 'react'
import styles from '../styles/Home.module.css'

type ButtonProps = { onClick: () => void }
type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props
  console.log('Decrementが再描画しました')

  return <button onClick={onClick}>Decrement</button>
}
const IncrementButton = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('Incrementが再描画しました')

  return <button onClick={onClick}>Increment</button>
})

const DoubleButton = memo((props: ButtonProps) => {
  const { onClick } = props
  console.log('Doubleが再描画しました')

  return <button onClick={onClick}>Double</button>
})

const Home = () => {
  const [count, setCount] = useState(0)
  const decrement = () => {
    setCount((c) => c - 1)
  }
  const increment = () => {
    setCount((c) => c + 1)
  }

  const double = useCallback(() => {
    setCount((c) => c * 2)
  }, [])

  return (
    <div className={styles.container}>
      <p>{`Count : ${count}`}</p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  )
}

export default Home
