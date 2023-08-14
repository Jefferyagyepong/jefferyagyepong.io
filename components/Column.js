import Image from "next/image";
export default function Column() {
    return (
  
       <section className="columns section-p1">
        <div className="column"  >
           <Image src="static/devicon.svg" width={190} height={190} alt="Icon developer"/>
        <h2 className="color-primary">Front-end Developer</h2>
        <p className="black">
            I like to code things from scratch,
            and enjoy bringing ideas to life in
          the browser.
        </p>

        <h3 className="color-primary">Languages I speak:</h3>
        <h4   className="color-secondary">HTML5, CSS3, Javascript</h4>

        <h5  className="black">Dev Tools:</h5>
        <h6  className="black">Visual Studio Code</h6>
        <h6   className="black">Dev Http</h6>
        <h6   className="black">GitHub</h6>
          <h6  className="black">Git</h6>
          <h6  className="black">Terminal</h6>
          <h6  className="black">PostMan</h6>
          
        </div>
        <hr/>
   

        <div className="column">
           <Image src="static/designericon.svg" width={190} height={190} alt="Icon designer"/>
        <h2 className="color-primary">Designer</h2>
        <p className="black">
            I value simple content structure,
            clean design patterns, and thoughtful
            interactions.
        </p>

        <h3 className="color-primary">Things I enjoy designing:</h3>
          <h4 className="color-secondary">Ui, Web, Logos</h4>
          

          <h5  className="color-primary">Design Tools:</h5>
          <h6 className="black">Adobe creative suite</h6>
        <h6  className="black">Inkscape</h6>
        <h6  className="black">Pencil & Paper</h6>
        <h6  className="black">Web flow</h6>
        <h6  className="black">Figma</h6>
        <h6  className="black">Gimp</h6>
        </div>
      

        <div className="column">
           <Image src="static/mentoricon.svg" width={190} height={190} alt="Icon mentor"/>
        <h2 className="color-primary">Mentor</h2>
        <p  className="black">
            I genuinely care about people and
            love helping fellow designers work
          on their craft
        </p>

        <h3 className="color-primary">Experience I draw from:</h3>
          <h4 className="color-secondary">Ui, Product Design</h4>
          
        <h5 className="color-primary">Mentor stats:</h5>
        <h6 className="color-secondary">3 years experience</h6>
        <h6 className="color-secondary">4 short courses</h6>
          <h6 className="color-secondary">1 bootcamp</h6>
          <h6 className="color-secondary">over 8+ logo designs</h6>
          <h6 className="color-secondary">SEO strategies</h6>
           <h6 className="color-secondary">TEST DOME CERTIFICATE</h6>
      </div>
    </section>
      
     

  );
}
