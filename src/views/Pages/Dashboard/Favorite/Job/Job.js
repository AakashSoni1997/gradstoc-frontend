import React from "react";
import { Badge, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Job.scss";

const Job = () => {
  return (
    <section className="favorites">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="jobSearchBox">
              <Form>
                <input
                  placeholder="Search by school, subject, course, or keyword"
                  aria-label="Search"
                  type="search"
                  className=" search_job form-control-favorites"
                />
                <div className="search_job_icon"></div>
              </Form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="container option-select-con">
              <span className="sort-text"> Sort by </span>
              <div className="job-list-drop">
                <Form.Select aria-label="Default select example">
                  <option value="1">Latest</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="job-content container">
        <Link to="/browsejobbid">
          <div className="text-con">
            <div className="head-con">
              <span className="heading">
                Question type 1 Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </span>
              <span className="timer">( 2 days left)</span>
            </div>
            <div className="para-con">
              <p className="text-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                lacus eget facilisis lacus. Eleifend quis viverra pharetra orci
                in vestibulum vel. Id egestas a lectus sagittis sed. Justo
                dictumst nulla elementum donec scelerisque in penatibus sem
                rutrum.
              </p>
            </div>
            <div className="tag-type">
              <Badge className="tag">Tag 1</Badge>
              <Badge className="tag">Tag 2</Badge>
              <Badge className="tag">Tag 3</Badge>
            </div>
          </div>
        </Link>
        <div className="currncy-box">
          <p className="bid-price">
            <b>$300</b>
          </p>
          <span className="currency-type">USD</span>
          <p className="no-bid">
            <b>15 bid</b>
          </p>
          <div className="job-icon-con">
            <img
              className="job-icon"
              src="./images/favorites.svg"
              alt="favroites"
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};
export default Job;
