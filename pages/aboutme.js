import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
export default function About() {
  return (
    <>
      <Head>
        <title>Jeffery Agyepong | Career</title>
        <meta property="og:title" content="Jeffery Agyepong | Web Developer" />
        <meta property="og:type" content="Portfolio website" />
        <meta
          property="og:url"
          content="https://jefferyagyepong-io.vercel.app"
        />
        <meta property="og:image" content="/favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeffery Agyepong" />
        <meta
          name="description"
          content="Designer, Web Developer, Website development Agency"
        />
        <meta
          name="keywords"
          content="web designer, Web developer, SEO expert, Web Engineer, Web Master Tools, Website development Agency, Software Application Developer, Website management, Hire, careers, information technology, recruitment, ghana, Africa, Europe, America, talent "
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
        <p className="article-para">
          As a web developer, my expertise spans both professional experience
          and academic training. I have a strong foundation in front-end
          development, proficient in HTML, CSS, and JavaScript, with a keen eye
          for responsive design and user interface development. My backend
          skills include working with server-side languages like PHP and
          Node.js, coupled with experience in database management using SQL and
          MongoDB. Throughout my career, I&apos;ve successfully delivered
          projects ranging from simple landing pages to complex web
          applications, demonstrating a solid understanding of web architecture
          and best practices. I am adept at version control systems such as Git
          and have experience working in agile environments, ensuring timely
          delivery and effective collaboration with cross-functional teams.
          Academically, I hold a degree in Computer Science from Kwame Nkrumah
          University of science and Technology, where I focused on web
          technologies and software development principles. My coursework and
          projects have equipped me with the ability to solve technical
          challenges creatively and efficiently, while keeping up with industry
          trends and emerging technologies. In summary, I bring a blend of
          technical proficiency, creative problem-solving skills, and a
          commitment to delivering high-quality web solutions that meet both
          user needs and business objectives.
        </p>
        <br />
        <Link
          href="/files/myResume.pdf"
          className="mail-link"
          target="_blank"
          download
        >
          Click to download my Resume
        </Link>
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </>
  );
}
