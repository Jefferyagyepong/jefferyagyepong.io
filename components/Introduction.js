


import Image from "next/image";

export default function Introduction() {
    return (
     
        <div className="container">
            
            <h1 className="test1">Front-end Developer</h1>
            <span className="test2">
                I code and design beautiful things, and I love what I do
            </span>
 <div id="display"  >
     <Image src="/static/jeffery.svg"  width={190} height={190}  alt="Jeffery Agyepong"/>     
     
    </div>

            <div id="display2" >
         <Image src="/static/profile.svg"  width={490} height={490}  alt="Web developer display Image"/>        
     
    </div>
        
    
         
                <div className="feature ">
                    <h2 className="feature-title">Hi, I&apos;m Jeffery. Nice to meet you.</h2>
                    <p className="feature-para">
                        Since beginning my journey as a Web Developer and as a Designer nearly 3<br/>
                        years ago, I&apos;ve started with my projects, consulted for startups, and I&apos;m<br/>
                        willing to collaborate with talented people to create digital products<br/>
                        for both business and consumer use. I&apos;m quietly confident,naturally<br/>
                        curious, and perpetually working on improving my chops one design<br/>
                        problem at a time.
                    </p>

                    <p className="feature-para">I design and code beautifully simple things, and I love what I do</p>
                </div>
     
 
        
        </div>




    

    );
}
