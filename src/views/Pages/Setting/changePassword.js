import React from "react";
import "./changePassword.scss";
import { Form } from "react-bootstrap";
import { ButtonColor } from "../../Components/Button/Button";
import { PasswordInput } from "../../Components/PasswordInput/PasswordInput";

const ChangePassword = () => {
  return (
    <>
      <div className="change-password-main-con">
        <Form>
          <div className="row">
            <div className="md-col-6">
              <PasswordInput
                labelText="Current Password"
                type="password"
                placeholder="Enter Current Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="md-col-6">
              <PasswordInput
                labelText="New Password"
                // type="password"
                placeholder="Enter New Password"
              />
            </div>
          </div>
          <div className="row">
            <div className="md-col-6">
              <PasswordInput
                labelText="Confirm Password"
                // type="password"
                placeholder="Enter Confirm Password"
              />
            </div>
          </div>
        </Form>
      </div>
      <hr />
      <div className="change-password-btn-con">
        <ButtonColor buttonText="Save Changes" />
      </div>
    </>
  );
};
export default ChangePassword;
