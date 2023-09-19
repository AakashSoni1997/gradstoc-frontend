import React, { useState } from "react";
import "./Checkout.scss";
import { Form, Modal, Dropdown } from "react-bootstrap";
import "../Dashboard/Account/BillingInfo.scss";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Title } from "../../Components/Title/Title";
import { InputField } from "../../Components/InputField/InputField";
import { ButtonColor } from "../../Components/Button/Button";
const Checkout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [coupon, setCoupon] = useState(false);
  

  function applyCoupon() {
    setCoupon(!coupon);
  }
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    return (
      <button
        className="couponDropBtn"
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      </button>
    );
  });


  const banner = {
    items: 2,
    loop: true,
    autoplay: false,
    autoplayHoverPause: true,
    nav: false,
    dots: true,
    margin: 15,
  };
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-7">
            <div className="checkout-main-con">
              <div className="checkout-main-con__head-con">
                <Title headtitle="Checkout" />
              </div>
              <div className="checkout-main-con__billing-address-con">
                <div className="checkout-main-con__billing-address-con__head">
                  <b>Billing Address</b>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <InputField
                      labelText="Country"
                      type="text"
                      placeholder="Enter the Country Name"
                    />
                  </div>
                  <div className="col-md-6">
                    <InputField
                      requiredText="(Required)"
                      type="text"
                      labelText="Zip Code"
                      placeholder="Enter the Zip Code"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-main-con checkout-main-con-bottom">
              <div className="checkout-main-con__head-con">
                <Title headtitle="Payment Method" />
              </div>
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
                      <img src="./images/cardsgreen.png" alt="card green" />
                      <div className="checkout-main-con__card-box__delete-con">
                        <div className="checkout-main-con__card-box__delete-con__inner">
                          <div className="checkout-main-con__card-box__delete-con__inner__img-con">
                            <img
                              src="./images/deleteCardicon.svg"
                              alt="Delete Card"
                            />
                          </div>
                          <div className="checkout-main-con__card-box__delete-con__inner__text">
                            <b>Remove Card</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./images/cardsblack.png" alt="card black" />
                      <div className="checkout-main-con__card-box__delete-con">
                        <div className="checkout-main-con__card-box__delete-con__inner">
                          <div className="checkout-main-con__card-box__delete-con__inner__img-con">
                            <img
                              src="./images/deleteCardicon.svg"
                              alt="Delete Card"
                              className="checkout-main-con__card-box__delete-con__inner__img-con__img"
                            />
                          </div>
                          <div className="checkout-main-con__card-box__delete-con__inner__text">
                            <b>Remove Card</b>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img src="./images/cardsgreen.png" alt="card green" />
                      <div className="checkout-main-con__card-box__delete-con">
                        <div className="checkout-main-con__card-box__delete-con__inner">
                          <div className="checkout-main-con__card-box__delete-con__inner__img-con">
                            <img
                              src="./images/deleteCardicon.svg"
                              alt="Delete Card"
                            />
                          </div>
                          <div className="checkout-main-con__card-box__delete-con__inner__text">
                            <b>Remove Card</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="checkout-main-con">
              <div className="checkout-main-con__head-con">
                <Title headtitle="Summary" />
              </div>
              <div className="checkout-main-con__Enter-Coupon-con">
                <div
                  className="checkout-main-con__Enter-Coupon-con-head"
                >
                  Enter Coupon
                </div>
                <div className="row">
                  <div className="col-md-9">
                    <Dropdown className="couponDropdown">
                      <Dropdown.Toggle as={CustomToggle}>
                        <span className="placeholderDropdown d-none">
                          View all Coupon
                        </span>
                        <div className="afterSelectDropbtn ">
                          Save $11 for this order
                          <span>Code:- 8649 3857 9876 9881</span>
                        </div>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="couponListParent">
                        <Dropdown.Item className="coupneList">
                          <img src="images/couponImg.svg" alt="" />
                          <div className="couponeListContent">
                            <span>Save $12 for this order</span>
                            Code:- 8649 3857 9876 9882
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="coupneList">
                          <img src="images/couponImg.svg" alt="" />
                          <div className="couponeListContent">
                            <span>Save $13 for this order</span>
                            Code:- 8649 3857 9876 9883
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="coupneList">
                          <img src="images/couponImg.svg" alt="" />
                          <div className="couponeListContent">
                            <span>Save $14 for this order</span>
                            Code:- 8649 3857 9876 9884
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="coupneList">
                          <img src="images/couponImg.svg" alt="" />
                          <div className="couponeListContent">
                            <span>Save $15 for this order</span>
                            Code:- 8649 3857 9876 9885
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="coupneList">
                          <img src="images/couponImg.svg" alt="" />
                          <div className="couponeListContent">
                            <span>Save $16 for this order</span>
                            Code:- 8649 3857 9876 9886
                          </div>
                        </Dropdown.Item>
                        <Dropdown.Item className="coupneList">
                          <img src="images/couponImg.svg" alt="" />
                          <div className="couponeListContent">
                            <span>Save $17 for this order</span>
                            Code:- 8649 3857 9876 9887
                          </div>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  {coupon ? (
                    <div className="col-md-3 btn-con-checkout">
                      <div className="checkout-main-con__coupon-con">
                        <ButtonColor
                          buttonText="Remove"
                          onClick={applyCoupon}
                          className="remove-btn-in-coupon"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="col-md-3 btn-con-checkout">
                      <div className="checkout-main-con__coupon-con">
                        <ButtonColor
                          buttonText="Apply"
                          onClick={applyCoupon}
                          className="apply-btn-in-coupon"
                        />
                      </div>
                    </div>
                  )}
                </div>
                {coupon ? (
                  <div className="row">
                    <div className="col-md">
                      <div className="checkout-main-con__Coupon-applied-con">
                        <img src="./images/tick-right.svg" alt="tick arrow" />
                        <div className="checkout-main-con__Coupon-applied-con__text">
                          Your Discount coupon was successfully Applied
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  " "
                )}
              </div>
              <div className="checkout-main-con__summary-con">
                <div className="checkout-main-con__summary-con__head-con">
                  <div className="checkout-main-con__summary-con__head-con__head">
                    Summary
                  </div>
                </div>
                <div className="checkout-main-con__summary-con__total-item-con">
                  <div className="checkout-main-con__summary-con__total-item-con__items">
                    <b>Subtotal (2 items)</b>
                  </div>
                  <div className="checkout-main-con__summary-con__total-item-con__price">
                    <b>$600.00</b>
                  </div>
                </div>
                <div className="checkout-main-con__summary-con__service-con">
                  <div className="checkout-main-con__summary-con__service-con__items">
                    <b>Service fee</b>
                  </div>
                  <div className="checkout-main-con__summary-con__service-con__price">
                    <b>$6.00</b>
                  </div>
                </div>
                <hr />
                <div className="checkout-main-con__summary-con__total-con">
                  <div className="checkout-main-con__summary-con__total-con__total-text">
                    <b>Total</b>
                  </div>
                  <div className="checkout-main-con__summary-con__total-con__total-price">
                    <b>$606.00</b>
                  </div>
                </div>
                <hr />
                <div className="checkout-main-con__summary-con__termandservice-con">
                  <b>
                    By completing your purchase you agree to these
                    <span className="checkout-main-con__summary-con__termandservice-con__tands">
                      Terms of Service
                    </span>
                  </b>
                </div>
                <div className="checkout-main-con__summary-con__payment-btn-con">
                  <button className="checkout-main-con__summary-con__payment-btn-con__payment-btn">
                    Complete Payment
                  </button>
                </div>
                <div className="checkout-main-con__summary-con__sign-newsletter-con">
                  <div className="checkout-main-con__summary-con__sign-newsletter-con__checkout-con">
                    <input
                      type="checkbox"
                      className="checkout-main-con__summary-con__sign-newsletter-con__checkout-con__checkinput"
                    />
                  </div>
                  <div className="checkout-main-con__summary-con__sign-newsletter-con__text-con">
                    Please send me Gradstoc’s newsletter so I can receive the
                    latest news, updates, and discounts.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  onClick={handleClose}
                >
                  Add Card
                </button>
              </div>
            </div>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
};
export default Checkout;
