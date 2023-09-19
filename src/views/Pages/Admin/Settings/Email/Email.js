import React from "react";
import "../../Users/Users.scss";
import "./Email.scss";
import { InputField } from "../../../../Components/InputField/InputField";
import { Form } from "react-bootstrap";

const AdminEmail = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Settings</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Email</b>
            </div>
          </div>
          <hr />
          <div className="admin-user-sec__table-con__email-con">
            <Form>
              <div className="row">
                <div className="col-md-6">
                  <InputField
                    labelText="Old Email"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <InputField
                    labelText="New Email"
                    type="email"
                    placeholder="Enter New Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <InputField
                    labelText="Confirm Email"
                    type="email"
                    placeholder="Enter Confirm Email"
                  />
                </div>
              </div>
            </Form>
          </div>
          <hr />
          <div className="admin-user-sec__table-con__btn-con">
            <button className="admin-user-sec__table-con__btn-con__btn">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminEmail;
