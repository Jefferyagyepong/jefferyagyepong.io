import Image from "next/image";
export default function MentorQuality() {
    return (
     
   <section className="flex-box">
        <div className="flex-items">
           <Image src="static/authenticity.svg"  alt="icon authenticity" width={190} height={190}/>     
    
        <h3 className="color-primary">Authenticity</h3>
        <p className="black">
          No sugar-coated critiques here. I care about your growth too much to
          not keep it real. We&apos;ll tear things down and rebuild them better,
          together.
        </p>
      </div>

        <div className="flex-items">
           <Image src="static/humility.svg"  alt="icon humility" width={190} height={190}/>     
        <h3 className="color-primary">Humility</h3>
        <p className="black">
          I don&apos;t profess to be at the top of the design talent pool, because I
          know there is still much for me to master. Design is a moving target
          I&apos;m hunting every day.
        </p>
      </div>

        <div className="flex-items">
          <Image src="static/equality.svg"  alt="icon equality" width={190} height={190}/>     
        <h3 className="color-primary">Equality</h3>
        <p className="black">
          To me, you&apos;re more than just a mentee. You&apos;re a designer — an industry
          peer. I&apos;m not the only one teaching and you&apos;re not the only one
          learning.
        </p>
      </div>

      <div className="flex-items">
        <Image src="static/transparency.svg"  alt="icon transparency" width={190} height={190}/>     
        <h3 className="color-primary">Transparency</h3>
        <p  className="black">
          I don&apos;t have all the answers, but I&apos;m happy to point you towards
          useful resources and share what I&apos;ve learned from my own personal
          design journey.
        </p>
      </div>
    </section>

   

  );
}
