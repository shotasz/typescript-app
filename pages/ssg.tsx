import React from 'react'
import { NextPage, NextPageContext, GetStaticProps } from 'next'
import Head from 'next/head'

type SSGProps = {
  message: string
}

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props

  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページ</p>
        <p>{message}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました。`

  return {
    props: {
      message
    }
  }
}

export default SSG
