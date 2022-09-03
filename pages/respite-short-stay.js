import Image from "next/image";
import style from "../styles/respite.module.css";
import Footer from "../components/footer/footer";
import NavBar from "../components/nav/navbar";
import pic1 from "../static/resp.webp";
import pic2 from "../static/recovery accomodation.jpg";

const Respite = () => {
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <div className={style.wrapperContainer}>
          <div className={style.pic1}>
            <Image src={pic1} className={style.picSize} />
          </div>
          <div className={style.text}>
            <p className={style.textContent}>
              We offer short term accommodation that is fully equipped with
              state of the art gadgets to keep you company. Our respite
              accommodation is open 24-7 manned with qualified staff to assist
              you during your stay. You can stay as little for few hours to
              several weeks, depending on the amount of time you choose to live
              in with maximum comfort. This accommodation is designed to offer
              maximum convenient experience for our customers.
            </p>
            <hr />
            <p className={style.textContent}>
              We take into consideration the customize needs attached to every
              of our service users requires. We asset our participant to
              maximize the full use of their living options by conducting an
              assessment that determining what kind of living options is
              suitable for their living. All of our independent accommodation
              and group home are presented with befitting design and arrangement
              that promotes the living independency of our participants. Our
              accommodations location are in good proximity to where services
              such as shops, cinemas, health centers and many social amenities
              are located. Our accommodations are well equipped with top range
              living gadgets, equipment’s and appliances that makes lives easy
              for our participants with adequate security in place.
            </p>
          </div>
          <div className={style.pic2}>
            <Image src={pic2} className={style.picSize} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Respite;
