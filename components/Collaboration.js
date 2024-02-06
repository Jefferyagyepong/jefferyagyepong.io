import Image from 'next/image';
import Link from "next/link";
export default function Collaboration() {
  return (
    <div className='container'>
      <h2>Interested in collaborating or investing?</h2>
      <p>
        I&apos;m always open to discussing product design work or partnership
        opportunities.
      </p>
  
        <Link href={"/conversation"} className='container-link'>
          ✍🏼
          Start a conversation
        </Link>
      </div>
    
  );
}
