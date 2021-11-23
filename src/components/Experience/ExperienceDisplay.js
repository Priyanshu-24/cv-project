import React from "react";

function ExperienceDisplay({experience, delete_experience}) {

    return (

        experience.map((e) => {

            return(
                <div>
                    <div>{e.companyName}</div>
                    <div>{e.designation}</div>
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
