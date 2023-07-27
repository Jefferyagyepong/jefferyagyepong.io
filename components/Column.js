import Image from "next/image";
export default function Column() {
    return (
  
       <section className="columns section-p1">
        <div className="column"  >
           <Image src="static/devicon.svg" width={190} height={190} alt="Icon developer"/>
        <h2 className="color-primary">Front-end Developer</h2>
        <p className="black">
            I like to code things from scratch,<br/>
            and enjoy bringing ideas to life in<br/>
          the browser.
        </p>

        <h3 className="color-primary">Languages I speak:</h3>
        <h6  className="color-secondary">HTML5, CSS3, Javascript, Git, Sass</h6>

        <h4 className="color-primary">Dev Tools:</h4>
        <h6  className="color-secondary">Visual Studio Code</h6>
        <h6  className="color-secondary">Bootstrap</h6>
      <h6 className="color-secondary">Vercel</h6>
        <h6  className="color-secondary">GitHub</h6>
          <h6  className="color-secondary">Git</h6>
            <h6  className="color-secondary">Terminal</h6>
        </div>
   

        <div className="column" id="border-right">
           <Image src="static/designericon.svg" width={190} height={190} alt="Icon designer"/>
        <h2 className="color-primary">Designer</h2>
        <p className="black">
            I value simple content structure,<br/>
            clean design patterns, and thoughtful<br/>
            interactions.
        </p>

        <h3 className="color-primary">Things I enjoy designing:</h3>
        <h6 className="color-secondary">Ui,Web,Logos</h6>
        <h4 className="color-primary">Design Tools:</h4>
        <h6 className="color-secondary">Inkscape</h6>
        <h6 className="color-secondary">Sketch</h6>
        <h6 className="color-secondary">Pencil & Paper</h6>
        <h6 className="color-secondary">Web flow</h6>
        <h6 className="color-secondary">Figma</h6>
        <h6 className="color-secondary">Boxy-SVG</h6>
        </div>
      

        <div className="column">
           <Image src="static/mentoricon.svg" width={190} height={190} alt="Icon mentor"/>
        <h2 className="color-primary">Mentor</h2>
        <p  className="black">
            I genuinely care about people and<br/>
            love helping fellow designers work<br/>
          on their craft
        </p>

        <h3 className="color-primary">Experience I draw from:</h3>
        <h6  className="color-secondary">Ui, Product Design</h6>
        <h4 className="color-primary">Mentor stats:</h4>
        <h6 className="color-secondary">3 years experience</h6>
        <h6 className="color-secondary">2 short courses</h6>
          <h6 className="color-secondary">1 bootcamp</h6>
          <h6 className="color-secondary">over 8+ logo designs</h6>
          <h6 className="color-secondary">SEO strategies</h6>
           <h6 className="color-secondary">TEST DOME CERTIFICATE</h6>
      </div>
    </section>
      
     

  );
}
