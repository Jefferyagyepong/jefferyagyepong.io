import Link from "next/link";
import Image from "next/image";
 function Myself() {
  return (
    <div className="fluid-container-row">
      
      
       <Image src={"/arrow-forward-sharp.svg"} width={220} height={320} alt="web dev" />
      <div className="bg-purple">
        <h3>Career guidance in Web Development</h3>
       <p> ⏱️ 724hrs</p>
        <p>GHS 500</p>
        </div>
    </div>
  );
}
export default Myself;