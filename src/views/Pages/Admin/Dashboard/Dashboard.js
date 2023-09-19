import React from "react";
import "./Dashboard.scss";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Pieblue from "../../../../Assets/images/pie-blue.svg";
import Piegreen from "../../../../Assets/images/pie-green.svg";
import LineGraph from "../../../../Assets/images/Line-graph.png";
import { ButtonGroup } from "react-bootstrap";
import Charts from "react-apexcharts";

const AdminDashboard = () => {
  ChartJS.register(ArcElement, Legend);
  const data = {
    ArcElement: ["400", "600"],
    datasets: [
      {
        data: [400, 600],
        backgroundColor: ["#00346F", "#37A000"],
        borderColor: "#ffffff",
        borderWidth: 2,
        value: [400, 600],
      },
    ],
  };
  return (
    <>
      <section className="admin-dashboard-sec">
        <div className="admin-dashboard-sec__head-con">
          <div className="admin-dashboard-sec__head-con__head">
            <b>Dashboard</b>
          </div>
        </div>
        <div className="admin-dashboard-sec__cards">
          <div className="row">
            <div className="col-md-3">
              <div className="admin-dashboard-sec__cards__card-con">
                <div className="admin-dashboard-sec__cards__card-con__text">
                  <b>Plans</b>
                </div>
                <div className="admin-dashboard-sec__cards__card-con__number">
                  200
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="admin-dashboard-sec__cards__card-con">
                <div className="admin-dashboard-sec__cards__card-con__text">
                  <b>Jobs</b>
                </div>
                <div className="admin-dashboard-sec__cards__card-con__number">
                  500
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="admin-dashboard-sec__cards__card-con">
                <div className="admin-dashboard-sec__cards__card-con__text">
                  <b>Study Resources</b>
                </div>
                <div className="admin-dashboard-sec__cards__card-con__number">
                  300
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="admin-dashboard-sec__cards__card-con">
                <div className="admin-dashboard-sec__cards__card-con__text">
                  <b>Earnings</b>
                </div>
                <div className="admin-dashboard-sec__cards__card-con__number">
                  $2000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-dashboard-sec__charts">
          <div className="row">
            <div className="col-md-5">
              <div className="admin-dashboard-sec__charts__pie-chart-con">
                <div className="admin-dashboard-sec__charts__pie-chart-con__head-con">
                  <div className="admin-dashboard-sec__charts__pie-chart-con__head-con__head">
                    <b>Total Members</b>
                  </div>
                </div>
                <hr />
                <div className="admin-dashboard-sec__charts__pie-chart-con__pie-chart">
                  <Pie data={data} width="190px" height="190px" />
                </div>
                <div className="admin-dashboard-sec__charts__pie-chart-con__total-users-con">
                  <div className="admin-dashboard-sec__charts__pie-chart-con__total-users-con__data">
                    Total Members <b>1000</b>
                  </div>
                </div>
                <div className="admin-dashboard-sec__charts__pie-chart-con__pic-indicator-con">
                  <div className="admin-dashboard-sec__charts__pie-chart-con__pic-indicator-con__green-con">
                    <img src={Piegreen} alt="green" />
                    <div className="admin-dashboard-sec__charts__pie-chart-con__pic-indicator-con__green-con__text">
                      Students
                    </div>
                  </div>
                  <div className="admin-dashboard-sec__charts__pie-chart-con__pic-indicator-con__blue-con">
                    <img src={Pieblue} alt="blue" />
                    <div className="admin-dashboard-sec__charts__pie-chart-con__pic-indicator-con__blue-con__text">
                      Experts
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="admin-dashboard-sec__charts__bar-graph-con">
                <div className="admin-dashboard-sec__charts__bar-graph-con__head-con">
                  <div className="admin-dashboard-sec__charts__bar-graph-con__head-con__head">
                    <b>Earnings Overview</b>
                  </div>
                  <div className="admin-dashboard-sec__charts__bar-graph-con__head-con__btn-con">
                    <ButtonGroup className="btn-group">
                      <button className="admin-dashboard-sec__charts__bar-graph-con__head-con__btn-con__btn-day">
                        Day
                      </button>
                      <button className="admin-dashboard-sec__charts__bar-graph-con__head-con__btn-con__btn-week">
                        Week
                      </button>
                      <button className="admin-dashboard-sec__charts__bar-graph-con__head-con__btn-con__btn-month">
                        Month
                      </button>
                    </ButtonGroup>
                  </div>
                </div>
                <hr />
                <div className="admin-dashboard-sec__charts__bar-graph-con__bar-graph">
                  <Charts
                    type="bar"
                    width={550}
                    height={293}
                    series={[
                      {
                        name: "Months",
                        data: [20, 30, 50, 10, 40, 60, 90, 100, 80, 70, 90, 40],
                      },
                    ]}
                    options={{
                      chart: {
                        toolbar: {
                          show: false,
                        },
                      },
                      xaxis: {
                        categories: [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apli",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec",
                        ],
                        tooltip: {
                          show: false,
                        },
                      },
                      yaxis: {
                        // min: 0,
                        // max: 20000,
                        // tickAmount: 5,
                        type: "category",
                        categories: ["0", "1k", "5k", "10k", "15k", "20k"],
                      },
                      colors: ["#37A000"],
                    }}
                  ></Charts>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="admin-dashboard-sec__line-chart">
          <div className="admin-dashboard-sec__line-chart__line-chart-con">
            <div className="admin-dashboard-sec__line-chart__line-chart-con__head-con">
              <div className="admin-dashboard-sec__line-chart__line-chart-con__head-con__head">
                <b>Plans Overview</b>
              </div>
            </div>
            <hr />
            <div className="admin-dashboard-sec__line-chart__line-chart-con__line-con">
              <img src={LineGraph} alt="line" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default AdminDashboard;
