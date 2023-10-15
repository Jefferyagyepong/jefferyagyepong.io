import Head from "next/head";
import Pay from "@/components/Pay";
export default function pay() {
  return (
    <>
      <Head>
        <title>Paymment | Mentorship</title>
        <meta
          property="og:title"
          content="Jeffery Agyepong | Front-End Developer"
        />
        <meta property="og:type" content="Portfolio website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta
          name="description"
          content="Designer, Front-end Developer, Website development Agency"
        />
        <meta
          name="keywords"
          content="web designer, front-end developer, SEO expert, Engineer, Web Master,Website development Agency, mentorship, hire "
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
        <Pay />
      </main>
    </>
  );
}
