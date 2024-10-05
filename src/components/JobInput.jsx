export default function JobInput(props) {
  function handleJobSubmit(e) {
    e.preventDefault();
    if (!props.selectedJob.id) {
      //New edu since no id yet
      let newJob = { ...props.selectedJob, id: crypto.randomUUID() };
      props.setJobs([...props.jobList, newJob]);
      props.setSelectedJob({});
      props.showJobForm(false);
    } else {
      //id exists so we're editing.
      let updatedJobList = props.jobList.map((job) => {
        return job.id === props.selectedJob.id ? props.selectedJob : job;
      });
      props.setJobs(updatedJobList);
      props.setSelectedJob({});
      props.showJobForm(false);
    }
  }

  function deleteJob(e) {
    e.preventDefault();
    let updatedJobList = props.jobList.filter(
      (job) => job.id !== props.selectedJob.id
    );
    props.setJobs(updatedJobList);
    props.setSelectedJob({});
    props.showJobForm(false);
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
          onChange={(e) =>
            props.setSelectedJob({
              ...props.selectedJob,
              startDate: e.target.value,
            })
          }
          value={props.selectedJob.startDate}
        ></input>
      </label>
      <label>
        End Date:
        <input
          type="month"
          onChange={(e) =>
            props.setSelectedJob({
              ...props.selectedJob,
              endDate: e.target.value,
            })
          }
          value={props.selectedJob.endDate}
        ></input>
      </label>
      <label>Description:</label>
      <textarea
        required
        onChange={(e) =>
          props.setSelectedJob({
            ...props.selectedJob,
            description: e.target.value,
          })
        }
        value={props.selectedJob.description}
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
