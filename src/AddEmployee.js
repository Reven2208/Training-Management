import React, { useState } from 'react';
import './AddEmployee.css';

const AddEmployee = () => {
  const initialFormData = {
    firstName: '',
    lastName: '',
    contactNo: '',
    sscMarks: '',
    hscMarks: '',
    departmentName: '',
    ctc: '',
    dateOfJoining:'',
    // Add other fields as needed
  };
  const [formData, setFormData] = useState(initialFormData);
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    contactNo: '',
    sscMarks: '',
    hscMarks: '',
    departmentName: '',
    ctc: '',
    dateOfJoining:'',
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate input dynamically and update error state
    let error = '';
    switch (name) {
      case 'firstName':
      case 'lastName':
        error = /^[A-Za-z ]+$/.test(value)
          ? ''
          : 'No numbers or special characters allowed';
        break;
      case 'contactNo':
        error = /^[0-9]{10}$/.test(value) ? '' : 'Must contain 10 digits';
        break;
      case 'sscMarks':
      case 'hscMarks':
        error = /^[0-9]+$/.test(value) ? '' : 'Only numbers allowed';
        break;
      case 'departmentName':
        error = /^[A-Za-z ]+$/.test(value)
          ? ''
          : 'No numbers or special characters allowed';
        break;
      case 'ctc':
        error = /^[0-9]{5,8}$/.test(value)
          ? ''
          : 'CTC must be between 5 to 8 characters';
        break;
        case 'dateOfJoining':
      // Validate date format (dd/mm/yyyy)
      const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
      if (!dateRegex.test(value)) {
        error = 'Invalid date format. Please use mm/dd/yyyy';
      } else {
        // Validate if the entered date is not greater than the current date
        const enteredDate = new Date(value);
        const currentDate = new Date();
        if (enteredDate.getTime() > currentDate.getTime()) {
          error = 'Date of joining cannot be greater than the current date';
          console.log('Entered Date:', enteredDate);
console.log('Current Date:', currentDate);
        }
      }
      break;
      // Add cases for other fields as needed
      default:
        break;
    }

    setFormData({
      ...formData,
      [name]: value,
    });

    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleSubmit = () => {
    // Implement your form submission logic here
    if (isFormValid()) {
      console.log('Form data submitted:', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  const isFormValid = () => {
    // Check if there are no errors in the form
    return Object.values(formErrors).every((error) => !error);
  };
  const handleReset = () => {
    setFormData(initialFormData);
    setFormErrors({
      firstName: '',
      lastName: '',
      contactNo: '',
      sscMarks: '',
      hscMarks: '',
      departmentName: '',
      ctc: '',
      dateOfJoining:'',
    });
  };

  return (
    <div className="addemployeedetails"> 
    <div className="employeeadd">
      <div className="add-employee">
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
              <img className="male-user-icon" alt="" src="Profile.png" />
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
              
        <div className="header">
          <div className="vector-parent">
            <h4 className="add-employee-details">ADD EMPLOYEE DETAILS</h4>
          </div>
        </div>
        <div className="outerform">
          <div className="form">  
            <div className="form-child" />
            <div className="frame-child-emp" /> 
            <div className="add-employee-details">Add Employee Details</div>
            <div className="form-item" />
            <div className="form-inner" />
            <div className="error-message1">{formErrors.firstName}</div>
        <div className="error-message1">{formErrors.lastName}</div>
        <div className="error-message1">{formErrors.contactNo}</div>
            <h4 className="personal-details">personal details</h4>
            <div className="personal-info">
              <div className="first-name">first name:</div>
              <input className="personal-info-child" type="text" name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              pattern="[A-Za-z ]+"
              title="No numbers or special characters allowed"
              required/>
              <div className="last-name">last name:</div>
              <input className="personal-info-item" type="text" name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              pattern="[A-Za-z ]+"
              title="No numbers or special characters allowed"
              required/>
              <div className="contact-no">contact no.:</div>
              <input className="personal-info-child3" type="text"name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Must contain 10 digits"
              required />
              <div className="e-mail">E-mail:</div>
              <input className="personal-info-child2" type="text" />
              <div className="gender">gender:</div>
              <input className="personal-info-child1" type="text" />
              <div className="state">state:</div>
              <input className="rectangle-input" type="text" />
              <div className="city">city:</div>
              <input className="personal-info-inner" type="text" />
            </div>
            <div className="eductional-info">
            <div className="error-message2">{formErrors.hscMarks}</div>
            <div className="error-message2">{formErrors.sscMarks}</div>
              <div className="ssc-marks">ssc marks:</div>
              <input className="eductional-info-child" type="text" name="sscMarks"
              value={formData.sscMarks}
              onChange={handleChange}
              pattern="[0-9]+"
              title="Only numbers allowed"
              required/>
              <div className="ssc-institute">ssc institute:</div>
              <input className="eductional-info-child2" type="text" />
              <div className="hsc-marks">hsc marks:</div>
              <input className="eductional-info-child1" type="text" name="hscMarks"
              value={formData.hscMarks}
              onChange={handleChange}
              pattern="[0-9]+"
              title="Only numbers allowed"
              required/>
              <div className="hsc-institute">hsc institute:</div>
              <input className="eductional-info-item" type="text" />
              <div className="degree">{`degree: `}</div>
              <div className="degree-institute">degree institute:</div>
              <input className="eductional-info-inner" type="text" />
              <input className="eductional-info-child4" type="text" />
              <div className="certificate">{`certificate: `}</div>
            </div>
            <h4 className="educational-details">educational details</h4>
            <h4 className="company-details">company details</h4>
            <input className="form-child1" type="text" />
            <div className="error-message3">{formErrors.ctc}</div>
            <div className="error-message3">{formErrors.dateOfJoining}</div>
            <div className="error-message3">{formErrors.departmentName}</div>
            
            <div className="companyinfo">
               
              <div className="department-name">department name:</div>
              <input className="companyinfo-child" type="text" name="departmentName"
              value={formData.departmentName}
              onChange={handleChange}
              pattern="[A-Za-z ]+"
              title="No numbers or special characters allowed"
              required/>
              <div className="date-of-joining">date of joining</div>
              <input className="companyinfo-item" type="text" placeholder='mm/dd/yyyy' name="dateOfJoining" value={formData.dateOfJoining}
                onChange={handleChange}/>
              <div className="designation">designation:</div>
              <input className="companyinfo-child2" type="text" />

              <div className="company-name">company name:</div>
              <input className="companyinfo-inner" type="text" />
              <div className="ctc">ctc:</div>
              <input className="companyinfo-child1" type="text" name="ctc"
              value={formData.ctc}
              onChange={handleChange}
              pattern="[0-9]{5,7}"
              title="CTC must be between 5 to 7 characters"
              required/>
              </div>
              <div className="frame10">
              <button className="back">
              <img className="back-icon" alt="" src="back.png" />
              </button>
              </div>

              <button className="reset-button" onClick={handleReset}>
              <div className="reset">reset</div>
              </button>
            
              <button className="save-button" onClick={handleSubmit}>
              <div className="save">save</div>
              </button>
              </div>
            
        </div>
      </div>
    </div>
    </div>
  );
};
export default AddEmployee;