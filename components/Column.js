import Image from "next/image";
export default function Column() {
  return (
    <section className="column-box">
      <div className="column  column-one">
        <Image
          src="static/devicon.svg"
          width={190}
          height={190}
          alt="Icon developer"
        />
        <h2 className="footer-head">Front-end Developer</h2>
        <p className="footer-head">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>

        <h3 className="footer-head">Languages I speak:</h3>
        <p className="footer-head">HTML5, Css3, Javascript</p>

        <h5 className="footer-head">Dev Tools:</h5>
        <span>Visual Studio Code</span>
        <span>GitHub</span>
        <span>Git</span>
        <span>Terminal</span>
        <span>PostMan</span>
      </div>

      <div className="column  column-two">
        <Image
          src="static/designericon.svg"
          width={190}
          height={190}
          alt="Icon designer"
        />
        <h2 className="footer-head">Designer</h2>
        <p className="footer-head">
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>

        <h3 className="footer-head">Things I enjoy designing:</h3>
        <p className="footer-head">Ui, Web, Logos</p>

        <h5 className="footer-head">Design Tools:</h5>
        <span>Adobe creative suite</span>
        <span>Inkscape</span>
        <span>Pencil & Paper</span>
        <span>Figma</span>
        <span>Gimp</span>
      </div>

      <div className="column  column-three">
        <Image
          src="static/mentoricon.svg"
          width={190}
          height={190}
          alt="Icon mentor"
        />
        <h2 className="footer-head">Mentor</h2>
        <p className="footer-head">
          I genuinely care about people and love helping fellow designers work
          on their craft
        </p>

        <h3 className="footer-head">Experience I draw from:</h3>
        <p className="footer-head">Ui, Product Design</p>

        <h5 className="footer-head">Mentor stats:</h5>
        <span>3 years experience</span>
        <span>4 short courses</span>
        <span>1 bootcamp</span>
        <span>over 8+ logo designs</span>
        <span>SEO strategies</span>
        <span>TEST DOME CERTIFICATE</span>
      </div>
    </section>
  );
}
