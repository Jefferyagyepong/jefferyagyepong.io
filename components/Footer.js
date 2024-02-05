
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <h4>Quick Links</h4>
      <ul>
        <li>
          {" "}
          <Link href="/conversation" >
            {" "}
            Start a Project Conversation
          </Link>
        </li>
        <li>
          {" "}
          <Link href="/mentorship" >
            {" "}
            Mentorship
          </Link>
        </li>
      </ul>

      <h4>Follow me</h4>
      <div className="social-box">
        <Link href="https://twitter.com/jeffagyepong" target="_blank">
          <Image src={"/logo-twitter.svg"} width={20} height={20} alt="icon" />
        </Link>

        <Link href="https://github.com/Jefferyagyepong" target="_blank">
          <Image src={"/logo-github.svg"} width={20} height={20} alt="icon" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
          target="_blank"
        >
          <Image src={"/logo-linkedin.svg"} width={20} height={20} alt="icon" />
        </Link>

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

        <Link href="https://www.whatsapp.com/0244736420/" target="_blank">
          <Image src={"/logo-whatsapp.svg"} width={20} height={20} alt="icon" />
        </Link>
      </div>

      <h4>Contact</h4>
      <address>10th Avenue Mccarthy Hill, Greater Accra, GH</address>

      <Link href="tel:+233244736420" className="black">
        <Image src={"/call-outline.svg"} width={20} height={20} alt="icon" />{" "}
        (233) 244736420
      </Link>

      <Link href="mailto:jefferyagyepong05@gmail.com">
        <Image
          src={"/mail-open-outline.svg"}
          width={20}
          height={20}
          alt="icon"
        />{" "}
        jefferyagyepongdev@gmail.com
      </Link>

      <h6>All rights Reserved &copy; JA {new Date().getFullYear()}</h6>
    </footer>
  );
}
