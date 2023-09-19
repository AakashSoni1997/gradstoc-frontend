import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Pages/Authentication/Authentication.scss";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "./Document.scss";
import Pagination from "../Pagination/Pagination";

const Document = () => {
  return (
    <>
      <div className="study_resource">
        <div className="content_header title_left_right">
          <div className="content_title">Documents</div>
          <div className="content_title_right">
            <Link to="/uploadstudyresource">
              <button className="study-resouces-btn">Upload</button>
            </Link>
          </div>
        </div>
        <ul className="study_resource-list">
          {/* <BookSingle/> */}

          <li className="study_resource-list-item">
            <Link to="/studyresourcesdetail" className="a-tag-color">
              <div className="study_book">
                <div className="book_cover">
                  <img src="./images/book_cover.png" alt="cover" />
                </div>
                <div className="book_des">
                  <ul className="study_resource-list">
                    <li className="study_resource-list-item">
                      <div className="book_title">
                        Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl
                        104 Quiz 4, Bibl 104 Quiz 5...
                      </div>
                    </li>
                    <li className="study_resource-list-item">
                      <div className="book_rating">
                        <div className="rate">
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
                    <li className="study_resource-list-item">
                      <div className="book_para">
                        Bibl 104 Quiz 1 Question 1 According to the readings the
                        Old Testament canon was completed after the time of Ezra
                        and Nehemiah. Question 2 According to Fee and Stuart's
                        analysis God is the hero o...
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <div className="book_price">
              <ul className="study_resource-list">
                <li className="dropdown_li">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <div className="price_option">
                        <img src="./images/dot_icon.svg" alt="cover" />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
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
                <li className="price_amount">
                  <div className="price_value">$300</div>
                  <div className="price_currency">USD</div>
                </li>
              </ul>
            </div>
          </li>

          <li className="study_resource-list-item">
            <a href="/studyresourcesdetail" className="a-tag-color">
              <div className="study_book">
                <div className="book_cover">
                  <img src="./images/book_cover.png" alt="cover" />
                </div>
                <div className="book_des">
                  <ul className="study_resource-list">
                    <li className="study_resource-list-item">
                      <div className="book_title">
                        Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl
                        104 Quiz 4, Bibl 104 Quiz 5...
                      </div>
                    </li>
                    <li className="study_resource-list-item">
                      <div className="book_rating">
                        <div className="rate">
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
                    <li className="study_resource-list-item">
                      <div className="book_para">
                        Bibl 104 Quiz 1 Question 1 According to the readings the
                        Old Testament canon was completed after the time of Ezra
                        and Nehemiah. Question 2 According to Fee and Stuart's
                        analysis God is the hero o...
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
                        <img src="./images/dot_icon.svg" alt="cover" />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2" className="color-bold">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className="color-bold">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="price_amount">
                  <div className="price_value">$300</div>
                  <div className="price_currency">USD</div>
                </li>
              </ul>
            </div>
          </li>

          <li className="study_resource-list-item">
            <a href="/studyresourcesdetail" className="a-tag-color">
              <div className="study_book">
                <div className="book_cover">
                  <img src="./images/book_cover.png" alt="cover" />
                </div>
                <div className="book_des">
                  <ul className="study_resource-list">
                    <li>
                      <div className="book_title">
                        Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl
                        104 Quiz 4, Bibl 104 Quiz 5...
                      </div>
                    </li>
                    <li className="study_resource-list-item">
                      <div className="book_rating">
                        <div className="rate">
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
                    <li className="study_resource-list-item">
                      <div className="book_para">
                        Bibl 104 Quiz 1 Question 1 According to the readings the
                        Old Testament canon was completed after the time of Ezra
                        and Nehemiah. Question 2 According to Fee and Stuart's
                        analysis God is the hero o...
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
                        <img src="./images/dot_icon.svg" alt="cover" />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-2" className="color-bold">
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className="color-bold">
                        Delete
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                <li className="price_amount">
                  <div className="price_value">$300</div>
                  <div className="price_currency">USD</div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <Pagination />
      </div>
    </>
  );
};

export default Document;
