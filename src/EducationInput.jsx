import { useState } from "react";

export default function EducationInput() {
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="educationItem inputItem">
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
          type="month"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        ></input>
      </label>
      <label>
        End Date:
        <input
          type="month"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        ></input>
      </label>
    </div>
  );
}
