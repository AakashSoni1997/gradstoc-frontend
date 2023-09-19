import React, { useEffect, useState } from "react";
// import Form from "react-bootstrap/Form";
import "../../Home/Home.scss";
import "../Job.scss";
import "./JobDetails.scss";
import { Link, useHistory } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FieldText } from "../../../Components/NewInputField/NewInputField";
import { useDispatch } from "react-redux";
import {
  GetCategoryList,
  GetCountryList,
  GetCourseList,
  GetSchoolList,
  PostStateList,
  PostSubCategoryList,
  PostSubjectList,
} from "../../../../redux/actions/jobPostAction";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment/moment";
import Select from "react-select";
import MultiSelect from "../../../Components/MultiSelect/MultiSelect";
import { BsCurrencyDollar } from "react-icons/bs";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required!"),
  description: Yup.string().required("Required!"),
  document_type: Yup.string().required("document_type Required!"),
  categoryid: Yup.string().required(" category is Required!"),
  sub_cat_id: Yup.string().required("Required!"),
  school_id: Yup.string().required("Required!"),
  course_id: Yup.string().required("Required!"),
  subject_id: Yup.string().required("Required!"),
  tags: Yup.array().required("Required!"),
  pages: Yup.string()
    .min(1, "Please Select Any value!")
    .required("pages Required!"),
  due_date: Yup.string().required("Required!"),
  budget: Yup.string().required("Required!"),
  country_id: Yup.string().required("Required!"),
  state_id: Yup.string().required("Required!"), 
});

