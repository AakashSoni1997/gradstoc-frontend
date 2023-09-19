import React from "react";
import "./Users.scss";
import { Form, Dropdown } from "react-bootstrap";
import MaterialTable from "@material-table/core";
import { BiTrashAlt, BiCommentEdit } from "react-icons/bi";
import threeDots from "../../../../Assets/images/admin-three-dots.svg";
import user_pdf from "../../../../Assets/images/user_pdf.png";

const Users = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Users</b>
          </div>
        </div>
        <div className="admin-user-sec__total-member-con">
          <div className="row">
            <div className="col-md-6">
              <div className="admin-user-sec__total-member-con__total-student">
                <div className="admin-user-sec__total-member-con__total-student__text">
                  <b>Total number of students</b>
                </div>
                <div className="admin-user-sec__total-member-con__total-student__number">
                  <b>300</b>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="admin-user-sec__total-member-con__total-expert">
                <div className="admin-user-sec__total-member-con__total-expert__text">
                  <b>Total number of experts</b>
                </div>
                <div className="admin-user-sec__total-member-con__total-expert__number">
                  <b>400</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Member Details</b>
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
                  <option value="1">Students</option>
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
                      <b>User ID</b>
                    </div>
                  ),
                  sorting: false,
                  width: "12%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.user_id}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Name</b>
                    </div>
                  ),
                  sorting: false,
                  width: "17%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.user_name}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Status</b>
                    </div>
                  ),
                  sorting: false,
                  width: "9%",
                  render: (rowData) => {
                    return rowData?.user_status === 1 ? (
                      <span className="table-checkbox-con__active">Active</span>
                    ) : (
                      <span className="table-checkbox-con__inactive">
                        Inactive
                      </span>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Attachments</b>
                    </div>
                  ),
                  field: "pdf_uplode",
                  sorting: false,
                  width: "25%",
                  render: (rowData) => {
                    return (
                      <a download className="table-checkbox-con__pdf-link"  href="/">
                        <img src={user_pdf} alt="pdf" />
                        <div className="table-checkbox-con__pdf-link__name">
                          {rowData.pdf_uplode}
                        </div>
                        <span className="table-checkbox-con__pdf-link__size">
                          (2.3 MB)
                        </span>
                      </a>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Action</b>
                    </div>
                  ),
                  field: "Action",
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__btn-con">
                        <button className="table-checkbox-con__btn-con__approve">
                          Approve
                        </button>
                        <button className="table-checkbox-con__btn-con__reject">
                          Reject
                        </button>
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
                  user_id: 1234,
                  user_name: "Mr Akash Kumar Duhoon",
                  user_status: 1,
                  pdf_uplode: "File name type 5",
                },
                {
                  user_id: 4567,
                  user_name: "hobbs",
                  user_status: 2,
                  pdf_uplode: "File name type 4",
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
export default Users;
