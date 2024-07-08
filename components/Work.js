import Image from "next/image";
import Link from "next/link";
export default function Work() {
  return (
    <div className="wrapper-container">
      <h3 className="myself-header">Projects</h3>
      <p>Projects I have worked on and link is available</p>
      <nav>
        <Link href={"#image-2"}>
          <Image
            src="/arrow-back-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
        <Link href={"#image-1"}>
          <Image
            src="/arrow-forward-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
      </nav>
      <div className="list-wrapper">
        <ul className="list">
          <li className="item">
            <div className="content">
              <Image
                id={"image-1"}
                src="/backgroundcr1.png"
                alt="Coast Republic"
                width={380}
                height={400}
              />
            </div>
            <Link href={"#"} className="mail-link">
              Visit Website
            </Link>
          </li>
          <li className="item">
            <div className="content">
              {" "}
              <Image
                id={"image-2"}
                src="/yo.png"
                alt="Yo Cho"
                width={380}
                height={400}
              />
            </div>
            <Link href={"#"} className="mail-link">
              Visit Website
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
