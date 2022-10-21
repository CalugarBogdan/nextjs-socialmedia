import Head from 'next/head'
import Auth from '../components/Auth'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Social Media Website</title>
      </Head>

      <main>
        <Auth />
      </main>

      <footer>
      </footer>
    </div>
  )
}
