import React from "react";
import "./ProfileSetting.scss";
import { Form } from "react-bootstrap";
import { InputField } from "../../Components/InputField/InputField";
import { ButtonColor } from "../../Components/Button/Button";

const ProfileSetting = () => {
  return (
    <>
      <div className="profile-setting-con">
        <Form>
          <div className="row">
            <div className="col-md-6">
              <InputField
                labelText="Email Id"
                type="Email"
                isDisabled="disabled"
                value="lukehobbs@gmail.com"
              />
            </div>
            <div className="col-md-6">
              <InputField
                labelText="First Name"
                type="text"
                placeholder="Enter First Name"
              />
            </div>
            <div className="col-md-6">
              <InputField
                labelText="Last Name"
                type="text"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="col-md-6">
              <InputField
                labelText="Mobile Number"
                type="text"
                placeholder="Enter Mobile Number"
              />
            </div>
            <div className="col-md-6">
              <InputField
                labelText="Occupation"
                type="text"
                placeholder="Enter Occupation"
              />
            </div>
            <div className="col-md-6">
              <InputField
                labelText="About"
                type="text"
                placeholder="Wirte something About your Self"
              />
            </div>
            <div className="col-md-6">
              <InputField
                labelText="Interest"
                type="text"
                placeholder="Enter Area Of Interest"
              />
            </div>
          </div>
        </Form>
      </div>
      <hr />
      <div className="profile-setting-btn-con">
        <ButtonColor buttonText="Save Changes" />
      </div>
    </>
  );
};
export default ProfileSetting;
