import React from "react";
import "../BrowseJob/BrowseJob.scss";
import "./HireAnExpert.scss";
import { Form, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const HireAnExpert = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="browsejob-left-side-con">
              <div className="browsejob-left-side-inner-con">
                <div className="browsejob-filter-option-con hire-an-expert-filter-option-con">
                  <div className="browsejob-filter-option-head ">
                    <b>Category</b>
                  </div>
                  <div className="browsejob-filter-option-list-con">
                    <div className="browsejob-filter-option-school-con">
                      <Form.Select aria-label="Default select example">
                        <option value="1">Select</option>
                        <option value="2">Category 1</option>
                        <option value="3">Category 2</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="browsejob-left-side-inner-con">
                <div className="browsejob-filter-location-con">
                  <div className="browsejob-filter-option-head">
                    <b>Location</b>
                  </div>
                  <div className="browsejob-filter-option-list-con">
                    <div className="browsejob-filter-option-country-con">
                      <Form.Select>
                        <option value="1">Country</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="browsejob-filter-option-state-con">
                      <Form.Select>
                        <option value="1">state</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="browsejob-left-side-inner-con">
                <div className="browsejob-filter-buyer-rating-con">
                  <div
                    className="browsejob-filter-option-head
                                     hire-an-expert-filter-option-head
                                    "
                  >
                    <b>Buyer Rating</b>
                  </div>
                  <div className="browsejob-filter-buyer-rating-check-box-con">
                    <div className="browsejob-star">
                      <input type="checkbox" className="form-check-input" />
                      <label title="" className="form-check-label">
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                      </label>
                    </div>
                    <div className="browsejob-star">
                      <input type="checkbox" className="form-check-input" />
                      <label title="" className="form-check-label">
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                      </label>
                    </div>
                    <div className="browsejob-star">
                      <input type="checkbox" className="form-check-input" />
                      <label title="" className="form-check-label">
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                      </label>
                    </div>
                    <div className="browsejob-star">
                      <input type="checkbox" className="form-check-input" />
                      <label title="" className="form-check-label">
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                      </label>
                    </div>
                    <div className="browsejob-star star-five">
                      <input type="checkbox" className="form-check-input" />
                      <label title="" className="form-check-label">
                        <img src="./images/star.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                        <img src="./images/starLight.svg" alt="star" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="browsejob-left-side-inner-con">
                <div className="browsejob-filter-budget-con">
                  <div className="browsejob-filter-option-head">
                    <b>Budget</b>
                  </div>
                  <div className="browsejob-check-box-con form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label title="" className="form-check-label">
                      Any Budget
                    </label>
                  </div>
                  <div className="browsejob-check-box-con form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label title="" className="form-check-label">
                      Less then $25
                    </label>
                  </div>
                  <div className="browsejob-check-box-con form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label title="" className="form-check-label">
                      $25 - $50
                    </label>
                  </div>
                  <div className="browsejob-check-box-con form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label title="" className="form-check-label">
                      $50 - $100
                    </label>
                  </div>
                  <div className="browsejob-check-box-con form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label title="" className="form-check-label">
                      $100 +
                    </label>
                  </div>
                  <div className="browsejob-dropdown-box">
                    <div className="browse-options">
                      <Form.Select aria-label="Default select example">
                        <option value="1">$Min</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="browse-options">
                      <Form.Select>
                        <option value="1">$Max</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Link to="/hire-an-expert-profile">
              <div className="browsejob-left-side-con">
                <div className="browsejob-left-side-inner-con">
                  <div className="browsejob-SearchBox">
                    <div className=" browsejob-SearchBox-con">
                      <Form>
                        <input
                          placeholder="Search by school, subject, course, or keyword"
                          aria-label="Search"
                          type="search"
                          className=" search_browsejob form-control-favorites"
                        />
                        <span className="allresults">15,000 Results</span>
                        <div className="search_browsejob_icon"></div>
                      </Form>
                    </div>
                    <div className=" browsejob-Searchshort-con">
                      <div className=" browsejob-Searchshort-subcon">
                        <span className="sortby">Sort by</span>
                        <div className=" browsejob-Searchshort-list">
                          <Form.Select>
                            <option>Latest</option>
                            <option> two select</option>
                            <option>three select</option>
                          </Form.Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="browsejob-left-side-inner-con">
                  <div className="hire-an-expert-user-detail-con">
                    <div className="hire-an-expert-user-detail-con-inner">
                      <div className="hire-an-expert-user-detail-con__user-profile-con">
                        <div className="hire-an-expert-user-detail-con__user-profile-con__img-con">
                          <img
                            className="hire-an-expert-user-detail-con__user-profile-con__img-con__img"
                            src="./images/buyerpic.svg" alt="buyerpic"
                          />
                        </div>
                        <div className="hire-an-expert-user-detail-con__user-profile-con__text-con">
                          <div className="hire-an-expert-user-detail-con__user-profile-con__text-con__head">
                            <b>User name type 1</b>
                          </div>
                          <div className="hire-an-expert-user-detail-con__user-profile-con__text-con__expert">
                            <b>Expert In Designing</b>
                          </div>
                          <div className="hire-an-expert-user-detail-con__user-profile-con__text-con__city">
                            Canada
                          </div>
                        </div>
                      </div>
                      <div className="hire-an-expert-user-detail-con__user-available-btn-con">
                        <button className="hire-an-expert-user-detail-con__user-available-btn-con__btn">
                          Available Now
                        </button>
                      </div>
                    </div>
                    <div className="hire-an-expert-user-other-detail-con">
                      <div className="hire-an-expert-user-other-detail-con__earned">
                        <b>$50k +</b> earned
                      </div>
                      <div className="hire-an-expert-user-other-detail-con__job-sucess">
                        <b>95%</b> Job Success
                      </div>
                      <div className="hire-an-expert-user-other-detail-con__rating">
                        <b>5.4</b> Out of 5 Rating
                      </div>
                    </div>
                    <div className="hire-an-expert-user-text-detail-con">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc lacus eget facilisis lacus. Eleifend quis viverra
                      pharetra orci in vestibulum vel. Id egestas a lectus
                      sagittis sed. Justo dictumst nulla elementum donec
                      scelerisque in penatibus sem rutrum.
                    </div>
                    <div className="hire-an-expert-allquestion-tags">
                      <Badge className="tag">Tag 1</Badge>
                      <Badge className="tag">Tag 2</Badge>
                      <Badge className="tag">Tag 3</Badge>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default HireAnExpert;