const JobDetails = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isSubmit, setIsSubmit] = useState(false)

  const userid = props.location.state;
  const [detailState, setDetailState] = useState({
    userid,
  });

  const [date, setDate] = useState(new Date());
  const categoryList = useSelector(
    (state) => state?.jobpost?.category_list_success
  );
  const subCategoryList = useSelector(
    (state) => state?.jobpost?.sub_category_list_success
  );
  const schoolList = useSelector(
    (state) => state?.jobpost?.school_list_success
  );
  const courseList = useSelector(
    (state) => state?.jobpost?.course_list_success
  );
  const subjectList = useSelector(
    (state) => state?.jobpost?.subject_list_success
  );
  const countryList = useSelector(
    (state) => state?.jobpost?.country_list_success
  );
  const stateList = useSelector((state) => state?.jobpost?.state_list_success);

  useEffect(() => {
    dispatch(GetCategoryList());
    dispatch(GetSchoolList());
    dispatch(GetCourseList());
    dispatch(GetCountryList());
  }, [dispatch]);

  useEffect(() => {
    if (detailState?.categoryid) {
      dispatch(PostSubCategoryList({ id: detailState?.categoryid }));
    }
  }, [detailState?.categoryid, dispatch]);
  useEffect(() => {
    if (detailState?.course_id) {
      dispatch(PostSubjectList({ id: detailState?.course_id }));
    }
  }, [detailState?.course_id, dispatch]);

  useEffect(() => {
    if (detailState?.country_id) {
      dispatch(PostStateList({ id: detailState?.country_id }));
    }
  }, [detailState?.country_id, dispatch]);

  const handleChanges = ({ target: { name, value } }) => {
    // console.log(name,value,"sdsadasdasdasdasd");
    setDetailState({ ...detailState, [name]: value });
     
  };

  const handlePreviousStep = () => {
    history.push({ pathname: "/postingjob", state: userid });
  };
  const handleContinue = (values) => {
    setIsSubmit(true);
    localStorage.setItem("job_post_state",JSON.stringify({state:values}))
    history.push({pathname:"/attachment",state:detailState})
  };

 

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
                      <img src="./images/green-tick.svg" alt="icon" />
                      <span className=" current-active">Getting Started </span>
                    </Link>
                  </li>
                  <li className="current">
                    <Link>
                      <img src="./images/dark-tick.svg" alt="icon" />
                      Job Details
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="icon"
                      />
                      Attachment
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <img
                        className="change-color"
                        src="./images/Vector (1).svg"
                        alt="icon"
                      />
                      Review
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-10">
              <Formik
                initialValues={{
                  title: "",
                  description: "",
                  document_type: "",
                  categoryid: "",
                  sub_cat_id: "",
                  school_id: "",
                  course_id: "",
                  subject_id: "",
                  tags: "",
                  pages: "",
                  due_date: "",
                  budget: "",
                  country_id: "",
                  state_id: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleContinue}
              >
                {(formik) => (
                  <div className="right-part part-2">
                    {console.log(formik.errors,"errrorsssss")}
                    <div className="top-part">
                      <h1>Document Details</h1>
                    </div>
                    <hr></hr>
                    <div className="innr-bottm">
                      <div className="label-part">
                        <Form onChange={handleChanges}>
                          <div className="mb-3">
                            <div className="job-details-requred-lable">
                              <b>Document Title </b>
                              <span className="job-details-requred-text">
                                (Required)
                              </span>
                            </div>
                            <FieldText
                              className={"form-control"}
                              placeholder="title"
                              name="title"
                              errors={formik.errors}
                              onChange={formik.handleChange}
                            />
                          </div>
                          <div className="desctiption-form-tags">
                            <div className="job-details-requred-lable">
                              <b>Description</b>
                              <span className="job-details-requred-text">
                                (Required)
                              </span>
                            </div>
                            <Field
                              name="description"
                              placeholder="Description"
                              rows={8}
                              className="form-control textarea"
                              as="textarea"
                            ></Field>
                            <ErrorMessage
                              name="description"
                              component={(errors) => (
                                <div className="validation-text">
                                  {errors.children}
                                </div>
                              )}
                            ></ErrorMessage>
                          </div>
                          <div className="row desctiption-form-tags">
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Document type</b>
                              </div>
                              <FieldText
                                className={"form-control"}
                                placeholder="title"
                                name="document_type"
                                errors={formik.errors}
                                onChange={formik.handleChange}
                              />
                            </div>
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Pages</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="pages"
                                name="pages"
                              >
                                <option value="">---Select Page----</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                              </Field>
                              {formik.errors.pages && formik.touched.pages && (
                                <div className="validation-text">
                                  {formik.errors.pages}
                                </div>
                              )}
                            </div>
                          </div>
                          <div className="row desctiption-form-tags">
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Choose Category</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="categoryid"
                                name="categoryid"
                              >
                                <option value="">---Select Page----</option>
                                {categoryList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.category_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.categoryid &&
                                formik.touched.categoryid && (
                                  <div className="validation-text">
                                    {formik.errors.categoryid}
                                  </div>
                                )}
                            </div>
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Choose Sub Category</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="sub_cat_id"
                                name="sub_cat_id"
                              >
                                <option value="">
                                  ---Select Sub Category----
                                </option>
                                {subCategoryList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.sub_cat_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.sub_cat_id &&
                                formik.touched.sub_cat_id && (
                                  <div className="validation-text">
                                    {formik.errors.sub_cat_id}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="row desctiption-form-tags">
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>School</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="school_id"
                                name="school_id"
                              >
                                <option value="">---Select School----</option>
                                {schoolList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.school_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.school_id &&
                                formik.touched.school_id && (
                                  <div className="validation-text">
                                    {formik.errors.school_id}
                                  </div>
                                )}
                            </div>
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Course</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="course_id"
                                name="course_id"
                              >
                                <option value="">---Select Course----</option>
                                {courseList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.course_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.course_id &&
                                formik.touched.course_id && (
                                  <div className="validation-text">
                                    {formik.errors.course_id}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="row desctiption-form-tags">
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Subject</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="subject_id"
                                name="subject_id"
                              >
                                <option value="">---Select Subject----</option>
                                {subjectList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.subject_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.subject_id &&
                                formik.touched.subject_id && (
                                  <div className="validation-text">
                                    {formik.errors.subject_id}
                                  </div>
                                )}
                            </div>
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Tags</b>
                              </div>
                              <Field
                                className="form-control"
                                name="tags"
                                id="tags"
                                placeholder="----Select Tags----  "
                                isMulti={true}
                                component={MultiSelect}
                                options={[
                                  { value: "one", label: "One" },
                                  { value: "two", label: "Two" },
                                  { value: "three", label: "Three" },
                                ]}
                              />
                              {formik.errors.tag_id &&
                                formik.touched.tag_id && (
                                  <div className="validation-text">
                                    {formik.errors.tag_id}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="row desctiption-form-tags">
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Country</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="country_id"
                                name="country_id"
                              >
                                <option value="">---Select Page----</option>
                                {countryList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.country_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.country_id &&
                                formik.touched.country_id && (
                                  <div className="validation-text">
                                    {formik.errors.country_id}
                                  </div>
                                )}
                            </div>
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>State</b>
                              </div>
                              <Field
                                as="select"
                                className={"form-control"}
                                placeholder="state_id"
                                name="state_id"
                              >
                                <option value="">
                                  ---Select Sub Category----
                                </option>
                                {stateList.map((elem, index) => (
                                  <option
                                    key={elem.id}
                                    name="id"
                                    value={elem.id}
                                  >
                                    {elem.state_name}
                                  </option>
                                ))}
                              </Field>
                              {formik.errors.state_id &&
                                formik.touched.state_id && (
                                  <div className="validation-text">
                                    {formik.errors.state_id}
                                  </div>
                                )}
                            </div>
                          </div>
                          <div className="row desctiption-form-tags">
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Due Date</b>
                              </div>
                              <Field name="due_date">
                                {({ field, form, meta }) => {
                                  const { setFieldValue } = form;
                                  return (
                                    <DatePicker
                                      showYearDropdown
                                      yearDropdownItemNumber={2}
                                      showMonthDropdown
                                      dateFormat={"dd-MM-yyyy"}
                                      selected={date}
                                      onChange={(value) => {
                                        setDate(value);
                                        setFieldValue(
                                          field.name,
                                          moment(value).format("DD-MM-YYYY")
                                        );
                                      }}
                                      placeholderText="DD-MM-YYYY"
                                      className="form-control"
                                    />
                                  );
                                }}
                              </Field>
                            </div>
                            <div className="col-md-6">
                              <div className="job-details-requred-lable">
                                <b>Budget</b>
                              </div>
                              <FieldText
                              type={"string"}
                                className={"form-control"}
                                placeholder="Budget"
                                name="budget"
                                errors={formik.errors}
                                onChange={formik.handleChange}
                                startAdament={BsCurrencyDollar}
                              />
                            </div>
                          </div>
                          <div className="bottom-part mt-5">
                            <button
                              onClick={handlePreviousStep}
                              className="jobdetails-cancel-btn"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="jobdetails-continue-btn"
                            >
                              Continue
                            </button>
                          </div>
                        </Form>
                      </div>
                    </div>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default JobDetails;
