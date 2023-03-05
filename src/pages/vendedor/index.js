import Head from "next/head";
import Navbar from "components/Navbar";
import Footer from "components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio COTEC</title>
        <meta name="description" content="Aplicativo de cardápio das comidas vendidas no CTIG" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        
      </main>

      <Footer />
    </>
  )
}