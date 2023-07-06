import React from "react";
import "./about.css";
import Me from "../../assets/me-about.jpg";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={Me} alt="About_Image" />
          </div>
        </div>
        <div className="about_content">
          <p>
            Nama Saya Rilo Supriyatno, Saya lahir dan tinggal di Cirebon. SAya
            merupakan dari salah satu universitas swasta di Yogyakarta yakni
            Universitas Teknologi Yogyakarta.{" "}
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
