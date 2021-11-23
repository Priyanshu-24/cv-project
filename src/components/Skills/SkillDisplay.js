import React from "react";

function SkillDisplay({skills, delete_skill}) {

    return (
        
        skills.map((e) => {
            return(
                <div>
                    <div>{e.name}</div>
                    <div>
                        <button onClick = {(x) => {

                            x.preventDefault();
                            delete_skill(e.key);

                        }}>Delete</button>
                    </div>
                </div>
            )
        })

    )
}

export default SkillDisplay
