import React from 'react';
import "./PersonalDetails.css";

const PersonalDetails = () => {
  return (
    <div className="personaldetails">
      <img className="page-layout-1" alt="" src="/bg1.png" />
      <nav className="navbar-admin3">
        <div className="navbar-admin3-child" />
        <div className="rectangle-parent">
          <div className="frame-child" />
          <img className="frame-icon" alt="" src="/image 7.png" />
        </div>
        <div className="nav-menu">
          <button className="contact-button">
            <img
              className="ringing-phone-icon"
              alt=""
              src="/Contactus.png"
            />
            <button className="contact-us" contact>
              Contact us
            </button>
          </button>
          <button className="profile-button">
            <div className="frame">
              <button className="profile">Profile</button>
            </div>
          </button>
          <div className="frame1">
            <img className="male-user-icon" alt="" src="/Profile.png" />
          </div>
          <div className="logout-button">
            <img className="frame-icon1" alt="" src="/Logout.png" />
            <div className="frame2">
              <button className="logout" logout>
                logout
              </button>
            </div>
          </div>
          <div className="home-button">
            <div className="frame3">
              <button className="home-button1" home>
                <div className="home">home</div>
              </button>
            </div>
            <img className="home-icon" alt="" src="/Home.png" />
          </div>
        </div>
      </nav>
      <form className="outer">
        <div className="inner">
          <div className="inner-child" />
          <h4 className="personal-details">personal details</h4>
          <div className="personal-info">
            <div className="first-name">first name:</div>
            <input className="personal-info-child" type="text" />
            <div className="last-name">last name:</div>
            <input className="personal-info-item" type="text" />
            <div className="contact-no">contact no.:</div>
            <div className="e-mail">E-mail:</div>
            <div className="gender">gender:</div>
            <div className="state">state:</div>
            <div className="city">city:</div>
            <input className="personal-info-inner" type="text" />
            <input className="rectangle-input" type="text" />
            <input className="personal-info-child1" type="text" />
            <input className="personal-info-child2" type="text" />
            <input className="personal-info-child3" type="text" />
          </div>
        </div>
      </form>
      <button className="personalbutton">
        <div className="personalbutton-child" />
        <h4 className="personal-details1">personal DETAILS</h4>
      </button>
      <button className="companybutton">
        <div className="companybutton-child" />
        <h4 className="company-details">company DETAILS</h4>
      </button>
      <button className="educationbutton">
        <h4 className="educational-details">educational DETAILS</h4>
      </button>
            <button className="cancel-button" >
              <div className="cancel">cancel</div>
            </button>
            
            <button className="save-button">
              <div className="save">save</div>
            </button>

            <div className="frameb">
              <button className="back">
                <img className="back-icon" alt="" src="back.png" />
              </button>
            </div>
    </div>
  );
};

export default PersonalDetails;