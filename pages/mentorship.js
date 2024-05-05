import Head from "next/head";
import Header from "../components/Header";
import Welcome from "../components/Welcome";
import MentorInfo from "../components/MentorInfo";
import Benefits from "../components/Benefits";
import MentorStyle from "../components/MentorStyle";
import MentorColumn from "../components/MentorColumn";
import MentorQuality from "../components/MentorQuality";
import Link from "next/link";
import Image from "next/image";

import Footer from "../components/Footer";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Mentorship() {
  return (
    <>
      <Head>
        <title>Mentorship | Jeffery Agyepong</title>
        <meta
          property="og:title"
          content="Jeffery Agyepong | Mentorship Program"
        />
        <meta property="og:type" content="" />
        <meta
          property="og:url"
          content="https://jefferyagyepong.com/mentorship"
        />
        <meta property="og:image" content="" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta
          name="description"
          content="Designer, Front-end Developer, Website development Agency"
        />
        <meta
          name="keywords"
          content="mentorship, Learn Web development, Production support, SEO expert, Mantee, teaching assistant, role model, professional, software developer "
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
      </Head>
      <main>
        <Header />
        <Welcome />
        <MentorColumn />
        <MentorInfo />
        <Benefits />
        <MentorStyle />
        <MentorQuality />
        <Link href={"./"}>
          <Image src={"/jeffery.svg"} width={160} height={180} alt="logo" />
        </Link>

        <Footer />
      </main>
    </>
  );
}
