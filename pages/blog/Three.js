import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import Post from "../../components/Post";
const Three = () => {
  const blogPosts = [
    {
      title: "Sass",
      body: "Certainly! SASS (Syntactically Awesome Stylesheets) is a popular CSS preprocessor that adds features and syntax enhancements to make styling websites more efficient and maintainable. Here's a beginner's guide to learning SASS:1. Installation:SASS needs to be installed on your machine. You can install it using a package manager like npm or yarn:bash npm install -g sass2. Basic Syntax:SASS allows you to write stylesheets with a more concise and readable syntax. It uses indentation instead of brackets and semicolons. For example:scss $primary-color: #3498db;body font-family: Arial, sans-seri background-color: $primary-color3. Variables:Declare variables with the $ symbol. This allows you to reuse values throughout your stylesheet.scss $primary-color: #3498db;.header background-color: $primary-color4. Nesting: Nest CSS selectors inside one another to create a visual hierarchy and avoid repetition.scss nav ulmargin: 0 padding: 0 list-style: none li display: inline-block5. Partials and Import: Break your styles into smaller, modular files called partials and import them into a main stylesheet.scss $primary-color: #3498db; @import 'variables';body background-color: $primary-color6. Mixins: Use mixins to define reusable pieces of styles. This can include common properties or even entire blocks of styles. @mixin border-radius($radius)-webkit-border-radius: $radius-moz-border-radius: $radius border-radius: $radius button @include border-radius(5px) 7. Extend/Inheritance: Extend allows you to share a set of CSS properties from one selector to another. .message border: 1px solid #ccc padding: 10px color: #333 .success @extend .message border-color: green 8. Operators: SASS supports mathematical operations, making it easier to perform calculations within your styles. scss .container width: 100% - 20px 9. Control Directives: Use control directives like @if, @for, and @each for more dynamic styles. @for $i from 1 through 3 .column-#{$i} width: 30px * $i 10. Compile SASS to CSS: After writing your SASS code, compile it into regular CSS using the sass command. bash sass input.scss output.css Additional Resources: SASS Documentation: The official documentation is an excellent resource for in-depth information. (https://sass-lang.com/documentation) Example SASS Code: scss $primary-color: #3498db; $font-stack: Arial, sans-serif; header { background-color: $primary-color; padding: 10px; h1 { font-family: $font-stack; color: white;} nav { ul { margin: 0; padding: 0; list-style: none;  li { display: inline-block; margin-right: 10px; } }}} .message {border: 1px solid #ccc; padding: 10px; color: #333;} .success { @extend .message border-color: green;} $base-width: 100px; .container { width: $base-width * 2;}SASS can significantly improve the organization and readability of your stylesheets. Practice and experiment to fully grasp its capabilities and enhance your web development workflow.",

      imgUrl: "/logo-sass.svg",
    },
  ];
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta name="twitter:card" content="Sass article" />
        <meta
          name="twitter:site"
          content="https://jefferyagyepong-io.vercel.app/blog/One"
        />
        <meta name="twitter:creator" content="Jeffery Agyepong" />
        <meta
          name="twitter:title"
          content="syntactically awesome style sheets "
        />
        <meta
          name="twitter:description"
          content="syntactically awesome style sheets basics"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta property="og:title" content="Sass article" />
        <meta property="og:type" content="blog website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/blog/Three"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-2474265697377160" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Blogger" />
        <meta
          name="keywords"
          content="Blogging, web, Sass, learn, basics, practice,  coding, Technology, News, Web Development, Ghana,"
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
              <Link href={"/blog/Two"}>
                <Image
                  src="/arrow-back-circle-outline.svg"
                  alt="Coast Republic"
                  width={40}
                  height={40}
                />{" "}
                previous
              </Link>

              <Link href={"/blog/Four"}>
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
export default Three;
