import Link from "next/link";
export default function Header() {
  return (
    <div id="work">
      <h2>start a project</h2>
      <p>
        Interested in working together? We should queue up a chat. I&apos;ll buy
        the coffee.
      </p>
      <Link className="mailj" href={"/conversation"}>
        Lets do this
      </Link>
    </div>
  );
}
