import Link from "next/link";
import Image from "next/image";
 function Myself() {
  return (
    <div className="fluid-container-row">
      <div className="bg-picture">
           <Image src={"/https://unsplash.com/photos/black-and-white-laptop-computer-XopauR-Nagk"} width={220} height={320} alt="web dev" />
        </div>
      
    
      <div className="bg-purple">
        <h3>Career guidance in Web Development</h3>
       <p> ⏱️ 724hrs</p>
        <p>GHS 500</p>
        <button className="buy-now">Buy Now</button>
        </div>
    </div>
  );
}
export default Myself;