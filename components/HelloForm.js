
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
function HelloForm() {
  const [state, handleSubmit] = useForm("maygvdqr");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="container">
  

      <p> Want to say hello 👋🏿 I&apos;m most definitely game.</p>

      <form>
        
        <input id="name" type="text" name="name" placeholder="enter your name" />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <input id="email" type="email" name="email" placeholder="enter your email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      
        <textarea id="message" name="message" rows={6} placeholder="write your message"/>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          type="submit"
          disabled={state.submitting}
          className="form-button"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default HelloForm;
