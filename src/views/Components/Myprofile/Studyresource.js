import React from "react";
import "./Studyresource.scss";
import AboutUser from "./AboutUser";
import { Dropdown } from "react-bootstrap";

const Studyresource = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <AboutUser />
        </div>
        <div className="col-md-8">
          <div className="study_resource-profile-con">
            <div className="border-inner-con">
              <div className="study_resource-profile-inner-con">
                <div className="study_resource-profile-head-con">
                  <h1 className="study_resource-profile-head">
                    <b>Study Resources</b>
                  </h1>
                </div>
              </div>
            </div>
            <ul className="study_resource-profile-list">
              <li className="study_resource-profile-list-item">
                <a href="#/action" className="a-tag-color">
                  <div className="study_resource-profile_study_book">
                    <div className="study_resource-profile_book_cover">
                      <img src="./images/book_cover.png" alt="book cover" />
                    </div>
                    <div className="study_resource-profile_book_des">
                      <ul className="study_resource-list">
                        <li className="study_resource-profile_book_des-list-item">
                          <div className="study_resource-profile_book_title">
                            Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3...
                          </div>
                        </li>
                        <li className="study_resource-profile_book_des-list-item">
                          <div className="study_resource-profile_book_rating">
                            <div className="study_resource-profile_book_rate">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                value="5"
                              />
                              <label htmlFor="star5" title="text">
                                5 stars
                              </label>
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                value="4"
                              />
                              <label htmlFor="star4" title="text">
                                4 stars
                              </label>
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                value="3"
                              />
                              <label htmlFor="star3" title="text">
                                3 stars
                              </label>
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                value="2"
                              />
                              <label htmlFor="star2" title="text">
                                2 stars
                              </label>
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                value="1"
                              />
                              <label htmlFor="star1" title="text">
                                1 star
                              </label>
                            </div>
                            <div className="rate_value">(4.5)</div>
                          </div>
                        </li>
                        <li className="study_resource-profile_book_des-list-item">
                          <div className="study_resource-profile_book_para">
                            Bibl 104 Quiz 1 Question 1 According to the readings
                            the Old Testament canon was completed ...
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
                <div className="book_price">
                  <ul className="study_resource-list">
                    <li className="dropdown_li">
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <div className="price_option">
                            <img src="./images/dot_icon.svg" alt="dot" />
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#/action-1"
                            className=" color-bold drop-down-option-myposting-job"
                          >
                            Add
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-2"
                            className=" color-bold drop-down-option-myposting-job"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-3"
                            className=" color-bold drop-down-option-myposting-job"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="study_resource-profile_price_amount">
                      <div className="study_resource-profile_price_value">
                        $300
                      </div>
                      <div className="study_resource-profile_price_currency">
                        USD
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <hr className="hr-study-resource" />
              <li className="study_resource-profile-list-item">
                <a href="#/action" className="a-tag-color">
                  <div className="study_resource-profile_study_book">
                    <div className="study_resource-profile_book_cover">
                      <img src="./images/book_cover.png" alt="book cover" />
                    </div>
                    <div className="study_resource-profile_book_des">
                      <ul className="study_resource-list">
                        <li className="study_resource-profile_book_des-list-item">
                          <div className="study_resource-profile_book_title">
                            Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3...
                          </div>
                        </li>
                        <li className="study_resource-profile_book_des-list-item">
                          <div className="study_resource-profile_book_rating">
                            <div className="study_resource-profile_book_rate">
                              <input
                                type="radio"
                                id="star5"
                                name="rate"
                                value="5"
                              />
                              <label htmlFor="star5" title="text">
                                5 stars
                              </label>
                              <input
                                type="radio"
                                id="star4"
                                name="rate"
                                value="4"
                              />
                              <label htmlFor="star4" title="text">
                                4 stars
                              </label>
                              <input
                                type="radio"
                                id="star3"
                                name="rate"
                                value="3"
                              />
                              <label htmlFor="star3" title="text">
                                3 stars
                              </label>
                              <input
                                type="radio"
                                id="star2"
                                name="rate"
                                value="2"
                              />
                              <label htmlFor="star2" title="text">
                                2 stars
                              </label>
                              <input
                                type="radio"
                                id="star1"
                                name="rate"
                                value="1"
                              />
                              <label htmlFor="star1" title="text">
                                1 star
                              </label>
                            </div>
                            <div className="rate_value">(4.5)</div>
                          </div>
                        </li>
                        <li className="study_resource-profile_book_des-list-item">
                          <div className="study_resource-profile_book_para">
                            Bibl 104 Quiz 1 Question 1 According to the readings
                            the Old Testament canon was completed ...
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </a>
                <div className="book_price">
                  <ul className="study_resource-list">
                    <li className="dropdown_li">
                      <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          <div className="price_option">
                            <img src="./images/dot_icon.svg" alt="dot" />
                          </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item
                            href="#/action-1"
                            className=" color-bold drop-down-option-myposting-job"
                          >
                            Add
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-2"
                            className=" color-bold drop-down-option-myposting-job"
                          >
                            Edit
                          </Dropdown.Item>
                          <Dropdown.Item
                            href="#/action-3"
                            className=" color-bold drop-down-option-myposting-job"
                          >
                            Delete
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                    <li className="study_resource-profile_price_amount">
                      <div className="study_resource-profile_price_value">
                        $300
                      </div>
                      <div className="study_resource-profile_price_currency">
                        USD
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <hr className="hr-study-resource" />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studyresource;
