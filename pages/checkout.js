import FootBottom from "@/components/FootBottom";
import Link from "next/link";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
const App = () => {
  const publicKey = "pk_test_08f5b6bc08cd0fecf5e74b48240a4fc110570e1f";
  const amount = 800;
  const currency = "GHS";
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
    const [check, setCheck] = useState("");

  const componentProps = {
    email,
    amount,
    currency,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <main>
      <div className="text-align">
        <p>You&apos;re about to make payment for mentorship program</p>
        <p>
          Please kindly go through our mentorship program to read benefits{" "}
          <Link href={"/mentorship"} className="green">
            here.
          </Link>
        
        </p>
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
              required
            />
          </div>
          <br />
          <div className="input-container">
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <br />
          <div className="input-container">
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={e => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="check">
            <div className="check-align">
              <input
                type="checkbox"
                required
                onChange={e => setCheck(e.target.value)}
              />
            </div>
            <div className="check-align-two">Accept Terms & Conditions</div>
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
