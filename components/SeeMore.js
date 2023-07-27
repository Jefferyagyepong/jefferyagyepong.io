import {faHands} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import Link from "next/link";  
export default function SeeMore() {
    return ( 


  
          <div className="center-link">
           <Link href="" target="blank"  className="see-more"><FontAwesomeIcon icon={faHands} width="20" ></FontAwesomeIcon> See more on Dribbble</Link>

        </div>
          );
}
