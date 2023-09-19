import React from "react";
import "../Users/Users.scss";
import "./Coupons.scss";
import MaterialTable from "@material-table/core";

const AdminCoupons = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Coupons</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Coupons</b>
            </div>
            <div className="admin-user-sec__table-con__header-con__btn-con">
              <button className="admin-user-sec__table-con__header-con__btn-con__add-btn">
                Add New
              </button>
            </div>
          </div>
          <hr />
          <div className="table">
            <MaterialTable
              columns={[
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Coupon name</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.coupon_name}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Coupon Type</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.coupon_type}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>% Discount</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.discount}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>date</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.date}
                      </div>
                    );
                  },
                },
              ]}
              data={[
                {
                  coupon_name: "Coupon name type 1",
                  coupon_type: "Type 1",
                  discount: "30%",
                  date: "22 Sep 2020",
                },
                {
                  coupon_name: "Coupon name type 3",
                  coupon_type: "Type 3",
                  discount: "40%",
                  date: "22 Sep 2022",
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
export default AdminCoupons;
