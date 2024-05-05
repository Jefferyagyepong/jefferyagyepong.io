import Image from "next/image";
export default function Benefits() {
  return (
    <section className="column-box">
      <div className="column column-one">
        <Image src="static/tool.svg" width={190} height={190} alt="Icon tool" />

        <h3 className="footer-head">Tools</h3>
        <p className="footer-head">
          I&apos;ll help you build confidence and skill in your design tools.
        </p>
      </div>

      <div className="column column-one">
        <Image src="static/book.svg" width={190} height={190} alt="Icon book" />
        <h3 className="footer-head">Resources</h3>
        <p className="footer-head">
          I&apos;ll point you towards informative content to learn from.
        </p>
      </div>

      <div className="column column-one">
        <Image
          src="static/network.svg"
          width={190}
          height={190}
          alt="Icon networking"
        />
        <h3 className="footer-head">Networking</h3>
        <p className="footer-head">
          I&apos;ll connect you with other pros to expand your reach.
        </p>
      </div>

      <div className="column column-one">
        <Image
          src="static/opportunity.svg"
          width={190}
          height={190}
          alt="Icon opportunity"
        />

        <h3 className="footer-head">Opportunity</h3>
        <p className="footer-head">
          I&apos;ll make introductions and help you source potential work.
        </p>
      </div>

      <div className="column column-one ">
        <Image
          src="static/rocket.svg"
          width={190}
          height={190}
          alt="Icon rocket"
        />
        <h3 className="footer-head">Growth</h3>
        <p className="footer-head">
          I&apos;ll uncover blind spots and accelerate your growth.
        </p>
      </div>
    </section>
  );
}
