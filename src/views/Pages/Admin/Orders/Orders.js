import React from "react";
import "../Users/Users.scss";
import "./Orders.scss";
import MaterialTable from "@material-table/core";

const AdminOrders = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Orders</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con order-header-con">
            <div className="admin-user-sec__table-con__header-con__head order-header-con__head">
              <b>Orders</b>
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
                      <b>Order ID</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.order_id}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Customer</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.customer}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Order type</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.order_type}
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
              ]}
              data={[
                {
                  order_id: 757678,
                  customer: "Mr Akash Kumar",
                  user_status: 1,
                  order_type: "Flashcard",
                  price: "$500",
                },
                {
                  order_id: 757666,
                  customer: "hobbs",
                  user_status: 2,
                  order_type: "Document",
                  price: "$300",
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
export default AdminOrders;
