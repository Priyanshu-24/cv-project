import React from "react";
import { useState } from "react";

function Skills({update_skill}) {

    const [skills, setSkills] = useState({name: ""});

    function enter_skill(e) {

        e.preventDefault();

        const name = e.target.name;
        const value = e.target.value;

        setSkills((skills) => {
          return { ...skills, [name]: value };
        });
      }

    return (
        <div className = "container">
            <div className = "heading">Add Skills:</div>
            <div>
                <input type = "text" placeholder = "Enter Skill" value = {skills.name} name = "name" onChange = {(e) => enter_skill(e)}/>
            </div>
            <div>
                <button onClick = {(e) => {

                e.preventDefault();

                if(skills.name === "")
                alert("Enter Required Field");

                else{
                    update_skill(skills);
                    setSkills({name: ""})
                }

                }}>Save</button>
            </div>
        </div>
    )
}

export default Skills;
