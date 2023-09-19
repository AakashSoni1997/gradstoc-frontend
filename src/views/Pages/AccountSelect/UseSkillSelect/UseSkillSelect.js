import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GetCategoryList } from "../../../../redux/actions/jobPostAction";
import "../../../Components/TheHeader/Header.scss";
import "../UserSkill/UserSkill.scss";
import "./UseSkillSelect.scss";

const UserSkillSelect = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector(
    (state) => state.jobpost.category_list_success
  );

  useEffect(() => {
    dispatch(GetCategoryList());
  }, [dispatch]);

  const handleCategorySelect=(id)=>{
    
  }
  return (
    <>
      <div className="user-skill-main-con">
        <div className="user-skill-main-con-inner">
          <div className="user-skill-main-con__text-con">
            <div className="user-skill-main-con__text-con__text">
              <b>Skills</b>
            </div>
          </div>
          <div className="user-skill-main-con__progress-bar-con">
            <div className="user-skill-main-con__progress-bar-con__pro-bar pro-bar-active"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
            <div className="user-skill-main-con__progress-bar-con__pro-bar"></div>
          </div>
          <div className="user-skill-main-con__head-con">
            <div className="user-skill-main-con__head-con__text-con">
              <div className="user-skill-main-con__head-con__text-con__head">
                <b>Tell us your top skills</b>
              </div>
              <div className="user-skill-main-con__head-con__text-con__text">
                This helps us recommend jobs for you.
              </div>
            </div>
            <div className="user-skill-main-con__head-con__search-con">
              <div className="headerSearchBx">
                <input
                  placeholder="Search By ..."
                  aria-label="Search"
                  type="search"
                  className="me-2 user-skill-search_header form-control"
                />
                <div className="search_header_icon"></div>
              </div>
            </div>
          </div>
          <hr className="user-skill-hr" />
          <div className="user-skill-main-con__category-con">
            <div className="row">
              <div className="col-md-4">
                <div className="user-skill-main-con__category-con__select-category-con">
                  <div className="user-skill-main-con__category-con__select-category-con__head">
                    <b>Select a category</b>
                  </div>
                  <hr className="user-skill-hr" />
                  {categoryList.map((ele, index) => (
                    <>
                      <div onClick={()=>handleCategorySelect(ele.id)} className="user-skill-main-con__category-con__select-category-con__head--con">
                        <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                        {ele.category_name}
                        </div>
                        <img
                          src="./images/user-skill-arrow.svg"
                          alt="arrow"
                          className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                        />
                      </div>
                      <hr className="user-skill-hr" />
                    </>
                  ))}
                  {/* <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Business
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Medicine & Health
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Math
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Accounting
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Computer Science
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Engineering
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Education
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Psychology
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Biology
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Economics
                    </div>
                    <img
                      src="./images/user-skill-arrow.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div> */}
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-skill-main-con__category-con__no-select-category-con">
                  <div className="user-skill-main-con__category-con__no-select-category-con__head">
                    <b>Business category selected</b>
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Skill Type 1
                    </div>
                    <img
                      src="./images/tick.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-category-con__head--con">
                    <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
                      Skill Type 2
                    </div>
                    <img
                      src="./images/add.svg"
                      alt="arrow"
                      className="user-skill-main-con__category-con__select-category-con__head--con__arrow"
                    />
                  </div>
                  <hr className="user-skill-hr" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="user-skill-main-con__category-con__select-skill-con">
                  <div className="user-skill-main-con__category-con__select-skill-con__head">
                    <b>1 out of 2 skills selected</b>
                  </div>
                  <hr className="user-skill-hr" />
                  <div className="user-skill-main-con__category-con__select-skill-con__skill-head-con">
                    <div className="user-skill-main-con__category-con__select-skill-con__skill-head-con__head">
                      1542 jobs matching your skills
                    </div>
                    <div className="user-skill-main-con__category-con__select-skill-con__skill-head-con__text-con">
                      <div className="user-skill-main-con__category-con__select-skill-con__skill-head-con__text-con__text">
                        Skill Type 1
                      </div>
                      <div className="user-skill-main-con__category-con__select-skill-con__skill-head-con__text-con__img-con">
                        <img
                          src="./images/Crossbtn.svg"
                          alt="Crossbtn"
                          className="user-skill-main-con__category-con__select-skill-con__skill-head-con__text-con__img-con__img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-skill-main-con__btn-con">
            <Link to="/user-skill">
              <button className="user-skill-main-con__btn-con__back-btn">
                Back
              </button>
            </Link>
            <Link to="/user-profile-details">
              <button className="user-skill-main-con__btn-con__next-btn my-btn-skill">
                Next
              </button>
            </Link>
          </div>
        </div>
        <hr className="user-skill-hr" />
      </div>
    </>
  );
};
export default UserSkillSelect;
