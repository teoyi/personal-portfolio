import '../styles/globals.css'
import Head from 'next/head'
import thumbnail from "../../public/static/images/thumbnail.png"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1" />
        <meta property="og:image" content={thumbnail} />
      </Head>
      <Component {...pageProps} />
    </>
    
  ) 
  
}

export default MyApp
