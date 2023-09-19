import React, { useState } from "react";
import "../Dashboard/Account/BillingInfo.scss";
import "./PaymentDetails.scss";
import { Title } from "../../Components/Title/Title";
import { Link } from "react-router-dom";
import { InputField } from "../../Components/InputField/InputField";
import { Modal, Form } from "react-bootstrap";
import { SelectList } from "../../Components/SelectList/SelectList";
const PaymentDetails = () => {
  const [show, setShow] = useState(false);
  const [editShow, setEditshow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEditClose = () => setEditshow(false);
  const handleEditShow = () => setEditshow(true);
  return (
    <>
      <div className="payment-details-con">
        <div className="row">
          <div className="col-md-9">
            <div className="payment-details-con__main-con">
              <Title headtitle="Payment Details" />

              <div className="payment-details-con__main-con__last-payment">
                <div className="payment-details-con__main-con__last-payment__head">
                  <b>Last Payment</b>
                </div>
                <div className="payment-details-con__main-con__last-payment__text">
                  $1,420.01 on Jul 1, 2022 to Direct to Local Bank (INR) -
                  Account ending in 8978
                </div>
                <div className="payment-details-con__main-con__last-payment__btn-con">
                  <Link to="/transaction-history">
                    <button className="payment-details-con__main-con__last-payment__btn-con__btn">
                      View Payments
                    </button>
                  </Link>
                </div>
              </div>
              <hr />
              <div className="payment-details-con__main-con__schedule-payment">
                <div className="payment-details-con__main-con__last-payment__head">
                  <b>Schedule</b>
                </div>
                <div className="payment-details-con__main-con__last-payment__text">
                  Monthly (next on Aug 1) to Direct to Local Bank (INR) -
                  Account ending in 8978
                </div>
                <div className="payment-details-con__main-con__last-payment__btn-con">
                  <button
                    className="payment-details-con__main-con__last-payment__btn-con__btn"
                    onClick={handleEditShow}
                  >
                    Edit Schedule
                  </button>
                </div>
              </div>
              <hr />
              <div className="payment-details-con__main-con__payment-method">
                <div className="user-billing-card-info">
                  <input type="radio" id="card1" name="card" />
                  <label htmlFor="card1">
                    <div className="user-billing-card-info-label-con">
                      <div className="user-billing-card-info-label-img-con">
                        <img
                          src="./images/localbank.png"
                          alt="card"
                          className="user-billing-card-info-label-img"
                        />
                      </div>
                      <div className="user-billing-card-info-label-details-con">
                        <div className="user-billing-card-info-label-details">
                          <b>Direct to Local Bank (INR)</b>
                        </div>
                        <div className="user-billing-card-info-label-btn-con">
                          <div className="user-billing-card-info-label-btn-con--head">
                            Account ending in 8978 (Default Select)
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="user-billing-card-info">
                  <input type="radio" id="card2" name="card" />
                  <label htmlFor="card2">
                    <div className="user-billing-card-info-label-con">
                      <div className="user-billing-card-info-label-img-con">
                        <img
                          src="./images/stripe.png"
                          alt="card"
                          className="user-billing-card-info-label-img"
                        />
                      </div>
                      <div className="user-billing-card-info-label-details-con">
                        <div className="user-billing-card-info-label-details user-billing-card-info-label-details-stripe">
                          <b>Stripe</b>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <div className="payment-details-con__main-con__last-payment__btn-con">
                  <button
                    className="payment-details-con__main-con__last-payment__btn-con__btn add-new-card-payment"
                    onClick={handleShow}
                  >
                    Add New
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="payment-details-con__main-con">
              <Title headtitle="Earning" />
              <div className="payment-details-con__main-con__earning-con">
                <div className="payment-details-con__main-con__earning-con__head">
                  <b>Lifetime earnings</b>
                </div>
                <div className="payment-details-con__main-con__earning-con__text">
                  $578699
                </div>
                <div className="payment-details-con__main-con__earning-con__head earning-monthly-con">
                  <b>Monthly earnings</b>
                </div>
                <div className="payment-details-con__main-con__earning-con__text">
                  $578699
                </div>
                <div className="payment-details-con__main-con__earning-con__btn-con">
                  <button className="payment-details-con__main-con__earning-con__btn-con__btn">
                    Get Paid
                  </button>
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
                  <InputField type="text" labelText="Name on Card" />
                </div>
              </div>
              <div className="row">
                <div className="col-md">
                  <InputField type="number" labelText="Card Number" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <InputField type="date" labelText="Expiry date" />
                </div>
                <div className="col-md-6">
                  <InputField type="text" labelText="Security Code" />
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
      <Modal
        show={editShow}
        onHide={handleEditClose}
        backdrop="static"
        keyboard={false}
        centered
        size="lg"
        className="add-my-edit-schdule-payment-method"
      >
        <Modal.Header>
          <div className="add-card-header-con">
            <div className="add-card-header-con__head">
              <b>Edit payment schedule</b>
            </div>
            <div className="add-card-header-con__btn-con">
              <button
                className="add-card-header-con__btn-con__btn"
                onClick={handleEditClose}
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
                <div className="col-md-6">
                  <SelectList
                    options="Bank Account ending in 8978"
                    labelText="Bank Account ending in 8978"
                    className="list-style-shedule"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="select-shedule-payment-method-con">
                    <div className="select-shedule-payment-method-con__head">
                      <b>Preferred Payment Schedule</b>
                    </div>
                    <div className="select-shedule-payment-method-con__text">
                      Earnings will be released upon your request.
                      <span className="learn-more-color-shedule">
                        <b>Learn more</b>
                      </span>
                    </div>
                    <div className="user-billing-card-info">
                      <input type="radio" id="card3" name="card" />
                      <label htmlFor="card3">
                        <div className="user-billing-card-info-label-con select-shedule-payment-label">
                          Quarterly (1 Sep 2022)
                        </div>
                      </label>
                    </div>
                    <div className="user-billing-card-info">
                      <input type="radio" id="card4" name="card" />
                      <label htmlFor="card4">
                        <div className="user-billing-card-info-label-con select-shedule-payment-label">
                          Monthly (1st of each month)
                        </div>
                      </label>
                    </div>
                    <div className="user-billing-card-info">
                      <input type="radio" id="card5" name="card" />
                      <label htmlFor="card5">
                        <div className="user-billing-card-info-label-con select-shedule-payment-label">
                          Twice per month (1st and 16th of each month)
                        </div>
                      </label>
                    </div>
                    <div className="user-billing-card-info">
                      <input type="radio" id="card6" name="card" />
                      <label htmlFor="card6">
                        <div className="user-billing-card-info-label-con select-shedule-payment-label">
                          Weekly (every Monday)
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <SelectList
                    options="$100.00 or more"
                    labelText="Only When Balance Is"
                    className="list-style-shedule"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <SelectList
                    options="$5.00"
                    labelText="Maintain A Reserve Balance"
                    className="list-style-shedule"
                  />
                </div>
              </div>
            </Form>
            <div className="next-payment-schedule">
              <div className="next-payment-schedule__head">
                <b>Next Payment (based on your schedule)</b>
              </div>
              <div className="next-payment-schedule__text">1st august 2022</div>
            </div>
          </div>
          <hr />
          <div className="add-card-model-footer-con">
            <div className="add-card-model-footer-con__shchdule-btn-con">
              <button
                className="add-card-model-footer-con__shchdule-btn-con__cancel"
                onClick={handleEditClose}
              >
                Cancel
              </button>
              <button
                className="add-card-model-footer-con__shchdule-btn-con__add"
                onClick={handleEditClose}
              >
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PaymentDetails;
