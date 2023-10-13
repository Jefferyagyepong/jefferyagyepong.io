import Image from "next/image";
export default function Work() {
  return (
    <section className="flex-box ">
      <div className="flex-item" id="CoastRepublic">
        <Image
          className="hide-image"
          src="static/crlogo.svg"
          alt="Coast Republic"
          width={380}
          height={400}
        />
        <div className="hide">
          <span>
            T-Shirt Company curated for the community. Established in 2023 by
            Jeffery Agyepong and its Scheduled to launch on 08-04-23
          </span>
          <a className="hide-link" href="https://coast-republic.vercel.app">
            Visit Website
          </a>
        </div>
      </div>

      <div className="flex-item" id="Beelydrop">
        <Image
          className="hide-image"
          src="static/Beelydrop.svg"
          alt="Beelydrop"
          width={380}
          height={400}
        />
        <div className="hide">
          <span>
            We are here to provide a place special for electronic devices.
          </span>
          <a
            className="hide-link"
            href="https://beelydrop.com"
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
          <a className="hide-link" href="https://yocho.vercel.app/">
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
}
