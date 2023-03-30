import Image from "next/image";
export default function Welcome() {
    return (
     
     <div id="welcome" >
      <h2>I haven&apos;t met you, and this is crazy...</h2>
      <p className="color-secondary">But if you need a mentor, then email me maybe.</p>
  

    <div id="display2" >
      <Image src="/static/jefferymacbook.svg" className="image"  alt="dev Jeffery" width={290} height={290}/>     

    </div>

    <div className="feature">
      <h2 className="feature-title">Being a designer is tough..</h2>
      <p className="feature-para">
        It seems like every other day there&pos;s a new design trend to learn, tool
        to master, and endless design-related articles to read. Honestly, it can
        be overwhelming and intimidating. I know because I&apos;ve walked more than a
        few miles in those shoes. So whether yo&apos;re new to the field or simply
        looking for some guidance and support, I can help.
      </p>
            </div>
              </div>

   

  );
}
