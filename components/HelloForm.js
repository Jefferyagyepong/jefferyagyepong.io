import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMessage,
  faPerson,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function HelloForm() {
  const [candidat, setCandidat] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [user, setUser] = useState();

  const onSubmit = async e => {
    e.preventDefault();
    if (candidat.name === "" || candidat.email === "")
      return alert("name or email is empty");

    await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(candidat),
    })
      .then(res => res.json())
      .then(data => setUser(data.user));
  };
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

          <p>
            {" "}
            Want to discuss a startup collaboration? I&apos;m most definitely
            game.
          </p>

          <form onSubmit={onSubmit} className="">
            <label htmlFor="Name">
              <FontAwesomeIcon icon={faPerson} width={10} height={10} /> Name
            </label>
            <input
              type="text"
              className=""
              onChange={() => {
                setCandidat({ ...candidat, name: event.target.value });
              }}
            ></input>
            <br />
            <br />
            <label htmlFor="Email">
              <FontAwesomeIcon icon={faEnvelope} width={10} height={10} /> Email
            </label>
            <input
              type="email"
              className=""
              onChange={() => {
                setCandidat({ ...candidat, email: event.target.value });
              }}
            ></input>
            <br />
            <br />

            <label htmlFor="Phone">
              <FontAwesomeIcon icon={faPhone} width={10} height={10} /> Phone no
            </label>
            <input
              type="tel"
              className=""
              onChange={() => {
                setCandidat({ ...candidat, phone: event.target.value });
              }}
            ></input>
            <br />
            <br />
            <label htmlFor="Message">
              <FontAwesomeIcon icon={faMessage} width={10} height={10} />{" "}
              Message
            </label>
            <textarea
              rows="6"
              cols=""
              onChange={() => {
                setCandidat({ ...candidat, message: event.target.value });
              }}
            ></textarea>
            <br />
            <br />

            <button className="" type="submit">
              <>Submit</>
            </button>
          </form>
          <div className="p-2">{user ? "user is : " + user : ""}</div>
        </div>
      </div>
    </div>
  );
}
