import React, { useEffect, useState } from "react";
import "../../Home/Home.scss";
import "../Job.scss";
import "./GettingStart.scss";
import { Link, useHistory } from "react-router-dom";

const GettingStart = (props) => {
  const id=props.location.state;
  const history = useHistory();
  const [selected, setSelected] = useState(false);
  const [selectedAsk, setSelectedAsk] = useState(false);
  const [askWriting, setAskWriting] = useState(false);

  function SelectService() {
    setSelected(!selected);
    setSelectedAsk(false);
    setAskWriting(true);
  }

  function SelectAskService() {
    setSelectedAsk(!selectedAsk);
    setSelected(false);
    setAskWriting(true);
  }

  useEffect(()=>{
    localStorage.setItem("job_post_state",JSON.stringify({state:id}))
  },[id])

  // useEffect(()=>{
  //   if(JSON.parse(localStorage.getItem("job_post_state")).id===1 ){
  //     setAskWriting(true);
  //     setSelected(true)
  //     setSelectedAsk(false)
  //   }else{
  //     setAskWriting(true);
  //     setSelected(false)
  //     setSelectedAsk(true)
  //   }
  // },[id])

  const handleClick = () => {
    if (selected && askWriting) {
      history.push({ pathname: "/jobdetail", state: 1 });
      localStorage.setItem("services",1)
    } else if (selectedAsk && askWriting) {
      history.push({ pathname: "/askquestiondetail", state: 2 });
      localStorage.setItem("services",2)
    } else {
      history.push({ pathname: "/", state: 2 });
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li className="current">
                    <Link>
                      <img src="./images/Vector (1).svg" alt="tick" />
                      Getting Started
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="tick"
                      />
                      Job Details
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="tick"
                      />
                      Attachment
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="tick"
                      />
                      Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part">
                <div className="top-part">
                  <h1 className="m-3">Getting Started</h1>
                </div>
                <hr></hr>
                <div className="innr-bottm">
                  <h3>What would you like to do?</h3>

                  <div className="texts">
                    <div className="flex">
                      {selected ? (
                        <div className="box box-border" onClick={SelectService}>
                          <div className="checked">
                            <img src="./images/Vector (3).svg" alt="tick" />
                          </div>
                          <div className="icons">
                            <img src="./images/Vector (2).svg" alt="tick" />
                          </div>
                          <div className="text-part">
                            <div className="heading">Writing Services</div>
                            <p>Connect with highly qualified writers</p>
                          </div>
                        </div>
                      ) : (
                        <div className="box" onClick={SelectService}>
                          <div className="checked-img"></div>
                          <div className="icons">
                            <img src="./images/writing.svg" alt="tick" />
                          </div>
                          <div className="text-part">
                            <div className="heading">Writing Services</div>
                            <p>Connect with highly qualified writers</p>
                          </div>
                        </div>
                      )}

                      {selectedAsk ? (
                        <div
                          className="box box-border"
                          onClick={SelectAskService}
                        >
                          <div className="checked">
                            <img src="./images/Vector (3).svg" alt="tick" />
                          </div>
                          <div className="icons">
                            <img src="./images/Vector (2).svg" alt="tick" />
                          </div>
                          <div className="text-part">
                            <div className="heading">Ask a question</div>
                            <p>Get step-by-step answers from experts</p>
                          </div>
                        </div>
                      ) : (
                        <div className="box" onClick={SelectAskService}>
                          <div className="checked-img"></div>
                          <div className="icons">
                            <img src="./images/writing.svg" alt="tick" />
                          </div>
                          <div className="text-part">
                            <div className="heading">Ask a question</div>
                            <p>Get step-by-step answers from experts</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="bottom-part">
                  {selected || selectedAsk ? (
                    // <Link
                    //   to={
                    //     selected && askWriting
                    //       ? "/jobdetail"
                    //       : "/askquestiondetail"
                    //   }
                    // >
                    <button
                      className="getting-continue-btn"
                      onClick={handleClick}
                    >
                      Continue
                    </button>
                  ) : (
                    // </Link>
                    <button className="getting-continue-btn-disable">
                      Continue
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default GettingStart;
