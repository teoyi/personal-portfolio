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
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                    <link href="https://fonts.googleapis.com/css2?family=Neuton&family=Open+Sans&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}