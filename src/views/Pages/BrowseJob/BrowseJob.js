import React from "react";
import "./BrowseJob.scss";
import { Form, Badge } from "react-bootstrap";

const BrowseJob = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="browsejob-left-side-con">
              <div className="browsejob-left-side-inner-con">
                <div className="browsejob-filter-head-con">
                  <h1 className="browsejob-filter-head">Show only</h1>
                  <div className="browsejob-check-box-con form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label title="" className="form-check-label">
                      Writing services
                    </label>
                  </div>
                </div>
                <hr />
                <div className="browsejob-filter-option-con">
                  <div className="browsejob-filter-option-head">
                    Filter by school or course
                  </div>
                  <div className="browsejob-filter-option-list-con">
                    <div className="browsejob-filter-option-school-con">
                      <Form.Select aria-label="Default select example">
                        <option value="1">School</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="browsejob-filter-option-subject-con">
                      <Form.Select>
                        <option value="1">subject</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                    <div className="browsejob-filter-option-course-con">
                      <Form.Select>
                        <option value="1">course</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="browsejob-filter-location-con">
                  <div className="browsejob-filter-option-head">Location</div>
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
                <hr />
                <div className="browsejob-filter-buyer-rating-con">
                  <div className="browsejob-filter-option-head">
                    Buyer Rating
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
                <hr />
                <div className="browsejob-filter-budget-con">
                  <div className="browsejob-filter-option-head">Budget</div>
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
                <hr />
                <div className="browse-job-allquestion-con">
                  <a href="/browsejobbid">
                    <div className="browse-job-allquestion-text-con">
                      <div className="browse-job-allquestion-head">
                        <b>
                          Question type 1 Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.
                        </b>
                        ( 2 days left)
                      </div>
                      <div className="browse-job-allquestion-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc lacus eget facilisis lacus. Eleifend quis viverra
                        pharetra orci in vestibulum vel. Id egestas a lectus
                        sagittis sed. Justo dictumst nulla elementum donec
                        scelerisque in penatibus sem rutrum.
                      </div>
                      <div className="browse-job-allquestion-tags">
                        <Badge className="tag">Tag 1</Badge>
                        <Badge className="tag">Tag 2</Badge>
                        <Badge className="tag">Tag 3</Badge>
                      </div>
                    </div>
                  </a>
                  <div className="browse-job-allquestion-price-con">
                    <div className="browse-job-allquestion-price">
                      <b>$300</b>
                    </div>
                    <div className="browse-job-allquestion-currency">USD</div>
                    <div className="browse-job-allquestion-bid">
                      <b>15 Bids</b>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BrowseJob;
