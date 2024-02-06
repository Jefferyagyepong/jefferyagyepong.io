import FootBottom from "@/components/FootBottom";
import Header from "@/components/Header";
import Link from "next/link";
import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
const App = () => {
  const publicKey = "pk_test_08f5b6bc08cd0fecf5e74b48240a4fc110570e1f";
  const amount = 80000;
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
    text: "Pay",
    onSuccess: () => alert("Payment succesfull for mentorship program"),
    onClose: () => alert("Wait! Don't leave :("),
  };

  return (
    <main>
      <Header/>
      <div className="container">
        <p>You have selected to be a Mantee of spot mentorship program</p>
        <p>You&apos;re about to make payment for the mentorship program</p>
        <p>
          Please kindly go through our mentorship program to read benefits{" "}
          <Link href={"/mentorship"} className="green">
            here.
          </Link>
        </p>
        <h4>Amount to Pay: &#8373; 800</h4>
   

        <form>
          <h4>Fill in the form to verify your payment credentials</h4>

          <label>Name</label>
          <input
            type="text"
            id="name"
            onChange={e => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="text"
            id="email"
            onChange={e => setEmail(e.target.value)}
            required
          />

          <label>Phone</label>
          <input
            type="text"
            id="phone"
            onChange={e => setPhone(e.target.value)}
            required
          />

          <PaystackButton {...componentProps} />
        </form>
      </div>
      <FootBottom />
    </main>
  );
};

export default App;
