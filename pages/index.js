import Head from 'next/head'
import Header from '@components/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Data protection !</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Data protection:" />
        <p className="description">
          The app does not collect any user data.
    No data is shared with third party companies or organizations.
    The app does not share user data with other companies or organizations.
        </p>
      </main>

      <Footer />
    </div>
  )
}
