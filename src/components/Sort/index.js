import React from "react";

function Sort(props) {
    return (


        <div>
            <p>Click an option to Sort Employees:</p>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick={() => props.sortEmployeesName()} className="btn btn-primary">Last Name</button>
                <button type="button" onClick={() => props.sortEmployeesYears()} className="btn btn-success">Years with Company</button>
                <button type="button" onClick={() => props.sortEmployeesCategory()} className="btn btn-primary">Category</button>
            </div>

        </div>


    );
}

export default Sort;