import React from "react";
import "./MyPostingJob.scss";
import { Dropdown, Badge } from "react-bootstrap";

const MyPostingJob = () => {
  return (
    <>
      <section>
        <div className="container my-con">
          <div className="Mypost-head-con">
            <div className="Mypost-head">My Postings</div>
          </div>
          <div className="New-post-con">
            <a href="/postingjob">
              <button className="btn btn_green_field ml0 btn btn-outline-success">
                Post Job
              </button>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="container">
                <div>
                  <p className="mypost-qus-head">
                    <b>Question type 1 Lorem ipsum dolor sit amet elit.</b>
                    <span className="mypost-qus-timer">( 2 days left)</span>
                  </p>
                </div>
                <p className="mypost-qus-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  lacus eget facilisis lacus. Eleifend quis viverra pharetra
                  orci in vestibulum vel. Id egestas a lectus sagittis sed.
                  Justo dictumst nulla elementum donec scelerisque in penatibus
                  sem rutrum.
                </p>
                <div className="myjob-post-badge">
                  <Badge className="myjob-post-tag">Tag 1</Badge>
                  <Badge className="myjob-post-tag">Tag 2</Badge>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="container my-custom-post">
                <div className="myjob-drop-down">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" align="end">
                      <div className="myjob_option">
                        <img src="./images/dot_icon.svg" alt="dots" />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="drop-down-option-myposting-main">
                      <Dropdown.Item
                        href="#/action-1"
                        className="drop-down-option-myposting-job"
                      >
                        View the Contract
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-2"
                        className="drop-down-option-myposting-job"
                      >
                        Modfiy the Order
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="drop-down-option-myposting-job"
                      >
                        Request Cancellation
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="mypost-other-details">
                  <div className="mypost_value">$300</div>
                  <div className="mypost_currency">USD</div>
                  <div className="mypost_bid">15 bid</div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};
export default MyPostingJob;
