import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useMemo, useState, useEffect } from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const router = useRouter()

  const onSubmit = () => {
    router.reload()
  }

  const onSubmit2 = () => {
    router.back()
  }

  return (
    <div className={styles.container}>
      <p>Hello World</p>
      <>
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
      </>
      <button onClick={onSubmit}>Reload Page</button>
      <button onClick={onSubmit2}>Back Page</button>

      <div>
        <div>
          <img
            className={styles.images}
            src="/pexels-alberta-studios-10445627.jpg"
            alt="Image IMG"
          />
        </div>
        <div>
          <Image
            src="/pexels-alberta-studios-10445627.jpg"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
