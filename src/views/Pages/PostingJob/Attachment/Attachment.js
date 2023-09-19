import React, { useEffect, useState } from "react";
import "../../Home/Home.scss";
import "../Job.scss";
import "./Attachment.scss";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import getCurrentHost from "../../../../redux/constants";
import { authHeader } from "../../../../redux/actions/authHeader";
import { toast } from "react-toastify";

const Attachment = () => {
  const history = useHistory();
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [fileName, setFileName] = useState("");
  const [docs, setDocs] = useState([]);

  const handleFileChange = (event) => {
    setFiles((prevState) => [...prevState, event.target.files[0]]);
    setFileName(event.target.files[0].name);
    let formData = new FormData();
    formData.append("file", event.target.files[0]);
    axios
      .post(getCurrentHost() + "/doc_upload", formData, {
        onUploadProgress: (progressEvent) => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );
          setProgress(progress);
        },
        headers: {
          Accept: "multipart/form-data",
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((res) => {
        const { message, data } = res.data;
        toast.success(message);
        setDocs((prevState) => [...docs, data]);
      })
      .catch((err) => console.log(err, "err"));
  };

  // useEffect(() => {
  //   if (files?.length > 0) {
  //     localStorage.setItem("document_files", JSON.files);
  //   }
  // }, [files]);

  // useEffect(() => {
  //   if (
  //     files?.length === 0 &&
  //     localStorage.getItem("document_files")?.length > 0
  //   ) {
  //     setFiles(localStorage.getItem("document_files"));
  //   }
  // }, [files]);

  useEffect(() => {
    localStorage.setItem("docs", JSON.stringify(docs));
    if (files.length > 0) {
      let fileArr = files.map((ele, index) => {
        return [ele.name, ele.size];
      });
      localStorage.setItem("fileArr",JSON.stringify(fileArr));
    }
  }, [docs,files]);

  const handleUpload = () => {
    if (docs.length > 0) {
      history.push({ pathname: "/review" });
    }
  };

  const handleDelete = (name) => {
    const FilteredArray = files.filter((ele) => ele?.name !== name);
    setFiles(FilteredArray);
  };

  console.log(files, "filess213");

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="left-side-menu">
                <ul>
                  <li>
                    <Link to="/postingjob">
                      <img src="./images/green-tick.svg" alt="tick" />
                      <span className=" current-active">Getting Started</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/jobdetail">
                      <img src="./images/green-tick.svg" alt="tick" />
                      <span className=" current-active"> Job Details</span>
                    </Link>
                  </li>
                  <li className="current">
                    <Link>
                      <img src="./images/dark-tick.svg" alt="tick" />
                      Attachment
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        src="./images/Vector (1).svg"
                        className="change-color"
                        alt="tick"
                      />
                      Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <div className="right-part part-2">
                <div className="top-part">
                  <h1 className="m-3">Attachment</h1>
                </div>
                <hr></hr>
                <div className="uploading-file">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="innr-bottm">
                        <h3>Upload file</h3>
                        <div className="picture-file">
                          <img
                            src="./images/Group 829.svg"
                            className="dropdrage-pic"
                            alt="group"
                          />
                          <div className="drag_n_drop-text">
                            Drag & Drop files or select a document to upload
                          </div>
                          <div className="upload_btn">
                            <input
                              onChange={handleFileChange}
                              id="fileUp"
                              type="file"
                              multiple
                              hidden
                              accept="image/png, image/gif, image/jpeg, application/pdf "
                            />
                            <label
                              for="fileUp"
                              className="btn btn_green_field ml0 my-5 pt-2"
                            >
                              Upload Document
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="pdf-all-progess-con">
                        <h3 className="pdf-head-text">Attached files</h3>
                        {files.map((elem, index) => (
                          <div className="uploadfile-progess mt-3">
                            <div className="pdf-icon ">
                              <img
                                src="./images/progress-pdf.svg"
                                alt="pdf-icon"
                              />
                            </div>
                            <div className="progess-text-con">
                              <div className="name-cross-icon-con">
                                <p className="pdf-file-name">{elem.name}</p>
                                <img
                                  onClick={() => handleDelete(elem.name)}
                                  src="./images/progress-cross.svg"
                                  alt="poster"
                                  className="pdf-file-cross"
                                />
                              </div>
                              <p className="pdf-file-size">
                                {elem.size / (1024 * 1024)}mb
                              </p>
                              {progress && (
                                <div class="progress">
                                  <div
                                    class="progress-bar progress-bar-striped"
                                    role="progressbar"
                                    style={{
                                      width: `${
                                        elem.name === fileName ? progress : 100
                                      }%`,
                                      backgroundColor: "#37a000",
                                    }}
                                    aria-valuenow="10"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              )}
                              {elem.name === fileName ? progress : 100}%
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="bottom-part mt-5">
                  <button className="attachment-cancel-btn">Cancel</button>
                  <button
                    onClick={handleUpload}
                    className="attachment-continue-btn"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Attachment;
