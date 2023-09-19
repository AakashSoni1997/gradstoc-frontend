import React from "react";
import "../Jobs/MyPostingJob.scss";
import "../Jobs/PastWork.scss";
import "../Jobs/CurrentWork.scss";
import "./Completedjob.scss";
import AboutUser from "./AboutUser";

const Completedjob = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-4">
            <AboutUser />
          </div>
          <div className="col-md-8">
            <div className="completed-job-reviews-con">
              <div></div>
              <div className="completed-job-reviews-inner-con">
                <div className="completed-job-reviews-head-con">
                  <h1 className="completed-job-reviews-head">
                    <b>Completed Jobs</b>
                  </h1>
                </div>
              </div>
              <hr />
              <div className="compeleted-job-text-con">
                <div className="row">
                  <div className="col-md-11">
                    <div className="currentwork-content">
                      <p className="profile-mypost-qus-head current-head-que">
                        <b>
                          Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3 Bibl
                          104 Bibl 104...
                        </b>
                      </p>
                      <div className="completed-job-rating-con">
                        <div className="completed_book_rating">
                          <div className="completed-rate">
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
                          <div className="rate_value">
                            <b>(4.5)</b>
                          </div>
                        </div>
                        <div className="completes-job-date-con">
                          Aug 15, 2022 - Aug 17, 2022
                        </div>
                      </div>
                      <div className="completed-job-price-budget-con">
                        <div className="completed-job-price">
                          <b>$300</b>
                        </div>
                        <div className="completed-job-budget">
                          <b>Fix Budget</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1">
                    <div className="container profile-my-custom-post">
                      <img
                        src="./images/share-img.svg"
                        alt="share icon"
                        className="profile-my-custom-post__img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <hr className="hr-study-resource" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Completedjob;
