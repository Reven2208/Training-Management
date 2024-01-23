import React from 'react';
import "./EducationalDetails.css";

const EducationalDetails = () => {
  return (
    <div className="personaldetails">
      <form className="outer">
        <div className="inner">
          <div className="inner-child" />
          <h4 className="personal-details">educational details</h4>
          <div className="personal-info">
            <div className="first-name">hsc marks:</div>
            <input className="personal-info-child" type="text" />
            <div className="last-name">ssc marks:</div>
            <input className="personal-info-item" type="text" />
            <div className="contact-no">degree:</div>
            <div className="e-mail">certificate:</div>
            <div className="gender">hsc institute:</div>
            <div className="city">ssc institute:</div>
            <div className="state">degree institute:</div>
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

export default EducationalDetails;