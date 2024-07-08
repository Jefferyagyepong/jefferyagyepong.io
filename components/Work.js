import Image from "next/image";
import Link from "next/link";
export default function Work() {
  return (
    <div className="wrapper-container">
      <h3 className="myself-header">Projects</h3>
      <p>Projects I have worked on and link is available</p>
      <nav>
        <Image
          src="/arrow-back-circle-outline.svg"
          alt="Coast Republic"
          width={20}
          height={20}
        />

        <Image
          src="/arrow-forward-circle-outline.svg"
          alt="Coast Republic"
          width={20}
          height={20}
        />
      </nav>

      <ul className="list">
        <li className="item">
          <div className="content">
            <Image
              className="gallery-img"
              id={"image-1"}
              src="/backgroundcr1.png"
              alt="Coast Republic"
              width={380}
              height={400}
            />
          </div>
        </li>
        <li className="item">
          <div className="content">
            {" "}
            <Image
              className="gallery-img"
              id={"image-2"}
              src="/logo.svg"
              alt="Yo Cho"
              width={380}
              height={400}
            />
          </div>
        </li>
      </ul>
    </div>
  );
}
