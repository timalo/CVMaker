import { useState } from "react";

export default function JobInput(props) {
  function handleJobSubmit(e) {
    e.preventDefault();
    console.log("submit job!");
    let newJob = {};
  }

  function deleteJob(e) {
    e.preventDefault();
    console.log("delete!");
  }

  function cancelJobSubmit(e) {
    e.preventDefault();
    console.log("cancel job input!");
    props.setSelectedJob({});
    props.showJobForm(false);
  }

  return (
    <div className="jobInput inputItem">
      <label>
        Company:
        <input placeholder="Company Name"></input>
      </label>
      <label>
        Position:
        <input placeholder="Position"></input>
      </label>
      <label>
        Start Date:
        <input type="month"></input>
      </label>
      <label>
        End Date:
        <input type="month"></input>
      </label>
      <label>Description:</label>
      <textarea
        rows="5"
        className="descriptionInput"
        placeholder="Job Description"
      ></textarea>
      <div className="buttonsDiv">
        <button className="deleteBtn" onClick={deleteJob}>
          Delete
        </button>
        <button className="cancelBtn" onClick={cancelJobSubmit}>
          Cancel
        </button>
        <button className="saveBtn" onClick={handleJobSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}
