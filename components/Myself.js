import Link from "next/link";
import Image from "next/image";
 function Myself() {
  return (
    <div className="fluid-container-row">
      <div className="bg-picture">
        <Image src={"https://plus.unsplash.com/premium_photo-1678566154673-a728037f3f00?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={150} height={200}/>
         
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