import React from "react";
import "./Profile.scss";
import AboutUser from "./AboutUser";

const Profile = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-4">
            <AboutUser />
          </div>
          <div className="col-md-8">
            <div className="profile-reviews-con">
              <div className="profile-reviews-inner-con">
                <div className="profile-reviews-head-con">
                  <h1 className="profile-reviews-head">
                    <b>Reviews</b>
                  </h1>
                </div>
              </div>
              <hr />
              <div className="profile-reviews-details-con">
                <div className="profile-reviews-details-subcon">
                  <div className="profile-reviews-details-head-con">
                    <h1 className="profile-reviews-details-title">
                      <b>Math Expert</b>
                    </h1>
                    <h1 className="profile-reviews-details-price">$500</h1>
                  </div>
                  <div className="profile-reviews-details-rating-con">
                    <div className="profile-reviews-rate">
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
                    <div className="rate_value">
                      <b>(4.5)</b>
                    </div>
                    <div className="review-dates">
                      10 Sep 2020 - 15 Sep 2020
                    </div>
                  </div>
                  <div className="review-details-con">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh vitae sit magna nec suspendisse id lectus. Velit
                    adipiscing id magna pretium in in. Dictum ac diam id
                    adipiscing donec dictum et, eu cras.
                  </div>
                  <hr />
                </div>
              </div>
              <div className="profile-reviews-details-con">
                <div className="profile-reviews-details-subcon">
                  <div className="profile-reviews-details-head-con">
                    <h1 className="profile-reviews-details-title">
                      <b>Math Expert</b>
                    </h1>
                    <h1 className="profile-reviews-details-price">$500</h1>
                  </div>
                  <div className="profile-reviews-details-rating-con">
                    <div className="profile-reviews-rate">
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
                    <div className="rate_value">
                      <b>(4.5)</b>
                    </div>
                    <div className="review-dates">
                      10 Sep 2020 - 15 Sep 2020
                    </div>
                  </div>
                  <div className="review-details-con">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nibh vitae sit magna nec suspendisse id lectus. Velit
                    adipiscing id magna pretium in in. Dictum ac diam id
                    adipiscing donec dictum et, eu cras.
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
