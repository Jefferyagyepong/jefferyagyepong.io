
import Link from "next/link";

 function Introduction() {
  return (
    <div className="fluid-container">
      <h2 className="intro-message">I design and code beautifully simple things, and I love what I do</h2>
      <p className="text-center">Want to know how?</p>
      <Link href="mailto:agyepong9jeff@icloud.com" className="mail-link">Contact Me</Link>
    </div>
  );
}
export default Introduction;
