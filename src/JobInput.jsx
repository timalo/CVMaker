import { useState } from "react";

export default function JobInput() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="jobInput inputItem">
      <label>
        Company:
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          placeholder="Company Name"
        ></input>
      </label>
      <label>
        Position:
        <input
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
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
      <label>
        Description:
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
        ></input>
      </label>
      <br />
      <div className="buttonsDiv">
        <button className="newJobBtn">+</button>
        <button className="removeJobBtn">-</button>
      </div>
    </div>
  );
}
