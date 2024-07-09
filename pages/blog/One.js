import React from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import Post from "../../components/Post";

const One = () => {
  const blogPosts = [
    {
      title: "Learn Web Developement",
      body: "Certainly! Learning web development can be an exciting journey. Here's a step-by-step guide to help you get started with web development:Understand the Basics HTML (HyperText Markup Language): Learn the fundamentals of HTML, which is the markup language used to structure content on the web.CSS (Cascading Style Sheets): Understand how CSS is used for styling and formatting HTML elements, making your web pages visually appealing.Master the Fundamentals:JavaScript: Learn JavaScript to add interactivity and dynamic behavior to your web pages. Understand concepts like variables, functions, loops, and arrays Version Control:Learn version control using tools like Git. This helps you track changes to your code and collaborate with others.Responsive Design:Study responsive web design to ensure your websites work well on various devices and screen sizes. Learn about media queries and flexible grid layouts. Frameworks and Libraries:Explore popular front-end frameworks like React, Angular, or Vue.js. These can simplify and streamline the development process. Back-End Development: Learn a server-side language such as Node.js (JavaScript), Python (Django or Flask), Ruby (Ruby on Rails), or PHP. Understand how to handle server-side logic, databases, and server communication. Databases: Familiarize yourself with databases. Learn SQL for relational databases (like MySQL or PostgreSQL) or NoSQL databases (like MongoDB) for non-relational data. APIs (Application Programming Interfaces):Understand how to work with APIs to fetch and send data between the front end and back end. Learn about RESTful APIs and JSON.Build Tools and Task Runners:Explore tools like Webpack, Gulp, or Parcel to automate tasks, bundle and optimize your code. Testing and Debugging: Learn about testing frameworks and debugging tools to ensure your code is robust and bug-free. Web Security: Understand common security issues and best practices for securing your web applications. Continuous Learning: Stay updated with the latest trends and technologies in web development. Follow blogs, attend webinars, and participate in the developer community. Portfolio: Build a portfolio showcasing your projects. This is essential for demonstrating your skills to potential employers or clients. Collaboration and Version Control Hosting: Get familiar with platforms like GitHub or GitLab for hosting your code repositories and collaborating with others. Deployment: Learn how to deploy your web applications to servers or cloud platforms like Heroku, AWS, or Netlify Soft Skills: Develop soft skills like problem-solving, communication, and teamwork. These are crucial in a collaborative development environment. Remember, practice is key in web development. Work on real-world projects, contribute to open-source projects, and don't be afraid to experiment with new technologies. Happy coding!",
      imgUrl:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:site"
          content="@jeffagyepong"
        />
        <meta name="twitter:creator" content="@jeffagyepong" />
        <meta name="twitter:title" content="Hypertext Markup Languange " />
        <meta
          name="twitter:description"
          content="Learn structure of web basics"
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta property="og:title" content="web development blog" />
        <meta property="og:type" content="blog website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app/blog/One"
        />
        <meta property="og:image" content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <meta name="google-adsense-account" content="ca-pub-2474265697377160" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
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
        <Header />

        <div id="webdev">
          {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
          ))}

          <nav>
            <div className="blog-footer">
              {" "}
              <Link href={"/blog/index"}>
                <Image
                  src="/arrow-back-circle-outline.svg"
                  alt="Coast Republic"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href={"/blog/Two"}>
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
export default One;
