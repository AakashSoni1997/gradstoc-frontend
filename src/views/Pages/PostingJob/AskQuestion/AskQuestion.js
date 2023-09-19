import React from "react";
import "./AskQuestion.scss";
import { Accordion } from "react-bootstrap";

const AskQuestion = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <div className="ask-question-con">
              <div className="ask-question-head-con">
                <h1 className="ask-question-head">
                  <b>Frequently Asked Questions</b>
                </h1>
              </div>
              <hr />
              <div className="ask-question-accordion-con">
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="ask-accordion-header-text">
                      <b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </b>
                    </Accordion.Header>
                    <div className="ask-question-down-arrow-con">
                      <img
                        className="ask-question-down-arrow-img"
                        src="./images/downarrow-ask.svg"
                        alt=" down-arrow"
                      />
                    </div>
                    <Accordion.Body className="ask-accordion-body-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>

              <div className="ask-question-accordion-con">
                <Accordion className="des-con">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="ask-accordion-header-text">
                      <b>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </b>
                    </Accordion.Header>
                    <div className="ask-question-down-arrow-con">
                      <img
                        className="ask-question-down-arrow-img"
                        src="./images/downarrow-ask.svg"
                        alt=" down-arrow"
                      />
                    </div>
                    <Accordion.Body className="ask-accordion-body-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>

            <div className="ask-question-bottom-con">
              <div className="row">
                <div className="col-md">
                  <div className="ask-question-bottom-content-con">
                    <div className="ask-question-bottom-content-subcon">
                      <h1 className="ask-question-bottom-content-head">
                        Still Need Help?
                      </h1>
                      <div className="ask-question-bottom-content-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Auctor habitant donec lorem id vel a fermentum.
                        Sagittis,
                      </div>
                    </div>
                    <div className="ask-question-bottom-btn-con">
                      <button className="ask-question-bottom-content-btn">
                        Contact Support
                      </button>
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
export default AskQuestion;
