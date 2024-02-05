import Link from "next/link";
export default function Last() {
  return (
    <div className="container-flex">
      <h2>start a project</h2>
      <h5>
        Interested in working together? We should queue up a chat. I&apos;ll buy
        the coffee.
      </h5>
      <Link href={"/conversation"} className="container-flex-link">🤝 Lets do this</Link>
    </div>
  );
}
