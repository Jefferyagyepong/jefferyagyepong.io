import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <h3 className="header-title">Jeffery Agyepong</h3>
      </Link>

      <div>
        <Link href={"/blog"} >
          BLOG
        </Link>

        <Link href={"#"} >
          TOOLS
        </Link>
      </div>
    </header>
  );
}
export default Header;
