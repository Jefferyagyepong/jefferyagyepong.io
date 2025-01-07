import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import Post from "../../components/Post";
import Scroll from "@/components/Scroll";
const Three = () => {
  const blogPosts = [
    {
      title: "Web Design",
p1:" User Experience, Interaction, and User Interface design",
p2:"Often, when we think of design, we think about how something looks. On the web, the first matter of business is designing how the site works. Before you pick colors and fonts, it is important to identify the site’s goals, how it will be used, and how visitors move through it. These tasks fall under the disciplines of User Experience (UX) design, Interaction Design (IxD), and User Interface (UI) design. There is a lot of overlap between these responsibilities, and it is not uncommon for one person or team to handle all three. The User Experience designer takes a holistic view of the design process— ensuring the entire experience with the site is favorable. UX design is based on a solid understanding of users and their needs based on observations and interviews. According to Donald Norman (who coined the term), UX design includes “all aspects of the user’s interaction with the product: how it is perceived, learned, and used.” For a website or application, that includes the visual design, the user interface, the quality and message of the content, and even the overall site performance. The experience must be in line with the organization’s brand and business goals in order to be successful. The goal of the Interaction Designer is to make the site as easy, efficient", p3:"and delightful to use as possible. Closely related to interaction design is User Interface design, which tends to be more narrowly focused on the functional organization of the page as well as the specific tools (buttons, links, menus, and so on) that users use to navigate content or accomplish tasks.",
p4:" The following are deliverables that UX, UI, or interaction designers produce:",
p5:" User research and testing reports: Understanding the needs, desires, and limitations of users is central to the success of the design of the site or web application. The approach of designing around the user’s needs is referred to as User-Centered Design (UCD), and it is central to contemporary web design. Site designs often begin with user research, including interviews and observations, in order to gain a better understanding of how the site can solve problems or how it will be used. It is typical for designers to do a round of user testing at each phase of the design process to ensure the usability of their designs. If users are having a hard time figuring out where to find content or how to move to the next step in a process, then it’s back to the drawing board.",
p6:" Wireframe diagrams: A wireframe diagram shows the structure of a web page using only out- lines for each content type and widget. The purpose of a wireframe diagram is to indicate how the screen real estate is divided and where functionality and content such as navigation, search boxes, form elements, and so on, are placed. Colors, fonts, and other visual identity elements are deliberately omitted so as not to distract from the structure of the page. These diagrams are usually annotated with instructions for how things should work so the development team knows what to build.",
p7:" Site diagram: A site diagram indicates the structure of the site as a whole and how individual pages relate to one another. image shows a very simple site diagram. Some site diagrams fill entire walls!",
p8:" Visual (graphic) design",
p9:"Because the web is a visual medium, web pages require attention to their visual presentation. First impressions are everything. A graphic designer creates the “look and feel” of the site—logos, graphics, type, colors, layout, and so on—to ensure that the site makes a good first impression and is consistent with the brand and message of the organization it represents. There are many methods and deliverables that can be used to present a visual design to clients and stakeholders. The most traditional are sketches or mock-ups (created in Inkscape or a similar tool) of the way the site might look, such as the home page mockups",
p10:"We will be using two open source software during our web design phase. ",
Url: "/logo-sass.svg",

    },
  ];
  return (
    <>
      <Head>
        <title>Jeffery Agyeong | blog</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@jeffagyepong" />
        <meta name="twitter:creator" content="@jeffagyepong" />
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
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <meta name="google-adsense-account" content="ca-pub-2474265697377160" />
   <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
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
        <Scroll/>
        <Header />

        <div className="fluid-container-flex">
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
                
              </Link>

              <Link href={"/blog/Four"}>
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
export default Three;
