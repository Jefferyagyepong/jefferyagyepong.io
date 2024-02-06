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
        <h2>Spot Mentoring</h2>
        <h3>GHS500</h3>
        <p>
          72 hours of candid conversation and advice as needed with no long term,
          ongoing commitment required.
        </p>
        <h4>Good for:</h4>
        <p>All designers</p>
        <Link className="container-link" href={"/checkout"}>
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
        <h2>Production Support</h2>
        <h3>GHS800</h3>
        <p>
          4 hours  a week of targeted feedback and design critique to help you focus on
          delivering your best work.
        </p>
        <h4>Great for:</h4>
        <p>Experienced designers</p>
        <Link className="container-link" href={"/checkout"}>
          {" "}
          🔗 Improve your chops
        </Link>
      </div>

      <div className="column  column-one">
        <Image src="static/gem.svg" alt="icon gem" width={190} height={190} />
        <h2>Tailored Learning</h2>
        <h3>GHS1200</h3>
        <p>
          12 hours a week of professional coaching and collaboration to help you
          achieve long term goals and ambitions.
        </p>
        <h4>Best for:</h4>
        <p>New designers</p>
        <Link href={"/checkout"} className="container-link">
          {" "}
          👨🏿‍💻 Start your journey
        </Link>
      </div>
    </section>
  );
}
