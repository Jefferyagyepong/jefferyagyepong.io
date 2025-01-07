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
      p2:" A web browser is software designed to navigate the world wide web via the internet. Web browsers use special transfer protocol (http) to send and receive information. They convert the web markup language, HTML, into a visual display on computer screens. Many software companies have designed different web browsers. Some of the most popular are Google Chrome, Microsoft Edge, Mozilla Firefox, Apple’s Safari and Brave. Each web browser looks a little different but they share many of the same features.",
p3: " Understanding web addresses",
p4:" Website addresses indicate where a website “lives.” Each address is in the form of a URL (Uniform Resource Locator). Every website has a unique URL. URLs have the following parts:",
p5:" Scheme: The scheme tells the web browser the type of web address being entered. The most common schemes are http:// and https://. The latter is the secure version. Browsers indicate secure websites with a padlock symbol.",
p6:" Domain: The website domain is the key part of the web address. It is broken up into the Subdomain, the Second-level Domain, and the Top-Level Domain.",
p7:" Subdomain: The most common subdomain is www which stands for World Wide Web. This indicates where the website is located.",
p8:" Second-level domain: The second-level domain is often the company’s name. Keeping an eye on the domain name can help you evaluate a website’s legitimacy.",
p9:" Top-level Domain Extension: Extensions identify the website type. Look at the following examples: .com = commercial .org = organization .net = network .edu = educational .mil = military .gov = governmental .gh = Ghana .ng = Nigeria Extensions can help you identify a website’s validity or authority. For example, only government websites are able to use .gov. A scam website attempting to look like a government site will not be able to use this extension. This is good news for web users. If you are able to identify the extension, you will be a long way towards determining the safety and validity of the website you are viewing.",
p10:" File path: Each page of a website has a file location indicated in the file path. Remove the file path, and the browser will return to the website’s homepage.",

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
        <div className="fluid-container-flex">
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
                
              </Link>
              <Link href={"/blog/Three"}>
                {" "}
                
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
              <Link href="h#" target="_blank">
                Getting started with web and internet
              </Link>
            </li>
            <li>
              {" "}
              <Link href="h#" target="_blank">
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
export default Two;
