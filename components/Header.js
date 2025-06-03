import Link from "next/link";

function Header() {
  return (
    <header>
      <Link href={"/"}>
        <h3 className="header-title">Jeffery Agyepong</h3>
      </Link>

        <Link href={"#"} >
          PROJECT COLLABORATION
        </Link>

    </header>
  );
}
export default Header;
