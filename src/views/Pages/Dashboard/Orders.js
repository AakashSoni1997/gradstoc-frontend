import React, { useState } from "react";
import "../../Components/TheHeader/Header.scss";
import "../../Pages/Dashboard/StudyResourcesDetail.scss";
import "./Orders.scss";
import { Modal } from "react-bootstrap";
import { InputField } from "../../Components/InputField/InputField";
import { ButtonNoColor, ButtonColor } from "../../Components/Button/Button";
import moment from "moment";

const Orders = () => {
  const [show, setShow] = useState(false);
  const [showCustom, setCustomShow] = useState(false);
  const [state, setState] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCustomClose = () => setCustomShow(false);
  const handleCustomShow = () => setCustomShow(true);
  const [filterState,setFilterState]=useState(false)

  const handleDateChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: moment(value).format("DD-MM-YYYY")});
  };
  const handleFilter = () => {
    if (state.start_date !== undefined && state.end_date !== undefined) {
      setShow(false);
      setFilterState(true)
    }
  };


  return (
    <>
      <section>
        <div className="section-head-main">
          <div className="section-head-main__head-con">
            <div className="row">
              <div className="col-md-6">
                <div className="section-head-main__head-con__head">
                  <b>Orders { filterState && state.start_date !== undefined && state.end_date !== undefined ? "History" : ""} </b>
                {filterState && state.start_date !== undefined && state.end_date !== undefined ? (<div className="sub_heading">From {state.start_date} to {state.end_date}</div>):""}
                </div>
              </div>
              <div className="col-md-3">
                <div className="section-head-main__head-con__search">
                  <div className="headerSearchBx serach-box">
                    <input
                      placeholder="Search By ..."
                      aria-label="Search"
                      type="search"
                      className="me-2 search_header form-control"
                    />
                    <div className="search_header_icon"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="section-head-main__head-con__filter-btn-con">
                  <button
                    className="section-head-main__head-con__filter-btn-con__btn"
                    onClick={handleShow}
                  >
                    <img
                      src="./images/filter-icon.png"
                      alt="fliter icon"
                      className="section-head-main__head-con__filter-btn-con__btn__img"
                    />
                    Filter
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div
            className="section-head-main__details-con"
            onClick={handleCustomShow}
          >
            <div className="section-head-main__details-con__img-con">
              <img src="./images/book_cover.png" alt="Book cover" />
            </div>
            <div className="section-head-main__details-con__text-con">
              <div className="section-head-main__details-con__text-con__head">
                <b>
                  Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz 3, Bibl 104
                  Quiz 4, Bibl 104 Quiz
                </b>
              </div>
              <div className="section-head-main__details-con__text-con__date">
                <b>Order on 05-09-2022</b>
              </div>
              <div className="section-head-main__details-con__text-con__text">
                Bibl 104 Quiz 1 Question 1 According to the readings the Old
                Testament canon was completed after the time...
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className="model-box-con">
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
            className="model-box-con"
          >
            <Modal.Body>
              <div className="logout-con">
                <div className="logout-con__text-con">
                  <div className="logout-con__text-con__head">
                    <b>Filter</b>
                  </div>
                  <div className="logout-con__text-con__img-con">
                    <img
                      src="./images/Crossbtn.svg"
                      alt="Cross btn"
                      onClick={handleClose}
                    />
                  </div>
                </div>
                <div className="logout-con__filter-date-con">
                  <div className="row">
                    <div className="col-md">
                      <InputField
                        onChange={handleDateChange}
                        name="start_date"
                        type="date"
                        labelText="Filter By Date"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md mb-4">
                      <InputField
                        onChange={handleDateChange}
                        name="end_date"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <div className="logout-con__filter-btn-con">
                  <ButtonNoColor
                    buttonText="Cancel"
                    onClick={handleClose}
                    className="btn-no-filled-margin"
                  />
                  <ButtonColor onClick={handleFilter} buttonText="Filter" />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        <Modal
          show={showCustom}
          onHide={handleCustomClose}
          aria-labelledby="example-custom-modal-styling-title"
          className="model-box-con-large"
          size="lg"
          centered
        >
          <Modal.Body>
            <p>
              <div className="row">
                <div className="col-md">
                  <div>
                    <div className="model-cross-icon-con">
                      <div className="container studydetail-person-con">
                        <div className="section-head-main__details-con">
                          <div className="section-head-main__details-con__img-con">
                            <img
                              src="./images/book_cover.png"
                              alt="Book cover"
                            />
                          </div>
                          <div className="section-head-main__details-con__text-con">
                            <div className="section-head-main__details-con__text-con__head">
                              <b>
                                Bibl 104 Quiz 1,Bibl 104 Quiz 2, Bibl 104 Quiz
                                3, Bibl 104 Quiz 4, Bibl 104 Quiz
                              </b>
                            </div>
                            <div className="section-head-main__details-con__text-con__date">
                              <b>Order on 05-09-2022</b>
                            </div>
                            <div className="section-head-main__details-con__text-con__text">
                              Bibl 104 Quiz 1 Question 1 According to the
                              readings the Old Testament canon was completed
                              after the time...
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="logout-con__text-con__img-con logout-con__text-con__img-con-margin">
                        <img
                          src="./images/Crossbtn.svg"
                          alt="Cross btn"
                          onClick={handleCustomClose}
                        />
                      </div>
                    </div>
                    <div className="all-info-about">
                      <div className="all-info-about-order">
                        <div className="all-info-about-order__head">
                          <b>Order ID</b>
                        </div>
                        <div className="all-info-about-order__text">234543</div>
                      </div>
                      <div className="all-info-about-order all-info-about-order-option">
                        <div className="all-info-about-order__head">
                          <b>Course Name</b>
                        </div>
                        <div className="all-info-about-order__text">
                          Biology (study resource)
                        </div>
                      </div>
                      <div className="all-info-about-order all-info-about-order-option">
                        <div className="all-info-about-order__head">
                          <b>Seller Name</b>
                        </div>
                        <div className="all-info-about-order__text">
                          John wick
                        </div>
                      </div>
                      <div className="all-info-about-order all-info-about-order-option">
                        <div className="all-info-about-order__head">
                          <b>Buyer Name</b>
                        </div>
                        <div className="all-info-about-order__text">
                          Luke Hobbs
                        </div>
                      </div>
                      <div className="all-info-about-order all-info-about-order-option">
                        <div className="all-info-about-order__head">
                          <b>Purchase Date</b>
                        </div>
                        <div className="all-info-about-order__text">
                          12-02-22
                        </div>
                      </div>
                      <div className="all-info-about-order all-info-about-order-option">
                        <div className="all-info-about-order__head">
                          <b>Purchase Amount</b>
                        </div>
                        <div className="all-info-about-order__text">$50</div>
                      </div>
                    </div>
                  </div>
                  <hr />
                </div>
              </div>
            </p>
          </Modal.Body>
        </Modal>
      </section>
    </>
  );
};


export default Orders;