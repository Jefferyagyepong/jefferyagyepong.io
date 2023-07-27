import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    return (
      <div className="Header">
       
          <a href="./">
             <Image src="/ja.svg" width={80} height={85} alt="Jeffery Agyepong logo" id='logo'/>
            
        </a>
          <section className="top-nav">
   
                    <input id="menu-toggle" type="checkbox" />
                 
    <label className='menu-button-container' htmlFor="menu-toggle">
                        <div className='menu-button'></div>
                    
                         
                    
  </label>
                    <ul className="menu">
                        <li><Link href={"/mentorship"} className="salmon-mobile">Mentorship</Link></li>
                        <li><Link  href={"/sayhello"}  className="salmon-mobile">Say Hello</Link></li>


    </ul>
  </section>
        
   

      </div>
  

  );
}
