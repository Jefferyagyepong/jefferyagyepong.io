import Link from "next/link";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Image from "next/image";
 function Newsletter() {
  const [state, handleSubmit] = useForm("xzzpgjrb");
  if (state.succeeded) {
    return <p>Welcome 👍🏿 you have subscribed to our Newsletter</p>;
  }
  return (
    <div className="fluid-container">
      <h3>Join the newsletter.</h3>
      <p>
        Useful tech tips,directly to your inbox. No spam, unsubscribe at any
        time.
      </p>
      <form  onSubmit={handleSubmit}>
         <input type="email" name="email" placeholder="enter your email" />
          <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
             <button   type="submit"
              value="Subscribe" 
              onclick="return true"
              disabled={state.submitting} className="purple">
         Submit </button>
           
         </form>     
  
    </div>
  );
}
export default Newsletter;





 

