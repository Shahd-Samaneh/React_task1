import React from "react";
import style from "./About.module.css";

export default function About() {
  return (
    <section className={style.aboutSection}>
      <div className="container py-5">
        <h2 className="text-center fw-bold text-white">ABOUT</h2>
        
        <div className="row text-white mt-4">
          <div className="col-md-6">
            <p className="fs-5">
              Freelancer is a free bootstrap theme created by Start Bootstrap.
              The download includes the complete source files including HTML,
              CSS, and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </p>
          </div>

          <div className="col-md-6">
            <p className="fs-5">
              You can create your own custom avatar for the masthead, change the
              icon in the dividers, and add your email address to the contact
              form to make it fully functional!
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className={style.btnDownload}>
            <i className="fa-solid fa-download me-2"></i>
            Free Download!
          </button>
        </div>

      </div>
    </section>
  );
}
