import React from "react";
import "./skill.css";

function SkillDisplay({skills, delete_skill}) {

    return (
        
        skills.map((e) => {
            return(
                <div className = "display-skill">
                    <div>{e.name}</div>
                    <div>
                        <button onClick = {(x) => {

                            x.preventDefault();
                            delete_skill(e.key);

                        }}> X </button>
                    </div>
                </div>
            )
        })

    )
}

export default SkillDisplay
