import React from 'react';
import { useCallback } from "react";
import "./HomeAdmin.css";

const HomeAdmin = () => {
  const onManageSysUsersButtonClick = useCallback(() => {
    // Please sync "manage user" to the project
  }, []);

  const onTrainInfoButtonClick = useCallback(() => {
    // Please sync "training details" to the project
  }, []);

  const onProgramCAtButtonClick = useCallback(() => {
    // Please sync "program catalog" to the project
  }, []);

  const onFeedbackButtonClick = useCallback(() => {
    // Please sync "view feedback 2" to the project
  }, []);

  return (
    <div className="homeadmin">
      <img className="pagelayout1" alt="" src="/bg1.png" />
      <nav className="nav">
        <div className="navouter">
          <div className="navouter-child" />
          <div className="nav-menu1">
            <button className="contact-button1">
              <img
                className="ringing-phone-icon1"
                alt=""
                src="/Contactus.png"
              />
              <button className="contactus" contact>
                Contact us
              </button>
            </button>
            <div className="homebutton">
              <img className="homeicon" alt="" src="/Home.png" />
              <div className="frame0">
                <button className="homebutton1" home>
                  <div className="home">home</div>
                </button>
              </div>
            </div>
            <button className="profilebutton">
              <img className="maleusericon" alt="" src="/Profile.png" />
              <div className="frame1">
                <button className="profile">Profile</button>
              </div>
            </button>
            <button className="logoutbutton">
              <img className="frameicon1" alt="" src="/Logout.png" />
              <div className="frame2">
                <button className="logout" logout>
                  logout
                </button>
              </div>
            </button>
          </div>
          <div className="wrapper-rectangle-19-parent">
            <div className="wrapper-rectangle-19">
            </div>
            <div className="frame3">
              <img className="image-8-icon" alt="" src="/image 7.png" />
            </div>
          </div>
        </div>
      </nav>
      <img className="redcircle-1-icon" alt="" src="/redcircle.png" />
        <div className="welcom-message">Welcome</div>
        <div className="welcom-message-child">ANOUSHKA@ISHAN.COM</div>
      <div className="outermenu">
        <div className="menu">
          <button className="manageemp-button">
            <div className="manage-employee">Manage Employee</div>
          </button>
          <button
            className="managesysusers-button"
            onClick={onManageSysUsersButtonClick}
          >
            <div className="manage-system-users">Manage system users</div>
          </button>
          <button className="traininfo-button" onClick={onTrainInfoButtonClick}>
            <div className="training-information">training information</div>
          </button>
          <button
            className="programcat-button"
            onClick={onProgramCAtButtonClick}
          >
            <div className="program-catalog">program catalog</div>
          </button>
          <button className="calendar-button">
            <div className="calender">calender</div>
          </button>
          <button className="feedback-button" onClick={onFeedbackButtonClick}>
            <div className="view-feedback">view feedback</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;
