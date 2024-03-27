import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
    
      <Link href={"./"}>
        <Image src={"/jeffery.svg"} width={60} height={80} alt="logo" />
      </Link>
      <div className="right">
        <section className="top-nav">
          <input id="menu-toggle" type="checkbox" />

          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link href={"/mentorship"} className="header-nav-link">
                Mentorship
              </Link>
            </li>
            <li>
              <Link href={"/sayhello"} className="header-nav-link">
                Say Hello
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </header>
  );
}
