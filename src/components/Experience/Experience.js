import React from "react";
import { useState } from "react";

function Experience({update_experience}) {

  const [experience, setExperience] = useState({
    companyName: "",
    designation: "",
    dateBegin: "",
    dateEnd: "",
  });

  function enter_experience(e) {

    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setExperience((experience) => {
      return { ...experience, [name]: value };
    });
  }

  return (
    <div className = "container">
      <div className = "heading">Enter Work Experience: </div>

      <div>
        <label>Enter Company's Name: </label>
        <input
          type="text"
          placeholder="Company's Name"
          value={experience.companyName}
          name="companyName"
          onChange={(e) => enter_experience(e)}
        />
      </div>

      <div>
        <label>Enter Designation: </label>
        <input
          type="text"
          placeholder="Designation"
          value={experience.designation}
          name="designation"
          onChange={(e) => enter_experience(e)}
        />
      </div>

      <div>
        <label>Enter Joining Date: </label>
        <input
          type="date"
          value={experience.dateBegin}
          name="dateBegin"
          onChange={(e) => enter_experience(e)}
        />
      </div>

      <div>
        <label>Enter Completion Date: </label>
        <input
          type="date"
          value={experience.dateEnd}
          name="dateEnd"
          onChange={(e) => enter_experience(e)}
        />
      </div>

      <div>
        <button
          onClick={(e) => {

            e.preventDefault();

            if (
              experience.companyName === "" ||
              experience.designation === "" ||
              experience.dateBegin === "" ||
              experience.dateEnd === ""
            )alert("Enter all required fields");

            else {

              update_experience(experience);

              setExperience({
                companyName: "",
                designation: "",
                dateBegin: "",
                dateEnd: "",
              });

            }
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default Experience;
