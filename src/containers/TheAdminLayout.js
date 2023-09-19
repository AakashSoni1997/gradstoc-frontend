import React from "react";
import "./TheAdminLayout.scss";
import TheContent from "./TheContent";
import AdminHeader from "../views/Components/TheAdminHeader/AdminHeader";
import AdminSideBar from "../views/Components/TheAdminSideBar/TheAdminSideBar";

export default function TheAdminLayout() {
  return (
    <>
      <AdminHeader />
      <div className="container-admin">
        <div className="row">
          <div className="col-md-3">
            <AdminSideBar />
          </div>
          <div className="col-md-9">
            <TheContent />
          </div>
        </div>
      </div>
    </>
  );
}
