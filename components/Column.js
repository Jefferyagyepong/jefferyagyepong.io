import Image from "next/image";
export default function Column() {
    return (
  
       <section className="columns section-p1">
        <div className="column">
           <Image src="static/devicon.svg" width={190} height={190} alt="Icon developer"/>
        <h2 className="color-primary">Front-end Developer</h2>
        <p className="color-secondary">
            I like to code things from scratch,<br/>
            and enjoy bringing ideas to life in<br/>
          the browser.
        </p>

        <h3 className="color-primary">Languages I speak:</h3>
        <p  className="color-secondary">HTML5, CSS3, Javascript, Git, Sass</p>

        <h4 className="color-primary">Dev Tools:</h4>
        <p  className="color-secondary">Visual Studio Code</p>
        <p  className="color-secondary">Bootstrap</p>
      <p  className="color-secondary">Vercel</p>
        <p  className="color-secondary">GitHub</p>
         
          <p  className="color-secondary">Terminal</p>
            <p  className="color-secondary">Terminal</p>
        </div>
   

        <div className="column">
           <Image src="static/designericon.svg" width={190} height={190} alt="Icon designer"/>
        <h2 className="color-primary">Designer</h2>
        <p className="color-secondary">
            I value simple content structure,<br/>
            clean design patterns, and thoughtful<br/>
            interactions.
        </p>

        <h3 className="color-primary">Things I enjoy designing:</h3>
        <p className="color-secondary">Ui,Web,Logos</p>
        <h4 className="color-primary">Design Tools:</h4>
        <p className="color-secondary">Inkscape</p>
        <p className="color-secondary">Sketch</p>
        <p className="color-secondary">Pencil & Paper</p>
        <p className="color-secondary">Web flow</p>
        <p className="color-secondary">Figma</p>
        <p className="color-secondary">Boxy-SVG</p>
        </div>
      

        <div className="column">
           <Image src="static/mentoricon.svg" width={190} height={190} alt="Icon mentor"/>
        <h2 className="color-primary">Mentor</h2>
        <p className="color-secondary">
            I genuinely care about people and<br/>
            love helping fellow designers work<br/>
          on their craft
        </p>

        <h3 className="color-primary">Experience I draw from:</h3>
        <p  className="color-secondary">Ui, Product Design</p>
        <h4 className="color-primary">Mentor stats:</h4>
        <p className="color-secondary">3 years experience</p>
        <p className="color-secondary">2 short courses</p>
          <p className="color-secondary">1 bootcamp</p>
          <p className="color-secondary">1 bootcamp</p>
          <p className="color-secondary">1 bootcamp</p>
           <p className="color-secondary">1 bootcamp</p>
      </div>
    </section>
      
     

  );
}
