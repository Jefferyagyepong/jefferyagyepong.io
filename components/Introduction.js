import Image from "next/image";

export default function Introduction() {
  return (
    <div className="container">
      <br />
      <h1>Web Developer</h1>
      <p>I code and design beautiful things, and I love what I do</p>
      
        <Image
          src="/static/jefferymacbook.svg"
          width={290}
          height={290}
          alt="Jeffery Agyepong"
        />
    
 
        <Image
          src="/static/profile.svg"
          width={290}
          height={390}
          alt="Web developer toolset"
        />
   
        <h2>
          I&apos;m Jeffery.
          <br />
          Nice to meet you.
        </h2>
        <br />
        <p>
          Since beginning my journey as a Web Developer and as a Designer nearly
          3 years ago, I&apos;ve started with my projects, consulted for
          startups, and I&apos;m willing to collaborate with talented people to
          create digital products for both business and consumer use. I&apos;m
          quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>

        <p>I design and code beautifully simple things, and I love what I do</p>
      </div>
  
  );
}
