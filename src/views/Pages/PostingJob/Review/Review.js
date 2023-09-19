import React, { useState } from "react";
import "../../Home/Home.scss";
import "../Job.scss";
import "./Review.scss";
import { Modal } from "react-bootstrap";
import { ButtonColor } from "../../../Components/Button/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetCategoryList } from "../../../../redux/actions/jobPostAction";
import { useSelector } from "react-redux";
import axios from "axios";
import getCurrentHost from "../../../../redux/constants";
import { authHeader } from "../../../../redux/actions/authHeader";
import { toast } from "react-toastify";

const Review = (props) => {
  const state = props.location.state;
  const dispatch = useDispatch();
  console.log(state, "state432");
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(GetCategoryList());
  }, [dispatch]);

  const docs = JSON.parse(localStorage.getItem("docs"));
  const JobPostState = JSON.parse(
    localStorage.getItem("job_post_state")
  )?.state;
  const fileArr = JSON.parse(localStorage.getItem("fileArr"));
  const services = localStorage.getItem("services");
  const category = useSelector((state) => state.jobpost.category_list_success);
  const filteredCategory =
    category.length > 0 &&
    category.find((ele, index) => ele.id == JobPostState.categoryid);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(JobPostState, "JobPostState");
  console.log(fileArr, "fileArr");

  const handlePostJob = () => {
    const state = {
      userid: Number(localStorage.getItem("user")),
      ...JobPostState,
      docs: docs,
      writingservice: services,
      document: "document",
    };

    axios
      .post(getCurrentHost() + "/add-job-post", state, {
        headers: authHeader(),
      })
      .then((res) => {
        setShow(true);
        toast.success(res.data.message);
      })
      .catch((err) => console.log(err, "Errorr"));
  };
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
                      <img src="./images/green-tick.svg" alt="green-tick" />
                      <span className=" current-active">Getting Started</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/jobdetail">
                      <img src="./images/green-tick.svg" alt=" green tick" />
                      <span className=" current-active"> Job Details</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/attachment">
                      <img src="./images/green-tick.svg" alt="green tick" />
                      <span className=" current-active">Attachment</span>
                    </Link>
                  </li>
                  <li className="current">
                    <Link>
                      <img src="./images/dark-tick.svg" alt=" green tick" />
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
                  <p className="review-get-started-ans">
                    {services == 1 ? "Writing Services" : "Ask a question"}
                  </p>
                </div>
                <hr />
                <div className="review-job-details-con">
                  <h1 className="review-job-details-head">Jobs Details</h1>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Document Title</b>
                  </p>
                  <p className="review-job-details-doc">
                    {JobPostState?.title}
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Description</b>
                  </p>
                  <p className="review-job-details-doc">
                    {JobPostState?.description}
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Choose a Category</b>
                  </p>
                  <p className="review-job-details-doc">
                    {filteredCategory.category_name}
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Tags</b>
                  </p>
                  <p className="review-job-details-doc">
                    {JobPostState?.tags?.map((ele) => (
                      <span>{ele} </span>
                    ))}
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Document type</b>
                  </p>
                  <p className="review-job-details-doc">
                    {JobPostState?.document_type}
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Pages</b>
                  </p>
                  <p className="review-job-details-doc">{JobPostState.pages}</p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Due date</b>
                  </p>
                  <p className="review-job-details-doc">
                    {JobPostState?.due_date}
                  </p>
                  <p className="review-job-details-doc review-job-details-doc-gap">
                    <b>Budget</b>
                  </p>
                  <p className="review-job-details-doc">
                    ${JobPostState?.budget} USD
                  </p>
                </div>
                <hr />
                <div className="review-attachment-con">
                  <h1 className="review-attachment-head">Attachment</h1>
                  <div className="row">
                    {fileArr?.map((elem, index) => (
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
                                <b>{elem[0]}</b>
                              </p>
                              <p className="review-attachment-pdf-size">
                                {elem[1] / (1024 * 1024)}mb
                              </p>
                              <div
                                className="review-attachment-progress-bar
               "
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    {/* <div className="col-md-6">
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
                    </div> */}
                  </div>
                </div>
                <hr />
                <div className="bottom-part mt-5">
                  <button className="review-cancel-btn">Cancel</button>
                  <button
                    className="review-continue-btn"
                    onClick={handlePostJob}
                  >
                    Post Job
                  </button>
                  <Modal
                    show={show}
                    centered
                    backdrop="static"
                    keyboard={false}
                    // onHide={() => setShow(false)}
                  >
                    <Modal.Body>
                      <div className="model-header-content-con">
                        <div className="model-header-content-con__head">
                          <b>Successful</b>
                        </div>
                        <div className="model-header-content-con__img-con">
                          {/* <img
                            src="./images/Crossbtn.svg"
                            alt="Cross btn"
                            onClick={handleClose}
                          /> */}
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
                          <a href="/">
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
export default Review;
