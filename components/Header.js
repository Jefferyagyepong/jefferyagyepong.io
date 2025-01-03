import Link from "next/link";


function Header() {
  return (
    <header>
      <div className="header-box">
        <Link href={"/"}>
          <h3 className="header-title">Jeffery</h3>
        </Link>

        <div className="links">
          <Link href={"/blog"} className="link-item">
            BLOG
          </Link>

          <Link href={"#"} className="link-item">
            TOOLS
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Header;
