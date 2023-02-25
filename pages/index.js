import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my GameLearnAmharicAlphabet app!" />
        <p className="description">
          Keine Datenerfassung angegeben Der Entwickler gibt an, dass diese App keine Nutzerdaten erfasst
        </p>
      </main>

      <Footer />
    </div>
  )
}
