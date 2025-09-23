import Link from "next/link";
import Image from "next/image";
 function Myself() {
  return (
    <div className="fluid-container-row">
      <div className="bg-picture">
        <Image src={"https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww"} width={150} height={100}/>
         
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