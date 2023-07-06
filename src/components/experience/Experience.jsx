import React from "react";
import "./experience.css";
import Me from "../../assets/SMAN1Waled.jpeg";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Get To Know</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_me">
          <div className="experience_me-image">
            <img src={Me} alt="experience_Image" />
          </div>
        </div>
        <div className="experience_content">
          <p>
            Saya memiliki pengalaman magang di SMAN 1 Waled untuk membuat sebuah
            aplikasi presensi dimana aplikasi tersebut terhubung antara web dan
            android
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
