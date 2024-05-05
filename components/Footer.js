import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <h2 className="footer-head">start a project</h2>
      <p className="footer-para">
        Interested in working together? We should queue up a chat. I&apos;ll buy
        the coffee.
      </p>
      <Link href={"/conversation"} className="project-link">
        🤝 Lets do this
      </Link>{" "}
      <br />
      <div>
        {" "}
        <Link href="/conversation" className="footer-link-item">
          {" "}
          Start a Project Conversation
        </Link>{" "}
        <Link href="/mentorship" className="footer-link-item">
          {" "}
          Mentorship
        </Link>{" "}
      </div>
      <br /> <br />
      <div>
        <Link
          href="https://twitter.com/jeffagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-twitter.svg"} width={20} height={20} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://github.com/Jefferyagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-github.svg"} width={20} height={20} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-linkedin.svg"} width={20} height={20} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.instagram.com/jefferyagyepong_/"
          target="_blank"
          className="footer-link-item"
        >
          <Image
            src={"/logo-instagram.svg"}
            width={20}
            height={20}
            alt="icon"
          />{" "}
        </Link>
        <Link
          href="https://www.open.whatsapp.com/0244736420/"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-whatsapp.svg"} width={20} height={20} alt="icon" />
        </Link>
      </div>
      <div>
        <h6 className="footer-para">
          All rights Reserved &copy; JA 🇬🇭 {new Date().getFullYear()}
        </h6>
      </div>
    </footer>
  );
}
