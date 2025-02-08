












import Head from "next/head";

export default function Home() {
  return (
    <>
         <Head>
        <title>Jeffery Agyepong | Web Developer</title>

        <meta
          name="facebook-domain-verification"
          content="gged1ddqn5robpt1evadltfbahaanv"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jeffagyepong" />
        <meta name="twitter:creator" content="@jeffagyepong" />
        <meta name="twitter:title" content="Web Developer " />
        <meta name="twitter:description" content="Web developer" />
        <meta
          name="twitter:image"
          content="https://i.postimg.cc/DzR6JLQL/lee.png"
        />
        <meta property="og:title" content="Web Developer " />
        <meta
          property="og:description"
          content="Portfolio site highlights skills and projects details"
        />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/"
        />
        <meta
          property="og:image"
          content="https://i.postimg.cc/Bv2qz8cs/IMG-0568.jpg"
        />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="336" />

        <meta property="og:type" content="Portfolio" />

       <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta
          name="description"
          content="Designer, Web Developer, Website development Agency"
        />
        <meta
          name="keywords"
          content="web designer, Web developer, SEO expert, Web Engineer, Web Master Tools, Website development Agency, Software Application Developer, Website management, Hire, careers, information technology, recruitment, ghana, Africa, Europe, America, talent "
        />
        <link rel="icon" href="/lee.ico" />
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Web Developer Portfolio" />
      </Head>

      <header className="text-center">
        <h1 className="text-4xl font-bold">John Doe</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">Full Stack Web Developer</p>
      </header>

      <section className="mt-6 max-w-3xl text-center">
        <p className="text-lg">
          Hi! I'm a web developer with expertise in modern JavaScript frameworks, React, and Next.js.
        </p>
      </section>

      <section className="mt-8 flex space-x-4">
        <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 text-white rounded-md">
          GitHub
        </a>
        <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-md">
          LinkedIn
        </a>
      </section>

      <footer className="mt-10 text-sm text-gray-500">
        © {new Date().getFullYear()} John Doe. All rights reserved.
      </footer>
    </div>
    </main>
    </>
  );
}




















