import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Courses.scss";

const Courses = () => {
  return (
    <section className="favorites">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="favoriteSearchBox">
              <Form>
                <input
                  placeholder="Search by school, subject, course, or keyword"
                  aria-label="Search"
                  type="search"
                  className=" search_favorites form-control-favorites"
                />
                <div className="search_favorites_icon"></div>
              </Form>
            </div>
          </div>
          <div className="col-md-5">
            <div className="container option-select-con">
              <span className="sort-text"> Sort by </span>
              <div className="fav-list-drop">
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
      <div className="fav-content container">
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
                Question type 1 Lorem ipsum dolor sit amet, consectetur......
              </span>
            </div>
            <div className="profile-person-content-profile-rating">
              <div className="profile-rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
              <div className="rate_value">(5)</div>
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
            <div className="course-btn-con">
              <Link to="./studyresourcesdetail">
                <button className="course-btn-con-btn my-btn">
                  <img
                    src="./images/white-eye.svg"
                    alt="white-eye"
                    className="course-btn-con-btn--img"
                  />
                  Quick view
                </button>
              </Link>
              <button className="course-btn-con-btn">
                <img
                  src="./images/white-cart.svg"
                  alt="white-cart"
                  className="course-btn-con-btn--img"
                />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="currncy-box">
          <p className="bid-price">
            <b>$300</b>
          </p>
          <span className="currency-type">USD</span>
          <div className="favorite-icon-con">
            <img
              className="favorite-icon"
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
export default Courses;
