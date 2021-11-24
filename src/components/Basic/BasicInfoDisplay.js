import React from "react";
import "./basic_info.css";

function BasicInfoDisplay({basicInfo}) {

    return (
        <div className = "display-basic">
            <div>{basicInfo.firstName} {basicInfo.lastName}</div>
            <div>
                <div>{basicInfo.email}</div>
                <div>{basicInfo.phoneNo}</div>
            </div>
        </div>
    )
}

export default BasicInfoDisplay;
