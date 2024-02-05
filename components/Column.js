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
        <h2>Front-end Developer</h2>
        <p>
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>

        <h3>Languages I speak:</h3>
        <span>Html5, Css3, Javascript</span>

        <h5>Dev Tools:</h5>
        <span>Visual Studio Code</span>
        <span>Dev Http</span>
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
        <h2>Designer</h2>
        <p>
          I value simple content structure, clean design patterns, and
          thoughtful interactions.
        </p>

        <h3>Things I enjoy designing:</h3>
        <span>Ui, Web, Logos</span>

        <h5>Design Tools:</h5>
        <span>Adobe creative suite</span>
        <span>Inkscape</span>
        <span>Pencil & Paper</span>
        <span>Web flow</span>
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
        <h2>Mentor</h2>
        <p>
          I genuinely care about people and love helping fellow designers work
          on their craft
        </p>

        <h3>Experience I draw from:</h3>
        <span>Ui, Product Design</span>

        <h5>Mentor stats:</h5>
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
