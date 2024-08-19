import Image from "next/image";
import Link from "next/link";
 function Work() {
  return (
    <div className="fluid-container">
      <h3>Projects</h3>
      <p>
        I&apos;m open to discussing partnership and colaboration projects. Here
        are a few projects I&apos;m managing.
      </p>
      <nav>
        <Link href={"#img-2"}>
          <Image
            src="/arrow-back-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
        <Link href={"#img-1"}>
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
          <li className="item-work">
            <div className="content">
              <Image
                id={"img-1"}
                src="/IMG_0968.png"
                alt="Coast Republic"
                width={280}
                height={250}
              />
            </div>

            <h3 className="font-weight">Coast Republic inc.</h3>
            <p className="article-para">
              Clothing store located in Ghana delivering items to all 16 regions
              🇬🇭
            </p>

            <Link
              href={"https://coast-republic.vercel.app/"}
              className="mail-link"
            >
              Visit Website
            </Link>
          </li>
          <li className="item-work">
            <div className="content">
              {" "}
              <Image
                id={"img-2"}
                src="/yo.png"
                alt="Yo Cho"
                width={280}
                height={250}
              />
            </div>
            <div>
              <h3 className="font-weight">Yo Cho inc.</h3>
              <p className="article-para">
                Continental restaurant serving local dishes and beverages.
              </p>
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
export default Work;
