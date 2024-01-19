import Image from "next/image";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function HelloForm() {
  const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <div className="jeffery">
        <div id="display">
          <Image
            src="static/jeffery.svg"
            width={150}
            height={150}
            alt="dev jeffery"
          />

          <p> Want to say hello 👋🏿 I&apos;m most definitely game.</p>

          <form onSubmit={handleSubmit}>
            <section className="left">
              <div className="input-container">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
              <div className="input-container">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="input-container">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <br />
              <br />
              <div className="send-container">
                <button type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </div>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
}
export default HelloForm