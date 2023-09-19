import React from "react";
import "../Users/Users.scss";
import "./BannedWords.scss";
import MaterialTable from "@material-table/core";
const AdminBannedWords = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Banned words</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Banned words</b>
            </div>
          </div>
          <hr />
          <div className="table">
            <MaterialTable
              columns={[
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Name</b>
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
                      <b>Reason</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.reason}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Banned words</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.banned_words}
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
                        <button className="table-checkbox-con__btn-con__approve">
                          Unbanned
                        </button>
                      </div>
                    );
                  },
                },
              ]}
              data={[
                {
                  name: "Name type 1",
                  reason: "Reason Type 1",
                  banned_words: "davinder2038@gmail.com",
                },
                {
                  name: "Name type 3",
                  reason: "Reason Type 2",
                  banned_words: "davinder2038@gmail.com",
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
export default AdminBannedWords;
