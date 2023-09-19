import React, { useState } from "react";
import "../Dispute/Dispute.scss";
import "./TransactionHistory.scss";
import { Table } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

const TransactionHistory = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="dispute-main-con">
        <div className="dispute-main-con__head-con">
          <div className="dispute-main-con__head-con__head">
            <b>Transaction History</b>
            <div className="dispute-main-con__head-con__head__balance">
              Balance: <b>$1,456.00</b>
            </div>
          </div>
          <div className="dispute-main-con__head-con__seach-list-con">
            <span className="dispute-main-con__seach-con__text">
              <b>Statement Period</b>
            </span>
            <div className="dispute-main-con__head-con__seach-list-con__seach date-picker-div">
              <DateRangePicker
                placeholder="Jun 27, 2022 - Jul 26, 2022"
                className="date-picker-class-width"
                size="md"
                block
                showOneCalendar
                placement="bottomEnd"
                preventOverflow
              />
              <div className="date-calender-icon">
                <img src="./images/date-picker-icon.svg" alt="calender-icon" />
              </div>
            </div>
          </div>
        </div>
        <hr className="hr-date-picker" />
        <div className="dispute-main-con__detail-con">
          <div className="dispute-main-con__detail-con__head">
            <b>All Requests</b>
          </div>
          <div className="dispute-main-con__detail-con__table-text">
            <Table hover size="sm">
              <thead className="dispute-main-con__detail-con__table-head">
                <tr>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Date</b>
                  </th>
                  <th
                    colSpan={3}
                    className="dispute-main-con__detail-con__table-head__content"
                  >
                    <b>Description</b>
                  </th>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Client</b>
                  </th>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Amount</b>
                  </th>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Reg ID</b>
                  </th>
                </tr>
              </thead>
              <tbody onClick={handleShow} className="table-body-cursor">
                <tr>
                  <td className="dispute-main-con__detail-con__table-head__content-text">
                    <span className="dispute-main-con__detail-con__table-head__content-text__a-tag">
                      <b>Aug 3, 2022</b>
                    </span>
                  </td>
                  <td
                    colSpan={3}
                    className="dispute-main-con__detail-con__table-head__content-text-sub"
                  >
                    <span className="dispute-main-con__detail-con__table-head__content-text-sub__a-tag a-tag-color">
                      <b>
                        Invoice for 07/18/2022-07/24/2022 - 4:30 hrs @ $18.00/hr
                      </b>
                    </span>
                  </td>
                  <td className="dispute-main-con__detail-con__table-head__content-text">
                    <span className="dispute-main-con__detail-con__table-head__content-text__a-tag">
                      <b>Jonathan</b>
                    </span>
                  </td>
                  <td className="dispute-main-con__detail-con__table-head__content-text">
                    <span className="dispute-main-con__detail-con__table-head__content-text__a-tag">
                      <b>$500.00</b>
                    </span>
                  </td>
                  <td className="dispute-main-con__detail-con__table-head__content-text-active">
                    <a
                      href="#/dispute-details"
                      className="dispute-main-con__detail-con__table-head__content-text-active__a-tag a-tag-rg-id"
                    >
                      <b>498407941</b>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
        className="transaction-history-details-con"
      >
        <Modal.Body>
          <div className="transaction-history-details-con--model">
            <div className="transaction-history-details-con--model__head-con">
              <div className="transaction-history-details-con--model__head-con__head">
                <b>Transaction Details</b>
              </div>
              <div className="transaction-history-details-con--model__head-con__img-con">
                <img
                  src="./images/Crossbtn.svg"
                  alt="Cross btn"
                  onClick={handleClose}
                />
              </div>
            </div>
            <div className="transaction-history-details-con--model__details-con">
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Reference ID</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  498407941
                </div>
              </div>
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Date</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  Mar 1, 2023
                </div>
              </div>
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Type</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  WHT
                </div>
              </div>
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Description</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  Withholding Tax (IN) - Ref ID 557925614 <br />
                  Country: IN <br />
                  Amount: $200.00 USD × 1% - $2.00 USD
                </div>
              </div>
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Client</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  Darell Parker
                </div>
              </div>
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Freelancer</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  Davinder Singh
                </div>
              </div>
              <div className="transaction-history-details-con--model__details-con__text-con">
                <div className="transaction-history-details-con--model__details-con__text-con__head">
                  <b>Amount</b>
                </div>
                <div className="transaction-history-details-con--model__details-con__text-con__text">
                  ($2.00)
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default TransactionHistory;
