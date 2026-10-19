import Link from "next/link";

function Header() {
  return (
    <header>
    
        <h3 className="header-title">Welcome</h3>
      
         <Link href="mailto:agyepong9jeff@icloud.com" className="mail-white">Mail</Link>

    </header>
  );
}
export default Header;
