import React from "react";
import "../Users/Users.scss";
import "./Dispute.scss";
import MaterialTable from "@material-table/core";

const AdminDispute = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Disputes</b>
          </div>
        </div>

        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con disputes--header-con">
            <div className="admin-user-sec__table-con__header-con__head disputes--header-con__head">
              <b>Disputes</b>
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
                      <b>Dispute ID</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.dispute_id}
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
                      <b>Dispute Reason</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.dispute_reason}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>created On</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.created_On}
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
                  dispute_id: 1234,
                  customer: "Mr Akash Kumar",
                  user_status: 1,
                  created_On: "22 Sep 2022",
                  dispute_reason: "Lorem ipsume Dispute reason type 2",
                },
                {
                  dispute_id: 4567,
                  customer: "hobbs",
                  user_status: 2,
                  created_On: "22 Nov 2022",
                  dispute_reason: "Lorem ipsume Dispute reason type 1",
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
export default AdminDispute;
