import React from "react";
import "../Dashboard/Favorite/Courses/Courses.scss";
import "./Cart.scss";
import { Title } from "../../Components/Title/Title";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-8">
            <div className="cart-main-sec">
              <Title headtitle="Cart" />
              <div className="fav-content container">
                <a href="/browsejobbid">
                  <div className="fav-content__with-img-con">
                    <div className="fav-content__img-con">
                      <img
                        src="./images/book_cover.png"
                        alt="cover"
                        className="fav-content__img-con__img"
                      />
                    </div>
                    <div className="text-con text-con-2">
                      <div className="head-con">
                        <span className="heading">
                          Question type 1 Lorem ipsum dolor sit amet,
                          consectetur......
                        </span>
                      </div>
                      <div className="profile-person-content-profile-rating">
                        <div className="profile-rate">
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
                      <div className="para-con">
                        <p className="text-para">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nunc lacus eget facilisis lacus. Eleifend quis
                          viverra pharetra orci in vestibulum vel.
                        </p>
                      </div>
                      <div className="course-btn-con">
                        <button className="course-btn-con-btn my-btn">
                          <img
                            src="./images/fav-white.svg"
                            alt="fav-white"
                            className="course-btn-con-btn--img"
                          />
                          Favourite
                        </button>
                        <button className="course-btn-con-btn">
                          <img
                            src="./images/del-white.svg"
                            alt="del-white"
                            className="course-btn-con-btn--img"
                          />
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="currncy-box">
                  <p className="bid-price">
                    <b>$300</b>
                  </p>
                  <span className="currency-type">USD</span>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="col-md-4">
            <div className="cart-main-sec">
              <Title headtitle="Delivery" />
              <div className="cart-main-sec__price-box">
                <div className="cart-main-sec__price-box__sub-total-con">
                  <div className="cart-main-sec__price-box__sub-total-con__sub-total">
                    <div className="cart-main-sec__price-box__sub-total-con__sub-total__text">
                      <b>Subtotal</b>
                    </div>
                    <div className="cart-main-sec__price-box__sub-total-con__sub-total__price">
                      <b>$300</b>
                    </div>
                  </div>
                  <div className="cart-main-sec__price-box__sub-total-con__discount">
                    <div className="cart-main-sec__price-box__sub-total-con__discount__text">
                      Discount
                    </div>
                    <div className="cart-main-sec__price-box__sub-total-con__discount__price">
                      (20%) - $150.00
                    </div>
                  </div>
                  <div className="cart-main-sec__price-box__sub-total-con__delivery">
                    <div className="cart-main-sec__price-box__sub-total-con__delivery__text">
                      Delivery
                    </div>
                    <div className="cart-main-sec__price-box__sub-total-con__delivery__price">
                      $5.00
                    </div>
                  </div>
                  <div className="cart-main-sec__price-box__sub-total-con__Tax">
                    <div className="cart-main-sec__price-box__sub-total-con__Tax__text">
                      Tax
                    </div>
                    <div className="cart-main-sec__price-box__sub-total-con__Tax__price">
                      + $145.00
                    </div>
                  </div>
                  <hr />
                  <div className="cart-main-sec__price-box__sub-total-con__Total">
                    <div className="cart-main-sec__price-box__sub-total-con__Total__text">
                      <b>Total</b>
                    </div>
                    <div className="cart-main-sec__price-box__sub-total-con__Total__price">
                      <b>$300</b>
                    </div>
                  </div>
                </div>
                <div className="cart-main-sec__price-box__check-out-btn">
                  <Link to="/checkout">
                    <button className="cart-main-sec__price-box__check-out-btn__btn">
                      Process Check Out
                    </button>
                  </Link>
                </div>
                <div className="cart-main-sec__price-box__continue-btn-con">
                  <button className="cart-main-sec__price-box__continue-btn-con__btn">
                    Continue shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Cart;
