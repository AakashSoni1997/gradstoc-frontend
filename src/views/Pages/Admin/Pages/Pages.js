import React from "react";
import "../Users/Users.scss";
import "./Pages.scss";
import MaterialTable from "@material-table/core";
import editBtn from "../../../../Assets/images/admin_page_edit.png";
import deleteBtn from "../../../../Assets/images/admin_page_delete.png";

const AdminPages = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Pages</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Pages</b>
            </div>
          </div>
          <hr />
          <div className="table">
            <MaterialTable
              columns={[
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>name</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.name}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Created on</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.created_on}
                      </div>
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
                        <img
                          src={deleteBtn}
                          alt="delete"
                          className="table-checkbox-con__btn-con__delete"
                        />
                        <img
                          src={editBtn}
                          alt=" edit"
                          className="table-checkbox-con__btn-con__edit"
                        />
                      </div>
                    );
                  },
                },
              ]}
              data={[
                {
                  name: "Lorem ipsume document Name 1",
                  created_on: "22 Sep 2020",
                },
                {
                  name: "Lorem ipsume document Name 2",
                  created_on: "22 Sep 2022",
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
export default AdminPages;
