import Image from "next/image";
import Link from "next/link";
 function Work() {
  return (
    <div className="fluid-container">
      <h3>Projects</h3>
      <p>
        I&apos;m open to discussing partnership and colaboration projects. Here
        are a few projects I&apos;m managing.
      </p>
      
      
      <div classmate="slider-container">
  <div className="slider">
    <div className="slides">
      <div id="slides__1" className="slide">
       <Image          
                src="https://res.cloudinary.com/zxiwczte/image/upload/v1790976616/CCNIKEDUNKLOWRETRO004.jpg"
                alt="Coast Collective"
                width={280}
                height={250}
                className="image-opacity"
              />
            
            <h3>Coast Collective Store.</h3>
            <p>
              Clothing and shoes store located in Ghana delivering items to all 16 regions
              🇬🇭
            </p>
            <Link
              href ="https://www.coast-collective.com"
              target="_blank"
              className="mail-link">
              Visit Coast Collective
            </Link>
      </div>
    
    </div>
  </div>
</div>



     <div id="controls">
            <label for="frame1"></label>
            <label for="frame2"></label>
            
        </div>
        <div id="bullets">
            <label for="frame1"></label>
            <label for="frame2"></label>
         
        </div>
         </div>
        );
  
}
export default Work;
