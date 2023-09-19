import React from "react";
import "./CustomSelect.scss";

const CustomSelect = () => {
  // var selectField = document.getElementById("selectField");
  // var selectText = document.getElementById("selectText");
  // var options = document.getElementsByClassName("list-options")
  // var list = document.getElementById("list")

  // list.onclick = function () {
  //     list.classList.toggle("hide");
  // }

  // for (var option of options) {
  //     option.onclick = function () {
  //         selectText.innerHTML = this.textContent;
  //         list.classList.toggle("hide");
  //     }
  // }
  return (
    <>
      <div className="selector">
        <div id="selectField">
          <p className="placeholder-text" id="selectText">
            View All Coupon
          </p>
          <img src="./images/downarrow.svg" alt="down arrow" />
        </div>
        <ul id="list" className="hide">
          <li className="list-options">
            <div className="discount-img-text-con">
              <img src="./images/percentage.png" alt="discount" />
              <div className="discount-text-con">
                <div className="discount-text-con--head">
                  Save $10 for this order
                </div>
                <div className="discount-text-con--text">
                  Code:- 8649 3857 9876 9887
                </div>
              </div>
            </div>
          </li>
          <li className="list-options">
            <div className="discount-img-text-con">
              <img src="./images/percentage.png" alt="discount" />
              <div className="discount-text-con">
                <div className="discount-text-con--head">
                  <b>Save $10 for this order</b>
                  <br />
                  Code:- 8649 3857 9876 9887
                </div>
              </div>
            </div>
          </li>
          <li className="list-options">
            <div className="discount-img-text-con">
              <img src="./images/percentage.png" alt="discount" />
              <div className="discount-text-con">
                <div className="discount-text-con--head">
                  Save $10 for this order
                </div>
                <div className="discount-text-con--text">
                  Code:- 8649 3857 9876 9887
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default CustomSelect;
