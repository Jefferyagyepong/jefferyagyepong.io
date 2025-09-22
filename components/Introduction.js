
import Link from "next/link";
import Image from "next/image";
 function Introduction() {
  return (
   
     <div className="fluid-container-flex">
<div>
  <Image  className="profile-picture" src ={"/IMG_3237.jpeg"} width={80} height={70}/>
  
  </div>
<h2>Jeffery Agyepong</h2>
<span>📍Internet</span>
<h5>Web Developer </h5>

    <div className="bg-white">
        <Link
          href="https://twitter.com/jeffagyepong"
          target="_blank"
          className="footer-link-item"
        >
          <Image src={"/IMG_3695.png"}  width={33} height={33} alt="icon" />{" "}
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

      </div>
              <p>Are you new to the world of building websites? Let me guide 
    you on your journey to becoming a skilled professional</p>
</div>
  );
}
export default Introduction;
