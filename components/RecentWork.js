
import Link from "next/link";
 function RecentWork() {
    return (
     
    <div className="fluid-container">
      <h2>My Recent Work</h2>
      <p >
        Here are a few design projects I&apos;ve worked on recently. Want to see
        more?
        </p>
           <Link href={"mailto:agyepong9jeff@icloud.com"} className="container-link">📧 Email me</Link>                      
    </div>   
  );
}
export default RecentWork;