import React from "react";
import "../../Components/TheHeader/Header.scss";
import "./Dispute.scss";
import { Form, Table } from "react-bootstrap";

const Dispute = () => {
  return (
    <>
      <div className="dispute-main-con">
        <div className="dispute-main-con__head-con">
          <div className="dispute-main-con__head-con__head">
            <b>Dispute</b>
          </div>
          <div className="dispute-main-con__head-con__seach-list-con">
            <div className="dispute-main-con__head-con__seach-list-con__list">
              <Form>
                <Form.Select aria-label="Default select example">
                  <option value="1">Status</option>
                  <option value="2">Active</option>
                  <option value="3">Solved</option>
                </Form.Select>
              </Form>
            </div>
            <div className="dispute-main-con__head-con__seach-list-con__seach">
              <div className="headerSearchBx serach-box">
                <input
                  placeholder="Search by Number or Name..."
                  aria-label="Search"
                  type="search"
                  className="me-2 search_header form-control"
                />
                <div className="search_header_icon"></div>
              </div>
            </div>
          </div>
        </div>
        <hr className="dispute-hr-con" />
        <div className="dispute-main-con__detail-con">
          <div className="dispute-main-con__detail-con__head">
            <b>All Dispute</b>
          </div>
          <div className="dispute-main-con__detail-con__table-text">
            <Table hover size="sm">
              <thead className="dispute-main-con__detail-con__table-head">
                <tr>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Id</b>
                  </th>
                  <th
                    colSpan={3}
                    className="dispute-main-con__detail-con__table-head__content"
                  >
                    <b>Subject</b>
                  </th>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Created</b>
                  </th>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Last Activity</b>
                  </th>
                  <th className="dispute-main-con__detail-con__table-head__content">
                    <b>Status</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="dispute-main-con__detail-con__table-head__content-text">
                    <a
                      href="/dispute-details"
                      className="dispute-main-con__detail-con__table-head__content-text__a-tag"
                    >
                      <b>34490842</b>
                    </a>
                  </td>
                  <td
                    colSpan={3}
                    className="dispute-main-con__detail-con__table-head__content-text-sub"
                  >
                    <a
                      href="/dispute-details"
                      className="dispute-main-con__detail-con__table-head__content-text-sub__a-tag"
                    >
                      <b>
                        Group Conversation: Dispute Case for Contract ID#
                        29888516
                      </b>
                    </a>
                  </td>
                  <td className="dispute-main-con__detail-con__table-head__content-text">
                    <a
                      href="/dispute-details"
                      className="dispute-main-con__detail-con__table-head__content-text__a-tag"
                    >
                      <b>2 days ago</b>
                    </a>
                  </td>
                  <td className="dispute-main-con__detail-con__table-head__content-text">
                    <a
                      href="/dispute-details"
                      className="dispute-main-con__detail-con__table-head__content-text__a-tag"
                    >
                      <b>20 min ago</b>
                    </a>
                  </td>
                  <td className="dispute-main-con__detail-con__table-head__content-text-active">
                    <a
                      href="/dispute-details"
                      className="dispute-main-con__detail-con__table-head__content-text-active__a-tag"
                    >
                      <b>Active</b>
                    </a>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Dispute;
