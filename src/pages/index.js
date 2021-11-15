import Layout from '../layout/Layout'
import Landing from '../components/Landing/Landing'
import About from '../components/About/About'
import Timeline from '../components/Timeline/Timeline'

export default function Home() {
  return (
    <Layout>
      <Landing />
      <About />
      <Timeline />
    </Layout>
  )
}
