import Layout from '../layout/Layout'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Timeline from '../components/Timeline/Timeline'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>luketeodev.</title>
      </Head>
      <Layout>
        <Landing />
        <About />
        {/* <Timeline /> */}
        <Projects />
        <Contact />
      </Layout>
    </div>
      
  )
}
