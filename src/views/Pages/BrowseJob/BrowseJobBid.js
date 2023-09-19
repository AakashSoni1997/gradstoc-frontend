import React from "react";
import "./BrowseJobBid.scss";
import { Badge, Form, InputGroup } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import { ButtonColor } from "../../Components/Button/Button";

const BrowseJobBid = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-9">
            <div className="row">
              <div className="col-md">
                <div className="browsejobbid-con">
                  <div className="browsejobbid-head-con">
                    <div className="browsejobbid-head-subcon">
                      <h1 className="browsejobbid-head">
                        <b>
                          Question type 1 Lorem ipsum dolor sit amet,
                          consectetur...
                        </b>
                      </h1>
                    </div>
                    <div className="browsejobbid-price-bid-con">
                      <div className="browsejobbid-price-con">
                        <div className="browsejobbid-price">
                          <b>$300 </b>
                          <span className="browsejobbid-price-currency">
                            USD
                          </span>
                        </div>
                      </div>
                      <div className="browsejobbid-bid-con">
                        <div className="browsejobbid-bid">
                          <b>15 Bids</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="browsejobbid-buyer-con">
                    <div className="browsejobbid-buyer-subject">
                      <span className="browsejobbid-buyer-subject-color">
                        <b>Science</b>
                      </span>
                      ( 2 days left )
                    </div>
                    <div className="browsejobbid-buyer-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc lacus eget facilisis lacus. Eleifend quis viverra
                      pharetra orci in vestibulum vel. Id egestas a lectus
                      sagittis sed. Justo dictumst nulla elementum donec
                      scelerisque in penatibus sem rutrum.
                    </div>
                    <div className="browsejobbid-buyer-tage">
                      <Badge className="tag">Tag 1</Badge>
                      <Badge className="tag">Tag 2</Badge>
                      <Badge className="tag">Tag 3</Badge>
                    </div>
                  </div>

                  <div className="browsejobbid-about-buyer-con">
                    <div className="browsejobbid-about-buyer-text">
                      <b>About the Buyer.</b>
                    </div>
                    <div className="browsejobbid-about-buyer-profile-pic">
                      <div className="browsejobbid-about-buyer-profile-pic-img-con">
                        <img
                          src="./images/buyerpic.svg"
                          className="browsejobbid-about-buyer-profile-pic-img"
                          alt="profile pic"
                        />
                      </div>
                      <div className="browsejobbid-about-buyer-profile-pic-name-con">
                        <div className="browsejobbid-about-buyer-profile-pic-name">
                          <b>Luke Hobbs</b>
                        </div>
                        <div className="browsejobbid-about-buyer-profile-pic-country">
                          USA
                        </div>
                      </div>
                    </div>
                    <div className="browsejobbid-about-buyer-rating-con">
                      <div className="browsejobbid-about-buyer-rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label htmlFor="star5" title="text">
                          5 stars
                        </label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label htmlFor="star4" title="text">
                          4 stars
                        </label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label htmlFor="star3" title="text">
                          3 stars
                        </label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label htmlFor="star2" title="text">
                          2 stars
                        </label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label htmlFor="star1" title="text">
                          1 star
                        </label>
                      </div>
                      <div className="rate_value">
                        <b>(5)</b>
                      </div>
                      <div className="browsejobbid-about-buyer-membership-con">
                        Member since: 1 year
                      </div>
                    </div>
                    <div className="browsejobbid-about-buyer-job-id">
                      <b>Job ID: </b>27580701
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div className="browsejobbid-con">
                  <div className="browsejobbid-work-offer-con">
                    <div className="browsejobbid-work-offer-head-con">
                      <h1 className="browsejobbid-work-offer-head">
                        <b>Offer to work on this job now</b>
                      </h1>
                    </div>
                    <hr />
                    <div className="browsejobbid-work-offer-details-con">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="browsejobbid-work-offer-details-bid-con">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="lable-price-of-bid">
                                <b>Your bid for this job</b>
                              </Form.Label>
                              <InputGroup className="mb-3">
                                <Form.Control
                                  placeholder="Your Bid"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  className="price-of-bid"
                                />
                                <InputGroup.Text id="basic-addon1">
                                  USD
                                </InputGroup.Text>
                              </InputGroup>
                            </Form.Group>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="browsejobbid-work-offer-details-date-con">
                            <Form.Group
                              className="mb-3"
                              controlId="exampleForm.ControlInput1"
                            >
                              <Form.Label className="lable-price-of-bid">
                                <b>Delivery Date</b>
                              </Form.Label>
                              <Form.Control
                                type="calender"
                                placeholder="20/10/2020"
                                className="price-of-bid"
                              />
                            </Form.Group>
                            <div className="calender-img-con">
                              <img
                                src="./images/calender.svg"
                                className="calender-img-icon"
                                alt="calender"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col des-con-Browse">
                          <Form.Group
                            className="mb-3 "
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label className="lable-price-of-bid">
                              <b>Describe your proposal</b>
                            </Form.Label>
                            <Form.Control
                              as="textarea"
                              rows={10}
                              className="des-group"
                              placeholder="Introduce yourself and explain why you’re a great fit for this job. "
                            />
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                    <div className="max-char-box">
                      <span className="max-char-text">5000 character max</span>
                    </div>
                    <div className="browsejobbid-work-offer-details-attachment-con">
                      <div className="browsejobbid-work-offer-details-attachment-head">
                        <b>Attachments</b>
                      </div>
                      <div className="browse-job-attachment-btn-con">
                        <div className="browsejob-attachment-upload-load-btn">
                          <button className="browsejobbid-work-offer-details-btn">
                            Upload Attachment
                          </button>
                        </div>
                        <div className="review-attachment-pdf-content">
                          <div className="review-attachment-pdf-img-con">
                            <img
                              src="./images/progress-pdf.svg"
                              alt="pdf icon"
                            />
                          </div>
                          <div className="review-attachment-pdf-content-con">
                            <div className="review-attachment-pdf-content-name-delete-con">
                              <p className="review-attachment-pdf-name">
                                <b>File name type 1</b>
                              </p>
                              <img
                                src="./images/delete-icon-green.svg"
                                className="review-attachment-pdf-delete"
                                alt="delete"
                              />
                            </div>
                            <p className="review-attachment-pdf-size">3.2 MB</p>
                            <div
                              className="review-attachment-progress-bar
                               "
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="browsejobbid-work-offer-details-btn-con">
                      <button
                        className="browsejobbid-work-offer-details-btn"
                        onClick={() => handleShow()}
                      >
                        Bid on This Job
                      </button>
                      <Modal
                        show={show}
                        centered
                        backdrop="static"
                        keyboard={false}
                        onHide={() => setShow(false)}
                      >
                        <Modal.Body>
                          <div className="model-header-content-con">
                            <div className="model-header-content-con__head">
                              <b>Successful</b>
                            </div>
                            <div className="model-header-content-con__img-con">
                              <img
                                src="./images/Crossbtn.svg"
                                alt="Cross btn"
                                onClick={handleClose}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="modal-img-con">
                              <img
                                src="./images/tick-marks.png"
                                alt=" tick-mark"
                                className="modal-img-con__img"
                              />
                            </div>
                            <div className="bid-model-content-text">
                              <b>Bid Successfully Placed</b>
                            </div>
                            <div className="bid-modal-btn-con">
                              <a href="/biddetailspage">
                                <ButtonColor buttonText="Done" />
                              </a>
                            </div>
                          </div>
                        </Modal.Body>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md">
                <div className="outer-container">
                  <div className="browsejobbid-con">
                    <div className="outer-container-all-bid">
                      <div className="all-bit-head-con">
                        <h1 className="all-bit-head">
                          <b>All Bids</b>
                        </h1>
                      </div>
                      <hr />
                      <div className="all-bit-person-detail-con">
                        <div className="all-bit-person-profile-con">
                          <div className="all-bit-person-profile-pic-con">
                            <img
                              src="./images/buyerpic.svg"
                              alt="poster"
                              className="all-bit-person-profile-img"
                            />
                          </div>
                          <div className="all-bit-person-profile-text-con">
                            <div className="all-bit-person-profile-username">
                              <b>Luke Hobbs</b> ( 2 days left )
                            </div>
                            <div className="all-bit-person-profile-country ">
                              <b>USA</b>
                            </div>
                            <div className="all-bit-person-profile-rating">
                              <div className="browsejobbid-about-buyer-rate">
                                <input
                                  type="radio"
                                  id="star5"
                                  name="rate"
                                  value="5"
                                />
                                <label htmlFor="star5" title="text">
                                  5 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star4"
                                  name="rate"
                                  value="4"
                                />
                                <label htmlFor="star4" title="text">
                                  4 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star3"
                                  name="rate"
                                  value="3"
                                />
                                <label htmlFor="star3" title="text">
                                  3 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star2"
                                  name="rate"
                                  value="2"
                                />
                                <label htmlFor="star2" title="text">
                                  2 stars
                                </label>
                                <input
                                  type="radio"
                                  id="star1"
                                  name="rate"
                                  value="1"
                                />
                                <label htmlFor="star1" title="text">
                                  1 star
                                </label>
                              </div>
                              <div className="rate_value rate-vlaue-con">
                                <b>(5)</b>
                              </div>
                            </div>
                            <div className="all-bit-person-profile-text">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nunc lacus eget facilisis lacus. Eleifend
                              quis viverra pharetra orci in vestibulum vel. Id
                              egestas a lectus sagittis sed. Justo dictumst
                              nulla elementum donec scelerisque in penatibus sem
                              rutrum.
                            </div>
                          </div>
                        </div>
                        <div className="all-bit-person-bit-price-con">
                          <div className="all-bit-person-bit-price">
                            <b>$30 </b>USD
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md">
                <div className="browsejobbid-con">
                  <div className="similar-job-con">
                    <div className="similar-job-head-con">
                      <h1 className="similar-job-head">Similar jobs</h1>
                    </div>
                    <hr />
                    <div className="alllist-con">
                      <div className="all-items-dot-img-con">
                        <img src="./images/dot-img.svg" alt=" dots" />
                      </div>
                      <div className="all-items-text-con">
                        Lorem ipsum dolor sit amet, consectetur -3 ($15-25 USD /
                        hour)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BrowseJobBid;
