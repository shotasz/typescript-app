import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useMemo, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Button from '../components/Button'

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text)
  }, [])

  return cb
}

type CountButtonProps = {
  label: string
  maxium: number
}

const Home = (props: CountButtonProps) => {
  const { label, maxium } = props

  const displayPopup = usePopup()

  const [count, setCount] = useState(0)

  const onClick = useCallback(() => {
    const newCount = count + 1
    setCount(newCount)

    if (newCount >= maxium) {
      displayPopup(`You clicked ${newCount} times!`)
    }
  }, [count, maxium])

  const disabled = count >= maxium

  const text = disabled ? 'Cant click any more' : `You clicked ${count} times!`
  // const router = useRouter()

  // const onSubmit = () => {
  //   router.reload()
  // }

  // const onSubmit2 = () => {
  //   router.back()
  // }

  return (
    <div className={styles.container}>
      <p>Hello World</p>
      {/* <>
        <Link
          href={{
            pathname: '/ssr',
            query: {
              keyword: 'hello'
            }
          }}
        >
          <a>Go to SSR</a>
        </Link>
      </>
      <>
        <Link href="/ssg">
          <button>Jump to SSG Page</button>
        </Link>
      </> */}
      {/* <button onClick={onSubmit}>Reload Page</button>
      <button onClick={onSubmit2}>Back Page</button> */}
      <Button disabled={disabled} onClick={onClick} label={label} text={text} />
    </div>
  )
}

export default Home
