import React from "react";
import "./Expert.scss";
import { Form } from "react-bootstrap";

const Experts = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <div className="expert-head-con">
              <h1 className="expert-head">
                <b>Become An Expert</b>
              </h1>
              <div className="expert-text">
                Earn income by sharing your knowledge
              </div>
            </div>
            <hr />
            <div className="expert-person-details-con">
              <div className="expert-person-profile-pic-con">
                <div className="expert-person-profile-head">
                  <b>Profile Picture</b>
                </div>
                <div className="expert-person-profile-pic-upload-con">
                  <img
                    src="./images/back-ground-img.svg"
                    className="expert-person-profile-pic-img"
                    alt="backgorund img"
                  />
                  <div className="expert-person-profile-cam-pic-con">
                    <img
                      src="./images/camp-icon.svg"
                      className="expert-person-profile-cam-pic"
                      alt="cam"
                    />
                    <span className="expert-person-profile-cam-text">
                      Upload photo
                    </span>
                  </div>
                </div>
              </div>
              <div className="expert-person-about-us-con">
                <div className="row">
                  <div className="col-md-6">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="expert-person-about-us-lable">
                          <b>First Name</b>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                          className="expert-person-about-us-lable-text"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-md-6">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="expert-person-about-us-lable">
                          <b>Last Name</b>
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                          className="expert-person-about-us-lable-text"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="expert-person-about-me-con">
                <Form>
                  <Form.Group
                    className="desctiption-form-tags"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="expert-person-about-me-lable">
                      <b>About Me</b>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="expert-person-about-me-description"
                      rows={8}
                      placeholder="Describe yourself."
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="expert-person-work-experience-con">
                <Form>
                  <Form.Group
                    className="desctiption-form-tags"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label className="expert-person-work-experience-lable">
                      <b>Work-Experience</b>
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      className="expert-person-work-experience-description"
                      rows={8}
                      placeholder="Share a little about your work experience."
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="expert-person-education-con">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="expert-person-about-us-lable">
                      <b>Education</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="List your school name, degree obtained, and field of study."
                      className="expert-person-about-us-lable-text"
                    />
                  </Form.Group>
                </Form>
                <div className="expert-person-education-btn-con">
                  <button className="expert-person-education-btn">Add</button>
                </div>
              </div>
              <div className="expert-person-skills-con">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label className="expert-person-about-us-lable">
                      <b>Skills</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Share a little about your skills and abilities."
                      className="expert-person-about-us-lable-text"
                    />
                  </Form.Group>
                </Form>
              </div>
              <div className="expert-person-transcripts-con">
                <div className="expert-person-transcripts-head">
                  <b>Transcripts, Certifications, Licenses</b>
                  <span className="expert-person-transcripts-head__text">
                    (Required)
                  </span>
                </div>
                <div className="expert-person-transcripts-btn-con">
                  <button className="expert-person-transcripts-btn">
                    Attach Files
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="expert-person-submit-con">
              <div className="expert-person-submit-btn-con">
                <button className="expert-person-submit-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Experts;
