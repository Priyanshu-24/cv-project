import React from "react";
import "./education.css";

function EducationDisplay({education, delete_education}) {

    return (

        education.map((e) => {
            return(
                <div className = "display-edu">
                    <div>College/School: {e.schoolName}</div>
                    <div>Course: {e.courseName}</div>
                    <div>From {e.dateBegin} to {e.dateEnd}</div>
                    <div>
                        <button onClick = {(x) => {

                            x.preventDefault();
                            delete_education(e.key);

                        }}>Delete</button>
                    </div>
                </div>
            )
        })

    );
};

export default EducationDisplay;
