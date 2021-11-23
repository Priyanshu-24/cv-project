import "./App.css";
import { useState } from "react";

import BasicInfo from "./components/Basic/BasicInfo";
import BasicInfoDisplay from "./components/Basic/BasicInfoDisplay";
import Education from "./components/Education/Education";
import EducationDisplay from "./components/Education/EducationDisplay";
import Skills from "./components/Skills/Skills";
import SkillDisplay from "./components/Skills/SkillDisplay";
import Experience from "./components/Experience/Experience";
import ExperienceDisplay from "./components/Experience/ExperienceDisplay";

let idx_edu = 0;
let idx_skill = 0;
let idx_experience = 0;


function App() {

  const [basicInfo, setBasicInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
  });


  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState([]);

  const update_basic_info = ({ firstName, lastName, email, phoneNo }) =>
    setBasicInfo({ firstName, lastName, email, phoneNo });


  const update_education = (e) => {

    setEducation ((education) => {

      idx_edu++;
      e["key"] = idx_edu;
      return [e, ...education];

    })

  };


  const update_skill = (e) => {

    setSkills((skills) => {

      idx_skill++;
      e["key"] = idx_skill;
      return [e, ...skills];

    })

  };


  const update_experience = (e) => {

    setExperience((experience) => {

      idx_experience++;
      e["key"] = idx_experience;
      return [e, ...experience];
    })
  };


  const delete_education = idx => setEducation(() => education.filter((e) => e.key !== idx));
  const delete_skill = idx => setSkills(() => skills.filter((e) => e.key !== idx));
  const delete_experience = idx => setExperience(() => experience.filter((e) => e.key !== idx));



  return (
    <div className="App">

      <div className="input-fields">
        <BasicInfo update_basic_info = {update_basic_info}/>
        <hr/>
        <Education update_education = {update_education}/>
        <hr/>
        <Skills update_skill = {update_skill}/>
        <hr/>
        <Experience update_experience = {update_experience}/>
      </div>

      <div className="display-items">
        <BasicInfoDisplay basicInfo = {basicInfo}/>
        <EducationDisplay education = {education} delete_education = {delete_education}/>
        <SkillDisplay skills = {skills} delete_skill = {delete_skill}/>
        <ExperienceDisplay experience = {experience} delete_experience = {delete_experience}/>
      </div>

    </div>
  );
}

export default App;
