import React from "react";
import "./Earning.scss";
import "../../Components/TheHeader/Header.scss";
import { Accordion, Form } from "react-bootstrap";

const Earning = () => {
  return (
    <>
      <div className="earning-con">
        <div className="earning-con__head-con">
          <div className="earning-con__head-con__head-text">
            <b>Earnings</b>
          </div>
          <div className="search-list-download-con">
            <div className="headerSearchBx serach-box">
              <input
                placeholder="Search By..."
                aria-label="Search"
                type="search"
                className="me-2 search_header form-control"
              />
              <div className="search_header_icon"></div>
            </div>
            <div className="earning-con__head-con__select-list">
              <Form.Select placeholder="Filter By" aria-label="Default select example">
                <option value="1">Filter by</option>
                <option value="1">School</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
            <div className="earning-con__head-con__button-con">
              <button className="earning-con__head-con__button-con__btn">
                Download CSV
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div className="earning-con__head-con">
          <div className="balance-con__head-con__head-text">
            <b>Balance</b>
          <div className="balance-con__head-con__sub-head-text" >Your balance is $788.20</div>
          </div>
          <div className="search-list-download-con">
          </div>
        </div>
        <hr />
        <div className="earning-accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="earning-accordion__header">
                  <div className="earning-accordion__header__head-con">
                    <div className="earning-accordion__header__head-con__head">
                      <b>Client name type 1</b>
                    </div>
                    <div className="earning-accordion__header__head-con__price">
                      <b>$500</b>
                    </div>
                  </div>
                  <div className="earning-accordion__header__text-con">
                    <div className="earning-accordion__header__text-con__text">
                      Project name Lorem Ipsum is the dummy text
                    </div>
                    <div className="earning-accordion__header__text-con__date">
                      (20-10-2022)
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body-con">
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text">
                      <b>Total Billed</b>
                    </div>
                    <div className="accordion-body-con__total-billed-con__price">
                      <b>$500</b>
                    </div>
                  </div>
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text accordion-body-con__total-billed-con__fee-text">
                      <b>Fees & Taxes</b>
                    </div>
                    <div
                      className="accordion-body-con__total-billed-con__price
                                     accordion-body-con__total-billed-con__fee-text
                                    "
                    >
                      <b>$100</b>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text">
                      <b>Your Earnings</b>
                    </div>
                    <div className="accordion-body-con__total-billed-con__price">
                      <b>$400</b>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="earning-accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="earning-accordion__header">
                  <div className="earning-accordion__header__head-con">
                    <div className="earning-accordion__header__head-con__head">
                      <b>Client name type 1</b>
                    </div>
                    <div className="earning-accordion__header__head-con__price">
                      <b>$500</b>
                    </div>
                  </div>
                  <div className="earning-accordion__header__text-con">
                    <div className="earning-accordion__header__text-con__text">
                      Project name Lorem Ipsum is the dummy text
                    </div>
                    <div className="earning-accordion__header__text-con__date">
                      (20-10-2022)
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body-con">
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text">
                      <b>Total Billed</b>
                    </div>
                    <div className="accordion-body-con__total-billed-con__price">
                      <b>$500</b>
                    </div>
                  </div>
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text accordion-body-con__total-billed-con__fee-text">
                      <b>Fees & Taxes</b>
                    </div>
                    <div
                      className="accordion-body-con__total-billed-con__price
                                     accordion-body-con__total-billed-con__fee-text
                                    "
                    >
                      <b>$100</b>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text">
                      <b>Your Earnings</b>
                    </div>
                    <div className="accordion-body-con__total-billed-con__price">
                      <b>$400</b>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <div className="earning-accordion">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="earning-accordion__header">
                  <div className="earning-accordion__header__head-con">
                    <div className="earning-accordion__header__head-con__head">
                      <b>Client name type 1</b>
                    </div>
                    <div className="earning-accordion__header__head-con__price">
                      <b>$500</b>
                    </div>
                  </div>
                  <div className="earning-accordion__header__text-con">
                    <div className="earning-accordion__header__text-con__text">
                      Project name Lorem Ipsum is the dummy text
                    </div>
                    <div className="earning-accordion__header__text-con__date">
                      (20-10-2022)
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="accordion-body-con">
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text">
                      <b>Total Billed</b>
                    </div>
                    <div className="accordion-body-con__total-billed-con__price">
                      <b>$500</b>
                    </div>
                  </div>
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text accordion-body-con__total-billed-con__fee-text">
                      <b>Fees & Taxes</b>
                    </div>
                    <div
                      className="accordion-body-con__total-billed-con__price
                                     accordion-body-con__total-billed-con__fee-text
                                    "
                    >

                      <b>$100</b>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-body-con__total-billed-con">
                    <div className="accordion-body-con__total-billed-con__text">
                      <b>Your Earnings</b>
                    </div>
                    <div className="accordion-body-con__total-billed-con__price">
                      <b>$400</b>
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
      {/* testing commit */}
    </>
  );
};
export default Earning;
