import { useState } from "react";
import BasicInfoInput from "./BasicInfoInput.jsx";
import EducationInput from "./EducationInput.jsx";
import JobInput from "./JobInput.jsx";

export default function CVMaker() {
  const [educationList, setEducationList] = useState([]);
  const [jobList, setJobList] = useState([]);
  //Should this ^ be here? Lol dunno, move somewhere else if needed.

  return (
    <div className="content">
      <div className="inputsDiv">
        <div className="basicInfoDiv">
          <BasicInfoInput />
        </div>
        <div className="educationsDiv">
          <EducationInput />
        </div>
        <div className="jobsDiv">
          <JobInput />
        </div>
      </div>
      <div className="CVDiv">
        <div className="CVContainer"></div>
      </div>
    </div>
  );
}
