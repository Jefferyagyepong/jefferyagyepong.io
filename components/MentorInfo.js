import Link from 'next/link';
export default function MentorInfo() {
    return (
      <div className="container">
        <h2>If you&apos;re wanting to level up, mentorship helps.</h2>
        <p className="white">
          Schedule a free consultation to ask questions, discuss details, and
          decide if it&apos;s a fit.
        </p>
        <Link href={"/"}> Introduce yourself</Link>
        <div>
          <h2>Benefits of Mentorship</h2>
          <p>
            I know a thing or two because I&apos;ve done a thing or two in my
            design career, and I&apos;m committed to helping you make use of
            that knowledge.
          </p>
        </div>
      </div>
    );
}
