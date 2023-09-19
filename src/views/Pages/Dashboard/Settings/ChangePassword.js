import React, { useState } from "react";
import "./ChangePassword.scss";
import { Form } from "react-bootstrap";
import { Title } from "../../../Components/Title/Title";
import { PasswordInput } from "../../../Components/PasswordInput/PasswordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ChangePasswordAction } from "../../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";
import LoaderSpinner from "../../../Components/Loader/Loader";

const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [CureentPassword, SetCureentPassword] = useState(false);
  const [Password, SetPassword] = useState(false);
  const [ConfirmPassword, SetConfirmPassword] = useState(false);
  const [formValue, setFormValue] = useState({
    current_password: "",
    password: "",
    confirm_password: "",
  });

  const ShowCureentPassword = () => SetCureentPassword(!CureentPassword);
  const ShowPassword = () => SetPassword(!Password);
  const ShowConfirmPassword = () => SetConfirmPassword(!ConfirmPassword);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const ChnagePasswordSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("current_password", formValue.current_password);
    formData.append("password", formValue.password);
    formData.append("confirm_password", formValue.confirm_password);
    dispatch(ChangePasswordAction(formData));
  };

  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <Title headtitle="Change Password" />
          </div>
        </div>
        <Form autoComplete="off" onSubmit={ChnagePasswordSubmit}>
          <div className="change-password-info-con">
            <div className="row">
              <div className="col-md-6">
                <div className="change-password-info-con__inputText">
                  <PasswordInput
                    type={CureentPassword ? "text" : "password"}
                    name="current_password"
                    onChange={onChange}
                    value={formValue.current_password}
                    className="form-control-chnage-password"
                    placeholder="Enter Your Current Password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
                    required="required"
                    labelText="Current Password"
                  />
                  <div className="pass-eye-icon-pass">
                    {CureentPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={ShowCureentPassword}
                        className="eye-icon"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={ShowCureentPassword}
                        className="eye-icon"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="change-password-info-con__inputText">
                  <PasswordInput
                    type={Password ? "text" : "password"}
                    name="password"
                    onChange={onChange}
                    value={formValue.password}
                    className="form-control-chnage-password"
                    placeholder="Enter Your New Password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    error="8+ characters 1 Uppercase character 1 Special Character 1 Number"
                    required="required"
                    labelText="New Password"
                  />
                  <div className="pass-eye-icon-pass">
                    {Password ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={ShowPassword}
                        className="eye-icon"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={ShowPassword}
                        className="eye-icon"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="change-password-info-con__inputText">
                  <PasswordInput
                    type={ConfirmPassword ? "text" : "password"}
                    name="confirm_password"
                    onChange={onChange}
                    value={formValue.confirm_password}
                    className="form-control-chnage-password"
                    placeholder="Enter Confirm Password"
                    pattern={formValue.password}
                    error="Passwords don't match!"
                    required="required"
                    labelText="Confirm Password"
                  />
                  <div className="pass-eye-icon-pass">
                    {ConfirmPassword ? (
                      <FontAwesomeIcon
                        icon={faEye}
                        onClick={ShowConfirmPassword}
                        className="eye-icon"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        onClick={ShowConfirmPassword}
                        className="eye-icon"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="change-password-info-btn">
            <hr />
            <div className="change-password-info-btn__con">
              <button
                className="change-password-info-btn__con__btn"
                type="submit"
              >
                Save Changes
                {isLoading && <LoaderSpinner />}
              </button>
            </div>
          </div>
        </Form>
      </section>
    </>
  );
};
export default ChangePassword;
