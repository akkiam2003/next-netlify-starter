import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Data protection !</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3268981658549651" crossorigin="anonymous"></script>
      </Head>

      <main>
        <Header title="Data protection:" />
        <p className="description">
          The app does not collect any user data.
    No data is shared with third party companies or organizations.
    The app does not share user data with other companies or organizations.
    No data is shared with third party.
        </p>
      </main>

      <Footer />
    </div>
  )
}
