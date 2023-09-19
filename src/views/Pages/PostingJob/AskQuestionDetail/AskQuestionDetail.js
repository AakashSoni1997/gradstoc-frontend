import React from "react";
import Form from "react-bootstrap/Form";
import "../../Home/Home.scss";
import "../Job.scss";
import "../JobDetails/JobDetails.scss";
import Chip from "../../../Components/Chip/Chip";
import { Link } from "react-router-dom";

const AskQuestionDetail = () => {
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
                      <img src="./images/green-tick.svg" alt="icon" />
                      <span className=" current-active">Getting Started</span>
                    </Link>
                  </li>
                  <li className="current">
                    <Link to="#">
                      <img src="./images/dark-tick.svg" alt="icon" />
                      Question Detail
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="icon"
                      />
                      Attachment
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="icon"
                      />
                      Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1>Question Details</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm">
                  <div className="label-part">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="job-details-requred-lable">
                          <b>Title </b>
                          <span className="job-details-requred-text">
                            (Required)
                          </span>
                        </Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group
                        className="desctiption-form-tags"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label className="job-details-requred-lable">
                          <b>Description</b>
                          <span className="job-details-requred-text">
                            (Required)
                          </span>
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          className="des-group"
                          rows={8}
                        />
                      </Form.Group>
                      <Form.Group
                        className="desctiption-form-tags"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="job-details-requred-lable">
                          <b>Subject</b>
                        </Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group
                        className="desctiption-form-tags  tags"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="d-block job-details-requred-lable">
                          <b>Tags</b>
                        </Form.Label>
                        <Chip />
                      </Form.Group>
                      {/* <div className="row desctiption-form-tags">
                                                <div className="col-md-6">
                                                    <Form.Group controlId="exampleForm.ControlInput1">
                                                        <Form.Label
                                                            className="job-details-requred-lable"
                                                        ><b>Document type</b>
                                                        </Form.Label>
                                                        <Form.Control type="email" placeholder="" />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label
                                                            className="job-details-requred-lable"
                                                        ><b>Pages</b></Form.Label>
                                                        <Form.Control type="email" placeholder="" />
                                                    </Form.Group>
                                                </div>
                                            </div>
                                            <div className="row desctiption-form-tags">
                                                <div className="col-md-6">
                                                    <Form.Group controlId="exampleForm.ControlInput1">
                                                        <Form.Label className="job-details-requred-lable"><b>Spacing</b>
                                                        </Form.Label>
                                                        <Form.Control type="email" placeholder="" />
                                                    </Form.Group>
                                                </div>
                                                <div className="col-md-6">
                                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                        <Form.Label className="job-details-requred-lable"><b>Citation style</b>
                                                        </Form.Label>
                                                        <InputGroup className="mb-3">
                                                            <Form.Control
                                                                placeholder=""
                                                                aria-describedby="basic-addon1"
                                                            />
                                                            <InputGroup.Text id="basic-addon1">USD</InputGroup.Text>
                                                        </InputGroup> </Form.Group>
                                                </div>
                                            </div> */}
                    </Form>
                  </div>
                </div>
                <div className="bottom-part mt-5">
                  <button className="jobdetails-cancel-btn">Cancel</button>
                  <a href="/askquestionattachment">
                    <button className="jobdetails-continue-btn">
                      Continue
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AskQuestionDetail;
