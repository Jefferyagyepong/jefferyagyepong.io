import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import Post from "../../components/Post";
const Two = () => {
  const blogPosts = [
    {
      title: "HTML 5",
      body: "Absolutely! HTML (HyperText Markup Language) is the foundation of web development, and it's essential to understand its basics. Here's a beginner's guide to learning HTML: 1. Introduction to HTML: HTML Structure: Understand the basic structure of an HTML document. It includes elements like <!DOCTYPE html>, <html>, <head>, and <body>. 2. HTML Elements: Tags: Learn about HTML tags, which are used to define elements on a webpage. Tags are enclosed in angle brackets, like <tag>content</tag>.Attributes: Explore attributes that provide additional information about HTML elements. Attributes are added to the opening tag and provide details like class, id, src, etc. 3. Common HTML Elements: Headings: Use <h1> to <h6> for headings with varying levels of importance. Paragraphs: Employ <p> tags for paragraphs. Links: Create hyperlinks with <a> tags. Understand the href attribute for linking to other pages or resources. Lists: Use <ul>, <ol>, and <li> for unordered and ordered lists. Images: Embed images using the <img> tag with the src attribute. 4. HTML Forms: Learn how to create forms using the <form> tag. Explore form elements like <input>, <select>, <textarea>, and their attributes. 5. Semantic HTML: Understand the importance of semantic HTML for better page structure and accessibility. Semantic elements like <header>, <nav>, <main>, <article>, <section>, and <footer> provide meaning to the content. 6. HTML5: Familiarize yourself with HTML5 features and tags, such as <article>, <nav>, <section>, <header>, <footer>, <canvas>, and <video>. 7. Validation: Use the W3C Markup Validation Service to check if your HTML code is valid and follows web standards. 8. Responsive Design: Learn about responsive design principles, including the use of meta tags like <meta name=viewport content=width=device-width, initial-scale=1.0> for mobile-friendly pages. 9. HTML Entities: Understand HTML entities for special characters, such as &lt; for < and &gt; for >. 10. Practice: Apply your knowledge by creating simple web pages. Practice is crucial for reinforcing what you've learned.",
      imgUrl: "/logo-html5.svg",
    },
  ];
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
        <Header />
        <div>
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
        <Newsletter />
      </main>
    </>
  );
};
export default Two;
