import {  faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Collaboration() {
    return (
     
   <div className="feature">
      <h2 className="feature-title">Interested in collaborating or investing?</h2>
      <p className="feature-para">
        I'm always open to discussing product design work or partnership
        opportunities.
      </p>

            <a className="center-link" href="/conversation.html"><FontAwesomeIcon icon={faMessage} width="20" />start a conversation </a>
            
 
      </div>
     
      

    

   

  );
}


