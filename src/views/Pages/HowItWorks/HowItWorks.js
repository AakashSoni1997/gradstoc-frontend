import "../Home/Home.scss";
import "./HowItWorks.scss";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Button from "react-bootstrap/Button";

const HowItWorks = () => {
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

  return (
    <>
      <section className="main-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="section_tab p-0">
              <OwlCarousel className="owl-theme" {...banner}>
                <div className="slide_view">
                  <div className="slide_bg">
                    <img src="./images/Bg_banner.jpg" alt="banner" />
                  </div>
                  <div className="slide_content">
                    <div className="container">
                      <div className="row slide_box">
                        <div className="col-md-6">
                          <div className="slide_content_left">
                            <div className="slide_title">
                              Learn on your schedule
                            </div>
                            <div className="slide_sub_title">
                              Study any topic, anytime. Choose from thousands of
                              expert-led courses now.
                            </div>
                            <div className="slide_btn">
                              <Button
                                className="btn btn_green_field m1"
                                variant="outline-success"
                              >
                                Hire an expert
                              </Button>
                              <Button
                                className="btn btn_white_outline m1"
                                variant="success"
                              >
                                Become an expert
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="./images/header_circle_img.png"
                            alt="header circle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cat_name">Categ1</div>
                    <div className="course_name">Cour 1</div>
                  </div>
                </div>

                <div className="slide_view">
                  <div className="slide_bg">
                    <img src="./images/Bg_banner.jpg" alt="banner" />
                  </div>
                  <div className="slide_content">
                    <div className="container">
                      <div className="row slide_box">
                        <div className="col-md-6">
                          <div className="slide_content_left">
                            <div className="slide_title">
                              Learn on your schedule
                            </div>
                            <div className="slide_sub_title">
                              Study any topic, anytime. Choose from thousands of
                              expert-led courses now.
                            </div>
                            <div className="slide_btn">
                              <Button
                                className="btn btn_green_field m1"
                                variant="outline-success"
                              >
                                Hire an expert
                              </Button>
                              <Button
                                className="btn btn_white_outline m1"
                                variant="success"
                              >
                                Become an expert
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="./images/header_circle_img.png"
                            alt="header circle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cat_name">Categ1</div>
                    <div className="course_name">Cour 1</div>
                  </div>
                </div>

                <div className="slide_view">
                  <div className="slide_bg">
                    <img src="./images/Bg_banner.jpg" alt="banner" />
                  </div>
                  <div className="slide_content">
                    <div className="container">
                      <div className="row slide_box">
                        <div className="col-md-6">
                          <div className="slide_content_left">
                            <div className="slide_title">
                              Learn on your schedule
                            </div>
                            <div className="slide_sub_title">
                              Study any topic, anytime. Choose from thousands of
                              expert-led courses now.
                            </div>
                            <div className="slide_btn">
                              <Button
                                className="btn btn_green_field m1"
                                variant="outline-success"
                              >
                                Hire an expert
                              </Button>
                              <Button
                                className="btn btn_white_outline m1"
                                variant="success"
                              >
                                Become an expert
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="./images/header_circle_img.png"
                            alt="header circle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cat_name">Categ1</div>
                    <div className="course_name">Cour 1</div>
                  </div>
                </div>
                <div className="slide_view">
                  <div className="slide_bg">
                    <img src="./images/Bg_banner.jpg" alt="banner" />
                  </div>
                  <div className="slide_content">
                    <div className="container">
                      <div className="row slide_box">
                        <div className="col-md-6">
                          <div className="slide_content_left">
                            <div className="slide_title">
                              Learn on your schedule
                            </div>
                            <div className="slide_sub_title">
                              Study any topic, anytime. Choose from thousands of
                              expert-led courses now.
                            </div>
                            <div className="slide_btn">
                              <Button
                                className="btn btn_green_field m1"
                                variant="outline-success"
                              >
                                Hire an expert
                              </Button>
                              <Button
                                className="btn btn_white_outline m1"
                                variant="success"
                              >
                                Become an expert
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img
                            src="./images/header_circle_img.png"
                            alt="header circle"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="cat_name">Categ1</div>
                    <div className="course_name">Cour 1</div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_buyer_expert ">
        <div className="container">
          <div className="row">
            <div className="section_tab">
              <Tabs
                defaultActiveKey="buyer"
                id="fill-tab-example"
                className="green_tab"
                fill
              >
                <Tab eventKey="buyer" title="Buyer" className="buyer_ul">
                  <div className="buyer_tab">
                    <div className="section_title">
                      Get help with your classes
                    </div>
                    <div className="buyer_boxes">
                      <div className="buyer_single">
                        <div className="buyer_icon">
                          <img
                            src="./images/study_resource.svg"
                            alt="Study Resource"
                          />
                        </div>
                        <div className="buyer_title">Study Resources</div>
                        <div className="buyer_description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </div>
                      </div>
                      <div className="buyer_single">
                        <div className="buyer_icon">
                          <img
                            src="./images/writing_success.svg"
                            alt="Study Resource"
                          />
                        </div>
                        <div className="buyer_title">Writing Services</div>
                        <div className="buyer_description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </div>
                      </div>
                      <div className="buyer_single">
                        <div className="buyer_icon">
                          <img src="./images/expert.svg" alt="Study Resource" />
                        </div>
                        <div className="buyer_title">Expert Q&A</div>
                        <div className="buyer_description">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit.
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="section_tab_in_out services_main">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 flex align_center">
                          <div className="col-md-6">
                            <div className="service_img">
                              <img
                                src="/images/how_it_works.png"
                                alt="how work it"
                              ></img>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="services">
                              <div className="section_title">How It Works</div>
                              <ul className="how_it_works_ul">
                                <li className="how_it_works_li">
                                  <div className="how_title">Post a job</div>
                                  <div className="how_des">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum
                                    dolor sit
                                  </div>
                                </li>
                                <li className="how_it_works_li">
                                  <div className="how_title">
                                    Choose the perfect expert
                                  </div>
                                  <div className="how_des">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum
                                    dolor sit
                                  </div>
                                </li>
                                <li className="how_it_works_li">
                                  <div className="how_title">
                                    Pay when you are satisfied
                                  </div>
                                  <div className="how_des">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Lorem ipsum
                                    dolor sit
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="section_tab_in communication">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 flex align_center">
                          <div className="col-md-6">
                            <div className="communication_sec">
                              <div className="section_title">Communicate</div>
                              <div className="communication_box">
                                <div className="communication_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit.
                                </div>
                                <div className="communication_des">
                                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                                  amet, consectetur adipiscing elit. Lorem ipsum
                                  dolor sit amet, consectetur adipiscing elit.
                                  Lorem ipsum dolor sitLorem ipsum dolor sit
                                  amet, consectetur adipiscing elit.
                                </div>
                                <div className="communication_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit. Lorem
                                  ipsum dolor sit
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="service_img">
                              <img
                                src="/images/communicate.png"
                                alt="communicate"
                              ></img>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="section_tab_in safe_secure">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12 flex align_center">
                          <div className="col-md-5">
                            <div className="service_img">
                              <img
                                src="/images/safe_secure.png"
                                alt="safe_secure"
                              ></img>
                            </div>
                          </div>
                          <div className="col-md-7">
                            <div className="safe_secure_sec">
                              <div className="section_title">
                                Safe and secure
                              </div>
                              <div className="safe_secure_box">
                                <div className="safe_secure_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit.
                                </div>
                                <div className="safe_secure_des">
                                  Lorem ipsum dolor sit Lorem ipsum dolor sit
                                  amet, consectetur adipiscing elit. Lorem ipsum
                                  dolor sit amet, consectetur adipiscing elit.
                                  Lorem ipsum dolor sitLorem ipsum dolor sit
                                  amet, consectetur adipiscing elit.
                                </div>
                                <div className="safe_secure_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Lorem ipsum dolor
                                  sit amet, consectetur adipiscing elit. Lorem
                                  ipsum dolor sit
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="section_tab_in section_cta_one">
                    <div className="container">
                      <div className="row">
                        <div className="cta_box_one">
                          <div className="col-md-12">
                            <div className="cta_content">
                              <div className="cta_title">
                                Find an expert for anything
                              </div>
                              <div className="cta_des">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor
                                si Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor
                                sitLorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </div>

                              <div className="cta_btn ">
                                <button className="btn btn_green_field">
                                  Post a Job
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab>
                <Tab eventKey="expert" title="Expert">
                  <div className="expert_tab">
                    <div className="text_center">
                      <div className="section_title">
                        Earn doing what you love
                      </div>
                      <div className="section_subtitle">
                        How do I get started?
                      </div>
                    </div>
                    <div className="earn">
                      <div className="row flex align_center">
                        <div className="col-md-6">
                          <div className="earn_content">
                            <ul>
                              <li>
                                <div className="earn_title">
                                  1. Complete your profile
                                </div>
                                <div className="earn_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Lorem ipsum dolor
                                  sit Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </div>
                              </li>
                              <li>
                                <div className="earn_title">
                                  2. Browse jobs that suit you
                                </div>
                                <div className="earn_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Lorem ipsum dolor
                                  sit Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </div>
                              </li>
                              <li>
                                <div className="earn_title">
                                  3. Write your best bid
                                </div>
                                <div className="earn_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Lorem ipsum dolor
                                  sit Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </div>
                              </li>
                              <li>
                                <div className="earn_title">
                                  4. Get awarded and earn
                                </div>
                                <div className="earn_des">
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Lorem ipsum dolor sit amet,
                                  consectetur adipiscing elit. Lorem ipsum dolor
                                  sit Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <img src="./images/earn.png" alt="earn" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <section className="section_tab_in section_cta_one">
                    <div className="container">
                      <div className="row">
                        <div className="cta_box_one">
                          <div className="col-md-12">
                            <div className="cta_content">
                              <div className="cta_title">
                                What are you waiting for?
                              </div>
                              <div className="cta_des">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor
                                si Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Lorem ipsum dolor
                                sitLorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.
                              </div>

                              <div className="cta_btn ">
                                <button className="btn btn_green_field">
                                  Browse jobs
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
