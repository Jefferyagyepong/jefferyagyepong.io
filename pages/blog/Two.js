import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Post from "../../components/Post";
import Scroll from "@/components/Scroll";
const Two = () => {
  const blogPosts = [
    {
      title: "Internet Vs Web",
      p1:" Although we tend to imagine the internet as an invisible source of information it is actually a physical connection of cables, servers, modems, routers, and computers. These connections form a huge network in much the same way phone lines have connected the world. The world wide web is the digital collection of websites and webpages that can be accessed by using the internet. Each website is made up of files stored on computers. Using web browsers allows us to access these files over the internet. Using the internet is commonly referred to as being online.",
      p2:"",

      imgUrl: "/logo-html5.svg",
    },
  ];
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jeffagyepong" />
        <meta name="twitter:creator" content="@jeffagyepong" />
        <meta name="twitter:title" content="Hypertext mark-up language " />
        <meta
          name="twitter:description"
          content="Hypertext mark-up language basics"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta property="og:title" content="HTML 5 article" />
        <meta property="og:type" content="blog website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/blog/Two"
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta name="google-adsense-account" content="ca-pub-2474265697377160" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
        />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Blogger" />
        <meta
          name="keywords"
          content="Blogging, web, coding, technology, mentor, Ghana, Hire, developer, learn, Html, Consult"
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
        <Scroll />
        <Header />
        <div className="fluid-container">
          {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}
          <nav>
            <div className="blog-footer">
              <Link href={"/blog/One"}>
                <Image
                  src="/arrow-back-circle-outline.svg"
                  alt="Coast Republic"
                  width={40}
                  height={40}
                />{" "}
                previous
              </Link>
              <Link href={"/blog/Three"}>
                {" "}
                next
                <Image
                  src="/arrow-forward-circle-outline.svg"
                  alt="Coast Republic"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </nav>
        </div>
      </main>
    </>
  );
};
export default Two;
