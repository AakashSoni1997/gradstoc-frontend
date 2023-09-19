import React from "react";
import "../Users/Users.scss";
import "./Subscriptions.scss";
import { Form } from "react-bootstrap";
import MaterialTable from "@material-table/core";

const AdminSubscriptions = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Subscriptions</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con  subscriptions-con">
            <div className="admin-user-sec__table-con__header-con__head subscriptions-con__head">
              <b>Subscriptions</b>
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
          </div>
          <hr />
          <div className="table">
            <MaterialTable
              columns={[
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>User Name</b>
                    </div>
                  ),
                  sorting: false,
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
                      <b>Plans</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.plans}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Price</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.price}
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
                  width: "10%",
                  render: (rowData) => {
                    return rowData?.user_status === 1 ? (
                      <span className="table-checkbox-con__active">Active</span>
                    ) : (
                      <span className="table-checkbox-con__inactive">
                        Cancelled
                      </span>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Subscription</b>
                    </div>
                  ),
                  field: "pdf_uplode",
                  sorting: false,
                  width: "25%",
                  render: (rowData) => {
                    return (
                      <div className="subscriptions-con--list">
                        <Form>
                          <Form.Select
                            aria-label="Default select example"
                            className="admin-user-sec__table-con__header-con__filter-con__list"
                          >
                            <option
                              value="1"
                              className="subscriptions-con__list-option"
                            >
                              {rowData.list_option}
                            </option>
                          </Form.Select>
                        </Form>
                      </div>
                    );
                  },
                },
              ]}
              data={[
                {
                  plans: "Monthly",
                  user_name: "Mr Akash Kumar",
                  user_status: 1,
                  list_option: "Activate Free Plan",
                  price: "$9.99 /mo",
                },
                {
                  plans: "Quarterly",
                  user_name: "hobbs",
                  list_option: "Cancel a subscription",
                  user_status: 2,
                  price: "$8.99 /mo",
                },
              ]}
              options={{
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
export default AdminSubscriptions;
