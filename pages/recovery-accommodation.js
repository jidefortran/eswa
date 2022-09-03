import Footer from "../components/footer/footer";
import NavBar from "../components/nav/navbar";
import style from "../styles/recovery.module.css";
import pic1 from "../static/recovery accomodation.jpg";
import pic2 from "../static/recovery accomodation2.jpg";
import Image from "next/image";

const RecoveryAccomodation = () => {
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <div className={style.wrapperContainer}>
          <div className={style.pic1}>
            <Image src={pic1} className={style.picSize} />
          </div>
          <div className={style.pic2}>
            <Image src={pic2} className={style.picSize} />
          </div>
          <div className={style.text}>
            <p className={style.textContent}>
              We also offer recovery accommodation design to assist people
              living with mental illnesses to recover while they are awaiting
              transition into the community. This accommodation will assist
              those that are recently discharged from hospital to be equipped
              with daily life skills and build on their physical and mental
              capacity before reestablishing into the community. This
              accommodation is 24-7 fully staffed with qualified staffs.
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecoveryAccomodation;
