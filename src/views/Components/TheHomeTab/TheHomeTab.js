import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../Pages/Home/Home.scss";
import { useDispatch } from "react-redux";
import { PostSubCategoryList } from "../../../redux/actions/jobPostAction";
import { useSelector } from "react-redux";
const options = {
  items: 4,
  loop: true,
  center: false,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,
  dots: false,
  autoWidth: true,
  margin: 15,
};

const TheHomeTab = ({ id }) => {
  const subCategoryList = useSelector(
    (state) => state.homepage.sub_category_list_success
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PostSubCategoryList({ id: id }));
  }, [id,dispatch]);


  return (
    <>
      <div className="cardarea">
        <OwlCarousel className="owl-theme" {...options}>
          {subCategoryList?.map((ele, index) => (
            <div className="expandview">
              <img src={ele.sub_cat_image} alt="cat" />
              <div className="feature_cat_content">
                <div className="cat_name">Category 2</div>
                <div className="course_name">{ele.sub_cat_name}</div>
              </div>
            </div>
          ))}
          {/* <div className="expandview">
            <div className="feature_cat_img">
              <img src="./images/Cat1.jpg" alt="cat" />
            </div>
            <div className="feature_cat_content">
              <div className="cat_name">Category 1</div>
              <div className="course_name">Course type 1</div>
            </div>
          </div>
          <div className="expandview">
            <img src="./images/Cat2.jpg" alt="cat" />
            <div className="feature_cat_content">
              <div className="cat_name">Category 2</div>
              <div className="course_name">Course type 2</div>
            </div>
          </div>
          <div className="expandview">
            <img src="./images/Cat3.jpg" alt="cat" />
            <div className="feature_cat_content">
              <div className="cat_name">Category 3</div>
              <div className="course_name">Course type 3</div>
            </div>
          </div>
          <div className="expandview">
            <img src="./images/Cat4.jpg" alt="cat" />
            <div className="feature_cat_content">
              <div className="cat_name">Category 4</div>
              <div className="course_name">Course type 4</div>
            </div>
          </div>
          <div className="expandview">
            <img src="./images/Cat5.jpg" alt="cat" />
            <div className="feature_cat_content">
              <div className="cat_name">Category 5</div>
              <div className="course_name">Course type 5</div>
            </div>
          </div>
          <div className="expandview">
            <img src="./images/Cat6.jpg" alt="cat" />
            <div className="feature_cat_content">
              <div className="cat_name">Category 6</div>
              <div className="course_name">Course type 6</div>
            </div>
          </div> */}
        </OwlCarousel>
      </div>
    </>
  );
};

export default TheHomeTab;
