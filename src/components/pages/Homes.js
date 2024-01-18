import React from "react";
import c1 from "../pictures/c1.jpg";
import c2 from "../pictures/c2.png";
import c5 from "../pictures/c5.jpg";
import c6 from "../pictures/c6.jpg";
import c7 from "../pictures/c7.jpg";
import c8 from "../pictures/c8.jpg";
import c9 from "../pictures/c9.jpg";
import c10 from "../pictures/c10.jpg";
import p1 from "../pictures/p1.jpg";
import p2 from "../pictures/p2.jpg";
import p3 from "../pictures/p3.jpg";
import HorizontalScrollGallery from "../inc/HorizontalScrollGallery";
import { Row, Col } from 'react-bootstrap';

import Slider from "../inc/Slider";
import CustomPopover from "../inc/Popover";
import { Link } from "react-router-dom";
import VMC from "./inc/VMC";
function Home() {
  return (
    <div>
      {/* slider  */}
      <Slider />

      {/* POPOVERS  */}
     
      <div style={{ marginTop: '100px' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={6} lg={4}>
          <CustomPopover
            header="Medical Activities"
            imageSrc={p1}
            content="In Niger, a country already affected by multiple crises, NGOs are warning that further instability could strongly deteriorate the living conditions of the most vulnerable, including women and children, and hamper the humanitarian response."
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CustomPopover
            header="Crisis Settings"
            imageSrc={p2}
            content="Many people in Lebanon, including refugees and migrant workers, are struggling to make ends meet due to a host of factors stemming from the financial ruin and complete economic decline worsened by the port explosion in 2020."
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CustomPopover
            header="In Focus"
            imageSrc={p3}
            content="Six months after a series of earthquakes struck southern Türkiye and northwest Syria, families are struggling to rebuild their lives while coping with record-high temperatures that are further stretching limited water resources."
          />
        </Col>
      </Row>
    </div>

      {/* VMC  */}
      <VMC />

      {/* CARD  */}
      <div className="card-container" style={{ marginLeft: "30px" }}>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c5} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Vaccinations</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c1} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Epidemics</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c2} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Epidemics</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c6} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Epidemics</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c7} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Climate Emergency</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c8} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Health Care</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img src={c9} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Access To Medicines</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
        <div className="card" style={{ width: "18rem", marginTop: "150px" }}>
          <img
            src={c10}
            style={{ height: "195px" }}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Natural Diasters</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/projects"
              className="btn"
              style={{ background: "#156570", color: "white" }}
            >
              PROJECTS
            </Link>
          </div>
        </div>
      </div>

{/* Images Gallery  */}
<HorizontalScrollGallery />






      {/* progress section  */}

      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100px" }}
      >
        <span
          className="badge"
          style={{
            width: "320px",
            height: "50px",
            fontSize: "24px",
            marginTop: "250px",
            background: "#156570",
          }}
        >
          Progress In Recent Years
        </span>
      </div>

      <section style={{ marginTop: "250px", marginLeft: "30px", marginBottom:"30px"}}>
        <div className="row mt-5">
          <div className="col-md-6 d-flex align-items-center">
            <div className="mr-2">2019</div>
            <div className="progress w-100">
              <div
                className="progress-bar progress-bar-custom"
                role="progressbar"
                style={{ width: "15%", backgroundColor: "#156570" }}
                aria-valuenow={15}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}></div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="mr-2">2020</div>
            <div className="progress w-100">
              <div
                className="progress-bar progress-bar-custom"
                role="progressbar"
                style={{ width: "25%", backgroundColor: "#156570" }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}></div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="mr-2">2021</div>
            <div className="progress w-100">
              <div
                className="progress-bar progress-bar-custom"
                role="progressbar"
                style={{ width: "50%", backgroundColor: "#156570" }}
                aria-valuenow={50}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}></div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="mr-2">2022</div>
            <div className="progress w-100">
              <div
                className="progress-bar progress-bar-custom"
                role="progressbar"
                style={{ width: "75%", backgroundColor: "#156570" }}
                aria-valuenow={75}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: "10px" }}></div>

        <div className="row">
          <div className="col-md-6 d-flex align-items-center">
            <div className="mr-2">2023</div>
            <div className="progress w-100">
              <div
                className="progress-bar progress-bar-custom"
                role="progressbar"
                style={{ width: "100%", backgroundColor: "#156570" }}
                aria-valuenow={100}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
