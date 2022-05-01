import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Innoloft Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Innoloft <a className="text-indigo-600">Test</a>
        </h1>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <Link href="/product">
            <a className="mt-6 w-96 rounded-xl border p-6 text-left text-center hover:text-blue-600 focus:text-blue-600">
              <h3 className="text-2xl font-bold">Product &rarr;</h3>
              <p className="mt-4 text-xl">Check the product page</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="mailto:ore.craftman@gmail.com"
        >
          Powered by Oreoluwa
        </a>
      </footer>
    </div>
  )
}

export default Home
