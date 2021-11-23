import React from "react";

function BasicInfoDisplay({basicInfo}) {

    return (
        <div>
            <div>{basicInfo.firstName} {basicInfo.lastName}</div>
            <div>
                <div>{basicInfo.email}</div>
                <div>{basicInfo.phoneNo}</div>
            </div>
        </div>
    )
}

export default BasicInfoDisplay;
