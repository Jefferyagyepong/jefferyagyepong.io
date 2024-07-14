import Head from "next/head";
import Header from "../components/Header";
import { Inter } from "next/font/google";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import Image from "next/image";
const inter = Inter({ subsets: ["latin"] });
export default function Contact() {
  return (
    <>
      <Head>
        <title>Jeffery Agyepong | contact</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jeffagyepong" />
        <meta name="twitter:creator" content="@jeffagyepong" />
        <meta name="twitter:title" content="Web Developer " />
        <meta name="twitter:description" content="Web developer" />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/DzR6JLQL/lee.png"
        />
        <meta property="og:title" content="Web Developer" />
        <meta property="og:type" content="Portfolio website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/Bv2qz8cs/IMG-0568.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <div className="background-whitesmoke">
          <div>
            <Image src={"/lee.png"} width={55} height={55} alt="jeffery" />
            <Link href={"./"}>
              <h3 className="header-title">Jeffery Agyepong</h3>
            </Link>
          </div>
          <Link
            href="https://twitter.com/jeffagyepong"
            target="_blank"
            className="footer-link-item"
          >
            <Image
              src={"/logo-twitter.svg"}
              width={20}
              height={20}
              alt="icon"
            />{" "}
          </Link>{" "}
          <Link
            href="https://github.com/Jefferyagyepong"
            target="_blank"
            className="footer-link-item"
          >
            <Image src={"/logo-github.svg"} width={20} height={20} alt="icon" />{" "}
          </Link>{" "}
          <Link
            href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
            target="_blank"
            className="footer-link-item"
          >
            <Image
              src={"/logo-linkedin.svg"}
              width={20}
              height={20}
              alt="icon"
            />{" "}
          </Link>{" "}
          <Link
            href="https://www.instagram.com/jefferyagyepong_/"
            target="_blank"
            className="footer-link-item"
          >
            <Image
              src={"/logo-instagram.svg"}
              width={20}
              height={20}
              alt="icon"
            />{" "}
          </Link>
          <Link
            href="https://www.open.whatsapp.com/0244736420/"
            target="_blank"
            className="footer-link-item"
          >
            <Image
              src={"/logo-whatsapp.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          </Link>
        </div>
        <Newsletter />
      </main>
    </>
  );
}
