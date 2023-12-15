import Image from "next/image";
export default function FootBottom() {
  return (
    <div className="down">
      <br />
      <br />
      <br /> <br />
      <div className="payment-container">
        <Image
          src={"/momo.jpg"}
          height={78}
          width={95}
          alt="momo logo"
          className="payment-logo"
        />
        <Image
          src={"/Visa.png"}
          height={60}
          width={75}
          alt="momo logo"
          className="payment-logo"
        />
      </div>
      &copy; {new Date().getFullYear()}
      <span> Jeffery Agyepong</span>
    </div>
  );
}
