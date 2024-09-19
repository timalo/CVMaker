import { useState } from "react";

export default function JobInput() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState(""); //Use month/year dropdowns here?
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="jobInput">
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
      <label>
        Description:
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
