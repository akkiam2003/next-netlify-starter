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
    Wir benötigen den Zugriff auf den Standort Ihres Gerätes. Bei einer Anfrage erheben wir Ihren aktuellen Standort über GPS, um Ihnen schnell Informationen zu Ihrer unmittelbaren Umgebung geben zu können. Daten zu Ihrem Standort werden nur für die Bearbeitung Ihrer Anfrage genutzt. Die Übertragung Ihrer Standortdaten erfolgt über eine verschlüsselte Verbindung.
    Ihre Standortdaten werden nach Beendigung Ihrer Anfrage anonymisiert und zur Verbesserung unseres Services statistisch ausgewertet.
        </p>
      </main>

      <Footer />
    </div>
  )
}
