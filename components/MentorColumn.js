import Image from "next/image";
import Link from "next/link";
export default function MentorColumn() {
  
  return (
    <section className="column-box">
      <div className="column  column-one">
        <Image
          src="static/spotmentor.svg"
          alt="icon spotmentor"
          width={190}
          height={190}
        />
        <h2 className="footer-head">Spot Mentoring</h2>
        <h3 className="footer-head">GHS500</h3>
        <p className="footer-head">
          72 hours of candid conversation and advice as needed with no long
          term, ongoing commitment required.
        </p>
        <h4 className="footer-head">Good for:</h4>
        <p className="footer-head">All designers</p>
        <Link className="container-link-bg" href={"/checkout"}>
          {" "}
          📑 Book a session
        </Link>
      </div>

      <div className="column  column-one">
        <Image
          src="static/support.svg"
          alt="icon support"
          width={190}
          height={190}
        />
        <h2 className="footer-head">Production Support</h2>
        <h3 className="footer-head">GHS800</h3>
        <p className="footer-head">
          4 hours a week of targeted feedback and design critique to help you
          focus on delivering your best work.
        </p>
        <h4 className="footer-head">Great for:</h4>
        <p className="footer-head">Experienced designers</p>
        <Link className="container-link-bg" href={"/checkout"}>
          {" "}
          🔗 Improve your chops
        </Link>
      </div>

      <div className="column  column-one">
        <Image src="static/gem.svg" alt="icon gem" width={190} height={190} />
        <h2 className="footer-head">Tailored Learning</h2>
        <h3 className="footer-head">GHS1200</h3>
        <p className="footer-head">
          12 hours a week of professional coaching and collaboration to help you
          achieve long term goals and ambitions.
        </p>
        <h4 className="footer-head">Best for:</h4>
        <p className="footer-head">New designers</p>
        <Link href={"/checkout"} className="container-link-bg">
          {" "}
          👨🏿‍💻 Start your journey
        </Link>
      </div>
    </section>
  );
}
