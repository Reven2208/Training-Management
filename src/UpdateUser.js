import React from 'react';
import "./UpdateUser.css";

const UpdateUser = () => {
  return (
    <div className="update-user">
      <div className="input-frame">
        <main className="frame-a">
          <section className="a4-3">
            <div className="confirm-frame">
              <div className="confirm-frame-child" />
              <div className="login-button">
                <div className="secure-rectangle">
                  <img
                    className="login-icon"
                    loading="eager"
                    alt=""
                    src="/login@2x.png"
                  />
                </div>
                <div className="frame-c">
                  <img
                    className="secure-icon"
                    loading="eager"
                    alt=""
                    src="/secure@2x.png"
                  />
                </div>
              </div>
              <div className="frame-d">
                <div className="input-group">
                  <div className="employee-code">employee code:</div>
                  <div className="enter-login-id">Enter Login id:</div>
                  <div className="enter-old-password">enter OLD password:</div>
                  <div className="enter-new-password">enter new password:</div>
                  <div className="confirm-password">confirm password:</div>
                </div>
              </div>
              <div className="old-password">
                <div className="new-password">
                  <div className="confirm-password1">
                    <div className="reset-button">
                      <div className="cancel-button">
                        <div className="save-button">
                          <div className="frame-e">
                            <input className="frame-e-child" type="text" />
                          </div>
                          <input className="frame-f" type="text" />
                        </div>
                        <input className="cancel-button-child" type="text" />
                      </div>
                      <input className="frame-g" type="text" />
                    </div>
                    <input className="confirm-password-child" type="text" />
                  </div>
                </div>
                <div className="reset-button-parent">
                  <button className="reset-button1">
                    <img
                      className="reset-button-child"
                      alt=""
                      src="/rectangle-65.svg"
                    />
                    <div className="cancel">cancel</div>
                  </button>
                  <button className="save-button1">
                    <img
                      className="save-button-child"
                      alt=""
                      src="/rectangle-65.svg"
                    />
                    <b className="save">save</b>
                  </button>
                </div>
              </div>
            </div>
            <div className="user-details-frame">
              <button className="text-frame">
                <div className="text-frame-child" />
                <div className="update-user-details">update user details</div>
              </button>
            </div>
            <div className="update-user-frame">
              <div className="frameupdateuserdetails">
                <div className="profile-frame">
                  <div className="home-frame">
                    <img
                      className="home-icon"
                      loading="eager"
                      alt=""
                      src="/home@2x.png"
                    />
                    <div className="texthome">
                      <div className="home">home</div>
                    </div>
                  </div>
                </div>
                <div className="profile-button">
                  <div className="male-user-frame">
                    <img
                      className="male-user-icon"
                      loading="eager"
                      alt=""
                      src="/male-user@2x.png"
                    />
                  </div>
                  <div className="profile">Profile</div>
                </div>
              </div>
              <div className="ringing-phone-frame">
                <div className="rectangleringingphone">
                  <div className="framelogoutbutton">
                    <img
                      className="ringing-phone-icon"
                      loading="eager"
                      alt=""
                      src="/ringing-phone@2x.png"
                    />
                    <div className="contact-us">Contact us</div>
                  </div>
                </div>
                <div className="logout-button">
                  <img
                    className="save-button-icon"
                    loading="eager"
                    alt=""
                    src="/frame@2x.png"
                  />
                  <div className="logout">logout</div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default UpdateUser;
