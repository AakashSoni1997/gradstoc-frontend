import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CheckIcon from "@mui/icons-material/Check";

function SubCategoryComponent({ elem, handleSubcategory }) {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    handleSubcategory(elem);
  }, [elem,handleSubcategory]);

  return (
    <div className="user-skill-main-con__category-con__select-category-con__head--con">
      <div className="user-skill-main-con__category-con__select-category-con__head--con__head">
        {elem.sub_name}
      </div>
      {toggle ? (
        <AddIcon
          onClick={() => setToggle(!toggle)}
          style={{ color: "#37A000", fontSize: "30px", margin: "10px" }}
        />
      ) : (
        <CheckIcon
          onClick={() => setToggle(!toggle)}
          style={{ color: "#37A000", fontSize: "30px", margin: "10px" }}
        />
      )}
    </div>
  );
}

export default SubCategoryComponent;
