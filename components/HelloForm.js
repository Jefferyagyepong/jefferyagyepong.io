import Image from "next/image";
export default function HelloForm() {
  return (
    <div className="jeffery">
      <div id="display">
        <Image
          src="static/jeffery.svg"
          width={150}
          height={150}
          alt="dev jeffery"
        />

        <p>
          {" "}
          Thanks for taking the time to reach out. How can I help you today?
        </p>

        <div className="form-wrapper">
          <form action="https://formspree.io/f/mwkjpala" method="post">
            <input
              className="input-field"
              type="text"
              placeholder="Name"
              id="name"
              required
            />
            <br /> <br />
            <input
              className="input-field"
              type="text"
              placeholder="Phone"
              id="phone"
              required
            />
            <br /> <br />
            <input
              className="input-field"
              type="text"
              placeholder="Email"
              id="mail"
              required
            />
            <br /> <br />
            <textarea rows="8" placeholder="Type your message..."></textarea>
            <br /> <br />
            <input
              type="submit"
              name="submit"
              value="Submit"
              className="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
