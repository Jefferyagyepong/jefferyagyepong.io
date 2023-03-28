import Image from "next/image";
import { faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Footer() {
  
    return (

     <footer class="section-p1">
      <div class="col">
      <Image src="/jefferylogo.png" width={50} height={50} alt="jeffery logo"/> <br/>  
        <h4>Contact</h4>
        <p><strong>Address: </strong> 10th Ave, McCarthy Hill, Accra</p>
        <p><strong>Phone: </strong> +233 244736420</p>
        <p><strong>Hours: </strong> 8:00 -18:00, Mon - sat</p>

        <div className="follow">
          <h4>Follow me</h4>
          <div className="icon">
            <a
              href="https://twitter.com/jeffagyepong"
              
              target="_blank"
            >    <FontAwesomeIcon icon={faTwitter} width="20" /></a>
            <a
              href="mailto:jefferyagyepong05@gmail.com"
          
              target="_blank"
            >  <FontAwesomeIcon icon={faEnvelope} width="20" /></a>
            <a
              href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
              
              target="_blank"
            >  <FontAwesomeIcon icon={faLinkedin} width="20" /></a>
            <a
              href="https://www.instagram.com/jefferyagyepong_/"
            
              target="_blank"
            >  <FontAwesomeIcon icon={faInstagram} width="20" /></a>
          </div>
        </div>
      </div>

      <div className="col">
        <h4>Quick links</h4>
        <a href="/conversation.html"  className="footer-link">
          Start a Project Conversation</a
        >
        <a href="/chat.html"  className="footer-link">Say Hello</a>
      </div>

      <div className="coast">
        

        <p>Handcrafted by Jeffery Agyepong &copy;2023</p>
        <p>All rights Reserved</p>
      </div>
    </footer>
     
     

  );
}
