import {faHands} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function MentorInfo() {
    return (
     
     <div className="feature">
      <h2 className="feature-title">If you&apos;re wanting to level up, mentorship helps.</h2>
      <p className="feature-para">
        Schedule a free consultation to ask questions, discuss details, and
        decide if it&apos;s a fit.
      </p>

        <a className="center-link" href="" target="_blank" >  <FontAwesomeIcon icon={faHands} width="20" />  Introduce yourself</a>
        <br/>        <br/>        <br/>
               <div className="feature">
      <h2 className="feature-title">Benefits of Mentorship</h2>
      <p className="feature-para">
            I know a thing or two because I&apos;ve done a
            thing or two in my design career, and
            I&apos;m committed to helping you make use
            of that knowledge.
      </p>
    </div>
    </div>

 
 

   

  );
}
