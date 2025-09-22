
import Link from "next/link";
import Image from "next/image";
 function Introduction() {
  return (
   
     <div className="fluid-container-flex">
<div className="profile-picture">
  <Image src ={"/IMG_3237.jpeg"} width={40} height={50}/>
  
  </div>
<h2>Jeffery Agyepong</h2>
<span>📍Internet</span>
<h5>Web Developer </h5>
<p>Are you new to the world of building websites? Let me guide 
    you on journey to becoming a skilled professional</p>
</div>
  );
}
export default Introduction;
