import React from "react";
import "../Users/Users.scss";
import "./Blogs.scss";
import MaterialTable from "@material-table/core";
const AdminBlogs = () => {
  return (
    <>
      <div className="admin-user-sec">
        <div className="admin-user-sec__head-con">
          <div className="admin-user-sec__head-con__head">
            <b>Blogs</b>
          </div>
        </div>
        <div className="admin-user-sec__table-con">
          <div className="admin-user-sec__table-con__header-con">
            <div className="admin-user-sec__table-con__header-con__head">
              <b>Blogs</b>
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
                      <b>Blog name</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.blog_name}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Blog Type</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.blog_type}
                      </div>
                    );
                  },
                },
                {
                  title: (
                    <div className="table-checkbox-con__text">
                      <b>Title</b>
                    </div>
                  ),
                  sorting: false,
                  render: (rowData) => {
                    return (
                      <div className="table-checkbox-con__data">
                        {rowData.title}
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
                          Update
                        </button>
                      </div>
                    );
                  },
                },
              ]}
              data={[
                {
                  blog_name: "Blog name type 1",
                  blog_type: "Type 1",
                  title: "Lorem ipsume titletype 1",
                },
                {
                  blog_name: "Blog name type 3",
                  blog_type: "Type 4",
                  title: "Lorem ipsume titletype 5",
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
export default AdminBlogs;
