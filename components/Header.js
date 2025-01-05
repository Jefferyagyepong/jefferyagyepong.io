import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <h3 className="header-title">Jeffery Agyepong</h3>
      </Link>

      <div>
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
export default Header;
