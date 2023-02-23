import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Footer from 'components/Footer'
import Menu from 'components/Menu'
import Navbar from 'components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio COTEC</title>
        <meta name="description" content="Aplicativo de cardápio das comidas vendidas no CTIG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=7" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className='pt-4'>
        <Menu />
      </main>

      <Footer />
    </>
  )
}
