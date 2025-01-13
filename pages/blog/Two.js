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
      title: "Web Programming",

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
          <article>
                      <header>
              <p>    By: Jeffery Agyepong |{" "}
              <Image
                src={"/lee.png"}
                width={44}
                height={44}
                alt="jeffery agyepong"
              />
                </p>
                <p><time datetime="2025-01-13">January 13, 2025</time>
                  </p>
                  
                  <p>    <h5>share on social media</h5>
            <Link
              href="https://twitter.com/intent/tweet?text=http://jefferyagyepong-io.vercel.app/blog/"
              target="_blank"
              className="twitter-share-button"
            >
              <Image
                src={"/logo-twitter.svg"}
                width={20}
                height={20}
                alt="icon"
              />{" "}
            </Link>{" "}
                    </p>
              </header>
            <section>
              <em>
                Absolutely! HTML (HyperText Markup Language) is the foundation
                of web development, and it&apos;s essential to understand its
                basics. Here&apos;s a beginner&apos;s guide to learning HTML:
              </em>
              <br />
              <br />
              <p>
                <em>
                  Introduction to HTML:
                  <br />
                </em>{" "}
                HTML Structure: Understand the basic structure of an HTML
                document. It includes elements like,
                <b> DOCTYPE html </b>, <b> Head</b> and
                <b> Body </b>
              </p>
            </section>

            <section>
              <p>
                <em>HTML Elements:</em> <br /> Tags: Learn about HTML tags,
                which are used to define elements on a webpage. Tags are
                enclosed in angle brackets, like .Attributes: Explore attributes
                that provide additional information about HTML elements.
                Attributes are added to the opening tag and provide details like
                class, id, src, etc.
              </p>
              <br />
              <p>
                {" "}
                <em>Common HTML Elements: </em> <br /> Headings: Use <b>h1</b>{" "}
                to <b>h6</b> for headings with varying levels of importance.
                Paragraphs: Employ <b>p</b> tags for paragraphs. Links: Create
                hyperlinks with <b>a</b> tags. Understand the href attribute for
                linking to other pages or resources. Lists: Use <b>ul</b> ,{" "}
                <b>ol</b> , and <b>li</b> for unordered and ordered lists.
                Images: Embed images using the <b>img element</b> tag with the
                src attribute.
              </p>
              <br />
              <p>
                {" "}
                <em>HTML Forms: </em>
                <br /> Learn how to create forms using the <b>form </b>tag.
                Explore form elements like <b>input</b>, <b>select</b>,{" "}
                <b>textarea</b> and their attributes.
              </p>
              <p> <em> HOW FORMS WORK</em> <br/>
                There are two parts to a working form. The first part is the form that you see on the page itself that is created using HTML markup. Forms are made up of buttons, input fields, and drop-down menus (collectively known as form controls) used to collect information from the user. Forms may also contain text and other elements.
The other component of a web form is an application or script on the server that processes the information collected by the form and returns an appro- priate response. It’s what makes the form work. In other words, posting an HTML document with form elements isn’t enough. Web applications and scripts require programming know-how that is beyond the scope of this book, but the “Getting Your Forms to Work” sidebar, later in this chapter, pro- vides some options for getting the scripts you need.

                </p>
              <br />
              <p>
                <em>Semantic HTML: </em> <br /> Understand the importance of
                semantic HTML for better page structure and accessibility.
                Semantic elements like <b> header</b>,<b>nav</b>,<b> main</b>,
                <b> article</b>,<b> section </b> and <b> footer</b> provide
                meaning to the content.
              </p>
              <br />
              <p>
                <em>HTML5: </em> <br /> Familiarize yourself with HTML5 features
                and tags, such as <b>article</b>, <b> nav</b>, <b> section</b>,{" "}
                <b> header</b>, <b> footer</b>, <b> canvas </b> and<b> video</b>{" "}
                .
              </p><br/>
              <p>
                Responsive Design: Learn about responsive design principles,
                including the use of meta tags like{" "}
                <code>
                  <Head>
                    <meta
                      name="viewport"
                      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover"
                    />
                  </Head>
                </code>{" "}
                for mobile-friendly pages.
              </p>
            </section>
          </article>
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
              <Link href="/blog/Two" target="_blank">
                Getting started with web and internet
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/blog/Three" target="_blank">
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
