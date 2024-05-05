import Image from "next/image";
export default function Work() {
  return (
    <section className="flex-box ">
      <div className="flex-item" id="CoastRepublic">
        <Image
          className="hide-image"
          src="/logo.svg"
          alt="Coast Republic"
          width={380}
          height={400}
        />
        <div className="hide">
          <span>Clothing Store launched in Ghana 🇬🇭 2023.</span>
          <a
            className="hide-link"
            href="https://coast-republic.vercel.app"
            target={"_blank"}
          >
            Visit Website
          </a>
        </div>
      </div>


      <div className="flex-item" id="YoCho">
        <Image
          className="hide-image"
          src="static/YoCho.svg"
          alt="Yo Cho"
          width={380}
          height={400}
        />

        <div className="hide">
          <span>
            Restaurant loacated at Backsaw ST Dompoase. Serves Continental
            dishes
          </span>
          <a
            className="hide-link"
            href="https://yocho.vercel.app/"
            target={"_blank"}
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}
