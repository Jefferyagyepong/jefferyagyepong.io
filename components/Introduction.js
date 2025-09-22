
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
    <div>
        <Link
          href="https://twitter.com/jeffagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-twitter.svg"} width={93} height={93} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://github.com/Jefferyagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-github.svg"} width={33} height={33} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.linkedin.com/in/jeffery-agyepong-943ba0234"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/logo-linkedin.svg"} width={33} height={33} alt="icon" />{" "}
        </Link>{" "}
        <Link
          href="https://www.instagram.com/jefferyagyepong_/"
          target="_blank"
          className="footer-link-item"
        >
          <Image
            src={"/logo-instagram.svg"}
            width={33}
            height={33}
            alt="icon"
          />{" "}
        </Link>
      </
</div>
  );
}
export default Introduction;
