import React from "react";
import { MDBRow, MDBContainer } from "mdb-react-ui-kit";
import { Chart } from "react-google-charts";
import { FaChartBar, FaChartArea } from "react-icons/fa";

// Pie Chart Data
const Piedata = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

// Optional
const Pieoptions = {
  title: "My Daily Activities",
};

// Area Chart Data
const Areadata = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

const Areaoptions = {
  title: "Company Performance",
  hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
  vAxis: { minValue: 0 },
  chartArea: { width: "70%", height: "70%" },
};

// Bar Chart Data
const Bardata = [
  ["Year", "Sales", "Expenses"],
  ["2014", 1000, 400],
  ["2015", 1170, 460],
  ["2016", 660, 1120],
  ["2017", 1030, 540],
];

const Baroptions = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales and Expenses over the Years",
  },
};

export default function Dashboard() {
  return (
    <>
      <h2 className="mt-5">DashBoard</h2>
      <MDBRow className="d-flex g-3 p-1 justify-content-center">
        <div className="col-md-3">
          <div className=" dashboard-card bg-primary text-white p-5">
            <h4>Total Cust</h4>
            <h3 className="text-center">
              <span className="badge bg-danger">10</span>
            </h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-success dashboard-card text-white p-5">
            <h4>Total Orders</h4>
            <h3 className="text-center">
              <span className="badge bg-warning text-dark">25</span>
            </h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-info dashboard-card text-white p-5">
            <h4>Pending Task</h4>
            <h3 className="text-center">
              <span className="badge bg-secondary">7</span>
            </h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="bg-dark dashboard-card text-white p-5">
            <h4>Messages</h4>
            <h3 className="text-center">
              <span className="badge bg-light text-dark">12</span>
            </h3>
          </div>
        </div>
      </MDBRow>
      <Chart
        chartType="PieChart"
        data={Piedata}
        options={Pieoptions}
        width={"100%"}
        height={"400px"}
        className="mt-5"
      />

      <MDBRow className="mt-2 g-4 p-4 d-flex justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-secondary text-black">
              <h4 className="text-start fs-5">
                <FaChartArea className="me-2"></FaChartArea>Area Chart
              </h4>
            </div>
            <div className="card-body">
              <Chart
                chartType="AreaChart"
                data={Areadata}
                options={Areaoptions}
                width={"100%"}
                height={"400px"}
              />{" "}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header bg-secondary text-black">
              <h4 className="text-start fs-5">
                {" "}
                <FaChartBar className="me-2"></FaChartBar>
                Bar Chart
              </h4>
            </div>
            <div className="card-body">
              <Chart
                // Note the usage of Bar and not BarChart for the material version
                chartType="Bar"
                data={Bardata}
                options={Baroptions}
                width={"100%"}
                height={"400px"}
              />
            </div>
          </div>
        </div>
      </MDBRow>
    </>
  );
}
