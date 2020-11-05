import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
        <meta name="description" content=""/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App