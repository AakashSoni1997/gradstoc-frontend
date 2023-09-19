import React from "react";
import "../Users/Users.scss";
import "./Payouts.scss";
import MaterialTable from "@material-table/core";

const AdminPayouts = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Payouts</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con admin-payout-header-con">
            <div className="admin-user-sec__table-con__header-con__head admin-payout-header-con__head">
              <b>Payouts</b>
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
                  width: "16%",
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>User name</b>
                    </div>
                  ),
                  sorting: false,
                  width: "15%",
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
                      <b>Method</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.method}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Earnings</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.earnings}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Earnings</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.earnings}
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
                    return rowData?.payout_status === 1 ? (
                      <span className="table-checkbox-con__active">Paid</span>
                    ) : (
                      <span className="table-checkbox-con__inactive">
                        Pending
                      </span>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Withdrawls</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.withdrawls}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Date</b>
                    </div>
                  ),
                  sorting: false,
                  width: "15%",
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.date}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Pay</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data table-checkbox-con--pay-now">
                        {rowData.pay}
                      </div>
                    );
                  },
                },
              ]}
              data={[
                {
                  user_name: "Luck",
                  method: "Stripe",
                  earnings: "$8500",
                  payout_status: 1,
                  withdrawls: "$7500",
                  date: "20-07-2020",
                  pay: "Pay now",
                },
                {
                  user_name: "Hobbs",
                  method: "Paypal",
                  earnings: "$5500",
                  payout_status: 2,
                  withdrawls: "$4500",
                  date: "20-08-2020",
                  pay: "Pay now",
                },
              ]}
              options={{
                showTitle: false,
                search: false,
                paging: false,
                toolbar: false,
                sorting: false,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default AdminPayouts;
