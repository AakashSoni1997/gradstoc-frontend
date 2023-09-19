import "./Home.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "react-bootstrap/Button";
import TheHomeTab from "../../Components/TheHomeTab/TheHomeTab";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { GetBannerList } from "../../../redux/actions/homePageAction";
import { useSelector } from "react-redux";
import {
  GetCategoryList,
  PostSubCategoryList,
} from "../../../redux/actions/jobPostAction";

const banner = {
  items: 1,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  nav: false,
  dots: true,
  margin: 15,
};

const Home = () => {
  const dispatch = useDispatch();
  const history=useHistory();
  const [key, setKey] = useState("1");

  const bannerList = useSelector((state) => state.homepage.banner_list_success);
  const categoryList = useSelector(
    (state) => state.homepage.category_list_success
  );
 


  useEffect(() => {
    dispatch(GetBannerList());
    dispatch(GetCategoryList());
  }, [dispatch]);

  const handleApply=()=>{
    localStorage.setItem("userType",3);
    history.push("/register")
  }

  return (
    <>
      <section className="main-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="section_tab p-0">
              <OwlCarousel className="owl-theme" {...banner}>
                {bannerList.map((elem, index) => (
                  <div className="slide_view">
                    <img src="./images/Bg_banner.jpg" alt="banner" />
                    <div className="slide_content">
                      <div className="container">
                        <div className="row">
                          <div className="slide_box">
                            <div className="col-md-6">
                              <div className="slide_content_left">
                                <div className="slide_title">{elem.title}</div>
                                <div className="slide_sub_title">
                                  {elem.sub_title}
                                </div>
                                <div className="slide_btn">
                                  <Link to="/hire-an-expert">
                                    <Button
                                      className="btn btn_green_field m1 ml0"
                                      variant="outline-success"
                                    >
                                      Hire an expert
                                    </Button>
                                  </Link>
                                  <Link to="/">
                                    <Button
                                      className="btn btn_white_outline m1"
                                      variant="success"
                                    >
                                      Become an expert
                                    </Button>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <img
                                // src="./images/header_circle_img.png"
                                src={elem.image}
                                alt="header_circle"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cat_name">Categ1</div>
                      <div className="course_name">Cour 1</div>
                    </div>
                  </div>
                ))}
                {/* <div className="slide_view">
                  <img src="./images/Bg_banner.jpg" alt="banner" />
                  <div className="slide_content">
                    <div className="container">
                      <div className="row">
                        <div className="slide_box">
                          <div className="col-md-6">
                            <div className="slide_content_left">
                              <div className="slide_title">
                                Learn on your schedule
                              </div>
                              <div className="slide_sub_title">
                                Study any topic, anytime. Choose from thousands
                                of expert-led courses now.
                              </div>
                              <div className="slide_btn">
                                <Link to="/hire-an-expert">
                                  <Button
                                    className="btn btn_green_field m1 ml0"
                                    variant="outline-success"
                                  >
                                    Hire an expert
                                  </Button>
                                </Link>
                                <Link to="/">
                                  <Button
                                    className="btn btn_white_outline m1"
                                    variant="success"
                                  >
                                    Become an expert
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="./images/header_circle_img.png"
                              alt="header_circle"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cat_name">Categ1</div>
                    <div className="course_name">Cour 1</div>
                  </div>
                </div>
                <div className="slide_view">
                  <img src="./images/Bg_banner.jpg" alt="banner" />
                  <div className="slide_content">
                    <div className="container">
                      <div className="row">
                        <div className="slide_box">
                          <div className="col-md-6">
                            <div className="slide_content_left">
                              <div className="slide_title">
                                Learn on your schedule
                              </div>
                              <div className="slide_sub_title">
                                Study any topic, anytime. Choose from thousands
                                of expert-led courses now.
                              </div>
                              <div className="slide_btn">
                                <Link to="/hire-an-expert">
                                  <Button
                                    className="btn btn_green_field m1 ml0"
                                    variant="outline-success"
                                  >
                                    Hire an expert
                                  </Button>
                                </Link>
                                <Link to="/">
                                  <Button
                                    className="btn btn_white_outline m1"
                                    variant="success"
                                  >
                                    Become an expert
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <img
                              src="./images/header_circle_img.png"
                              alt="header_circle"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cat_name">Categ1</div>
                    <div className="course_name">Cour 1</div>
                  </div>
                </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="section_top section_bottom section_features">
        <div className="container">
          <div className="row">
            <div className="section_title">Featured study resources</div>
            <div className="section_sub_title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="section_tab">
              <div className="">
                <Tabs
                  defaultActiveKey={"1"}
                  id="fill-tab-example"
                  className="mb-5 flex"
                  fill
                  onSelect={(k) => setKey(k)}
                >
                  {categoryList.map((elem, index) => (
                    <Tab eventKey={elem.id} title={elem.category_name}>
                      <TheHomeTab id={key} />
                    </Tab>
                  ))}
                  {/* <Tab eventKey="business" title="Business">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="medicine" title="Medicine & Health">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="math" title="Math">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="accounting" title="Accounting">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="computer" title="Computer Science">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="engineering" title="Engineering">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="education" title="Education">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="psychology" title="Psychology">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="biology" title="Biology">
                    <TheHomeTab />
                  </Tab>
                  <Tab eventKey="economics" title="Economics">
                    <TheHomeTab />
                  </Tab> */}
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12 flex align_center">
              <div className="col-md-6">
                <div className="services">
                  <div className="section_title">
                    Excellent writing services at your fingertips
                  </div>
                  <ul className="ul service_list">
                    <li className="service_li">
                      <div className="list_style_type">
                        <img src="/images/list_icon.png" alt="list"></img>
                      </div>
                      <div className="list_des">
                        <div className="list_des_title">
                          Submit requirements
                        </div>
                        <div className="list_des_para">
                          Tell us what you need written by filling out a brief
                          form.
                        </div>
                      </div>
                    </li>
                    <li className="service_li">
                      <div className="list_style_type">
                        <img src="/images/list_icon.png" alt="list"></img>
                      </div>
                      <div className="list_des">
                        <div className="list_des_title">Receive proposals</div>
                        <div className="list_des_para">
                          Evaluate bids, taking into account their
                          qualifications, reviews, timeline, and overall cost.
                        </div>
                      </div>
                    </li>
                    <li className="service_li">
                      <div className="list_style_type">
                        <img src="/images/list_icon.png" alt="list"></img>
                      </div>
                      <div className="list_des">
                        <div className="list_des_title">
                          Hire the best match
                        </div>
                        <div className="list_des_para">
                          Hire the expert that best meets the needs of your
                          project.
                        </div>
                      </div>
                    </li>
                    <li className="service_li">
                      <div className="list_style_type">
                        <img src="/images/list_icon.png" alt="list"></img>
                      </div>
                      <div className="list_des">
                        <div className="list_des_title">
                          1-on-1 chat with writer
                        </div>
                        <div className="list_des_para">
                          Chat with your writer 1-on-1 using the messaging
                          interface.
                        </div>
                      </div>
                    </li>
                    <li className="service_li">
                      <div className="list_style_type">
                        <img src="/images/list_icon.png" alt="list"></img>
                      </div>
                      <div className="list_des">
                        <div className="list_des_title">Email delivery</div>
                        <div className="list_des_para">
                          Get an email notification to download your project
                          when it’s ready for you.
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service_img">
                  <img src="/images/service.png" alt="list"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section categories">
        <div className="container">
          <div className="row">
            <div className="section_title">Top categories</div>

            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc1.jpg" alt="tc1"></img>
                </div>
                <div className="top_cat_name">Computer Science Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc2.jpg" alt="tc2"></img>
                </div>
                <div className="top_cat_name">Finance Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc3.jpg" alt="tc3"></img>
                </div>
                <div className="top_cat_name">Law Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc4.jpg" alt="tc4"></img>
                </div>
                <div className="top_cat_name">Business Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc5.jpg" alt="tc5"></img>
                </div>
                <div className="top_cat_name">Math Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc6.jpg" alt="tc6"></img>
                </div>
                <div className="top_cat_name">Economics Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc7.jpg" alt="tc7"></img>
                </div>
                <div className="top_cat_name">Engineering Questions</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="top_categories">
                <div className="top_cat_img">
                  <img src="/images/tc8.jpg" alt="tc8"></img>
                </div>
                <div className="top_cat_name">Biology Questions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0 section_marketplace">
        <div className="container">
          <div className="row">
            <div className="section_title">Explore the marketplace</div>
            <div className="subjects_all">
              <div className="col-md-12 marketplace_all">
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Math</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Biology</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Chemistry</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Physics</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 marketplace_all">
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Accounting</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Computer Science</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Business</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Finance</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 marketplace_all">
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Economics</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Engineering</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Psychology</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="sub_name_doc">
                    <div className="subject_name">Literature</div>
                    <div className="doc_count">19,896,492 Documents</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="subjects_btn">
              <Link to={"/studyresources"} className="btn btn_green_field  btn-sm">
                Explore more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_become_expert">
        <div className="container">
          <div className="row flex align_center">
            <div className="col-md-5">
              <img src="./images/become_expert.png" alt="become_expert"></img>
            </div>
            <div className="col-md-6">
              <div className="become_expert_title">
                <div className="section_title">Become an expert</div>
              </div>
              <div className="become_expert_para">
                Our experts use their skills and talents to earn compensation in
                the marketplace. Set your own hours and work anytime, anywhere.
              </div>
              <div className="apply_btn">
                <button onClick={handleApply} className="btn btn_green_field  btn-sm">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_cta">
        <div className="container">
          <div className="row">
            <div className="cta_box">
              <div className="col-md-8 col-12">
                <div className="cta_content">
                  Get the help you need to master your class
                  <div className="cta_btn mt2">
                    <button className="btn btn_white_outline">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="cta_img">
                  <img src="./images/cta_girl.png" alt="cta_girl"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* sprint5 */}
      </section>
    </>
  );
};

export default Home;
