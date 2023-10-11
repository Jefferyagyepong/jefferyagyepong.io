import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                {" "}
                <Link href="/conversation"> Start a Project Conversation</Link>
              </li>
              <li>
                {" "}
                <Link href="/mentorship"> Mentorship</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Follow me</h4>
            <ul className="inline-block">
              <li>
                {" "}
                <Link href="https://twitter.com/jeffagyepong" target="_blank">
                  <FontAwesomeIcon icon={faTwitter} width={20} height={20} />
                </Link>
              </li>
              <li>
                {" "}
                <Link href="https://github.com/Jefferyagyepong" target="_blank">
                  <FontAwesomeIcon icon={faGithub} width={20} height={20} />
                </Link>
              </li>

              <li>
                {" "}
                <Link
                  href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} width={20} height={20} />
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  href="https://www.instagram.com/jefferyagyepong_/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} width={20} height={20} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <address>10th Avenue Mccarthy Hill, Greater Accra, GH</address>
            <br />
            <Link href="tel:+233244736420" className="white">
              (233) 244736420
            </Link>
            <br />
            <br />
            <Link href="mailto:jefferyagyepong05@gmail.com" className="white">
              jefferyagyepong05@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          Jeffery Agyepong &copy; {new Date().getFullYear()}
        </p>
      </div>
      <a
        href="https://www.testdome.com/certificates/b3cfc24591104b3ba89c08dea5e490ad"
        class="testdome-certificate-stamp silver"
      >
        <span class="testdome-certificate-name"></span>
        <span class="testdome-certificate-test-name"></span>
        <span class="testdome-certificate-card-logo">
          <br />
        </span>
      </a>
    </footer>
  );
}
