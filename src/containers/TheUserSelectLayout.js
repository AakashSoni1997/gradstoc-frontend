import React from "react";
import TheContent from "./TheContent";
import TheHeader from "../views/Components/TheUserSelectHeader/TheUserSelectHeader";
// import TheFooter from '../views/Components/TheFooter/Footer';
// import "./TheUserSelectLayout.scss"
export default function TheUserSelectLayout() {
  return (
    <>
      <TheHeader />
      <TheContent />
      {/* <div className='user-select-footer'>
                <TheFooter />
            </div> */}
    </>
  );
}
