import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import { InputField } from "../../../Components/InputField/InputField";
import "./BillingInfo.scss";

const BillingInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <div className="user-billing-info-con">
              <div className="user-billing-info-header-con">
                <div className="user-billing-info-head-con">
                  <div className="user-billing-info-head">
                    <b>Manage Billing Methods</b>
                  </div>
                  <div className="user-billing-info-text">
                    Add, update, or remove your billing methods
                  </div>
                </div>
                <div className="user-billing-info-btn-con">
                  <button
                    className="user-billing-info-btn"
                    onClick={handleShow}
                  >
                    Add New Card
                  </button>
                </div>
              </div>
              <hr />
              <div className="user-billing-card-info-con">
                <div className="user-billing-card-info">
                  <input type="radio" id="card1" name="card" />
                  <label htmlFor="card1">
                    <div className="user-billing-card-info-label-con">
                      <div className="user-billing-card-info-label-img-con">
                        <img
                          src="./images/visa.svg"
                          alt="card"
                          className="user-billing-card-info-label-img"
                        />
                      </div>
                      <div className="user-billing-card-info-label-details-con">
                        <div className="user-billing-card-info-label-details">
                          Visa ending in 2134
                        </div>
                        <div className="user-billing-card-info-label-btn-con">
                          <button className="user-billing-card-info-label-btn-edit">
                            Edit
                          </button>
                          <button className="user-billing-card-info-label-btn-delete">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <hr />
                <div className="user-billing-card-info">
                  <input type="radio" id="card2" name="card" />
                  <label htmlFor="card2">
                    <div className="user-billing-card-info-label-con">
                      <div className="user-billing-card-info-label-img-con">
                        <img
                          src="./images/visa.svg"
                          alt="card"
                          className="user-billing-card-info-label-img"
                        />
                      </div>
                      <div className="user-billing-card-info-label-details-con">
                        <div className="user-billing-card-info-label-details">
                          Visa ending in 2134
                        </div>
                        <div className="user-billing-card-info-label-btn-con">
                          <button className="user-billing-card-info-label-btn-edit">
                            Edit
                          </button>
                          <button className="user-billing-card-info-label-btn-delete">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <hr />
                <div className="user-billing-card-info">
                  <input type="radio" id="card3" name="card" />
                  <label htmlFor="card3">
                    <div className="user-billing-card-info-label-con">
                      <div className="user-billing-card-info-label-img-con">
                        <img
                          src="./images/visa.svg"
                          alt="card"
                          className="user-billing-card-info-label-img"
                        />
                      </div>
                      <div className="user-billing-card-info-label-details-con">
                        <div className="user-billing-card-info-label-details">
                          Visa ending in 2134
                        </div>
                        <div className="user-billing-card-info-label-btn-con">
                          <button className="user-billing-card-info-label-btn-edit">
                            Edit
                          </button>
                          <button className="user-billing-card-info-label-btn-delete">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
                <hr />
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
      </section>
    </>
  );
};
export default BillingInfo;
