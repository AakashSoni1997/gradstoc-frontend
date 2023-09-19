import "../Home/Home.scss";
// import "./Job.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { InputGroup } from "react-bootstrap";

const Job = () => {
  return (
    <>
      <section className="layout">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li className="current">
                    <a href="javascript:void(0)">
                      <img src="./images/Vector (1).svg" />
                      Getting Started
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                      />
                      Job Details
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                      />
                      Attachment
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                      />
                      Review
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part">
                <div className="top-part">
                  <h1 className="m-3">Getting Started</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm">
                  <h3>What would you like to do?</h3>

                  <div className="texts">
                    <div className="flex">
                      <div className="box">
                        <div className="icons">
                          <img src="./images/writing.svg" />
                        </div>
                        <div className="text-part">
                          <div className="heading">Ask a question</div>
                          <p>Get step-by-step answers from experts</p>
                        </div>
                      </div>
                      <div className="box">
                        <div className="icons">
                          <img src="./images/writing.svg" />
                        </div>
                        <div className="text-part">
                          <div className="heading">Ask a question</div>
                          <p>Get step-by-step answers from experts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-part">
                  <button className="btn btn-primary">Cancel</button>
                  <button className="btn btn-primary">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout layoptu01">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li className="current">
                    <a href="javascript:void(0)">Getting Started</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Job Details</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Attachment</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Review</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-1">
                <div className="top-part">
                  <h1 className="m-3">Getting Started</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm">
                  <h3>What would you like to do?</h3>

                  <div className="texts">
                    <div className="flex">
                      <div className="box">
                        <div className="checked">
                          <img src="./images/Vector (3).svg" />
                        </div>
                        <div className="icons">
                          <img src="./images/Vector (2).svg" />
                        </div>
                        <div className="text-part">
                          <div className="heading">Writing Services</div>
                          <p>Connect with highly qualified writers</p>
                        </div>
                      </div>
                      <div className="box">
                        <div className="icons">
                          <img src="./images/writing.svg" />
                        </div>
                        <div className="text-part">
                          <div className="heading">Ask a question</div>
                          <p>Get step-by-step answers from experts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bottom-part">
                  <button className="btn btn-primary">Cancel</button>
                  <button className="btn btn-primary">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout layoptu01">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li className="current">
                    <a href="javascript:void(0)">Getting Started</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Job Details</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Attachment</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Review</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1 className="m-3">Document details</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm">
                  <div className="label-part">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          Document Title <span>(Required)</span>
                        </Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>
                          Description
                          <span> (Required)</span>
                        </Form.Label>
                        <Form.Control as="textarea" rows={7} />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>
                          Document Subject
                          <span></span>
                        </Form.Label>
                        <Form.Control type="email" placeholder="" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3  tags"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="d-block">
                          Tags
                          <span></span>
                        </Form.Label>
                        <Form.Control type="email" placeholder="" />
                        <div className="btn-part">
                          <Button variant="primary">
                            Tag type 1 <img src="./images/Vector (4).svg" />
                          </Button>
                          <Button variant="primary">
                            Tag type 2 <img src="./images/Vector (4).svg" />
                          </Button>
                        </div>
                      </Form.Group>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>
                              Document type
                              <span>(Required)</span>
                            </Form.Label>
                            <Form.Control type="email" placeholder="" />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>
                              Pages <span>(Required)</span>
                            </Form.Label>
                            <Form.Control type="email" placeholder="" />
                          </Form.Group>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Spacing</Form.Label>
                            <Form.Control type="email" placeholder="" />
                          </Form.Group>
                        </div>
                        <div className="col-md-6">
                          <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Label>Citation style</Form.Label>
                            <InputGroup className="mb-3">
                              <Form.Control
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                              <InputGroup.Text id="basic-addon1">
                                USD
                              </InputGroup.Text>
                            </InputGroup>
                          </Form.Group>
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>

                <div className="bottom-part mt-5">
                  <button className="btn btn-primary">Cancel</button>
                  <button className="btn btn-primary fill">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout layoptu01">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li className="current">
                    <a href="javascript:void(0)">Getting Started</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Job Details</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Attachment</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Review</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1 className="m-3">Attachment</h1>
                </div>
                <hr></hr>
                <div className="uploading-file">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="innr-bottm">
                        <h3>Upload file</h3>
                        <div className="picture-file">
                          <img
                            src="./images/Group 829.svg"
                            className="dropdrage-pic"
                          />
                          <div className="drag_n_drop-text">
                            Drag & Drop files or select a document to upload
                          </div>
                          <div className="upload_btn">
                            <button className="btn btn_green_field ml0 my-5">
                              Upload Document
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pdf-all-progess-con">
                        <h3 className="pdf-head-text">Attached files</h3>

                        <div className="uploadfile-progess">
                          <div className="pdf-icon ">
                            <img
                              src="./images/progress-pdf.svg"
                              alt="pdf-icon"
                            />
                          </div>
                          <div className="progess-text-con">
                            <div className="name-cross-icon-con">
                              <p className="pdf-file-name">Name of file</p>
                              <img
                                src="./images/progress-cross.svg"
                                alt="poster"
                                className="pdf-file-cross"
                              />
                            </div>
                            <p className="pdf-file-size">32mb</p>
                            <div className="pdf-progress-bar-con">
                              <div className="pdf-progress-bar">
                                <span className="pdf-progress-light"></span>
                              </div>
                              <p className="pdf-progress-percent"> 40%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="bottom-part mt-5">
                  <button className="btn btn-primary">Cancel</button>
                  <button className="btn btn-primary fill">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout layoptu01">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li className="current">
                    <a href="javascript:void(0)">Getting Started</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Job Details</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Attachment</a>
                  </li>
                  <li>
                    <a href="javascript:void(0)">Review</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1 className="m-3">Review</h1>
                </div>
                <hr></hr>
                {/* <div className="uploading-file">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="innr-bottm"><h3>Upload file
                      </h3>
                        <div className="picture-file">
                          <img src="./images/Group 829.svg" className="dropdrage-pic" />
                          <div className="drag_n_drop-text">Drag & Drop files or select a document to upload</div>
                          <div className="upload_btn">
                            <button className="btn btn_green_field ml0 my-5">Upload Document</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pdf-all-progess-con">
                        <h3 className="pdf-head-text">Attached files
                        </h3>

                        <div className="uploadfile-progess">
                          <div className="pdf-icon ">
                            <img src="./images/progress-pdf.svg" alt=
                              "pdf-icon" />
                          </div>
                          <div className="progess-text-con">
                            <div className="name-cross-icon-con">
                              <p className="pdf-file-name">Name of file</p>
                              <img src="./images/progress-cross.svg" alt="poster" className="pdf-file-cross" />
                            </div>
                            <p className="pdf-file-size">32mb</p>
                            <div className="pdf-progress-bar-con">
                              <div className="pdf-progress-bar" ><span className="pdf-progress-light"></span></div>
                              <p className="pdf-progress-percent"> 40%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="review-get-started">
                  <h1 className="review-get-started-head">Getting Started</h1>
                  <p className="review-get-started-ques">
                    <b>What would you like to do? </b>
                  </p>
                  <p className="review-get-started-ans">Writing Services</p>
                </div>
                <hr />
                <div className="review-job-details-con">
                  <h1 className="review-job-details-head">Jobs Details</h1>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Document Title</b>
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
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Document type</b>
                  </p>
                  <p className="review-job-details-doc">Flashcards</p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Pages</b>
                  </p>
                  <p className="review-job-details-doc">15</p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Due date</b>
                  </p>
                  <p className="review-job-details-doc">10 Nov 2020</p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Budget</b>
                  </p>
                  <p className="review-job-details-doc">$300 USD</p>
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
                  <button className="btn btn-primary">Cancel</button>
                  {}
                  <button className="btn btn-primary fill">Continue</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Job;
