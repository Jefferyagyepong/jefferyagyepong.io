import Image from "next/image";
export default function Testimonial() {
    return (
      <div className="container">
        <h2>Testimonials</h2>

        <p>People I&apos;ve worked with have said some nice things... </p>

        <Image
          src="/chisom.jpeg"
          alt="chisom -project-manager"
          width={50}
          height={55}
        />

        <p>
          “Jeffery was a real pleasure to work with and we look forward to
          working with him again. He&apos;s definitely the kind of designer you
          can trust with a project from start to finish.”
        </p>
        <h5 className="testimonial-head">Nwike Chisom Stephen</h5>
        <h6 className="testimonial-para">Project Manager, CybalBuzz </h6>
      </div>
    );
}



