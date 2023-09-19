import React from "react";
import "./Dashboard.scss";
import Form from "react-bootstrap/Form";
import "./UploadStudyResource.scss";
import Chip from "../../Components/Chip/Chip";
import { Modal } from "react-bootstrap";
import { ButtonColor } from "../../Components/Button/Button";
const UploadStudyResource = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className="layout layoptu01">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="left-side-menu">
                <div className="top-part">
                  <h1>Upload Document</h1>
                </div>
                <hr></hr>
                <div className="uploading_file">
                  <div className="row">
                    <div className="innr-bottm">
                      <h3>Document Preview</h3>
                      <div className="picture-file">
                        <div className="upload_img">
                          <img src="./images/Group 829.svg" alt="group" />
                        </div>
                        <div className="drag_n_drop">
                          Drag & Drop files or select a document to upload
                        </div>
                        <div className="upload_btn">
                          <button className="upload-doc-btn">
                            Upload Document
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1 className="m-3">Study Resource Details</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm-upload-resource">
                  <div className="label-part">
                    <Form>
                      <div className="upload-form-group-con">
                        <Form.Group
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Label>
                            Title<span> (Required)</span>
                          </Form.Label>
                          <Form.Control type="email" placeholder="" />
                        </Form.Group>
                        <Form.Group
                          className="mb-5"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>
                            Description
                            <span> (Required)</span>
                          </Form.Label>
                          <Form.Control
                            as="textarea"
                            className="des-group"
                            rows={8}
                          />
                        </Form.Group>
                      </div>
                      <hr />
                      <div className="upload-form-group-con">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group-con">
                              <Form.Group>
                                <Form.Label>School</Form.Label>
                                <Form.Select aria-label="Default select example">
                                  <option value="1" className="listofschool">
                                    School 1
                                  </option>
                                  <option value="2">School 2</option>
                                  <option value="3">Schoool 3</option>
                                </Form.Select>
                              </Form.Group>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group-con">
                              <Form.Group>
                                <Form.Label>Course</Form.Label>
                                <Form.Select
                                  aria-label="Default select example"
                                  className="studyresourec-course-list"
                                >
                                  <option value="1">Courses 1</option>
                                  <option value="2">Courses 2</option>
                                  <option value="3">Courses 3 </option>
                                </Form.Select>
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="upload-form-group-con">
                        <div className="row mb-5">
                          <div className="col-md-6 ">
                            <div className="form-group-con">
                              <Form.Group>
                                <Form.Label>Subject</Form.Label>
                                <Form.Select aria-label="Default select example">
                                  <option value="1">Subject 1</option>
                                  <option value="2">Subject 2</option>
                                  <option value="3">Subject 3</option>
                                </Form.Select>
                              </Form.Group>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group-con">
                              <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlInput1"
                              >
                                <Form.Label>Enter Tags</Form.Label>
                                <Chip />
                              </Form.Group>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div className="upload-form-group-con">
                        <div className="subtitle">Price</div>
                        <div className="row">
                          <div className="col-md-6">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label>Enter price</Form.Label>
                              <Form.Control type="email" placeholder="" />
                            </Form.Group>
                          </div>
                          <Form.Check
                            type="checkbox"
                            label="Free"
                            className="price-flow-check"
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="bottom-part mt-5">
                  <button className="uploadresource-cancel-btn">Cancel</button>
                  <button
                    className="uploadresource-continue-btn"
                    onClick={() => handleShow()}
                  >
                    Continue
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
                          <b>Your Document is Successfully Upload</b>
                        </div>
                        <div className="bid-modal-btn-con">
                          <a href="/studyresources">
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

export default UploadStudyResource;
