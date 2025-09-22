
import Link from "next/link";

 function Introduction() {
  return (
    <div className="fluid-container-flex">
              <div>
        <Link href={"./"}>
          <h3 className="white">Jeffery</h3>
        </Link>
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
      <h2 className="intro-message">I design and code beautifully simple things, and I love what I do</h2>
      <p className="text-center">Want to know how?</p>
      <Link href="mailto:agyepong9jeff@icloud.com" className="mail-link">Contact Me</Link>
    </div>
  );
}
export default Introduction;
