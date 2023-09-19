import React, { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import "../../Components/TheHeader/Header.scss";
import "../Dashboard/StudyResourcesDetail.scss";
import "../Dashboard/Orders.scss";
import "./PurchaseStudyResources.scss";

const PurchaseStudyResources = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="purchasestudyresources-main-sec">
        <div className="purchasestudyresources-main-sec__inner-con">
          <div className="purchasestudyresources-main-sec__inner-con__head-con">
            <div className="purchasestudyresources-main-sec__inner-con__head-con__head">
              <b>Purchase Study Resources</b>
            </div>
            <div className="purchasestudyresources-main-sec__inner-con__head-con__search-icon">
              <div className="headerSearchBx serach-box">
                <input
                  placeholder="Search by Course Code"
                  aria-label="Search"
                  type="search"
                  className="me-2 search_header form-control seach-icon-study-page"
                />
                <div className="search_header_icon"></div>
              </div>
            </div>
            <div className="purchasestudyresources-main-sec__inner-con__head-con__sort-list">
              <span className="purchasestudyresources-main-sec__inner-con__head-con__sort-list__text">
                Sort By
              </span>
              <Form>
                <Form.Select
                  aria-label="Default select example"
                  className="purchasestudyresources-main-sec__inner-con__head-con__sort-list__list"
                >
                  <option value="1">Latest</option>
                  <option value="2">Old</option>
                </Form.Select>
              </Form>
            </div>
          </div>
          <hr />
          <div className="fav-content container" onClick={handleShow}>
            <div className="fav-content__with-img-con">
              <div className="fav-content__img-con">
                <img
                  src="./images/book_cover.png"
                  alt="cover"
                  className="fav-content__img-con__img"
                />
              </div>
              <div className="text-con">
                <div className="head-con">
                  <span className="heading">
                    Question type 1 Lorem ipsum dolor sit amet,
                    consectetur......
                  </span>
                </div>
                <div className="para-con">
                  <p className="text-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc lacus eget facilisis lacus. Eleifend quis viverra
                    pharetra orci in vestibulum vel. Id egestas a lectus
                    sagittis sed. Justo dictumst nulla elementum donec
                    scelerisque in penatibus sem rutrum.
                  </p>
                </div>
                <div className="para-con-2">
                  <div className="para-con-2__study-guide">
                    Study Guide
                    <span className="para-con-2__study-guide__sub">
                      <b>33 pages</b>
                    </span>
                  </div>
                  <div className="para-con-2__battle-grade">
                    Bettergrades
                    <span className="para-con-2__battle-grade__sub">
                      <b>Uploaded 09-09-2020</b>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="currncy-box">
              <p className="bid-price">
                <b>$300</b>
              </p>
              <span className="currency-type">USD</span>
            </div>
          </div>
          <hr />
        </div>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="example-custom-modal-styling-title"
        className="model-box-con-large"
        size="xl"
      >
        <Modal.Body>
          <p>
            <div className="row">
              <div className="col-md">
                <div>
                  <div className="model-cross-icon-con">
                    <div className="container studydetail-person-con">
                      <div className="profile-pic-con">
                        <img src="./images/profile-pic.png" alt="profile pic" />
                      </div>
                      <div className="studyperson-details">
                        <h1 className="person-title">
                          <b>Solution 100</b>
                        </h1>
                        <p className="person-country">India</p>
                        <div className="person-rate-con">
                          <div className="person-rate">
                            <input
                              type="radio"
                              id="star5"
                              name="rate"
                              value="5"
                            />
                            <label htmlFor="star5" title="text">
                              5 stars
                            </label>
                            <input
                              type="radio"
                              id="star4"
                              name="rate"
                              value="4"
                            />
                            <label htmlFor="star4" title="text">
                              4 stars
                            </label>
                            <input
                              type="radio"
                              id="star3"
                              name="rate"
                              value="3"
                            />
                            <label htmlFor="star3" title="text">
                              3 stars
                            </label>
                            <input
                              type="radio"
                              id="star2"
                              name="rate"
                              value="2"
                            />
                            <label htmlFor="star2" title="text">
                              2 stars
                            </label>
                            <input
                              type="radio"
                              id="star1"
                              name="rate"
                              value="1"
                            />
                            <label htmlFor="star1" title="text">
                              1 star
                            </label>
                          </div>
                          <div className="rate_value">(5)</div>
                        </div>
                        <div className="person-membership-record">
                          <p className="person-membership-text">
                            Member since : <b>1 year</b>
                          </p>
                          <p className="person-membership-text2">
                            Total Resources Sold : <b>130</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="logout-con__text-con__img-con logout-con__text-con__img-con-margin">
                      <img
                        src="./images/Crossbtn.svg"
                        alt="Cross btn"
                        onClick={handleClose}
                      />
                    </div>
                  </div>
                  <div className="personsub-details-con">
                    <div className="personsub-details-one personsub-details-con-padding">
                      <p className="person-subject-text">
                        <b>School / University</b>
                      </p>
                      <p className="person-school-text">Walden University</p>
                    </div>
                    <div className="personsub-details-two">
                      <p className="person-subject-text">
                        <b>Subject</b>
                      </p>
                      <p className="person-school-text">Maths</p>
                    </div>
                    <div className="personsub-details-three">
                      <p className="person-subject-text">
                        <b>Course</b>
                      </p>
                      <p className="person-school-text">Bibl 104</p>
                    </div>
                    <div className="personsub-details-four">
                      <p className="person-subject-text">
                        <b>Type </b>
                      </p>
                      <p className="person-school-text">Answers</p>
                    </div>
                    <div
                      className="personsub-details-five
                                            personsub-details-five--width"
                    >
                      <p className="person-subject-text">
                        <b>Total Pages</b>
                      </p>
                      <p className="person-school-text">125</p>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md">
                    <div>
                      <div className="studydetail-ans-con">
                        <p className="studydetail-ans-text">Answer</p>
                        <p className="studydetail-ans-head">
                          <b>
                            Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3,
                            Bibl 104 Quiz 4, Bibl 104 Quiz 5...
                          </b>
                        </p>
                        <p className="studydetail-ans-mytext">
                          BIBL 104 Quiz 2 / Liberty University BIBL 104 Quiz 2
                          (Already graded A)
                        </p>
                        <hr />
                        <div className="style-preview">
                          <p className="style-preview-text">
                            Preview 2 out of 7 pages
                          </p>
                        </div>
                        <hr />
                        <div className="study-question-list-con">
                          <ul className="study-question-lists">
                            <li className="studydetail-ans-text"> Answer</li>
                          </ul>
                          <p className="studydetail-ans-text">
                            1 out of 1 point
                          </p>
                          <h1>
                            <b>
                              Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3,
                              Bibl 104 Quiz 4, Bibl 104 Quiz 5...
                            </b>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PurchaseStudyResources;
