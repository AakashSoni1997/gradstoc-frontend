import React from "react";
import "./UpGradeNow.scss";
import { Form } from "react-bootstrap";
import { Title } from "../../Components/Title/Title";
import { InputField } from "../../Components/InputField/InputField";
import { SelectList } from "../../Components/SelectList/SelectList";
import { CheckBox } from "../../Components/CheckBox/CheckBox";
import { Link } from "react-router-dom";
const UpGradeNow = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-5">
            <div className="upgrade-now-order-con">
              <Title headtitle="Your Order" />
              <div className="upgrade-now-order-con__annual-plan-con">
                <div className="upgrade-now-order-con__annual-plan-con__text-con">
                  <div className="upgrade-now-order-con__annual-plan-con__text-con__text">
                    You chose the annual plan
                  </div>
                  <div className="upgrade-now-order-con__annual-plan-con__text-con__price">
                    $95.88
                  </div>
                </div>
                <div className="upgrade-now-order-con__annual-plan-con__plan-list">
                  <Form>
                    <SelectList
                      options="Billed $95.88 annually"
                      labelText="Plans"
                    />
                  </Form>
                </div>
                <hr />
                <div className="upgrade-now-order-con__annual-plan-con__total-con">
                  <div className="upgrade-now-order-con__annual-plan-con__total-con__text">
                    <b>Total Cost</b>
                  </div>
                  <div className="upgrade-now-order-con__annual-plan-con__total-con__price">
                    <b>$95.88</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="upgrade-now-order-con">
              <Title headtitle="Add payment method" />
              <div className="upgrade-now-order-con__cards-details">
                <Form>
                  <InputField
                    labelText="Credit/debit card number"
                    type="text"
                    placeholder="Enter the card number"
                  />
                  <InputField
                    labelText="Enter name on your card"
                    type="text"
                    placeholder="Enter name on your card"
                  />
                  <div className="row">
                    <div className="col-md-6">
                      <SelectList
                        options="Enter Expiration month"
                        labelText="Expiration month"
                      />
                    </div>
                    <div className="col-md-6">
                      <SelectList
                        options="Enter Expiration Year"
                        labelText="Expiration Year"
                      />
                    </div>
                  </div>
                  <InputField
                    labelText="Security code"
                    type="text"
                    placeholder="Enter the Security code"
                  />
                </Form>
                <div>
                  <CheckBox
                    checkboxlable="I understand and agree to Gradstoc's"
                    linklable="Terms and Conditions"
                    linklable2="Privacy Policy."
                    className="link-color"
                  />
                </div>
                <div className="upgrade-now-order-con__cards-details__btn-con">
                  <Link to="/membership">
                    <button className="upgrade-now-order-con__cards-details__btn-con__btn">
                      Pay Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default UpGradeNow;
