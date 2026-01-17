import React from "react";
import style from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={style.footerSection}>
            <div className="container py-5">

                <div className="row text-center text-white">

                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">LOCATION</h4>
                        <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">AROUND THE WEB</h4>
                        <div className="d-flex justify-content-center gap-3 mt-3">

                            <div className={style.iconCircle}>
                                <i className="text-white fa-brands fa-facebook-f"></i>
                            </div>

                            <div className={style.iconCircle}>
                                <i className="fa-brands fa-twitter"></i>
                            </div>

                            <div className={style.iconCircle}>
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>

                            <div className={style.iconCircle}>
                                <i className="fa-brands fa-dribbble"></i>
                            </div>

                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <h4 className="fw-bold">ABOUT FREELANCER</h4>
                        <p>
                            Freelance is a free to use, MIT licensed
                            Bootstrap theme created by{" "}
                            <a href="#" className={style.link}>Start Bootstrap</a>.
                        </p>
                    </div>

                </div>
            </div>

            <div className={style.copyRight}>
                Copyright © Your Website 2023
            </div>

        </footer>
    );
}
