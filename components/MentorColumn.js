import Image from "next/image";
export default function MentorColumn() {
    return (
     
  
    <section className="flex-box ">
        <div className="flex-items">
          <Image src="static/spotmentor.svg"  alt="icon spotmentor" width={190} height={190}/>     
        <h2 className="color-primary">Spot Mentoring</h2>
        <h3 className="color-primary">GHS500</h3>
        <p className="black">
          1 hour of candid conversation and advice as needed with no long term,
          ongoing commitment required.
        </p>

        <h4 className="color-primary">Good for:</h4>
        <p className="black">All designers</p>

        <a href="#" className="link-item ">Book a session</a>
      </div>

        <div className="flex-items">
            <Image src="static/support.svg"  alt="icon support" width={190} height={190}/>  
        <h2 className="color-primary">Production Support</h2>
        <h3 className="color-primary">GHS800</h3>
        <p className="black">
          4 hours of targeted feedback and design critique to help you focus on
          delivering your best work.
        </p>

        <h4 className="color-primary">Great for:</h4>
        <p className="black">Experienced designers</p>

          <a href="#" className="link-item  ">Improve your chops</a>
      </div>

        <div className="flex-items">
           <Image src="static/gem.svg"  alt="icon gem" width={190} height={190}/> 
        <h2 className="color-primary">Tailored Learning</h2>
        <h3 className="color-primary">GHS1200</h3>
        <p  className="black">
          12 hours of professional coaching and collaboration to help you
          achieve long term goals and ambitions.
        </p>

        <h4 className="color-primary">Best for:</h4>
        <p className="black">New designers</p>

        <a href="#" className="link-item  ">Start your journey</a>
      </div>
    </section>

   

  );
}
