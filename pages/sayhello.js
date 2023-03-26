import Head from 'next/head'
import Header from '../components/Header'

import HelloForm from '../components/HelloForm'


import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })





export default function Sayhello() {
  return (
    <>
      <Head>
        <title>Say Hello | Jeffery Agyepong</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Designer, Front-end Developer" />
         <meta
      name="keywords"
      content="web designer, front-end developer, html5, css3, javascript, nexjs, Sass"
    />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest" />
         
     
    
      </Head>
      <main>
              <Header />
              <HelloForm />
        
       
        
      </main>
    </>
  )
}
