import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <body className='light:bg-zinc-900
    dark:bg-red-50'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
