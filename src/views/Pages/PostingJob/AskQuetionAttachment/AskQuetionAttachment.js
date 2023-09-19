import React from "react";
import "../../Home/Home.scss";
import "../Job.scss";
import "../Attachment/Attachment.scss";
import { Link } from "react-router-dom";

const AskQuetionAttachment = () => {
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
                  <li className="current">
                    <Link>
                      <img src="./images/dark-tick.svg" alt="tick" />
                      Attachment
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        src="./images/Vector (1).svg"
                        className="change-color"
                        alt="tick"
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
                            alt="group"
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
                                <div className="pdf-progress-bar-inner"></div>
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
                  <button className="attachment-cancel-btn">Cancel</button>
                  <Link to="/askquestionreview">
                    <button className="attachment-continue-btn">
                      Continue
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AskQuetionAttachment;
