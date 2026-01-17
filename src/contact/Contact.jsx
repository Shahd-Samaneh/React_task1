import React from "react";
import style from "./Contact.module.css";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="container">

        <h2 className="text-center fw-bold" style={{ color: "#2c3e50" }}>
          CONTACT ME
        </h2>

        <form className="mx-auto mt-4" style={{ maxWidth: "700px" }}>
          
          <div className="form-group mb-4">
            <label className={style.label}>Full name</label>
            <input type="text" className={style.input} />
          </div>

          <div className="form-group mb-4">
            <label className={style.label}>Email address</label>
            <input type="email" className={style.input} />
          </div>

          <div className="form-group mb-4">
            <label className={style.label}>Phone number</label>
            <input type="text" className={style.input} />
          </div>

          <div className="form-group mb-4">
            <label className={style.label}>Message</label>
            <textarea rows="4" className={style.input}></textarea>
          </div>

          <button type="submit" className={`${style.btnSend}`}>
            Send
          </button>

        </form>

      </div>
    </section>
  );
}
