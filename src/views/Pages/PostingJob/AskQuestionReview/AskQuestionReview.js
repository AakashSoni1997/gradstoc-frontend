import React, { useState } from "react";
import "../../Home/Home.scss";
import "../Job.scss";
import "../Review/Review.scss";
import "./AskQuestionReview.scss";
import { Modal } from "react-bootstrap";
import { ButtonColor } from "../../../Components/Button/Button";
import { Link } from "react-router-dom";

const AskQuestionReview = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li>
                    <Link to="/postingjob">
                      <img src="./images/green-tick.svg" alt="tick" />
                      <span className=" current-active">Getting Started</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/askquestiondetail">
                      <img src="./images/green-tick.svg" alt="tick" />
                      <span className=" current-active">Question Detail</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/askquestionattachment">
                      <img src="./images/green-tick.svg" alt="tick" />
                      <span className=" current-active">Attachment</span>
                    </Link>
                  </li>
                  <li className="current">
                    <Link>
                      <img src="./images/dark-tick.svg" alt="tick" />
                      Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1>Review</h1>
                </div>
                <hr></hr>
                <div className="review-get-started">
                  <h1 className="review-get-started-head">Getting Started</h1>
                  <p className="review-get-started-ques">
                    <b>What would you like to do? </b>
                  </p>
                  <p className="review-get-started-ans">Ask Question</p>
                </div>
                <hr />
                <div className="review-job-details-con">
                  <h1 className="review-job-details-head">Question Details</h1>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Title</b>
                  </p>
                  <p className="review-job-details-doc">Lorem ipsume title 1</p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Description</b>
                  </p>
                  <p className="review-job-details-doc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dolor massa molestie erat turpis ac pulvinar. Interdum nam
                    curabitur cras tincidunt nullam massa dui. Dolor tellus erat
                    elit dis porttitor at tincidunt eu. Id amet ut a vulputate
                    venenatis.
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Choose a Category</b>
                  </p>
                  <p className="review-job-details-doc">
                    Category type 1, Category type 2
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Tags</b>
                  </p>
                  <p className="review-job-details-doc">
                    Tag type 1, Tag type 2, Tag type 3
                  </p>
                  {/* <p className="review-job-details-doc review-job-details-doc-gap"><b>Document type</b></p> */}
                  {/* <p className="review-job-details-doc">Flashcards</p> */}
                  {/* <p className="review-job-details-doc review-job-details-doc-gap"><b>Pages</b></p>
                                    <p className="review-job-details-doc">15</p> */}
                  {/* <p className="review-job-details-doc review-job-details-doc-gap"><b>Due date</b></p>
                                    <p className="review-job-details-doc">10 Nov 2020</p>
                                    <p className="review-job-details-doc review-job-details-doc-gap"><b>Budget</b></p>
                                    <p className="review-job-details-doc">$300 USD</p> */}
                </div>
                <hr />
                <div className="review-attachment-con">
                  <h1 className="review-attachment-head">Attachment</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="review-attachment-pdf-con">
                        <div className="review-attachment-pdf-content">
                          <div className="review-attachment-pdf-img-con">
                            <img
                              src="./images/progress-pdf.svg"
                              alt="pdf icon"
                            />
                          </div>
                          <div className="review-attachment-pdf-content-con">
                            <p className="review-attachment-pdf-name">
                              <b>File name type 1</b>
                            </p>
                            <p className="review-attachment-pdf-size">3.2 MB</p>
                            <div
                              className="review-attachment-progress-bar
                               "
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="review-attachment-pdf-con">
                        <div className="review-attachment-pdf-content">
                          <div className="review-attachment-pdf-img-con">
                            <img
                              src="./images/progress-pdf.svg"
                              alt="pdf icon"
                            />
                          </div>
                          <div className="review-attachment-pdf-content-con">
                            <p className="review-attachment-pdf-name">
                              <b>File name type 1</b>
                            </p>
                            <p className="review-attachment-pdf-size">3.2 MB</p>
                            <div
                              className="review-attachment-progress-bar
                               "
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="bottom-part mt-5">
                  <button className="review-cancel-btn">Cancel</button>
                  <button
                    className="review-continue-btn"
                    onClick={() => handleShow()}
                  >
                    Post Job
                  </button>
                  <Modal
                    show={show}
                    centered
                    backdrop="static"
                    keyboard={false}
                    onHide={() => setShow(false)}
                  >
                    <Modal.Body>
                      <div className="model-header-content-con">
                        <div className="model-header-content-con__head">
                          <b>Successful</b>
                        </div>
                        <div className="model-header-content-con__img-con">
                          <img
                            src="./images/Crossbtn.svg"
                            alt="Cross btn"
                            onClick={handleClose}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="modal-img-con">
                          <img
                            src="./images/tick-marks.png"
                            alt=" tick-mark"
                            className="modal-img-con__img"
                          />
                        </div>
                        <div className="bid-model-content-text">
                          <b>Your are successfully post the job</b>
                        </div>
                        <div className="bid-modal-btn-con">
                          <a href="/jobs">
                            <ButtonColor buttonText="Done" />
                          </a>
                        </div>
                      </div>
                    </Modal.Body>
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AskQuestionReview;
