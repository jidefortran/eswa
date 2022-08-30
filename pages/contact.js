import { useState } from "react";
import style from "../styles/contact.module.scss";
export default function Contact() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const { firstName, lastName, email, phone, message } = values;
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (error) {}
  };
  //   async function handlerOnsubmit(e) {
  //     e.preventDefault();
  //     const formData = {};
  //     Array.from(e.currentTarget.elements).forEach((field) => {
  //       if (!field.name) return;
  //       formData[field.name] = field.value;
  //     });
  //     console.log(formData);
  //   }
  return (
    <div className={style.conContainer}>
      <h1>Contact Us</h1>
      <p>Lorem Ipsum</p>
      <div id={style.contactContainer}>
        <div className={style.contactInfo}>
          <h4>Contact Information</h4>
          <p>Fill up the form and click send</p>
          <div className={style.iconText}>
            <i className="fa-solid fa-phone" aria-handle="true">
              {" "}
            </i>
            <span>0473578636</span>
          </div>
          <div className={style.iconText}>
            <i className="fa-solid fa-envelope-open" aria-handle="true">
              {" "}
            </i>
            <span>enquiries@uswa.org.au</span>
          </div>
          <div className={style.iconText}>
            <i className="fa-solid fa-map-location" aria-handle="true"></i>
            <span> 19, Junction Boulevard Cockburn Central WA 6164</span>
          </div>
          <div className={style.socialMedia}>
            <a href="" className={style.iconCircle}>
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="" className={style.iconCircle}>
              <i class="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
        <form method="post" className={style.forms} onSubmit={handleSubmit}>
          <div className={style.col}>
            <div className={style.formGroup}>
              <label>First Name</label>
              <input
                type="text"
                value={firstName}
                name="firstName"
                onChange={handleChange}
              />
            </div>
            <div className={style.formGroup}>
              <label>Last Name</label>
              <input
                type="text"
                value={lastName}
                name="lastName"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className={style.col}>
            <div className={style.formGroup}>
              <label>Email</label>
              <input
                type="email"
                value={email}
                name="email"
                onChange={handleChange}
              />
            </div>

            <div className={style.formGroup}>
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                name="phone"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className={style.colArea}>
            <div className={style.formGroup}>
              <label>Message</label>
              <textarea
                value={message}
                name="message"
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          <div className={style.butCss}>
            <div className={style.col}>
              <div className={style.formGroup}>
                <button className={style.primary}>Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
