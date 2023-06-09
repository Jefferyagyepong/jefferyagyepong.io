import Image from "next/image";
export default function Testimonial() {
    return (
     
        <div className="testimonial-container">
             <h2>Testimonials</h2>
            <div  className="testimonial-slide">
                 
                <h6>People I&apos;ve worked with have said some nice things... </h6>
                <div className="testimonial-image">
                  <Image src="/chisom.jpeg"  alt="chisom -project-manager" width={50} height={55} />   
                </div>
                
                <p className="color-secondary">“Jeffery was a real pleasure to work with and
                    we look forward to working with him again. He&apos;s definitely the kind
                    of designer you can trust with a project from start to finish.”</p>
                <h5 >Nwike Chisom Stephen</h5>
                <h6>Project Manager, CybalBuzz </h6>
            
                
            </div>

            
           
  
        </div>
      

    

   

    );
}



