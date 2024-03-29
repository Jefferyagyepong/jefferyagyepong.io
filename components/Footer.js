
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container-flex">
        <h2>start a project</h2>
        <h5>
          Interested in working together? We should queue up a chat. I&apos;ll
          buy the coffee.
        </h5>
        <Link href={"/conversation"} className="container-flex-link">
          🤝 Lets do this
        </Link>
      </div>
      <div className="footer-row">
        {" "}
        <div className="footer-link">
           <Link href="/conversation"> Start a Project Conversation</Link>{" "}
        <Link href="/mentorship"> Mentorship</Link>{" "}
        </div>
       
        <div>
          <Link href="https://twitter.com/jeffagyepong" target="_blank">
            <Image
              src={"/logo-twitter.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          </Link>{" "}
          <Link href="https://github.com/Jefferyagyepong" target="_blank">
            <Image src={"/logo-github.svg"} width={20} height={20} alt="icon" />
          </Link>{" "}
          <Link
            href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
            target="_blank"
          >
            <Image
              src={"/logo-linkedin.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          </Link>{" "}
          <Link
            href="https://www.instagram.com/jefferyagyepong_/"
            target="_blank"
          >
            <Image
              src={"/logo-instagram.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          </Link>
          <Link
            href="https://www.open.whatsapp.com/0244736420/"
            target="_blank"
          >
            <Image
              src={"/logo-whatsapp.svg"}
              width={20}
              height={20}
              alt="icon"
            />
          </Link>
        </div>
        <div>
          <h6>All rights Reserved &copy; JA 🇬🇭 {new Date().getFullYear()}</h6>
        </div>
      </div>
    </footer>
  );
}
