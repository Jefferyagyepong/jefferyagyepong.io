import Image from "next/image";
export default function Welcome() {
    return (
     
      <div className="container">
    
        <div>
          <div>
      <h2>I haven&apos;t met you, and this is crazy...</h2>
      <p>But if you need a mentor, then email me maybe.</p>
          </div>
            
  
      <Image src="/static/jefferymacbook.svg"  alt="dev Jeffery" width={290} height={290}/>     

    </div>

    <div>
      <h2>Being a designer is tough..</h2>
      <p>
        It seems like every other day there&apos;s a new design trend to learn, tool
        to master, and endless design-related articles to read. Honestly, it can
        be overwhelming and intimidating. I know because I&apos;ve walked more than a
        few miles in those shoes. So whether yo&apos;re new to the field or simply
        looking for some guidance and support, I can help.
      </p>
            </div>
          
        </div>
        
   

  );
}
