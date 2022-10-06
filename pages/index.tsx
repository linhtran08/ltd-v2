import type {NextPage} from 'next'
import Head from 'next/head'
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className={'bg-black h-screen overflow-hidden'}>
      <Head>
        <title>LTD - Modern Portfolio</title>
      </Head>
      <main>
        {/* Sidebar */}
        <Sidebar/>
        {/* Center */}
      </main>
    </div>
  )
}

export default Home
