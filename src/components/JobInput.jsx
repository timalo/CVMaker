export default function JobInput(props) {
  function handleJobSubmit(e) {
    e.preventDefault();
    console.log("submit job!");
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
        <input
          placeholder="Company Name"
          required
          onChange={(e) =>
            props.setSelectedJob({
              ...props.selectedJob,
              company: e.target.value,
            })
          }
          value={props.selectedJob.company}
        ></input>
      </label>
      <label>
        Position:
        <input
          placeholder="Position"
          required
          onChange={(e) =>
            props.setSelectedJob({
              ...props.selectedJob,
              title: e.target.value,
            })
          }
          value={props.selectedJob.title}
        ></input>
      </label>
      <label>
        Start Date:
        <input
          type="month"
          required
          onChange={(e) =>
            props.setSelectedJob({
              ...props.selectedJob,
              endDate: e.target.value,
            })
          }
          value={props.selectedJob.startDate}
        ></input>
      </label>
      <label>
        End Date:
        <input type="month"></input>
      </label>
      <label>Description:</label>
      <textarea
        required
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
