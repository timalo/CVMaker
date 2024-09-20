//import { useState } from "react";
import BasicInfoInput from "./BasicInfoInput.jsx";
import EducationInput from "./EducationInput.jsx";
import JobInput from "./JobInput.jsx";

export default function CVMaker() {
  /*   const [educationList, setEducationList] = useState([]);
  const [jobList, setJobList] = useState([]); */
  //Should this ^ be here? Lol dunno, move somewhere else if needed.

  return (
    <div className="content">
      <div className="inputsDiv">
        <div className="basicInfoDiv inputDiv">
          <h2>Basic info</h2>
          <hr />
          <BasicInfoInput />
        </div>
        <div className="educationsDiv inputDiv">
          <h2>Education</h2>
          <hr />
          <EducationInput />
          <div className="buttonsDiv">
            <button className="newEduBtn">+</button>
            <button className="removeEduBtn">-</button>
          </div>
        </div>
        <div className="jobsDiv inputDiv">
          <h2>Work Experience</h2>
          <hr />
          <JobInput />
        </div>
      </div>
      <div className="CVDiv">
        <div className="CVContainer"></div>
      </div>
    </div>
  );
}
