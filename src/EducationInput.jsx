import { useState } from "react";

export default function EducationInput() {
  const [school, setSchool] = useState("School Name");
  const [degree, setDegree] = useState("Degree");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="educationItem">
      <label>
        School:
        <input
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          placeholder="School Name"
        ></input>
      </label>
      <label>
        Degree:
        <input
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree"
        ></input>
      </label>
      <label>
        Start Date:
        <input
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
      </label>
      <label>
        End Date:
        <input
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
      </label>
      <br />
      <div className="buttonsDiv">
        <button className="newEduBtn">+</button>
        <button className="removeEduBtn">-</button>
      </div>
    </div>
  );
}
