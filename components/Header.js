import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <h3 className="header-title">Subscribe</h3>
      </Link>

        <Link href={"#"} >
          Mail
        </Link>

    </header>
  );
}
export default Header;
