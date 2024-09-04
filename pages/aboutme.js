import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function About() {
  return (
    <>
      <Head>
        <title>Jeffery Agyepong | Career</title>
        <meta property="og:title" content="Jeffery Agyepong | Web Developer" />
        <meta property="og:type" content="Portfolio website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="author" content="Jeffery Agyepong" />
        <meta
          name="description"
          content="Designer, Web Developer, Website development Agency"
        />
        <meta
          name="keywords"
          content="web designer, Web developer, SEO expert, Web Engineer, Web Master Tools, Website development Agency, Software Application Developer, Website management, Hire, careers, information technology, recruitment, ghana, Africa, Europe, America, talent "
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="google-site-verification"
          content="HIhs3rvT7a6WD274_Txl6lfu3opycY_McRAFvT2-oBw"
        />
      </Head>
      <main>
        <Header />
        <div className="fluid-container">
          <span>About me</span>
          <h6>Learn more about more</h6>
          <p>
            Jeffery is a web developer who is passionate about crafting dynamic
            web applications. My journey began in university, where my love for
            technology ignited my path in coding. Driven by a vision to
            revolutionalize the landscape, I focus on creating intuitive
            solutions that enhance the world wide web ecxperience. Expore my
            portfolio to witness the fusion of crativity and functionality that
            defines my work.
          </p>
          <div className="flex-row">
            <p>4 solo projects </p> | <p>2 Team-based projects</p>
          </div>
          <div>
            <span>Contact me</span>
            <h6>Lets talk business</h6>
            <p>
              Feel free to get in touch with me via mail or connect with me on
              LinkedIn and GitHub. I am always open to discussing new project,
              creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          <Link
            href="/files/myResume.pdf"
            className="mail-link"
            target="_blank"
            download
          >
            Click to download my Resume
          </Link>
        </div>
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}
