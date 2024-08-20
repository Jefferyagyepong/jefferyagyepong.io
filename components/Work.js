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
      <input type="radio" name="frame" id="frame1" checked />
        <input type="radio" name="frame" id="frame2" />
      
      <div classmate="slider-container">
  <div className="slider">
    <div className="slides">
      <div id="slides__1" class="slide">
      
                 <Image          
                src="/IMG_0968.png"
                alt="Coast Republic"
                width={280}
                height={250}
              />
            
            <h3 className="font-weight">Coast Republic inc.</h3>
            <p className="article-para">
              Clothing store located in Ghana delivering items to all 16 regions
              🇬🇭
            </p>
            <Link
              href={"https://coast-republic.vercel.app/"}
              className="mail-link">
              Visit Website
            </Link>
      </div>
      <div id="slides__2" class="slide">
     
                
                   
                <Image
                src="/yo.png"
                alt="Yo Cho"
                width={280}
                height={250}
              />
                        
              <h3 className="font-weight">Yo Cho inc.</h3>
              <p className="article-para">
                Continental restaurant serving local dishes and beverages.
              </p>
        
            <Link href={"#"} className="mail-link">
              Visit Website
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
