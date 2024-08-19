import Link from "next/link";
import Image from "next/image";
 function Newsletter() {
  return (
    <div className="fluid-container">
      <h3>Join the newsletter.</h3>
      <p>
        Useful tech tips,directly to your inbox. No spam, unsubscribe at any
        time.
      </p>
      <input type="email" name="email" placeholder="enter your email" />
      <Link href="#" className="purple">
        <Image
          src={"/open-outline.svg"}
          width={35}
          height={35}
          alt="open svg"
        />
        Subscribe
      </Link>
    </div>
  );
}
export default Newsletter;
