import React from "react";
import "./PurchaseCourse.scss";
import { Title } from "../../Components/Title/Title";

const PurchaseCourse = () => {
  return (
    <>
      <section>
        <div className="purchase-course-section">
          <div className="purchase-course-section__head-con">
            <Title headtitle="Purchase Course" />
          </div>
          <div className="purchase-course-section__content-con">
            <div className="purchase-course-section__content-con__img-con">
              <img
                src="./images/book_cover.png"
                alt="book cover"
                className="purchase-course-section__content-con__img-con__img"
              />
            </div>
            <div className="purchase-course-section__content-con__details-con">
              <div className="purchase-course-section__content-con__details-con__head-con">
                <div className="purchase-course-section__content-con__details-con__head-con__head">
                  <b>
                    Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl 104
                    Quiz 4, Bibl 104 Quiz 5...
                  </b>
                </div>
                <div className="purchase-course-section__content-con__details-con__head-con__text">
                  Bibl 104 Quiz 1 Question 1 According to the readings the Old
                  Testament canon was completed after the time of Ezra and
                  Nehemiah. Question 2 According to Fee and Stuart's analysis
                  God is the hero o...
                </div>
              </div>
              <div className="purchase-course-section__content-con__details-con__price-con">
                <div className="purchase-course-section__content-con__details-con__price-con__price">
                  <b>$300</b>
                </div>
                <div className="purchase-course-section__content-con__details-con__price-con__currency">
                  USD
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
export default PurchaseCourse;
