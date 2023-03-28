import BurgerMenu from '../components/BurgerMenu'
import Image from 'next/image';
export default function Header() {
    return (
      <nav id="navbar">
    
        <div className="logo">
          <a href="./">
             <Image src="/jefferylogo.png" width={50} height={55} alt="Jeffery Agyepong logo"/>
            
          </a>
      
        </div>
      
            
       <div className='hide'>
                 <BurgerMenu />
          </div>



        <div className="nav-links">
        
      
           
      
    


  

        <div className="menu">
          <ul>
            <li><a href="./mentorship" id="bound">Mentorship</a></li>

            <li><a href="./sayhello" id="round">Say Hello</a></li>
          </ul>
        </div>
      </div>
    </nav>
     

  );
}
