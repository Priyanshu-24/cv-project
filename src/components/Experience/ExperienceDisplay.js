import React from "react";
import "./experience.css";

function ExperienceDisplay({experience, delete_experience}) {

    return (

        experience.map((e) => {

            return(
                <div className = "display-exp">
                    <div>Company's Name: {e.companyName}</div>
                    <div>Designation: {e.designation}</div>
                    <div>From {e.dateBegin} to {e.dateEnd}</div>
                    <div>
                        <button onClick = {(x) => {
                            x.preventDefault();
                            delete_experience(e.key);
                        }}>Delete</button>
                    </div>
                </div>
            )
        })
    )
}

export default ExperienceDisplay;
