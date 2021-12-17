import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return(
            <Html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="keywords" content="HTML, CSS, JavaScript, Web, Development" />
                    <meta name="description" content="Portfolio website for YiPeng (Luke) Teo." />
                    <meta name="author" content="YiPeng (Luke) Teo" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                    <link href="https://fonts.googleapis.com/css2?family=Bai+Jamjuree&family=Open+Sans&family=Paytone+One&family=Space+Mono&display=swap" rel="stylesheet" /> 
                    {/* <link
                        rel="preload"
                        href="/public/fonts/DeterminationMonoWeb.woff"
                        as="font"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/public/fonts/DeterminationSansWeb.woff"
                        as="font"
                        crossOrigin=""
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}