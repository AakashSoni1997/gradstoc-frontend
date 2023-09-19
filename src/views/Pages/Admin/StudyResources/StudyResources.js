import React from "react";
import "../Users/Users.scss";
import "./StudyResources.scss";
import { Form, Dropdown } from "react-bootstrap";
import MaterialTable from "@material-table/core";
import { BiTrashAlt, BiCommentEdit } from "react-icons/bi";
import threeDots from "../../../../Assets/images/admin-three-dots.svg";
import user_pdf from "../../../../Assets/images/user_pdf.png";

const AdminStudyResources = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Study Resources</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Study Resources</b>
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
                      <b>Document name</b>
                    </div>
                  ),
                  sorting: false,
                  width: "20%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.document_name}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Document type</b>
                    </div>
                  ),
                  sorting: false,
                  width: "15%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.document_type}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>No of pages</b>
                    </div>
                  ),
                  sorting: false,
                  width: "13%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.no_of_pages}
                      </div>
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
                  width: "22%",
                  render: (rowData) => {
                    return (
                      <a download className="table-checkbox-con__pdf-link" href="/">
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
                  document_name: "Lorem ipsume document Name 1",
                  document_type: "Document",
                  no_of_pages: 1,
                  pdf_uplode: "File name type 5",
                },
                {
                  document_name: "Lorem ipsume document Name 2",
                  document_type: "Flashcard",
                  no_of_pages: 2,
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
export default AdminStudyResources;
