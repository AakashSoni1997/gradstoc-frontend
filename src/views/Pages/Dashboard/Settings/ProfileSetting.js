import React from "react";
import "./ProfileSetting.scss";
import { Form } from "react-bootstrap";
import { InputField } from "../../../Components/InputField/InputField";
import { Title } from "../../../Components/Title/Title";
import { ButtonColor } from "../../../Components/Button/Button";

const ProfileSetting = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <Title headtitle="Profile Setting" />
          </div>
        </div>
        <div className="Profile-setting-info-con">
          <Form>
            <div className="row">
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="Email Id"
                    type="Email"
                    isDisabled="disabled"
                    value="lukehobbs@gmail.com"
                    className="back-color"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="First Name"
                    type="text"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="Last Name"
                    type="text"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="Mobile Number"
                    type="text"
                    placeholder="Enter Mobile Number"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="Occupation"
                    type="text"
                    placeholder="Enter Occupation"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="About"
                    type="text"
                    placeholder="Enter About Us"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="Profile-setting-info-con__input-con">
                  <InputField
                    labelText="Interest"
                    type="text"
                    placeholder="Enter Interest"
                  />
                </div>
              </div>
            </div>
          </Form>
        </div>
        <div className="Profile-setting-info-btn">
          <hr />
          <div className="Profile-setting-info-btn__con">
            <ButtonColor buttonText="Save Changes" />
          </div>
        </div>
      </section>
    </>
  );
};
export default ProfileSetting;
