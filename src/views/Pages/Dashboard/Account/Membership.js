import React from "react";
import "./Membership.scss";

const Membership = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <div className="user-membership-con">
              <div className="user-membership-head-con">
                <div className="user-membership-head">
                  <b>Membership</b>
                </div>
              </div>
            </div>
            <hr />
            <div className="user-membership-card-con">
              <div className="row">
                <div className="col-md-3">
                  <div className="user-membership-cards">
                    <div className="user-membership-cards-type-plan">
                      <b>Free</b>
                    </div>
                    <div className="user-membership-cards-cost-per-month">
                      <b>Free $0 /mo</b>
                    </div>
                    <div className="user-membership-cards-permission-con">
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Free account
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Purchase resources
                        </div>
                      </div>
                    </div>
                    <div className="user-membership-cards-btn-con">
                      <button className="user-membership-cards-btn">
                        Free
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="user-membership-cards">
                    <div className="user-membership-cards-type-plan">
                      <b>Monthly</b>
                    </div>
                    <div className="user-membership-cards-cost-per-month">
                      <b>$9.99 /mo</b>
                    </div>
                    <div className="user-membership-cards-permission-con">
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          1 month of access
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Billed $9.99 every month
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Upload or create study resources
                        </div>
                      </div>
                    </div>
                    <div className="user-membership-cards-btn-month-con">
                      <button className="user-membership-cards-btn-month">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="user-membership-cards">
                    <div className="user-membership-cards-type-plan">
                      <b>Quarterly</b>
                    </div>
                    <div className="user-membership-cards-cost-per-month">
                      <b>$8.99 /mo</b>
                    </div>
                    <div className="user-membership-cards-permission-con">
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          3 months of access
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Billed $26.97 every 3 months
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Upload or create study resources
                        </div>
                      </div>
                    </div>
                    <div className="user-membership-cards-btn-3months-con">
                      <button className="user-membership-cards-btn-3months">
                        This is your Current Plan
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="user-membership-cards">
                    <div className="user-membership-cards-type-plan">
                      <b>Annual</b>
                    </div>
                    <div className="user-membership-cards-cost-per-month">
                      <b>$7.99 /mo</b>
                    </div>
                    <div className="user-membership-cards-permission-con">
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          12 months of access
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Billed $95.88 every 12 months
                        </div>
                      </div>
                      <div className="user-membership-cards-permission-sub-con">
                        <img
                          src="./images/right-tick.svg"
                          alt="tick mark"
                          className="user-membership-cards-permission-img"
                        />
                        <div className="user-membership-cards-permission-text">
                          Upload or create study resources
                        </div>
                      </div>
                    </div>
                    <div className="user-membership-cards-btn-12months-con">
                      <button className="user-membership-cards-btn-12months">
                        Choose Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="user-membership-btn-con">
              <a href="/upgrade-now">
                <button className="user-membership-btn">Continue</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Membership;
