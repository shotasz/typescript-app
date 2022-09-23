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
        <p>このページはISRによって描画されたページ</p>
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
    },
    revalidate: 60
  }
}

export default SSG
