import Link from "next/link";
import Image from "next/image";
 function Myself() {
  return (
    <div className="fluid-container">
      <h4 className="myself-header">I am a Web Developer</h4>
      <Link href="/aboutme" className="slate-blue">
        Read more about me <Image src={"/arrow-forward-sharp.svg"} width={20} height={20} alt="forward arrow" />
      </Link>
    </div>
  );
}
export default Myself;