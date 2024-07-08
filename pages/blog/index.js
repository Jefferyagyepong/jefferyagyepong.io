import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta property="og:title" content="Tech blog" />
        <meta property="og:type" content="blog website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/blog"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-2474265697377160" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Blogger" />
        <meta
          name="keywords"
          content="Blogger, Technology, News, web development, Ghana, web design, Learn, Biginner, fundamentals"
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
        <div className="container">
          <ul className="list">
            <li className="item">
              <div className="content">
                <Image
                  id={"image-1"}
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="engineering"
                  width={380}
                  height={200}
                />
              </div>
              <div>
                <h4>Learn Web Developement</h4>
                <p>
                  Learning web development can be an exciting journey. This
                  article will guide you from beginner.
                </p>
                <Link href="/blog/One" className="slate-blue">
                  Read
                  <Image
                    src={"/arrow-forward-sharp.svg"}
                    width={20}
                    height={20}
                    alt="forward arrow"
                  />
                </Link>5 mins
              </div>

              <hr />
           
            </li>
          </ul>
        </div>

        <Newsletter />
      </main>
    </>
  );
}
