import React from "react";
import "./BillingInformation.scss";
import { Table } from "react-bootstrap";
import { Title } from "../../../Components/Title/Title";

const BillingInformation = () => {
  return (
    <>
      <Title headtitle="Billing Information" />
      <div className="billing-information-con">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="billing-information-con__table-head">
                <b>Plan Name</b>
              </th>
              <td className="billing-information-con__table-text">Monthly</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="billing-information-con__table-head">
                <b>Payment Mode</b>
              </th>
              <td className="billing-information-con__table-text">
                Net Banking
              </td>
            </tr>
            <tr>
              <th className="billing-information-con__table-head">
                <b>Payment Date</b>
              </th>
              <td className="billing-information-con__table-text">
                2023/01/12
              </td>
            </tr>
            <tr>
              <th className="billing-information-con__table-head">
                <b>Amount</b>
              </th>
              <td className="billing-information-con__table-text">$9.99</td>
            </tr>
            <tr>
              <th className="billing-information-con__table-head">
                <b>Tax</b>
              </th>
              <td className="billing-information-con__table-text">$0.22</td>
            </tr>
            <tr>
              <th className="billing-information-con__table-head">
                <b>Total</b>
              </th>
              <td className="billing-information-con__table-text">$10.11</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default BillingInformation;
