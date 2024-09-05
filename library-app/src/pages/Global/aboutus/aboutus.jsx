import React from "react";
import { MainLayout } from "../../index";
import Advenger from "../../../assets/AvengerSobha.jpg";
import Sdnnda from "../../../assets/sdnda-hamom.jpg";
import Kevin from "../../../assets/kevin-show.jpg";
import Ball from "../../../assets/Ball.jpg";
import Me from "../../../assets/litterally-me.jpg";
import ManipurDrake from "../../../assets/mandrakeDchef.jpg";
import "./aboutus.css";
const aboutus = () => {
  return (
    <MainLayout>
      <div className="aboutus-wrapper">
        <section className="aboutus-section">
          <h1>About Us</h1>
          <div className="aboutus-hero-contain">
            <div className="hero-txt">
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower communities by providing access to
                knowledge and fostering a love of learning. We strive to create
                a welcoming and inclusive environment for all.
              </p>
            </div>
            <div className="hero-txt">
              <h2>Our Mission</h2>
              <p>
                Our mission is to empower communities by providing access to
                knowledge and fostering a love of learning. We strive to create
                a welcoming and inclusive environment for all.
              </p>
            </div>
          </div>
        </section>
        

        <section className="aboutus-section">
            <h1>Our Team</h1>
          <div className="dev-details">
            <div className="dev-card">
              <div className="dev-pfp">
                <img src={Sdnnda} alt="" />
              </div>
              <div className="dev-detail">
                <h1>Sadananda</h1>
                <p>Backend-dev, MIT</p>
              </div>
            </div>
            <div className="dev-card">
              <div className="dev-pfp">
                <img src={Kevin} alt="" />
              </div>
              <div className="dev-detail">
                <h1>Kevin</h1>
                <p>Backend-dev, MIT</p>
              </div>
            </div>
            <div className="dev-card">
              <div className="dev-pfp">
                <img src={Ball} alt="" />
              </div>
              <div className="dev-detail">
                <h1>Haridas</h1>
                <p>Backend-dev, MIT</p>
              </div>
            </div>
            <div className="dev-card">
              <div className="dev-pfp">
                <img src={Me} alt="" />
              </div>
              <div className="dev-detail">
                <h1>Davies</h1>
                <p>Frontend-dev, MIT</p>
              </div>
            </div>
            <div className="dev-card">
              <div className="dev-pfp">
                <img src={ManipurDrake} alt="" />
              </div>
              <div className="dev-detail">
                <h1>Mandrake</h1>
                <p>Chef, MIT</p>
              </div>
            </div>
            <div className="dev-card">
              <div className="dev-pfp">
                <img src="" alt="" />
              </div>
              <div className="dev-detail">
                <h1></h1>
                <p></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default aboutus;
