import React from "react";
import "../../Users/Users.scss";
import "./Past.scss";
import { Form, Dropdown } from "react-bootstrap";
import MaterialTable from "@material-table/core";
import { BiTrashAlt, BiCommentEdit } from "react-icons/bi";
import threeDots from "../../../../../Assets/images/admin-three-dots.svg";

const AdminPastJobs = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Jobs</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Past Jobs</b>
            </div>
            <div className="admin-user-sec__table-con__header-con__serach-con">
              <div className="headerSearchBx">
                <input
                  placeholder="&nbsp;&nbsp;Search User by Name"
                  aria-label="Search"
                  type="search"
                  className="me-2 search_header-admin-user form-control"
                />
                <div className="search_header_icon_user_admin"></div>
              </div>
            </div>
            <div className="admin-user-sec__table-con__header-con__filter-con">
              <span className="admin-user-sec__table-con__header-con__filter-con__filter">
                <b>Filter by</b>
              </span>
              <Form>
                <Form.Select
                  aria-label="Default select example"
                  className="admin-user-sec__table-con__header-con__filter-con__list"
                >
                  <option value="1">Question</option>
                  <option value="2">Experts</option>
                </Form.Select>
              </Form>
            </div>
          </div>
          <hr />
          <div className="table">
            <MaterialTable
              columns={[
                {
                  title: (
                    <div className="table-checkbox-con">
                      <input
                        type="checkbox"
                        className="table-checkbox-con__check-box"
                      />
                      <span className="table-checkbox-con__text">
                        <b>Select All</b>
                      </span>
                    </div>
                  ),
                  render: () => {
                    return (
                      <div>
                        <input
                          type="checkbox"
                          className="table-checkbox-con__check-box"
                        />
                      </div>
                    );
                  },
                  sorting: false,
                  width: "15%",
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Job ID</b>
                    </div>
                  ),
                  sorting: false,
                  width: "12%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.job_id}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>job title</b>
                    </div>
                  ),
                  sorting: false,
                  width: "25%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.job_title}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Project type </b>
                    </div>
                  ),
                  sorting: false,
                  width: "15%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.project_type}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Budget</b>
                    </div>
                  ),
                  field: "pdf_uplode",
                  sorting: false,
                  width: "10%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.budget}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>DATE POSTED</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.date_posted}
                      </div>
                    );
                  },
                },
                {
                  field: "amount",
                  sorting: false,
                  width: "4%",
                  render: () => {
                    return (
                      <Dropdown className="tableActionDropdown">
                        <Dropdown.Toggle variant="" id="action">
                          <img src={threeDots} alt="Three Dots" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <button className="dropdown-item tableActionDropdown__edit">
                            <BiCommentEdit className="edit__icon" />
                            Edit
                          </button>
                          <button className="dropdown-item tableActionDropdown__delete">
                            <BiTrashAlt className="delete__icon" />
                            Delete
                          </button>
                        </Dropdown.Menu>
                      </Dropdown>
                    );
                  },
                },
              ]}
              data={[
                {
                  job_id: 1234,
                  job_title: "Lorem ipsume is the job type 1",
                  project_type: "Question",
                  budget: "$10",
                  date_posted: "22 Sep 2020",
                },
                {
                  job_id: 4567,
                  job_title: "Lorem ipsume is the job type 2",
                  project_type: "Writing",
                  budget: "$100",
                  date_posted: "22 Sep 2020",
                },
              ]}
              options={{
                // actionsColumnIndex: -1,
                showTitle: false,
                search: false,
                paging: false,
                toolbar: false,
                sorting: false,
                tableLayout: "fixed",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPastJobs;
