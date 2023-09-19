import React from "react";
import "./BidDetailsPage.scss";
import { Badge, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const BidDetailsPage = () => {
  const [show, setShow] = React.useState(false);
  function handleShow() {
    setShow(true);
  }
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <div className="bid-detail-page-con">
              <div className="bid-detail-page-inner-con">
                <div className="bid-detail-page-head-con">
                  <h1 className="bid-detail-page-head">
                    <b>Job details</b>
                  </h1>
                </div>
                <hr />
                <div className="bid-detail-page-question-con">
                  <div className="bid-detail-page-question-head">
                    <b>
                      Question type 1 Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit.
                    </b>
                  </div>
                  <div className="bid-detail-page-question-publish">
                    Posted Jul 15, 2022
                  </div>
                  <div className="bid-detail-page-question-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nunc et nibh ipsum vel aliquam. Neque, fermentum
                    pellentesque in ac mauris dolor a. Dui et molestie in etiam
                    libero felis, etiam. Pellentesque scelerisque nisl, netus
                    at. Tincidunt placerat commodo consectetur netus tristique
                    amet, pharetra, est. Nisi ornare nulla aliquam, pellentesque
                    facilisis. Lorem at elementum egestas purus neque egestas
                    viverra libero odio.
                  </div>
                  <div className="bid-detail-page-question-text2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Risus nunc et nibh ipsum vel aliquam. Neque, fermentum
                    pellentesque in ac mauris dolor a. Dui et molestie in etiam
                    libero felis, etiam. Pellentesque scelerisque nisl, netus
                    at. Tincidunt placerat commodo consectetur netus tristique
                    amet, pharetra, est. Nisi ornare nulla aliquam, pellentesque
                    facilisis. Lorem at elementum egestas purus neque egestas
                    viverra libero odio.
                  </div>
                  <div className="bid-detail-page-question-attachment-con">
                    <div className="bid-detail-page-question-attachment-head">
                      <b>Attachments</b>
                    </div>
                    <div className="bid-detail-page-question-attachment-link">
                      <Link
                        to="https://www.solofornelli.it/30092021/cucina-e-videoludi."
                        className="link-tag"
                      >
                        https://www.solofornelli.it/30092021/cucina-e-videoludi
                      </Link>
                      <Link className="link-tag"> more</Link>
                    </div>
                  </div>
                  <div className="bid-detail-page-question-view-job-post">
                    <Link className="link-tag">
                      <b>View Job Posting</b>
                    </Link>
                  </div>
                </div>
                <hr />
                <div className="bid-detail-page-expert-skill-con">
                  <div className="bid-detail-page-expert-skill-head">
                    <b>Skills and Expertise</b>
                  </div>
                  <div className="bid-detail-page-expert-skill-tags-con">
                    <Badge className="tag">Tag 1</Badge>
                    <Badge className="tag">Tag 2</Badge>
                    <Badge className="tag">Tag 3</Badge>
                  </div>
                </div>
                <hr />
                <div className="bid-detail-page-bid-price-con">
                  <div className="bid-detail-page-bid-price-head">
                    <b>Bid Details</b>
                  </div>
                  <div className="bid-detail-page-bid-price-date-con">
                    <div className="bid-detail-page-bid-price-date-details-con">
                      <div className="bid-detail-page-bid-price-details-head">
                        <b>Your Bid</b>
                      </div>
                      <div className="bid-detail-page-bid-price-details-text">
                        $250.00
                      </div>
                    </div>
                    <div className="bid-detail-page-bid-delevery-dat-con">
                      <div className="bid-detail-page-bid-delevery-date-head">
                        <b>Delivery Date</b>
                      </div>
                      <div className="bid-detail-page-bid-delevery-date-text">
                        20-05-2022
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="bid-detail-page-btn-con">
                  <button
                    className="bid-detail-page-btn"
                    onClick={() => handleShow()}
                  >
                    Cancel Bid
                  </button>
                  <Modal show={show} centered onHide={() => setShow(false)}>
                    <Modal.Body className="modal-body-con">
                      <div className="model-header-content-con">
                        <div
                          onClick={() => setShow(false)}
                          className="model-closed-button"
                          aria-hidden="true"
                        >
                          <b>X</b>
                        </div>
                      </div>
                      <div>
                        <div className="modal-img-con">
                          <img
                            src="./images/tick-mark.png"
                            alt=" tick-mark"
                            className="modal-img"
                          />
                        </div>
                        <div className="model-cong-text">Congratulation</div>
                        <div className="model-content-text">
                          Bid Cancel Successfully
                        </div>
                        <div className="modal-btn-con">
                          <a href="/browsejob">
                            <button className="model-jobpost-content-btn">
                              Ok
                            </button>
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
      </section>
    </>
  );
};
export default BidDetailsPage;
