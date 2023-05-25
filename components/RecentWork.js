import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
export default function RecentWork() {
    return (
     
    <div className="feature ">
      <h2 className="feature-title">My Recent Work</h2>
      <p className="feature-para">
        Here are a few design projects I&apos;ve worked on recently. Want to see
        more?

        </p>
        <div className="center-link">
           <Link href={"mailto:agyepong9jeff@icloud.com"}  className="anchor"><FontAwesomeIcon icon={faEnvelope} width="20" ></FontAwesomeIcon>Email me</Link>

        </div>
               
    </div>

   

  );
}
