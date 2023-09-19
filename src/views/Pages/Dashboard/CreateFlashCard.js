import React from "react";
import "./Dashboard.scss";
import "./CreateFlashCard.scss";
import { Form, Accordion } from "react-bootstrap";
import { Modal } from "react-bootstrap";
const CreateFlashCard = () => {
  const [show, setShow] = React.useState(false);
  function handleShow() {
    setShow(true);
  }

  return (
    <>
      <section>
        <div>
          <div className="row">
            <div className="col-md-4">
              <div className="left-side-menu flowchats-menu">
                <div className="top-part">
                  <h1 className="m-3">Create Flashcards</h1>
                </div>
                <hr></hr>
                <div className="uploading_file">
                  <div className="row">
                    <div className="innr-bottm">
                      <p className="require-title">
                        <b>Title</b> (Required)
                      </p>
                      <Form.Control type="text" className="title-box" />
                    </div>
                    <div className="innr-bottm">
                      <p className="require-title">
                        <b>Description</b> (Required)
                      </p>
                      <Form.Group
                        className="mb-5"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Control
                          as="textarea"
                          className=" description-box"
                          rows={8}
                        />
                      </Form.Group>
                    </div>
                    <div className="flow-btn">
                      <button className="flashcard-add-btn">Add</button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="left-side-menu flowchats-menu-sub">
                                <div className="uploading_file">
                                    <div className="row">
                                        <div className="innr-bottm"><p className="require-title"><b>Title</b> (Required)
                                        </p>
                                            <Form.Control type="text" className="title-box" />
                                        </div>
                                        <div className="innr-bottm"><p className="require-title"><b>Description</b> (Required)
                                        </p>
                                            <Form.Control type="text" className="description-box" />
                                        </div>
                                        <div className="flow-btn">
                                            <button className="btn btn-primary fill">Add</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
            </div>
            <div className="col-md-8">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1 className="m-3">Flashcards</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm">
                  <Accordion>
                    <Accordion.Item
                      eventKey="0"
                      className="accordion-flow-main-con"
                    >
                      <Accordion.Header className="accordaion-flow-header">
                        <div className="accordion-flow-con">
                          <h1 className="accordion-flow-head">
                            What is the national capital on India?
                          </h1>
                          <p className="accordion-flow-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Aenean commodo ligula eget dolor. Aenean
                            massa. Cum sociis natoque penati bus et magnis dis
                            parturient montes...
                          </p>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body className="accordion-flow-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className="bottom-img-con">
                    <img
                      src="./images/flashcarddropdown.svg"
                      alt="arrow "
                      className="bottom-backgound-img-con"
                    />
                  </div>
                </div>
                <hr></hr>
                <div className="price-flow-con">
                  <h3 className="price-flow-head">
                    <b>Price</b>
                  </h3>
                  <h3 className="price-flow-head">
                    <b>Enter price</b>
                  </h3>
                  <Form.Control type="text" className="price-flow-box" />
                  <Form.Check
                    type="checkbox"
                    label="Free"
                    className="price-flow-check"
                  />
                </div>
                <hr />
                <div className="flow-bottom-part">
                  <button className="flashcard-btn-delete">Delete</button>
                  <button
                    className="flashcard-btn-create"
                    onClick={() => handleShow()}
                  >
                    Create Flashcard
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
                          Create Flashcard Successfully
                        </div>
                        <div className="modal-btn-con">
                          <a href="/studyresources">
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
export default CreateFlashCard;
