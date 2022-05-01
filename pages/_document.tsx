import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <head>
        <Head />

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"
        ></link>
      </head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
