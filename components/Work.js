import Image from "next/image";
import Link from "next/link";
export default function Work() {
  return (
    <div className="articles">
      <h3 className="myself-header">Projects</h3>
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
                src="/backgroundcr1.png"
                alt="Coast Republic"
                width={280}
                height={200}
              />
            </div>
          
              <h3 className="font-weight">Coast Republic inc.</h3>
              <p>
                Clothing store located in Ghana delivering items to all 16
                regions 🇬🇭
              </p>
          
            <Link href={"#"} className="mail-link">
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
                height={200}
              />
            </div>
            <div>
              <h3 className="font-weight">Yo Cho inc.</h3>
              <p>Continental restaurant serving local dishes and beverages.</p>
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
