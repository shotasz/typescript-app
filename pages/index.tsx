import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ChangeEvent, useMemo, useState, useEffect } from 'react'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <p>Hello World</p>
    </div>
  )
}

export default Home
