import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Post from "../../components/Post";
import Scroll from "@/components/Scroll";

const One = () => {
  const blogPosts = [
    {
      title: "Web Developement Guide (Beginner Series)",

      p1: "Certainly! Learning web development can be an exciting journey. Here's a step-by-step guide to help you get started with web development",

      p2: "Web development is a combination of words ie., (refers to web pages, websites or anything over internet) and Development (the act of  building such applications from scratch). It entails building and maintaining websites and web-based applications such as social networking sites like (X, Facebook, Instagram etc), online e-commerce sites like Amazon and many more. This process involves creating a website that looks great, runs smoothly, and has a seemless user experience. Web design, web publishing, web programming, and database management are all part of the process.  ",
      p3: "These are tasks devs perform using various coding languages. Web developers must have a good understanding of different types of web technologies including HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), PHP(Hypertext processor), JavaScript etc. The programming language they use vary depending on the tasks they are performing and the platform they are using.  ",
      p4: "By the end of this article, the reader will be able to create a website and deploy on a server.",
      p5: "",
      p6: "",
      p7: "",
      p8: " ",
      p9: "",
      p10: "",

      imgUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jeffagyepong" />
        <meta name="twitter:creator" content="@jeffagyepong" />
        <meta name="twitter:title" content="Hypertext Markup Languange " />
        <meta
          name="twitter:description"
          content="Learn structure of web basics"
        />
        <meta name="twitter:image" content="/public/card.png" />
        <meta property="og:title" content="web development blog" />
        <meta property="og:type" content="blog website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/blog/One"
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
          content="Blogger, web,Technology, News, web development, begginer, Ghana, resources, mentorship"
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

        <div className="fluid-container-flex">
          {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}

          <nav>
            <div className="blog-footer">
              {" "}
              <Link href={"/blog/One"}>
                <Image
                  src="/arrow-back-circle-outline.svg"
                  alt="Coast Republic"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={"/blog/Two"}>
                
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
        <div className="fluid-container">
          <h4>Resources</h4>
          <ul>
            <li>
              {" "}
              <Link href="/blog/two" target="_blank">
                Getting started with web and internet
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/blog/three" target="_blank">
                Web Design
              </Link>
            </li>
            <li>
              <Link href="h#" target="_blank">
                Web Programming
              </Link>
            </li>
            <li>
              {" "}
              <Link href="h#" target="_blank">
                Web Publishing
              </Link>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};
export default One;
