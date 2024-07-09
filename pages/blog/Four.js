import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import Post from "../../components/Post";
const Four = () => {
  const blogPosts = [
    {
      title: "JavaScript",
      body: "Certainly! JavaScript is a versatile and powerful programming language that is widely used for web development. Below is a beginner's guide to learning JavaScript: 1. Introduction to JavaScript What is JavaScript: Understand the role of JavaScript in web development. It's a scripting language that enables dynamic content on websites. 2. Basic Syntax: Variables: Learn how to declare variables using var, let, and const. Data Types: Understand primitive data types like strings, numbers, booleans, and more. Operators: Explore arithmetic, comparison, and logical operators. 3. Control Flow: Conditional Statements: Use if, else if, and else for decision-making. Loops: Understand for loops, while loops, and do-while loops for repetitive tasks. 4. Functions: Declaring Functions: Learn how to define and call functions. Parameters and Arguments: Understand how to pass parameters to functions. Return Statements: Learn about the return keyword. 5. Arrays: Understand arrays and their methods for storing and manipulating lists of data. 6. Objects: Explore objects and their properties. Objects are used to store key-value pairs. 7. DOM Manipulation: Learn about the Document Object Model (DOM) and how to manipulate HTML elements using JavaScript. Explore methods like getElementById, querySelector, and innerHTML. 8. Events: Understand how to handle events like clicks, keypresses, and form submissions. Use event listeners to respond to user interactions. 9. Asynchronous JavaScript: Callbacks: Understand the concept of callbacks for handling asynchronous operations. Promises: Learn about promises for more structured asynchronous code. Async/Await: Explore the modern async/await syntax for handling asynchronous tasks. 10. AJAX and Fetch API: Learn how to make asynchronous requests to a server using the Fetch API. 11. ES6+ Features Familiarize yourself with modern JavaScript features introduced in ECMAScript 2015 (ES6) and later, such as arrow functions, template literals, destructuring, and spread/rest operators. 12. Error Handling: Learn about try-catch blocks for handling errors in your code. 13. Local Storage and Session Storage: Understand how to use local storage and session storage for client-side data persistence. 14. Frameworks and Libraries: Explore popular JavaScript libraries and frameworks such as jQuery, React, Angular, or Vue.js.15. Testing: Learn about testing frameworks like Jest for writing and running tests on your JavaScript code. 16. Debugging: Familiarize yourself with browser developer tools for debugging your JavaScript code 17. Best Practices: Understand JavaScript best practices, including code organization, naming conventions, and optimization techniques. Additional Resources: MDN Web Docs: The Mozilla Developer Network provides comprehensive documentation for JavaScript. (https://developer.mozilla.org/en-US/docs/Web/JavaScript) ",

      imgUrl: "/logo-javascript.svg",
    },
  ];
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content="https://jefferyagyepong-io.vercel.app/blog/Four"
        />
        <meta name="twitter:creator" content="Jeffery Agyepong" />
        <meta name="twitter:title" content="Javascript " />
        <meta name="twitter:description" content="Javascript basics" />
        <meta
          name="twitter:image"
          content="/public/card.png"
        />
        <meta property="og:title" content="Javascript article" />
        <meta property="og:type" content="blog website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/blog/Four"
        />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="google-adsense-account" content="ca-pub-2474265697377160" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta name="description" content="Blogger" />
        <meta
          name="keywords"
          content="Blogger, Technology, News, Web Development, Ghana,"
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
              <Link href={"/blog/Three"}>
                <Image
                  src="/arrow-back-circle-outline.svg"
                  alt="Coast Republic"
                  width={40}
                  height={40}
                />{" "}
                previous
              </Link>
              <Link href={"#"}>
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
          <div className="blog-footer">
            <span className="blog-footer-text">By: Jeffery Agyepong</span>
            <span className="blog-footer-text">February 03, 2024</span>
          </div>
          <div>
            <h5>share on social media</h5>
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
          </div>
        </div>
        <Newsletter />
      </main>
    </>
  );
};
export default Four;
