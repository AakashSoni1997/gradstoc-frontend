import React from "react";
import TheContent from "./TheContent";
import TheHeader from "../views/Components/TheHeader/Header";
import TheFooter from "../views/Components/TheFooter/Footer";

export default function TheLayout() {
  return (
    <>
      <TheHeader />
      <TheContent />
      <TheFooter />
    </>
  );
}
