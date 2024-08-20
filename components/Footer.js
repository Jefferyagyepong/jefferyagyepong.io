import Link from "next/link";
import Image from "next/image";

 function Footer() {
  return (
    <footer className="fluid-container">
      <div>
        <div className="flex-align-right">
          <Link href={"./"}>
            <h3>Jeffery</h3>
          </Link>
        </div>
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
     
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <Link href={"/contact"} className="color-black">
            {" "}
            <li>Contact</li>
          </Link>
          <Link href={"#"} className="color-black">
            <li>Newsletter</li>
          </Link>
        
        </ul>
      </div>

      <h6 className="footer-para">
        &copy; {new Date().getFullYear()} Jeffery Agyepong All rights Reserved
      </h6>
    </footer>
  );
}
export default Footer;
