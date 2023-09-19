import React from "react";
import "./MyPostingJob.scss";
import "./CurrentWork.scss";

const CurrentWork = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="container my-currentwork-con">
                <div className="currentwork-cover">
                  <img src="./images/book_cover.png" alt="Cover" />
                </div>
                <div className="currentwork-content">
                  <p className="mypost-qus-head current-head-que">
                    <b>
                      Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl 104
                      Quiz 4, Bibl 104 Quiz 5...
                    </b>
                  </p>
                  <div className="currentwork_book_rating">
                    <div className="currentwork-rate">
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
                  <p className="mypost-qus-text">
                    Bibl 104 Quiz 1 Question 1 According to the readings the Old
                    Testament canon was completed after the time of Ezra and
                    Nehemiah. Question 2 According to Fee and Stuart's analysis
                    God is the hero o...
                  </p>
                  <div className="download-watch-con">
                    <div className="watch-con">
                      <img src="./images/watch.svg" alt="watch" />
                      <div className="watchInNumber">500 View</div>
                    </div>
                    <div className="download-con">
                      <img src="./images/download.svg" alt="watch" />
                      <div className="downloadInNumber">500 downloads</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="container my-custom-post">
                <div className="mypost-other-details">
                  <div className="mypost_value">$300</div>
                  <div className="mypost_currency">USD</div>
                </div>
                <div className="mycurrent-job-status-con">
                  <div className="mycurrent-job-status">
                    <b>LIVE</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};
export default CurrentWork;
