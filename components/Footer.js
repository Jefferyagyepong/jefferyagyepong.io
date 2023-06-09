
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link.js";


export default function Footer() {
 


    return (

      
      <footer className="footer">
          <div className="container-footer">
            <div className="row">
              <div className="footer-col">
                <h4>Quick Links</h4>
                <ul>
              
                       <li>   <Link href="/conversation"  >   Start a Project Conversation</Link></li>
                       <li> <Link href="/mentorship"  > Mentorship</Link></li>
  
                    
                </ul>
                
              </div>
               <div className="footer-col">
                <h4>Follow me</h4>
                <ul>
                  <li></li>
                       <li>            <Link
              href="https://twitter.com/jeffagyepong"
           className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faTwitter} width={20} height={20} style={{color:"blue"}} /></Link></li>
                       <li>          <Link
              href="mailto:jefferyagyepong05@gmail.com"
            className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faEnvelope} width={20} height={20}/></Link></li>
  
                       <li>  <Link
              href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
               className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faLinkedin} width={20} height={20} style={{color:"red"}}/></Link></li>
                  <li> <Link
              href="https://www.instagram.com/jefferyagyepong_/"
        className="icon"
              target="_blank"
            ><FontAwesomeIcon icon={faInstagram} width={20} height={20} style={{color:"orange"}}/></Link></li>
                </ul>
                
              </div>
              <div className="footer-col">
                        <h4>Contact</h4>
                   <address>   
                10th Avenue Mccarthy Hill, Greater Accra, GH
              </address>
              <br/>
                <Link  href="tel:+233244736420" className="white">(233) 244736420</Link><br/><br/>
                   <Link  href="mailto:jefferyagyepong05@gmail.com"  className="white">jefferyagyepong05@gmail.com</Link>
              </div>
         
              
            </div>
            
          </div>
        <div className="footer-bottom">
        
            <p   className="copyright">
                
          Handcrafted by Jeffery Agyepong  all rights reserved {' '}   &copy;   {new Date().getFullYear()}
          </p>
  
          </div>
          
      </footer>
   
   
   
  );
}


