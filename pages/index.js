




import Head from 'next/head'
import Header from '../components/Header'
import Introduction from '../components/Introduction'
import Column from '../components/Column'
import RecentWork from '../components/RecentWork'
import Work from '../components/Work'
import Collaboration from '../components/Collaboration'
import Footer from '../components/Footer'
import SeeMore from '../components/SeeMore'
import Testimonial from '../components/Testimonial'

import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })





export default function Home() {
  return (
    <>
      <Head>
        <title>Jeffery Agyepong | Web Developer</title>
           <meta property="og:title" content="Jeffery Agyepong | Web Developer" />
<meta property="og:type" content="Portfolio website" />
<meta property="og:url" content="https://jefferyagyepong-io.vercel.app"/>
<meta property="og:image" content="/favicon.ico" />
             
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Designer, Web Developer, Website development Agency" />
         <meta
      name="keywords"
      content="web designer, Web developer, SEO expert, Web Engineer, Web Master Tools, Website development Agency, Software Application Developer, Website management, Hire, careers, information technology, recruitment, ghana, Africa, Europe, America, talent "
    />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest" />
     <meta name="google-site-verification" content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw" />    
     
    
      </Head>
      <main>
        <Header  />
        <Introduction />
        <Column />
        <RecentWork />
        <Work />
        <SeeMore />
        <Collaboration />
        <Testimonial />
    
        <Footer />
    
        
      </main>
    </>
  )
}
