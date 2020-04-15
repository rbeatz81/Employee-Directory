import React from "react";
import "./style.css";

function EmployeeCard(props) {



  return (
    <div className="card">

      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.first} {props.last}
          </li>
          <li>
            <strong>Years with Company:</strong> {props.years}
          </li>
          <li>
            <strong>Category:</strong> {props.category}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        𝘅
      </span>
    </div>
  );
}

export default EmployeeCard;
