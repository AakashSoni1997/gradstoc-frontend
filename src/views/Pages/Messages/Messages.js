import React from "react";
import "./Messages.scss";

const Messages = () => {
  return (
    <>
      <section>
        <div className="row">
          <div className="col-md-4">
            <div className="message-users-list-con">
              <div className="message-users-list-header-con">
                <div className="message-users-list-head-con">
                  <h1 className="message-users-list-head">
                    <b>Messaging</b>
                  </h1>
                </div>
                <div className="message-users-list-img-con">
                  <div className="message-users-list-share-img-con">
                    <img src="./images/shareBtn.svg" alt="share mes" />
                  </div>
                  {/* <div className="message-users-list-more-img-con">
                                        <img src="./images/3dot.svg"
                                            alt="dots"
                                        />
                                    </div> */}
                </div>
              </div>
              <hr />
              <div className="message-all-user-list-con">
                <div className="message-all-user-search-bar">
                  <div className="message-all-user-search-bar-icon-con">
                    <img
                      className="message-all-user-search-icon"
                      src="./images/search-icon.svg"
                      alt=" Search Icon"
                    />
                  </div>
                  <div className="message-all-user-search-bar-input-con">
                    <input
                      type="text"
                      placeholder="Search Message"
                      className="message-all-user-search-bar-input"
                    />
                    {/* <div className="message-all-user-search-bar-img-con">
                                            <img src="./images/more_option.svg"
                                                className="message-all-user-search-bar-img-more"
                                                alt="more option"
                                            />
                                        </div> */}
                  </div>
                </div>
              </div>
              <div className="message-all-user-list-view-con message-active">
                <div className="message-all-user-list-view-profile">
                  <img
                    src="./images/profile_pic.png"
                    alt="profile pic"
                    className="message-all-user-list-view-profile-pic"
                  />
                  <div className="message-all-user-active-icon">
                    <img
                      src="./images/status-icon.svg"
                      className="message-all-user-active-icon-img"
                      alt="status icon"
                    />
                  </div>
                </div>
                <div className="message-all-user-message-over-view">
                  <div className="message-all-user-message-over-view-name-time-con">
                    <div className="message-all-user-message-over-view-name">
                      <b>Luke Hobbs</b>
                    </div>
                    <div className="message-all-user-message-over-view-time">
                      12:20 PM
                    </div>
                  </div>
                  <div className="message-all-user-message-over-view-text">
                    Message type of the style lorem ipsum
                  </div>
                </div>
              </div>
              <div className="message-all-user-list-view-con">
                <div className="message-all-user-list-view-profile">
                  <img
                    src="./images/profile_pic.png"
                    alt="profile pic"
                    className="message-all-user-list-view-profile-pic"
                  />
                </div>
                <div className="message-all-user-message-over-view">
                  <div className="message-all-user-message-over-view-name-time-con">
                    <div className="message-all-user-message-over-view-name">
                      <b>Domnick</b>
                    </div>
                    <div className="message-all-user-message-over-view-time">
                      12:20 PM
                    </div>
                  </div>
                  <div className="message-all-user-message-over-view-text">
                    Message type of the style lorem ipsum
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="message-users-list-con">
              <div className="message-user-chat-con">
                <div className="message-user-chat-header-con">
                  <div className="message-user-chat-header-profile-name-con">
                    <div className="message-user-chat-header-profile-con">
                      <img
                        src="./images/profile_pic.png"
                        alt="profile"
                        className="message-user-chat-header-profile-img"
                      />
                    </div>
                    <div className="message-user-chat-header-name-con">
                      <div className="message-user-chat-header-name">
                        <b>Luke Hobbs</b>
                      </div>
                      <div className="message-user-chat-header-online-status">
                        <img
                          src="./images/status-icon.svg"
                          alt="status icon"
                          className="message-user-chat-header-online-status-icon"
                        />
                        <div className="message-user-chat-header-online-status-text">
                          online
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="message-user-chat-header-delete-con">
                    <img
                      src="./images/delete-icon.svg"
                      alt="delete icon"
                      className="message-user-chat-header-delete-icon"
                    />
                  </div>
                </div>
                <hr />
                <div className="message-user-chat-section-con">
                  <div className="message-user-chat-section-today-chats-con">
                    <div className="message-user-chat-section-today-chats-bar">
                      <span className="message-user-chat-section-today-chats-bar-text">
                        Today
                      </span>
                    </div>
                  </div>
                  <div className="message-user-chat-section-user-text-left">
                    <div className="message-user-chat-section-user-text-left-img-con">
                      <img
                        src="./images/profile_pic.png"
                        alt="user pic"
                        className="message-user-chat-section-user-text-left-img"
                      />
                    </div>
                    <div className="message-user-chat-section-user-text-left-text-con">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At arcu, sit sodales eget nisi, aenean hac. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. At arcu, sit
                      sodales eget nisi, aenean hac.
                    </div>
                  </div>
                  <div className="message-user-chat-section-user-text-right">
                    <div className="message-user-chat-section-user-text-right-subcon">
                      <div className="message-user-chat-section-user-text-right-text-con">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>

                      <div className="message-user-chat-section-user-text-right-img-con">
                        <img
                          src="./images/profile_pic.png"
                          alt="profile "
                          className="message-user-chat-section-user-text-right-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="message-user-chat-section-user-text-right">
                    <div className="message-user-chat-section-user-text-right-subcon">
                      <div className="message-user-chat-section-user-text-right-text-con">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                      </div>

                      <div className="message-user-chat-section-user-text-right-img-con">
                        <img
                          src="./images/profile_pic.png"
                          alt="profile "
                          className="message-user-chat-section-user-text-right-img"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="message-user-chat-section-user-text-left">
                    <div className="message-user-chat-section-user-text-left-img-con">
                      <img
                        src="./images/profile_pic.png"
                        alt="user pic"
                        className="message-user-chat-section-user-text-left-img"
                      />
                    </div>
                    <div className="message-user-chat-section-user-text-left-text-con">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      At arcu, sit sodales eget nisi, aenean hac. Lorem ipsum
                      dolor sit amet, consectetur adipiscing elit. At arcu, sit
                      sodales eget nisi, aenean hac.
                    </div>
                  </div>
                  <hr />

                  <div className="message-user-chat-section-user-writing-sec">
                    <input
                      type="text"
                      placeholder="Write a message"
                      className="message-user-chat-section-user-writing-sec-input"
                    />
                    <div className="message-user-chat-section-user-writing-sec-img-con">
                      <img src="./images/emoji.svg" alt="emoji" />
                      <img src="./images/share-pic.svg" alt="share pic" />
                      <img
                        src="./images/share-attachment.svg"
                        alt=" attachment"
                      />
                      <img src="./images/text-enter.svg" alt="enter" />
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
export default Messages;
