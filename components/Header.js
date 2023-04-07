import BurgerMenu from '../components/BurgerMenu'
import Image from 'next/image';
export default function Header() {
    return (
      <div  id="navbar">
        
          <a href="./">
             <Image src="/jefferylogo.png" width={50} height={55} alt="Jeffery Agyepong logo"/>
            
        </a>
        <div className='menu'>
            <BurgerMenu />
        </div>
      
 
  
          <ul className='nav-link'>
            <li className='nav-links'><a href="./mentorship" id="bound">Mentorship</a></li>

            <li className='nav-links'><a href="./sayhello" id="round">Say Hello</a></li>
        </ul>
     
         
      
                
  
  
      </div>
    
  

     

  );
}
