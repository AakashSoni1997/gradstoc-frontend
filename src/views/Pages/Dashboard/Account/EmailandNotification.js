import React from "react";
import "./EmailandNotification.scss";
import { Form } from "react-bootstrap";
import { Title } from "../../../Components/Title/Title";

const EmailandNotification = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md">
            <Title headtitle="Email & Notifications" />
            <div className="notification-con">
              <div className="notification-con__head-con">
                <div className="notification-con__head-con__head">
                  <b>Notifications</b>
                </div>
              </div>
              <div className="notification-drop-down-con">
                <div className="row">
                  <div className="col-md-6">
                    <Form>
                      <Form.Group>
                        <Form.Label className="show-notification--label">
                          Show notifications for :
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">All Activity</option>
                          <option value="2">School 2</option>
                          <option value="3">Schoool 3</option>
                        </Form.Select>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md">
                    <div className="email-send-notification-con">
                      <div className="email-send-notification-con__email">
                        <b>Email</b>
                      </div>
                      <span className="email-send-notification-con__email--send">
                        (sending to a******34@gmail.com)
                      </span>
                    </div>
                  </div>
                </div>
                <Form>
                  <div className="row">
                    <div className="col-md-6">
                      <Form.Group>
                        <Form.Label className="show-notification--label email-unreads">
                          Send an email with unread activity for :
                        </Form.Label>
                        <Form.Select aria-label="Default select example">
                          <option value="1">All Activity</option>
                          <option value="2">School 2</option>
                          <option value="3">Schoool 3</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                    <div className="col-md-6">
                      <Form.Group>
                        <Form.Select
                          aria-label="Default select example"
                          className="timer-select-list"
                        >
                          <option value="1">Every 15 minutes</option>
                          <option value="2">School 2</option>
                          <option value="3">Schoool 3</option>
                        </Form.Select>
                      </Form.Group>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EmailandNotification;
