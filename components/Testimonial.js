import Image from "next/image";
export default function Testimonial() {
    return (
     
        <div className="testimonial-container">
             <h2>Testimonials</h2>
            <div  className="testimonial-slide">
                 
                <p className="color-secondary">People I&apos;ve worked with have said some nice things... </p>
                 <Image src="/chisom.jpeg"  alt="chisom -project-manager" width={50} height={55}/>  <br/> <br/>  
                <p className="color-secondary">“Jeffery was a real pleasure to work with and<br/>
                    we look forward to working with him again. He&apos;s definitely the kind<br/>
                    of designer you can trust with a project from start to finish.”</p>
                <h5 className="color-secondary">Nwike Chisom Stephen</h5>
                <p className="color-secondary">Project Manager, CybalBuzz </p>
            
                
            </div>

            
           
  
        </div>
      

    

   

    );
}



