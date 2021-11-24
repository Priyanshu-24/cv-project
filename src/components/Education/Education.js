import React from "react";
import { useState } from "react";

function Education({update_education}) {

  const [education, setEducation] = useState({
    schoolName: "",
    courseName: "",
    dateBegin: "",
    dateEnd: ""
  });

  function enter_education(e) {

    e.preventDefault();

    const name = e.target.name;
    const value = e.target.value;

    setEducation((education) => {
      return { ...education, [name]: value };
    });
  }

  return (
    <div className = "container">
      <div className = "heading">Enter Educational Details: </div>
      <div>
        <label>Enter School/College Name: </label>
        <input
          type="text"
          placeholder="School/College Name"
          value={education.schoolName}
          name="schoolName"
          onChange={(e) => enter_education(e)}
        />
      </div>

      <div>
        <label>Enter Course Name: </label>
        <input
          type="text"
          placeholder="Course Name"
          value={education.courseName}
          name="courseName"
          onChange={(e) => enter_education(e)}
        />
      </div>

      <div>
        <label>Enter Date of Joining: </label>
        <input
          type="date"
          placeholder="Date of Joining"
          value={education.dateBegin}
          name="dateBegin"
          onChange={(e) => enter_education(e)}
        />
      </div>

      <div>
        <label>Enter Date of Ending: </label>
        <input
          type="date"
          placeholder="Date of Ending"
          value={education.dateEnd}
          name="dateEnd"
          onChange={(e) => enter_education(e)}
        />
      </div>

      <div>
        <button
          onClick={(e) => {

            e.preventDefault();

            if (
              education.schoolName === "" ||
              education.courseName === "" ||
              education.dateBegin === "" ||
              education.dateEnd === ""
            )
              alert("Enter all required fields");

            else {

              update_education(education);

              setEducation({
                schoolName: "",
                courseName: "",
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

export default Education;
