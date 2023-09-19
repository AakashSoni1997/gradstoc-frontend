import React, { useState } from "react";
import "../../../StudyResource/Checkout.scss";
import "../../../Dashboard/Account/BillingInfo.scss";
import "../../../PaymentDetails/PaymentDetails.scss";
import { Title } from "../../../../Components/Title/Title";
import { Form, Modal } from "react-bootstrap";
import { InputField } from "../../../../Components/InputField/InputField";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ButtonColor } from "../../../../Components/Button/Button";
import { Link } from "react-router-dom";
import "./UserPaymentMethod.scss";
const UserPaymentMethod = () => {
  const banner = {
    items: 2,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    margin: 15,
  };
  const [show, setShow] = useState(false);
  const [hideText, setHideText] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setHideText(true);
  return (
    <>
      <div className="user-payment-method-main-con">
        <Title headtitle="Payment method" />
        {hideText ? (
          <>
            <div className="user-payment-method-main-con__card-con">
              <div className="checkout-main-con__card-info-con">
                <div className="checkout-main-con__card-info-con__head">
                  <b>Card Type</b>
                </div>
                <div
                  className="checkout-main-con__card-info-con__add-card-btn-con"
                  onClick={handleShow}
                >
                  <div className="checkout-main-con__card-info-con__add-card-btn-con__img-con">
                    <img
                      className="checkout-main-con__card-info-con__add-card-btn-con__img-con__img"
                      src="./images/addCardIcon.svg"
                      alt="Add Card Icon"
                    />
                  </div>
                  <div className="checkout-main-con__card-info-con__add-card-btn-con__text">
                    <b>Add New Card</b>
                  </div>
                </div>
              </div>
              <div className="checkout-main-con__card-box">
                <div>
                  <OwlCarousel className="owl-theme" {...banner}>
                    <div>
                      <img src="./images/green-card.png" alt="card green" />
                      <div className="checkout-main-con__card-box__delete-default-con">
                        <div className="checkout-main-con__card-box__delete-con__default-con">
                          <div className="user-billing-card-info">
                            <input
                              type="radio"
                              id="card10"
                              name="card"
                              checked="checked"
                            />
                            <label htmlFor="card10">
                              <div className="user-billing-card-info-label-con select-shedule-payment-label color-label-type">
                                <b>Default</b>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="checkout-main-con__card-box__delete-con-div">
                          <div className="checkout-main-con__card-box__delete-con__inner__img-con">
                            <img
                              src="./images/deleteCardicon.svg"
                              alt="Delete Card"
                            />
                          </div>
                          <div className="checkout-main-con__card-box__delete-con__inner__text remove-card-text">
                            <b>Remove Card</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./images/black-card.png" alt="card black" />
                      <div className="checkout-main-con__card-box__delete-default-con">
                        <div className="checkout-main-con__card-box__delete-con__default-con">
                          <div className="chosse-deafult-con">
                            <input
                              type="radio"
                              id="card11"
                              name="card"
                              className="chosse-deafult-con-radio"
                            />
                            <label htmlFor="card11">
                              <div className="chosse-deafult-con--lable">
                                <b>Choose Default</b>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="checkout-main-con__card-box__delete-con-div">
                          <div className="checkout-main-con__card-box__delete-con__inner__img-con">
                            <img
                              src="./images/deleteCardicon.svg"
                              alt="Delete Card"
                            />
                          </div>
                          <div className="checkout-main-con__card-box__delete-con__inner__text remove-card-text">
                            <b>Remove Card</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./images/green-card.png" alt="card green" />
                      <div className="checkout-main-con__card-box__delete-default-con">
                        <div className="checkout-main-con__card-box__delete-con__default-con">
                          <div className="chosse-deafult-con">
                            <input
                              type="radio"
                              id="card12"
                              name="card"
                              className="chosse-deafult-con-radio"
                            />
                            <label htmlFor="card12">
                              <div className="chosse-deafult-con--lable">
                                <b>Choose Default</b>
                              </div>
                            </label>
                          </div>
                        </div>
                        <div className="checkout-main-con__card-box__delete-con-div">
                          <div className="checkout-main-con__card-box__delete-con__inner__img-con">
                            <img
                              src="./images/deleteCardicon.svg"
                              alt="Delete Card"
                            />
                          </div>
                          <div className="checkout-main-con__card-box__delete-con__inner__text remove-card-text">
                            <b>Remove Card</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
            <hr />
            <div className="user-payment-method-main-con__card-btn-con">
              <Link to="/user-payment-details">
                <ButtonColor buttonText="Continue" />
              </Link>
            </div>
          </>
        ) : (
          <div className="user-payment-method-main-con__head-con">
            <div className="user-payment-method-main-con__head-con__head">
              No Card Available
            </div>
            <div
              className="user-payment-method-main-con__head-con__text-con"
              onClick={handleShow}
            >
              <img src="./images/addCardIcon.svg" alt="addCardIcon" />
              <div className="user-payment-method-main-con__head-con__text-con__text">
                <b>Add New Card</b>
              </div>
            </div>
          </div>
        )}

        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          className="add-my-payment-method"
        >
          <Modal.Header>
            <div className="add-card-header-con">
              <div className="add-card-header-con__head">
                <b>Add New Card</b>
              </div>
              <div className="add-card-header-con__btn-con">
                <button
                  className="add-card-header-con__btn-con__btn"
                  onClick={handleClose}
                >
                  <img src="./images/modalcrossbtn.svg" alt="crossbtn" />
                </button>
              </div>
            </div>
          </Modal.Header>
          <Modal.Body>
            <div className="add-card-details-con">
              <Form>
                <div className="row">
                  <div className="col-md">
                    <InputField
                      type="text"
                      labelText="Name on Card"
                      placeholder="Enter Name on Card"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <InputField
                      type="number"
                      labelText="Card Number"
                      placeholder="Enter Card Number"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputField
                      type="date"
                      labelText="Expiry date"
                      placeholder="Enter Expiry date"
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      type="password"
                      labelText="Security Code"
                      placeholder="Enter CVV"
                    />
                  </div>
                </div>
              </Form>
            </div>
            <hr />
          </Modal.Body>
          <Modal.Footer>
            <div className="add-card-model-footer-con">
              <div className="add-card-model-footer-con__btn-con">
                <button
                  className="add-card-model-footer-con__btn-con__btn"
                  onClick={() => {
                    handleHide();
                    handleClose();
                  }}
                >
                  Add Card
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
export default UserPaymentMethod;
