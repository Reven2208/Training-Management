import React from 'react';
import "./PrgmCatalog.css";

const PrgmCatalog = () => {
  return (
    <div className="programcatlog">
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
            <div className="frameM">
              <button className="profileM">Profile</button>
            </div>
          </button>
          <div className="frame1M">
            <img className="male-user-icon" alt="" src="/Profile.png" />
          </div>
          <div className="logout-button">
            <img className="frame-icon1" alt="" src="/Logout.png" />
            <div className="frame2M">
              <button className="logoutM" logout>
                logout
              </button>
            </div>
          </div>
          <div className="home-button">
            <div className="frame3">
              <button className="home-button1" home>
                <div className="homeM">home</div>
              </button>
            </div>
            <img className="home-icon" alt="" src="/Home.png" />
          </div>
        </div>
      </nav>
      <div className="outer">

          <button className="addprogram">
            <img className='addbutton' src="addbutton.png" alt="" />
          </button>
        
        <button className="back" />
        <div className="inner">
          <label className="training-program-program-container">
            <span className="training-program-program-container1">
              <p className="training-program">training program:</p>
              <p className="program-id">program id:</p>
            </span>
          </label>
          <div className="soft-skills-01-container">
            <span className="soft-skills-01-container1">
              <p className="soft-skills">Soft Skills</p>
              <p className="p">01</p>
            </span>
          </div>
          <div className="inner-child" />
          <div className="lorem-ipsum-dolor">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor felis in malesuada rutrum. Sed id dolor non arcu blandit euismod sodales sed sapien. phaconsectetur. Donec eu lacus quis libero tristique faucibus. Ut ac pulvinar `}</div>
          <label className="training-program-program-container2">
            <span className="training-program-program-container3">
              <p className="training-program1">training program:</p>
              <p className="program-id1">program id:</p>
            </span>
          </label>
          <div className="soft-skills-01-container2">
            <span className="soft-skills-01-container3">
              <p className="soft-skills1">Soft Skills</p>
              <p className="p1">01</p>
            </span>
          </div>
          <div className="inner-item" />
          <div className="lorem-ipsum-dolor1">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor felis in malesuada rutrum. Sed id dolor non arcu blandit euismod sodales sed sapien. Praesent vehicula vel turpis at maximus. Ut rhoncus congue urna, nec phaconsectetur. Donec eu lacus quis libero tristique faucibus. Ut ac pulvinar `}</div>
          <label className="training-program-program-container4">
            <span className="training-program-program-container5">
              <p className="training-program2">training program:</p>
              <p className="program-id2">program id:</p>
            </span>
          </label>
          <div className="soft-skills-01-container4">
            <span className="soft-skills-01-container5">
              <p className="soft-skills2">Soft Skills</p>
              <p className="p2">01</p>
            </span>
          </div>
          <div className="inner-inner" />
          <div className="lorem-ipsum-dolor2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            tempor felis in malesuada rutrum. Sed id dolor non arcu blandit
            euismod sodales sed
          </div>
          <label className="training-program-program-container6">
            <span className="training-program-program-container7">
              <p className="training-program3">training program:</p>
              <p className="program-id3">program id:</p>
            </span>
          </label>
          <div className="soft-skills-01-container6">
            <span className="soft-skills-01-container7">
              <p className="soft-skills3">Soft Skills</p>
              <p className="p3">01</p>
            </span>
          </div>
          <div className="line-div" />
          <div className="lorem-ipsum-dolor3">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor felis in malesuada rutrum. Sed id dolor non arcu blandit euismod sodales sed sapien. Praesent vehicula vel turpis at maximus. Ut rhoncus congue urna, nec `}</div>
        </div>
      </div>
      <div className="header">
        <div className="header-child" />
        <div className="program-catalog">program catalog</div>
      </div>
      <div className="search-admin3">
        <input className="searchinput" type="text" />
        <div className="searchframe">
        <button className="search-button"> 
          <img className="searchframe-child" alt="" src="/search.png" />
          </button>
        </div>
        </div>
        <div className="frame10">
          <button className="back-button">
          <img className="back-icon" alt="" src="back.png" />
          </button>
        </div>
    </div>
  );
};

export default PrgmCatalog;