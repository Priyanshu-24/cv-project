import React from "react";
import { useState } from "react";
import "./basic_info.css";

function Basic_Info({update_basic_info}) {

    const [basicInfo, setBasicInfo] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNo: "",
    });

    function enter_basic_info(e) {

      e.preventDefault();

      const name = e.target.name;
      const value = e.target.value;

      setBasicInfo((basicInfo) => {
        return { ...basicInfo, [name]: value };
      });

    }

  return (
    <div className = "container">

      <div className = "heading">Enter General Information:</div>

      <div>
        <label>Enter First Name: </label>

        <input
          type="text"
          placeholder="First Name"
          value={basicInfo.firstName}
          name="firstName"
          onChange={(e) => {
            enter_basic_info(e);
          }}
        />
      </div>

      <div>
        <label>Enter Last Name: </label>
        <input
          type="text"
          placeholder="Last Name"
          value={basicInfo.lastName}
          name="lastName"
          onChange={(e) => {
            enter_basic_info(e);
          }}
        />
      </div>

      <div>
        <label>Enter Email Address: </label>
        <input
          type="email"
          placeholder="Email Address"
          value={basicInfo.email}
          name="email"
          onChange={(e) => {
            enter_basic_info(e);
          }}
        />
      </div>

      <div>
        <label>Enter Phone Number: </label>
        <input
          type="tel"
          placeholder="Phone Number"
          value={basicInfo.phoneNo}
          name="phoneNo"
          onChange={(e) => {
            enter_basic_info(e);
          }}
        />
      </div>

      <div>
        <button
          onClick={(e) => {
            e.preventDefault();

            if (
              basicInfo.firstName === "" ||
              basicInfo.lastName === "" ||
              basicInfo.email === "" ||
              basicInfo.phoneNo === ""
            )
              alert("Enter all the fields and in correct format");
              
            else {
              update_basic_info(basicInfo);

              setBasicInfo({
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
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

export default Basic_Info;
