import FootBottom from "@/components/FootBottom";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
const App = () => {
  const publicKey = "sk_live_91abb369709adbf19dd2a3076ff6f4b5f8e032ba";
  const amount = 800;
  const currency = "GHS";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Proceed to Pay",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <main>
      <div className="text-align">
        <p>You&apos;re about to make payment for mentorship program</p>
        <br />
        <h4>Amount to Pay: &#8373; 800</h4>
        <br />
      </div>
      <form>
        <h4>Fill in the form to verify your payment credentials</h4>
        <br />
        <section className="left">
          <div className="input-container">
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={e => setName(e.target.value)}
            />
          </div>
          <br />
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div className="input-container">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <br />
          <div className="send-container">
            <PaystackButton {...componentProps} />
          </div>
        </section>
      </form>
      <FootBottom />
    </main>
  );
};

export default App;
