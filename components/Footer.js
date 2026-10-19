import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer>
      <div>
        <Link href={"./"}>
          <h3 className="white">Jeffery Agyepong</h3>
        </Link>

        <address>
          <p>agyepong9jeff@icloud.com</p>
          <p>0244736420</p>

          <p>PLT 20 ASOKWA Ksi</p>
        </address>
      </div>
      <div>
        <Link
          href="https://twitter.com/jeffagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-twitter.svg"} width={33} height={33} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://github.com/Jefferyagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-github.svg"} width={33} height={33} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-linkedin.svg"} width={33} height={33} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.instagram.com/jefferyagyepong_/"
          target="_blank"
          className="footer-link-item"
        >
          <Image
            src={"/logo-instagram.svg"}
            width={33}
            height={33}
            alt="icon"
          />{" "}
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
