import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <header>
      <div>
        <Link href={"/"}>
          <h3 className="header-title">Jeffery</h3>
        </Link>
      </div>
      <div className="links">
        <Link href={"/blog"} className="link-item">
          BLOG
        </Link>

        <Link href={"#"} className="link-item">
          TOOLS
        </Link>
      </div>
    </header>
  );
}
