import React from 'react';
import "./AddUserDetails.css";

const AddUserDetails = () => {
  return (
    <div className="adduserdetails">
      <img className="page-layout-1" alt="" src="/bg2.png" />
      <form className="form">
      
        <div className="form-child" />
        <div className="frame">
          <button className="save-button">
            <div className="save">save</div>
          </button>
        </div>
        <div className="frame1">
          <button className="cancel-button">
            <div className="cancel">cancel</div>
          </button>
        </div>
        <div className="frame10">
          <button className="back">
          <img className="back-icon" alt="" src="back.png" />
          </button>
        </div>
        <div className="frame2">
          <div className="employee-code">employee code:</div>
        </div>
        <div className="frame3">
          <div className="employee-code">Enter Login id:</div>
        </div>
        <div className="frame4">
          <div className="enter-new-password">enter new password:</div>
        </div>
        <div className="frame5">
          <div className="employee-code">confirm password:</div>
        </div>
        <input className="form-item" type="password" />
        <input className="form-inner" type="password" minLength={8}/>
        <input className="rectangle-input" type="text" />
        <input className="form-child1" type="text" />
        <img className="lock-icon" alt="" src="/Lock.png" />
      </form>
      <div className="frame7">
        <div className="frame-item" />
        <div className="home-parent">
          <img className="home-icon" alt="" src="/Home.png" />
          <button className="home">home</button>
          <img className="male-user-icon" alt="" src="/Profile.png" />
          <button className="profile">Profile</button>
          <img
            className="ringing-phone-icon"
            alt=""
            src="/Contactus.png"
          />
          <button className="contact-us" contact>
            Contact us
          </button>
          <img
            className="logout-rounded-left"
            alt=""
            src="/Logout.png"
          />
          <button className="profile" logout>
            logout
          </button>
        </div>
        <div className="rectangle-parent">
          <div className="frame-inner" />
          <img className="image-8-icon" alt="" src="/image 7.png" />
        </div>
        </div>
        <div className="frame6">
        <div className="frame-child" />
        <div className="add-user-details">Add user details</div>
        </div>
    </div>
  );
};
export default AddUserDetails;