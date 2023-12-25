import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
     <Html lang="en">
        <Head>
           <meta
              name="google-site-verification"
              content="64sK2kNa9u8f-L58c52RvqDXBdAbhYaZD0ELww0_hIw"
           />
           <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/apple-touch-icon.png"
           />
           <link rel="icon" href="/favicon.png" />
           <link
              rel="icon"
              type="image/png"
              sizes="32x32"
              href="/favicon.png"
           />
           <link
              rel="icon"
              type="image/png"
              sizes="16x16"
              href="/favicon.png"
           />

           {/* fonts */}

           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
           <link rel="preconnect" href="https://fonts.googleapis.com" />
           <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
           />
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap" rel="stylesheet"/>
        </Head>

        <body>
           <Main />
           <NextScript />
        </body>
     </Html>
  );
}
