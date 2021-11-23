import React from "react";

function EducationDisplay({education, delete_education}) {

    return (

        education.map((e) => {
            return(
                <div>
                    <div>{e.schoolName}</div>
                    <div>{e.courseName}</div>
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
