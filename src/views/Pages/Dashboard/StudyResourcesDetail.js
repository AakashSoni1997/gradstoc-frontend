import React from "react";
import "./StudyResourcesDetail.scss";

const StudyResourcesDetail = () => {
  return (
    <>
      <section>
        <div>
          <div className="row">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md">
                  <div className="studydetailLeft-con">
                    <div className="container studydetail-person-con">
                      <div className="profile-pic-con">
                        <img src="./images/profile-pic.png" alt="profile pic" />
                      </div>
                      <div className="studyperson-details">
                        <h1 className="person-title">
                          <b>Solution 100</b>
                        </h1>
                        <p className="person-country">India</p>
                        <div className="person-rate-con">
                          <div className="person-rate">
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
                          <div className="rate_value">(5)</div>
                        </div>
                        <div className="person-membership-record">
                          <p className="person-membership-text">
                            Member since : <b>1 year</b>
                          </p>
                          <p className="person-membership-text2">
                            Total Resources Sold : <b>130</b>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="personsub-details-con">
                      <div className="personsub-details-one">
                        <p className="person-subject-text">
                          <b>School / University</b>
                        </p>
                        <p className="person-school-text">Walden University</p>
                      </div>
                      <div className="personsub-details-two">
                        <p className="person-subject-text">
                          <b>Subject</b>
                        </p>
                        <p className="person-school-text">Maths</p>
                      </div>
                      <div className="personsub-details-three">
                        <p className="person-subject-text">
                          <b>Course</b>
                        </p>
                        <p className="person-school-text">Bibl 104</p>
                      </div>
                      <div className="personsub-details-four">
                        <p className="person-subject-text">
                          <b>Type </b>
                        </p>
                        <p className="person-school-text">Answers</p>
                      </div>
                      <div className="personsub-details-five">
                        <p className="person-subject-text">
                          <b>Total Pages</b>
                        </p>
                        <p className="person-school-text">125</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md">
                  <div className="studydetailLeft-con">
                    <div className="studydetail-ans-con">
                      <p className="studydetail-ans-text">Answer</p>
                      <p className="studydetail-ans-head">
                        <b>
                          Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl
                          104 Quiz 4, Bibl 104 Quiz 5...
                        </b>
                      </p>
                      <p className="studydetail-ans-mytext">
                        BIBL 104 Quiz 2 / Liberty University BIBL 104 Quiz 2
                        (Already graded A)
                      </p>
                      <hr />
                      <div className="style-preview">
                        <p className="style-preview-text">
                          Preview 2 out of 7 pages
                        </p>
                      </div>
                      <hr />
                      <div className="study-question-list-con">
                        <ul className="study-question-lists">
                          <li className="studydetail-ans-text"> Answer</li>
                        </ul>
                        <p className="studydetail-ans-text">1 out of 1 point</p>
                        <h1>
                          <b>
                            Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3,
                            Bibl 104 Quiz 4, Bibl 104 Quiz 5...
                          </b>
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="studydetailLeft-con">
                <div className="studydetailright">
                  <h1 className="studydetailright-head">
                    <b>Study Smarter</b>
                  </h1>
                </div>
                <div className="studydetailright-bid">
                  <div className="studydetail-bid-con">
                    <h1 className="studydetail-bid-head">
                      <b>Put Bibl 104 Quiz 1 here</b>
                    </h1>
                    <div className="studydetail-bid-subcon">
                      <img src="./images/check-one.svg" alt="check" />
                      <p className="studydetail-bid-subcon-text">
                        Prepare for exams
                      </p>
                    </div>
                    <div className="studydetail-bid-subconone">
                      <img src="./images/check-one.svg" alt="check" />
                      <p className="studydetail-bid-subcon-text">
                        Conquer any course
                      </p>
                    </div>
                  </div>
                  <div className="studydetail-price">
                    <p className="studydetail-price-text">
                      <b>$8.99</b>
                    </p>
                    <div className="studydetail-price-img-book-mark-con">
                      <img
                        src="./images/bookMark.svg"
                        alt="Book Mark"
                        className="studydetail-price-img"
                      />
                    </div>
                    <div className="studydetail-price-img-book-mark-con">
                      <img
                        src="./images/heart-icon.png"
                        alt="Book Mark"
                        className="studydetail-price-img-heart"
                      />
                    </div>
                  </div>
                </div>
                <div className="studydetailright-addtocart">
                  <button className="cart-btn">Add To Cart</button>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md">
                  <div className="studydetailLeft-con">
                    <div className="studydetail-relative-con">
                      <h1 className="studydetail-relative-head">
                        <b>Related Material</b>
                      </h1>
                    </div>
                    <hr />
                    <div className="studydetail-relative-data">
                      <div className="studydetail-relative-imgcon">
                        <img src="./images/book_cover.png" alt=" thunb nail" />
                      </div>
                      <div className="studydetail-relative-text-con">
                        <h1 className="studydetail-relative-text-head">
                          <b>Bibl 104 Quiz 1,Bibl 104 Quiz...</b>
                        </h1>
                        <div className="person-rate-con">
                          <div className="person-rate">
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
                          <div className="rate_value">(5)</div>
                        </div>
                        <div className="studydetail-relative-text">
                          <b>$300 </b>USD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md">
              <div className="studydetailLeft-con">
                <div className="studydetailbottom-con">
                  <h1 className="studydetailbottom-haed">
                    <b>More from this member</b>
                  </h1>
                </div>
                <hr />
                <div className="studydetailbottom-more-con">
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                  <div className="studydetailbottom-more">
                    <img src="./images/book_cover.png" alt="thumb nail" />
                    <h1 className="studydetailbottom-more-head">
                      <b>Bibl 104 Quiz</b>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default StudyResourcesDetail;
