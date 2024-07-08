import Link from "next/link";
import Image from "next/image";
export default function Articles() {
    return (
      <div className="articles">
        <h3 className="myself-header">Latest articles</h3>
        <p>
          I write articles on web development, including links to resources.
        </p>
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
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="engineering"
                  width={580}
                  height={200}
                />
              </div>
              <h4>Learn Web Developement</h4>
              <p>Learning web development can be an exciting journey</p>
            </li>
            <li className="item">
              <div className="content">
                {" "}
                <Image
                  id={"image-2"}
                  src="logo-html5.svg"
                  alt="html logo"
                  width={380}
                  height={400}
                />
              </div>
              <h4>HTML 5</h4>
              <p>HTML (HyperText Markup Language)</p>
            </li>
          </ul>
        </div>
      </div>
    );
}
