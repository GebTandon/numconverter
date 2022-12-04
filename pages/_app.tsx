import '../styles/globals.css'
import type { AppProps } from 'next/app'
import * as React from 'react'

export default function ThisApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
