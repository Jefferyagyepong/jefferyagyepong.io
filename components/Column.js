import Image from "next/image";
export default function Column() {
  return (
    <section className="columns">

      <div className="column">
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
        <h4>HTML5, CSS3, Javascript</h4>

        <h5>Dev Tools:</h5>
        <h6>Visual Studio Code</h6>
        <h6>Dev Http</h6>
        <h6>GitHub</h6>
        <h6>Git</h6>
        <h6>Terminal</h6>
        <h6>PostMan</h6>
      </div>
      

      <div className="column">
        <hr/>
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
        <h4>Ui, Web, Logos</h4>

        <h5>Design Tools:</h5>
        <h6>Adobe creative suite</h6>
        <h6>Inkscape</h6>
        <h6>Pencil & Paper</h6>
        <h6>Web flow</h6>
        <h6>Figma</h6>
        <h6>Gimp</h6>
      </div>

      <div className="column">
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
        <h4>Ui, Product Design</h4>

        <h5>Mentor stats:</h5>
        <h6>3 years experience</h6>
        <h6>4 short courses</h6>
        <h6>1 bootcamp</h6>
        <h6>over 8+ logo designs</h6>
        <h6>SEO strategies</h6>
        <h6>TEST DOME CERTIFICATE</h6>
      </div>
    </section>
  );
}
