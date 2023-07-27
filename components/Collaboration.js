import {  faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function Collaboration() {
    return (
     
   <div className="feature">
      <h2 className="feature-title">Interested in collaborating or investing?</h2>
      <p >
        I&apos;m always open to discussing product design work or partnership
        opportunities.
        </p>
        <div className="center-link">
          
          <Link href={"/conversation"} className="anchor"><FontAwesomeIcon icon={faMessage} width="20" ></FontAwesomeIcon>Start a conversation</Link>

        </div>

          
            
 
      </div>
     
      

    

   

  );
}


