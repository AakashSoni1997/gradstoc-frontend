import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Pages/Authentication/Authentication.scss";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Flashcard.scss";
import Pagination from "../Pagination/Pagination";

const Flashcard = () => {
  return (
    <>
      <div className="study_resource">
        <div className="content_header title_left_right">
          <div className="content_title">Flashcards</div>
          <div className="content_title_right">
            <Link to="/createflashcard">
              <button className="flashcard-cretea-btn">Create</button>
            </Link>
          </div>
        </div>
        <ul>
          {/* <BookSingle/> */}
          <li className="study_resource-list-item">
            <Link to="/flashcarddetail" className="a-tag-color">
              <div className="study_book">
                <div className="book_cover">
                  <img src="./images/flashcard.png" alt="flash card" />
                </div>
                <div className="book_des">
                  <ul>
                    <li className="study_resource-list-item">
                      <div className="book_title">Flashcard style type 1</div>
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
                      <div className="terms_in_set">6 Terms in set</div>
                    </li>
                  </ul>
                </div>
              </div>
            </Link>
            <div className="book_price">
              <ul>
                <li className="dropdown_li">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <div className="price_option">
                        <img src="./images/dot_icon.svg" alt="dots" />
                      </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        href="#/action-2"
                        className="color-bold drop-down-option-myposting-job"
                      >
                        Edit
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="#/action-3"
                        className="color-bold drop-down-option-myposting-job"
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
            <div className="study_book">
              <div className="book_cover">
                <img src="./images/flashcard.png" alt="flash card" />
              </div>
              <div className="book_des">
                <ul>
                  <li className="study_resource-list-item">
                    <div className="book_title">Flashcard style type 1</div>
                  </li>
                  <li className="study_resource-list-item">
                    <div className="book_rating">
                      <div className="rate">
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
                      <div className="rate_value">(4.5)</div>
                    </div>
                  </li>
                  <li className="study_resource-list-item">
                    <div className="terms_in_set">6 Terms in set</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_price">
              <ul>
                <li className="dropdown_li">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <div className="price_option">
                        <img src="./images/dot_icon.svg" alt="dots" />
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
            <div className="study_book">
              <div className="book_cover">
                <img src="./images/flashcard.png" alt="flash card" />
              </div>
              <div className="book_des">
                <ul>
                  <li className="study_resource-list-item">
                    <div className="book_title">Flashcard style type 1</div>
                  </li>
                  <li className="study_resource-list-item">
                    <div className="book_rating">
                      <div className="rate">
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
                      <div className="rate_value">(4.5)</div>
                    </div>
                  </li>
                  <li>
                    <div className="terms_in_set">6 Terms in set</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="book_price">
              <ul>
                <li className="dropdown_li">
                  <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic">
                      <div className="price_option">
                        <img src="./images/dot_icon.svg" alt="dots" />
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

export default Flashcard;
